---
name: retro-terminal-serious
version: 1.0
description: Generates high-converting landing pages in the Retro Terminal aesthetic — done seriously, not as a gimmick. CLI-inspired, monospace throughout, functional interactions. Signals competence and authenticity to developer, hacker, and security tool audiences.
---

# Retro Terminal — Done Seriously, Not Gimmicky — Funnel Skill

---

## Aesthetic Identity

This aesthetic is the difference between a developer who actually uses a terminal and a designer who thinks terminals look cool. Everything is monospace. Everything is functional. The page feels like you've SSH'd into a system that happens to be a landing page — commands, outputs, prompts, and status messages tell the product's story in the language its users already speak. Conversion happens because the visitor feels seen: this was made by someone who thinks the way they think.

**What makes it serious and not gimmicky:** Every element is necessary. The CLI metaphors translate directly to real product function. It never breaks into conventional marketing sections mid-page. The interactions (accordion FAQ as `help --verbose`, pricing as `--plan list`, hero as a boot sequence) are consistent from top to bottom. Breaking character at any point collapses the entire effect.

---

## Visual Grammar

**How it separates things:** Elements are separated by monospace separator lines (rows of `─` or `═` or `░` characters), blank line equivalents (vertical whitespace of exactly one line-height), and prompt-line delineation. No decorative borders or fills separate zones — only the language of the terminal itself.

**How it creates hierarchy:** Hierarchy follows terminal conventions: a prompt line (`$ command`) signals input; its output below is secondary. A section header (`# SECTION TITLE` or `[HEADER]`) outranks body content. Bright text outranks dim text. Size is not a hierarchy signal — terminal lines are all the same height. Weight and color brightness communicate importance.

**Its relationship with color:** One phosphor color family: green-on-black (traditional), amber-on-black, or white-on-black. One per page — never mixed. The phosphor color is the accent, the cursor, the primary metric, and the CTA label. Secondary text is the phosphor at 50–60% opacity (dimmed, like a comment line). Background is near-black. No gradients. No color fills other than the phosphor at various opacities.

**Its relationship with space:** Spacing follows terminal character grid rhythm: everything aligns to a monospace character grid. Line-height is fixed (1.5× the font size). Section separation is exactly N blank lines — not arbitrary padding. The page feels like a scrolling terminal output.

---

## Depth Model

Depth is created through **opacity-depth**: brighter text (phosphor at 100%) is in the foreground. Dimmer text (phosphor at 50–60%) is background/secondary. Active/focused elements are at 100% opacity. Inactive/dim elements are at 50%. No borders for depth, no shadows, no fills. The single depth axis is luminance.

---

## Color Roles

Choose one phosphor family. The skill operates with Green Phosphor as default; adapt as needed.

```css
/* Green Phosphor variant (default) */
--bg:        10,  12,  10;    /* Terminal black: the page background */
--phosphor:   0, 255,  80;    /* Phosphor green: primary text, accent, CTAs */
--phosphor-dim: 0, 150,  50;  /* Dim phosphor: secondary text, comments, inactive */
--phosphor-bright: 100, 255, 140; /* Bright phosphor: highlights, key metrics */
--cursor:     0, 255,  80;    /* Cursor: the blinking element */
--scanline:   0, 255,  80;    /* Scanline: ambient CRT effect color */
--glow:       0, 255,  80;    /* Glow: text-shadow/box-shadow at low opacity */
--anchor:     0,  30,   5;    /* Anchor: slightly lighter black for peak section */

/* Amber variant (substitute these if amber phosphor is chosen) */
/*
--bg:        12,  10,   5;
--phosphor:  255, 180,   0;
--phosphor-dim: 160, 110,   0;
--phosphor-bright: 255, 220, 80;
*/

/* White-on-black variant (substitute if chosen) */
/*
--bg:         0,   0,   0;
--phosphor:  240, 240, 235;
--phosphor-dim: 140, 140, 135;
--phosphor-bright: 255, 255, 255;
*/
```

**Role constraints:**
- `--phosphor` at 100% opacity: primary text, headings, CTA labels, prompt characters, key metrics.
- `--phosphor-dim` at 60% opacity: secondary text, comments, metadata, disabled states.
- `--phosphor-bright`: used on exactly 1–2 elements per page — the primary metric and the CTA button text at hover.
- The phosphor color never appears as a block fill on sections. It appears only as text and text-shadow glow.
- The anchor section is `--anchor` fill (slightly different from `--bg`) — the only fill variation.
- The CTA button: transparent with phosphor border + phosphor text, or solid phosphor background with dark text — never a conventional marketing button style.

---

## Personality Constraints

**Always:**
1. Always: 100% monospace throughout — every single character on the page uses the monospace typeface. No exceptions, not even for body copy or legal text.
2. Always: prompt characters (`$`, `>`, `#`, `%`) appear before key interactive or heading elements, as the language of the page.
3. Always: a blinking cursor (`|` or `_`) is present on at least one element at any time.
4. Always: the hero section is a boot/startup sequence — a series of system initialization lines that resolve to the product's core statement.
5. Always: CLI metaphors translate to content: FAQ is `help --verbose`, pricing is `--plan list`, features are `--flags`, testimonials are `git log --pretty=format:'"%an"'` style entries.
6. Always: text-shadow glow on phosphor text: `text-shadow: 0 0 6px rgba(var(--phosphor), 0.5)`.
7. Always: at least one typewriter animation where characters appear left-to-right as if being typed.

**Never:**
8. Never: any non-monospace typeface anywhere on the page.
9. Never: border-radius greater than 0.
10. Never: box-shadow for elevation. `box-shadow` is permitted only for the phosphor glow effect (`0 0 8px rgba(--phosphor, 0.3)`).
11. Never: gradients of any kind.
12. Never: conventional marketing language as section headings. Instead of "Features," use `> ls --features`. Instead of "Pricing," use `$ ./pricing.sh`. Instead of "About," use `$ whoami`.
13. Never: images that don't look like terminal output, ASCII art, or technical diagrams. No lifestyle photos.
14. Never: the terminal aesthetic breaking into a conventional marketing layout at any point. Every section must honor the CLI language.

---

## Section Constraints

**Structural constraints:**
- The page must contain at least 8 sections (as CLI output "screens" or sessions).
- Every section is wrapped in the CLI metaphor. Section headers use prompt characters and command syntax.
- The conversion arc maps to: Boot Sequence → `whoami` → `ls --proof` → `cat ARCHITECTURE.md` → `git log --testimonials` → `./pricing.sh` → `./install.sh` → `help --faq`.

**Fill/color constraints:**
- All sections use `--bg` as their background. The anchor section uses `--anchor` (barely perceptible fill shift).
- The phosphor color never fills a section background.
- No section background fills in any color other than `--bg` or `--anchor`.

**Layout constraints:**
- No two consecutive sections use the same line-density (some sections are sparse terminal output; others are dense).
- The hero section is minimum 90vh — the boot sequence should feel like it takes a full screen to resolve.
- At least one section uses a full-width "progress bar" (CSS-drawn, phosphor color).
- At least two sections display content as simulated command output with indentation and line numbering.
- At least one section uses a two-column terminal layout (like a `man` page: left column labels, right column descriptions).

**Mobile constraints:**
- All content remains single column.
- Line lengths capped to avoid overflow (max-width: 100%; overflow-wrap: break-word on all text).
- No horizontal overflow below 768px.
- Blinking cursor and typewriter effects maintained on mobile.
- CTA visible on first load without scroll.

---

## Conversion Arc

1. **Boot Sequence (Interrupt)** — The hero displays as a system initialization sequence: a series of `[OK]` / `[LOADING]` lines that type in one by one, culminating in the product name as the system "prompt ready" moment. Visitors who have ever waited for a server to boot recognize this — they're already engaged.

2. **`$ whoami` (Promise)** — A section that outputs what the product is in 3–5 lines of monospace text, formatted as command output: product name, version, description, one key metric. Direct, no hedging.

3. **`$ ls --proof` (Credibility)** — A directory listing of social proof: client names formatted as file names (`acme-corp.client`, `stripe.client`), key metrics formatted as file sizes or permissions. Unusual format makes data memorable.

4. **`$ cat ARCHITECTURE.md` (Mechanism)** — The architecture section rendered as a markdown file being displayed: section headers (`## Components`), code blocks, ASCII diagrams explaining the system. The visitor reads the README.

5. **`$ git log --testimonials` (Peer Validation)** — Testimonials as git commit history: commit hash (truncated), date, author (customer name + company), commit message (the testimonial). Instantly credible to developers.

6. **`$ ./pricing.sh` (Offer)** — Pricing displayed as shell script output: `--plan STARTER: $49/mo`, `--plan PRO: $199/mo`, `--plan ENTERPRISE: contact sales`. Options listed as flags with descriptions. Each plan's CTA is a command: `$ ./install.sh --plan=pro`.

7. **`$ ./install.sh` (Peak Commitment)** — The anchor section: installation command displayed large in monospace, a progress bar filling (animated), a `[SUCCESS]` confirmation line appearing, and the CTA below: "Run this command → [Copy]". Converts by making the action feel already half-done.

8. **`$ help --faq` (Residual)** — FAQ as `--help` output: each question is a `--flag NAME` and the answer is the flag description. One `WARRANTY DISCLAIMER` section for the guarantee statement.

---

## Typography Rules

```css
/* ONE typeface for everything — monospace only */
font-family: 'JetBrains Mono', 'IBM Plex Mono', 'Fira Code', 'Courier New', monospace;

/* Hero boot lines */
--type-boot: clamp(0.875rem, 1.5vw, 1rem);
line-height: 1.5;
color: rgba(var(--phosphor), 1);
text-shadow: 0 0 6px rgba(var(--phosphor), 0.5);

/* Product name / key statement */
--type-display: clamp(1.5rem, 3.5vw, 3.5rem);
font-weight: 700;
letter-spacing: -0.01em;
color: rgba(var(--phosphor), 1);
text-shadow: 0 0 12px rgba(var(--phosphor), 0.6);

/* Section command headings */
--type-command: clamp(0.875rem, 1.4vw, 1rem);
color: rgba(var(--phosphor), 1);
text-shadow: 0 0 6px rgba(var(--phosphor), 0.4);

/* Body / output text */
--type-body: clamp(0.8125rem, 1.1vw, 0.9375rem);
line-height: 1.5;
color: rgba(var(--phosphor-dim), 1);
/* NO text-shadow on body — glow only on primary elements */

/* Metric values */
--type-metric: clamp(2rem, 5vw, 6rem);
font-weight: 700;
color: rgba(var(--phosphor), 1);
text-shadow: 0 0 16px rgba(var(--phosphor), 0.7);

/* Comments / metadata (like code comments) */
--type-comment: clamp(0.75rem, 1vw, 0.875rem);
color: rgba(var(--phosphor-dim), 0.6);
font-style: normal; /* no italic — terminal has no italic */
```

---

## Animation System

### Motion Personality
**Mechanical.** Easing: `cubic-bezier(0.25, 0, 0.25, 1)` for structural reveals; `steps()` for character-by-character typewriter. Duration range: 30–80ms per character for typewriter; 200–350ms for section entrances. The page moves like a terminal: text appears, commands execute, outputs render. No slow reveals, no floaty motion.

### CSS Foundation
```css
.anim-ready {
  opacity: 0;
}
.anim-visible {
  opacity: 1;
  transition: opacity 280ms cubic-bezier(0.25, 0, 0.25, 1);
}
/* Terminal output line entrance — fade only, no movement (terminal lines don't float) */
.anim-line { opacity: 0; }
.anim-line.anim-visible { opacity: 1; transition: opacity 200ms cubic-bezier(0.25, 0, 0.25, 1); }

/* Progress bar animation */
.progress-fill {
  width: 0;
  transition: width 1800ms cubic-bezier(0.25, 0, 0.25, 1);
}
.progress-fill.anim-visible { width: 100%; }

/* Blinking cursor */
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
.cursor { animation: blink 1.1s step-start infinite; }

/* Phosphor glow pulse (very subtle, ambient) */
@keyframes glow-pulse {
  0%, 100% { text-shadow: 0 0 6px rgba(var(--phosphor), 0.5); }
  50%       { text-shadow: 0 0 12px rgba(var(--phosphor), 0.8); }
}

/* CRT scanline */
@keyframes scanline { from { top: -2px; } to { top: 100%; } }

@media (prefers-reduced-motion: reduce) {
  .anim-ready { opacity: 1; }
  .anim-visible { transition: none; }
  .cursor { animation: none; opacity: 1; }
  .progress-fill { width: 100%; transition: none; }
  * { text-shadow: none !important; }
}
```

### Scroll Observer Setup
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('anim-visible');
      observer.unobserve(entry.target);
      // Trigger stagger on children
      entry.target.querySelectorAll('.anim-line').forEach((line, i) => {
        setTimeout(() => line.classList.add('anim-visible'), i * 50);
      });
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.anim-ready').forEach(el => observer.observe(el));
```

### Required Animation Inventory (7 Layers — All Mandatory)

**Layer 1 — Scroll-Triggered Section Entrances:**
All section entrances use fade-only (opacity) — no transforms. Terminal lines don't slide in from below; they appear.
Alternate between:
- Fade-in (opacity 0→1) — for text-output sections
- Line-by-line (children fade in sequentially at 50ms) — for multi-line output sections
- Progress-bar fill — for the install section
- Instant-appear (no transition, as if the terminal rendered the section) — for the anchor section
Duration: 280ms fade-in per element. No translateY on any element.

**Layer 2 — Staggered Children Reveals:**
Every output section's lines stagger at 50ms per line (simulating text rendering to screen).
```javascript
lines.forEach((line, i) => {
  setTimeout(() => line.classList.add('anim-visible'), i * 50);
});
```
Minimum 5 sections use staggered line reveals: boot sequence, proof listing, testimonials log, pricing output, FAQ help output.

**Layer 3 — Parallax / Drift:**
No parallax in the traditional sense. Instead, a CRT scanline sweeps down the page at `animation: scanline 8s linear infinite` on a fixed overlay at 3% opacity — this is the "parallax equivalent" — ambient motion that moves independently of content.
Mobile (< 768px): scanline intensity reduced to 1.5% opacity.

**Layer 4 — Counter Animations:**
Any displayed metrics count from 0. Duration 1200ms, cubic ease-out. Monospace format preserved.
Boot sequence progress percentage ticks up from 0% to 100% in the hero. The primary KPI metric counts.

**Layer 5 — Hover Micro-Interactions:**
`@media (hover: hover)`:
- CTA button: `text-shadow` intensifies (glow increases), `box-shadow: 0 0 16px rgba(var(--phosphor), 0.5)` appears on the button border, 150ms.
- Command links: phosphor color brightens to `--phosphor-bright`, underline appears (bottom border), 120ms.
- `git log` testimonial rows: glow intensifies on hover row, 100ms.
- FAQ flag items: phosphor-bright on the flag label, dim text brightens on the description, 120ms.
- Pricing plan options: border glow intensifies, 150ms.

**Layer 6 — Text Reveal (Hero + 1 other):**
Hero boot sequence: **typewriter line-by-line** — each line types in character by character, then the next line begins:
```javascript
async function typeSequence(lines) {
  for (const line of lines) {
    await typeLine(line, 35); // 35ms per character
    await sleep(120);          // pause between lines
  }
}
async function typeLine(el, speed) {
  const text = el.dataset.text;
  el.textContent = '';
  for (const char of text) {
    el.textContent += char;
    await sleep(speed);
  }
}
```
The product name in the `$ whoami` section uses a faster typewriter (18ms per char).

**Layer 7 — Ambient / Continuous Motion:**
Two ambient elements running continuously:
1. **Blinking cursor**: `|` or `_` character blinking on the active line at `animation: blink 1.1s step-start infinite`.
2. **CRT scanline**: a 2px-tall element with phosphor color at 3% opacity scanning from top to bottom, looping every 8s.
```css
.crt-scanline {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: rgba(var(--phosphor), 0.03);
  animation: scanline 8s linear infinite;
  pointer-events: none;
  z-index: 999;
}
```

---

## Creative Differentiation Engine

### Visual Device Pool

**STRUCTURAL DEVICES:**
1. ★ **Boot sequence hero** — the hero displays as a system initialization sequence: lines typing in one by one, `[OK]` status tags, a progress bar, culminating in a product name prompt. SIGNATURE.
2. ★ **Git log testimonials** — testimonials formatted as `git log` output: hash, date, author, message. Each "commit" is a customer testimonial. SIGNATURE.
3. **`man` page two-column layout** — left column: monospace command flags (short + long form); right column: description. Used for features or mechanism sections.
4. **Directory listing** — proof/client section as `ls -la` output: filenames (client names), sizes (data volume), permissions (access tier), dates.
5. **Progress bar fill** — a full-width CSS-drawn progress bar, phosphor-colored, filling on scroll entry. Used in install/CTA section.
6. ★ **Help output FAQ** — FAQ as `--help` output: each question is a `--flag`, answer is the flag description, indented 2 spaces. SIGNATURE.
7. **Pipe chain diagram** — a visualization of a CLI pipeline using `|` characters: `input | process | filter | output`, with each stage labeled and clickable for expansion.
8. **ASCII diagram** — a simple system architecture or process flow drawn in ASCII art within a code block.

**DECORATIVE DEVICES:**
9. **CRT scanline overlay** — a fixed full-page scanline sweeping downward continuously at very low opacity.
10. **Phosphor glow text-shadow** — all primary text has `text-shadow: 0 0 6px rgba(phosphor, 0.5)` creating the CRT glow effect.
11. **Separator line characters** — section separators using repeated monospace characters (`─ ─ ─ ─`, `═══`, `░░░`, `· · ·`).
12. **Monospace grid background** — a very faint grid of characters or dots at 3% opacity, as the "screen" texture.
13. ★ **Cursor blink** — at least one persistently blinking `|` or `_` cursor on the page. SIGNATURE.
14. **Session header** — each section has a small session header: `[session: 0x4a2f | tty: /dev/pts/0 | 2025-03-19 14:32:01]` in dim text.
15. **Status tag badges** — `[OK]`, `[ERROR]`, `[WARN]`, `[SUCCESS]` styled as monospace inline status tags.
16. **Comment lines** — `# This is a comment` style lines in dim phosphor at 50% opacity, used as page copy or section intros.

**TYPOGRAPHIC DEVICES:**
17. **Prompt prefix** — every section heading prefixed with `$ `, `> `, or `# ` in the primary phosphor color.
18. **Version string** — `v2.4.1-stable (build 20250319)` in dim monospace near the product name.
19. **Quoted string metric** — key metrics displayed as quoted strings: `uptime: "99.97%"` or `latency: "4ms"`, making them look like config file values.

**Required per page:** At least **6 different devices**. No device used more than twice. Signature devices (★): at least **2 must appear** on every page.

---

### Creative Brief Gate

```
CREATIVE BRIEF (mandatory before any code):

1. HOOK: What is the single most authentically terminal-native moment on this page?
   (e.g., "A git log testimonials section where 5 'commits' type in sequentially, 
   each with a real-looking commit hash, the customer's name as author, and their 
   testimonial as the commit message — in full monospace with phosphor glow" 
   — be specific, no gimmick descriptions)

2. RHYTHM: Describe the page as a terminal session narrative.
   (e.g., "SSH login → system check → reading README → checking commit log → 
   running pricing script → executing install → reading help page" — 
   every section must feel like the next logical command in the session)

3. DEVICES: List the 6+ devices with their sections.
   (e.g., "Boot sequence hero → hero | Git log testimonials → peer validation | 
   Help output FAQ → FAQ | Cursor blink → persistent | Scanline → full page | ...")

4. WILDCARD: One CLI metaphor or visual NOT in the device pool.
   (e.g., "A 'diff' visualization in the mechanism section showing the before/after 
   state of the user's workflow with red - lines and green + lines")

The final HTML must deliver every item in this brief. Do not break the CLI 
metaphor at any point — no conventional marketing sections, no conventional headings.
```

---

### Anti-Convergence Rules

**PROHIBITED:**

1. A hero that is not a boot/startup sequence. The hero must display as a typed terminal sequence — not as a conventional heading on a dark background with green text.
2. Any conventional marketing section heading. "Features," "Pricing," "Testimonials," "About Us" are prohibited. All sections use CLI syntax as their headings.
3. Testimonials as quote cards, even in terminal styling. Testimonials must use the git log format (or an equivalent structured log format) — not bordered cards with author photos.
4. A conventional CTA button (colored rectangle with label). The CTA in non-anchor sections is a command string with a copy button: `$ curl -s https://product.sh | bash` [Copy]. The anchor section CTA may be a bordered button but must still look like a terminal element.
5. Three equal-width feature cards. Features appear as `man` page entries, `--flags` in a help output, or a directory listing — never as symmetric visual cards.
6. Lifestyle photography. The only images are terminal screenshots, ASCII art, or technical diagrams within code blocks.
7. Any non-monospace typeface anywhere. If you find yourself using a sans-serif or serif, remove it.
8. Section content that breaks the terminal session metaphor — any section that looks like a "normal" section when the terminal context is removed is a failed section.
9. Border-radius on any element.
10. The CRT scanline effect absent from the page. It must exist (even at very low opacity) to complete the aesthetic.

---

## Mobile Directive

**Breakpoints:** 768px (tablet), 480px (small mobile).

**Hero boot sequence at < 768px:**
- Font size: `clamp(0.75rem, 3vw, 0.9rem)`.
- Boot lines: reduced to 6–8 (fewer lines but same effect).
- Progress bar: full-width, maintained.
- CTA command: visible without scroll, truncated if needed with `...`.

**Navigation at < 768px:**
- Minimal nav: product name left (monospace, phosphor), `$ start` link right.
- Hamburger for secondary nav (styled as `[menu]` in monospace), functional.
- Touch targets: 44×44px.

**Grid collapse rules:**
- `man` page two-column: stacks to single column (flag + description each on own line).
- Directory listing: single column.
- Pipe chain diagram: horizontal scroll with `overflow-x: auto`.

**Typography floor:**
- All monospace: `clamp(0.75rem, 2.5vw, 0.875rem)`.
- Single typeface always monospace — no floor for switching to sans.
- Line-height: 1.5 always.

**Spacing floor:**
- Section padding: `clamp(32px, 6vw, 60px)` vertical.
- Left indent for output lines: 16px always.

**Decorative elements on mobile:**
- CRT scanline: maintained at 1.5% opacity (reduced from 3%).
- Phosphor text-shadow: maintained but slightly reduced (`0 0 4px`).
- Session headers: hidden below 480px.
- Parallax/scanline: reduced but maintained.

---

## Interactivity Requirements (All Mandatory)

- [ ] Typewriter boot sequence: fully functional on page load.
- [ ] Blinking cursor: always active, `step-start` timing.
- [ ] CRT scanline: always running as a fixed overlay.
- [ ] FAQ help output accordion: flags expand/collapse their descriptions.
- [ ] Command CTA copy button: copies the install command to clipboard.
- [ ] Smooth scroll: all anchor links.
- [ ] All 7 animation layers: line-by-line reveals, stagger, scanline, counters, hover states, typewriter hero, cursor + scanline ambient.
- [ ] Counter animations: metrics count from 0, progress bar fills.
- [ ] Mobile nav hamburger: functional.
- [ ] Reduced-motion: typewriter shows full text instantly, cursor stops blinking (static), scanline paused, counters show final values.
- [ ] JavaScript mandatory.

---

## Image Guidance

Terminal aesthetics are text-first. Images are nearly never appropriate.

**Usage rules:**
- Maximum 1–2 images on the entire page.
- Images must be terminal screenshots (real or fabricated as HTML `<pre>` blocks) or ASCII art within `<pre>` tags.
- Prefer rendering images as styled HTML `<pre>` blocks rather than actual image files.
- If a photograph is used: apply `filter: grayscale(100%) contrast(1.2)` and place it inside a bordered code-block style container with a `# image.png (1024×768)` label above it.

**ASCII art as an image substitute:**
Instead of a photo in the hero, consider an ASCII art representation of the product concept:
```
┌─────────────────────┐
│  ██  PRODUCT NAME   │
│  ██  v2.4.1-stable  │
│  ██  [████████] OK  │
└─────────────────────┘
```

**Unsplash fallbacks (only if photo truly needed):**
```
Dark tech:  photo-1551434678-e076c223a692
Security:   photo-1558494949-ef010cbdcc31
```
Format: `https://images.unsplash.com/[photo-id]?w=800&q=80&auto=format`
Apply: `filter: grayscale(100%) contrast(1.2) brightness(0.7);`

**Rule:** No placeholder boxes. Prefer ASCII art or `<pre>` blocks over actual `<img>` tags.

---

## Anti-Patterns

**Visual anti-patterns:**
- Any non-monospace typeface — absolute prohibition.
- Border-radius on any element — prohibited.
- Gradients — prohibited.
- Box-shadow for elevation — prohibited (glow only via `text-shadow` and `box-shadow: 0 0 Xpx`).
- Conventional section headings — prohibited.
- Lifestyle photography — prohibited.
- More than one phosphor color family — prohibited (don't mix green and amber).

**Terminal authenticity anti-patterns:**
- A section that "breaks character" and looks like a normal landing page section when the phosphor glow is removed — prohibited.
- Marketing copy written in conventional marketing language — prohibited. All copy must sound like terminal output, README content, or documentation.
- The CRT glow effect absent from ANY primary text element — failed aesthetic.
- A FAQ that is a conventional accordion without the `--help` output formatting — prohibited.
- The boot sequence hero not typing in — the typewriter must work on page load.

**Motion anti-patterns:**
- Transforms (translateY, translateX) on any element — terminal lines appear, they do not slide. All entrances are fade-only.
- Bouncy or luxurious easing — prohibited.
- Cursor without `step-start` timing — gradual cursor fades are not terminal cursors.
- Typewriter animation using CSS `animation: typing` with `overflow: hidden` only — character-by-character JS is required for control and staggering.

---

## QA Checklist

- [ ] 100% monospace typeface throughout (zero exceptions)
- [ ] Prompt characters (`$`, `>`, `#`) present on section headings
- [ ] No conventional section heading names (no "Features," "Pricing," "Testimonials")
- [ ] Boot sequence hero types in on page load
- [ ] Blinking cursor present and active
- [ ] CRT scanline running as fixed overlay
- [ ] Phosphor glow text-shadow on all primary text elements
- [ ] No border-radius anywhere
- [ ] No box-shadow for elevation (glow-only box-shadows allowed)
- [ ] No gradients
- [ ] No lifestyle photography
- [ ] No non-monospace typeface anywhere
- [ ] Exactly one phosphor color family (no mixing)
- [ ] Anchor section present (slightly different fill)
- [ ] No two adjacent sections share same line-density pattern
- [ ] At least 2 signature devices present
- [ ] At least 6 total devices present
- [ ] CLI metaphor consistent from top to bottom
- [ ] Creative brief written before code and fulfilled
- [ ] Layer 1: All sections use fade-only entrance (no translateY)
- [ ] Layer 2: At least 5 sections use line-by-line stagger at 50ms
- [ ] Layer 3: CRT scanline running continuously (full-page parallax equivalent)
- [ ] Layer 4: Metrics count from 0, progress bar fills
- [ ] Layer 5: All interactive elements have phosphor-glow hover states
- [ ] Layer 6: Hero uses char-by-char typewriter (JS-controlled)
- [ ] Layer 7: Cursor blink + scanline both running at all times
- [ ] Copy-to-clipboard on install command: functional
- [ ] FAQ accordion: flags expand/collapse
- [ ] Mobile: no non-monospace typeface introduced
- [ ] Mobile: all line widths respect viewport (overflow-wrap: break-word)
- [ ] Reduced-motion: typewriter shows text instantly, cursor static, scanline paused
- [ ] No placeholder image boxes
- [ ] No horizontal overflow at 375px