---
name: neo-industrial-factory-hardware
version: 1.0
description: Generates high-converting landing pages in the Neo-Industrial aesthetic — harsh textures, mechanical grids, sharp edges, factory energy. For robotics, infra tools, and security products. Signals robustness and reliability through visual weight and structural integrity.
---

# Neo-Industrial / Factory / Hardware Energy — Funnel Skill

---

## Aesthetic Identity

This aesthetic looks like it was designed by engineers for other engineers — not in the dismissive sense, but in the sense that every visual decision communicates function, tolerance, and load-bearing weight. Mechanical grid lines, harsh border systems, safety-color accents on near-black surfaces, and textures that suggest metal, concrete, and grit create a page that feels like it could handle whatever gets thrown at it. The product being sold doesn't just work — it endures.

---

## Visual Grammar

**How it separates things:** Elements are separated by visible mechanical grids and 1–2px borders. Every zone is bounded — panels sit inside a grid system as if mounted on a chassis. Separation is structural, not spatial: two sections are distinguished by their border weight and fill contrast, not by distance alone.

**How it creates hierarchy:** Hierarchy is communicated through fill contrast and border weight combined. A full-black panel with a safety-orange accent outranks a steel-gray panel. A 4px border outranks a 1px border. Large monospace metric numbers at maximum weight signal primary data.

**Its relationship with color:** Desaturated dark base with one high-intensity industrial accent (safety orange, acid yellow, or hazard red — one per page, never mixed). The accent appears on critical signals: the primary CTA, warning-level emphasis, and one key metric. All other fills are in the charcoal-to-black-to-steel range. Gradients are prohibited. Color washes prohibited. The accent never softens — it is always at full intensity.

**Its relationship with space:** Spacing follows utilitarian rhythm: tight internal gutters (16–20px), consistent grid-aligned padding, section breaks marked by heavy horizontal rules or mechanical dividers. Dense but organized. No section feels "designed for breathing room" — every section is load-bearing.

---

## Depth Model

Depth is created through **fill-contrast-depth** combined with **border-depth**: dark panels sit on darker backgrounds; panel importance is communicated by how many sides have borders and at what weight. A 3px border on a near-black panel outranks a borderless element on the same fill. No box-shadows. No elevation via shadow. Depth is structural, not decorative.

---

## Color Roles

```css
--surface:     20,  22,  26;   /* Near-black base: the page's resting surface */
--panel:       32,  35,  42;   /* Steel panel: primary content containers */
--panel-deep:  14,  16,  20;   /* Deep panel: recessed/background panels */
--border-dim:  50,  55,  65;   /* Dim steel: 1px borders, grid lines */
--border-mid:  75,  82,  95;   /* Mid steel: active borders, section edges */
--accent:     255, 100,  20;   /* Safety orange: CTA, primary signal (one per page) */
--accent-dim: 180,  70,  14;   /* Dim accent: secondary use of the accent signal */
--text-primary: 220, 225, 232; /* Primary text: headings, labels */
--text-dim:   110, 118, 132;   /* Dim text: metadata, secondary labels */
--grid-line:   38,  42,  50;   /* Grid: background mechanical grid pattern */
--anchor:       8,   9,  12;   /* Deepest black: peak section, maximum weight */
```

**Role constraints:**
- `--accent` (safety orange) appears on primary CTA buttons, one headline emphasis element, one status indicator, and the primary metric value. Maximum 4 occurrences total. Never as a section background fill.
- `--anchor` (deepest black) appears exactly once — the peak commitment section.
- The accent color is always at full intensity — never at reduced opacity except for the `--accent-dim` role.
- Panel fills alternate between `--panel` and `--panel-deep` for rhythm. No two adjacent sections share the same fill.
- `--grid-line` is used only in the background mechanical grid pattern overlay.

---

## Personality Constraints

**Always:**
1. Always: a mechanical grid pattern is present as the page background — 1px grid lines in `--grid-line` at 8% opacity, creating a graph-paper or circuit-board substrate beneath all content.
2. Always: monospace typeface for all metric values, status labels, and system identifiers (serial numbers, version strings, model codes).
3. Always: display headings use a high-weight condensed sans-serif (or all-caps regular sans at very heavy weight).
4. Always: borders on all primary content panels (at minimum, a 1px top or left border in `--border-mid`).
5. Always: the primary accent color appears at full intensity — never muted, never faded, never at less than 85% opacity.
6. Always: at least one element carries a "model number" or "specification" identifier in small monospace (e.g., "MODEL: X-400 / REV 2.3 / RATED 99.97%").
7. Always: section dividers are heavy horizontal rules (2–4px) or a mechanical-looking double-rule with spacing.

**Never:**
8. Never: border-radius on any element. Absolute zero. The aesthetic is hard edges exclusively.
9. Never: box-shadow or drop-shadow of any kind.
10. Never: gradients on fills. The accent glow (a diffuse radial gradient at 8% opacity) is the single exception and is permitted only behind the anchor section.
11. Never: lifestyle photography or abstract beauty shots. Images must show hardware, infrastructure, technical equipment, or architectural detail.
12. Never: rounded buttons, pill badges, or any organic shape. Every interactive element is rectangular.
13. Never: more than one accent color on the page. Safety orange, acid yellow, and hazard red are all options — pick one and use nothing else.
14. Never: decorative serifs or script typefaces. This aesthetic is sans-serif and monospace exclusively.

---

## Section Constraints

**Structural constraints:**
- The page must contain at least 9 sections.
- Every section serves a distinct role in the conversion arc. No two sections share purpose.
- The conversion arc runs: Signal (Interrupt) → Specification (Promise) → Field Data (Credibility) → Schematic (Mechanism) → Deployment Log (Peer Validation) → Load Rating (Offer) → Commit (Peak) → Tolerance (Residual).

**Fill/color constraints:**
- No two adjacent sections share the same fill.
- The anchor (deepest black) appears exactly once — on the peak commitment section.
- Accent color never appears as a section background fill.
- At least 5 sections use `--panel` as their base fill.
- 2–3 sections may use `--panel-deep` for fill rhythm.

**Layout constraints:**
- No two consecutive sections use the same column structure.
- The hero is minimum 90vh.
- At least one section uses a full-bleed mechanical grid layout with visible column boundaries.
- At least two sections use asymmetric column splits (e.g., 40/60 or 30/70).
- At least one section shows a data table or spec sheet format.

**Mobile constraints:**
- All multi-column layouts stack to single column.
- Mechanical grid: maintained (CSS background, no layout impact).
- Heavy section dividers: maintained.
- No horizontal overflow below 768px.
- Primary CTA visible on first load without scroll.

---

## Conversion Arc

1. **Signal (Interrupt)** — The hero is a full-screen panel on the mechanical grid: a large condensed white headline, a monospace model identifier below, a pulsing status indicator (the accent color), and one key metric. It looks like a machine coming online.

2. **Specification (Promise)** — A section titled or structured as a spec sheet: the product's core capabilities as a 2-column table or a definition list — spec name left, value right, all in monospace. This is the promise in technical form: not "we're fast" but "latency: 4ms / uptime: 99.97%."

3. **Field Data (Credibility)** — Real numbers presented in a harsh, no-framing way: a dark panel with 3–5 large monospace metrics. Client logos appear as a "deployed by" list with their names in small-caps. Optional: a brief table of customer deployments with environment and scale.

4. **Schematic (Mechanism)** — An architectural diagram (SVG or CSS grid) showing the system components and how they connect. Styled as a technical schematic — boxes with component labels, arrows with labels, status indicators. This is the machine's blueprint.

5. **Deployment Log (Peer Validation)** — A panel styled as a deployment log or monitoring feed: customer testimonials rendered as log entries with a timestamp, company name/role label, and a 1–2 sentence technical statement.

6. **Load Rating (Offer)** — Pricing styled as a product tier spec sheet: each tier as a panel with bordered header, spec-list body, and accent-colored CTA. Differences are shown as specs (max requests/day, SLA, support level) — not marketing bullets.

7. **Commit (Peak)** — The anchor section: deepest black, accent-colored headline or metric, single large rectangular CTA button ("Deploy →", "Activate →"). An accent glow behind the CTA area. Minimal elements. Maximum weight.

8. **Tolerance (Residual)** — FAQ styled as a technical spec Q&A: bold questions in monospace, answers in body text. One "SLA guarantee" rendered as a bordered specification box with header "GUARANTEED TOLERANCES" in monospace uppercase.

---

## Typography Rules

```css
/* Display — condensed, maximum weight, sans-serif */
--type-display: clamp(3rem, 8vw, 12rem);
font-family: 'Barlow Condensed', 'Bebas Neue', 'Inter', sans-serif;
font-weight: 900;
text-transform: uppercase;
letter-spacing: -0.01em;
line-height: 0.9;
color: rgba(var(--text-primary), 1);

/* Section headline */
--type-section: clamp(1.5rem, 3vw, 3.5rem);
font-weight: 800;
text-transform: uppercase;
letter-spacing: 0.02em;
line-height: 1.0;

/* Body copy */
--type-body: clamp(0.875rem, 1.1vw, 0.9375rem);
font-family: 'Inter', system-ui, sans-serif;
font-weight: 400;
line-height: 1.6;
color: rgba(var(--text-dim), 1);

/* Monospace — specs, metrics, identifiers */
--type-mono: clamp(0.75rem, 1vw, 0.875rem);
font-family: 'JetBrains Mono', 'IBM Plex Mono', monospace;
font-variant-numeric: tabular-nums;
color: rgba(var(--text-primary), 1);

/* Metric values */
--type-metric: clamp(2.5rem, 5vw, 8rem);
font-family: 'JetBrains Mono', 'IBM Plex Mono', monospace;
font-weight: 700;
font-variant-numeric: tabular-nums;
color: rgba(var(--accent), 1);

/* Labels / identifiers */
--type-label: 0.7rem;
font-family: 'JetBrains Mono', monospace;
text-transform: uppercase;
letter-spacing: 0.12em;
color: rgba(var(--text-dim), 1);
```

---

## Animation System

### Motion Personality
**Mechanical.** Easing: `cubic-bezier(0.25, 0, 0.25, 1)`. Duration range: 180–380ms. The page moves like a machine: precise, functional, zero overshoot. Animations simulate hardware coming online — panels snap into position, data renders line by line, status indicators pulse. No luxurious slowing, no bouncing, no organic motion.

### CSS Foundation
```css
.anim-ready {
  opacity: 0;
  transform: translateY(20px);
}
.anim-visible {
  opacity: 1;
  transform: none;
  transition: opacity 300ms cubic-bezier(0.25, 0, 0.25, 1),
              transform 300ms cubic-bezier(0.25, 0, 0.25, 1);
}
.anim-snap    { transform: translateY(12px) scaleY(0.97); }
.anim-slide-l { transform: translateX(-24px); opacity: 0; }
.anim-slide-r { transform: translateX(24px); opacity: 0; }
.anim-data    { opacity: 0; } /* data rows: no movement, just appear */
.anim-border-grow {
  transform: scaleX(0);
  transform-origin: left;
  opacity: 1 !important;
}
.anim-border-grow.anim-visible {
  transform: scaleX(1);
  transition: transform 400ms cubic-bezier(0.25, 0, 0.25, 1);
}

@media (prefers-reduced-motion: reduce) {
  .anim-ready { opacity: 1; transform: none; }
  .anim-visible { transition: none; }
  .anim-border-grow { transform: scaleX(1); }
}
```

### Scroll Observer Setup
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('anim-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.anim-ready').forEach(el => observer.observe(el));
```

### Required Animation Inventory (7 Layers — All Mandatory)

**Layer 1 — Scroll-Triggered Section Entrances:**
Alternate across (no two consecutive the same):
- Snap (translateY 12px + scaleY 0.97 → default) — for panels coming online
- Slide-left (translateX -24px → 0, opacity) — for left-column content
- Slide-right (translateX 24px → 0) — for right-column content
- Data-appear (opacity only) — for spec tables and data grids
- Border-grow (scaleX 0→1, left-origin) — for horizontal section dividers
Duration: 300ms mechanical ease.

**Layer 2 — Staggered Children Reveals:**
Spec rows, metric tiles, log entries, tier panels: stagger 65ms per sibling.
```javascript
section.querySelectorAll('.stagger-child').forEach((child, i) => {
  child.style.transitionDelay = `${i * 65}ms`;
});
```
Minimum 5 sections use staggered reveals.

**Layer 3 — Parallax / Drift:**
Background mechanical grid: parallax rate 0.92 (slower than content — grid shifts subtly).
One decorative element (model identifier badge or section label): parallax rate 1.06.
```javascript
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  document.querySelectorAll('[data-parallax]').forEach(el => {
    el.style.transform = `translateY(${scrollY * (parseFloat(el.dataset.parallax) - 1)}px)`;
  });
});
```
Mobile (< 768px): parallax disabled.

**Layer 4 — Counter Animations:**
All metric values count from 0. Duration 1400ms, cubic ease-out.
Monospace typeface maintained throughout animation. Suffix/prefix retained.
```javascript
// Standard requestAnimationFrame counter, 1400ms, cubic ease-out
// Format: commas, %, ms, x multipliers — all preserved during animation
```

**Layer 5 — Hover Micro-Interactions:**
`@media (hover: hover)`:
- CTA buttons: `border-color` shifts from `--border-mid` to `--accent`, background lightens slightly, `translateY(-2px)`, 150ms.
- Spec tiles/panels: left `border-color` shifts to `--accent` at 60% opacity, background shifts to `--panel` (if in `--panel-deep`), 150ms.
- Table rows: background brightens to `--panel`, `border-left` in `--accent-dim` appears, 100ms.
- Nav links: accent-color left border grows (0→3px), text-color shifts to `--text-primary`, 120ms.
- Tier pricing panels: `outline: 2px solid rgba(var(--accent), 0.4)` appears, 180ms.

**Layer 6 — Text Reveal (Hero + 1 other):**
Hero display headline: **character cascade in all-caps** — each character appears at 20ms intervals, snapping into place (no translateY — just opacity snapping, mechanical feel):
```javascript
chars.forEach((char, i) => {
  setTimeout(() => {
    char.style.opacity = 1;
  }, i * 20 + 300);
});
```
The anchor section headline uses a word-by-word snap (opacity only, 40ms per word).

**Layer 7 — Ambient / Continuous Motion:**
At least 1 continuously moving element:
- Primary status indicator: accent-colored dot pulsing with `scale(1)→scale(1.5)→scale(1)` over 1.8s, `box-shadow` expanding and fading (`0 0 0 0 rgba(accent, 0.7)` → `0 0 0 12px rgba(accent, 0)`).
- AND: scanline effect across the hero: a 1px horizontal line scanning downward on loop, `height: 1px, opacity: 0.1, accent-color`, `animation: scan 6s linear infinite`.
```css
@keyframes scan { from { top: 0; } to { top: 100%; } }
@keyframes pulse-ring {
  0%   { transform: scale(1); box-shadow: 0 0 0 0 rgba(var(--accent), 0.6); }
  70%  { transform: scale(1); box-shadow: 0 0 0 10px rgba(var(--accent), 0); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(var(--accent), 0); }
}
```

---

## Creative Differentiation Engine

### Visual Device Pool

**STRUCTURAL DEVICES:**
1. ★ **Machine schematic layout** — a section where content is arranged as labeled technical components inside a bordered grid, with connector lines between them (CSS or inline SVG). SIGNATURE.
2. **Spec sheet columns** — two columns: left holds the spec name in monospace uppercase, right holds the value in bold monospace. Separated by a mid-border vertical rule. Resembles a product data sheet.
3. ★ **Deployment log panel** — a bordered panel styled as a terminal log: timestamp | LOG_LEVEL | message, monospace throughout, entries staggered in on scroll. SIGNATURE.
4. **Asymmetric weight panel** — two adjacent panels where one is 65% width and full panel fill, and the other is 35% and panel-deep fill with a heavy left border separating them.
5. **Full-bleed grid overlay** — a section where the mechanical grid becomes the dominant visual and content floats on top with no panel container.
6. **Benchmark table** — a technical comparison table with product vs. alternatives, rows for each metric, color-coded cells (accent for "better," dim for "same," neutral for unavailable).
7. **Pipeline step tracker** — a horizontal sequence of numbered steps with connectors, each step in a bordered tile, with status states (complete/active/pending) styled as industrial indicators.
8. **Modular panel grid** — mixed-size panels in a CSS grid: one double-wide panel, two standard panels, two small stat tiles.

**DECORATIVE DEVICES:**
9. ★ **Mechanical grid background** — `background-image: linear-gradient(--grid-line 1px, transparent 1px), linear-gradient(90deg, --grid-line 1px, transparent 1px)` at 8% opacity on the page surface. SIGNATURE.
10. **Model number identifier** — a small monospace string ("MODEL: X-240 / REV 3.1 / RATED: 99.97%") positioned in a panel corner or section margin.
11. **Accent glow** — a diffuse `radial-gradient` in the accent color at 8–10% opacity behind the peak/anchor section only.
12. **Tick marks / gauge decoration** — a ruler-style tick mark scale across the top or bottom of a hero panel, in dim border color, purely decorative.
13. **Warning stripe** — diagonal stripe pattern (safety stripes: 4px accent / 4px transparent at 45°) used as a narrow accent bar at the top of one section.
14. **Serial number watermark** — a large faint monospace serial/model string at 8vw, 4% opacity, behind section content.
15. **Status LED array** — a row of 6–8 small square indicators in varying states (green/accent/dim), labeled with system names, appearing in the hero or a status section.
16. **Section border-accent** — a 4px left border in the accent color on one key content panel only.

**TYPOGRAPHIC DEVICES:**
17. **All-caps condensed hero** — headline at 900 weight, uppercase, condensed, letter-spacing slightly negative, fully filling the hero container.
18. **Monospace metric tower** — a stack of 3 metrics in a single column, each metric's value at 6rem, label at 0.7rem below, separated by thin rules.
19. **Technical inline badges** — small rectangular (0px radius) badges: `PRODUCTION-READY`, `FIELD-TESTED`, `ISO-COMPLIANT` appearing next to relevant content.

**Required per page:** At least **6 different devices**. No device used more than twice. Signature devices (★): at least **2 must appear** on every page.

---

### Creative Brief Gate

```
CREATIVE BRIEF (mandatory before any code):

1. HOOK: What is the single most machine-like, load-bearing visual moment?
   (e.g., "A hero where the headline is a 10vw all-caps condensed declaration 
   on a full mechanical grid background, with a pulsing accent-colored 
   status LED array below it showing all systems operational" — be specific)

2. RHYTHM: Describe the page's section rhythm using an industrial metaphor.
   (e.g., "Power-on sequence → spec sheet → field diagnostics → schematic → 
   deployment log → pricing matrix → commit button" or 
   "A machine coming online: cold → warm → operational → deploy")

3. DEVICES: List the 6+ devices with their sections.
   (e.g., "Mechanical grid → full page | Machine schematic → mechanism | 
   Deployment log → peer validation | Model identifier → hero corner | ...")

4. WILDCARD: One mechanical/industrial visual invention NOT in the device pool.
   (e.g., "A 'load test' visualization in the proof section that shows a 
   bar filling from 0 to 100% stress with the product maintaining green 
   status while competitors show red at 60%")

The final HTML must deliver every item in this brief.
```

---

### Anti-Convergence Rules

**PROHIBITED:**

1. A hero that is any color other than the near-black surface with the mechanical grid. No lifestyle backgrounds, no gradients, no colored fills in the hero. The hero is the machine's front panel.
2. Rounded anything. If you find yourself typing `border-radius`, remove it.
3. Three equal-width feature cards with icon + heading + paragraph. Features appear as spec sheet rows, component boxes in a schematic, or a benchmark table — never as equal-weight marketing cards.
4. Testimonials styled as quote cards with profile photos. Testimonials appear as deployment log entries: timestamp, company/role label in monospace, 1–2 sentence technical statement.
5. A pricing section with equal visual weight on all tiers. Tier differentiation is structural (panel size, border weight, accent-border on recommended tier) — not just a "POPULAR" badge.
6. A CTA section that is only a headline and button in slightly darker color. The anchor section must have maximum visual weight: deepest black, accent glow, accent-colored metric or statement, maximum contrast CTA.
7. Lifestyle or stock photography. Any photographic asset must show hardware, equipment, server infrastructure, or industrial/architectural texture.
8. Any soft easing (cubic-bezier with overshoot, or slow luxurious ease) — all motion is mechanical.
9. Section headings in lowercase or sentence case. All primary headings are uppercase.
10. More than one accent color. Pick one industrial signal color and use nothing else for accent.

---

## Mobile Directive

**Breakpoints:** 768px (tablet), 480px (small mobile).

**Hero at < 768px:**
- Display headline: `clamp(2.5rem, 8vw, 5rem)`, uppercase, condensed.
- Mechanical grid: maintained (CSS background, no layout impact).
- Status LED array (if used): 4 LEDs instead of 8, single row.
- CTA button: full-width rectangular, visible on first load.

**Navigation at < 768px:**
- Top bar: wordmark left, hamburger right, accent-colored "Get Started" button visible.
- Hamburger opens full-width dropdown, dark panel fill, sharp edges.
- Touch targets: 44×44px.

**Grid collapse rules:**
- All multi-column layouts: single column at < 768px.
- Spec sheet two-column: stacks (label above, value below for each spec row).
- Machine schematic: simplified to a linear vertical flow of labeled boxes with connectors.
- Pipeline step tracker: scrolls horizontally at < 768px with `overflow-x: auto`.
- Benchmark table: horizontally scrollable.

**Typography floor:**
- Display: `clamp(2.2rem, 8vw, 4rem)`, uppercase.
- Body: `0.875rem`, line-height `1.58`.
- Monospace labels: `0.7rem`, preserved.

**Spacing floor:**
- Section padding: `clamp(32px, 7vw, 64px)` vertical.
- Panel padding: `clamp(16px, 5vw, 24px)`.

**Decorative elements on mobile:**
- Mechanical grid: retained.
- Warning stripe: retained (narrow enough).
- Serial number watermark: `display: none` below 480px.
- Scanline ambient effect: `display: none` below 768px (performance).
- Parallax: disabled.

---

## Interactivity Requirements (All Mandatory)

- [ ] Hamburger nav toggle: functional.
- [ ] FAQ accordion: expand/collapse, mechanical 240ms ease.
- [ ] Smooth scroll: all anchor links.
- [ ] All 7 animation layers: snap entrances, stagger, parallax (desktop), counters, hover states, char cascade, pulse + scanline ambient.
- [ ] Status LED pulse: always running.
- [ ] Scanline ambient: always running on hero (desktop only).
- [ ] Counter animations: all metrics count from 0.
- [ ] Pipeline tracker (if used): step states toggleable or animated on scroll.
- [ ] Reduced-motion: all animations resolve instantly, pulse and scanline paused.
- [ ] JavaScript mandatory.

---

## Image Guidance

Images must feel like evidence, not decoration.

**Preferred types:**
- Hardware close-ups: circuit boards, server racks, mechanical components.
- Industrial environment: data centers, manufacturing facilities.
- Technical diagrams: schematics, blueprints, grid drawings.
- Apply heavy dark overlay to all photos: `background: rgba(20,22,26,0.65)` overlay.
- Apply: `filter: contrast(1.1) saturate(0.7)` to all images.

**Unsplash fallbacks:**
```
Server / tech dark:     photo-1551434678-e076c223a692
Architecture / steel:   photo-1600596542815-ffad4c1539a9
Industrial / workspace: photo-1454165804606-c3d57bc86b40
Security / abstract:    photo-1558494949-ef010cbdcc31
Hardware close-up:      photo-1518770660439-4636190af475 (if available)
```
Format: `https://images.unsplash.com/[photo-id]?w=1400&q=80&auto=format`

Apply dark overlay + desaturation on all images.

**Rule:** No placeholder boxes. All image slots have real URLs or are replaced by CSS/SVG technical graphics.

---

## Anti-Patterns

**Visual anti-patterns:**
- Border-radius on any element — absolute prohibition.
- Box-shadow for elevation — prohibited.
- Gradients on fills (accent glow radial-gradient is the single exception, anchor section only) — prohibited.
- More than one accent color — prohibited.
- Rounded buttons, pill badges — prohibited.
- Lifestyle photography — prohibited.
- Serif or decorative typefaces — prohibited.

**Motion anti-patterns:**
- Elastic or bouncy easing — prohibited.
- Slow, luxurious animations > 450ms for entrance animations — prohibited. This is a machine, not a spa.
- Hover states on non-interactive elements — prohibited.
- Scanline effect running on mobile (performance) — disable below 768px.

**Structural anti-patterns:**
- No mechanical grid background on the page — failed aesthetic.
- Section headings in lowercase — prohibited.
- A page where no section shows a data table or spec sheet — failed aesthetic.
- Equal-weight three-column feature cards — prohibited.

---

## QA Checklist

- [ ] Mechanical grid background present on the page surface (CSS linear-gradient)
- [ ] No border-radius on any element (absolute zero)
- [ ] No box-shadow
- [ ] No gradients except accent glow (anchor section only)
- [ ] One and only one accent color used
- [ ] All display headings are uppercase
- [ ] All metric values are monospace with tabular-nums
- [ ] Accent color appears on ≤4 elements (plus the CTA button)
- [ ] Exactly one anchor (deepest black) section with accent glow
- [ ] No two adjacent sections share the same fill
- [ ] At least 2 signature devices present
- [ ] At least 6 total devices present
- [ ] Creative brief written before code and fulfilled
- [ ] Hero is not a colored/gradient background
- [ ] No feature cards with equal columns and icons
- [ ] No lifestyle photography
- [ ] Layer 1: Every section has a scroll-triggered entrance, ≤380ms mechanical ease
- [ ] Layer 2: At least 5 sections use staggered children at 65ms
- [ ] Layer 3: Mechanical grid parallax at 0.92, one element at 1.06
- [ ] Layer 4: All metrics count from 0, monospace maintained throughout
- [ ] Layer 5: All buttons, panels, rows, and nav links have hover states
- [ ] Layer 6: Hero headline uses character snap cascade (20ms per char)
- [ ] Layer 7: Status LED pulsing and/or scanline running continuously
- [ ] Mobile: parallax and scanline disabled below 768px
- [ ] Mobile: all columns collapse to single column
- [ ] Mobile: pipeline tracker and benchmark table horizontally scrollable
- [ ] FAQ accordion functional
- [ ] Reduced-motion: all animations resolve instantly, ambient paused
- [ ] No placeholder image boxes
- [ ] No horizontal overflow at 375px