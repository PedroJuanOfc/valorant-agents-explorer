(function () {
  const links = document.querySelectorAll('.navbar__list a[href]');
  if (!links.length) return;

  const current = location.pathname.split('/').pop() || 'index.html';

  links.forEach(a => {
    const target = a.getAttribute('href').split('/').pop();
    if (target === '#' || !target) return;

    if (target === current) {
      a.setAttribute('aria-current', 'page');
    } else {
      a.removeAttribute('aria-current');
    }
  });
})();
