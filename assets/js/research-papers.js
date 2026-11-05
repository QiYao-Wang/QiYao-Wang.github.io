(function () {
  const root = document.getElementById('research-papers');
  if (!root) return;
  const tabs = Array.from(root.querySelectorAll('[role="tab"]'));
  const panel = root.querySelector('[role="tabpanel"]');
  function selectTopic(tab) {
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
  root.querySelector('[role="tablist"]').hidden = false;
}());
