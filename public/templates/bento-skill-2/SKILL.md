---
name: Bento Design System v3
version: 3.0
description: A surface-continuum design system for bento-grid layouts. Cards are not objects on a background — they are regions of the background with local color disturbances. The core visual primitive is the glass tint, not the solid fill.
---

# Bento Design System v3

## Surface Philosophy (Read This First)

The entire visual identity of this design system rests on ONE principle:

**Cards and the page background are the SAME surface.** A card does not sit ON the background like an object on a table. It RISES OUT OF the background like a blush on skin — a faint color appearing at one corner and dissolving into the page color at the opposite corner.

This means:
- Most cards use the page background color (`--surface`) as their base, with a hue tinted at 5-10% opacity bleeding in from one direction
- The gradient in a glass-tint card always ENDS at `--surface` — meaning the card's bottom/right edge is physically indistinguishable from the page behind it
- Borders match the card's tint hue at ~20% opacity, not a shared global border color
- Only ONE card per page uses a true opaque gradient (the "solid anchor") — everything else dissolves into the background
- Decorative blur orbs inside cards enhance the tinted glow without adding hard edges

The page background itself is not flat — it has a subtle dot-grid texture at ~10% opacity that fades out toward the bottom, giving the surface visual grain.

---

## Color Tokens

```css
:root {
  /* Page surface */
  --surface:    #FFF5E6;
  --text:       #111827;
  --text-muted: #6B7280;

  /* Card tint hues — used at LOW OPACITY (5-15%) for glass tint cards */
  --hue-indigo:  99, 102, 241;   /* rgb for rgba() — indigo-500 */
  --hue-amber:   245, 158, 11;   /* amber-500 */
  --hue-emerald: 16, 185, 129;   /* emerald-500 */
  --hue-rose:    244, 63, 94;    /* rose-500 */
  --hue-fuchsia: 217, 70, 239;   /* fuchsia-500 */
  --hue-cyan:    6, 182, 212;    /* cyan-500 */
  --hue-blue:    59, 130, 246;   /* blue-500 */

  /* Solid gradient stops — used ONLY for the single anchor card */
  --solid-from:  #3B82F6;        /* blue-600 */
  --solid-to:    #4338CA;        /* indigo-900 */

  /* Semantic colors */
  --success:    #16A34A;
  --warning:    #D97706;
  --danger:     #DC2626;

  /* Functional */
  --primary:    #FAD4C0;         /* Soft peach — badges, CTA accents */
  --secondary:  #80A1C1;         /* Muted blue — secondary actions, focus rings */

  /* Typography */
  --font-primary: 'Inter', system-ui, sans-serif;
  --font-mono:    'JetBrains Mono', monospace;

  /* Spacing */
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px;
  --space-6: 24px; --space-8: 32px; --space-12: 48px; --space-16: 64px;

  /* Radius */
  --radius-sm: 8px; --radius-md: 12px; --radius-lg: 16px;
  --radius-xl: 24px; --radius-2xl: 32px;

  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(0,0,0,0.04);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.06);
  --shadow-lg: 0 8px 30px rgba(0,0,0,0.08);
}
```

**How tint hues are used (the critical pattern):**
```css
/* Glass tint card — amber example */
.card-tint-amber {
  background: linear-gradient(to bottom right,
    rgba(var(--hue-amber), 0.10),   /* tint corner: amber at 10% */
    var(--surface)                    /* dissolve corner: page color */
  );
  border: 1px solid rgba(var(--hue-amber), 0.20);  /* matched border */
}
```

The card background is 90% page color. The tint is barely there. This subtlety IS the design.

---

## Surface Model (3 Layers)

### Layer 1: Page Background
```css
body {
  background-color: var(--surface);
}
```
A warm ivory. This is the shared material that everything rises from.

### Layer 2: Dot-Grid Texture (optional, enhances depth)
```css
.page-texture {
  position: fixed; inset: 0; z-index: -1;
  opacity: 0.07;
  background-image: radial-gradient(var(--text) 1px, transparent 1px);
  background-size: 32px 32px;
}
.page-texture-fade {
  position: fixed; inset: 0; z-index: -1;
  background: linear-gradient(to bottom, transparent 30%, var(--surface) 100%);
  pointer-events: none;
}
```
A subtle dot grid at ~7% opacity that fades to nothing toward the bottom of the page.

### Layer 3: Glass Tint Cards
Cards are regions of this surface where a faint color blush appears. They share the surface material — the gradient always resolves back to `var(--surface)`.

---

## Card Surface Types (Opacity Continuum)

Instead of discrete card "types", this system uses a continuum of opacity levels. Every card exists somewhere on this scale:

```
0% ──────────── 10% ──────────── 20% ──────────── 100%
│                │                 │                 │
Page bg      Glass tint        Deep tint        Solid anchor
(no card)    (most cards)      (rare accent)    (1 per page)
```

### Glass Tint Card (5-10% opacity) — DEFAULT for most cards
```css
.card-tint {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-xl);
  padding: var(--space-8);
}

/* Hue variants — apply ONE per card */
.card-tint.hue-indigo {
  background: linear-gradient(135deg, rgba(var(--hue-indigo), 0.08), rgba(var(--hue-indigo), 0.02), var(--surface));
  border: 1px solid rgba(var(--hue-indigo), 0.15);
}
.card-tint.hue-amber {
  background: linear-gradient(to bottom right, rgba(var(--hue-amber), 0.10), var(--surface));
  border: 1px solid rgba(var(--hue-amber), 0.20);
}
.card-tint.hue-emerald {
  background: linear-gradient(to top right, rgba(var(--hue-emerald), 0.10), var(--surface));
  border: 1px solid rgba(var(--hue-emerald), 0.20);
}
.card-tint.hue-rose {
  background: linear-gradient(to bottom, rgba(var(--hue-rose), 0.06), var(--surface));
  border: 1px solid rgba(var(--hue-rose), 0.18);
}
.card-tint.hue-fuchsia {
  background: linear-gradient(135deg, rgba(var(--hue-fuchsia), 0.08), rgba(var(--hue-fuchsia), 0.03), var(--surface));
  border: 1px solid rgba(var(--hue-fuchsia), 0.18);
}
.card-tint.hue-cyan {
  background: linear-gradient(135deg, rgba(var(--hue-cyan), 0.10), var(--surface));
  border: 1px solid rgba(var(--hue-cyan), 0.18);
}
```

**Text on glass tint cards:** Always `var(--text)` and `var(--text-muted)`. The tint is so faint that dark text works perfectly. Never use white text on glass tint cards.

### Solid Anchor Card (100% opacity) — MAX 1 PER PAGE
```css
.card-solid {
  background: linear-gradient(135deg, var(--solid-from), var(--solid-to));
  border: 1px solid rgba(59, 130, 246, 0.30);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  color: white;
  position: relative;
  overflow: hidden;
}
.card-solid .card-title { color: white; }
.card-solid .card-text { color: rgba(255,255,255,0.75); }
```

**The solid anchor is the visual climax.** It's the ONE card that doesn't share the page surface. It should be a large card (span 6+ columns, span 2 rows) with the most important brand statement. Everything else dissolves into the background; this one interrupts it.

### Vibrant CTA Card (solid accent for action blocks)
```css
.card-vivid {
  background: linear-gradient(135deg, #06B6D4, #3B82F6);
  border: none;
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  color: white;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.card-vivid:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(6, 182, 212, 0.25);
}
```
Used for small CTA blocks ("Join community", "Download brochure"). Max 1-2 per page.

---

## Decorative Blur Orbs

Most glass-tint cards include a decorative blur orb — a large, soft, positioned glow that reinforces the tint color and creates depth.

```css
.card-tint .blur-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.5s ease;
}
.card-tint:hover .blur-orb {
  opacity: 1;
}
```

### Orb placement patterns:
```html
<!-- Top-right corner orb (amber card) -->
<div class="blur-orb" style="top:-20px; right:-20px; width:120px; height:120px; background:rgba(var(--hue-amber), 0.15);"></div>

<!-- Bottom-left corner orb (emerald card) -->
<div class="blur-orb" style="bottom:-24px; left:-24px; width:160px; height:160px; background:rgba(var(--hue-emerald), 0.12);"></div>

<!-- Center radial glow (solid anchor card) -->
<div style="position:absolute; inset:0; background:radial-gradient(circle at center, rgba(96,165,250,0.3), transparent 70%); pointer-events:none; opacity:0.5;"></div>
```

**Orb rules:**
- Orb color must match the card's tint hue
- Orb opacity: 10-20% (barely there at rest, slightly stronger on hover)
- Orb size: 80-160px, always bleeds outside the card's padding area
- Position: always in a corner or edge, never centered (except solid anchor)
- On hover: orb opacity increases from ~0.12 to ~0.20 for a gentle breathing effect

---

## Grid System

### Unified Bento Grid
The page uses ONE grid for all cards (not separate grids per section). This is what creates the true bento-box feel.

```css
.bento-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: 240px;
  gap: var(--space-4);
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-4);
}

.col-3  { grid-column: span 3; }
.col-4  { grid-column: span 4; }
.col-6  { grid-column: span 6; }
.col-8  { grid-column: span 8; }
.col-12 { grid-column: span 12; }

.row-1  { grid-row: span 1; }    /* 240px */
.row-2  { grid-row: span 2; }    /* 496px (240+16+240) */

@media (max-width: 768px) {
  .bento-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
  }
  [class*="col-"] { grid-column: span 1; }
  [class*="row-"] { grid-row: span 1; }
}
```

**Fixed row heights are essential.** `grid-auto-rows: 240px` means every row is exactly 240px tall. Cards that need more height use `row-span-2` (480px + gap). This creates the rigid bento rhythm where cards tile perfectly regardless of content length.

**Section headers go INSIDE cards, not between grids.** If you need a section label, put it as a text element at the top of a full-width card, or as a small label card at the start of a row.

---

## Per-Card Hue Assignment

Each card gets a UNIQUE tint hue. No two adjacent cards share the same hue. Assignment follows semantic mapping:

| Card Purpose | Assigned Hue | Why |
|---|---|---|
| Hero / main content | indigo | Tech authority, primary brand |
| Performance / speed | amber | Energy, warmth |
| Stats / metrics | emerald | Growth, success |
| Security / trust | rose | Attention, care |
| Testimonials / quotes | fuchsia | Personal, expressive |
| Community / CTA | cyan | Open, inviting |
| Features / process | blue | Professional, clear |

**Adjacency rule:** Scan the grid left-to-right, top-to-bottom. If two cards sharing an edge have the same hue class, change one. Prefer hues that are visually distant (don't put amber next to emerald — put amber next to indigo or rose).

---

## SVG Icon System

Icons are inline SVG, 24×24 viewBox, 2px stroke, no fill. They sit in colored circle containers that match the card's hue.

```html
<!-- Icon container (matches card hue) -->
<div style="width:40px; height:40px; border-radius:50%;
  background:rgba(var(--hue-amber), 0.12);
  display:flex; align-items:center; justify-content:center;">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="rgb(var(--hue-amber))" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
  </svg>
</div>
```

### Core Icon Paths
| Icon | Path |
|---|---|
| Lightning | `<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>` |
| Shield | `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>` |
| Layers | `<path d="M12 2L2 7l10 5 10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>` |
| Chart | `<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>` |
| Check circle | `<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>` |
| Arrow right | `<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>` |
| Cloud | `<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>` |
| Users | `<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>` |

**Icon color rule:** The icon stroke color and container background must use the SAME hue RGB as the card's tint. This creates chromatic cohesion — the icon, the border, and the card background all speak the same color.

---

## Decorative Elements

### Large Quote Marks (testimonial cards)
```html
<div style="position:absolute; bottom:-10px; right:10px; pointer-events:none;">
  <svg width="120" height="120" viewBox="0 0 24 24"
    fill="rgba(var(--hue-fuchsia), 0.12)">
    <path d="M14 18V10.6C14 4.9 17.7 1 23 0l1 2.2c-2.4.9-4 3.6-4 5.8h4v10h-10zM0 18V10.6C0 4.9 3.7 1 9 0l1 2.2C7.6 3.1 6 5.8 6 8h4v10H0z"/>
  </svg>
</div>
```

### Trend Indicator
```html
<div style="display:inline-flex; align-items:center; gap:4px; font-size:13px; font-weight:600; color:var(--success); background:rgba(22,163,74,0.08); padding:2px 8px; border-radius:6px;">
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
    <path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>
  </svg>
  +24% this week
</div>
```

### Animated Status Dot (for badges)
```html
<span style="position:relative; display:inline-flex; width:8px; height:8px;">
  <span style="position:absolute; inset:0; border-radius:50%; background:var(--secondary); opacity:0.75; animation:ping 1.5s cubic-bezier(0,0,0.2,1) infinite;"></span>
  <span style="position:relative; display:inline-flex; width:8px; height:8px; border-radius:50%; background:var(--secondary);"></span>
</span>
```

---

## Navigation Bar

```html
<nav style="display:flex; align-items:center; justify-content:space-between; max-width:1200px; margin:0 auto; padding:var(--space-6) var(--space-4) var(--space-12);">
  <div style="display:flex; align-items:center; gap:var(--space-2);">
    <div style="width:32px; height:32px; border-radius:var(--radius-sm); background:var(--primary); display:flex; align-items:center; justify-content:center; font-weight:700; font-size:14px;">B</div>
    <span style="font-weight:600; font-size:16px; letter-spacing:-0.01em;">Brand</span>
  </div>
  <button style="font-size:14px; font-weight:500; color:var(--text-muted); background:none; border:none; cursor:pointer;">Log in</button>
</nav>
```

---

## Typography

```css
body {
  font-family: var(--font-primary);
  color: var(--text);
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

/* Hero headline */
.text-hero {
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 600;   /* semibold, not black — matches reference */
  line-height: 1.1;
  letter-spacing: -0.02em;
}

/* Section / card titles */
.text-title { font-size: 20px; font-weight: 600; line-height: 1.3; }
.text-large { font-size: 28px; font-weight: 600; line-height: 1.2; letter-spacing: -0.01em; }

/* Body */
.text-body { font-size: 16px; color: var(--text-muted); line-height: 1.6; }
.text-small { font-size: 14px; color: var(--text-muted); line-height: 1.5; }

/* Labels */
.text-label { font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); }

/* Stats */
.text-stat { font-size: clamp(28px, 4vw, 40px); font-weight: 700; letter-spacing: -0.02em; }
```

Note: The reference uses `font-weight: 600` (semibold) for headlines, not 800-900 (extrabold/black). This is a key tonal difference — the reference feels confident but not loud.

---

## Buttons

```css
.btn {
  display: inline-flex; align-items: center; justify-content: center;
  gap: var(--space-2); height: 48px; padding: 0 var(--space-6);
  border-radius: 9999px;   /* Pill shape */
  font-family: var(--font-primary); font-size: 15px; font-weight: 500;
  border: none; cursor: pointer; transition: all 0.2s ease;
  text-decoration: none;
}
.btn-dark {
  background: var(--text); color: white;
  box-shadow: 0 4px 12px rgba(17,24,39,0.12);
}
.btn-dark:hover { transform: scale(1.03); }
.btn-dark:active { transform: scale(0.97); }

.btn-surface {
  background: var(--surface);
  border: 1px solid rgba(0,0,0,0.08);
  color: var(--text);
}
.btn-surface:hover { gap: var(--space-3); }
```

---

## Accessibility
- WCAG 2.2 AA compliance
- Focus: `outline: 2px solid var(--secondary); outline-offset: 3px`
- Touch targets: 48px minimum
- All text on glass-tint cards meets 4.5:1 contrast (tint is so faint it doesn't affect contrast)
- White text on solid anchor card must verify against darkest gradient stop
- All interactive elements keyboard-operable
- Accordions use `aria-expanded`

---

## Anti-Patterns

| Anti-pattern | Why | Fix |
|---|---|---|
| Solid gradient on most cards | Overwhelms the surface, breaks continuum | Use glass tints (5-10% opacity); limit solid to 1 card |
| Same hue on adjacent cards | Looks monotone, loses bento variety | Each card gets a unique hue; check adjacency |
| No blur orbs | Cards feel flat, no depth | Add a corner blur orb matching the card's hue |
| Generic border color | Cards don't feel cohesive with their tint | Border must use the same hue at ~20% opacity |
| Content-height cards | Grid feels like a list, not a bento box | Use `grid-auto-rows: 240px` + `row-span-2` for tall cards |
| Per-section grids | Page breaks into separate "sections" | Use ONE grid for the entire page |
| Emoji icons | Cheap, inconsistent | Inline SVG with hue-matched colored circles |
| font-weight: 900 | Too aggressive for the warm surface | Use 600 (semibold) for headlines |
| Multiple solid gradient cards | Dilutes the anchor's visual impact | Maximum 1 solid anchor + 1-2 vivid CTAs |

---

## QA Checklist

- [ ] Page background is `--surface` (#FFF5E6)
- [ ] Dot-grid texture present at ~7% opacity (optional but recommended)
- [ ] Every card uses a glass-tint with hue-specific gradient (not flat color)
- [ ] Every card border matches its hue at ~20% opacity
- [ ] No two adjacent cards share the same hue
- [ ] Maximum 1 solid anchor card per page
- [ ] Solid anchor is large (6+ columns, 2 rows) with white text
- [ ] Blur orbs present in cards, matching hue color
- [ ] Grid uses `auto-rows: 240px` with `row-span` for tall cards
- [ ] Icons are inline SVG in hue-matched colored circles
- [ ] Buttons use pill radius (9999px) with semibold weight
- [ ] Headlines use font-weight 600, not 800+
- [ ] Navigation bar present (logo + single link)
- [ ] Mobile: single column, auto row heights
- [ ] Focus states on all interactive elements

---