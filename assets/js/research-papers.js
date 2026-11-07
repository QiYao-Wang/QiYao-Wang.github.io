(function () {
  const root = document.getElementById('research-papers');
  if (!root) return;
  root.querySelectorAll('.paper-list').forEach(function (list) {
    Array.from(list.children).sort(function (first, second) {
      return (second.dataset.date || '').localeCompare(first.dataset.date || '');
    }).forEach(function (card) { list.append(card); });
  });
  const tabs = Array.from(root.querySelectorAll('[role="tab"]'));
  const panel = root.querySelector('[role="tabpanel"]');
  const reports = root.querySelector('#technical-reports');
  const viewer = document.createElement('dialog');
  viewer.className = 'paper-image-viewer';
  viewer.setAttribute('aria-label', 'Paper figure preview');
  const closeButton = document.createElement('button');
  closeButton.type = 'button';
  closeButton.className = 'paper-image-close';
  closeButton.textContent = '×';
  closeButton.setAttribute('aria-label', 'Close figure preview');
  const fullImage = document.createElement('img');
  let opener;
  let scrollPosition;
  viewer.append(closeButton, fullImage);
  root.append(viewer);
  closeButton.addEventListener('click', function () { viewer.close(); });
  viewer.addEventListener('click', function (event) {
    if (event.target === viewer) viewer.close();
  });
  viewer.addEventListener('close', function () {
    if (opener) opener.focus({ preventScroll: true });
    if (scrollPosition) window.scrollTo({ left: scrollPosition.left, top: scrollPosition.top, behavior: 'instant' });
  });
  root.querySelectorAll('.paper-figure').forEach(function (link) {
    link.addEventListener('click', function (event) {
      if (typeof viewer.showModal !== 'function') return;
      event.preventDefault();
      event.stopImmediatePropagation();
      opener = link;
      scrollPosition = { left: window.scrollX, top: window.scrollY };
      fullImage.src = link.href;
      fullImage.alt = link.querySelector('img').alt;
      viewer.showModal();
      window.scrollTo({ left: scrollPosition.left, top: scrollPosition.top, behavior: 'instant' });
    }, true);
  });
  const filters = Array.from(root.querySelectorAll('.paper-filters button'));
  filters.forEach(function (button) { button.dataset.label = button.textContent.trim(); });
  root.querySelectorAll('.paper-section > h2').forEach(function (heading) {
    heading.dataset.label = heading.textContent.trim();
  });
  let selectedKind = 'all';
  function filterStatus() {
    const counts = { all: 0 };
    root.querySelectorAll('.paper-section').forEach(function (section) {
      const count = Array.from(section.querySelectorAll('.paper-card')).filter(function (card) { return !card.hidden; }).length;
      counts[section.dataset.kind] = count;
      counts.all += count;
      const heading = section.querySelector('h2');
      heading.textContent = heading.dataset.label + ' (' + count + ')';
      section.hidden = count === 0 || (selectedKind !== 'all' && section.dataset.kind !== selectedKind);
    });
    filters.forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.dataset.kind === selectedKind));
      const count = counts[button.dataset.kind] || 0;
      button.textContent = button.dataset.label + ' (' + count + ')';
      button.disabled = count === 0;
    });
  }
  function selectTopic(tab) {
    selectedKind = 'all';
    root.querySelector('.paper-filters').hidden = tab.dataset.topic === 'reports';
    if (reports) {
      if (tab.dataset.topic === 'all') panel.prepend(reports);
      else panel.append(reports);
    }
    tabs.forEach(function (candidate) {
      const selected = candidate === tab;
      candidate.setAttribute('aria-selected', String(selected));
      candidate.tabIndex = selected ? 0 : -1;
    });
    root.querySelectorAll('.paper-card').forEach(function (card) {
      card.hidden = tab.dataset.topic !== 'all' && !card.dataset.topics.split(' ').includes(tab.dataset.topic);
    });
    root.querySelectorAll('.paper-group, .paper-section').forEach(function (group) {
      group.hidden = !Array.from(group.querySelectorAll('.paper-card')).some(function (card) { return !card.hidden; });
    });
    panel.setAttribute('aria-labelledby', tab.id);
    filterStatus();
  }
  tabs.forEach(function (tab, index) {
    tab.addEventListener('click', function () { selectTopic(tab); });
    tab.addEventListener('keydown', function (event) {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next === undefined) return;
      event.preventDefault();
      tabs[next].focus();
      selectTopic(tabs[next]);
    });
  });
  selectTopic(tabs[0]);
  filters.forEach(function (button) {
    button.addEventListener('click', function () {
      selectedKind = button.dataset.kind;
      filterStatus();
    });
  });
  root.querySelector('.paper-filters').hidden = false;
  root.querySelector('[role="tablist"]').hidden = false;
}());
