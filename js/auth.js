/* =========================================================
   auth.js
   Demonstration-only registration & login flows.

   IMPORTANT: This is a frontend prototype. There is no
   server, no database, and no real account creation.
   "Passwords" below are stored in plain text in the
   browser's LocalStorage purely so the demo login flow has
   something to check against. Never reuse a real password
   here, and never present this code as production-grade
   authentication (see SRS NFR-09).
   ========================================================= */

const DEMO_STUDENT_ACCOUNT = {
  fullName: 'Demo Student',
  email: 'student@demo.jvv',
  password: 'Demo@123',
  mobile: '9999999999',
  studentClass: '9',
  school: 'JVV Demonstration School',
  district: 'Hanamkonda'
};

const DEMO_MEMBERS = [
  { memberId: 'member@demo.jvv', password: 'Member@123', name: 'Demo JVV Member' }
];

function seedDemoAccountsIfNeeded() {
  const students = JVVStorage.get(JVV_KEYS.STUDENTS, null);
  if (!students) {
    JVVStorage.set(JVV_KEYS.STUDENTS, [DEMO_STUDENT_ACCOUNT]);
  } else if (!students.find(s => s.email === DEMO_STUDENT_ACCOUNT.email)) {
    students.push(DEMO_STUDENT_ACCOUNT);
    JVVStorage.set(JVV_KEYS.STUDENTS, students);
  }
  if (!JVVStorage.get(JVV_KEYS.MEMBERS, null)) {
    JVVStorage.set(JVV_KEYS.MEMBERS, DEMO_MEMBERS);
  }
}

/* ---------------- Validation helpers ---------------- */
function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}
function isValidMobile(value) {
  return /^[6-9]\d{9}$/.test(value.trim());
}

function setFieldError(fieldEl, message) {
  fieldEl.classList.add('has-error');
  const err = fieldEl.querySelector('.field-error');
  if (err) err.textContent = message;
}
function clearFieldError(fieldEl) {
  fieldEl.classList.remove('has-error');
}

/* ---------------- Registration ---------------- */
function initRegisterForm() {
  const form = document.getElementById('register-form');
  if (!form) return;
  seedDemoAccountsIfNeeded();

  const pwInput = form.querySelector('#reg-password');
  const pwBar = form.querySelector('.password-strength-bar');
  if (pwInput && pwBar) {
    pwInput.addEventListener('input', () => {
      const v = pwInput.value;
      let score = 0;
      if (v.length >= 8) score++;
      if (/[A-Z]/.test(v)) score++;
      if (/[0-9]/.test(v)) score++;
      if (/[^A-Za-z0-9]/.test(v)) score++;
      const pct = (score / 4) * 100;
      const colors = ['#ff5d6c', '#ff5d6c', '#ffb648', '#2ee6c4', '#3ee68a'];
      pwBar.style.width = pct + '%';
      pwBar.style.background = colors[score];
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;
    const fields = {
      fullName: form.querySelector('#reg-fullname'),
      email: form.querySelector('#reg-email'),
      mobile: form.querySelector('#reg-mobile'),
      studentClass: form.querySelector('#reg-class'),
      school: form.querySelector('#reg-school'),
      district: form.querySelector('#reg-district'),
      password: form.querySelector('#reg-password'),
      confirmPassword: form.querySelector('#reg-confirm-password'),
      terms: form.querySelector('#reg-terms')
    };

    function wrap(el) { return el.closest('.field'); }

    if (!fields.fullName.value.trim()) { setFieldError(wrap(fields.fullName), 'Please enter your full name.'); valid = false; }
    else clearFieldError(wrap(fields.fullName));

    if (!fields.email.value.trim() || !isValidEmail(fields.email.value)) { setFieldError(wrap(fields.email), 'Enter a valid email address.'); valid = false; }
    else clearFieldError(wrap(fields.email));

    if (!fields.mobile.value.trim() || !isValidMobile(fields.mobile.value)) { setFieldError(wrap(fields.mobile), 'Enter a valid 10-digit mobile number.'); valid = false; }
    else clearFieldError(wrap(fields.mobile));

    if (!fields.studentClass.value) { setFieldError(wrap(fields.studentClass), 'Please select your class.'); valid = false; }
    else clearFieldError(wrap(fields.studentClass));

    if (!fields.school.value.trim()) { setFieldError(wrap(fields.school), 'Please enter your school name.'); valid = false; }
    else clearFieldError(wrap(fields.school));

    if (!fields.district.value.trim()) { setFieldError(wrap(fields.district), 'Please enter your district.'); valid = false; }
    else clearFieldError(wrap(fields.district));

    if (!fields.password.value || fields.password.value.length < 6) { setFieldError(wrap(fields.password), 'Password must be at least 6 characters.'); valid = false; }
    else clearFieldError(wrap(fields.password));

    if (fields.confirmPassword.value !== fields.password.value || !fields.confirmPassword.value) {
      setFieldError(wrap(fields.confirmPassword), 'Passwords do not match.'); valid = false;
    } else clearFieldError(wrap(fields.confirmPassword));

    if (fields.terms && !fields.terms.checked) {
      setFieldError(wrap(fields.terms), 'Please acknowledge the demonstration terms.'); valid = false;
    } else if (fields.terms) clearFieldError(wrap(fields.terms));

    if (!valid) {
      showNotice('register-notice', 'Please fix the highlighted fields.', 'error');
      return;
    }

    const students = JVVStorage.get(JVV_KEYS.STUDENTS, []);
    if (students.find(s => s.email.toLowerCase() === fields.email.value.trim().toLowerCase())) {
      setFieldError(wrap(fields.email), 'An account with this email already exists in this browser.');
      showNotice('register-notice', 'This email is already registered on this device.', 'error');
      return;
    }

    students.push({
      fullName: fields.fullName.value.trim(),
      email: fields.email.value.trim(),
      mobile: fields.mobile.value.trim(),
      studentClass: fields.studentClass.value,
      school: fields.school.value.trim(),
      district: fields.district.value.trim(),
      password: fields.password.value
    });
    JVVStorage.set(JVV_KEYS.STUDENTS, students);

    showNotice('register-notice', 'Demonstration registration successful! Redirecting to login…', 'success');
    form.querySelectorAll('button[type="submit"]').forEach(b => b.disabled = true);
    setTimeout(() => { window.location.href = 'login.html?registered=1'; }, 1200);
  });
}

/* ---------------- Student Login ---------------- */
function initLoginForm() {
  const form = document.getElementById('login-form');
  if (!form) return;
  seedDemoAccountsIfNeeded();

  const params = new URLSearchParams(window.location.search);
  if (params.get('registered') === '1') {
    showNotice('login-notice', 'Registration complete. Please log in with your new demo account.', 'success');
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('#login-email').value.trim();
    const password = form.querySelector('#login-password').value;

    if (!email || !password) {
      showNotice('login-notice', 'Please enter both email and password.', 'error');
      return;
    }

    const students = JVVStorage.get(JVV_KEYS.STUDENTS, []);
    const match = students.find(s => s.email.toLowerCase() === email.toLowerCase() && s.password === password);

    if (!match) {
      showNotice('login-notice', 'Invalid email or password. Try the demo account: student@demo.jvv / Demo@123', 'error');
      return;
    }

    JVVStorage.set(JVV_KEYS.SESSION, { role: 'student', email: match.email, name: match.fullName });
    showNotice('login-notice', 'Login successful! Redirecting to your dashboard…', 'success');
    setTimeout(() => { window.location.href = 'dashboard.html'; }, 700);
  });
}

/* ---------------- Member Login ---------------- */
function initMemberLoginForm() {
  const form = document.getElementById('member-login-form');
  if (!form) return;
  seedDemoAccountsIfNeeded();

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const memberId = form.querySelector('#member-email').value.trim();
    const password = form.querySelector('#member-password').value;

    if (!memberId || !password) {
      showNotice('member-login-notice', 'Please enter both your member ID and password.', 'error');
      return;
    }

    const members = JVVStorage.get(JVV_KEYS.MEMBERS, DEMO_MEMBERS);
    const match = members.find(m => m.memberId.toLowerCase() === memberId.toLowerCase() && m.password === password);

    if (!match) {
      showNotice('member-login-notice', 'Invalid member credentials. Try the demo account: member@demo.jvv / Member@123', 'error');
      return;
    }

    JVVStorage.set(JVV_KEYS.SESSION, { role: 'member', email: match.memberId, name: match.name });
    showNotice('member-login-notice', 'Member login successful! Redirecting…', 'success');
    setTimeout(() => { window.location.href = 'member-dashboard.html'; }, 700);
  });
}

/* ---------------- Notices ---------------- */
function showNotice(id, message, type) {
  const el = document.getElementById(id);
  if (!el) { JVVToast.show(message, type); return; }
  el.textContent = message;
  el.className = `notice notice-${type} is-visible`;
}

/* ---------------- Route guards ---------------- */
function requireStudentSession(redirectTo = 'login.html') {
  const session = JVVStorage.get(JVV_KEYS.SESSION, null);
  if (!session || session.role !== 'student') {
    window.location.href = redirectTo;
    return null;
  }
  return session;
}
function requireMemberSession(redirectTo = 'member-login.html') {
  const session = JVVStorage.get(JVV_KEYS.SESSION, null);
  if (!session || session.role !== 'member') {
    window.location.href = redirectTo;
    return null;
  }
  return session;
}

document.addEventListener('DOMContentLoaded', () => {
  initRegisterForm();
  initLoginForm();
  initMemberLoginForm();
});
