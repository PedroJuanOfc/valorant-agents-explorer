(function () {
  const links = Array.from(document.querySelectorAll('.navbar__list a[href]'));
  if (!links.length) return;

  const isHashLink = (href) => href.trim().startsWith('#');
  const hasPageLinks = links.some(a => !isHashLink(a.getAttribute('href')) && a.getAttribute('href') !== '#');

  function clear() {
    links.forEach(a => a.removeAttribute('aria-current'));
  }

  function markByPath() {
    const file = (location.pathname.split('/').pop() || 'index.html').toLowerCase();

    clear();
    links.forEach(a => {
      const href = a.getAttribute('href') || '';
      if (isHashLink(href) || href === '#') return;

      const target = href.split('#')[0].split('/').pop().toLowerCase();
      const normalizedTarget = target || 'index.html';
      if (normalizedTarget === file) {
        a.setAttribute('aria-current', 'page');
      }
    });
  }

  function markByHash() {
    const currentHash = location.hash || '';
    clear();
    links.forEach(a => {
      const href = a.getAttribute('href') || '';
      if (!isHashLink(href)) return;
      if (href === currentHash) {
        a.setAttribute('aria-current', 'location');
      }
    });
  }

  if (hasPageLinks) {
    markByPath();
  } else {
    markByHash();
    window.addEventListener('hashchange', markByHash);
    links.forEach(a => a.addEventListener('click', () => {
      if (isHashLink(a.getAttribute('href'))) {
        clear();
        a.setAttribute('aria-current', 'location');
      }
    }));
  }
})();
