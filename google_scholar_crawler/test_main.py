import unittest
from main import ProfileParser, fetch_google_profile


PROFILE_HTML = '''<table><tr><td>Citations</td><td class="gsc_rsb_std">1,234</td><td class="gsc_rsb_std">900</td></tr></table>
<tr class="gsc_a_tr"><td><a class="gsc_a_at" href="/citations?user=abc&amp;citation_for_view=abc:paper">A &amp; B <b>Paper</b></a></td><td><a class="gsc_a_ac">12</a></td></tr>'''


class ProfileParserTests(unittest.TestCase):
    def test_total_and_paper(self):
        parser = ProfileParser()
        parser.feed('''<table><tr><td>Citations</td><td class="gsc_rsb_std">1,234</td><td class="gsc_rsb_std">900</td></tr></table>
        <tr class="gsc_a_tr"><td><a class="gsc_a_at" href="/citations?user=abc&amp;citation_for_view=abc:paper">A &amp; B <b>Paper</b></a></td><td><a class="gsc_a_ac">12</a></td></tr>
        <tr class="gsc_a_tr"><td><a class="gsc_a_at" href="/citations?citation_for_view=abc:uncited">Uncited</a></td><td><a class="gsc_a_ac"></a></td></tr>''')
        self.assertEqual(parser.counts, [1234, 900])
        self.assertEqual(parser.publications['abc:paper']['bib']['title'], 'A & B Paper')
        self.assertEqual(parser.publications['abc:paper']['num_citations'], 12)
        self.assertEqual(parser.publications['abc:uncited']['num_citations'], 0)

    def test_challenge_is_not_zero_citations(self):
        parser = ProfileParser()
        parser.feed('<html><p>Our systems detected unusual traffic.</p></html>')
        self.assertEqual(parser.counts, [])


class GoogleProfileFetchTests(unittest.TestCase):
    def test_retries_challenge_page_before_success(self):
        pages = iter([
            '<html><p>Our systems detected unusual traffic.</p></html>',
            PROFILE_HTML,
        ])
        delays = []

        profile = fetch_google_profile(
            'abc', attempts=2, fetcher=lambda url: next(pages), sleep=delays.append)

        self.assertEqual(profile['citedby'], 1234)
        self.assertEqual(profile['publications']['abc:paper']['num_citations'], 12)
        self.assertEqual(delays, [20])

    def test_reports_challenge_after_all_retries(self):
        delays = []

        with self.assertRaisesRegex(RuntimeError, 'unusual traffic'):
            fetch_google_profile(
                'abc', attempts=3,
                fetcher=lambda url: '<html><p>Our systems detected unusual traffic.</p></html>',
                sleep=delays.append)

        self.assertEqual(delays, [20, 60])



if __name__ == '__main__':
    unittest.main()
