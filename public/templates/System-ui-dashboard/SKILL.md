---
name: system-ui-dashboard-marketing
version: 1.0
description: Generates high-converting landing pages styled as real product UI — panels, metrics, logs, status indicators everywhere. Eliminates the imagination gap for dev tools, AI infra, and fintech products. Signals "I already see how this works."
---

# System UI / Dashboard-as-Marketing — Funnel Skill

---

## Aesthetic Identity

This aesthetic removes the boundary between marketing page and actual product — the landing page looks like a live dashboard, application shell, or monitoring console. Panels with pixel-precise borders, status badges, log streams, metric tiles, sidebar navigation, and data grids replace conventional marketing sections. The visitor doesn't read about what the product does — they see it running. The imagination gap closes instantly, and with it, the primary conversion objection.

---

## Visual Grammar

**How it separates things:** Elements are separated by 1px solid border panels — every UI component has a defined boundary. The separation mechanism is the application chrome: panels within panels, bordered tiles, sidebar/main-content split. Whitespace exists as "system breathing room" between tiles, never as a primary separator.

**How it creates hierarchy:** Hierarchy is communicated through data prominence and panel layering. Large metric numbers signal primary KPIs. Status badges (green dot, amber warning) signal system state. Section-level prominence comes from panel size and position — a full-width log panel outranks a small metric tile. Higher-importance elements always occupy more panel real estate.

**Its relationship with color:** Color is applied as flat fills on a dark base. The palette is dark-mode system UI: deep background, lighter panel surfaces, one electric accent that functions as the "active state" color throughout. Color appears in status indicators, active highlights, and CTA elements — never as decorative washes. Gradients are prohibited on structural elements; subtle gradient glows on the accent color only, as a UI state signal.

**Its relationship with space:** Spacing follows application UI rhythm: 12–16px gutters between panels, 16–24px internal panel padding, consistent 8px grid alignment. Sections feel dense with data but not chaotic — the grid is always implied and honored. No section feels "airy" or "lifestyle."

---

## Depth Model

Depth is created through **fill-contrast-depth**: the page background is the darkest element; panels are lighter; interactive/active elements are lightest or accent-lit. Box-shadows are permitted only as the inner glow of accent-colored active states — never as elevation shadows in the traditional sense. Drop-shadows for elevation are prohibited.

---

## Color Roles

```css
--surface:    13,  17,  23;    /* Deep system bg: the darkest layer, page background */
--panel:      22,  27,  34;    /* Panel surface: slightly lighter, all UI components */
--panel-alt:  30,  35,  45;    /* Alt panel: for nested components, hover states */
--border:     48,  54,  68;    /* System border: 1px lines defining all panel edges */
--accent:     0,  210, 130;    /* Active/accent: green for success/primary state, CTAs */
--data-blue:  59, 130, 246;    /* Data blue: charts, links, secondary highlights */
--warning:    251, 191,  36;   /* Amber warning: status indicators, secondary emphasis */
--text-primary: 230, 237, 243; /* Primary text: headings, active labels */
--text-dim:   120, 134, 150;   /* Dim text: metadata, inactive labels, placeholders */
--anchor:     5,   10,  20;    /* Deepest anchor: full-page-width dark sections */
```

**Role constraints:**
- `--accent` appears on primary CTA buttons, active nav indicators, success status badges, and live indicator pulses. Maximum 4 non-CTA uses per page. Never as a section fill.
- `--data-blue` appears on charts, links, and secondary data points only. Never on CTAs.
- `--warning` appears on status badges and secondary emphasis elements. Never on CTAs or backgrounds.
- The `--anchor` section appears exactly once — the peak commitment section. It is deeper and more immersive than all other panels.
- `--panel` and `--panel-alt` alternate to create nesting depth. Never use `--surface` as a panel fill.

---

## Personality Constraints

**Always:**
1. Always: every section is wrapped in or structured as a UI panel — bordered, titled (with a small panel header/tab), and data-dense.
2. Always: the top of the page renders a persistent application chrome: sidebar or top navigation bar styled as a real app shell.
3. Always: at least 3 status indicators are visible (green "active," amber "processing," or red "alert" dot + label).
4. Always: monospace typeface for all code, metric values, log lines, and system labels.
5. Always: section titles appear as panel header tabs (small, all-caps or title-case, 12px, inside a bordered tab strip at the panel top).
6. Always: at least one section contains a simulated data stream, log output, or live feed — even if static HTML.
7. Always: metric numbers use tabular figures (`font-variant-numeric: tabular-nums`).

**Never:**
8. Never: border-radius greater than 6px on any panel. Application panels are rectangular with maximum 4px rounding. No large rounded cards.
9. Never: gradients on structural fills. A subtle `radial-gradient` glow behind the accent color is permitted only on active CTA states.
10. Never: stock photo lifestyle images as section fills. Images must be screenshots, UI mockups, terminal outputs, or diagrammatic.
11. Never: testimonial quote cards styled as social media posts. Testimonials appear as user entries in a structured data table or as a chat log format.
12. Never: the "hero + three features + social proof + pricing + CTA" sequence. Marketing section names are prohibited — replace them with UI panel names (e.g., "Overview," "Metrics," "Changelog," "Pricing Tier Matrix").

---

## Section Constraints

**Structural constraints:**
- The page must contain at least 9 sections/panels.
- Every panel serves a distinct role in the conversion arc. No two panels share emotional purpose.
- The conversion arc runs: App Shell Load → System Overview → Live Proof → Architecture → Peer Logs → Pricing Matrix → Commit Panel → Release Notes (FAQ).

**Fill/color constraints:**
- No two vertically adjacent panels may share the exact same fill.
- The anchor section (deepest dark) appears exactly once — on the peak commitment panel.
- The accent color never appears as a panel background fill.
- At least 6 panels use `--panel` as their base fill.
- Warning amber and data-blue appear on visual elements within panels, not as panel backgrounds.

**Layout constraints:**
- No two consecutive panels may use the same column structure.
- The hero/overview panel must be the page's largest — minimum 85vh or full-screen application shell.
- At least one panel must use a full-bleed layout with no padding gap at the viewport edges (simulating a full-screen dashboard view).
- At least two panels must use an application sidebar layout (narrow sidebar + wide main content area).
- At least one panel must show a data grid, table, or structured list.

**Mobile constraints:**
- App chrome sidebar collapses to bottom navigation or hamburger on mobile.
- Panels stack vertically. Panel headers always visible.
- Data grids become single-column scrollable tables with horizontal scroll.
- No horizontal overflow below 768px on page container.
- Primary CTA panel visible on first load mobile without scroll.

---

## Conversion Arc

1. **App Shell Load (Interrupt)** — The page renders as a full application shell: sidebar nav, top bar, main content pane loading in with a brief "initializing" state that resolves to the product overview. The visitor is inside the product before they read a single marketing word.

2. **System Overview (Promise)** — The main panel shows a high-level dashboard: the product's core KPI (e.g., "Deploy time: 43s" or "Fraud blocked: $4.2M this month"), with status green across the board. The promise is shown as live system state, not stated as a benefit.

3. **Live Proof (Credibility)** — A panel showing real-feeling log output, an activity feed, or a metrics chart demonstrating the product working at scale. Customer logos appear as "Trusted integrations" or "Connected orgs" inside a bordered data row — not a carousel.

4. **Architecture (Mechanism)** — A panel or set of panels explaining how it works through a system diagram, a step-through UI simulation, or a "how it routes your data" flow. The visitor sees the technical mechanism as a UI component, not a marketing diagram.

5. **Peer Logs (Peer Validation)** — Testimonials rendered as a structured feed: user avatar (icon), name/company as a label, message as monospace body text — like a Slack message log or a commit history. The format signals "these are real users of a real system."

6. **Pricing Matrix (Offer)** — Pricing presented as a tier comparison table — a real data grid with rows for each feature and columns for each tier. The recommended tier has an `--accent`-colored active state indicator, not just a "recommended" badge.

7. **Commit Panel (Peak Commitment)** — The anchor panel: deepest dark background, accent-colored headline metric, single large CTA button. Styled as a "Deploy to production" or "Activate account" confirmation modal. Maximum contrast, minimum clutter.

8. **Release Notes / FAQ (Residual)** — FAQ rendered as a changelog or release notes panel: each question is a `v1.2.3 — [feature name]` style entry with an expandable body. One "99.9% SLA guarantee" or risk-reversal statement rendered as a system status banner at the top of the panel.

---

## Typography Rules

```css
/* Display — sans-serif, system weight */
--type-display: clamp(2.2rem, 5vw, 6rem);
font-family: 'Inter', 'SF Pro Display', system-ui, sans-serif;
font-weight: 700;
letter-spacing: -0.03em;
line-height: 1.05;
color: rgba(var(--text-primary), 1);

/* Section / panel headline */
--type-section: clamp(1.4rem, 2.5vw, 2.5rem);
font-weight: 600;
letter-spacing: -0.02em;

/* Panel header tab */
--type-panel-label: 0.7rem;
font-family: 'JetBrains Mono', 'SF Mono', monospace;
text-transform: uppercase;
letter-spacing: 0.1em;
color: rgba(var(--text-dim), 1);

/* Body / description */
--type-body: clamp(0.875rem, 1.1vw, 1rem);
font-family: 'Inter', system-ui, sans-serif;
line-height: 1.6;
color: rgba(var(--text-dim), 1);

/* Code / monospace (logs, metrics, labels) */
--type-mono: clamp(0.75rem, 1vw, 0.875rem);
font-family: 'JetBrains Mono', 'Fira Code', 'SF Mono', monospace;
font-variant-numeric: tabular-nums;

/* Metric values */
--type-metric: clamp(2rem, 4vw, 5rem);
font-family: 'JetBrains Mono', monospace;
font-weight: 700;
font-variant-numeric: tabular-nums;
color: rgba(var(--accent), 1);
```

---

## Animation System

### Motion Personality
**Mechanical.** Easing: `cubic-bezier(0.25, 0, 0.25, 1)`. Duration range: 150–350ms for UI interactions, 300–500ms for section reveals. System UI feels fast and responsive — it does not linger. Animations simulate the feel of a real application loading and rendering data. Bouncy, elastic, or organic easing is prohibited.

### CSS Foundation
```css
.anim-ready {
  opacity: 0;
  transform: translateY(12px);
}
.anim-visible {
  opacity: 1;
  transform: none;
  transition: opacity 320ms cubic-bezier(0.25, 0, 0.25, 1),
              transform 320ms cubic-bezier(0.25, 0, 0.25, 1);
}
/* Panel-specific entrances */
.anim-panel-in   { transform: translateY(8px) scale(0.99); } /* panel snapping into place */
.anim-slide-left { transform: translateX(-20px); }
.anim-data-in    { opacity: 0; } /* data rows fade in without movement */
.anim-clip-top   { clip-path: inset(0 0 100% 0); opacity: 1 !important; }
.anim-clip-top.anim-visible { clip-path: inset(0 0 0% 0); transition: clip-path 380ms cubic-bezier(0.25, 0, 0.25, 1); }

@media (prefers-reduced-motion: reduce) {
  .anim-ready { opacity: 1; transform: none; clip-path: none; }
  .anim-visible { transition: none; }
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

**Layer 1 — Scroll-Triggered Panel Entrances:**
Every section panel animates into view. Alternate across:
- Panel-snap (translateY 8px + scale 0.99 → default) — for bordered panel reveals
- Slide-in-left (translateX -20px → 0, opacity) — for sidebar-layout panels
- Data-fade (opacity only, no movement) — for data-heavy tables and grids
- Clip-from-top (clip-path inset 100%→0%) — for full-width log/feed panels
No two consecutive panels may share the same entrance variant.

**Layer 2 — Staggered Children Reveals:**
Metric tiles, table rows, log entries, feature chips: stagger 60ms per sibling (faster than editorial — feels like data rendering).
```javascript
section.querySelectorAll('.stagger-child').forEach((child, i) => {
  child.style.transitionDelay = `${i * 60}ms`;
});
```
Minimum 5 panels must use staggered children (especially the metrics, peer logs, and architecture panels).

**Layer 3 — Parallax / Drift:**
2+ decorative elements drift at different scroll speeds:
- Background grid pattern (system dot matrix): parallax rate 0.90
- Decorative accent glow behind anchor panel: parallax rate 1.08
```javascript
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  document.querySelectorAll('[data-parallax]').forEach(el => {
    const rate = parseFloat(el.dataset.parallax);
    el.style.transform = `translateY(${scrollY * (rate - 1)}px)`;
  });
});
```
Mobile (< 768px): parallax disabled entirely.

**Layer 4 — Counter Animations:**
All metric values count from 0. Duration 1400ms, cubic ease-out.
```javascript
function animateCounter(el) {
  const target = parseFloat(el.dataset.target);
  const prefix = el.dataset.prefix || '';
  const suffix = el.dataset.suffix || '';
  const duration = 1400;
  const start = performance.now();
  function update(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - (1 - p) ** 3;
    const value = target * eased;
    el.textContent = prefix + (Number.isInteger(target) 
      ? Math.round(value).toLocaleString() 
      : value.toFixed(1)) + suffix;
    if (p < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}
```
Metrics must retain correct format during animation: %, $, ms, etc.

**Layer 5 — Hover Micro-Interactions:**
Declared with `@media (hover: hover)`:
- Buttons: `background-color` shift from accent to lighter accent, `box-shadow: 0 0 12px rgba(var(--accent), 0.4)` on hover, 150ms.
- Panel tiles: `border-color` shifts from `--border` to `--accent` at 30% opacity, `background` lightens to `--panel-alt`, 180ms.
- Nav items: left border accent line slides in (pseudo-element width 0→3px), background shifts to panel-alt, 120ms.
- Table rows: background brightens to `--panel-alt`, 100ms.
- Log entries: accent-color left border appears, 100ms.

**Layer 6 — Text Reveal (Hero + 1 other):**
Hero headline: **word-by-word fade-up** simulating data loading:
```javascript
const words = heading.textContent.split(' ');
heading.innerHTML = words.map(w => `<span class="word-wrap"><span class="word anim-ready">${w}</span></span>`).join(' ');
heading.querySelectorAll('.word').forEach((word, i) => {
  word.style.transitionDelay = `${i * 70}ms`;
  setTimeout(() => word.classList.add('anim-visible'), 100);
});
```
One other section (architecture or pricing) uses a character-by-character typewriter for a key label or headline.

**Layer 7 — Ambient / Continuous Motion:**
At least 1 continuously moving element:
- A "live" status indicator: `--accent` colored dot pulsing with scale 1→1.4→1 over 2s, `animation: pulse 2s ease-in-out infinite`.
- OR: A simulated log stream where new entries appear at the bottom every 3–4 seconds (JavaScript interval, max 8 entries before loop).
- OR: A progress bar or latency sparkline that animates continuously in the hero panel.
```css
@keyframes pulse-dot { 0%,100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.4); opacity: 0.6; } }
.status-dot { animation: pulse-dot 2s ease-in-out infinite; }
```

---

## Creative Differentiation Engine

### Visual Device Pool

**STRUCTURAL DEVICES:**
1. ★ **Full application shell** — hero renders as a complete app window: window chrome (title bar, traffic lights or tabs), sidebar nav, main content pane. SIGNATURE.
2. **Sidebar + main split** — persistent sidebar panel (160–220px) with nav items + status, main panel with primary content. Used in 1–2 sections beyond the hero.
3. ★ **Live log stream panel** — a bordered panel showing monospace log output with timestamps, status tags (INFO / WARN / SUCCESS), and at least 6 visible entries. SIGNATURE.
4. **Metric tile grid** — a 2×2, 2×3, or 3×3 grid of bordered tiles, each showing one KPI with a label, value, and trend indicator.
5. **Data table section** — a full-width bordered table with header row (column names in monospace uppercase), data rows, and alternating row fills.
6. **Split-pane layout** — two panels side by side with a draggable-looking divider (decorative), simulating a code editor split view.
7. **Command palette / search bar** — a full-width rounded (max 4px) input styled as a command palette with keyboard shortcut badges and placeholder text showing a real command.
8. **Progress / pipeline view** — a horizontal step-by-step pipeline with step names, connectors, and status states (complete, active, pending).
9. **Bento panel grid** — mixed-size panels in a CSS grid: one large (2×2) panel, two medium (1×2), and two small (1×1).

**DECORATIVE DEVICES:**
10. **System background grid** — a subtle dot-matrix or line-grid pattern at 5% opacity as the page background surface, implying graph paper or circuit board.
11. ★ **Accent glow** — a diffuse radial gradient in the accent color at 8–12% opacity behind the peak panel, simulating an active UI glow. SIGNATURE.
12. **Status badge strip** — a horizontal row of status badges at the top of a panel: green "Operational," amber "Degraded Performance," etc. styled as a real system status page.
13. **Terminal cursor** — a blinking `_` or `|` cursor after a monospace headline or log entry, animated with CSS `steps()`.
14. **Keyboard shortcut badge** — `⌘K`, `Ctrl+/` or similar badges appearing next to interactive elements.
15. **Version badge** — `v2.4.1`, `STABLE`, or `GA` tags appearing near the hero headline or CTA.
16. **Activity sparkline** — a small inline SVG line chart within a metric tile showing trend over time.
17. **Progress percentage ring** — a CSS or SVG radial progress indicator in the hero or metrics section.

**TYPOGRAPHIC DEVICES:**
18. **Monospace metric stack** — metric value in large monospace above, small monospace label below, aligned in a column.
19. **Log-line format** — `[timestamp] [LEVEL] message` format for key statements that aren't actual logs.
20. **Command line headline** — hero headline preceded by a `$` or `>` prompt character, simulating a CLI invocation.

**Required per page:** At least **6 different devices**. No device used more than twice. Signature devices (★): at least **2 must appear** on every page.

---

### Creative Brief Gate

```
CREATIVE BRIEF (mandatory before any code):

1. HOOK: What is the single most visually striking UI moment on this page?
   (e.g., "A hero that renders as a full application shell with a live log 
   stream in the right panel and a pulsing green metric counter in the left" 
   — be specific about the UI components present)

2. RHYTHM: Describe the page's data rhythm using a system metaphor.
   (e.g., "Cold boot → system overview → drilling into logs → pricing terminal → 
   deploy commit" or "Dashboard load that progressively reveals deeper data")

3. DEVICES: List the 6+ devices from the pool with their assigned panels.
   (e.g., "Full app shell → hero | Live log stream → proof | Bento grid → 
   architecture | Status badge strip → peer logs | Accent glow → commit panel | ...")

4. WILDCARD: One UI component or interaction NOT in the device pool.
   (e.g., "A 'diff view' section showing before/after code with red/green 
   line highlights to illustrate what the product changes")

The final HTML must deliver every item in this brief.
```

---

### Anti-Convergence Rules

**PROHIBITED:**

1. A hero that is only a centered headline, subline, and CTA button on a dark background — even with a product screenshot below. The hero must render as a real application shell with at least 2 visible UI components (sidebar, log panel, metric tile, status bar, or command input).
2. Three equal-width feature cards with an icon, heading, and paragraph each. Features must appear as panel tiles in a bento grid, a data table with checkmarks, or a pipeline/architecture view.
3. A testimonial section as quote cards in a grid. Testimonials must appear as log entries, chat messages in a styled feed, or rows in a customer activity table.
4. A logo bar as centered logos on a dark background. Customer logos must appear inside a "Connected integrations" panel with their API status (green dot + "Connected" label beside each logo).
5. A pricing section with 2–3 symmetrical cards differing only in content. Pricing must appear as a structured tier comparison table (data grid with rows × columns), with the recommended tier visually differentiated by accent-colored row highlights or an active-state panel border.
6. A CTA section that is only a headline and button on an extra-dark background. The peak commitment panel must include at least 2 data elements: a final key metric, a status badge, a short commit message, or a "what happens next" deploy flow.
7. A FAQ that is a flat accordion list with no UI framing. FAQ must be inside a changelog/release-notes styled panel with version-style entry headers.
8. Lifestyle or abstract photography. Images must be system UI, terminal screenshots, architecture diagrams, or abstract data visualizations.
9. Section headings in serif typeface. System UI is sans-serif and monospace only.
10. Any element with border-radius > 6px (except the command palette input at max 4px). No pill buttons, no rounded panels.

---

## Mobile Directive

**Breakpoints:** 768px (tablet), 480px (small mobile).

**Hero / App Shell at < 768px:**
- Sidebar collapses: hidden by default, toggleable via hamburger icon in top bar.
- Top application bar always visible: logo/wordmark left, hamburger right.
- Main content pane takes full width. Headline: `clamp(1.8rem, 6vw, 3rem)`.
- Live log stream: height capped at 200px with vertical scroll within panel.
- Primary CTA button full-width, visible on first load.

**Navigation at < 768px:**
- Top application bar (44px tall). Hamburger opens a slide-in panel from left (application drawer pattern).
- Touch targets: 44×44px minimum.

**Grid collapse rules:**
- Bento grid (mixed size): all cells become 1 column at < 768px.
- Metric tile grid: 2-column on mobile (not 1) — tiles are compact enough.
- Sidebar + main: sidebar hidden, main full-width. Sidebar nav moves to top app bar drawer.
- Data tables: horizontal scroll within table container, min-width on columns preserved.
- Split-pane: stacks vertically, divider hidden.

**Typography floor:**
- Display: `clamp(1.8rem, 6vw, 3rem)`.
- Body: `0.875rem`, line-height `1.55`.
- Monospace labels: `0.7rem`, preserved.

**Spacing floor:**
- Panel internal padding: `clamp(12px, 4vw, 20px)`.
- Section vertical gaps: `clamp(8px, 2vw, 16px)` (tighter — panels sit closer together on mobile).

**Decorative elements on mobile:**
- Background dot/line grid: retained (small enough to not clutter).
- Accent glow: reduced opacity to 50% of desktop value.
- Parallax: disabled entirely below 768px.

---

## Interactivity Requirements (All Mandatory)

- [ ] App shell hamburger: opens/closes sidebar drawer on mobile.
- [ ] FAQ / changelog accordion: items expand/collapse.
- [ ] Smooth scroll: anchor links scroll to panels.
- [ ] All 7 animation layers: panel entrances, stagger, parallax (desktop), counters, hover states, text reveal, ambient pulse.
- [ ] Live status dot: pulsing animation active.
- [ ] Simulated log stream (if used): new entries appear via JavaScript interval.
- [ ] Counter animations: all metrics count from 0.
- [ ] Reduced-motion: all animations resolve to end state instantly.
- [ ] JavaScript mandatory — no CSS-only animation layers.

---

## Image Guidance

Images in this aesthetic must look like system outputs, not photography.

**Preferred image types:**
- Product UI screenshots (real or convincingly fabricated as HTML/CSS within the page itself)
- Terminal / console output screenshots
- Architecture diagrams (lines, boxes, arrows on dark bg)
- Code snippets rendered as styled code blocks (not images)

**Rule:** Prefer in-page HTML/CSS UI mockups over actual image files wherever possible — they animate better, scale perfectly, and feel more authentic.

**Unsplash fallbacks (only if a photographic image is truly needed):**
```
Tech / dark:        photo-1551434678-e076c223a692
Fintech / abstract: photo-1556742049-0cfed4f6a45d
Enterprise:         photo-1454165804606-c3d57bc86b40
Security / server:  photo-1558494949-ef010cbdcc31 (if available) 
Workspace:          photo-1499750310107-5fef28a66643
```
Apply dark overlay: `background: linear-gradient(rgba(13,17,23,0.75), rgba(13,17,23,0.75))` over image.

**Rule:** No placeholder boxes. No via.placeholder.com. Every img slot has a real URL or is replaced by an in-page UI component.

---

## Anti-Patterns

**Visual anti-patterns:**
- Border-radius > 6px on any panel, tile, or card — prohibited.
- Lifestyle photography, gradient hero images, stock photos of people smiling — prohibited.
- Section background fills in the accent color — prohibited.
- Serif typefaces for any element except decorative purposes — prohibited.
- High-opacity glow effects (accent glow > 15% opacity) — looks like a gaming website, not a professional tool.

**Structural anti-patterns:**
- Marketing section vocabulary ("features," "benefits," "testimonials," "pricing plans") used as section headings — replace with system panel names.
- A page where no section simulates actual product UI — failed aesthetic.
- All panels at equal width and height — prohibited. Size variation is mandatory.

**Animation anti-patterns:**
- Elastic or bouncy easing — prohibited.
- Animations that feel slow or luxurious — this is a fast system. Max duration 500ms for section entrances.
- Hover states declared without `@media (hover: hover)` — sticky hover on mobile is a broken UI.
- Log stream that runs indefinitely without looping (must cap at 8 entries then reset).
- Pulsing animations on content text — reserved for status dots only.

---

## QA Checklist

- [ ] Hero renders as a real application shell (not just a headline on a dark background)
- [ ] At least 3 visible status indicators on the page
- [ ] No border-radius > 6px on any element
- [ ] No lifestyle photography
- [ ] No serif typefaces
- [ ] Accent color appears on ≤4 non-CTA elements
- [ ] Exactly one anchor (deepest dark) section
- [ ] No two adjacent panels share the same fill
- [ ] All metric values use monospace tabular figures
- [ ] At least 2 signature devices from pool present
- [ ] At least 6 total devices from pool present
- [ ] Creative brief written before code and fulfilled
- [ ] Hero is not a simple headline + subline + button on dark bg
- [ ] No three-equal-feature-card layout
- [ ] Testimonials not in quote-card format
- [ ] Layer 1: Every panel has a scroll-triggered entrance animation
- [ ] Layer 2: At least 5 panels use staggered child reveals (60ms)
- [ ] Layer 3: At least 2 decorative elements have parallax drift (desktop only)
- [ ] Layer 4: All metric numbers count up from 0
- [ ] Layer 5: All buttons, tiles, nav items, and rows have hover micro-interactions
- [ ] Layer 6: Hero headline uses word-by-word reveal
- [ ] Layer 7: At least 1 continuously pulsing or streaming ambient element
- [ ] No two consecutive panels use same entrance animation
- [ ] Reduced-motion: all animations resolve instantly
- [ ] Mobile: sidebar collapses, hamburger functional
- [ ] Mobile: data tables horizontally scrollable, no page overflow
- [ ] FAQ accordion functional
- [ ] No placeholder image boxes
- [ ] No horizontal overflow at 375px viewport