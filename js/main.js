/* =========================================================
   main.js
   Shared, site-wide behaviour: toasts, scroll reveals,
   3D tilt hover, hero particle generation, misc helpers.
   Loaded on every page after navigation.js.
   ========================================================= */

/* ---------- Toasts ---------- */
const JVVToast = (function () {
  let stack;
  function ensureStack() {
    if (!stack) {
      stack = document.createElement('div');
      stack.className = 'toast-stack';
      stack.setAttribute('aria-live', 'polite');
      stack.setAttribute('role', 'status');
      document.body.appendChild(stack);
    }
    return stack;
  }
  function show(message, type = 'info', duration = 3600) {
    const el = document.createElement('div');
    el.className = `toast toast-${type}`;
    el.textContent = message;
    ensureStack().appendChild(el);
    setTimeout(() => {
      el.style.transition = 'opacity .3s ease';
      el.style.opacity = '0';
      setTimeout(() => el.remove(), 300);
    }, duration);
  }
  return { show };
})();

/* ---------- Footer year ---------- */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });
});

/* ---------- Scroll reveal ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;
  if (!('IntersectionObserver' in window)) {
    items.forEach(i => i.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(i => io.observe(i));
});

/* ---------- 3D tilt hover (pointer devices only) ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (prefersReduced || !isFinePointer) return;

  document.querySelectorAll('.tilt-card').forEach(card => {
    const maxTilt = 7;
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const ry = (px - 0.5) * maxTilt * 2;
      const rx = (0.5 - py) * maxTilt * 2;
      card.style.setProperty('--rx', rx.toFixed(2) + 'deg');
      card.style.setProperty('--ry', ry.toFixed(2) + 'deg');
    });
    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
    });
  });
});

/* ---------- Hero particle field ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const field = document.querySelector('[data-particle-field]');
  if (!field) return;
  const count = window.innerWidth < 680 ? 10 : 18;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('span');
    p.className = 'hero-particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.top = Math.random() * 100 + '%';
    p.style.animationDelay = (Math.random() * 6).toFixed(2) + 's';
    p.style.animationDuration = (7 + Math.random() * 6).toFixed(2) + 's';
    field.appendChild(p);
  }
});

/* ---------- Generic modal helpers ---------- */
function openModal(overlayEl) {
  if (!overlayEl) return;
  overlayEl.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  const focusTarget = overlayEl.querySelector('[data-autofocus]') || overlayEl.querySelector('button, input, a');
  if (focusTarget) setTimeout(() => focusTarget.focus(), 30);
}
function closeModal(overlayEl) {
  if (!overlayEl) return;
  overlayEl.classList.remove('is-open');
  document.body.style.overflow = '';
}
document.addEventListener('click', (e) => {
  if (e.target.matches('.modal-overlay')) closeModal(e.target);
  if (e.target.matches('[data-close-modal]')) {
    closeModal(e.target.closest('.modal-overlay'));
  }
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.is-open').forEach(closeModal);
  }
});

/* ---------- Password show/hide ---------- */
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.password-toggle');
  if (!btn) return;
  const input = document.getElementById(btn.getAttribute('data-target'));
  if (!input) return;
  const isPassword = input.type === 'password';
  input.type = isPassword ? 'text' : 'password';
  btn.textContent = isPassword ? 'HIDE' : 'SHOW';
  btn.setAttribute('aria-pressed', String(isPassword));
});

/* ---------- Small utils ---------- */
function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

function formatDuration(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}
