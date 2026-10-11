/* =========================================================
   dashboard.js
   Session guards and welcome personalization for the student
   dashboard and the member dashboard. Both are illustrative,
   locally-stored demonstration areas — not real student or
   membership records (see SRS FR-05 / FR-15).
   ========================================================= */

function initStudentDashboard() {
  const root = document.getElementById('student-dashboard-root');
  if (!root) return;
  const session = requireStudentSession();
  if (!session) return;

  const nameEl = document.getElementById('dash-student-name');
  if (nameEl) nameEl.textContent = session.name || 'Student';

  const attempt = JVVStorage.get(JVV_KEYS.ATTEMPT, null);
  const statusEl = document.getElementById('dash-test-status');
  const ctaEl = document.getElementById('dash-test-cta');
  if (statusEl && ctaEl) {
    if (attempt && attempt.studentEmail === session.email && attempt.submitted) {
      statusEl.innerHTML = `<span class="dash-status-pill"><span class="dot"></span>Attempted</span>`;
      ctaEl.textContent = 'View Results';
      ctaEl.href = 'results.html';
    } else if (attempt && attempt.studentEmail === session.email && !attempt.submitted) {
      statusEl.innerHTML = `<span class="dash-status-pill" style="color:var(--amber);border-color:rgba(255,182,72,0.3);background:rgba(255,182,72,0.1);"><span class="dot" style="background:var(--amber);"></span>In Progress</span>`;
      ctaEl.textContent = 'Resume Test';
      ctaEl.href = 'exam.html';
    } else {
      statusEl.innerHTML = `<span class="dash-status-pill"><span class="dot"></span>Available Now</span>`;
      ctaEl.textContent = 'Start Test';
      ctaEl.href = 'exam-instructions.html';
    }
  }
}

function initMemberDashboard() {
  const root = document.getElementById('member-dashboard-root');
  if (!root) return;
  const session = requireMemberSession();
  if (!session) return;
  const nameEl = document.getElementById('dash-member-name');
  if (nameEl) nameEl.textContent = session.name || 'Member';
}

document.addEventListener('DOMContentLoaded', () => {
  initStudentDashboard();
  initMemberDashboard();
});
