---
name: bento-design-system-v4
description: >
  Generates premium bento-grid landing pages and funnels using the Bento Design System v4 — a
  surface-continuum visual language where cards dissolve out of the page background as faint
  glass tints, not solid objects. v4 adds funnel architecture on top of v3's visual system: every
  card gets a funnel role (Capture / Qualify / Process / Convert), not just a visual one. Use this
  skill whenever the user asks to build a landing page, bento layout, wealth/advisory/luxury/SaaS
  funnel, premium product page, or any bento-grid interface — especially if they want it to
  "convert", "feel premium", or "not look like a generic AI site". Also trigger if they reference
  the Bento Design System by name or version. Do NOT use this skill for dashboards, apps, or
  data-heavy UIs — those belong to a different skill.
---

# Bento Design System v4

## Read This First — Two Systems Working Together

v4 fuses two orthogonal systems:

1. **Visual System** — Surface-continuum design. Cards are regions of the page background with local color blushes, not objects sitting on top of it.
2. **Funnel System** — Every card has a conversion role. The grid is not a catalog; it is a guided journey.

Both must be applied. A page with beautiful glass tints but no funnel architecture is a brand canvas. A page with clear funnel flow but flat generic cards is a boring landing page.

---

## Part 1: Funnel Architecture

### The Problem with Vanilla Bento Grids

Bento grids are spatially non-linear. Every card competes equally for attention. This creates decision fatigue and kills conversion. v4 fixes this by imposing a **vertical narrative** on the horizontal grid.

### The 4 Funnel Layers (one per grid row)

```
Row 1:  CAPTURE   — One message. One CTA. No exits.
Row 2:  QUALIFY   — Stats as entry criteria. Case study, not testimonial.
Row 3:  PROCESS   — One process card (narrative). Not a catalog.
Row 4:  CONVERT   — Step-based CTA. One dominant action.
```

### Layer Rules

**CAPTURE (Row 1 — Hero)**
- Solid anchor card: col-8 or col-12, row-2
- ONE primary CTA, exclusionary framing:
  - ✅ "Check Eligibility", "Apply for Access", "Request a Private Call"
  - ❌ "Learn More", "Begin Journey", "Get Started"
- Zero secondary CTAs in this row. No "Our offerings →" competing links.
- Supporting stat cards in remaining columns (no CTAs, no links).

**QUALIFY (Row 2 — Trust + Filtering)**
- Reframe stats as qualification signals, not vanity metrics:
  - ❌ "$2.4B AUM" → ✅ "Trusted by families with $10M+ deployable capital"
  - ❌ "98.7% retention" → ✅ "98.7% of clients remain beyond 5 years"
- Replace testimonial quotes with case studies:
  - ❌ "Aurum restructured our family trust and it was amazing."
  - ✅ "₹120Cr family office → 2x tax efficiency in 18 months. [View breakdown →]"
- Include one "Who this is for" filter card — increases lead quality by self-selection.

**PROCESS (Row 3 — How You Work)**
- Do NOT list services as equal options (that is a catalog, not a funnel).
- Replace with a single sequential process card:
  ```
  Step 1: Diagnose — Portfolio audit + Tax review
  Step 2: Structure — Trust framework + Risk controls
  Step 3: Deploy   — Real estate + Alternative assets
  ```
- One col-8 or col-12 card. Remaining columns: lifestyle photo or short proof card.

**CONVERT (Row 4 — Step-based CTA)**
- The final CTA must show a 3-step commitment ladder, not a button alone:
  ```
  01  2-min eligibility check
  02  Private 30-min strategy call
  03  Custom wealth plan delivered
  ```
- Vivid CTA card (col-6 to col-8) with high contrast.
- One supporting card: scarcity signal ("Accepting 6 new families this quarter").

### CTA Hierarchy — Strict

| Position | Treatment | Count |
|---|---|---|
| Nav | Text link only, muted color, no button | 1 |
| Hero (primary) | Full button, exclusionary label | 1 |
| Convert row | Step-ladder + button | 1 |
| **Total** | | **3 max** |

Any additional CTA dilutes the dominant conversion moment. Remove all others.

### Scarcity / Selectivity Signals (high-ticket contexts)

Place as small pills or badges in the convert row — not as headlines:
- "Accepting 6 new families this quarter"
- "Minimum engagement: $5M AUM"
- "By referral or application only"

---

## Part 2: Visual System (Surface Continuum)

### Surface Philosophy

Cards and the page background are the **same surface**. A card does not sit ON the background like an object on a table — it RISES OUT OF the background like a blush on skin. A faint color appears at one corner and dissolves into the page color at the opposite corner.

- Most cards: glass tint (5–10% opacity hue bleeding into `--surface`)
- Gradient always **ends** at `--surface` — the dissolve edge is indistinguishable from the page
- Borders match the card's tint hue at ~20% opacity
- ONE solid anchor card per page (hero)
- MAX 2 vivid CTA cards per page (convert row only)

### Color Tokens

```css
:root {
  --surface:     #FFF5E6;
  --text:        #111827;
  --text-muted:  #6B7280;

  --hue-indigo:  99, 102, 241;
  --hue-amber:   245, 158, 11;
  --hue-emerald: 16, 185, 129;
  --hue-rose:    244, 63, 94;
  --hue-fuchsia: 217, 70, 239;
  --hue-cyan:    6, 182, 212;
  --hue-blue:    59, 130, 246;

  --solid-from:  #3B82F6;
  --solid-to:    #4338CA;

  --success:     #16A34A;
  --primary:     #FAD4C0;
  --secondary:   #80A1C1;

  --radius-xl:   24px;
}
```

### Card Surface Types

**Glass Tint (default — most cards)**
```css
/* Always dissolves back to --surface */
.hue-amber {
  background: linear-gradient(135deg, rgba(var(--hue-amber), 0.10), var(--surface));
  border: 1px solid rgba(var(--hue-amber), 0.20);
}
```
Text: always `var(--text)` / `var(--text-muted)`. Never white text on glass tints.

**Solid Anchor (hero only — 1 per page)**
```css
.card-solid {
  background: linear-gradient(135deg, var(--solid-from), var(--solid-to));
  color: white;
}
/* Can blend a photo: background-image: linear-gradient(overlay), url(image) */
```

**Vivid CTA (convert row — max 2)**
```css
.card-vivid {
  background: linear-gradient(135deg, #06B6D4, #3B82F6);
  color: white;
  transition: transform .2s ease, box-shadow .2s ease;
}
.card-vivid:hover { transform: translateY(-2px); }
```

### Blur Orbs

Every glass tint card: one corner blur orb in the card's hue, opacity transitions on hover.

```html
<div style="position:absolute; top:-20px; right:-20px; width:120px; height:120px;
  border-radius:50%; filter:blur(44px); pointer-events:none;
  background:rgba(var(--hue-amber), 0.14); opacity:0.12;
  transition:opacity 0.5s ease;"></div>
<!-- card:hover → opacity: 0.24 -->
```

Orb must match the card's own hue. Size: 80–160px. Position: corner or edge, never centered.

### Per-Card Hue Assignment

| Funnel Layer | Suggested Hue |
|---|---|
| Capture / Hero | solid anchor (no hue) |
| Qualify — stat 1 | amber |
| Qualify — stat 2 | emerald |
| Qualify — case study | fuchsia |
| Qualify — filter | rose |
| Process narrative | indigo |
| Convert CTA | cyan (vivid) |
| Secondary details | blue |

No two adjacent cards may share a hue. Check adjacency left→right, top→bottom.

### Grid System

```css
.bento-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(240px, auto);  /* 240px minimum; expands if content demands it */
  gap: 14px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 80px;
}
.col-3  { grid-column: span 3; }
.col-4  { grid-column: span 4; }
.col-6  { grid-column: span 6; }
.col-8  { grid-column: span 8; }
.col-12 { grid-column: span 12; }
.row-2  { grid-row: span 2; }   /* Hero card — spans 2 rows minimum */
```

**Why `minmax(240px, auto)`:**
`240px` hard rows force every card to the same height regardless of content. That creates overflow on cards with process steps, case study copy, or step ladders — and breaks the premium feel. `minmax` preserves the 240px rhythm for simple stat cards while letting richer cards breathe naturally. The bento geometry holds; the text no longer fights it.

**Card base styles:**
```css
.card {
  position: relative;
  overflow: hidden;             /* Clips blur orbs — do NOT remove */
  border-radius: var(--radius-xl);
  padding: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 240px;            /* Enforces visual rhythm even when content is sparse */
}
```

Font sizes by column width: col-3 → 13px body; col-4 → 14px; col-6+ → 15–16px.

### Typography

```css
.t-hero  { font-size: clamp(32px,4vw,52px); font-weight:600; line-height:1.08; letter-spacing:-.02em; }
.t-title { font-size: 20px; font-weight:600; line-height:1.2; }
.t-stat  { font-size: clamp(28px,3vw,40px); font-weight:700; letter-spacing:-.02em; }
.t-body  { font-size: 14px; color:var(--text-muted); line-height:1.55; }
.t-label { font-size: 11px; font-weight:600; text-transform:uppercase; letter-spacing:.06em; color:var(--text-muted); }
```

Font pairing: distinctive display (DM Serif Display, Playfair, Cormorant) + clean sans. **Never Inter, Roboto, or system-ui** for display text.

### Page Background Texture (optional)

```css
.page-texture {
  position:fixed; inset:0; z-index:-2; pointer-events:none;
  opacity:.07;
  background-image: radial-gradient(var(--text) 1px, transparent 1px);
  background-size: 30px 30px;
}
.page-texture-fade {
  position:fixed; inset:0; z-index:-1; pointer-events:none;
  background: linear-gradient(to bottom, transparent 40%, var(--surface) 100%);
}
```

---

## Part 3: Default Page Scaffold

```
ROW 1 (CAPTURE):
  [col-8, row-2]  Solid anchor hero — headline, qualification subtext, 1 exclusionary CTA
  [col-4, row-1]  Stat card (amber) — qualification-framed metric + trend badge
  [col-4, row-1]  Stat card (emerald) — qualification-framed metric

ROW 2 (QUALIFY — fills the 4-col column alongside row-2 hero):
  [col-4, row-1]  Case study card (fuchsia) — specific outcome + "View breakdown →"

ROW 3 (QUALIFY continued):
  [col-4, row-1]  Filter card (rose) — "This is for you if..." bullets (max 3)
  [col-8, row-1]  Photo / lifestyle card — atmospheric image, 1-line caption

ROW 4 (PROCESS):
  [col-8, row-1]  Process narrative card (indigo) — 3-step sequence
  [col-4, row-1]  Supporting proof card (blue) — single data point or quote fragment

ROW 5 (CONVERT):
  [col-6, row-1]  Vivid CTA card (cyan) — step ladder + primary action button
  [col-3, row-1]  Scarcity signal (amber) — "Accepting N clients this quarter"
  [col-3, row-1]  Final trust proof (blue) — credential or award
```

Adjust column spans and row counts to the content. The layer ORDER is fixed; the exact layout within each layer is flexible.

---

## Part 4: Hard Copy Budgets

These are **hard limits**, not guidelines. A card that exceeds its budget must have copy cut — not the font shrunk or the grid stretched.

The goal is not to make copy thin. The goal is to make every word **earn its space**. Premium copy is specific and compressed, not long.

| Card / Element | Max Words | Notes |
|---|---|---|
| Hero headline | 10 words | Short, declarative, no qualifier clauses |
| Hero body | 22 words | One sentence. The qualification hook. |
| Stat figure | — | Number only (e.g. "$2.4B", "98.7%") |
| Stat label | 8 words | Framed as threshold, not metric |
| Case study body | 18 words | Format: [Context] → [Outcome] in [Time] |
| Case study link | 5 words | e.g. "View the full breakdown →" |
| Filter bullet | 8 words each, max 3 bullets | Crisp. No sub-clauses. |
| Process step label | 3 words | e.g. "Diagnose", "Structure", "Deploy" |
| Process step body | 8 words | One tight descriptor. Not a sentence. |
| CTA ladder item | 7 words | e.g. "2-min eligibility check" |
| Scarcity signal | 8 words | e.g. "Accepting 6 new families this quarter" |
| Photo card caption | 8 words | Label + one evocative line |
| **Max text blocks per card** | **3** | Label + headline + body OR label + stat + subtext |

**No card may contain more than 3 distinct text blocks.** If you find yourself adding a fourth (e.g. label + headline + paragraph + link), collapse the paragraph into the headline or move the link to a button.

**Preserving funnel voice within the budget:**
Short copy must still be specific and exclusive — not generic. Compare:

| Too generic | Budget-compliant + premium |
|---|---|
| "We help wealthy families" | "For families deploying $10M+" |
| "Our process is proven" | "3-step structure. 18-month horizon." |
| "Book a call with us today" | "Check eligibility — 2 minutes" |
| "98.7% client retention rate" | "98.7% stay beyond 5 years" |

The funnel's exclusionary tone survives compression. Specificity is what makes short copy feel authoritative.

---

## Part 5: Anti-Patterns

| Anti-pattern | Fix |
|---|---|
| "Begin Your Journey" or "Learn More" CTA | Use exclusionary framing: "Check Eligibility" |
| Multiple equal CTAs | Exactly 1 hero CTA + 1 convert CTA + 1 nav text link |
| Stats as vanity numbers | Reframe as qualification thresholds |
| Testimonial quotes | Case studies with specific outcomes and numbers |
| Services listed as catalog | Single sequential process card (Step 1 → 2 → 3) |
| Nav button competing with hero | Nav = text link only, `color: var(--text-muted)` |
| `grid-auto-rows: 240px` (hard fixed) | Use `minmax(240px, auto)` — cards breathe, rhythm holds |
| 4+ text blocks per card | Max 3 blocks per card; collapse or cut |
| Hero body over 22 words | Cut to qualification hook only — one sentence |
| Process steps with full sentences | Step label (3 words) + descriptor (8 words max) |
| Solid gradient on most cards | Glass tints (5–10%) for all except 1 solid + max 2 vivid |
| Adjacent same-hue cards | Assign by funnel role; verify adjacency before output |
| font-weight 800–900 headlines | Use 600 (semibold) only |
| Multiple grids per section | ONE grid for the entire page |
| Unsplash images (if asset list provided) | Use only the provided CDN asset URLs |

---

## QA Checklist

**Funnel**
- [ ] Hero has exactly 1 exclusionary CTA
- [ ] Nav CTA is text-only, muted — not a button
- [ ] Stats framed as qualification signals (not "$X AUM")
- [ ] At least one case study (specific outcome + numbers)
- [ ] Service cards replaced by single process narrative (3 steps)
- [ ] Convert row has step-ladder (not a lone button)
- [ ] Total CTAs in body: ≤ 2

**Copy Budgets**
- [ ] Hero headline: ≤ 10 words
- [ ] Hero body: ≤ 22 words
- [ ] Every stat label: ≤ 8 words, framed as threshold
- [ ] Case study body: ≤ 18 words, format [Context → Outcome in Time]
- [ ] Filter bullets: ≤ 8 words each, max 3 bullets
- [ ] Process step labels: ≤ 3 words; descriptors ≤ 8 words
- [ ] CTA ladder items: ≤ 7 words each
- [ ] No card has more than 3 text blocks

**Visual**
- [ ] Page background: `--surface` (#FFF5E6)
- [ ] Grid uses `grid-auto-rows: minmax(240px, auto)` — NOT hard `240px`
- [ ] All cards: `min-height: 240px` + `overflow:hidden` + `justify-content:space-between`
- [ ] Every glass tint card: gradient ends at `--surface`
- [ ] Every glass tint card: border matches hue at ~20% opacity
- [ ] No two adjacent cards share a hue
- [ ] Exactly 1 solid anchor card
- [ ] Max 2 vivid CTA cards
- [ ] Blur orbs present, corner-positioned, opacity transition on hover
- [ ] Hero and tall cards use `row-2`
- [ ] Display font: NOT Inter / Roboto
- [ ] Mobile: single column, auto row heights