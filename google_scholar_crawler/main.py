import json
from datetime import datetime, timezone
from html.parser import HTMLParser
import os
from pathlib import Path
import time
from urllib.error import HTTPError, URLError
from urllib.parse import parse_qs, urlencode, urlparse
from urllib.request import Request, urlopen


RETRY_ATTEMPTS = 3
RETRY_DELAYS_SECONDS = (20, 60)
CHALLENGE_MARKERS = ('unusual traffic', 'not a robot', 'recaptcha', 'sorry')

class ProfileParser(HTMLParser):
    """Read the total and visible papers from a single public profile request."""
    def __init__(self):
        super().__init__()
        self.stack = []
        self.counts = []
        self.publications = {}
        self.row = None
        self.capture = None
        self.text = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        classes = attrs.get('class', '').split()
        if tag not in {'br', 'img', 'input', 'meta', 'link', 'hr'}:
            self.stack.append(tag)
        if tag == 'tr' and 'gsc_a_tr' in classes:
            self.row = {'bib': {}, 'num_citations': 0}
        field = None
        if tag == 'td' and 'gsc_rsb_std' in classes:
            field = 'total'
        elif tag == 'a' and 'gsc_a_at' in classes and self.row is not None:
            query = parse_qs(urlparse(attrs.get('href', '')).query)
            self.row['author_pub_id'] = query.get('citation_for_view', [''])[0]
            field = 'title'
        elif tag == 'a' and 'gsc_a_ac' in classes and self.row is not None:
            field = 'paper-count'
        if field:
            self.capture = (field, len(self.stack), tag)
            self.text = []

    def handle_data(self, data):
        if self.capture:
            self.text.append(data)

    def handle_endtag(self, tag):
        if self.capture and self.capture[1:] == (len(self.stack), tag):
            field = self.capture[0]
            value = ''.join(self.text).strip()
            if field == 'total':
                self.counts.append(int(value.replace(',', '')))
            elif field == 'title':
                self.row['bib']['title'] = value
            elif field == 'paper-count':
                self.row['num_citations'] = int(value.replace(',', '') or '0')
            self.capture = None
        if tag == 'tr' and self.row is not None:
            key = self.row.get('author_pub_id')
            if key and self.row['bib'].get('title'):
                self.publications[key] = self.row
            self.row = None
        if self.stack and self.stack[-1] == tag:
            self.stack.pop()


def read_url(url):
    request = Request(url, headers={
        'User-Agent': ('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 '
                       '(KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'),
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
    })
    with urlopen(request, timeout=30) as response:
        return response.read().decode('utf-8')


def invalid_response_summary(page):
    normalized_page = ' '.join(page.split())
    lower_page = normalized_page.lower()
    markers = [marker for marker in CHALLENGE_MARKERS if marker in lower_page]
    marker_summary = ', '.join(markers) if markers else 'none'
    return (f'Google Scholar returned no citation statistics '
            f'(response length: {len(page)}; challenge markers: {marker_summary}; '
            f'preview: {normalized_page[:160]!r}).')


def fetch_google_profile(scholar_id, attempts=RETRY_ATTEMPTS,
                         fetcher=read_url, sleep=time.sleep):
    if attempts < 1:
        raise ValueError('attempts must be at least one.')

    query = urlencode({'user': scholar_id, 'hl': 'en', 'pagesize': 100})
    profile_url = 'https://scholar.google.com/citations?' + query
    last_error = None

    for attempt in range(attempts):
        try:
            page = fetcher(profile_url)
            parser = ProfileParser()
            parser.feed(page)
            if len(parser.counts) >= 2:
                return {'scholar_id': scholar_id, 'citedby': parser.counts[0],
                        'updated': datetime.now(timezone.utc).isoformat(),
                        'publications': parser.publications,
                        'source': 'Google Scholar public profile',
                        'publication_scope': 'First profile page, up to 100 papers'}
            last_error = RuntimeError(invalid_response_summary(page))
        except (HTTPError, URLError, TimeoutError) as error:
            last_error = error

        if attempt < attempts - 1:
            delay_seconds = RETRY_DELAYS_SECONDS[min(attempt, len(RETRY_DELAYS_SECONDS) - 1)]
            print(f'Google Scholar fetch attempt {attempt + 1} failed: {last_error}. '
                  f'Retrying in {delay_seconds} seconds.')
            sleep(delay_seconds)

    raise RuntimeError(f'Google Scholar fetch failed after {attempts} attempts: {last_error}') from last_error


if __name__ == '__main__':
    author = fetch_google_profile(os.environ['GOOGLE_SCHOLAR_ID'])
    results = Path('results')
    results.mkdir(exist_ok=True)
    (results / 'gs_data.json').write_text(json.dumps(author, ensure_ascii=False, indent=2), encoding='utf-8')
    print(json.dumps({'citedby': author['citedby'], 'updated': author['updated'], 'papers': len(author['publications'])}))
