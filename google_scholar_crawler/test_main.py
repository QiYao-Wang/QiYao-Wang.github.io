import unittest
from unittest.mock import patch
from main import ProfileParser, fetch_mirror_total, fetch_profile


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

    @patch('main.read_url')
    def test_mirror_total_is_bound_to_scholar_id(self, read_url):
        read_url.return_value = r'Google Scholar ID: <!-- -->abc {\"citations_all\":77}'
        self.assertEqual(fetch_mirror_total('abc'), 77)
        with self.assertRaises(RuntimeError):
            fetch_mirror_total('different')

    @patch('main.fetch_google_profile', side_effect=TimeoutError)
    @patch('main.fetch_mirror_total', return_value=77)
    def test_mirror_fallback_preserves_papers(self, mirror, google):
        result = fetch_profile('abc', {'publications': {'paper': {'num_citations': 3}}})
        self.assertEqual(result['citedby'], 77)
        self.assertEqual(result['publications']['paper']['num_citations'], 3)
        self.assertIn('mirror', result['source'])


if __name__ == '__main__':
    unittest.main()
