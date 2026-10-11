/* =========================================================
   navigation.js
   Handles the mobile nav drawer and active-link state.
   Because this is a plain multi-page HTML site (no backend
   templating, no fetch() of partials — which would fail
   under file:// anyway), every page carries its own copy of
   the header/footer markup. This script only wires up
   behaviour that markup needs.
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.nav-mobile');

  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('is-open');
      document.body.classList.toggle('nav-open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileNav.classList.remove('is-open');
        document.body.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Mark active link based on current filename
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-desktop a, .nav-mobile a').forEach(a => {
    const href = a.getAttribute('href');
    if (!href) return;
    const target = href.split('/').pop();
    if (target === path || (path === '' && target === 'index.html')) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    }
  });

  // Reflect logged-in state in the header (Login/Register vs Dashboard/Logout)
  renderAuthAwareNav();
});

function renderAuthAwareNav() {
  const session = JVVStorage.get(JVV_KEYS.SESSION, null);
  const slot = document.querySelector('[data-nav-auth-slot]');
  const mobileSlot = document.querySelector('[data-nav-auth-slot-mobile]');
  if (!slot && !mobileSlot) return;

  let html;
  if (session && session.role === 'student') {
    html = `
      <a href="dashboard.html" class="btn btn-ghost btn-sm">Dashboard</a>
      <button type="button" class="btn btn-primary btn-sm" data-logout>Logout</button>`;
  } else if (session && session.role === 'member') {
    html = `
      <a href="member-dashboard.html" class="btn btn-ghost btn-sm">Member Area</a>
      <button type="button" class="btn btn-primary btn-sm" data-logout>Logout</button>`;
  } else {
    html = `
      <a href="login.html" class="btn btn-ghost btn-sm">Login</a>
      <a href="register.html" class="btn btn-primary btn-sm">Register</a>`;
  }
  if (slot) slot.innerHTML = html;
  if (mobileSlot) mobileSlot.innerHTML = html.replace(/btn-sm/g, 'btn-block').replace(/btn-ghost/g, 'btn-secondary');

  document.querySelectorAll('[data-logout]').forEach(btn => {
    btn.addEventListener('click', () => {
      JVVStorage.remove(JVV_KEYS.SESSION);
      JVVToast.show('You have been logged out.', 'info');
      setTimeout(() => { window.location.href = 'index.html'; }, 500);
    });
  });
}
