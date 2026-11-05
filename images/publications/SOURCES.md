# Paper thumbnails

PDF figures extracted on 2026-11-05, with page headers and captions excluded.
Clicking a thumbnail opens the larger local image in a modal with a blurred backdrop.
PDF crops are rendered at 216 dpi and saved as quality-95 WebP. Existing PNG assets are retained.

| Asset | PDF source | Page / figure | Selection |
| --- | --- | --- | --- |
| workfactory-overview.webp | https://arxiv.org/pdf/2610.37161v2 | 5 / 2 | Task construction framework |
| mpo-overview.webp | https://arxiv.org/pdf/2610.35013 | 1 / 1 | Method overview with learning curves |
| patex-overview.webp | https://arxiv.org/pdf/2610.33503 | 7 / 3 | PASS trajectory synthesis pipeline |
| apm-overview.webp | https://arxiv.org/pdf/2609.37559 | 2 / 1 | Cross-session memory task overview |
| patre-overview.webp | https://arxiv.org/pdf/2605.03571 | 2 / 1 | Benchmark framework |
| interactweb-overview.webp | https://arxiv.org/pdf/2604.27419 | 2 / 1 | Interactive benchmark architecture |
| flowpie-overview.webp | https://arxiv.org/pdf/2603.29557 | 4 / 3 | Full method framework |
| iquest-overview.webp | https://arxiv.org/pdf/2610.30949 | 1 / 1 | Main benchmark performance comparison |
| tdscaling-overview.webp | https://arxiv.org/pdf/2602.03219 | 4 / 2 | Four-stage method pipeline |
| oprm-overview.webp | https://arxiv.org/pdf/2602.12660 | 4 / 1 | Reward model architecture |
| survey-overview.webp | https://arxiv.org/pdf/2508.15361 | 6 / 2 | Benchmark taxonomy |
| ipeval-overview.webp | https://arxiv.org/pdf/2406.12386 | 3 / 1 | Evaluation system |
| ecpe-overview.webp | http://jcip.cipsc.org.cn/cn/article/pdf/preview/10.3969/j.issn.1003-0077.2026.05.010.pdf | 4 / 4 | Task execution workflow |

The existing IPBench, AutoPatent and SuperGPQA PNGs show the task overview,
method framework and benchmark comparison, respectively. The existing IPEval
PNG is a title-page crop and is intentionally not used.

## Maintaining the paper list

Additional author-supplied PDFs:
- `ipservice-overview.webp`: 基于大语言模型的知识产权信息服务模型构建及应用_林原.pdf, page 4, Figure 1 (operating mechanism).
- `ipagents-overview.webp`: 大语言模型驱动知识产权服务智能体研究_林原.pdf, page 4, Figure 1 (overall service architecture). Journal issue: July 2026, 70(14).

Edit the single paper card in `_pages/about.md`; do not duplicate cards across topics.
Use space-separated `data-topics` values: `agents`, `post-training`,
`working-agent`, `ip`, `science`, `social-science`, `reports`.
Technical Reports has its own top-level topic; its secondary status filters are hidden.
An empty topic list keeps a paper visible in All only; this is used for general
evaluation, survey and retrieval papers without a clear match to the six topics.
Place each card under the appropriate publication status and author-role group.
Keep technical reports separate, and preserve author order and contribution marks.
Sort each role group by `data-date` descending, using the published date when known
and the existing year or arXiv date otherwise; keep ties stable. ECPE-Qwen's journal
publication is May 2026, distinct from its CCIR 2024 acceptance.
If a verified figure is unavailable, omit `.paper-figure` entirely.
