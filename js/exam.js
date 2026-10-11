/* =========================================================
   exam.js
   The Chekumukhi examination engine.

   Demonstration limitations (see SRS 7.5 / FR-06):
   this is a frontend-only simulation. The browser timer is
   NOT tamper-proof, there is no server-side score validation,
   and a determined user could inspect the local answer key.
   None of that is hidden from the student — see the notice
   on the instructions page.
   ========================================================= */

const EXAM_CONFIG = {
  durationMinutes: 60,     // configurable default duration (SRS 7.3)
  marksPerCorrect: 1,
  marksPerIncorrect: 0,    // no negative marking
  totalQuestions: 50
};

let examTimerHandle = null;
let currentAttempt = null;
let currentIndex = 0;

/* ---------------- Attempt lifecycle ---------------- */
function isAttemptShapeValid(attempt) {
  return attempt && typeof attempt === 'object' &&
    typeof attempt.answers === 'object' &&
    typeof attempt.markedForReview === 'object' &&
    typeof attempt.startedAt === 'number' &&
    typeof attempt.durationSeconds === 'number';
}

function startNewAttempt(session) {
  const attempt = {
    studentEmail: session.email,
    startedAt: Date.now(),
    durationSeconds: EXAM_CONFIG.durationMinutes * 60,
    answers: {},
    markedForReview: {},
    currentIndex: 0,
    submitted: false,
    submittedAt: null,
    score: null
  };
  JVVStorage.set(JVV_KEYS.ATTEMPT, attempt);
  return attempt;
}

function loadOrCreateAttempt(session) {
  let attempt = JVVStorage.get(JVV_KEYS.ATTEMPT, null);

  if (attempt && !isAttemptShapeValid(attempt)) {
    JVVToast.show('Your previous exam data looked corrupted, so a fresh attempt has been started.', 'error', 5000);
    attempt = null;
  }

  if (!attempt || attempt.studentEmail !== session.email) {
    return startNewAttempt(session);
  }

  if (attempt.submitted) {
    return attempt; // caller decides to redirect to results
  }

  return attempt; // resume in-progress attempt
}

function persistAttempt() {
  JVVStorage.set(JVV_KEYS.ATTEMPT, currentAttempt);
}

/* ---------------- Scoring ---------------- */
function computeScore(attempt) {
  let correct = 0, incorrect = 0, unanswered = 0;
  CHEKUMUKHI_QUESTIONS.forEach(q => {
    const given = attempt.answers[q.id];
    if (!given) { unanswered++; }
    else if (given === q.correct) { correct++; }
    else { incorrect++; }
  });
  const marks = correct * EXAM_CONFIG.marksPerCorrect;
  const max = CHEKUMUKHI_QUESTIONS.length * EXAM_CONFIG.marksPerCorrect;
  const percentage = max > 0 ? Math.round((marks / max) * 1000) / 10 : 0;
  return { correct, incorrect, unanswered, marks, max, percentage, total: CHEKUMUKHI_QUESTIONS.length };
}

/* ---------------- Rendering ---------------- */
function renderLangPrefClass() {
  const pref = JVVStorage.get(JVV_KEYS.LANG_PREF, 'both');
  const body = document.body;
  body.classList.remove('lang-hide-en', 'lang-hide-te');
  if (pref === 'en') body.classList.add('lang-hide-te');
  if (pref === 'te') body.classList.add('lang-hide-en');
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('is-active', b.getAttribute('data-lang') === pref);
  });
}

function renderQuestion() {
  const q = CHEKUMUKHI_QUESTIONS[currentIndex];
  const panel = document.getElementById('question-panel-body');
  const given = currentAttempt.answers[q.id];
  const marked = !!currentAttempt.markedForReview[q.id];

  document.getElementById('question-count').textContent = `Question ${currentIndex + 1} of ${CHEKUMUKHI_QUESTIONS.length}`;
  document.getElementById('question-topic-badge').textContent = q.topic;

  panel.innerHTML = `
    <div class="question-text-block">
      <div class="q-en">${currentIndex + 1}. ${escapeHtml(q.en)}</div>
      <div class="q-te te-text">${currentIndex + 1}. ${escapeHtml(q.te)}</div>
    </div>
    <ul class="options-list" role="radiogroup" aria-label="Answer options">
      ${q.options.map((opt, i) => `
        <li class="option-item">
          <input type="radio" name="q-${q.id}" id="opt-${q.id}-${opt.id}" value="${opt.id}" ${given === opt.id ? 'checked' : ''}>
          <label for="opt-${q.id}-${opt.id}">
            <span class="opt-marker">${String.fromCharCode(65 + i)}</span>
            <span class="opt-text">
              <span class="opt-en">${escapeHtml(opt.en)}</span>
              <span class="opt-te te-text">${escapeHtml(opt.te)}</span>
            </span>
          </label>
        </li>
      `).join('')}
    </ul>
  `;

  panel.querySelectorAll('input[type="radio"]').forEach(input => {
    input.addEventListener('change', () => {
      if (currentAttempt.submitted) return;
      currentAttempt.answers[q.id] = input.value;
      persistAttempt();
      renderPalette();
    });
  });

  const markBtn = document.getElementById('mark-review-btn');
  markBtn.classList.toggle('is-marked', marked);
  markBtn.textContent = marked ? '\u2605 Marked for Review' : '\u2606 Mark for Review';

  document.getElementById('prev-btn').disabled = currentIndex === 0;
  document.getElementById('next-btn').textContent = currentIndex === CHEKUMUKHI_QUESTIONS.length - 1 ? 'Review & Submit' : 'Next ›';

  renderLangPrefClass();
  updatePaletteCurrent();
}

function paletteButtonState(q) {
  const answered = !!currentAttempt.answers[q.id];
  const marked = !!currentAttempt.markedForReview[q.id];
  return { answered, marked };
}

function renderPalette() {
  const containers = document.querySelectorAll('.palette-grid');
  const html = CHEKUMUKHI_QUESTIONS.map((q, i) => {
    const { answered, marked } = paletteButtonState(q);
    const classes = ['palette-btn'];
    if (answered) classes.push('answered');
    if (marked) classes.push('marked');
    if (i === currentIndex) classes.push('current');
    return `<button type="button" class="${classes.join(' ')}" data-index="${i}" aria-current="${i === currentIndex ? 'true' : 'false'}" aria-label="Question ${i + 1}${answered ? ', answered' : ', unanswered'}${marked ? ', marked for review' : ''}">${i + 1}</button>`;
  }).join('');
  containers.forEach(c => { c.innerHTML = html; });
  updateProgressText();
}

function updatePaletteCurrent() {
  document.querySelectorAll('.palette-btn').forEach(btn => {
    btn.classList.toggle('current', Number(btn.dataset.index) === currentIndex);
  });
}

function updateProgressText() {
  const answeredCount = Object.keys(currentAttempt.answers).length;
  const el = document.getElementById('exam-progress-text');
  if (el) el.textContent = `${answeredCount} of ${CHEKUMUKHI_QUESTIONS.length} answered`;
}

function goToIndex(i) {
  if (i < 0 || i >= CHEKUMUKHI_QUESTIONS.length) return;
  currentIndex = i;
  currentAttempt.currentIndex = i;
  persistAttempt();
  renderQuestion();
  renderPalette();
  const drawer = document.getElementById('palette-drawer');
  if (drawer) { drawer.classList.remove('is-open'); document.getElementById('palette-drawer-overlay').classList.remove('is-open'); }
  document.getElementById('question-panel-body').closest('.question-panel').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ---------------- Timer ---------------- */
function startTimer() {
  if (examTimerHandle) clearInterval(examTimerHandle);
  examTimerHandle = setInterval(() => {
    const elapsedSec = Math.floor((Date.now() - currentAttempt.startedAt) / 1000);
    const remaining = currentAttempt.durationSeconds - elapsedSec;
    if (remaining <= 0) {
      renderTimer(0);
      clearInterval(examTimerHandle);
      examTimerHandle = null;
      autoSubmit();
      return;
    }
    renderTimer(remaining);
  }, 1000);
  // Render immediately so there's no 1s blank flash
  const elapsedSec = Math.floor((Date.now() - currentAttempt.startedAt) / 1000);
  renderTimer(Math.max(0, currentAttempt.durationSeconds - elapsedSec));
}

function renderTimer(remainingSeconds) {
  const pill = document.getElementById('timer-pill');
  if (!pill) return;
  pill.textContent = formatDuration(remainingSeconds);
  pill.classList.toggle('is-warning', remainingSeconds <= 300 && remainingSeconds > 60);
  pill.classList.toggle('is-critical', remainingSeconds <= 60);
}

/* ---------------- Submission ---------------- */
function openSubmitConfirmation() {
  const answered = Object.keys(currentAttempt.answers).length;
  const unanswered = CHEKUMUKHI_QUESTIONS.length - answered;
  document.getElementById('confirm-answered').textContent = answered;
  document.getElementById('confirm-unanswered').textContent = unanswered;
  document.getElementById('confirm-marked').textContent = Object.keys(currentAttempt.markedForReview).filter(k => currentAttempt.markedForReview[k]).length;
  openModal(document.getElementById('submit-modal'));
}

function finalizeSubmission() {
  currentAttempt.submitted = true;
  currentAttempt.submittedAt = Date.now();
  currentAttempt.score = computeScore(currentAttempt);
  persistAttempt();
  if (examTimerHandle) { clearInterval(examTimerHandle); examTimerHandle = null; }
  window.location.href = 'results.html';
}

function autoSubmit() {
  JVVToast.show('Time is up — submitting your exam automatically…', 'info', 2500);
  setTimeout(finalizeSubmission, 1200);
}

/* ---------------- Init ---------------- */
function initExamPage() {
  const examRoot = document.getElementById('exam-root');
  if (!examRoot) return;

  const session = requireStudentSession();
  if (!session) return;

  currentAttempt = loadOrCreateAttempt(session);

  if (currentAttempt.submitted) {
    window.location.href = 'results.html';
    return;
  }

  currentIndex = Math.min(currentAttempt.currentIndex || 0, CHEKUMUKHI_QUESTIONS.length - 1);

  renderPalette();
  renderQuestion();
  startTimer();

  document.getElementById('prev-btn').addEventListener('click', () => goToIndex(currentIndex - 1));
  document.getElementById('next-btn').addEventListener('click', () => {
    if (currentIndex === CHEKUMUKHI_QUESTIONS.length - 1) {
      openSubmitConfirmation();
    } else {
      goToIndex(currentIndex + 1);
    }
  });

  document.getElementById('mark-review-btn').addEventListener('click', () => {
    const q = CHEKUMUKHI_QUESTIONS[currentIndex];
    currentAttempt.markedForReview[q.id] = !currentAttempt.markedForReview[q.id];
    persistAttempt();
    renderQuestion();
    renderPalette();
  });

  document.getElementById('submit-exam-btn').addEventListener('click', openSubmitConfirmation);
  const submitSideBtn = document.getElementById('submit-exam-btn-side');
  if (submitSideBtn) submitSideBtn.addEventListener('click', openSubmitConfirmation);

  document.getElementById('confirm-submit-btn').addEventListener('click', () => {
    closeModal(document.getElementById('submit-modal'));
    finalizeSubmission();
  });
  document.getElementById('cancel-submit-btn').addEventListener('click', () => {
    closeModal(document.getElementById('submit-modal'));
  });

  document.querySelectorAll('.palette-grid').forEach(grid => {
    grid.addEventListener('click', (e) => {
      const btn = e.target.closest('.palette-btn');
      if (btn) goToIndex(Number(btn.dataset.index));
    });
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      JVVStorage.set(JVV_KEYS.LANG_PREF, btn.getAttribute('data-lang'));
      renderLangPrefClass();
    });
  });

  // Mobile palette drawer
  const fab = document.getElementById('palette-fab');
  const drawer = document.getElementById('palette-drawer');
  const overlay = document.getElementById('palette-drawer-overlay');
  if (fab && drawer && overlay) {
    fab.addEventListener('click', () => { drawer.classList.add('is-open'); overlay.classList.add('is-open'); });
    overlay.addEventListener('click', () => { drawer.classList.remove('is-open'); overlay.classList.remove('is-open'); });
  }

  // Warn before leaving mid-exam (best-effort only; not guaranteed by browsers)
  window.addEventListener('beforeunload', (e) => {
    if (currentAttempt && !currentAttempt.submitted) {
      e.preventDefault();
      e.returnValue = '';
    }
  });
}

document.addEventListener('DOMContentLoaded', initExamPage);
