---
name: neumorphic-quiz-funnel
description: Generates premium neumorphic quiz/diagnostic funnel pages with GSAP scroll animations, bento hero grids, claymorphism design, and interactive falling icon trails. Use when building quiz funnels, diagnostic tools, assessment pages, interactive product finders, or any high-conversion quiz-based landing page. Produces a standalone HTML file (Google Fonts + GSAP CDN + Lenis smooth scroll) ready for Vercel deployment. Trigger this skill when the user describes a business and wants a quiz funnel, diagnostic tool, assessment page, or mentions wanting to capture leads through an interactive experience. Also trigger for phrases like "make me a quiz funnel", "build my diagnostic page", "create an assessment for my business", or provides any business description. Assume aggressively — if context is thin, invent plausible details. This skill excels at wellness, coaching, SaaS diagnostics, professional services, fitness assessments, and any business that segments customers through questions.
disable-model-invocation: true
argument-hint: [business description]
---

# Neumorphic Quiz Funnel Generator

You generate a single standalone HTML file featuring a premium neumorphic (claymorphism) design aesthetic with GSAP-powered scroll animations, bento hero grids, and interactive quiz mechanics with falling icon trails. The page captures leads through an email gate after quiz completion, then displays personalized results.

Given a business description, you infer the category, choose design tokens, write conversion-focused copy, compose sections, and output complete deployable HTML.

---

## ⚠️ CRITICAL: READ THIS FIRST

**BEFORE generating any HTML, read [CRITICAL-FIXES.md](./CRITICAL-FIXES.md) in this skill directory.**

That document contains mandatory fixes for 9 recurring issues:
1. Missing navbar with working anchor links
2. Bento grid expanding in reverse direction
3. Falling icons not initializing
4. FAQ image hover broken
5. Modal visibility issues
6. Center alignment problems
7. CTA buttons lacking 3D effect
8. Section spacing too condensed
9. Mobile responsiveness failures

**All fixes in CRITICAL-FIXES.md are non-negotiable requirements.** Follow them exactly.

---

## 1. Design Philosophy — The Non-Negotiables

These rules define the aesthetic. Every page must have ALL of them:

- **Neumorphic surfaces.** Soft extruded cards with dual-shadow depth (light source top-left): `box-shadow: 12px 12px 24px rgba(0,0,0,0.05), -8px -8px 16px rgba(255,255,255,0.8), inset 4px 4px 8px rgba(255,255,255,0.5), inset -4px -4px 8px rgba(0,0,0,0.02);`
- **Bento hero grid.** Full-viewport grid that expands via GSAP Flip from bento tiles to full-screen slides on scroll. Overlay contains quiz CTA.
- **Falling icon trails.** As users move their mouse through the quiz section, playful flair icons fall and spin using GSAP animations.
- **Claymorphic progress bar.** Liquid-shimmer fill with inset shadows and organic border-radius.
- **GSAP scroll choreography.** Text reveals with staggered `translateY` animations, smooth parallax, ScrollTrigger-driven sections.
- **Lenis smooth scroll.** High-lerp responsive scroll with wheel multiplier for premium feel.
- **High-contrast neumorphism.** Light background (`#f8fafc`) with dark primary text (`#0f172a`), vibrant accent determined by category.
- **Organic border radii.** Squircles (`40px`), biomorphic shapes (`30% 20% 15% 45% / 60% 30% 70% 40%`), and pillow buttons (`50px`).

## 2. Category Inference & Accent Colors

| Category | Trigger Keywords | Default Accent | Copy Voice |
|---|---|---|---|
| wellness-supplement | health, wellness, supplement, nutrition, vitamin, biohacking, longevity, diagnostic | `#273c39` | Aspirational, science-backed |
| coaching-mindset | coach, mentor, transformation, mindset, leadership, mastermind, program | `#6366f1` | Authoritative, motivating |
| saas-diagnostic | saas, software, audit, diagnostic, assessment, tool, platform, optimization | `#22d3ee` | Analytical, data-driven |
| fitness-training | fitness, gym, workout, training, athlete, performance, body | `#ef4444` | Intense, results-focused |
| finance-advisory | finance, wealth, investment, advisory, planning, retirement, portfolio | `#0ea5e9` | Measured, trustworthy |
| real-estate-match | real estate, property, home, buyer, seller, match, listings | `#3b82f6` | Personalized, aspirational |
| marketing-agency | marketing, agency, growth, funnel, conversion, branding, audit | `#8b5cf6` | Confident, ROI-driven |
| legal-consultation | legal, law, attorney, consultation, compliance, contract | `#64748b` | Professional, reassuring |
| beauty-skincare | beauty, skincare, cosmetic, routine, product finder, personalized | `#f472b6` | Sensory, personalized |
| ecommerce-finder | product finder, ecommerce, shop, recommendation, match, style quiz | `#f97316` | Playful, discovery-focused |

Default: `coaching-mindset`. Accent can be overridden by user's brand color.

## 3. Design Tokens

### Typography (Google Fonts CDN)

| Role | Font | Weight | Style |
|---|---|---|---|
| `.font-heading` | Bricolage Grotesque | 700-800 | Letter-spacing: -0.04em, line-height: 1 |
| `.font-body` | Plus Jakarta Sans | 400-600 | Line-height: 1.6 |
| `.font-label` | Plus Jakarta Sans | 500-700 | Uppercase, 0.8rem, letter-spacing: 0.01em |

### Color System (Light Theme Only)

```css
:root {
  --primary: #0f172a;           /* Midnight Slate */
  --background: #f8fafc;        /* Crisp Ice White */
  --secondary: #64748b;         /* Slate Grey */
  --accent: [from category table];
  --accent-pink: #f472b6;
  --accent-cyan: #22d3ee;
  --success: #10b981;
  --border: #e2e8f0;
  --white: #ffffff;

  --color-rim: rgba(255,255,255,0.8);
  --color-shadow-light: rgba(15,23,42,0.08);
  --color-shadow-deep: rgba(15,23,42,0.2);

  --grad-surface: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  --grad-indigo: linear-gradient(135deg, #6366f1 0%, #9e38fd 100%);
  --grad-pink: linear-gradient(135deg, #882056 0%, #c92e45 100%);
  --grad-cyan: linear-gradient(135deg, #22d3ee 0%, #4f5dda 100%);

  --font-heading: 'Bricolage Grotesque', sans-serif;
  --font-body: 'Plus Jakarta Sans', sans-serif;

  --clay-shadow: 12px 12px 24px rgba(0,0,0,0.05), -8px -8px 16px rgba(255,255,255,0.8),
                 inset 4px 4px 8px rgba(255,255,255,0.5), inset -4px -4px 8px rgba(0,0,0,0.02);

  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 32px;
  --radius-organic: 30% 20% 15% 45% / 60% 30% 70% 40%;
  --radius-squircle: 40px;
}
```

### CDN Stack

```html
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,700;12..96,800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.29/bundled/lenis.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/Flip.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/medium-zoom@1.1.0/dist/medium-zoom.min.js"></script>
```

## 4. Neumorphic Card System

All interactive surfaces use claymorphism:

```css
.clay-card {
  background: var(--grad-surface);
  border: 2px solid var(--color-rim);
  border-radius: var(--radius-squircle);
  padding: var(--spacing-lg);
  box-shadow: var(--clay-shadow);
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: visible;
}

.clay-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  opacity: 0.025;
  pointer-events: none;
  z-index: 1;
}

.clay-card::after {
  content: '';
  position: absolute;
  top: -100%;
  left: -100%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent 45%, rgba(255,255,255,0.3) 50%, transparent 55%);
  transform: rotate(-25deg);
  transition: all 0.7s ease;
  pointer-events: none;
  z-index: 2;
}

.clay-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px -10px rgba(99,102,241,0.2);
  border-radius: 44px;
}

.clay-card:hover::after {
  top: -20%;
  left: -20%;
}
```

## 5. Bento Hero Grid Architecture

The hero uses GSAP Flip to expand from a compact bento grid to full-screen slides on scroll.

### HTML Structure

```html
<div class="gallery-wrap">
  <div class="hero-initial-overlay">
    <div class="container">
      <div class="hero-content text-center">
        <span class="hero-label">FREE DIAGNOSTIC TOOL</span>
        <h1 class="hero-title reveal-text">
          <div><span>What's Your</span></div>
          <div><span class="accent-color">[Category] Score?</span></div>
        </h1>
        <p class="hero-subtitle reveal-sub">
          [Outcome promise] in 60 seconds.
        </p>
        <div class="hero-cta-container justify-center">
          <button id="startQuizBtn" class="cta-button">
            Start Free Assessment ↗
          </button>
        </div>
      </div>
    </div>
  </div>

  <div id="gallery-8" class="gallery gallery--bento">
    <div class="gallery__item"><img src="..." alt="..."></div>
    <!-- 8 items total in bento layout -->
  </div>
</div>
```

### CSS Grid Layout

```css
.gallery--bento {
  display: grid;
  gap: 1vh;
  grid-template-columns: repeat(3, 32.5vw);
  grid-template-rows: repeat(4, 23vh);
  justify-content: center;
  align-content: center;
  will-change: transform;
  backface-visibility: hidden;
}

.gallery--bento .gallery__item:nth-child(1) { grid-area: 1/1/3/2; }
.gallery--bento .gallery__item:nth-child(2) { grid-area: 1/2/2/3; }
.gallery--bento .gallery__item:nth-child(3) { grid-area: 2/2/4/3; }
.gallery--bento .gallery__item:nth-child(4) { grid-area: 1/3/3/3; }
.gallery--bento .gallery__item:nth-child(5) { grid-area: 3/1/3/2; }
.gallery--bento .gallery__item:nth-child(6) { grid-area: 3/3/5/4; }
.gallery--bento .gallery__item:nth-child(7) { grid-area: 4/1/5/2; }
.gallery--bento .gallery__item:nth-child(8) { grid-area: 4/2/5/3; }

.gallery--final.gallery--bento {
  grid-template-columns: repeat(3, 100vw);
  grid-template-rows: repeat(4, 49.5vh);
  gap: 1vh;
}
```

### GSAP Flip Animation

```js
const galleryElement = document.querySelector('#gallery-8');
const galleryItems = galleryElement.querySelectorAll('.gallery__item');
const heroOverlay = document.querySelector('.hero-initial-overlay');

const tlReveal = gsap.timeline();
tlReveal
  .to('.hero-initial-overlay .reveal-text span', {
    y: '0%', duration: 1.2, stagger: 0.1, ease: 'power4.out'
  })
  .to('.hero-initial-overlay .reveal-sub', {
    opacity: 1, y: 0, duration: 0.8
  }, '-=0.8');

galleryElement.classList.add('gallery--final');
const flipState = Flip.getState(galleryItems);
galleryElement.classList.remove('gallery--final');

const flip = Flip.to(flipState, {
  simple: true,
  ease: 'expoScale(1, 5)'
});

const tlMain = gsap.timeline({
  scrollTrigger: {
    trigger: galleryElement,
    start: 'center center',
    end: '+=100%',
    scrub: true,
    pin: galleryElement.parentNode
  }
});

tlMain.to(heroOverlay, { opacity: 0, y: -50, duration: 0.2 }, 0);
tlMain.add(flip, 0);
```

Use images from the permitted list:
- `https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439beeba48751402641db.png` (atm_wealth)
- `https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439be070c58e28e626115.png` (atm_biohacking)
- `https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439bed548179ed021687d.png` (atm_estate)
- `https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439befb38cabb229231e2.png` (hero_wealth)
- `https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439bebfc81f54f4f24807.png` (hero_biohacking)
- `https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439befc5128f11e732220.png` (hero_estate)
- `https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439be070c582337626116.png` (hero_mindset)
- `https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b43b27eba4875b6d267ef7.png` (process_lifestyle)

## 6. Quiz Section Architecture

### HTML Structure

```html
<section id="quiz" class="quiz-section">
  <div class="quiz-atmosphere">
    <img src="[permitted atmospheric image]" class="liquid-bg" alt="">
  </div>
  <div id="flair-container"></div>

  <div class="container quiz-container">
    <div class="quiz-header">
      <h2 class="quiz-main-title">Let's Diagnose Your [Domain] Engine</h2>
      <p class="quiz-meta-info">5 questions • 60 seconds</p>
    </div>

    <div class="quiz-progress">
      <div class="progress-bar">
        <div class="progress-fill" id="progressFill"></div>
      </div>
      <span class="progress-text"><span id="currentQ">1</span>/5 Questions</span>
    </div>

    <div id="questionContainer"></div>

    <div class="question-nav">
      <button id="prevBtn" class="nav-btn nav-prev" disabled>← Previous</button>
      <button id="nextBtn" class="nav-btn nav-next">Next →</button>
    </div>

    <p class="micro-copy">No account required • Instant results</p>
  </div>
</section>
```

### Falling Icon Trail System

```js
const flairAssets = [
  'https://assets.codepen.io/16327/Revised+Flair.png',
  'https://assets.codepen.io/16327/Revised+Flair-1.png',
  'https://assets.codepen.io/16327/Revised+Flair-2.png',
  'https://assets.codepen.io/16327/Revised+Flair-3.png',
  'https://assets.codepen.io/16327/Revised+Flair-4.png',
  'https://assets.codepen.io/16327/Revised+Flair-5.png',
  'https://assets.codepen.io/16327/Revised+Flair-6.png',
  'https://assets.codepen.io/16327/Revised+Flair-7.png',
  'https://assets.codepen.io/16327/Revised+Flair-8.png'
];

function initFlairs() {
  const container = document.createElement('div');
  container.id = 'flair-container';
  quizSection.appendChild(container);

  for (let i = 0; i < 100; i++) {
    const img = document.createElement('img');
    img.className = 'flair';
    img.src = flairAssets[i % flairAssets.length];
    container.appendChild(img);
    STATE.flairElements.push(img);
  }
}

function playFlairAnimation(shape, x, y) {
  gsap.killTweensOf(shape);
  gsap.set(shape, {
    opacity: 1, scale: 1, left: x, top: y,
    xPercent: -50, yPercent: -50, rotation: 0, y: 0,
    display: 'block', position: 'absolute'
  });

  let tl = gsap.timeline();
  tl.from(shape, { opacity: 0, scale: 0, ease: 'elastic.out(1,0.3)' })
    .to(shape, { rotation: 'random([-360, 360])' }, '<')
    .to(shape, { y: '120vh', ease: 'back.in(.4)', duration: 1 }, 0);
}

function updateImageTrail() {
  const travelDistance = Math.hypot(
    STATE.lastMousePos.x - STATE.mousePos.x,
    STATE.lastMousePos.y - STATE.mousePos.y
  );

  if (travelDistance > 60) {
    const wrappedIdx = STATE.flairIndex % STATE.flairElements.length;
    const img = STATE.flairElements[wrappedIdx];
    playFlairAnimation(img, STATE.mousePos.x, STATE.mousePos.y);
    STATE.lastMousePos = { ...STATE.mousePos };
    STATE.flairIndex++;
  }
}

quizSection.addEventListener('mousemove', (e) => {
  const rect = quizSection.getBoundingClientRect();
  STATE.mousePos = { x: e.clientX - rect.left, y: e.clientY - rect.top };
});

gsap.ticker.add(updateImageTrail);
```

### Quiz Data Structure

```js
const quizData = [
  {
    question: "What's your #1 [domain] goal right now?",
    options: [
      { text: "Option A", points: 1, category: "beginner" },
      { text: "Option B", points: 2, category: "intermediate" },
      { text: "Option C", points: 3, category: "advanced" },
      { text: "Option D", points: 4, category: "expert" }
    ]
  },
  // 4-6 more questions
];

const resultsData = [
  {
    category: "BEGINNER PROFILE",
    emoji: "🌱",
    title: "The [Persona] Starter",
    summary: "Your results show you're just beginning your [domain] journey...",
    mistakes: [
      "Mistake 1: [specific tactical error]",
      "Mistake 2: [specific tactical error]",
      "Mistake 3: [specific tactical error]"
    ],
    actionTitle: "Your Next Step: [Action]",
    actionDesc: "[Why this action matters]",
    ctaText: "Get Started →"
  },
  // 2-3 more result profiles
];
```

### Question Card Rendering

```js
function renderQuestion() {
  const q = quizData[STATE.currentQuestion];

  questionContainer.innerHTML = `
    <h2 class="question-title initial-hidden">${q.question}</h2>
    ${q.options.map((opt, idx) => `
      <div class="question-card initial-hidden" data-index="${idx}">
        <div class="option-icon">${idx + 1}</div>
        <span class="option-text">${opt.text}</span>
      </div>
    `).join('')}
  `;

  gsap.to(questionContainer.querySelector('.question-title'), {
    duration: 0.4, opacity: 1, y: 0, ease: 'power3.out'
  });

  gsap.to(questionContainer.querySelectorAll('.question-card'), {
    duration: 0.4, opacity: 1, y: 0, stagger: 0.08, ease: 'back.out(1.2)'
  });
}

function selectAnswer(index) {
  document.querySelectorAll('.question-card').forEach((card) => {
    card.classList.toggle('selected', parseInt(card.dataset.index) === index);
  });

  STATE.answers[STATE.currentQuestion] = index;
  setTimeout(goToNextQuestion, 400);
}
```

## 7. Email Gate Modal

```html
<div id="emailGateModal" class="modal-overlay">
  <div class="modal-content" data-lenis-prevent>
    <button class="modal-close" id="closeEmailBtn">×</button>
    <span class="modal-badge">UNLOCK YOUR RESULTS</span>
    <h2 class="modal-title">Enter Your Email Below</h2>
    <p class="modal-subtitle">Get your personalized [Domain] report instantly.</p>

    <form id="emailForm" class="email-form">
      <label class="form-label" for="emailInput">Work Email Address</label>
      <input type="email" id="emailInput" class="form-input"
             placeholder="you@company.com" required>
      <div class="form-hint">
        <span>🔒</span> Secure • No spam • Unsubscribe anytime
      </div>
      <button type="submit" class="cta-button pulse" style="width:100%">
        Send Results to My Inbox →
      </button>
    </form>

    <div class="result-previews">
      <p class="receive-label">You'll Receive:</p>
      <div class="preview-item">
        <span class="preview-check">✓</span>
        <span>Your Exact [Domain] Tier</span>
      </div>
      <div class="preview-item">
        <span class="preview-check">✓</span>
        <span>Top 3 [Problem] Points</span>
      </div>
      <div class="preview-item">
        <span class="preview-check">✓</span>
        <span>Personalized Action Plan PDF</span>
      </div>
    </div>
  </div>
</div>
```

Modal CSS uses `backdrop-filter: none !important` with solid overlay (`rgba(15,23,42,0.98)`) to prevent background seepage. GSAP entrance:

```js
function openEmailGate() {
  emailGateModal.classList.add('active');
  document.body.style.overflow = 'hidden';
  lenis.stop();

  gsap.from('#emailGateModal .modal-content', {
    duration: 0.5, scale: 0.9, opacity: 0, ease: 'elastic.out(1, 0.75)'
  });
}
```

## 8. Results Modal

```js
function showResults(resultIndex, score) {
  const result = resultsData[resultIndex];

  resultContent.innerHTML = `
    <div class="result-avatar-container">
      <img src="[permitted image]" alt="" class="result-avatar-img">
      <span class="result-badge initial-hidden">
        <span class="result-icon">${result.emoji}</span>
        ${result.category}
      </span>
    </div>
    <h2 class="result-headline initial-hidden">${result.title}</h2>
    <p class="result-summary initial-hidden">${result.summary}</p>

    <div class="result-mistakes initial-hidden">
      <div class="mistake-title">
        <span style="color:var(--accent);">⚠️</span>
        Top 3 [Problem] Leaks
      </div>
      <ul class="mistake-list">
        ${result.mistakes.map(m => `
          <li class="mistake-item initial-hidden">
            <span class="mistake-icon">•</span>
            <span>${m}</span>
          </li>
        `).join('')}
      </ul>
    </div>

    <div class="recommended-action initial-hidden">
      <div class="action-title">${result.actionTitle}</div>
      <p class="action-desc">${result.actionDesc}</p>
      <div class="action-cta">
        <a href="#" class="action-btn">${result.ctaText}</a>
      </div>
    </div>

    <p class="sent-notice">📧 Full report sent to ${STATE.userEmail}</p>
    <div class="reset-link"><a href="#">View Another Result Type</a></div>
  `;

  resultModal.classList.add('active');
  document.body.style.overflow = 'hidden';
  lenis.stop();

  const tl = gsap.timeline();
  tl.fromTo('#resultModal .result-modal',
      { clipPath: 'polygon(0 0, 0% 0, 0% 100%, 0% 100%)' },
      { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', duration: 0.6, ease: 'power2.out' }
    )
    .to('.result-avatar-img', { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' }, '-=0.2')
    .to('.result-badge', { y: 0, opacity: 1, duration: 0.4 }, '-=0.3')
    .to('.result-headline', { scale: 1, opacity: 1, duration: 0.4 }, '-=0.2')
    .to('.result-summary', { x: 0, opacity: 1, duration: 0.4 }, '-=0.2')
    .to('.result-mistakes', { opacity: 1, duration: 0.4 }, '-=0.2')
    .to('.mistake-item', { x: 0, opacity: 1, stagger: 0.1 }, '-=0.2')
    .to('.recommended-action', { y: 0, opacity: 1, duration: 0.4 }, '-=0.2')
    .to(['.sent-notice', '.reset-link'], { opacity: 1, duration: 0.4 });
}
```

## 9. Supporting Sections

### Features Section (Why Take the Diagnostic)

```html
<section id="how-it-works" class="features-section">
  <div class="cursor-glow" id="featuresGlow"></div>
  <div class="features-bg">
    <img src="[permitted atmospheric image]" alt="Motion trails" class="feature-bg-element">
  </div>
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Why Take The Diagnostic?</h2>
      <p class="section-subtitle">
        Most [businesses/people] fail because they optimize the wrong things first.
      </p>
    </div>

    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-icon">🎯</div>
        <h3 class="feature-title">Precision Diagnosis</h3>
        <p class="feature-desc">
          Identify exactly which lever isn't pulling and where your biggest [outcome] leaks are hiding.
        </p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">⚡</div>
        <h3 class="feature-title">Instant Action Plan</h3>
        <p class="feature-desc">
          Get prioritized recommendations you can implement immediately—no vague advice included.
        </p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">📈</div>
        <h3 class="feature-title">Benchmark Against Peers</h3>
        <p class="feature-desc">
          See how your [domain] maturity compares to others at your stage.
        </p>
      </div>
    </div>
  </div>
</section>
```

### Testimonials Section

```html
<section class="testimonials-section">
  <div class="cursor-glow" id="testimonialsGlow"></div>
  <div class="container">
    <div class="section-header">
      <h2 class="section-title testimonial-title">Trusted by 12,500+ [Personas]</h2>
      <p class="section-subtitle testimonial-subtitle">Real insights that led to real [outcomes].</p>
    </div>

    <div class="testimonial-grid">
      <div class="testimonial-card">
        <div class="testimonial-stars">★★★★★</div>
        <p class="testimonial-text">
          "This diagnostic exposed the one bottleneck I was blind to. Implemented their recommendation and saw 23% increase in [metric] within 3 weeks."
        </p>
        <div class="testimonial-author">
          <div class="author-avatar">SK</div>
          <div class="author-info">
            <h4>Sarah Kim</h4>
            <p>Founder, ScaleUp Co.</p>
          </div>
        </div>
      </div>
      <!-- 1-2 more testimonial cards -->
    </div>
  </div>
</section>
```

### Pricing Section (Optional)

```html
<section id="pricing" class="pricing-section">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Upgrade Your Insights</h2>
      <p class="section-subtitle">Free diagnostic included with any paid tier.</p>
    </div>

    <div class="pricing-grid">
      <div class="pricing-card">
        <div class="pricing-name">DIAGNOSTIC</div>
        <div><span class="pricing-price">$0</span></div>
        <span class="pricing-period">Forever Free</span>
        <p class="pricing-description">Get your basic score and recommendations.</p>
        <ul class="pricing-features">
          <li class="pricing-feature">
            <span class="feature-check">✓</span> Basic [Domain] Score
          </li>
          <!-- 2-3 more features -->
        </ul>
        <a href="#" class="pricing-cta">Start Free Assessment</a>
      </div>

      <div class="pricing-card popular">
        <div class="popular-badge-wrapper">
          <div class="popular-badge">MOST POPULAR</div>
          <img src="[permitted accent image]" alt="" class="lifestyle-accent">
        </div>
        <div class="pricing-name">ADVANCED</div>
        <div><span class="pricing-price">$29</span></div>
        <span class="pricing-period">One-time purchase</span>
        <p class="pricing-description">Deep-dive analysis with action plan.</p>
        <ul class="pricing-features">
          <li class="pricing-feature">
            <span class="feature-check">✓</span> Everything in Free
          </li>
          <!-- 3-4 more features -->
        </ul>
        <a href="#" class="pricing-cta">Get Advanced Report</a>
      </div>

      <!-- Optional 3rd tier -->
    </div>
  </div>
</section>
```

### FAQ Section (Cursor Image Hover Effect)

```html
<section id="faq" class="faq-section">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Frequently Asked Questions</h2>
    </div>

    <div class="faq-items">
      <div class="faq-item hover-trigger">
        <img class="follower-element" src="[permitted image]" alt="">
        <button class="faq-question" aria-expanded="false" aria-controls="faq-ans-1">
          How long does the diagnostic take?
          <span class="faq-toggle">+</span>
        </button>
        <div class="faq-answer" id="faq-ans-1">
          <p>Most users complete the full assessment in under 90 seconds...</p>
        </div>
      </div>
      <!-- 3-5 more FAQ items -->
    </div>
  </div>
</section>
```

FAQ Hover Effect JS:

```js
gsap.set('.hover-trigger .follower-element', { yPercent: -100, xPercent: 0 });

let isInitialFrame;

gsap.utils.toArray('.hover-trigger').forEach((trigger) => {
  const followerMedia = trigger.querySelector('.follower-element');
  if (!followerMedia) return;

  const syncX = gsap.quickTo(followerMedia, 'x', { duration: 0.4, ease: 'power3' });
  const syncY = gsap.quickTo(followerMedia, 'y', { duration: 0.4, ease: 'power3' });

  const reconcilePointer = (event) => {
    if (isInitialFrame) {
      syncX(event.clientX, event.clientX);
      syncY(event.clientY, event.clientY);
      isInitialFrame = false;
    } else {
      syncX(event.clientX);
      syncY(event.clientY);
    }
  };

  const enableGlobalTracking = () => document.addEventListener('mousemove', reconcilePointer);
  const disableGlobalTracking = () => document.removeEventListener('mousemove', reconcilePointer);

  const opacityTimeline = gsap.to(followerMedia, {
    autoAlpha: 1, ease: 'none', paused: true, duration: 0.1,
    onReverseComplete: disableGlobalTracking
  });

  trigger.addEventListener('mouseenter', (event) => {
    isInitialFrame = true;
    opacityTimeline.play();
    enableGlobalTracking();
    reconcilePointer(event);
  });

  trigger.addEventListener('mouseleave', () => opacityTimeline.reverse());
});
```

FAQ Accordion JS:

```js
document.querySelectorAll('.faq-question').forEach((btn) => {
  btn.addEventListener('click', () => {
    const faqItem = btn.parentElement;
    const answer = faqItem.querySelector('.faq-answer');
    const isOpening = !faqItem.classList.contains('active');

    document.querySelectorAll('.faq-item.active').forEach((item) => {
      if (item !== faqItem) {
        item.classList.remove('active');
        item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        gsap.to(item.querySelector('.faq-answer'), {
          maxHeight: 0, duration: 0.3, ease: 'power2.inOut'
        });
      }
    });

    faqItem.classList.toggle('active');
    btn.setAttribute('aria-expanded', isOpening);
    gsap.to(answer, {
      maxHeight: isOpening ? answer.scrollHeight + 40 : 0,
      duration: 0.4, ease: 'power2.inOut'
    });
  });
});
```

### CTA Banner

```html
<section class="cta-banner">
  <div class="container">
    <h2 class="banner-title">Ready to Fix Your [Domain] Engine?</h2>
    <p class="banner-subtitle">
      Join thousands who discovered their breakthrough through our diagnostic tool.
    </p>
    <div class="banner-cta-container">
      <button class="banner-btn banner-btn-primary pulse">Take Free Assessment</button>
      <button class="banner-btn banner-btn-secondary">View Sample Results</button>
    </div>
  </div>
</section>
```

### Footer

```html
<footer class="footer">
  <div class="footer-texture">
    <img src="[permitted texture image]" alt="Marble texture" class="texture-overlay">
  </div>
  <div class="container">
    <div class="footer-content">
      <div class="footer-brand">
        <h3>📊 [Brand Name]</h3>
        <p>Understand where your [domain] engine is broken.</p>
        <div class="social-icons">
          <a href="#" class="social-icon">𝕏</a>
          <a href="#" class="social-icon">IN</a>
          <a href="#" class="social-icon">IG</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Product</h4>
        <ul class="footer-links">
          <li><a href="#">Diagnostic Tool</a></li>
          <li><a href="#">Advanced Reports</a></li>
          <li><a href="#">Strategy Calls</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul class="footer-links">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Resources</h4>
        <ul class="footer-links">
          <li><a href="#">Blog</a></li>
          <li><a href="#">Templates</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <div>&copy; 2025 [Brand Name]. All rights reserved.</div>
      <div class="legal-buttons">
        <button class="legal-btn" data-legal="privacy">Privacy Policy</button>
        <button class="legal-btn" data-legal="terms">Terms of Service</button>
        <button class="legal-btn" data-legal="cookie">Cookie Policy</button>
      </div>
    </div>
  </div>
</footer>
```

## 10. Lenis Smooth Scroll Initialization

```js
const lenis = new Lenis({
  lerp: 0.15,
  smoothWheel: true,
  wheelMultiplier: 1.2
});

const raf = (time) => {
  lenis.raf(time);
  requestAnimationFrame(raf);
};
requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger, Flip);
gsap.defaults({ ease: 'power3.out' });
```

## 11. Mobile Responsiveness

```css
@media (max-width: 1024px) {
  .hero-layout { grid-template-columns: 1fr; text-align: center; }
  .features-grid, .pricing-grid, .testimonial-grid { grid-template-columns: 1fr; }
  .footer-content { grid-template-columns: 1fr 1fr; }
  .desktop-only { display: none; }
}

@media (max-width: 768px) {
  .section-title { font-size: 2rem; }
  .hero-title { font-size: 2.5rem; }
  .nav-links { display: none; }
  .footer-content { grid-template-columns: 1fr; text-align: center; }
}
```

## 12. Copy Generation Principles

- **Outcome-first headlines:** "Discover Your [Outcome] Score in 60 Seconds"
- **Social proof:** "Trusted by 12,500+ [personas]"
- **Specificity:** "23% increase in qualified leads within 3 weeks" (not "better results")
- **Diagnostic framing:** Use "diagnostic", "assessment", "audit", "score" language
- **Problem-agitation:** "Most [personas] fail because they optimize the wrong things first"
- **Personalization:** "Based on your answers, we recommend..."
- **Urgency without pressure:** "Limited availability" badges, "Free for now" messaging

Voice by category:
- Wellness: compassionate, science-backed, aspirational
- Coaching: authoritative, motivating, transformational
- SaaS: analytical, data-driven, ROI-focused
- Finance: measured, trustworthy, professional
- Fitness: intense, results-focused, energetic

## 13. Output Checklist

**⚠️ FIRST: Verify all items in CRITICAL-FIXES.md checklist**

Then verify these additional requirements:

- [ ] Single HTML file — all CSS in `<style>`, all JS in `<script>` (including quiz data objects)
- [ ] `<title>` contains business name + "Diagnostic"
- [ ] CDN stack in `<head>` (Google Fonts, Lenis, GSAP, ScrollTrigger, Flip, Medium Zoom)
- [ ] `--accent` CSS variable set from category inference table
- [ ] Bento hero grid with 8 images from permitted library
- [ ] GSAP Flip animation for bento → full-screen expansion on scroll (FORWARD not reverse)
- [ ] Hero overlay with reveal-text animation (translateY mask)
- [ ] Quiz section with falling icon trail system (100 flair elements, GSAP ticker)
- [ ] 5-6 quiz questions with card-based answer options
- [ ] Auto-advance on answer selection (400ms delay)
- [ ] Claymorphic progress bar with shimmer animation
- [ ] Email gate modal with GSAP elastic entrance, `backdrop-filter: none`, solid overlay
- [ ] Results modal with cascade animation (clipPath wipe → avatar scale → stagger)
- [ ] 3-4 result profiles with scoring logic based on point accumulation
- [ ] Features section with cursor glow that follows mouse
- [ ] Testimonials section with 3D slab breathing animation
- [ ] FAQ section with cursor image hover effect (GSAP quickTo, images 250x250 cropped)
- [ ] Footer with texture overlay and 3D under-glow
- [ ] All neumorphic cards with noise texture `::before`, glossy light `::after`
- [ ] Lenis smooth scroll initialization with `lerp: 0.15`
- [ ] ScrollTrigger initialization for quiz section (lazy-load flair system)
- [ ] Mobile-responsive: 375px, 768px, 1440px breakpoints
- [ ] All form endpoints use `{{FORM_ENDPOINT}}` placeholder
- [ ] Legal buttons use event delegation with `data-legal` attributes
- [ ] Modal close handlers for Escape key
- [ ] `data-lenis-prevent` on modal content to prevent scroll bleed
- [ ] All images from permitted library (no broken external URLs)
- [ ] Quiz data and results data embedded as JS objects in `<script>`
- [ ] At least 3 result profiles covering beginner → intermediate → advanced spectrum
- [ ] Category-appropriate accent color, copy voice, and domain terminology

**Code density:** Minified/dense output is acceptable and preferred for token efficiency.
