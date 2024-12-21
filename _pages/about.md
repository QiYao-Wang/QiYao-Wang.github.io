---
permalink: /
title: "About Me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Now I am an undergraduate from Dalian University of Technology (DUT). 

I am currently pursuing a bachelor degree in Artificial Intelligence *(2021-2025)*. During my undergraduate studies, I worked in the Dalian University of *Technology Information Retrieval Laboratory* and *Public Service Science and Engineering Laboratory*, fortunately supervised by Prof. [Yuan Lin](http://faculty.dlut.edu.cn/linyuan/zh_CN/index.htm) and Prof. [Kan Xu](http://faculty.dlut.edu.cn/2004012069/en/index.htm). I warmly welcome undergraduates (any major) from DUT to join our research group for collaborative exploration. For more details, please visit our [website](https://dut-ipai.github.io/). For those interested in collaboration, please do not hesitate to contact me.

I will start my Ph.D. studies at CAS-SIAT in 2025, fortunately supervised by Prof. <a href="https://minyang.me/">Min Yang</a>.

<p>Those who can imagine anything, can create the impossible.<br><span style="float: right;">——Alan·Mathison·Turing</span></p>

# 📌 Research Interests

- Large Language Models
- Information Retrieval
- LLMs-based Multi-Agent System
- LLMs for Intellectual Property (mainly for Patents) [![Awesome-LLM4Patents](https://img.shields.io/github/stars/QiYao-Wang/Awesome-LLM4Patents)](https://github.com/QiYao-Wang/Awesome-LLM4Patents)
- AI for Science (Mathematics, etc.) and Social Science (Politics, Law, etc.)

# 🔥 News

<div style="max-height: 200px; overflow-y: auto;">
<ul>
  <li><em>2024.12.20:</em> &nbsp;🎉 Our latest work, AutoPatent, has been reported by Xinzhiyuan and will continue to be expanded and improved in the future.[<a href="https://mp.weixin.qq.com/s/H6zsbruPl4wtYOFCOIphBA">News</a>]</li>
  <li><em>2024.12.08:</em> &nbsp;🎉 As the project leader, I successfully led my team to win the Third Prize at the national level in the 18th iCAN Innovation Contest.</li>
  <li><em>2024.11.02:</em> &nbsp;🎉 As the project leader, I successfully led my team to won second prize at the national level of the 14th “Challenge Cup” China College Students’ Entrepreneurship Competition.</li>
</ul>
</div>

# 📝 Publications 
<sup>*</sup>Equal Contribution and <sup>†</sup> Corresponding Author

### Representative Work

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Under Review</div><img src='images/publications/autopatent.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[AutoPatent: A Multi-Agent Framework for Automatic Patent Generation](https://arxiv.org/pdf/2412.09796)

<em><strong>Qiyao Wang<sup>*</sup></strong>, Shiwen Ni<sup>*</sup>, Huaren Liu, Shule Lu, Guhong Chen, Xi Feng, Chi Wei, Qiang Qu, Hamid Alinejad-Rokny, Yuan Lin<sup>†</sup>, Min Yang<sup>†</sup></em>

<p><strong>TL;DR: </strong>We introduce Draft2Patent, a novel task for generating full-length patents (~17K tokens) from drafts, along with the D2P benchmark Our AutoPatent framework, leveraging a multi-agent system, excels in patent generation, with Qwen2.5-7B outperforming larger models like GPT-4o and Qwen2.5-72B in metrics and human evaluations.</p>

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Arxiv</div><img src='images/publications/ipeval.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[IPEval: A Bilingual Intellectual Property Agency Consultation Evaluation Benchmark for Large Language Models
](https://arxiv.org/pdf/2406.12386)

***Qiyao Wang**, Jianguo Huang, Shule Lu, Yuan Lin, Kan Xu, Liang Yang, Hongfei Lin*

<p><strong>TL;DR: </strong>IPEval introduces a benchmark for assessing Large Language Models' (LLMs) performance in intellectual property (IP) law with 2,657 questions. It evaluates LLMs across key IP areas using zero-shot, 5-few-shot, and Chain of Thought (CoT) approaches. Findings highlight the need for specialized IP LLMs due to language proficiency bias. The benchmark is crucial for developing LLMs with deeper IP knowledge.</p>

</div>
</div>

<p><strong>2024</strong></p>

<div style="max-height: 200px; overflow-y: auto;">
<ul>
  <li>
    AutoPatent: A Multi-Agent Framework for Automatic Patent Generation. 
    <em><strong>Qiyao Wang<sup>*</sup></strong>, Shiwen Ni<sup>*</sup>, et.al. and Yuan Lin<sup>†</sup>, Min Yang<sup>†</sup></em>. Under Review.
    [<a href="https://qiyao-wang.github.io/AutoPatent/">Website</a>]
    [<a href="https://arxiv.org/pdf/2412.09796">Paper</a>]
    [<a href="https://github.com/QiYao-Wang/AutoPatent">Github</a>] 
    <a href="https://github.com/QiYao-Wang/AutoPatent">
      <img src="https://img.shields.io/github/stars/QiYao-Wang/AutoPatent" alt="AutoPatent">
    </a>
  </li>
  <li>
    ECPE-Qwen: Zero-Shot Emotion-Cause Pair Extraction with Fine-Tuning Large Language Models. 
    <em><strong>Qiyao Wang</strong>, Liang Yang, Kan Xu, Yuan Lin<sup>†</sup>, Hongfei Lin.</em> 
    <em>CCIR</em> Accepted. <em>Journal of Chinese Information Processing (CCF-B, CAAI-B)</em> Accepted.
  </li>
  <li>
    IPEval: A Bilingual Intellectual Property Agency Consultation Evaluation Benchmark for Large Language Models. 
    <em><strong>Qiyao Wang</strong>, Jianguo Huang, Shule Lu, Yuan Lin<sup>†</sup>, Kan Xu, Liang Yang, Hongfei Lin.</em> Arxiv. 
    [<a href="https://Qiyao-Wang.github.io/ipeval">Website</a>]
    [<a href="https://arxiv.org/pdf/2406.12386">Paper</a>]
    [<a href="https://github.com/QiYao-Wang/IPEval">Github</a>] 
    [<a href="https://huggingface.co/datasets/Mathsion/IPEval">HuggingFace</a>]
    <a href="https://github.com/QiYao-Wang/ipeval">
      <img src="https://img.shields.io/github/stars/QiYao-Wang/ipeval" alt="IPEval">
    </a>
  </li>
</ul>
</div>


# 🔧 Projects

<p><strong>College Students' Innovative Entrepreneurial Training Plan Program</strong></p>

<div style="max-height: 210px; overflow-y: auto;">
<ul>
  <li>Policy Navigator: An AI-Powered Intelligent Policy Service Platform. <i>Hongbo Wang.</i> Supervisor: <i>Yuan Lin, <strong>Qiyao Wang</strong></i>. Not Assigned. 2024.12-2026.06 <i>(now)</i>. Supervisor. Ongoing.</li>
  <li>Wisdom Bridge - Empowering Collaborative Innovation in Government, Legal, and Technological Fields with Intelligent Intellectual Property Services. <i>Huaren Liu, Minghui Zhu, Boyu Ma, Yuhan Kang, Yueyi Ma.</i> Supervisor: <i>Yuan Lin, <strong>Qiyao Wang</strong></i>. Not Assigned. 2024.12-2026.06 <i>(now)</i>. Supervisor. Ongoing.</li>
  <li>AI Patent Agency for Intellectual Property Services. <i>Chenxing Li, Shiqiang Wang, Haoran Hu.</i> Supervisor: <i>Yuan Lin, <strong>Qiyao Wang</strong></i>. Not Assigned. 2024.12-2026.06 <i>(now)</i>. Supervisor. Ongoing.</li>
  <li>Research on Intellectual Property Examination Based on Large Language Models. <i>Xufeng Chen, Yanchao Jian.</i> Supervisor: <i>Yuan Lin, <strong>Qiyao Wang</strong></i>. Not Assigned. 2024.12-2026.06 <i>(now)</i>. Supervisor. Ongoing.</li>
  <li>Research on large language models for intellectual property public service. <i><strong>Qiyao Wang</strong>, Jianguo Huang, Shule Lu, Huaren Liu</i>. Supervisor: <i>Yuan Lin, Kan Xu</i>. National Level. 2023.09-2025.06 <i>(now)</i>. Leader. Ongoing.</li>
  <li>Research and application of technological gene based on representation learning. <i><strong>Qiyao Wang</strong>, Jiaxu Wu et.al.</i>. Supervisor: <i>Yuan Lin, Kan Xu</i>. School Level. 2022.12-2024.04. Leader. Completed.</li>
</ul>
</div>

# 🪡 Intellectual Property
<p><strong>Patents</strong></p>

- An Automated Patent Application Drafting Algorithm Based on Multi-Agent Large Language Models. *Shiwen Ni, Min Yang, **Qiyao Wang** et.al.* CAS-SIAT. Pending.
- A query expansion method based on collaborative enhancement at the term level. ***Qiyao Wang**, Shule Lu, Yang Yang, Yuan Lin et.al.*. CN118467708A. 2024.08.09. DUT. Licensed. 
- A Technology Integration Opportunity Prediction Method Based on Large Language Models. ***Qiyao Wang**, Kan Xu, Shule Lu et.al.*. CN118246534A. 2024.06.25. DUT. Licensed.

<p><strong>Software Copyrights</strong></p>

- Multimodal Smart Home System. ***Qiyao Wang**, Yuan Lin et.al.*. 2024SR0971269. 2024.07.10. DUT. Licensed.
- Intellectual Property Intelligent Information Service Platform. ***Qiyao Wang**, Yuan Lin et.al.*. 2024SR0971263. 2024.07.10. DUT. Licensed.
- Technology Integration Opportunity Discovery System. ***Qiyao Wang**, Yuan Lin et.al.* 2024SR0681926. 2024.05.20. DUT. Licensed.

# 🎖 Honors and Awards
<p><strong>Competition Awards</strong></p>

- *2024.12*: The 18th iCAN Innovation Contest —— ***Third Prize*** at the National level. (leader)
- *2024.11*: The 14th "Challenge Cup" College Students' Entrepreneurship Plan Competition —— ***Second Prize*** at the National level. (Leader)
- *2024.10*: The 18th iCAN Innovation Contest —— *Second Prize* in Liaoning Province. (Supervisor)
- *2024.09*: The 2024 University Computer Competition, Internet Technology Challenge —— ***Third Prize*** at the National level. (Leader)
- *2024.09*: The 12th China TRIZ Cup College Students' Innovation Method Competition —— ***Second Prize*** at the National level. (Leader)
- *2024.08*: The 2024 China International College Students Innovation Competition —— *Gold Prize* in Liaoning Province. (Leader)
- *2024.07*: The 14th "Challenge Cup" College Students' Entrepreneurship Plan Competition —— *Grand Prize* in Liaoning Province. (Leader)
- *2024.07*: The 17th China College Students' Computer Design Competition —— ***Second Prize*** at the National level. (Leader)
- *2023.06*: The 18th "Challenge Cup" College Students' Extracurricular Academic Science and Technology Works Competition —— *Grand Prize* in Liaoning Province. (Main Member)
- *2023.03*: U.S. National College Mathematics Competition —— ***Honorable Prize*** at the National level. (Leader)
- *2022.11*:  The 14th National College Students' Mathematics Competition —— ***First Prize*** at the National level. (Single Member)

# 📖 Educations
- *2025.09 - (5 years)*, pursuing a Ph.D. degree in Computer Technology, ShenZhen Institute of Advanced Technology, Chinese Academy of Science, China.
- *2021.09 - 2025.06 (now)*, pursuing a bachelor degree in AI, School of Future Technology, Dalian University of Technology, China.
  
# 💬 Academe Service

# 💻 Internships

# Visitors
<div style="width: 400px">
  <script type="text/javascript" id="clustrmaps" src="//clustrmaps.com/map_v2.js?d=5XwcXhC_hWtdm6YV_S7mq8GYDOjb0XU67bhcZ5uaJto&cl=ffffff&w=a"></script>
</div>

Updated at December, 2024. ![](https://komarev.com/ghpvc/?username=QiYao-Wang&color=brightgreen)

