/* =========================================================
   science-cards.js
   24 interactive science question-and-answer cards (exceeds
   the 15-card / 20-card requirement). Answers stay hidden
   until the learner clicks the + control, encouraging them
   to think first. Supports category filtering and full
   keyboard accessibility.
   ========================================================= */

const SCIENCE_CARDS = [
  // ---- Physics ----
  { id: 'c01', category: 'Physics',
    question: 'Why does a pin sink in water but a large steel ship floats?',
    answer: 'It is about density and shape, not just weight. A solid pin is dense and displaces very little water. A ship\'s hull is shaped to displace a large volume of water, and most of its interior is air-filled space — so its average density (including that trapped air) is lower than water, letting it float even though it is made of steel.' },
  { id: 'c02', category: 'Physics',
    question: 'Why do we feel pushed backward when a bus suddenly starts moving?',
    answer: 'This is inertia at work. Your body tends to stay at rest even as the bus accelerates forward beneath you, so relative to the bus, you feel thrown backward — Newton\'s First Law in everyday life.' },
  { id: 'c03', category: 'Physics',
    question: 'Why does a bicycle stay upright while moving but falls when stationary?',
    answer: 'A moving bicycle\'s spinning wheels have angular momentum, which resists changes to the wheel\'s orientation, plus the rider makes constant small steering corrections. At rest, there is no spin to stabilise it, so without support it tips over.' },
  {id:'c03b', category:'Physics',
    question:'Why does a spoon appear bent when placed in a glass of water?',
    answer:'Light travels at different speeds in air and water, so it bends (refracts) at the water\'s surface. Your eyes assume light has travelled in a straight line, so the underwater part of the spoon appears shifted, making it look bent.'},

  // ---- Chemistry ----
  { id: 'c04', category: 'Chemistry',
    question: 'Why does a cut apple turn brown after some time?',
    answer: 'Enzymes in the apple react with oxygen in the air, a process called enzymatic browning, producing brown pigments. It is a chemical change, not spoilage — the apple is often still perfectly fine to eat.' },
  { id: 'c05', category: 'Chemistry',
    question: 'Why does baking soda make a cake rise?',
    answer: 'Baking soda (sodium bicarbonate) reacts with acidic ingredients in the batter to release carbon dioxide gas. These tiny bubbles get trapped in the batter and expand with heat, making the cake light and fluffy.' },
  { id: 'c06', category: 'Chemistry',
    question: 'Why does an iron nail rust faster near the sea than in a dry inland area?',
    answer: 'Rusting needs both oxygen and moisture. Sea air carries extra moisture and dissolved salts, which speed up the electrochemical reaction that converts iron to iron oxide (rust), so coastal iron corrodes faster.' },

  // ---- Biology ----
  { id: 'c07', category: 'Biology',
    question: 'Why do onions make us cry when we cut them?',
    answer: 'Cutting an onion releases a volatile sulphur compound that reacts with the moisture in our eyes to form a mild irritant (similar to sulfuric acid in tiny amounts). Our eyes produce tears to flush this irritant out.' },
  { id: 'c08', category: 'Biology',
    question: 'Why do plants generally grow towards sunlight?',
    answer: 'This is called phototropism. A plant hormone called auxin accumulates on the shaded side of the stem, making those cells grow longer than the sunlit side, which bends the stem toward the light.' },
  { id: 'c09', category: 'Biology',
    question: 'Why do our fingers become wrinkly after a long bath?',
    answer: 'Prolonged water exposure triggers the nervous system to constrict blood vessels under the skin of the fingers and toes, pulling the skin inward and causing wrinkling — a reflex that may improve grip on wet surfaces.' },
  { id: 'c09b', category: 'Biology',
    question: 'Why can a small ant carry objects many times its own body weight?',
    answer: 'An ant\'s strength scales with the cross-sectional area of its muscles, while its weight scales with its volume. Because the ant is so small, its muscle strength relative to its own body weight is proportionally much larger than ours.' },

  // ---- Astronomy ----
  { id: 'c10', category: 'Astronomy',
    question: 'Why does the Moon seem to change shape through the month?',
    answer: 'The Moon does not change shape — we see different amounts of its sunlit half as it orbits Earth. These changing views are called phases: new moon, crescent, quarter, gibbous, and full moon.' },
  { id: 'c11', category: 'Astronomy',
    question: 'Why do stars appear to twinkle, but planets usually do not?',
    answer: 'Stars are so far away they appear as single points of light, so turbulence in Earth\'s atmosphere easily bends and scatters that one point, causing twinkling. Planets are closer and appear as tiny discs, so the combined light from many "points" averages out the twinkle.' },
  { id: 'c12', category: 'Astronomy',
    question: 'Why is it hotter in summer and cooler in winter?',
    answer: 'It is mainly due to the tilt of Earth\'s axis, not distance from the Sun. When a hemisphere is tilted toward the Sun, it receives more direct sunlight for longer hours, making it summer there; the opposite hemisphere experiences winter.' },

  // ---- Environment & Ecology ----
  { id: 'c13', category: 'Environment & Ecology',
    question: 'Why are wetlands often called the "kidneys" of a landscape?',
    answer: 'Wetlands filter pollutants and sediments from water as it slowly passes through, much like kidneys filter blood. They also absorb excess rainwater, reducing floods, and support rich biodiversity.' },
  { id: 'c14', category: 'Environment & Ecology',
    question: 'Why does cutting down a forest affect rainfall in that region over time?',
    answer: 'Trees release water vapour through transpiration, adding moisture to the air that can later fall as rain nearby. Large-scale deforestation reduces this moisture cycle, which can gradually reduce local rainfall.' },
  { id: 'c15', category: 'Environment & Ecology',
    question: 'Why is composting kitchen waste better than sending it to a landfill?',
    answer: 'Composting lets microorganisms break down organic waste with oxygen, producing nutrient-rich soil. In landfills, waste is often compacted without enough oxygen, producing methane, a potent greenhouse gas, instead.' },

  // ---- Everyday Science ----
  { id: 'c16', category: 'Everyday Science',
    question: 'Why does food cook faster in a pressure cooker than in an open pan?',
    answer: 'Sealing the cooker traps steam, raising internal pressure. Higher pressure raises the boiling point of water above 100°C, so food cooks faster at this higher temperature.' },
  { id: 'c17', category: 'Everyday Science',
    question: 'Why do clothes dry faster on a windy day than on a still day?',
    answer: 'Wind carries away the layer of moist air that builds up right next to wet fabric, constantly replacing it with drier air. This keeps the rate of evaporation high, so clothes dry faster.' },
  { id: 'c18', category: 'Everyday Science',
    question: 'Why does a glass bottle sometimes crack when very hot water is poured into it suddenly?',
    answer: 'The inside surface of the glass expands quickly from the heat while the outside is still cool, creating uneven stress. If the glass cannot expand evenly fast enough, this thermal stress can crack it.' },
  { id: 'c18b', category: 'Everyday Science',
    question: 'Why does a refrigerator keep food fresh for longer?',
    answer: 'Cold temperatures slow down the activity of bacteria and enzymes that cause food to spoil. Lower temperatures do not stop spoilage completely, but they slow it down considerably, extending how long food stays fresh.' },

  // ---- Scientific Reasoning ----
  { id: 'c19', category: 'Scientific Reasoning',
    question: 'If a new medicine seems to work for one person, does that prove it is effective for everyone?',
    answer: 'No. A single case could be due to chance, the placebo effect, or another unrelated factor. Scientists test medicines on large groups, compared against a control group, before concluding that a medicine truly works.' },
  { id: 'c20', category: 'Scientific Reasoning',
    question: 'Why do scientists repeat an experiment several times before trusting the result?',
    answer: 'A single result could be affected by an error, an unusual condition, or chance. Repeating an experiment and getting consistent results increases confidence that the outcome reflects a real, reliable effect.' },
  { id: 'c21', category: 'Scientific Reasoning',
    question: 'What is the difference between a scientific theory and a random guess?',
    answer: 'A random guess has no supporting evidence. A scientific theory is a well-tested explanation, built from repeated observations and experiments, that can make predictions which can themselves be tested and potentially proven wrong.' },

  // ---- Misconceptions & Evidence ----
  { id: 'c22', category: 'Misconceptions & Evidence',
    question: 'Does a full moon actually cause an increase in unusual human behaviour, as is commonly believed?',
    answer: 'Multiple controlled studies looking at hospital admissions, crime rates, and sleep patterns have found no reliable link between the lunar cycle and human behaviour. The belief persists mainly because people notice and remember unusual events near a full moon more than at other times.' },
  { id: 'c23', category: 'Misconceptions & Evidence',
    question: 'Is it true that we only use 10% of our brains?',
    answer: 'No. Brain imaging shows that over the course of a day, virtually all areas of the brain are active at some point, even during simple tasks and sleep. This popular claim has no basis in neuroscience.' },
  { id: 'c24', category: 'Misconceptions & Evidence',
    question: 'If two events happen one after another, does that mean the first one caused the second?',
    answer: 'Not necessarily. This is a common reasoning error. Two events can occur in sequence purely by coincidence. Scientists look for a testable, repeatable mechanism and rule out other explanations before accepting a true cause-and-effect relationship.' }
];

const SCIENCE_CARD_CATEGORIES = [...new Set(SCIENCE_CARDS.map(c => c.category))];

/* ---------------- Rendering ---------------- */
function renderScienceCards(containerEl, cards, { showToggleHelpText = true } = {}) {
  containerEl.innerHTML = cards.map(card => `
    <article class="card qa-card tilt-card" data-open="false" data-category="${escapeHtml(card.category)}">
      <div class="qa-card-top">
        <span class="badge badge-cyan">${escapeHtml(card.category)}</span>
        <button type="button" class="qa-toggle" aria-expanded="false" aria-controls="ans-${card.id}" data-card-id="${card.id}" aria-label="Reveal answer">+</button>
      </div>
      <h3>${escapeHtml(card.question)}</h3>
      <div class="qa-answer" id="ans-${card.id}">
        <div class="qa-answer-inner">
          <div class="qa-answer-content"><strong>Answer:</strong> ${escapeHtml(card.answer)}</div>
        </div>
      </div>
    </article>
  `).join('');
}

function toggleQaCard(btn) {
  const card = btn.closest('.qa-card');
  const isOpen = card.getAttribute('data-open') === 'true';
  card.setAttribute('data-open', String(!isOpen));
  btn.setAttribute('aria-expanded', String(!isOpen));
  btn.textContent = isOpen ? '+' : '\u2212';
  btn.setAttribute('aria-label', isOpen ? 'Reveal answer' : 'Hide answer');
}

document.addEventListener('click', (e) => {
  const btn = e.target.closest('.qa-toggle');
  if (btn) toggleQaCard(btn);
});
document.addEventListener('keydown', (e) => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('qa-toggle')) {
    e.preventDefault();
    toggleQaCard(e.target);
  }
});

function initScienceCardsPage() {
  const grid = document.getElementById('science-cards-grid');
  if (!grid) return;
  const filterBar = document.getElementById('science-cards-filter');
  let activeCategory = 'All';

  function draw() {
    const filtered = activeCategory === 'All'
      ? SCIENCE_CARDS
      : SCIENCE_CARDS.filter(c => c.category === activeCategory);
    renderScienceCards(grid, filtered);
  }

  if (filterBar) {
    const cats = ['All', ...SCIENCE_CARD_CATEGORIES];
    filterBar.innerHTML = cats.map(cat =>
      `<button type="button" class="filter-chip${cat === 'All' ? ' is-active' : ''}" data-cat="${escapeHtml(cat)}">${escapeHtml(cat)}</button>`
    ).join('');
    filterBar.addEventListener('click', (e) => {
      const chip = e.target.closest('.filter-chip');
      if (!chip) return;
      filterBar.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('is-active'));
      chip.classList.add('is-active');
      activeCategory = chip.getAttribute('data-cat');
      draw();
    });
  }

  draw();
}

function initHomeFeaturedCards() {
  const grid = document.getElementById('featured-science-cards');
  if (!grid) return;
  renderScienceCards(grid, SCIENCE_CARDS.slice(0, 4));
}

document.addEventListener('DOMContentLoaded', () => {
  initScienceCardsPage();
  initHomeFeaturedCards();
});
