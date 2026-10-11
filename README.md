# Jana Vignana Vedika — Chekumukhi Science Talent Test Platform

A fully interactive, frontend-only prototype built with **HTML5, CSS3 and vanilla JavaScript** (no frameworks, no backend, no database), implementing the Software Requirements Specification and master development prompt supplied for this project.

---

## 1. Running the project locally

This is a static website — no build step, no `npm install`, no server required.

**Option A — Open directly**
Double-click `index.html` (or open it with your browser's "Open File" dialog). All navigation, registration, login, and the examination work entirely client-side.

**Option B — Local web server (recommended)**
Some browsers restrict certain features for files opened directly from disk. For the smoothest experience, serve the folder with any simple static server, for example:

```bash
# Python 3
cd jvv-chekumukhi
python3 -m http.server 8080
# then open http://localhost:8080/index.html

# or, with Node.js installed
npx serve .
```

No environment variables, API keys, or configuration are needed.

---

## 2. Demo accounts

| Role    | Identifier            | Password     |
|---------|------------------------|--------------|
| Student | `student@demo.jvv`     | `Demo@123`   |
| Member  | `member@demo.jvv`      | `Member@123` |

You can also register your own demonstration student account from `register.html` — it is stored only in your browser's LocalStorage.

---

## 3. Project structure

```
jvv-chekumukhi/
├── index.html                 Home / landing page
├── register.html              Student registration
├── login.html                 Student login
├── member-login.html          JVV member login
├── dashboard.html              Student dashboard
├── exam-instructions.html     Pre-exam instructions
├── exam.html                  The Chekumukhi examination engine
├── results.html               Score summary
├── review.html                Full bilingual answer review
├── science-cards.html         27 interactive science Q&A cards
├── about.html                 About Jana Vignana Vedika
├── chekumukhi.html            Chekumukhi Test & Sambaraalu stages
├── activities.html             JVV activities & campaigns
├── samata.html                 Samata — Women's Wing
├── publications.html          Publications & digital media
├── member-dashboard.html      Member area
│
├── css/
│   ├── style.css              Design tokens, layout, header/footer, buttons, forms
│   ├── responsive.css         Breakpoints (mobile / tablet / desktop)
│   ├── animations.css         Hero visuals, reveal-on-scroll, keyframes
│   ├── auth.css               Auth page extras
│   ├── exam.css                Examination interface (palette, timer, options)
│   └── components.css         Cards, badges, dashboards, results, review, timeline
│
├── js/
│   ├── storage.js             LocalStorage wrapper (namespaced, fails gracefully)
│   ├── main.js                 Toasts, scroll reveal, 3D tilt, modals, utilities
│   ├── navigation.js           Mobile nav, active link state, auth-aware header
│   ├── auth.js                 Registration / login / member login / session guards
│   ├── dashboard.js             Student & member dashboard personalization
│   ├── questions.js             The 50-question bilingual MCQ dataset
│   ├── exam.js                  Examination engine: timer, navigation, scoring
│   ├── results.js               Results summary + answer review rendering
│   └── science-cards.js         27 science Q&A cards + expand/collapse + filters
│
└── assets/                     (images / icons / fonts — currently empty; all
                                  visuals in this prototype are CSS/SVG-based)
```

---

## 4. What's implemented

- **Navigation** — consistent header/footer on all 16 pages, working mobile menu, active-link highlighting, auth-aware header (swaps Login/Register for Dashboard/Logout once signed in).
- **Registration & login** — field validation (required fields, email format, 10-digit mobile, password confirmation), demo-account seeding, clear "demonstration only" messaging throughout, redirect to login after registration, redirect to dashboard after login.
- **Member login** — separate entry point and demo credentials, distinct member dashboard.
- **Chekumukhi examination engine** —
  - Exactly **50** original MCQs, each with 4 options, full **English + Telugu** text for the question, every option, and the explanation.
  - Countdown timer (default 60 minutes, configurable via `EXAM_CONFIG` in `exam.js`), with automatic submission at zero.
  - Previous/Next navigation, direct question-palette navigation, Mark for Review.
  - Answers persist across navigation and across a page refresh (the in-progress attempt is saved and resumed, not silently restarted).
  - Language selector (English / Telugu / Both) that never resets answers.
  - Submission confirmation modal showing answered/unanswered/marked counts.
  - After submission, answers are locked; revisiting `exam.html` redirects straight to the results page.
- **Results & review** — score ring, correct/incorrect/unanswered/marks tiles, and a full bilingual answer review with correct/incorrect/unanswered filtering and short explanations.
- **Science Q&A cards** — 27 cards (exceeding the 15/20 requirement) across 8 categories, answers hidden until the `+` control is activated (mouse or keyboard), with category filtering.
- **Organisational content** — About JVV, Chekumukhi stages (School → Mandal → District → State), Activities & Campaigns, Samata (Women's Wing), and Publications, all phrased to distinguish project-brief background information from information that still needs JVV's confirmation.
- **Responsive design & accessibility** — tested at desktop, tablet and mobile widths with no horizontal overflow; visible keyboard focus states; semantic headings and labels; `prefers-reduced-motion` support; all interactive controls operable by keyboard, not just hover/mouse.
- **3D hover effects** — CSS/JS-driven tilt on cards, disabled automatically for touch devices and when reduced motion is requested.

---

## 5. Known limitations (by design — see SRS §7.5, §8.3, NFR-09)

This is a **frontend-only demonstration**. It intentionally does **not** provide:

- Real account creation, authentication, or password security — everything lives in your browser's LocalStorage and can be inspected or cleared at any time.
- Server-side exam delivery or score validation — the timer and the answer key both live in client-side JavaScript.
- Centralised, cross-device storage — registering or taking the test in one browser will not appear in another browser or device.
- Any official JVV record of registration, login, or examination activity.
- Verified, JVV-approved organisational history, leadership, or official publication links — the About/Activities/Publications/Samata pages present general descriptive content from the project brief and flag where official confirmation is still needed.

These limitations are also stated directly on the relevant pages (exam instructions, registration, login, footer) so that no user mistakes this prototype for a production system.

---

## 6. Manual testing performed

In addition to visual review, the full user journey below was exercised with an automated headless-browser test (registration → login → invalid-login handling → 50-question exam with answer selection, review marking, palette/prev/next navigation, language toggling → submission → results → review → science cards → member login → timer auto-submission → mobile layout at 375px width) with zero unhandled JavaScript errors and zero horizontal overflow across all 16 pages.

## 7. Future enhancements (out of current scope)

Backend authentication and a real database, an administrator dashboard for managing questions and results, official examination scheduling, secure server-side scoring, student performance history, verified leaderboards, certificate generation, and deployment on an official JVV domain — see SRS §11 for the full list.
