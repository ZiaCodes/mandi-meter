(function () {
  // Load Google Fonts async so they don't block first paint (CSP-safe, no inline handler)
  var fontLink = document.createElement('link');
  fontLink.rel = 'stylesheet';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap';
  document.head.appendChild(fontLink);
})();

(function () {
  var overlay = document.getElementById('coming-soon');
  var triggers = document.querySelectorAll('.js-download');
  var closers = document.querySelectorAll('.js-coming-soon-close');

  function openOverlay() {
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeOverlay() {
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  triggers.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      openOverlay();
    });
  });
  closers.forEach(function (el) {
    el.addEventListener('click', closeOverlay);
  });
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeOverlay();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) closeOverlay();
  });
})();

(function () {
  var btn = document.querySelector('.js-menu-toggle');
  var nav = document.getElementById('header-nav');
  var header = document.querySelector('.site-header');
  if (!btn || !nav) return;
  btn.addEventListener('click', function () {
    var open = header.classList.toggle('menu-open');
    btn.setAttribute('aria-expanded', open);
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      header.classList.remove('menu-open');
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-label', 'Open menu');
    });
  });
})();

(function () {
  var rotator = document.querySelector('.social-proof-rotator');
  if (!rotator) return;
  var items = rotator.querySelectorAll('.social-proof-item');
  var dots = rotator.querySelectorAll('.social-proof-dot');
  if (items.length <= 1) return;
  var index = 0;
  var intervalMs = 10 * 1000;
  function showNext() {
    items[index].classList.remove('is-visible');
    if (dots[index]) dots[index].classList.remove('is-active');
    index = (index + 1) % items.length;
    items[index].classList.add('is-visible');
    if (dots[index]) dots[index].classList.add('is-active');
  }
  setInterval(showNext, intervalMs);
})();
