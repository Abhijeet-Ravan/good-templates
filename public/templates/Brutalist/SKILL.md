# Brutalist Funnel Generator Skill

## Trigger Pattern
When the user provides a business description and wants a **brutalist-aesthetic landing page/funnel**, generate a complete standalone HTML5 document with the brutalist pop design system.

## Core Design Philosophy

**Brutalism** = Subtractive Design + High Contrast + Bold Typography + Unapologetic Borders

The aesthetic acts as a **Heuristic Filter** — it repels the "corporate-safe" crowd and attracts high-level outliers, makers, and those who value speed over perfection.

---

## Customer Type Inference

Analyze the user's business description and map to ONE of these 10 archetypes:

| **Type** | **Keywords** | **Primary CTA** | **Accent Color** | **Voice** |
|----------|-------------|-----------------|------------------|-----------|
| **High-Ticket Mastermind** | coaching, accelerator, $5k+, inner circle, elite | "Apply for [Program Name]" | `--c-pink` | Exclusive, selective, anti-corporate |
| **PLG SaaS** | developer tool, beta, API, Linear, Framer, shipping | "Sign up for Early Beta" | `--c-cyan` | Fast, technical, ship-first |
| **Ghost-Invitational Community (DAO)** | Web3, Discord, DAO, token, collective, invite-only | "Connect Wallet" or "Join Discord" | `--c-lavender` | Vibe-checked, symbolic, insider |
| **Boutique Creative Agency** | agency, discovery sprint, process, framework, strategy | "Book a Discovery Sprint" | `--c-orange` | Process-as-product, anti-gallery |
| **Premium Newsletter** | newsletter, weekly, thought leader, principles, insights | "Weekly Principles in Your Inbox" | `--c-yellow` | Maker-to-subscriber, anti-fluff |
| **Educational Paid-Tier** | course, Gumroad, Maven, playbook, $199, syllabus | "Buy the [Course Name] Playbook" | `--c-lime` | High-visual, rapid prototyping |
| **Anti-Corporate Recruitment** | hiring, apply, talent, startup, high-intensity culture | "Apply to Build With Us" | `--c-green` | Bias-to-action, no BS |
| **Experimental Type Foundry** | fonts, typeface, specimen, licensing, typography | "License the [Font Name] Typeface" | `--c-lavender` | Craft, bespoke, type-as-hero |
| **Subscription Design Service** | flat-fee, DesignJoy, $4995/mo, unlimited, fast | "Start Your $X/mo Subscription" | `--c-orange` | No meetings, speed, clarity |
| **Physical Goods / Streetwear Drop** | merch, drop, limited edition, MSCHF, Vercel, streetwear | "Shop the Drop" | `--c-pink` | Hype scarcity, manifesto-driven |

---

## CSS Design Tokens (EXACT)

```css
:root {
  --c-yellow: #ffe500;
  --c-green: #0ae448;
  --c-pink: #ff2d78;
  --c-lavender: #9d95ff;
  --c-orange: #ff8709;
  --c-lime: #abff84;
  --c-cyan: #00bae2;
  --c-ink: #0a0a0a;
  --border: 4px solid var(--c-ink);
  --border-thick: 6px solid var(--c-ink);
  --font-display: "Unbounded", sans-serif;
  --font-stamp: "Bebas Neue", sans-serif;
  --font-mono: "Space Mono", monospace;
}

/* Google Fonts Import (REQUIRED) */
@import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&family=Bebas+Neue&family=Space+Mono:wght@400;700&display=swap');
```

### Noise Texture (REQUIRED for all sections)

```css
section::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 160px 160px;
  opacity: 0.26;
  mix-blend-mode: color-dodge;
  z-index: 2;
}
```

---

## Section Architecture (MANDATORY ORDER)

1. **Cursor Dot + Scroll Progress** (fixed UI elements)
2. **Hero / Manifesto** (big statement, ghost typography)
3. **Principles Grid** (12 cards, 3-column grid, brutalist borders)
4. **Beliefs / Philosophy Split** (2-column, left = list, right = boxed content)
5. **Offer / Pricing** (if applicable to customer type)
6. **CTA Banner** (final conversion section)
7. **Footer** (logo + symbols)

---

## 1. Cursor Dot + Scroll Progress

### HTML
```html
<div class="cursor-dot" id="cursorDot"></div>
<div class="scroll-progress" id="scrollProgress"></div>
```

### CSS
```css
body {
  cursor: crosshair;
}

.cursor-dot {
  position: fixed;
  width: 18px;
  height: 18px;
  border: 2px solid var(--c-ink);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: width 0.18s, height 0.18s, background 0.18s;
  mix-blend-mode: multiply;
}

.cursor-dot--large {
  width: 48px;
  height: 48px;
  background: rgba(255, 229, 0, 0.55);
}

.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 5px;
  background: var(--c-pink);
  z-index: 9998;
  transform-origin: left;
  transform: scaleX(0);
}
```

### JavaScript (EXACT)
```js
// Cursor
const dot = document.getElementById("cursorDot");
document.addEventListener("mousemove", (e) => {
  gsap.to(dot, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.1,
    ease: "power2.out",
  });
});

document.querySelectorAll("a, .cta__btn").forEach((el) => {
  el.addEventListener("mouseenter", () => dot.classList.add("cursor-dot--large"));
  el.addEventListener("mouseleave", () => dot.classList.remove("cursor-dot--large"));
});

// Scroll progress
gsap.to("#scrollProgress", {
  scaleX: 1,
  ease: "none",
  scrollTrigger: {
    trigger: document.body,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  },
});
```

---

## 2. Hero / Manifesto Section

### HTML Pattern
```html
<section class="hero">
  <div class="hero__ghost" aria-hidden="true">[CUSTOMER TYPE KEYWORD]</div>
  <p class="hero__kicker" id="heroKicker">★ [Context Label]</p>
  <h1 class="hero__title" id="heroTitle">
    [First Line]<br>
    <span class="hero__title--stroke">[Stroke Line]</span><br>
    [Third Line]
  </h1>
  <p class="hero__subtitle">[Compelling one-liner explaining the offer]</p>
</section>
```

### CSS (Use accent color from customer type)
```css
.hero {
  position: relative;
  overflow: hidden;
  background: var(--c-[ACCENT]);
  border-bottom: var(--border-thick);
  padding: clamp(80px, 14vw, 200px) clamp(24px, 6vw, 80px);
  text-align: center;
}

.hero__kicker {
  font-family: var(--font-mono);
  font-size: clamp(10px, 1.2vw, 14px);
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-bottom: clamp(16px, 3vw, 32px);
  position: relative;
  z-index: 3;
}

.hero__title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(56px, 11vw, 150px);
  text-transform: uppercase;
  line-height: 0.9;
  letter-spacing: -0.04em;
  position: relative;
  z-index: 3;
  margin-bottom: clamp(24px, 4vw, 56px);
}

.hero__title--stroke {
  display: inline-block;
  -webkit-text-stroke: 4px var(--c-ink);
  color: transparent;
}

.hero__subtitle {
  font-family: var(--font-mono);
  font-size: clamp(13px, 1.4vw, 16px);
  line-height: 1.7;
  max-width: 620px;
  margin: 0 auto;
  position: relative;
  z-index: 3;
}

.hero__ghost {
  position: absolute;
  font-family: var(--font-stamp);
  font-size: clamp(140px, 26vw, 360px);
  color: transparent;
  -webkit-text-stroke: 2px rgba(10, 10, 10, 0.1);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  z-index: 1;
}
```

### JavaScript
```js
gsap.to(".hero__ghost", {
  rotation: 8,
  scale: 1.08,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top bottom",
    end: "bottom top",
    scrub: 2,
  },
});

// Reveal animations
document.fonts.ready.then(() => {
  gsap.set("#heroTitle", { opacity: 0 });
  new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    gsap.set("#heroTitle", { opacity: 1 });
    SplitText.create("#heroTitle", {
      type: "chars",
      autoSplit: true,
      onSplit(self) {
        return gsap.from(self.chars, {
          opacity: 0,
          scale: 0.3,
          stagger: { each: 0.035, from: "center" },
          duration: 0.6,
          ease: "back.out(2.5)",
        });
      },
    });
  }, { threshold: 0.2 }).observe(document.querySelector("#heroTitle"));
});
```

---

## 3. Principles Grid Section

This is the **CORE** of the brutalist aesthetic. 12 cards in a 3-column grid with thick borders, bold typography, and symbolic icons.

### HTML Pattern
```html
<section class="principles">
  <div class="principles__header">
    <div class="principles__header-ghost" aria-hidden="true">PRINCIPLES</div>
    <h2 class="principles__header-title" id="headerTitle">
      <span>The</span>
      <span>Principles</span>
    </h2>
  </div>
  <div class="principles__grid">

    <!-- Card 1 -->
    <article class="card card--yellow">
      <div class="card__ghost" aria-hidden="true">01</div>
      <div class="card__top">
        <span class="card__number">P—01</span>
        <span class="card__icon">★</span>
      </div>
      <div class="card__body">
        <h3 class="card__title">[Title]<br>[Line 2]<br>[Line 3]</h3>
        <p class="card__desc">[Description explaining the principle]</p>
        <div class="card__tags">
          <span class="card__tag">[Tag 1]</span>
          <span class="card__tag">[Tag 2]</span>
        </div>
      </div>
    </article>

    <!-- Repeat 12 times with alternating colors -->
    <!-- Color sequence: yellow, cyan, pink, lavender, lime, orange, green, yellow, pink, cyan, lavender, orange -->

  </div>
</section>
```

### Card Color Classes (MUST ROTATE)
1. `card--yellow`
2. `card--cyan`
3. `card--pink`
4. `card--lavender`
5. `card--lime`
6. `card--orange`
7. `card--green`
8. `card--yellow`
9. `card--pink`
10. `card--cyan`
11. `card--lavender`
12. `card--orange`

### Icon Symbols (MUST ROTATE)
Use these 4 symbols in rotation: `★` `∞` `◉` `✦`

Pattern: ★, ∞, ◉, ✦, ★, ∞, ◉, ✦, ★, ∞, ◉, ✦

### Title Stroke Pattern
Apply `.card__title--stroke` to cards: 2, 5, 10 (makes outline text)

### CSS (EXACT)
```css
.principles {
  position: relative;
  overflow: hidden;
  background: var(--c-lime);
}

.principles__header {
  background: var(--c-pink);
  border-bottom: var(--border-thick);
  padding: clamp(40px, 7vw, 80px) clamp(24px, 6vw, 80px);
  position: relative;
  overflow: hidden;
}

.principles__header-title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(48px, 9vw, 128px);
  text-transform: uppercase;
  line-height: 0.9;
  letter-spacing: -0.03em;
  position: relative;
  z-index: 3;
}

.principles__header-title span:nth-child(2) {
  -webkit-text-stroke: 4px var(--c-ink);
  color: transparent;
  display: block;
}

.principles__header-ghost {
  position: absolute;
  font-family: var(--font-stamp);
  font-size: clamp(120px, 22vw, 300px);
  color: transparent;
  -webkit-text-stroke: 2px rgba(10, 10, 10, 0.1);
  right: -2%;
  top: 50%;
  transform: translateY(-50%);
  white-space: nowrap;
  z-index: 1;
}

.principles__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: stretch;
}

.card {
  position: relative;
  overflow: hidden;
  border-right: var(--border-thick);
  border-bottom: var(--border-thick);
  padding: clamp(28px, 4vw, 56px) clamp(24px, 3.5vw, 48px);
  min-height: clamp(340px, 40vh, 500px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: crosshair;
}

.card:nth-child(3n) {
  border-right: none;
}

.card--yellow { background: var(--c-yellow); }
.card--green { background: var(--c-green); }
.card--pink { background: var(--c-pink); }
.card--lavender { background: var(--c-lavender); }
.card--orange { background: var(--c-orange); }
.card--lime { background: var(--c-lime); }
.card--cyan { background: var(--c-cyan); }

.card__top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  z-index: 3;
}

.card__number {
  font-family: var(--font-stamp);
  font-size: clamp(13px, 1.4vw, 16px);
  letter-spacing: 0.15em;
  border: var(--border);
  padding: 4px 10px;
  background: var(--c-ink);
  color: var(--c-yellow);
}

.card__icon {
  font-size: clamp(20px, 2.5vw, 30px);
  opacity: 0.5;
}

.card__body {
  position: relative;
  z-index: 3;
}

.card__title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(24px, 3.2vw, 46px);
  text-transform: uppercase;
  line-height: 0.95;
  letter-spacing: -0.02em;
  margin-bottom: clamp(12px, 2vw, 22px);
  min-height: 2.9em;
}

.card__title--stroke {
  -webkit-text-stroke: 2px var(--c-ink);
  color: transparent;
}

.card__desc {
  font-size: clamp(12px, 1.2vw, 14px);
  line-height: 1.75;
  border-top: var(--border);
  padding-top: 14px;
  margin-top: 6px;
}

.card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 12px;
}

.card__tag {
  display: inline-block;
  font-size: clamp(9px, 0.9vw, 11px);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  border: 2px solid var(--c-ink);
  padding: 3px 8px;
}

.card__ghost {
  position: absolute;
  font-family: var(--font-stamp);
  font-size: clamp(100px, 14vw, 180px);
  color: transparent;
  -webkit-text-stroke: 1.5px rgba(10, 10, 10, 0.07);
  bottom: -8px;
  right: -4px;
  line-height: 1;
  z-index: 1;
}
```

### JavaScript (Card Reveal + Tilt)
```js
const cards = gsap.utils.toArray(".card");
cards.forEach((card) => gsap.set(card, { opacity: 0, y: 36, scale: 0.96 }));

const cardIO = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const card = entry.target;
    const i = cards.indexOf(card);
    gsap.to(card, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.65,
      ease: "power2.out",
      delay: (i % 3) * 0.1,
    });
    cardIO.unobserve(card);
  });
}, { threshold: 0.1 });

cards.forEach((card) => cardIO.observe(card));

// 3D tilt on hover
cards.forEach((card) => {
  const setX = gsap.quickTo(card, "rotationY", { duration: 0.45, ease: "power1.out" });
  const setY = gsap.quickTo(card, "rotationX", { duration: 0.45, ease: "power1.out" });
  card.addEventListener("mousemove", (e) => {
    const r = card.getBoundingClientRect();
    setX(((e.clientX - r.left) / r.width - 0.5) * 7);
    setY(((e.clientY - r.top) / r.height - 0.5) * -7);
  });
  card.addEventListener("mouseleave", () => {
    setX(0);
    setY(0);
  });
});
```

---

## 4. Beliefs / Philosophy Section

2-column split: left side has a title + bulleted list, right side has boxed content blocks.

### HTML
```html
<section class="beliefs">
  <div class="beliefs__left">
    <h2 class="beliefs__title" id="beliefsTitle">
      [Title]<br>[Line 2]<br>[Line 3]<br>[Line 4]
    </h2>
    <ul class="beliefs__list">
      <li data-sym="★">[Belief statement 1]</li>
      <li data-sym="∞">[Belief statement 2]</li>
      <li data-sym="◉">[Belief statement 3]</li>
      <li data-sym="✦">[Belief statement 4]</li>
      <li data-sym="★">[Belief statement 5]</li>
    </ul>
  </div>
  <div class="beliefs__right">
    <div class="beliefs__box" id="beliefsBox1">
      <strong>◉ [Box Title]</strong>
      [Box content explaining a key concept or signal]
    </div>
    <div class="beliefs__box beliefs__box--pink" id="beliefsBox2">
      <strong>✦ [Anti-Patterns Title]</strong>
      → [Anti-pattern 1]<br>
      → [Anti-pattern 2]<br>
      → [Anti-pattern 3]<br>
      → [Anti-pattern 4]<br>
      → [Anti-pattern 5]
    </div>
  </div>
</section>
```

### CSS
```css
.beliefs {
  position: relative;
  overflow: hidden;
  background: var(--c-lime);
  border-bottom: var(--border-thick);
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.beliefs__left {
  border-right: var(--border-thick);
  padding: clamp(32px, 5vw, 72px) clamp(24px, 5vw, 72px);
  position: relative;
  z-index: 3;
}

.beliefs__right {
  padding: clamp(40px, 7vw, 100px) clamp(24px, 5vw, 72px);
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  gap: clamp(16px, 2.5vw, 28px);
}

.beliefs__title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(36px, 5.5vw, 80px);
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: -0.03em;
  margin-bottom: clamp(24px, 4vw, 48px);
}

.beliefs__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.beliefs__list li {
  font-size: clamp(12px, 1.3vw, 15px);
  line-height: 1.65;
  border-bottom: 2px solid rgba(10, 10, 10, 0.18);
  padding-bottom: 14px;
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.beliefs__list li::before {
  content: attr(data-sym);
  flex-shrink: 0;
  margin-top: 2px;
}

.beliefs__box {
  border: var(--border-thick);
  padding: clamp(18px, 2.5vw, 32px);
  background: var(--c-yellow);
  color: var(--c-ink);
  font-family: var(--font-mono);
  font-size: clamp(12px, 1.3vw, 14px);
  line-height: 1.75;
}

.beliefs__box--pink {
  background: var(--c-pink);
}

.beliefs__box strong {
  font-family: var(--font-stamp);
  font-size: clamp(14px, 1.4vw, 17px);
  text-transform: uppercase;
  letter-spacing: 0.18em;
  display: block;
  margin-bottom: 10px;
}
```

### JavaScript
```js
function reveal(selector, fromVars, toVars, threshold) {
  threshold = threshold || 0.15;
  const els = typeof selector === "string" ? document.querySelectorAll(selector) : [selector];
  els.forEach((el) => {
    gsap.set(el, { opacity: 0 });
    new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      gsap.fromTo(el, { opacity: 0, ...fromVars }, { opacity: 1, duration: 0.85, ease: "power3.out", ...toVars });
    }, { threshold }).observe(el);
  });
}

reveal("#beliefsTitle", { x: -60 }, { x: 0 });
reveal("#beliefsBox1", { y: 40 }, { y: 0, duration: 0.7 });
reveal("#beliefsBox2", { y: 40 }, { y: 0, duration: 0.7, delay: 0.15 });
```

---

## 5. Offer / Pricing Section (OPTIONAL)

Only include if customer type has pricing tiers (Subscription Design, Educational Paid-Tier, etc.)

### HTML
```html
<section class="pricing">
  <div class="pricing__header">
    <h2 class="pricing__title">[Pricing Section Title]</h2>
  </div>
  <div class="pricing__grid">

    <div class="pricing__card">
      <div class="pricing__name">[Tier Name]</div>
      <div class="pricing__price">$[Price]</div>
      <div class="pricing__period">[per month / one-time]</div>
      <ul class="pricing__features">
        <li>✦ [Feature 1]</li>
        <li>✦ [Feature 2]</li>
        <li>✦ [Feature 3]</li>
      </ul>
      <a href="#" class="pricing__btn">[CTA Text]</a>
    </div>

    <!-- Repeat for each tier -->

  </div>
</section>
```

### CSS
```css
.pricing {
  background: var(--c-cyan);
  border-bottom: var(--border-thick);
  padding: clamp(60px, 10vw, 120px) clamp(24px, 6vw, 80px);
  position: relative;
}

.pricing__header {
  text-align: center;
  margin-bottom: clamp(40px, 6vw, 80px);
}

.pricing__title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(40px, 7vw, 100px);
  text-transform: uppercase;
  line-height: 0.9;
  letter-spacing: -0.03em;
}

.pricing__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(20px, 3vw, 40px);
  max-width: 1200px;
  margin: 0 auto;
}

.pricing__card {
  background: var(--c-yellow);
  border: var(--border-thick);
  padding: clamp(24px, 4vw, 48px);
  position: relative;
}

.pricing__name {
  font-family: var(--font-stamp);
  font-size: clamp(14px, 1.5vw, 18px);
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-bottom: 12px;
}

.pricing__price {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(48px, 7vw, 80px);
  line-height: 1;
  margin-bottom: 8px;
}

.pricing__period {
  font-family: var(--font-mono);
  font-size: clamp(11px, 1.2vw, 14px);
  margin-bottom: 24px;
  opacity: 0.7;
}

.pricing__features {
  list-style: none;
  margin-bottom: 28px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.pricing__features li {
  font-family: var(--font-mono);
  font-size: clamp(12px, 1.2vw, 14px);
  line-height: 1.6;
}

.pricing__btn {
  display: block;
  width: 100%;
  text-align: center;
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(14px, 1.6vw, 18px);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: var(--border);
  padding: clamp(12px, 2vw, 18px);
  background: var(--c-ink);
  color: var(--c-yellow);
  text-decoration: none;
  cursor: crosshair;
  transition: background 0.15s, color 0.15s;
}

.pricing__btn:hover {
  background: var(--c-pink);
  color: var(--c-ink);
}
```

---

## 6. CTA Banner Section

Final conversion section with large typography and primary CTA button.

### HTML
```html
<section class="cta">
  <div class="cta__ghost" aria-hidden="true">[KEYWORD]</div>
  <p class="cta__kicker" id="ctaKicker">★ [Context Label]</p>
  <h2 class="cta__title" id="ctaTitle">
    [Line 1]<br><span>[Stroke Line]</span><br>[Line 3]
  </h2>
  <a href="[URL]" target="_blank" class="cta__btn" id="ctaBtn">[Primary CTA Text] ✦</a>
</section>
```

### CSS
```css
.cta {
  position: relative;
  overflow: hidden;
  background: var(--c-orange);
  border-bottom: var(--border-thick);
  padding: clamp(60px, 12vw, 160px) clamp(24px, 6vw, 80px);
  text-align: center;
}

.cta__kicker {
  font-family: var(--font-mono);
  font-size: clamp(10px, 1.2vw, 14px);
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-bottom: clamp(16px, 3vw, 32px);
  position: relative;
  z-index: 3;
}

.cta__title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(56px, 11vw, 150px);
  text-transform: uppercase;
  line-height: 0.9;
  letter-spacing: -0.04em;
  position: relative;
  z-index: 3;
  margin-bottom: clamp(24px, 4vw, 56px);
}

.cta__title span {
  display: block;
  -webkit-text-stroke: 4px var(--c-ink);
  color: transparent;
}

.cta__btn {
  display: inline-block;
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(14px, 2vw, 22px);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: var(--border-thick);
  padding: clamp(14px, 2vw, 22px) clamp(32px, 5vw, 72px);
  background: var(--c-ink);
  color: var(--c-orange);
  text-decoration: none;
  cursor: crosshair;
  position: relative;
  z-index: 3;
  transition: background 0.15s, color 0.15s;
}

.cta__btn:hover {
  background: var(--c-yellow);
  color: var(--c-ink);
}

.cta__ghost {
  position: absolute;
  font-family: var(--font-stamp);
  font-size: clamp(140px, 26vw, 360px);
  color: transparent;
  -webkit-text-stroke: 2px rgba(10, 10, 10, 0.1);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  z-index: 1;
}
```

### JavaScript
```js
gsap.to(".cta__ghost", {
  rotation: 8,
  scale: 1.08,
  ease: "none",
  scrollTrigger: {
    trigger: ".cta",
    start: "top bottom",
    end: "bottom top",
    scrub: 2,
  },
});

reveal("#ctaKicker", { y: 30 }, { y: 0, duration: 0.7 });
reveal("#ctaBtn", { scale: 0.8 }, { scale: 1, duration: 0.75, ease: "elastic.out(1,0.6)" }, 0.5);

document.fonts.ready.then(() => {
  gsap.set("#ctaTitle", { opacity: 0 });
  new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    gsap.set("#ctaTitle", { opacity: 1 });
    SplitText.create("#ctaTitle", {
      type: "chars",
      autoSplit: true,
      onSplit(self) {
        return gsap.from(self.chars, {
          opacity: 0,
          scale: 0.3,
          stagger: { each: 0.035, from: "center" },
          duration: 0.6,
          ease: "back.out(2.5)",
        });
      },
    });
  }, { threshold: 0.2 }).observe(document.querySelector("#ctaTitle"));
});
```

---

## 7. Footer

### HTML
```html
<footer class="footer">
  <div class="footer__logo">[Brand Name]<br><span>[Tagline]</span></div>
  <div class="footer__symbols" id="footerSymbols">★ ∞ ◉ ✦</div>
</footer>
```

### CSS
```css
.footer {
  background: var(--c-pink);
  color: var(--c-ink);
  padding: clamp(32px, 5vw, 64px) clamp(24px, 6vw, 80px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  border-top: var(--border-thick);
}

.footer__logo {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(18px, 3vw, 36px);
  text-transform: uppercase;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.footer__logo span {
  -webkit-text-stroke: 2px var(--c-ink);
  color: transparent;
}

.footer__symbols {
  font-size: clamp(18px, 2.8vw, 32px);
  letter-spacing: 0.3em;
}
```

### JavaScript
```js
reveal("#footerSymbols", { y: 16 }, { y: 0, duration: 0.65, ease: "back.out(2)" }, 0.5);
```

---

## GSAP Requirements

### CDN Links (REQUIRED)
```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/SplitText.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/CustomEase.min.js"></script>
```

### Register Plugins + Custom Ease
```js
gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);
CustomEase.create("brutalist", "M0,0 C0.05,0 0.1,1 0.35,1 0.6,1 0.8,1 1,1");
```

---

## Mobile Responsiveness

### Required Media Queries
```css
@media (max-width: 900px) {
  .beliefs {
    grid-template-columns: 1fr;
  }
  .beliefs__left {
    border-right: none;
    border-bottom: var(--border-thick);
  }
}

@media (max-width: 768px) {
  .principles__grid {
    grid-template-columns: 1fr 1fr;
  }
  .card:nth-child(3n) {
    border-right: var(--border-thick);
  }
  .card:nth-child(2n) {
    border-right: none;
  }
}

@media (max-width: 480px) {
  .principles__grid {
    grid-template-columns: 1fr;
  }
  .card:nth-child(n) {
    border-right: none;
  }
}
```

---

## Content Generation Guidelines

### Principle Cards (12 Required)

For each customer type, generate 12 principles that align with their philosophy. Use these structures:

**Title Patterns:**
- 3-word phrases split across 3 lines (e.g., "Bias<br>to<br>Action")
- 2-word + 1-word (e.g., "Steal<br>Like a<br>System")
- Imperative verbs: Make, Ship, Build, Show, Iterate, Document, Name, Fail

**Description Patterns:**
- Start with a bold statement (e.g., "Thinking is cheap. Making is expensive.")
- Follow with actionable insight
- End with memorable one-liner
- Length: 2-3 sentences, ~80-120 characters

**Tag Patterns:**
- Single-word concepts
- Pairs that create tension (Momentum/Start, Limits/Freedom, Systems/Method)

### Hero Copy

**Title Formula:**
- Line 1: Context/State (e.g., "We don't wait for")
- Line 2 (stroke): Key word (e.g., "perfect")
- Line 3: Action/Outcome (e.g., "We ship things.")

**Subtitle:**
- One-sentence value proposition
- 60-100 characters
- NO fluff, NO superlatives
- Focus on what they GET, not what you DO

### CTA Copy

**Button Text Patterns:**
- "[Action] the [Thing]" (e.g., "Join the Collective")
- "Start Your [Benefit]" (e.g., "Start Your Subscription")
- "Apply for [Program]" (e.g., "Apply for the Accelerator")
- Always end with symbol: ✦

---

## Output Checklist

Before delivering the HTML file, verify:

- ✅ All Google Fonts imported (@import in CSS)
- ✅ GSAP CDN scripts loaded (gsap, ScrollTrigger, SplitText, CustomEase)
- ✅ Custom ease registered: `CustomEase.create("brutalist", ...)`
- ✅ Cursor dot follows mouse with GSAP quickTo
- ✅ Scroll progress bar scrubs on scroll
- ✅ 12 principle cards with correct color rotation
- ✅ Icon symbols rotate correctly (★ ∞ ◉ ✦)
- ✅ Card titles use stroke on cards 2, 5, 10
- ✅ Ghost text elements parallax on scroll
- ✅ SplitText animations on hero title and CTA title
- ✅ Cards reveal with stagger by column (delay: (i % 3) * 0.1)
- ✅ Cards tilt on hover (3D rotation with quickTo)
- ✅ All sections have noise texture overlay (::after)
- ✅ Mobile responsive grid layouts (3→2→1 columns)
- ✅ CTA button changes background on hover
- ✅ All text uses correct font families (display, stamp, mono)
- ✅ Border thickness consistent (4px standard, 6px thick)
- ✅ Accent color matches customer type
- ✅ All animations use IntersectionObserver for performance
- ✅ No lorem ipsum or placeholder text
- ✅ Primary CTA URL set (can be # for demo)

---

## Example Principle Card Content by Customer Type

### High-Ticket Mastermind
- "Elite<br>Over<br>Everyone" — "You're not looking for a crowd. You're looking for the 1%. Build filters, not funnels. Let the wrong people self-select out."
- "Price<br>as<br>Signal" — "Cheap attracts cheap. Premium attracts serious. Your price is a promise about who shows up."

### PLG SaaS
- "Ship<br>Before<br>Polish" — "The first version is a hypothesis. The second is where the learning shows. No one cares about your roadmap — they care what works today."
- "Docs<br>Are<br>Marketing" — "Your documentation is your demo. If a developer can't get started in 5 minutes, they're gone."

### Ghost-Invitational Community (DAO)
- "Vibe<br>Over<br>Volume" — "Community isn't about headcount. It's about resonance. Optimize for alignment, not growth."
- "Symbols<br>Create<br>Belonging" — "Shared language makes a group real. Icons, inside jokes, nomenclature — these are the boundaries of the collective."

### Boutique Creative Agency
- "Process<br>is<br>Product" — "What you make is inseparable from how you made it. Your methods leave fingerprints on your outputs."
- "No<br>Spec<br>Work" — "Your expertise isn't free. A discovery sprint is a paid engagement, not a sales call."

### Premium Newsletter
- "Weekly<br>Cadence<br>Wins" — "Daily is noise. Monthly is forgotten. Weekly is rhythm. Pick a day, keep the promise."
- "Signal<br>Over<br>Volume" — "One great insight beats ten mediocre takes. Edit ruthlessly. Ship the essential."

### Educational Paid-Tier
- "Show<br>The<br>Work" — "Don't teach theory. Show the artifact. Teardowns, breakdowns, and build-alongs are the new curriculum."
- "Price<br>Out<br>Lurkers" — "Free courses have 3% completion rates. Paid courses have skin in the game. Charge enough to make them care."

### Anti-Corporate Recruitment
- "Hire<br>Makers<br>Only" — "Résumés lie. GitHub doesn't. Show us what you've shipped, not where you went to school."
- "Culture<br>is<br>Filter" — "Your values aren't aspirations. They're disqualifiers. Use them to repel the wrong people early."

### Experimental Type Foundry
- "Type<br>as<br>Brand" — "Your font is your signature. Every curve, every weight, every glyph is a decision. Make it deliberate."
- "License<br>with<br>Intent" — "Fonts aren't free. They're infrastructure. Price for commercial use, educate for personal."

### Subscription Design Service
- "Flat<br>Fee<br>Freedom" — "No hourly rates. No scope creep. One price, unlimited requests. The constraint creates clarity."
- "No<br>Meetings<br>Ever" — "Async is faster. Loom over Zoom. Figma over phone calls. Respect the maker's time."

### Physical Goods / Streetwear Drop
- "Drop<br>and<br>Done" — "Limited supply creates urgency. Scarcity is the strategy. No restocks, no second chances."
- "Manifesto<br>First<br>Merch<br>Second" — "People don't buy t-shirts. They buy belonging. The story sells the product."

---

## Final Output Format

**Filename:** `[business-name]-brutalist-funnel.html`

**Structure:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Business Name] | [Tagline]</title>
  <style>
    /* ALL CSS HERE (no external stylesheets) */
  </style>
</head>
<body>

  <!-- Cursor Dot + Scroll Progress -->
  <!-- Hero Section -->
  <!-- Principles Grid Section -->
  <!-- Beliefs Section -->
  <!-- Pricing Section (if applicable) -->
  <!-- CTA Banner -->
  <!-- Footer -->

  <!-- GSAP Scripts -->
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/SplitText.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/CustomEase.min.js"></script>

  <script>
    /* ALL JAVASCRIPT HERE */
  </script>

</body>
</html>
```

---

## Deployment

The output is a **single standalone HTML5 file** ready for:
- Vercel (drag & drop)
- Netlify Drop
- GitHub Pages
- Any static host

**No build process required.** All fonts via CDN, all scripts via CDN, all styles inline.

---

## Anti-Patterns to Avoid

❌ **DO NOT** use soft shadows, gradients, or rounded corners
❌ **DO NOT** use pastel colors or muted tones
❌ **DO NOT** center-align card content (left-align body text)
❌ **DO NOT** use serif fonts
❌ **DO NOT** add animations that delay user interaction
❌ **DO NOT** include carousels, sliders, or accordions in principles section
❌ **DO NOT** use stock photos or generic imagery
❌ **DO NOT** write corporate/safe copy (be opinionated, be direct)
❌ **DO NOT** use "Learn More" or "Get Started" as CTA text (be specific)

---

## Voice & Tone Guidelines

**Brutalist copy is:**
- **Declarative** (not suggestive)
- **Opinionated** (not neutral)
- **Direct** (not polite)
- **Anti-corporate** (not professional)
- **Maker-centric** (not consumer-friendly)

**Examples:**
- ✅ "Ship it now. Perfect it never."
- ❌ "We help you deliver high-quality solutions."

- ✅ "Thinking is cheap. Making is expensive."
- ❌ "We believe in the power of execution."

- ✅ "Done is better than perfect."
- ❌ "Quality is our top priority."

---

## Success Criteria

A brutalist funnel is successful when:
1. **The wrong people bounce immediately** (heuristic filter working)
2. **The right people feel seen** (they recognize their own principles)
3. **The aesthetic matches the ethos** (form = function)
4. **The CTA is unambiguous** (one clear next step)
5. **The page loads fast** (<1s on 3G)
6. **Every word earns its place** (no fluff)

---

**END OF SKILL INSTRUCTIONS**