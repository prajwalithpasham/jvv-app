/* =========================================================
   results.js
   Renders the results summary (results.html) and the full
   bilingual answer review (review.html). Both pages require
   a submitted exam attempt belonging to the logged-in
   student; answers cannot be changed from either page.
   ========================================================= */

function getSubmittedAttemptOrRedirect() {
  const session = requireStudentSession();
  if (!session) return null;
  const attempt = JVVStorage.get(JVV_KEYS.ATTEMPT, null);
  if (!attempt || attempt.studentEmail !== session.email || !attempt.submitted) {
    window.location.href = 'exam-instructions.html';
    return null;
  }
  return attempt;
}

/* ---------------- Results page ---------------- */
function initResultsPage() {
  const root = document.getElementById('results-root');
  if (!root) return;
  const attempt = getSubmittedAttemptOrRedirect();
  if (!attempt) return;

  const score = attempt.score || computeScore(attempt);

  document.getElementById('result-correct').textContent = score.correct;
  document.getElementById('result-incorrect').textContent = score.incorrect;
  document.getElementById('result-unanswered').textContent = score.unanswered;
  document.getElementById('result-marks').textContent = `${score.marks}/${score.max}`;
  document.getElementById('result-total').textContent = score.total;

  const pct = score.percentage;
  const ringLabel = document.getElementById('score-ring-pct');
  if (ringLabel) ringLabel.textContent = pct + '%';

  const circle = document.getElementById('score-ring-fg');
  if (circle) {
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    circle.style.strokeDasharray = `${circumference}`;
    circle.style.strokeDashoffset = `${circumference * (1 - pct / 100)}`;
  }

  let message = '';
  if (pct >= 80) message = 'Excellent work — your scientific thinking is really shining through!';
  else if (pct >= 50) message = 'Good effort! Review the explanations below to strengthen a few topics.';
  else message = 'Keep exploring — every mistake here is a chance to learn something new about science.';
  const msgEl = document.getElementById('result-message');
  if (msgEl) msgEl.textContent = message;

  const submittedDate = new Date(attempt.submittedAt);
  const timeEl = document.getElementById('result-submitted-at');
  if (timeEl) timeEl.textContent = submittedDate.toLocaleString();
}

/* ---------------- Review page ---------------- */
function initReviewPage() {
  const list = document.getElementById('review-list');
  if (!list) return;
  const attempt = getSubmittedAttemptOrRedirect();
  if (!attempt) return;

  let activeFilter = 'all';
  const filterBar = document.getElementById('review-filter-bar');

  function statusFor(q) {
    const given = attempt.answers[q.id];
    if (!given) return 'unanswered';
    return given === q.correct ? 'correct' : 'incorrect';
  }

  function draw() {
    const items = CHEKUMUKHI_QUESTIONS.filter(q => activeFilter === 'all' || statusFor(q) === activeFilter);
    if (!items.length) {
      list.innerHTML = `<div class="empty-state"><p>No questions match this filter.</p></div>`;
      return;
    }
    list.innerHTML = items.map((q) => {
      const idx = CHEKUMUKHI_QUESTIONS.indexOf(q);
      const given = attempt.answers[q.id];
      const status = statusFor(q);
      return `
      <article class="card review-item">
        <div class="review-item-head">
          <div>
            <div class="question-count" style="margin-bottom:6px;">Question ${idx + 1} &middot; ${escapeHtml(q.topic)}</div>
            <div class="q-en">${escapeHtml(q.en)}</div>
            <div class="q-te te-text">${escapeHtml(q.te)}</div>
          </div>
          <span class="review-status ${status}">${status}</span>
        </div>
        <ul class="review-opts">
          ${q.options.map(opt => {
            const classes = [];
            if (opt.id === q.correct) classes.push('is-correct');
            if (given === opt.id && opt.id !== q.correct) classes.push('is-wrong-pick');
            const tagParts = [];
            if (opt.id === q.correct) tagParts.push('Correct answer');
            if (given === opt.id) tagParts.push('Your answer');
            const tag = tagParts.length ? ` — <em>${tagParts.join(' · ')}</em>` : '';
            return `<li class="${classes.join(' ')}"><span class="opt-en">${escapeHtml(opt.en)}</span> <span class="opt-te te-text">${escapeHtml(opt.te)}</span>${tag}</li>`;
          }).join('')}
        </ul>
        ${q.explanation_en ? `<div class="review-explain"><strong>Why:</strong> ${escapeHtml(q.explanation_en)}<br><span class="te-text">${escapeHtml(q.explanation_te)}</span></div>` : ''}
      </article>`;
    }).join('');
  }

  if (filterBar) {
    filterBar.addEventListener('click', (e) => {
      const chip = e.target.closest('.filter-chip');
      if (!chip) return;
      filterBar.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('is-active'));
      chip.classList.add('is-active');
      activeFilter = chip.getAttribute('data-filter');
      draw();
    });
  }

  draw();
}

document.addEventListener('DOMContentLoaded', () => {
  initResultsPage();
  initReviewPage();
});
