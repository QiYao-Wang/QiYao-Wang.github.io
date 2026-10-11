(() => {
  const init = () => {
    if (document.documentElement.dataset.blogEnhanced === 'true') return;
    document.documentElement.dataset.blogEnhanced = 'true';
    document.querySelector('base')?.setAttribute('target', '_self');

    document.querySelectorAll('.blog-content figure img').forEach((img) => {
      if (img.closest('a')) return;
      const link = document.createElement('a');
      link.href = img.getAttribute('src');
      link.target = '_self';
      link.className = 'blog-image-link';
      link.title = '点击查看原图';
      link.setAttribute('aria-label', `查看原图：${img.alt || '正文插图'}`);
      img.replaceWith(link);
      link.appendChild(img);
    });

    if (window.hljs) window.hljs.highlightAll();

    const root = document.documentElement;
    const themeToggle = document.querySelector('.blog-theme-toggle');
    const savedTheme = localStorage.getItem('blog-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const applyTheme = (theme) => {
      root.dataset.blogTheme = theme;
      themeToggle?.setAttribute('aria-pressed', String(theme === 'dark'));
    };
    applyTheme(savedTheme || (prefersDark ? 'dark' : 'light'));
    themeToggle?.addEventListener('click', () => {
      const theme = root.dataset.blogTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('blog-theme', theme);
      applyTheme(theme);
    });

    const toc = document.getElementById('toc');
    const headings = document.querySelectorAll('.blog-content h2, .blog-content h3, .blog-content h4');
    if (toc) {
      toc.replaceChildren();
      const title = document.createElement('strong');
      title.textContent = 'On this page';
      toc.appendChild(title);
      const list = document.createElement('ul');
      toc.appendChild(list);

      headings.forEach((heading) => {
        if (!heading.id) heading.id = heading.innerText.trim().replace(/\s+/g, '-').toLowerCase();
        const item = document.createElement('li');
        item.style.paddingLeft = `${(Number(heading.tagName[1]) - 2) * 12}px`;
        const link = document.createElement('a');
        link.href = `#${heading.id}`;
        link.target = '_self';
        link.textContent = heading.innerText;
        item.appendChild(link);
        list.appendChild(item);
      });
    }

    const tocLinks = new Map(Array.from(toc?.querySelectorAll('a') || []).map((link) => [decodeURIComponent(link.hash.slice(1)), link]));
    if ('IntersectionObserver' in window && tocLinks.size) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          toc?.querySelectorAll('a').forEach((link) => link.removeAttribute('aria-current'));
          tocLinks.get(entry.target.id)?.setAttribute('aria-current', 'location');
        });
      }, { rootMargin: '-18% 0px -72% 0px', threshold: 0 });
      headings.forEach((heading) => observer.observe(heading));
    }

    document.querySelectorAll('.blog-content pre').forEach((pre) => {
      const code = pre.querySelector('code');
      if (!code) return;
      const language = Array.from(code.classList).find((name) => name.startsWith('language-') && name !== 'language-undefined')?.replace('language-', '');
      pre.dataset.language = language || 'code';
      const copy = document.createElement('button');
      copy.className = 'blog-copy-code';
      copy.type = 'button';
      copy.textContent = 'Copy';
      copy.setAttribute('aria-label', 'Copy code block');
      copy.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(code.innerText);
          copy.textContent = 'Copied';
          window.setTimeout(() => { copy.textContent = 'Copy'; }, 1600);
        } catch (_) {
          copy.textContent = 'Select code';
        }
      });
      pre.appendChild(copy);
    });

    const progress = document.querySelector('.blog-reading-progress span');
    const backToTop = document.getElementById('blog-back-to-top');
    const updateReadingUI = () => {
      const content = document.getElementById('blog-content');
      if (!content || !progress || !backToTop) return;
      const start = content.offsetTop - 96;
      const distance = Math.max(content.offsetHeight - window.innerHeight + 96, 1);
      const value = Math.min(1, Math.max(0, (window.scrollY - start) / distance));
      progress.style.transform = `scaleX(${value})`;
      backToTop.hidden = window.scrollY < 560;
    };
    window.addEventListener('scroll', updateReadingUI, { passive: true });
    window.addEventListener('resize', updateReadingUI);
    updateReadingUI();
    backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
