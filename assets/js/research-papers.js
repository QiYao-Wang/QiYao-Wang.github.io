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
  viewer.append(closeButton, fullImage);
  root.append(viewer);
  closeButton.addEventListener('click', function () { viewer.close(); });
  viewer.addEventListener('click', function (event) {
    if (event.target !== viewer) return;
    const bounds = viewer.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) viewer.close();
  });
  root.querySelectorAll('.paper-figure').forEach(function (link) {
    link.addEventListener('click', function (event) {
      if (typeof viewer.showModal !== 'function') return;
      event.preventDefault();
      fullImage.src = link.href;
      fullImage.alt = link.querySelector('img').alt;
      viewer.showModal();
    });
  });
  const filters = Array.from(root.querySelectorAll('.paper-filters button'));
  let selectedKind = 'all';
  function filterStatus() {
    root.querySelectorAll('.paper-section').forEach(function (section) {
      const hasPapers = Array.from(section.querySelectorAll('.paper-card')).some(function (card) { return !card.hidden; });
      section.hidden = !hasPapers || (selectedKind !== 'all' && section.dataset.kind !== selectedKind);
    });
    filters.forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.dataset.kind === selectedKind));
      const section = root.querySelector('.paper-section[data-kind="' + button.dataset.kind + '"]');
      button.disabled = !!section && !Array.from(section.querySelectorAll('.paper-card')).some(function (card) { return !card.hidden; });
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
