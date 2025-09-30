(function () {
  const navbar = document.querySelector('.navbar');
  const toggle = document.querySelector('.navbar__toggle');
  const menu = document.getElementById('primary-navigation');

  if (!navbar || !toggle || !menu) return;

  const open = () => {
    navbar.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('no-scroll');
  };

  const close = () => {
    navbar.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('no-scroll');
  };

  toggle.addEventListener('click', () => {
    navbar.classList.contains('is-open') ? close() : open();
  });

  menu.addEventListener('click', (e) => {
    const el = e.target;
    if (el && el.tagName && el.tagName.toLowerCase() === 'a') close();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) close();
  });
})();
