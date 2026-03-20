---
name: hyper-structured-data-minimalism
version: 1.0
description: Generates high-converting landing pages dominated by tables, numbers, and structured grids. Spreadsheet-adjacent aesthetic. Builds credibility through specificity. For finance, analytics tools, and B2B SaaS where precision is the conversion signal.
---

# Hyper-Structured Data Minimalism — Funnel Skill

---

## Aesthetic Identity

This aesthetic earns trust the same way a Bloomberg terminal earns trust: by showing all the numbers, labeled precisely, in a format that makes cherry-picking impossible. Tables, data grids, and structured rows dominate every section. Decoration is absent not by laziness but by deliberate argument — when your data is this compelling, ornamentation would only distract from it. The visitor isn't sold to; they're shown evidence, and they close the sale themselves.

---

## Visual Grammar

**How it separates things:** Elements are separated by thin ruled lines (1px `--border`) and table cell borders. Section breaks are horizontal rules, often running the full page width. No fill colors, no card backgrounds, no whitespace-as-separator. Separation is structural and grid-defined — every element knows exactly which row and column it occupies.

**How it creates hierarchy:** Hierarchy is communicated through number size, label-vs-value distinction, and indentation depth. Large numbers at heavy weight in monospace outrank their labels. Bold headers outrank body rows. A full-row dark header outranks a data row. No color is used for hierarchy — only scale, weight, and structural position.

**Its relationship with color:** Near-monochromatic — black, white, two shades of gray, and one data accent (a precise blue or teal). Color appears only on: the primary CTA, one column or row highlight in a table (the "recommended" or "your current" state), and interactive hover states. Gradients prohibited. Color fills prohibited on sections except the single anchor section.

**Its relationship with space:** Spacing follows spreadsheet rhythm — consistent row heights (40–56px for data rows), 12–16px column gutters, minimal section padding (40–60px vertical). The page feels like a well-formatted analytical report: dense, structured, and efficient. Every row earns its pixel height.

---

## Depth Model

Depth is created through **border-depth**: heavier borders signal importance. A table's outer border (2px) outranks its inner cell borders (1px). A header row with a `--ink` background outranks a data row. No shadows, no fills, no elevation. Hierarchy is structural.

---

## Color Roles

```css
--surface:      255, 255, 255;  /* Pure white: the page, table backgrounds */
--ink:            0,   0,   0;  /* Pure black: primary text, table headers */
--border:       210, 213, 218;  /* Light rule: table cell borders, section dividers */
--border-dark:  150, 155, 162;  /* Mid rule: outer table borders, section rules */
--row-alt:      248, 249, 250;  /* Alternating row: every other data row */
--accent:        14,  95, 210;  /* Data blue: CTAs, active column/row, links */
--accent-light: 229, 239, 255;  /* Light accent: highlighted column/row bg */
--header-bg:     15,  15,  15;  /* Table header bg: dark header rows */
--text-dim:     100, 106, 115;  /* Dim text: secondary labels, footnotes */
--anchor:        10,  12,  18;  /* Deep anchor: peak commitment section */
```

**Role constraints:**
- `--accent` appears on the primary CTA button, the highlighted column/row in the comparison table, active link underlines, and the primary metric value. Maximum 4 non-CTA occurrences.
- `--accent-light` is used only as a column/row highlight background in tables — never as a section fill.
- `--anchor` appears exactly once — the peak commitment section.
- `--header-bg` is used only on table header rows, never as a section background.
- All other sections use `--surface` (white).
- `--row-alt` is used only for alternating table row fills.

---

## Personality Constraints

**Always:**
1. Always: data is the primary content. Every section contains a table, a data grid, a structured list, or a set of large labeled numbers.
2. Always: monospace typeface for all numerical values, percentages, dates, and row/column labels.
3. Always: table headers are dark-filled (`--header-bg`) with white monospace text, all-caps.
4. Always: alternating row fills (`--row-alt` and `--surface`) on all multi-row data tables.
5. Always: numbers use `font-variant-numeric: tabular-nums` so columns align vertically.
6. Always: a footnote system exists — at least 2 footnotes (¹ ²) on the page citing the source of key claims.
7. Always: the page has a header bar at the very top (40px tall) showing: report title left, date right, both in monospace — like a printed analytical report header.

**Never:**
8. Never: border-radius on any element beyond 0px.
9. Never: box-shadow or any elevation effect.
10. Never: gradients of any kind.
11. Never: testimonials styled as quote cards. They appear as rows in a "Client Results" table: columns for client, metric, change, period.
12. Never: section background fills in any color other than surface or anchor. Tables provide all the visual structure needed.
13. Never: icons from icon libraries. Symbols must be typographic: ↑ ↓ → % $ ✓ ✗ or Unicode characters.
14. Never: more than 2 typefaces (one sans-serif for labels, one monospace for data). Sans-serif body is acceptable; no decorative fonts.

---

## Section Constraints

**Structural constraints:**
- The page must contain at least 9 sections.
- Every section is anchored by a data structure (table, grid, or labeled number set).
- The conversion arc runs: Report Header → Summary Table → Evidence Grid → Mechanism Breakdown → Client Results → Pricing Matrix → Commitment Row → Appendix (FAQ).

**Fill/color constraints:**
- All sections white-background except the anchor section.
- `--accent-light` and `--row-alt` appear only within table cells — never as section fills.
- Anchor color appears exactly once.
- No section background fills in any color other than surface or anchor.

**Layout constraints:**
- No two consecutive sections use the same column structure.
- At least 4 sections are dominated by a table or structured data grid.
- At least one section uses a full-page-width table with no side margins (full-bleed data grid).
- At least one section uses large standalone metric numbers as its primary visual (3–5 metrics, each labeled in monospace below).
- The hero section is minimum 80vh.

**Mobile constraints:**
- Tables scroll horizontally (overflow-x: auto) rather than collapsing.
- Sticky first column on multi-column tables.
- Data row heights preserved (min 40px touch target).
- No horizontal overflow on page container below 768px.
- Primary CTA visible without scroll.

---

## Conversion Arc

1. **Report Header (Interrupt)** — A full-screen hero styled as the cover page of an analytical report: report title in large bold sans, subtitle in monospace, date, a "summary box" showing 3 key metrics in a bordered table-like layout. It looks like the first page of something that should cost money to access.

2. **Summary Table (Promise)** — A bordered table showing the core promise as data: before/after comparison, or a 3-row summary of what the product delivers with specific numbers. The promise is a row in a table, not a headline.

3. **Evidence Grid (Credibility)** — A section dominated by a grid of large metrics: 4–8 key numbers in a structured layout, each with a monospace label above and a source footnote below. No marketing language — just numbers and their definitions.

4. **Mechanism Breakdown (Mechanism)** — A structured breakdown of how it works: a numbered list of steps where each step has a label, a brief description, and a technical specification value (e.g., "Step 2: Validation — latency: 12ms, accuracy: 99.4%"). Presented as a table or definition grid.

5. **Client Results (Peer Validation)** — A full-width table: columns for Client, Use Case, Metric, Result, Period. 4–8 rows of real-feeling data. A footnote at the bottom: "¹ Results from anonymized enterprise deployments." No quote cards.

6. **Pricing Matrix (Offer)** — A comparison table: rows for each feature or spec, columns for each pricing tier. The recommended tier's column has a subtle `--accent-light` background and an `--accent` header. All pricing in bold monospace.

7. **Commitment Row (Peak)** — The anchor section: dark background, white sans-serif headline, one bold metric displayed in white monospace, a single full-width `--accent` CTA button. A brief data statement below the button ("Trusted by 1,247 teams. Average time-to-value: 4 days.").

8. **Appendix / FAQ (Residual)** — An FAQ styled as a Q&A appendix: bold sans questions in one column, body text answers in the adjacent column, separated by a 1px border. A table of contents at the top. One footnote for the guarantee statement.

---

## Typography Rules

```css
/* Report title / hero display */
--type-display: clamp(2rem, 4.5vw, 5rem);
font-family: 'Inter', system-ui, sans-serif;
font-weight: 700;
letter-spacing: -0.02em;
line-height: 1.1;

/* Section heading / table context labels */
--type-section: clamp(1.1rem, 2vw, 1.5rem);
font-weight: 700;
letter-spacing: -0.01em;

/* Body copy */
--type-body: clamp(0.875rem, 1.1vw, 0.9375rem);
font-family: 'Inter', system-ui, sans-serif;
line-height: 1.6;
color: rgba(var(--ink), 0.82);

/* Table headers — monospace uppercase */
--type-table-head: 0.7rem;
font-family: 'JetBrains Mono', 'SF Mono', monospace;
text-transform: uppercase;
letter-spacing: 0.1em;
font-weight: 600;
color: rgba(255,255,255,1);

/* Table data — monospace */
--type-table-data: clamp(0.8125rem, 1vw, 0.875rem);
font-family: 'JetBrains Mono', monospace;
font-variant-numeric: tabular-nums;

/* Metric values — large, monospace, heavy */
--type-metric: clamp(2.5rem, 5vw, 7rem);
font-family: 'JetBrains Mono', monospace;
font-weight: 700;
font-variant-numeric: tabular-nums;
letter-spacing: -0.02em;

/* Labels below metrics */
--type-metric-label: 0.75rem;
font-family: 'JetBrains Mono', monospace;
text-transform: uppercase;
letter-spacing: 0.1em;

/* Footnotes */
--type-footnote: 0.75rem;
font-family: 'Inter', system-ui, sans-serif;
color: rgba(var(--text-dim), 1);
```

---

## Animation System

### Motion Personality
**Architectural.** Easing: `cubic-bezier(0.77, 0, 0.18, 1)`. Duration range: 200–380ms. The page loads like a spreadsheet populating: rows appear, numbers count up, columns draw in. Everything is structural and linear. No decorative motion. No organics. Motion signals data rendering, not aesthetics.

### CSS Foundation
```css
.anim-ready {
  opacity: 0;
  transform: translateY(14px);
}
.anim-visible {
  opacity: 1;
  transform: none;
  transition: opacity 300ms cubic-bezier(0.77, 0, 0.18, 1),
              transform 300ms cubic-bezier(0.77, 0, 0.18, 1);
}
.anim-row    { opacity: 0; transform: translateX(-10px); }
.anim-col-in { opacity: 0; transform: translateY(8px); }
.anim-rule {
  transform: scaleX(0);
  transform-origin: left;
  opacity: 1 !important;
}
.anim-rule.anim-visible {
  transform: scaleX(1);
  transition: transform 500ms cubic-bezier(0.77, 0, 0.18, 1);
}

@media (prefers-reduced-motion: reduce) {
  .anim-ready { opacity: 1; transform: none; }
  .anim-rule { transform: scaleX(1); }
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

**Layer 1 — Scroll-Triggered Section Entrances:**
Alternate across (no two consecutive the same):
- Fade-up (translateY 14px → 0, opacity) — for metric and hero sections
- Row-slide (translateX -10px → 0, opacity) — for table sections
- Column-up (translateY 8px → 0, opacity) — for grid metric sections
- Rule-draw (scaleX 0→1, left origin) — for horizontal section separators
- Fade-only (opacity 0→1) — for the anchor/CTA section
Duration: 300ms architectural ease.

**Layer 2 — Staggered Children Reveals:**
Table rows, metric tiles, FAQ rows, mechanism steps: stagger 45ms per sibling.
```javascript
section.querySelectorAll('.stagger-child').forEach((child, i) => {
  child.style.transitionDelay = `${i * 45}ms`;
});
```
Minimum 5 sections use staggered reveals: the evidence grid, client results table, pricing matrix, mechanism breakdown, FAQ.

**Layer 3 — Parallax / Drift:**
One element only: the report header bar or a section label drifts at 0.95× scroll rate.
```javascript
// Standard parallax implementation, rate 0.95
```
Mobile: disabled.

**Layer 4 — Counter Animations:**
All metric values count from 0. Duration 1500ms, cubic ease-out. Monospace maintained.
Format preservation critical: currency symbols ($, €), percentages (%), multipliers (x), commas (1,000,000) all visible throughout animation.
```javascript
// requestAnimationFrame, 1500ms, preserve prefix/suffix/decimal/commas
```

**Layer 5 — Hover Micro-Interactions:**
`@media (hover: hover)`:
- Table rows: background shifts from white to `--row-alt` on odd rows or slightly darker on even rows, left border in `--accent` at 2px grows in, 100ms.
- CTA button: background brightens, `translateY(-1px)`, 150ms.
- FAQ rows: left border in `--accent` appears, background shifts to `--accent-light` at 30% opacity, 120ms.
- Metric tiles: bottom border in `--accent` draws from left (scaleX), 200ms.
- Navigation links: `--accent` underline draws from left, 150ms.

**Layer 6 — Text Reveal (Hero + 1 other):**
Hero report title: **word-by-word fade-up** at 50ms per word — efficient, not slow.
```javascript
words.forEach((word, i) => { word.style.transitionDelay = `${i * 50}ms`; });
```
The anchor section heading uses a character-cascade at 15ms per char (fast, data-populating feel).

**Layer 7 — Ambient / Continuous Motion:**
At most one continuously moving element (structural, not decorative):
- The report header bar date/timestamp ticks: the current time updates every second in the header.
```javascript
function updateClock() {
  const now = new Date();
  clockEl.textContent = now.toISOString().split('T')[0] + ' ' + now.toTimeString().slice(0,8) + ' UTC';
  setTimeout(updateClock, 1000);
}
updateClock();
```
- This functions as ambient motion and reinforces the "live analytical report" aesthetic.

---

## Creative Differentiation Engine

### Visual Device Pool

**STRUCTURAL DEVICES:**
1. ★ **Full-page-width data table** — a table that extends to the full viewport width, no horizontal padding, simulating a spreadsheet in the browser. SIGNATURE.
2. ★ **Metric grid** — 4–8 large monospace numbers arranged in a structured grid, each with a label above and a source footnote below. SIGNATURE.
3. **Before/after comparison table** — a two-column table (Before: without product, After: with product) with rows for each metric. Numbers in the "After" column in accent color.
4. **Client results table** — a formal data table with named columns: Client, Use Case, KPI, Result, Time Period. Every cell has data.
5. **Definition list grid** — key terms on the left (bold sans), precise technical definitions on the right, separated by a vertical border rule.
6. **Mechanism step table** — a 4-column table: Step, Action, Output, Spec. Each row is one step in the process. Dense, precise.
7. **Pricing feature matrix** — rows = features, columns = tiers. Checkmarks (✓), crosses (✗), and specific values in cells. The recommended column has `--accent-light` background.
8. **Footnote-dense section** — a metrics section where every number has a numbered footnote, and the footnote list appears below the section in small type.

**DECORATIVE DEVICES:**
9. ★ **Report header bar** — a fixed 40px top bar showing report title (left), date/time (right), both monospace — like a printed report's header. SIGNATURE.
10. **Section rule** — a full-width 1px `--border-dark` horizontal rule between every major section, extending to the page edges.
11. **Column totals row** — a "TOTAL" or "AVERAGE" row at the bottom of key tables, formatted differently (darker bg, bold values).
12. **Column highlight** — one column in a comparison table has `--accent-light` background running the full height of the table, indicating the recommended option.
13. **Inline trend indicators** — small ↑ or ↓ Unicode arrows in monospace next to metric values, colored: ↑ in accent, ↓ in dim.
14. **Watermark / confidence interval** — a faint background text at 5% opacity showing a statistical term or confidence level ("99.9% UPTIME" or "N=4,821").
15. **Tabulated FAQ** — FAQ as a two-column table: Question in bold sans (left), Answer in body text (right), cell borders visible.

**TYPOGRAPHIC DEVICES:**
16. **Monospace hero metric** — the single most important metric at 6–8rem in the hero, in monospace, as the page's anchor visual alongside the report title.
17. **All-caps monospace section labels** — section names rendered in 0.7rem uppercase monospace above each h2, acting as a "section identifier."
18. **Inline percentage delta** — in comparison tables, a delta column (+14%, -3%) in monospace with ↑↓ indicators, making the evidence speak for itself.

**Required per page:** At least **6 different devices**. No device used more than twice. Signature devices (★): at least **2 must appear** on every page.

---

### Creative Brief Gate

```
CREATIVE BRIEF (mandatory before any code):

1. HOOK: What is the single most data-dense, credibility-signaling visual moment?
   (e.g., "A full-page-width client results table in the proof section with 
   6 rows of named companies, KPIs, and percentage improvements — all in 
   monospace tabular figures with source footnotes" — be specific)

2. RHYTHM: Describe the page's data rhythm using an analytical report metaphor.
   (e.g., "Executive summary → evidence tables → methodology → results → 
   pricing → conclusion" or "A data room that converts at the bottom")

3. DEVICES: List the 6+ devices from the pool with their sections.
   (e.g., "Report header bar → full page | Metric grid → evidence | 
   Before/after table → summary | Client results table → peer validation | ...")

4. WILDCARD: One data presentation format NOT in the device pool.
   (e.g., "A sparkline chart embedded inside a metrics table cell, showing 
   trend direction rather than just a single point value")

The final HTML must deliver every item in this brief.
```

---

### Anti-Convergence Rules

**PROHIBITED:**

1. A hero with a colorful background, hero image, or animated graphics. The hero is a structured data layout: a report-cover styled section with the product's core metric as the dominant element.
2. Three equal-width feature cards with icons, headings, and paragraphs. Features appear in a table: rows for features, columns for tiers or alternatives. Or as a mechanism step table.
3. Testimonials as quote cards with photos and star ratings. Testimonials appear as rows in the client results table only.
4. Colored section backgrounds. Every non-anchor section is white. Tables provide all the visual structure.
5. A CTA section that is only colored background + headline + button. The anchor section must include a key data statement and/or metric that contextualizes the CTA.
6. A footer with link columns. Footer contains a 1px ruled top, the wordmark, copyright, 2–3 inline links, and the footnotes list if any carry to the bottom.
7. Decorative shapes, illustrations, or abstract imagery. The only visual decoration is the data itself, the table grids, and the rule lines.
8. Tables without alternating row fills. Every multi-row table must have alternating row colors for readability.
9. Metric sections where numbers are not labeled. Every number must have a label and (if possible) a source footnote.
10. Animation faster than 40ms stagger intervals or slower than 500ms duration for section entrances — the pace must match spreadsheet rendering.

---

## Mobile Directive

**Breakpoints:** 768px (tablet), 480px (small mobile).

**Hero at < 768px:**
- Report title: `clamp(1.6rem, 5.5vw, 2.5rem)`. Still bold and clear.
- Core metric below title: `clamp(3rem, 10vw, 5rem)`, monospace.
- Summary table: horizontally scrollable.

**Navigation at < 768px:**
- Top bar with wordmark and single CTA button. Hamburger for secondary links.
- Report header bar on mobile: retains time display, condensed.
- Touch targets: 44×44px.

**Grid collapse rules:**
- All tables: `overflow-x: auto`, `min-width: max-content` on the table itself, sticky first column.
- Metric grid: 2 columns on mobile (not 4), numbers slightly smaller.
- Definition list grid: single column (term above, definition below, separated by 1px rule).
- FAQ two-column table: stacks to single column.

**Typography floor:**
- Display: `clamp(1.5rem, 5vw, 2.5rem)`.
- Metric values: `clamp(2rem, 8vw, 4rem)`.
- Body: `0.875rem`, line-height `1.6`.
- Monospace data: `0.75rem`, preserved.

**Spacing floor:**
- Section padding: `clamp(32px, 6vw, 56px)` vertical.
- Table cell padding: minimum `8px 12px`.

**Decorative elements on mobile:**
- Report header bar: condensed to 32px, date only (no report title if too long).
- Watermark/confidence interval: `display: none` below 480px.
- Section rule lines: retained.
- Parallax: disabled.
- Clock ambient: retained (low performance cost).

---

## Interactivity Requirements (All Mandatory)

- [ ] Hamburger nav toggle: functional.
- [ ] FAQ accordion (or tabulated FAQ): expandable rows functional.
- [ ] Smooth scroll: all anchor links.
- [ ] All 7 animation layers: entrances, stagger, rule draw, counters, hover states, word reveal, clock ambient.
- [ ] Live clock in report header: updating every second.
- [ ] Counter animations: all metrics count from 0, formats preserved.
- [ ] Mobile table horizontal scroll: `overflow-x: auto` on all table containers.
- [ ] Sticky first column on mobile tables (CSS `position: sticky; left: 0`).
- [ ] Reduced-motion: all animations resolve instantly, clock still runs (it's functional not decorative).
- [ ] JavaScript mandatory.

---

## Image Guidance

This aesthetic has no room for decorative photography.

**Usage rules:**
- Maximum 1 image on the page (a team or founder photo in the peer validation section only, if truly needed).
- Prefer zero images — let the data fill the visual space.
- If an image appears, it must be within a table cell or a figure with caption — never as a full-section background.
- Apply: `filter: grayscale(100%)` and 1px `--border` border.

**Unsplash fallback (only if a single image is truly required):**
```
Business / team: photo-1522202176988-66273c2fd55f
Finance / analytics: photo-1579621970795-87facc2f976d
```
Format: `https://images.unsplash.com/[photo-id]?w=600&q=80&auto=format`
Apply: `filter: grayscale(100%) contrast(1.05);`

**Rule:** No placeholder boxes. If no image is truly needed, use zero images.

---

## Anti-Patterns

**Visual anti-patterns:**
- Colored section backgrounds — prohibited.
- Border-radius — prohibited.
- Box-shadow — prohibited.
- Gradients — prohibited.
- Testimonial quote cards — prohibited.
- Icon library icons — prohibited.
- Decorative imagery — prohibited.
- Tables without alternating row fills — prohibited.
- Numbers displayed without labels and source footnotes — prohibited.

**Motion anti-patterns:**
- Decorative animations (floating elements, drift) — prohibited. All motion signals data rendering.
- Animations slower than 500ms for section entrances — too slow for spreadsheet aesthetic.
- Elastic easing — prohibited.
- Hover states that add elevation or scale — prohibited. Hover states add color/border signals only.

**Structural anti-patterns:**
- Any section without a data structure (table, grid, or labeled numbers) — failed aesthetic.
- A report header bar missing from the page — failed aesthetic.
- Footnotes present in copy but not rendered at section or page bottom — prohibited.
- Font-variant-numeric not set on all numeric displays — prohibited.

---

## QA Checklist

- [ ] Report header bar present at top of page, with clock updating
- [ ] No border-radius on any element
- [ ] No box-shadow
- [ ] No gradients
- [ ] No colored section backgrounds (except anchor)
- [ ] All numeric values use `font-variant-numeric: tabular-nums` and monospace
- [ ] All metric values have labels
- [ ] At least 2 footnotes present and rendered
- [ ] Alternating row fills on all multi-row tables
- [ ] Accent color appears on ≤4 non-CTA elements
- [ ] Exactly one anchor (dark) section
- [ ] No testimonial quote cards
- [ ] At least 2 signature devices from pool present
- [ ] At least 6 total devices from pool present
- [ ] Creative brief written before code and fulfilled
- [ ] Hero is data-driven (not colorful/image background)
- [ ] No equal-column feature cards
- [ ] Layer 1: Every section has scroll-triggered entrance
- [ ] Layer 2: At least 5 sections use staggered reveals at 45ms
- [ ] Layer 3: 1 parallax element (report bar or label), disabled mobile
- [ ] Layer 4: All metrics count from 0, formats preserved (%, $, commas)
- [ ] Layer 5: Table rows, CTA, FAQ rows, metric tiles all have hover states
- [ ] Layer 6: Hero title uses word-by-word reveal at 50ms per word
- [ ] Layer 7: Clock ambient running in report header
- [ ] Mobile: all tables horizontally scrollable with sticky first column
- [ ] Mobile: no horizontal overflow at 375px
- [ ] FAQ functional (accordion or tabulated)
- [ ] Reduced-motion: all animations resolve instantly
- [ ] Maximum 1 image on page, grayscale applied
- [ ] No placeholder image boxes