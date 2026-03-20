---
name: technical-documentation-landing-page
version: 1.0
description: Generates high-converting landing pages that look like technical documentation — Notion/README/docs aesthetic. Maximizes clarity and trust through radical simplicity. For APIs, open-source tools, and technical SaaS targeting developer or analyst audiences.
---

# Technical Documentation as Landing Page — Funnel Skill

---

## Aesthetic Identity

This aesthetic abandons marketing entirely in favor of clarity. The page looks like it belongs in a docs portal — structured headings, code blocks, inline links, definition lists, admonition callouts, and a sidebar table of contents. Visitors who have been burned by marketing fluff instinctively trust it: there's nothing to hide behind. The conversion mechanism is radical transparency — if you can read the docs and they make sense, you already understand the product well enough to buy it. The imagination gap closes through comprehension, not desire.

---

## Visual Grammar

**How it separates things:** Elements are separated through heading hierarchy, horizontal rules, and indentation. Section breaks are felt through heading level changes (h2 → h3) and whitespace between content blocks. Borders exist only on code blocks, callout boxes, and tables — functional borders, not decorative. No cards, no panel fills, no color-washed backgrounds.

**How it creates hierarchy:** Hierarchy follows the documentation heading cascade: h1 (one per page) → h2 (major sections) → h3 (subsections) → body. Monospace labels and code inline elements signal technical detail. Callout boxes (info, warning, tip) signal important deviations. Higher-importance elements carry larger heading weight — never color alone.

**Its relationship with color:** Near-monochromatic. The page is white or very light gray with one link/action color (a clean documentation blue). Color appears only on: inline code text, link underlines, callout borders (left-border accent), and the CTA button. Everything else is black on white.

**Its relationship with space:** Spacing follows the readable documentation rhythm: generous line-height (1.7), 40–60px section breaks, 8px between a label and its content, consistent left margin for all content (simulating a docs page with a sidebar). Dense but readable — like the best technical writing, where density doesn't feel overwhelming.

---

## Depth Model

Depth is created through **border-depth**: code blocks have a left border or full border, callout boxes have a colored left border, tables have visible cell borders. These borders aren't decorative — they signal "this type of content is different from that type." No shadows, no fills (except code block gray), no elevation effects.

---

## Color Roles

```css
--surface:    255, 255, 255;   /* Pure white: the page, every content section */
--ink:         25,  25,  25;   /* Near-black: all body text, headings */
--link:        37,  99, 235;   /* Documentation blue: links, CTAs, callout borders */
--code-bg:    245, 246, 247;   /* Light gray: code block backgrounds, inline code */
--border:     220, 222, 227;   /* Light border: table cell borders, horizontal rules */
--callout-info: 219, 234, 254; /* Info blue fill: informational callout backgrounds */
--callout-tip: 220, 252, 231;  /* Tip green fill: tip/success callout backgrounds */
--callout-warn: 254, 243, 199; /* Warning yellow: warning callout backgrounds */
--anchor:      17,  24,  39;   /* Deep navy: one dark section — the CTA */
--sidebar:    249, 250, 251;   /* Sidebar bg: the docs navigation sidebar */
```

**Role constraints:**
- `--link` appears on: hyperlinks, primary CTA buttons, active sidebar items, callout left-border accents, one headline accent word. Never as a section background fill.
- `--anchor` (deep navy) appears exactly once — the primary CTA section. All other sections are white.
- Code blocks, inline code, and pre blocks always use `--code-bg`.
- Callout backgrounds use `--callout-info`, `--callout-tip`, or `--callout-warn` based on content type — not decoratively. Each callout type used maximum once per page.
- `--sidebar` applies to the docs navigation sidebar only.

---

## Personality Constraints

**Always:**
1. Always: a persistent sidebar navigation (desktop), positioned left, listing the page sections as anchor links — styled exactly as a docs sidebar.
2. Always: heading hierarchy is strict — one h1, multiple h2s as major sections, h3s for subsections within. Heading numbers or section labels (§1, §2) are optional but encouraged.
3. Always: code blocks appear in monospace with `--code-bg` background and 4px left border in `--link` color. At least 3 code blocks on the page.
4. Always: inline code uses `<code>` styling — monospace, code-bg, 2px border-radius, 1px border.
5. Always: at least one admonition callout box (info, tip, or warning) appears on the page.
6. Always: tables have visible borders, header rows in slightly darker bg, and tabular-nums for numeric data.
7. Always: horizontal rules (1px `--border`) mark major section transitions.

**Never:**
8. Never: section backgrounds in any color other than `--surface` (except the single anchor CTA section).
9. Never: border-radius > 4px on any element (code blocks at 4px, inline code at 2px, button at 4px).
10. Never: images as decorative backgrounds or fills. Images appear only as documentation figures with a caption and figure number.
11. Never: testimonials styled as social media cards or quote cards. They appear as case study entries or inline cited quotes within body text.
12. Never: animations that feel "marketing." All motion is functional: the FAQ accordion expands, the sticky sidebar highlights the active section, counters increment — nothing floats, pops, or drifts decoratively.
13. Never: more than one typeface family. System UI stack (sans) for headings and body; monospace for code only.

---

## Section Constraints

**Structural constraints:**
- The page must contain at least 9 sections (mapped as h2-level sections in the docs structure).
- Each section has a clear docs-style name: "Overview," "How It Works," "Supported Integrations," "Performance Benchmarks," "Case Studies," "Pricing," "Get Started," "FAQ."
- The conversion arc runs: Overview → Problem Statement → Architecture/Mechanism → Benchmarks/Proof → Integrations → Case Studies → Pricing → Get Started → FAQ.

**Fill/color constraints:**
- All sections are white-background except the anchor CTA section.
- Callout boxes appear within sections — not as sections themselves.
- Code block fills (`--code-bg`) appear within sections.
- No section background fills in any color other than surface or anchor.

**Layout constraints:**
- The page uses a two-column layout at desktop: 240px sidebar (fixed or sticky) + flexible main content area.
- No section uses more than 2 columns in the main content area (code + explanation, or two code snippets side by side).
- At least one section uses a full-width code block spanning the main content area.
- At least one section uses a comparison table.
- The primary CTA section is the only section that breaks from the docs layout — it may be full-width.

**Mobile constraints:**
- Sidebar collapses to a "On this page" disclosure at the top of the content.
- All columns stack to single column.
- Code blocks scroll horizontally (no line wrapping).
- No horizontal overflow on the page container below 768px.

---

## Conversion Arc

1. **Overview (Interrupt)** — A docs-style intro: a brief `h1` title, a 2–3 sentence summary of what this is (like a README's top section), and a "Quick Start" callout box with a single code snippet. The interruption is the immediate actionability — within 10 seconds the visitor sees actual code they could run.

2. **Problem Statement (Promise)** — A section titled "The Problem" or "Why X exists" — written in clear technical prose. States the specific failure mode this tool solves, with a code example showing the before-state (broken, verbose, or painful).

3. **Architecture / Mechanism (Mechanism)** — A section titled "How It Works" with a system architecture diagram (as an SVG or HTML figure with caption) and numbered prose steps. Each step references a code example or config snippet.

4. **Benchmarks / Proof (Credibility)** — A section titled "Performance" or "Benchmarks" containing a table of metrics: tool vs. competitors, or before/after numbers. Numbers in tabular format, data sourced (even if with a footnote saying "internal benchmarks").

5. **Integrations (Mechanism continued)** — A section titled "Integrations" or "Supported Platforms" listing logos + names in a structured table or definition list. Shows breadth without selling it.

6. **Case Studies (Peer Validation)** — A section titled "Used By" or "In Production" — 2–3 brief case studies written as technical summaries: company name → use case → specific metric. Cited like a technical reference (no flowery language).

7. **Pricing (Offer)** — A section titled "Pricing" presenting tiers in a Markdown-style table: columns for tier, features, and price. Clean, honest, comparable. No "most popular" badges — just data.

8. **Get Started (Peak Commitment)** — The anchor section: dark navy background, white text, a "Quick Start" code block showing the 3-line install sequence, and a large CTA button ("Start building →"). This is the only section that feels different from the docs — but it earns it.

9. **FAQ (Residual)** — A section titled "Frequently Asked Questions" formatted as a true docs FAQ: bold questions, indented answers. One "support" callout box below pointing to documentation or a Discord/Slack link.

---

## Typography Rules

```css
/* Page heading h1 — one per page */
--type-h1: clamp(1.8rem, 3vw, 2.5rem);
font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
font-weight: 700;
line-height: 1.25;
letter-spacing: -0.01em;
border-bottom: 1px solid var(--border-color);
padding-bottom: 0.5rem;
margin-bottom: 1.5rem;

/* Section headings h2 */
--type-h2: clamp(1.3rem, 2.2vw, 1.75rem);
font-weight: 600;
letter-spacing: -0.01em;
margin-top: 3rem;

/* Subsection headings h3 */
--type-h3: clamp(1.1rem, 1.8vw, 1.25rem);
font-weight: 600;
margin-top: 2rem;

/* Body copy */
--type-body: clamp(0.9375rem, 1.1vw, 1rem);
font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
font-weight: 400;
line-height: 1.7;
color: rgba(var(--ink), 0.85);

/* Code / monospace */
--type-code: clamp(0.8125rem, 1vw, 0.875rem);
font-family: 'JetBrains Mono', 'Fira Code', 'SF Mono', 'Consolas', monospace;
font-variant-numeric: tabular-nums;

/* Sidebar nav links */
--type-sidebar: 0.8125rem;
font-weight: 400;
line-height: 1.5;
```

---

## Animation System

### Motion Personality
**Architectural.** Easing: `cubic-bezier(0.77, 0, 0.18, 1)`. Duration range: 200–400ms. Animations feel structural and purposeful — like UI state changes in a well-engineered product. Nothing floats or drifts. Motion is purely functional: elements enter, accordions expand, the sidebar highlights. Luxurious slow reveals and bouncy easing are prohibited.

### CSS Foundation
```css
.anim-ready {
  opacity: 0;
  transform: translateY(16px);
}
.anim-visible {
  opacity: 1;
  transform: none;
  transition: opacity 340ms cubic-bezier(0.77, 0, 0.18, 1),
              transform 340ms cubic-bezier(0.77, 0, 0.18, 1);
}
.anim-slide { transform: translateX(-16px); opacity: 0; }
.anim-table-row { opacity: 0; transform: translateX(-8px); }

@media (prefers-reduced-motion: reduce) {
  .anim-ready { opacity: 1; transform: none; }
  .anim-visible { transition: none; }
}
```

### Scroll Observer Setup
```javascript
// Sidebar active state updater — also functions as scroll observer
const sections = document.querySelectorAll('section[id]');
const sidebarLinks = document.querySelectorAll('.sidebar-nav a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Update sidebar active state
      sidebarLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`.sidebar-nav a[href="#${entry.target.id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
}, { threshold: 0.3 });
sections.forEach(s => sectionObserver.observe(s));

// Content entrance observer
const contentObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('anim-visible');
      contentObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.anim-ready').forEach(el => contentObserver.observe(el));
```

### Required Animation Inventory (7 Layers — All Mandatory)

**Layer 1 — Scroll-Triggered Section Entrances:**
Every section animates into view. Alternate across:
- Fade-up (translateY 16px → 0) — for text-dominant sections
- Slide-left (translateX -16px → 0) — for sidebar-adjacent sections
- Fade-only (opacity 0→1, no movement) — for tables and code blocks (feels like data loading)
- Scale-subtle (scale 0.98 → 1, opacity) — for callout boxes and the CTA section
Duration: 340ms. Never two consecutive sections the same.

**Layer 2 — Staggered Children Reveals:**
Table rows, integration list items, FAQ items, case study entries: stagger 50ms per item.
```javascript
section.querySelectorAll('.stagger-child').forEach((child, i) => {
  child.style.transitionDelay = `${i * 50}ms`;
});
```
Minimum 4 sections use staggered reveals: benchmarks table rows, integrations list, case studies, FAQ.

**Layer 3 — Parallax / Drift:**
Minimal — only 1 element. A faint background grid pattern (if used) drifts at 0.97× scroll rate. Functional animation only; nothing decorative floats in this aesthetic.
Mobile (< 768px): parallax disabled.

**Layer 4 — Counter Animations:**
All numeric metrics in the benchmarks section count from 0. Duration 1200ms, cubic ease-out. Format preserved (ms, %, x, GB) throughout animation.
```javascript
// Standard requestAnimationFrame counter, 1200ms duration
```

**Layer 5 — Hover Micro-Interactions:**
Declared with `@media (hover: hover)`:
- CTA button: background shifts to a slightly darker navy, subtle translateY -1px, 150ms.
- Sidebar links: left border in link-blue slides in (pseudo-element 0→3px width), text color shifts to link-blue, 120ms.
- Table rows: background shifts to `--code-bg` on hover, 100ms.
- Inline links: underline color shifts from `--border` to `--link`, 150ms.
- Code block copy button (if added): opacity 0→1 on parent hover, 150ms.

**Layer 6 — Text Reveal (Hero + 1 other):**
Page h1 (hero heading): **character-cascade reveal** — appropriate for a docs aesthetic where text feels typed:
```javascript
const chars = h1.textContent.split('');
h1.innerHTML = chars.map(c => `<span class="char">${c === ' ' ? '&nbsp;' : c}</span>`).join('');
h1.querySelectorAll('.char').forEach((char, i) => {
  char.style.opacity = 0;
  setTimeout(() => {
    char.style.transition = 'opacity 80ms';
    char.style.opacity = 1;
  }, i * 18 + 200); // fast, feels like typing
});
```
One section h2 (the "Get Started" anchor section) uses a word-by-word fade-up at 40ms per word.

**Layer 7 — Ambient / Continuous Motion:**
At most one continuously moving element:
- The sidebar "active section" highlight slides up and down as the user scrolls — this is functional ambient motion: the indicator moves to mark the active heading.
- CSS: the `.active` class on sidebar links transitions its background and border-left with `transition: all 200ms cubic-bezier(0.77, 0, 0.18, 1)`.
- OR: A blinking cursor after the first code block's prompt character.
```css
@keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
.cursor { animation: blink 1.2s step-start infinite; }
```

---

## Creative Differentiation Engine

### Visual Device Pool

**STRUCTURAL DEVICES:**
1. ★ **Sticky docs sidebar** — fixed left navigation with section links that highlight as the user scrolls past each section. SIGNATURE.
2. ★ **Annotated code block** — a code example with line numbers and inline comments, where specific lines are highlighted (accent-blue left border on a line) with an annotation tooltip explaining what that line does. SIGNATURE.
3. **Comparison table** — a full-width bordered table with rows = features and columns = tiers or alternatives. Header row slightly shaded. Checkmarks and crosses in data cells.
4. **Two-column code split** — left column: explanation prose; right column: the corresponding code block. A common docs pattern that makes the mechanism tangible.
5. **Step-through sequence** — numbered steps with code blocks inside each step, separated by horizontal rules. Feels like a tutorial within the page.
6. **Architecture SVG diagram** — a simple inline SVG system diagram with labeled boxes and arrows, styled in the page's color scheme. Caption below as "Figure 1."
7. **Definition list section** — a `<dl>` formatted as a glossary or feature definition list, styled with the term bold left and definition right (two-column on desktop).
8. **Changelog entry** — one section styled as a changelog entry: version number, date, "What's new" list. Signals active development.

**DECORATIVE DEVICES:**
9. **Breadcrumb path** — "Docs > Product > Overview" style path at the very top of the content area, above the h1.
10. ★ **Callout box trio** — strategic use of 3 different callout types (info, tip, warning) across the page, each with a left-border accent in the appropriate callout color. SIGNATURE.
11. **Inline badge** — version badges, status badges (`STABLE`, `BETA`, `DEPRECATED`) rendered inline next to headings.
12. **Terminal block** — a code block styled as a terminal (dark background even in light mode) for shell/CLI commands, distinguished from regular code blocks.
13. **Footnote / citation** — numbered footnotes at the bottom of a metrics or claim section, lending academic credibility.
14. **"Last updated" timestamp** — visible below the h1, in small monospace: "Last updated: March 2025."
15. **Reading time estimate** — "~4 min read" in small stone text below h1, alongside timestamp.

**TYPOGRAPHIC DEVICES:**
16. **Inline code references** — key product concepts and technical terms appear as inline `<code>` elements throughout body copy.
17. **Docs-style CTA text** — instead of a button-only CTA, a paragraph ending with "→ Read the full documentation" and "→ Try it free" as text links, documentation-style.
18. **Numbered heading labels** — section h2s labeled with section numbers (§1, §2) in the link color, as a subtle structural device.

**Required per page:** At least **6 different devices**. No device used more than twice. Signature devices (★): at least **2 must appear** on every page.

---

### Creative Brief Gate

```
CREATIVE BRIEF (mandatory before any code):

1. HOOK: What specific technical moment makes this page unmistakably credible?
   (e.g., "An annotated code block in the hero section where 3 lines are 
   highlighted showing the 3-line integration — with specific library names 
   and real-looking function calls, not pseudocode" — be specific)

2. RHYTHM: Describe the page's information rhythm using a technical metaphor.
   (e.g., "README structure: overview → quickstart → deep dive → benchmarks → 
   pricing → commit" or "A tutorial that converts as it teaches")

3. DEVICES: List the 6+ devices from the pool with their sections.
   (e.g., "Sticky sidebar → full page | Annotated code block → overview | 
   Callout box trio → scattered | Comparison table → pricing | ...")

4. WILDCARD: One technical documentation pattern NOT in the device pool.
   (e.g., "An interactive code playground embedded in the overview section 
   where the visitor can edit the code sample and see the output change")

The final HTML must deliver every item in this brief.
```

---

### Anti-Convergence Rules

**PROHIBITED:**

1. A hero section styled as marketing (large colored background, emotional headline, lifestyle image). The hero is a docs page top: h1 title, 2-sentence description, quick-start callout with a code block.
2. Feature sections with icon + heading + paragraph cards. Features are expressed as either a definition list, a comparison table, a two-column explanation + code split, or an annotated code example.
3. Testimonials styled as quote cards with photos. Testimonials appear as short case study summaries (company → use case → metric) in a technical table or as an inline cited quote within prose.
4. A pricing section with visual comparison cards. Pricing is a Markdown-style table. No gradients, no "most popular" visual emphasis beyond a row highlight.
5. A CTA section that uses marketing language or abstract emotional appeals. The anchor section says exactly what the visitor will do next: install a package, create an account, run a command. It shows the command.
6. A footer with link columns. Footer contains: wordmark, copyright, 3–5 inline text links, and one "View on GitHub" or "Read Docs" link.
7. Images used decoratively or as section backgrounds. The only images are architecture diagrams (as figures with captions) and possibly one product screenshot (as a figure).
8. Animations on text that aren't the hero h1 reveal. No floating words, no parallax text. Text is static documentation — only structural reveals.
9. A sans-serif typeface other than the system UI stack. No custom font imports — or if imported, only one weight of one family.
10. More than 3 code block styles. Use regular code block, terminal block, and inline code — not 5 different styled variants.

---

## Mobile Directive

**Breakpoints:** 768px (tablet), 480px (small mobile).

**Sidebar at < 768px:**
- Sidebar hides entirely. Replaced by a collapsible "On this page" disclosure at the top of the content area.
- Disclosure shows all section links as a flat list, hidden by default, toggled by a chevron button.
- Main content area takes full width.

**Hero at < 768px:**
- h1: `clamp(1.5rem, 5vw, 2rem)`. Still clear and hierarchical.
- Quick-start code block: horizontally scrollable, `overflow-x: auto`, `white-space: nowrap`.
- CTA button full-width.

**Navigation at < 768px:**
- Top bar with logo + one text CTA link. Hamburger for secondary links.
- Touch targets: 44×44px.

**Grid collapse rules:**
- Two-column code split → single column: prose above, code block below.
- Definition list → single column: term + definition stack vertically.
- Comparison table → horizontally scrollable with sticky first column.

**Typography floor:**
- h1 minimum: `clamp(1.4rem, 5vw, 2rem)`.
- Body minimum: `0.9375rem`, line-height `1.65`.
- Code minimum: `0.8125rem`, preserved monospace.

**Spacing floor:**
- Section padding: `clamp(32px, 6vw, 60px)` vertical.
- Content max-width: 100% on mobile, 720px on desktop (docs reading width).

**Decorative elements on mobile:**
- Sidebar: hidden (replaced by disclosure).
- Reading time and breadcrumb: retained.
- Architecture diagram SVG: scales with max-width: 100%.
- Parallax: disabled.

---

## Interactivity Requirements (All Mandatory)

- [ ] Sticky sidebar with scroll-spy: active section highlighted as user scrolls.
- [ ] Mobile sidebar disclosure: "On this page" toggle, functional.
- [ ] FAQ accordion: items expand/collapse.
- [ ] Smooth scroll from sidebar links and CTA anchor links.
- [ ] Code block horizontal scroll on mobile (overflow-x: auto).
- [ ] Optional: copy-to-clipboard button on code blocks (appears on hover).
- [ ] All 7 animation layers: section entrances, stagger, minimal parallax, counters, hover states, h1 character reveal, ambient sidebar highlight.
- [ ] Reduced-motion: all animations resolve instantly.
- [ ] JavaScript mandatory.

---

## Image Guidance

Images in this aesthetic function as technical figures, not emotional visuals.

**Usage rules:**
- All images appear as `<figure>` elements with a `<figcaption>` ("Figure 1: System architecture overview").
- Maximum 3 images/figures on the page.
- Architecture diagrams preferred over photography.
- If product screenshots are used, they must look like real product UI — not marketing mockups.
- Apply a 1px `--border` border around all figure images.

**Unsplash fallbacks (only if a photographic figure is needed):**
```
Architecture diagram context:  Prefer inline SVG, not a photo
Tech workspace:                photo-1499750310107-5fef28a66643
Server / infrastructure:       photo-1551434678-e076c223a692
Team / engineering:            photo-1522202176988-66273c2fd55f
```
Format: `https://images.unsplash.com/[photo-id]?w=900&q=80&auto=format`

**Rule:** No placeholder boxes. If no real image URL available, replace with an inline SVG diagram.

---

## Anti-Patterns

**Visual anti-patterns:**
- Colored section backgrounds (other than anchor section) — prohibited.
- Border-radius > 4px — prohibited.
- Box-shadow for elevation — prohibited.
- Gradients on any element — prohibited.
- More than one typeface family — prohibited.
- Decorative images or illustrations — prohibited.
- Icon library icons for features — prohibited (use inline code references or nothing).

**Motion anti-patterns:**
- Any animation that feels "marketing" (floating elements, dramatic reveals) — prohibited.
- Parallax on text content — prohibited (only on decorative grid if used).
- Animations faster than 80ms per element — prohibited.
- Animations slower than 400ms for functional UI — this is a fast, efficient aesthetic.
- Text reveals on section body copy — prohibited (only the h1 and anchor section heading).

**Structural anti-patterns:**
- A page without a sidebar navigation — failed aesthetic.
- Content wider than 720px in the main content area — prohibited (docs reading width).
- Section headings in any weight other than 600 or 700 — prohibited.
- More than one h1 on the page — prohibited.

---

## QA Checklist

- [ ] Sidebar navigation present and functional (scroll-spy working)
- [ ] One h1 on the page, visually distinct from h2s
- [ ] At least 3 code blocks present
- [ ] At least one annotated code block
- [ ] At least one callout box (info, tip, or warning)
- [ ] At least one data table with bordered cells
- [ ] No section backgrounds in any color except surface or anchor
- [ ] No border-radius > 4px
- [ ] No box-shadow
- [ ] No gradients
- [ ] No icon library icons
- [ ] Link color (--link blue) appears on ≤ visible interactive elements only
- [ ] Exactly one anchor (dark navy) section
- [ ] At least 2 signature devices from pool present
- [ ] At least 6 total devices from pool present
- [ ] Creative brief written before code and fulfilled
- [ ] Hero is docs-style h1 + summary + quickstart code block (not marketing)
- [ ] Feature section is not icon + heading + paragraph cards
- [ ] Layer 1: Every section has a scroll-triggered entrance
- [ ] Layer 2: At least 4 sections use staggered child reveals (50ms)
- [ ] Layer 3: Maximum 1 parallax element (or 0 if it feels wrong)
- [ ] Layer 4: Metrics in benchmarks section count from 0
- [ ] Layer 5: Sidebar links, table rows, buttons, inline links all have hover states
- [ ] Layer 6: h1 uses character-cascade reveal (18ms per char)
- [ ] Layer 7: Sidebar active indicator slides smoothly on scroll
- [ ] Mobile: sidebar replaced by "On this page" disclosure toggle
- [ ] Mobile: code blocks horizontally scrollable
- [ ] Mobile: no horizontal overflow at 375px
- [ ] FAQ accordion functional
- [ ] Smooth scroll on all anchor links
- [ ] Reduced-motion: all animations resolve instantly
- [ ] No placeholder image boxes