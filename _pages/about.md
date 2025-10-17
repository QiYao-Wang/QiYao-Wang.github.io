---
permalink: /
title: "About Me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<style>
  dl {
    margin-bottom: 60px; /* 调整这个值以获得合适的间距 */
    clear: both;
  }

  /* 全局文本颜色 */
  body {
    color: #333; /* 主要文本颜色 */
    background-image: url('../images/bg.jpg'); /* 背景图片 */
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }

  /* 链接颜色 */
  a {
    color: #0066cc; /* 链接颜色 */
  }

  /* 作者名字颜色 */
  strong {
    color: #000; /* 作者名字颜色 */
  }

  /* 年份标题颜色 */
  .year-title {
    color: #666;
  }

  /* 会议标签样式 */
  .conference-label {
    position: absolute;
    top: 10px;
    left: -5px;
    background-color: #2c3e50;  /* 深蓝色背景 */
    color: white;  /* 白色文字 */
    padding: 6px 12px;
    border-radius: 6px;
    font-size: 0.95em;
    font-weight: 600;
    letter-spacing: 0.5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    z-index: 1;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-style: italic;  /* 添加斜体 */
  }

  /* 鼠标悬停效果 */
  .conference-label:hover {
    background-color: #34495e;  /* 悬停时稍微变亮 */
    transition: background-color 0.2s ease;
  }

  dl dt img {
    width: 100%; /* 在移动端默认占满宽度 */
    aspect-ratio: 2/1; /* 设置宽高比为2:1，即高度为宽度的一半 */
    object-fit: cover; /* 确保图片不会被裁剪 */
    display: block;
    margin: 10px 10px 10px 0px; /* 适当的间距 */
    
    /* 添加美化效果 */
    border-radius: 8px; /* 让图片有轻微的圆角 */
    border: 2px solid #ddd; /* 添加淡灰色的边框 */
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2); /* 添加轻微阴影 */
    padding: 5px; /* 给图片一些内边距，让它不贴着边框 */
    background-color: #fff; /* 设置背景色，让图片更加干净 */
  }

  /* 在桌面端（宽度大于768px）时固定宽度 */
  @media screen and (min-width: 768px) {
    dl dt img {
      width: 350px;
    }
  }

  dl dt {
    position: relative;
  }

  hr {
    border: 1px solid #ebebeb; /* 调整分隔线的颜色和样式 */
    /* margin: 10px;  */
    clear: both; 
  }

  dl dd {
  margin-top: 5px; 
  margin-bottom: 5px;
}

  dl dd strong {
  font-weight: bold;
  color: black;
  }

  .co-first {
    color: red;
  }

  .down {
    transform: rotate(180deg);
  }

  /* 教育和工作经历卡片样式 */
  .experience-card, .education-card {
    display: flex;
    align-items: center;
    gap: 25px;
    margin-bottom: 30px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 12px;
    transition: all 0.3s ease;
    border: 1px solid #e9ecef;
  }

  .experience-card:hover, .education-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    border-color: #dee2e6;
  }

  .experience-info, .education-info {
    flex: 1;
  }

  .experience-logo, .education-logo {
    flex-shrink: 0;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }

  .experience-logo img, .education-logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .experience-title, .education-title {
    font-size: 1.2em;
    margin-bottom: 8px;
    color: #2c3e50;
  }

  .experience-title a, .education-title a {
    color: #2c3e50;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .experience-title a:hover, .education-title a:hover {
    color: #3498db;
  }

  .experience-role, .education-role {
    color: #666;
    font-style: italic;
    margin-bottom: 5px;
  }

  .experience-topics, .education-topics {
    color: #666;
    font-style: italic;
  }

  .section-title {
    font-size: 1.8em;
    color: #2c3e50;
    margin: 40px 0 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid #ecf0f1;
  }

  /* 奖学金和荣誉部分样式 */
  .honors-list {
    list-style: none;
    padding: 0;
  }

  .honors-list li {
    margin-bottom: 15px;
    padding: 15px 20px;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid #3498db;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .honors-list li:hover {
    transform: translateX(5px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .honors-list li strong {
    color: #2c3e50;
  }

  .honors-list li a {
    color: #3498db;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .honors-list li a:hover {
    color: #2980b9;
  }

  /* 服务部分样式 */
  .service-section {
    margin-bottom: 30px;
  }

  .service-section h3 {
    color: #2c3e50;
    font-size: 1.3em;
    margin: 25px 0 15px;
    padding-bottom: 8px;
    border-bottom: 2px solid #ecf0f1;
  }

  .service-list {
    list-style: none;
    padding: 0;
  }

  .service-list li {
    margin-bottom: 12px;
    padding: 12px 15px;
    background: #f8f9fa;
    border-radius: 6px;
    transition: transform 0.3s ease;
  }

  .service-list li:hover {
    transform: translateX(5px);
  }

  .service-list li a {
    color: #3498db;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .service-list li a:hover {
    color: #2980b9;
  }
</style>

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Hello, my name is Qiyao Wang (王琪尧)<a href='https://scholar.google.com/citations?user=STze0QgAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>. I am a first year Ph.D. student at the University of Chinese Academy of Sciences (UCAS), starting in Fall 2025, supervised by Prof. <a href="https://minyang.me/">Min Yang</a>.<br>
I obtained my Bachelor's degree in Artificial Intelligence from Dalian University of Technology (2021-2025).
During my undergraduate studies, I worked in the Dalian University of Technology <em>Information Retrieval Laboratory</em>
and <em>Public Service Science and Engineering Laboratory</em>, supervised by Prof. <a href="http://faculty.dlut.edu.cn/linyuan/zh_CN/index.htm">Yuan Lin</a>,
Prof. <a href="http://faculty.dlut.edu.cn/2004012069/en/index.htm">Kan Xu</a>
and Prof. <a href="https://faculty.dlut.edu.cn/linhongfei/zh_CN/index/789935/list/index.htm">Hongfei Lin</a>.

<p>
I warmly welcome undergraduates (any major) from DUT to join our research group for collaborative exploration. <br> Please go thorough <a href="https://wangqiyao.me/lab">Lab Group Homepage</a>. <br>
And if you are interested in my research, <strong style="color: darkred">feel free to collaborate with me</strong>!
</p>
<p>
As the project leader and supervisor, guided the entire undergraduate team to achieve 9 national-level awards (including the National Silver Award of the Challenge Cup) and 11 provincial-level awards. 作为项目负责人和指导者，指导整个本科团队获得 9 项国家级奖项（包括挑战杯国家银奖）和 11 项省级奖项。
</p>

<p><em><strong>Email</strong></em>: wangqiyao25@mails.ucas.ac.cn or wangqiyao@mail.dlut.edu.cn</p>

<hr>
<p style="font-family: 'Times New Roman', sans-serif;">Those who can imagine anything, can create the impossible.<br>Sometimes it is the people who no one imagines anything of, that do the things that no one can imagine.<br><span style="font-style: italic; float: right;">—— Alan · Mathison · Turing</span></p>
<p style="font-family: 'Times New Roman', sans-serif;">而世之奇伟、瑰怪，非常之观，常在于险远，而人之所罕至焉，故非有志者不能至也。<br><span style="font-style: italic; float: right;">—— 游褒禅山记 · 临川先生</span></p>

# 📌 Research Interests  

- ***General LLMs and MLLMs***: Exploring the underlying mechanisms of LLMs and MLLMs, and researching improved fine-tuning methods to enhance their understanding, reasoning, and generation capabilities. [[MLLMs Topic Homepage](https://wangqiyao.me/MLLMs/)]
  - ***Reinforcement Learning***: RL for LLMs Reasoning, Reward Modeling. [[Topic Homepage](https://wangqiyao.me/RL/)]
- ***Information Retrieval (IR)***: Exploring improved <em>generative IR (GenIR)</em> approaches to enhance the capabilities of LLMs, and leveraging LLMs to improve IR performance.
- ***Agentic AI***: Agentic Coding. [[Topic Homepage](https://wangqiyao.me/Agentic-Coding/)]
- ***AI for Science and Social Science***: Developing domain-specific applications using LLMs and MLLMs to empower research in sciences and social sciences.
  - LLMs for Intellectual Property (mainly for Patents) [[Topic Homepage](https://wangqiyao.me/LLM4Patent/)] [![Awesome-LLM4Patents](https://img.shields.io/github/stars/QiYao-Wang/Awesome-LLM4Patents)](https://github.com/QiYao-Wang/Awesome-LLM4Patents)  [![Hugging Face](https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-blue?label=Collection-LLMs4Patent)](https://huggingface.co/collections/QiYao-Wang/llms-for-patent-678e6dbc8af7a3998738cc57)
  - LLMs for Law
 
# 🔥 News

<div style="max-height: 200px; overflow-y: auto;">
<ul>
  <li><em><strong>2025.07.30:</strong></em> &nbsp;🎉 As the Team Supervisor, I successfully guided my team to win the Third Prize at the national level in the 18th China College Students' Computer Design Competition.</li>
  <li>
    <em><strong>2025.06.14:</strong></em> &nbsp;🧠 My work <em>AutoPatent</em> was presented as a poster at the 
    <strong>Young Scholars Symposium on Natural Language Processing (YSSNLP) 2025, Dalian</strong>. Many thanks to the organizers for the opportunity!
  </li>
  <li><em><strong>2025.06.12:</strong></em> &nbsp;🎉 My undergraduate thesis titled "Research and Application of Large Language Models in the Intellectual Property Field" was awarded as an Outstanding Thesis (校优秀本科毕业论文) (<strong style="color:darkred;">Top 4.39%</strong>).</li>
  <li><em><strong>2025.03.03:</strong></em> &nbsp;🎉 As the leader of the Taibao-ip team, we provided DeepSeek model deployment services to the School of Public Administration at Dalian University of Technology, which was featured in reports by Guangming Daily and the school itself. <p>[<a href="https://app2.gmdaily.cn/as/opened/n/88779004361149b8afb610ce04c162f6">News 1</a>] [<a href="https://mp.weixin.qq.com/s/yokeA5uiy1SxsbwmvCfiVQ">News 2</a>]</p></li>
  <li><em><strong>2024.12.20:</strong></em> &nbsp;🎉 Our latest work, AutoPatent, has been reported by Xinzhiyuan and will continue to be expanded and improved in the future.[<a href="https://mp.weixin.qq.com/s/H6zsbruPl4wtYOFCOIphBA">News</a>]</li>
  <li><em><strong>2024.12.08:</strong></em> &nbsp;🎉 As the project leader, I successfully led my team to win the Third Prize at the national level in the 18th iCAN Innovation Contest.</li>
  <li><em><strong>2024.11.02:</strong></em> &nbsp;🎉 As the project leader, I successfully led my team to won second prize at the national level of the 14th “Challenge Cup” China College Students’ Entrepreneurship Competition.</li>
</ul>
</div>

# Manuscripts
<dl>
  <dt><img align="left" width="100"
hspace="10" wspace="20" src="../images/publications/ipbench.png">
<span class="conference-label">Arxiv</span>
</dt>
  <dd><strong>IPBench: Benchmarking the Knowledge of Large Language Models in Intellectual Property</strong></dd>
<dd><em><strong>Qiyao Wang</strong>, Guhong Chen, Hongbo Wang, Huaren Liu, Minghui Zhu, Zhifei Qin, Linwei Li, Yilin Yue, Shiqiang Wang, Jiayan Li, Yihang Wu, Ziqiang Liu, Longze Chen, Run Luo, Liyang Fan, Jiaming Li, Lei Zhang, Kan Xu, Hongfei Lin, Hamid Alinejad-Rokny, Shiwen Ni<sup>†</sup>, Yuan Lin<sup>†</sup>, Min Yang<sup>†</sup></em>. CAS-SIAT and DUT.</dd>
<!-- <dd><a href="https://arxiv.org/abs/2504.15524">Arxiv: 2504.15524</a></dd> -->
<dd><a href="https://ipbench.wangqiyao.me">Website</a> | <a href="https://arxiv.org/abs/2504.15524">Paper</a> | <a href="https://huggingface.co/datasets/IPBench/IPBench">HuggingFace</a> | <a href="https://github.com/IPBench/IPBench">Github</a></dd>
<dd><a href="https://github.com/IPBench/IPBench"><img src="https://img.shields.io/github/stars/IPBench/IPBench" alt="IPBench"></a></dd>
</dl>

<hr>

<dl>
<dt><img align="left" width="100"
hspace="10" wspace="20" src="../images/publications/autopatent.png">
<span class="conference-label">Arxiv</span>
</dt>
  <dd><strong>AutoPatent: A Multi-Agent Framework for Automatic Patent Generation</strong></dd>
<dd> <em><strong>Qiyao Wang<sup>*</sup></strong>, Shiwen Ni<sup>*</sup>, Huaren Liu, Shule Lu, Guhong Chen, Xi Feng, Chi Wei, Qiang Qu, Hamid Alinejad-Rokny, and Yuan Lin<sup>†</sup>, Min Yang<sup>†</sup></em>. CAS-SIAT and DUT.</dd>
<!-- <dd><a href="https://arxiv.org/abs/2504.15524">Arxiv: 2504.15524</a></dd> -->
<dd><a href="https://autopatent.wangqiyao.me/">Website</a> | <a href="https://arxiv.org/pdf/2412.09796">Paper</a> | <a href="https://huggingface.co/datasets/IPBench/IPBench">HuggingFace</a> | <a href="https://github.com/QiYao-Wang/AutoPatent">Github</a></dd>
<dd><a href="https://github.com/QiYao-Wang/AutoPatent"><img src="https://img.shields.io/github/stars/QiYao-Wang/AutoPatent" alt="AutoPatent"></a></dd>
</dl>

<br>

# Publications 
<sup>*</sup>Equal Contribution and <sup>†</sup> Corresponding Author

<p><strong>Spotlight Models</strong></p>
- Taibao(太保): Intellectual Property Service Large Language Model, published by <a href="https://spap.dlut.edu.cn/info/1123/4095.htm">School of Public Administration and Policy, DUT</a>, <a href="https://ir.dlut.edu.cn/">DUTIR Lab</a> and <a href="https://www.dlcipf.cn/">CNIPA-CIPF</a> (Leader)

<hr>

<p><strong>2025</strong></p>

<dl>
  <dt><img align="left" width="100"
hspace="10" wspace="20" src="../images/publications/supergpqa.png">
<span class="conference-label">NeurIPS 2025</span>
</dt>
  <dd><strong>SuperGPQA: Scaling LLM Evaluation across 285 Graduate Disciplines</strong></dd>
<dd><em>M-A-P Team, Xinrun Du, et al., <strong>Qiyao Wang</strong> (Core Contributor listed in Alphabetical Order), et al., Ge Zhang</em>. M-A-P. <strong>NeurIPS 2025 (CCF-A)</strong></dd>
<!-- <dd><a href="https://arxiv.org/abs/2504.15524">Arxiv: 2504.15524</a></dd> -->
<dd><a href="https://supergpqa.github.io">Website</a> | <a href="https://arxiv.org/abs/2502.14739">Paper</a> | <a href="https://huggingface.co/datasets/m-a-p/SuperGPQA">HuggingFace</a> | <a href="https://github.com/SuperGPQA/SuperGPQA">Github</a></dd>
<dd><a href="https://github.com/SuperGPQA/SuperGPQA"><img src="https://img.shields.io/github/stars/SuperGPQA/SuperGPQA" alt="SuperGPQA"></a></dd>
</dl>

<hr>

<p><strong>2024</strong></p>

<div>
  <ul>
    <li>
     IPEval: A Bilingual Intellectual Property Agency Consultation Evaluation Benchmark for Large Language Models. <em><strong>Qiyao Wang</strong>, Hongbo Wang, Jianguo Huang, Shule Lu, Yuan Lin<sup>†</sup>, Kan Xu, Liang Yang, Hongfei Lin.</em> DUT.
     [<a href="https://ipeval.wangqiyao.me/">Website</a>]
     [<a href="https://arxiv.org/pdf/2406.12386">Paper</a>]
     [<a href="https://huggingface.co/datasets/Mathsion/IPEval">HuggingFace</a>]
     [<a href="https://github.com/QiYao-Wang/IPEval">Github</a>]
     <a href="https://github.com/QiYao-Wang/ipeval"><img src="https://img.shields.io/github/stars/QiYao-Wang/ipeval" alt="IPEval"></a>
    </li>
  </ul>
</div>

<hr>

<p><strong>Survey</strong></p>
<div>
  <ul>
    <li>
     A Survey on Large Language Model Benchmarks. <em>Shiwen Ni, Guhong Chen, Shuaimin Li, Xuanang Chen, Siyi Li, Bingli Wang, <strong>Qiyao Wang</strong>, Xingjian Wang, Yifan Zhang, Liyang Fan, Chengming Li, Ruifeng Xu, Sun Le, Min Yang<sup>†</sup></em>.
     [<a href="https://arxiv.org/abs/2508.15361">Paper</a>]
     [<a href="https://huggingface.co/papers/2508.15361">HuggingFace Paper</a>]
    </li>
  </ul>
</div>

<hr>

<p><strong>Chinese Papers</strong></p>

<div>
  <ul>
    <li>
      <span>CAGE: 基于协同增强相关反馈的查询扩展方法.</span>
      <em><strong>Qiyao Wang</strong>, Hongbo Wang, Peiyu He, Yuan Lin<sup>†</sup>, Kan Xu and Hongfei Lin.</em> 2025. CCIR 2025. <strong>中文信息学报 (CCF-T1, CCF-B, 北大核心)</strong>. DUT.
    </li>
    <li>
      <span>多智能体驱动的高校采购评审专家推荐研究.</span>
      <em>Xinzhuo Wu, Rong Cao, Kan Xu, <strong>Qiyao Wang</strong>, Yuan Lin<sup>†</sup> and Hongfei Lin.</em> 2025. CCIR 2025. <strong>计算机工程与应用 (CCF-T2, CCF-C, 北大核心)</strong>. DUT.
    </li>
    <li>
      <span>大语言模型赋能知识产权信息服务模型构建及应用.</span>
      <em>Yuan Lin<sup>†</sup>, Chenxi Xu, <strong>Qiyao Wang</strong>, and Kun Ding.</em> 2025. <strong>图书馆理论与实践 (CSSCI扩展版)</strong>. DUT.
    </li>
    <li>
      <span>ECPE-Qwen</span><span>: 微调大语言模型进行零样本情绪原因对抽取.</span>
      <em><strong>Qiyao Wang</strong>, Liang Yang, Kan Xu, Yuan Lin<sup>†</sup> and Hongfei Lin.</em> 2024. CCIR 2024. <strong>中文信息学报 (CCF-T1, CCF-B, 北大核心)</strong>. DUT.
    </li>
  </ul>
  </div>

# 🔧 Projects

<p><strong>College Students' Innovative Entrepreneurial Training Plan Program</strong></p>

<p style="color:gray">Projects in Dalian University of Technology.</p>

<div>
<ul>
<!--   <li>Policy Navigator: An AI-Powered Intelligent Policy Service Platform. <i>Hongbo Wang.</i> Supervisor: <i>Yuan Lin, <strong>Qiyao Wang</strong></i>. Not Assigned. 2024.12-2026.06 <i>(now)</i>. Supervisor. Ongoing.</li>
  <li>Wisdom Bridge - Empowering Collaborative Innovation in Government, Legal, and Technological Fields with Intelligent Intellectual Property Services. <i>Huaren Liu, Minghui Zhu, Boyu Ma, Yuhan Kang, Yueyi Ma.</i> Supervisor: <i>Yuan Lin, <strong>Qiyao Wang</strong></i>. Not Assigned. 2024.12-2026.06 <i>(now)</i>. Supervisor. Ongoing.</li>
  <li>AI Patent Agency for Intellectual Property Services. <i>Chenxing Li, Shiqiang Wang, Haoran Hu.</i> Supervisor: <i>Yuan Lin, <strong>Qiyao Wang</strong></i>. Not Assigned. 2024.12-2026.06 <i>(now)</i>. Supervisor. Ongoing.</li>
  <li>Research on Intellectual Property Examination Based on Large Language Models. <i>Xufeng Chen, Yanchao Jian.</i> Supervisor: <i>Yuan Lin, <strong>Qiyao Wang</strong></i>. Not Assigned. 2024.12-2026.06 <i>(now)</i>. Supervisor. Ongoing.</li> -->
  <li>Research on large language models for intellectual property public service. <i><strong>Qiyao Wang</strong>, Jianguo Huang, Shule Lu, Huaren Liu</i>. Supervisor: <i>Yuan Lin, Kan Xu</i>. National Level. 2023.09-2025.04. Leader. Completed.</li>
  <li>Research and application of technological gene based on representation learning. <i><strong>Qiyao Wang</strong>, Jiaxu Wu et.al.</i>. Supervisor: <i>Yuan Lin, Kan Xu</i>. School Level. 2022.12-2024.04. Leader. Completed.</li>
</ul>
</div>

# 🪡 Intellectual Property
<p><strong>Patents</strong></p>

- Method for Audio Transcription Annotation and Analysis Based on Multi-Agent Collaboration Mechanism. *Hongbo Wang, Yuan Lin, **Qiyao Wang**, Huanming Wang*. CN120492633A. 2025.05.30. DUT. Pending. (Main Member)
- Method, Apparatus, Electronic Device, and Storage Medium for Generating a Patent Application Document. *Shiwen Ni, Min Yang, **Qiyao Wang***. CN202411824533.1. CAS-SIAT. Pending. (Sole Student Member)
- A query expansion method based on collaborative enhancement at the term level. ***Qiyao Wang**, Shule Lu, Yang Yang, Yuan Lin et.al.*. CN118467708A. 2024.08.09. DUT. Licensed.
- A Technology Integration Opportunity Prediction Method Based on Large Language Models. ***Qiyao Wang**, Kan Xu, Shule Lu et.al.*. CN118246534A. 2024.06.25. DUT. Pending.

<p><strong>Software Copyrights</strong></p>

- Intelligent Patent Examination Assistance System. *Yanchao Jian, **Qiyao Wang**, Huaren Liu, Zhifei Qin, Hongbo Wang, Xufeng Chen, Kan Xu, Yuan Lin*. 2025SR1158441. 2025.07.03. DUT. Licensed. (Supervisor)
- IntelliPatent: Chinese Patent Document Generation System. *Chenxing Li, **Qiyao Wang**, Huaren Liu, Zhifei Qin, Shiqiang Wang, Haoran Hu, Hongbo Wang, Kan Xu, Yuan Lin*. 2025SR1158561. 2025.07.03. DUT. Licensed. (Supervisor)
- IntelliCode Document Assistant System. *Haoran Hu, **Qiyao Wang**, Hongbo Wang, Zhifei Qin, Huaren Liu, Shiqiang Wang, Chenxing Li, Kan Xu and Yuan Lin.* 2025SR0724402. 2025.05.06. DUT. Licensed. (Supervisor)
- Automated Patent Drafting System. *Rong Cao, **Qiyao Wang**, Huaren Liu, Zhifei Qin, Boyu Ma, Jingru Sun, Hongbo Wang, Kan Xu and Yuan Lin.* 2025SR0675652. 2025.04.24. DUT. Licensed. (Supervisor)
- Smart Technology Contract Generation System. *Shiqiang Wang, **Qiyao Wang**, Huaren Liu, Zhifei Qin, Hongbo Wang, Haoran Hu, Chenxing Li, Kan Xu and Yuan Lin*. 2025SR0674957. 2025.04.24. DUT. Licensed. (Supervisor)
- Multimodal Smart Home System. ***Qiyao Wang**, Yuan Lin et.al.*. 2024SR0971269. 2024.07.10. DUT. Licensed.
- Intellectual Property Intelligent Information Service Platform. ***Qiyao Wang**, Yuan Lin et.al.*. 2024SR0971263. 2024.07.10. DUT. Licensed.
- Technology Integration Opportunity Discovery System. ***Qiyao Wang**, Yuan Lin et.al.* 2024SR0681926. 2024.05.20. DUT. Licensed.

# 🎖 Honors and Awards
<p><strong>Academic Awards</strong></p>

- ***2025.06***: Undergraduate thesis "Research and Application of Large Language Models in the Intellectual Property Field" —— ***Outstanding Thesis (校优秀本科毕业论文)*** (<span style="color:darkred">***Top 4.39%***</span>)

<p><strong>Competition Awards</strong></p>

<p style="color:gray"><strong>Bold text</strong> indicates national level.</p>

- ***2025.08***：The 17th “Challenge Cup” Liaoning Province College Student Extracurricular Academic and Technological Works Competition —— *Grand Prize* in Liaoning Province. (Supervisor)
- ***2025.08***：The 13th China TRIZ Cup College Students' Innovation Method Competition —— ***Second Prize*** at the National level. (Supervisor)
- ***2025.08***：The 2025 China International College Students Innovation Competition **($\times 2$)** —— *Silver Prize* in Liaoning Province. (Supervisor)
- ***2025.07***：The 18th China College Students' Computer Design Competition —— ***Third Prize*** at the National level. (Supervisor)
- ***2025.06***: 2025 University Computer Competition, Internet Technology Challenge **($\times 2$)** —— *Third Prize* in Northeast Regional. (Supervisor)
- ***2025.06***: The 12th College Students Innovation and Entrepreneurship Annual Meeting —— *Second Prize* in Liaoning Province. (Leader)
- ***2025.05***: The 18th China College Students' Computer Design Competition —— *First Prize* in Liaoning Province. (Supervisor)
- ***2024.12***: The 18th iCAN Innovation Contest —— ***Third Prize*** at the National level. (Leader)
- ***2024.11***: The 14th "Challenge Cup" College Students' Entrepreneurship Plan Competition —— <span style="color:darkred">***Second Prize***</span> at the National level. (Leader)
- ***2024.10***: The 18th iCAN Innovation Contest —— *Second Prize* in Liaoning Province. (Supervisor)
- ***2024.09***: 2024 University Computer Competition, Internet Technology Challenge —— ***Third Prize*** at the National level. (Leader)
- ***2024.09***: The 12th China TRIZ Cup College Students' Innovation Method Competition —— ***Second Prize*** at the National level. (Leader)
- ***2024.08***: The 2024 China International College Students Innovation Competition —— *Gold Prize* in Liaoning Province. (Leader)
- ***2024.07***: The 14th "Challenge Cup" College Students' Entrepreneurship Plan Competition —— *Grand Prize* in Liaoning Province. (Leader)
- ***2024.07***: The 17th China College Students' Computer Design Competition —— ***Second Prize*** at the National level. (Leader)
- ***2023.06***: The 18th "Challenge Cup" College Students' Extracurricular Academic Science and Technology Works Competition —— *Grand Prize* in Liaoning Province. (Main Member)
- ***2023.03***: U.S. National College Mathematics Competition —— ***Honorable Prize*** at the National level. (Leader)
- ***2022.11***: The 14th National College Students' Mathematics Competition —— ***First Prize*** at the National level. (Single Member)

# 📖 Educations
- ***2025.09 - (5 years)***, pursuing a Ph.D. degree in Computer Technology, ShenZhen Institute of Advanced Technology, Chinese Academy of Science, China.
- ***2021.09 - 2025.06***, Bachelor degree in AI, School of Future Technology, Dalian University of Technology, China.
  
# 💬 Academe Service

# 💻 Internships
- ***2025.10 - (now)***: Alibaba, Beijing
- ***2022.12 - 2025.09***: DUTIR, Dalian

Updated at October, 2025. ![](https://komarev.com/ghpvc/?username=QiYao-Wang&color=brightgreen)


<script>
        // URL of the JSON file in the 'google-scholar-stats' branch
        const jsonUrl = "https://raw.githubusercontent.com/QiYao-Wang/QiYao-Wang.github.io/refs/heads/google-scholar-stats/gs_data.json";

        // Fetch JSON data and dynamically update the citation count
        fetch(jsonUrl)
            .then(response => response.json())
            .then(data => {
                // Locate the publication data from JSON
                const publications = data.publications;

                // Find all span elements with dynamic ids and update their content
                const spans = document.querySelectorAll("span[id]"); // Select all span elements with an id attribute

                spans.forEach(span => {
                    const spanId = span.id; // Get the id of the span element

                    // Iterate over publications to find a match with the id
                    for (const key in publications) {
                        const publication = publications[key];
                        if (publication.bib.title === spanId) { // Match title with the span id
                            const citationCount = publication.num_citations || 0;
                            span.textContent = `Citation: ${citationCount}`;
                            break;
                        }
                    }
                });
            })
            .catch(error => {
                console.error("Error loading JSON:", error);
            });
    </script>
