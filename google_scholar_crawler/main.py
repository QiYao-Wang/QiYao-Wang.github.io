import json
from datetime import datetime, timezone
from html.parser import HTMLParser
import os
from pathlib import Path
import re
from urllib.parse import parse_qs, urlencode, urlparse
from urllib.request import Request, urlopen

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
        'User-Agent': 'Mozilla/5.0 (compatible; QiyaoHomepage/1.0; +https://wangqiyao.me/)'
    })
    with urlopen(request, timeout=30) as response:
        return response.read().decode('utf-8')


def fetch_google_profile(scholar_id):
    query = urlencode({'user': scholar_id, 'hl': 'en', 'pagesize': 100})
    page = read_url('https://scholar.google.com/citations?' + query)
    parser = ProfileParser()
    parser.feed(page)
    if len(parser.counts) < 2:
        raise RuntimeError('Google Scholar returned no citation statistics.')
    return {'scholar_id': scholar_id, 'citedby': parser.counts[0],
            'updated': datetime.now(timezone.utc).isoformat(),
            'publications': parser.publications,
            'source': 'Google Scholar public profile',
            'publication_scope': 'First profile page, up to 100 papers'}


def fetch_mirror_total(scholar_id):
    page = read_url('https://www.newx.sg/scholar/' + scholar_id)
    if f'Google Scholar ID: <!-- -->{scholar_id}' not in page:
        raise RuntimeError('Scholar mirror returned a different profile.')
    match = re.search(r'\\"citations_all\\":(\d+)', page)
    if not match:
        raise RuntimeError('Scholar mirror returned no citation total.')
    return int(match.group(1))


def fetch_profile(scholar_id, previous=None):
    try:
        return fetch_google_profile(scholar_id)
    except Exception as google_error:
        total = fetch_mirror_total(scholar_id)
        author = dict(previous or {})
        author.update({
            'scholar_id': scholar_id,
            'citedby': total,
            'updated': datetime.now(timezone.utc).isoformat(),
            'source': 'Agora mirror of Google Scholar profile',
            'source_url': 'https://www.newx.sg/scholar/' + scholar_id,
            'direct_google_error': type(google_error).__name__,
        })
        author.setdefault('publications', {})
        return author


if __name__ == '__main__':
    previous_path = Path('../_data/google_scholar.json')
    previous = json.loads(previous_path.read_text(encoding='utf-8')) if previous_path.exists() else None
    author = fetch_profile(os.environ['GOOGLE_SCHOLAR_ID'], previous)
    results = Path('results')
    results.mkdir(exist_ok=True)
    (results / 'gs_data.json').write_text(json.dumps(author, ensure_ascii=False, indent=2), encoding='utf-8')
    print(json.dumps({'citedby': author['citedby'], 'updated': author['updated'], 'papers': len(author['publications'])}))
