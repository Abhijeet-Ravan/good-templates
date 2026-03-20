---
name: neumorphic-funnel
description: Generates premium neumorphic landing pages — soft extruded surfaces, dual-shadow depth, tactile buttons, GSAP scroll animations. Produces a single standalone HTML file (Tailwind CDN + GSAP CDN) ready for Vercel deployment. Trigger whenever a user describes a business, product, or service and wants a website, landing page, or funnel built. Also trigger for phrases like "make me a website", "build my landing page", "create a site for my business", "I need a landing page for...", or any business description followed by a request for a web presence. Assume aggressively — if business context is thin, invent plausible details.
argument-hint: [business description]
---

# Neumorphic Funnel Generator

You produce a single deployable HTML file. Design vocabulary: **soft gray base (#e6e9ef), generous whitespace, oversized rounded containers (40px), dual-shadow neumorphic depth, tactile extruded cards and buttons, GSAP scroll reveals**. Given a business description, infer everything and produce all sections. Never ask for clarification.

The visual identity is defined by three things: (1) the soft neumorphic shadow system, (2) extremely generous spacing — sections breathe with 8rem+ gaps, and (3) a signature hero with a giant rounded preview frame containing a full-bleed image with floating overlays. If the page doesn't feel spacious and premium, it's wrong.

## TOKEN PROTOCOL

Generate S1–S8 at full fidelity. If approaching output limit, stub S9–S12 as:

```html
<!-- TODO: S9 - run /neumorphic-funnel again and say "expand S9" -->
<section style="padding:5rem 0;background:#e6e9ef"><div style="max-width:1280px;margin:0 auto;padding:0 24px;text-align:center"><p style="color:#6b7280;font-family:Inter,sans-serif">Section pending — run /neumorphic-funnel again and say "expand S[N]"</p></div></section>
```

A complete skeleton beats a truncated masterpiece.

## CODE OUTPUT STYLE

Dense, minimal whitespace inside blocks. No explanatory comments. Humans will read the rendered page, not the source.

---

## 1. Category & Accent Inference

| Category | Keywords | Accent | Accent Dark |
|---|---|---|---|
| tech/saas | software, app, AI, platform, automation, SaaS, tool, API, bot | `#7c3aed` | `#6d28d9` |
| finance | finance, fintech, trading, investment, wealth, insurance, bank | `#0ea5e9` | `#0284c7` |
| health/wellness | health, medical, wellness, clinic, dental, doctor, therapy | `#10b981` | `#059669` |
| fitness | gym, fitness, training, athletic, supplement, workout | `#ef4444` | `#dc2626` |
| coaching | coach, mentor, course, mastermind, program, transformation | `#f59e0b` | `#d97706` |
| real-estate | property, real estate, homes, broker, listings, villa | `#3b82f6` | `#2563eb` |
| ecommerce | shop, store, brand, products, DTC, retail, dropship | `#f97316` | `#ea580c` |
| agency/creative | agency, creative, branding, studio, design, marketing | `#8b5cf6` | `#7c3aed` |
| restaurant/food | restaurant, dining, food, chef, cuisine, bar, café | `#dc2626` | `#b91c1c` |
| legal | law, attorney, legal, firm, litigation, compliance | `#64748b` | `#475569` |

Default if no match: tech/saas, accent `#7c3aed`.

---

## 2. Design System

### Core Color Variables

```css
:root {
  --bg: #e6e9ef;           /* neumorphic base — NEVER pure white, NEVER dark */
  --bg-mid: #d1d5db;
  --shadow-dark: #b8bcc2;
  --shadow-light: #ffffff;
  --accent: /* from table */;
  --accent-dark: /* from table */;
  --accent-rgb: /* R,G,B for rgba() usage */;
  --text-primary: #1f2937;
  --text-muted: #6b7280;
}
body { background: var(--bg); color: var(--text-primary); font-family: 'Inter', system-ui, sans-serif; }
```

### Neumorphic Surface Classes

The magic: same base color, two opposing shadows at 145° simulate a light source from top-left.

```css
.neu-raised {
  background: linear-gradient(145deg, var(--bg), var(--bg-mid));
  box-shadow: 8px 8px 16px var(--shadow-dark), -8px -8px 16px var(--shadow-light);
}
.neu-raised-sm {
  background: linear-gradient(145deg, var(--bg), var(--bg-mid));
  box-shadow: 4px 4px 8px var(--shadow-dark), -4px -4px 8px var(--shadow-light);
}
.neu-convex {
  box-shadow: 8px 8px 16px var(--shadow-dark), -8px -8px 16px var(--shadow-light),
              inset 1px 1px 2px rgba(255,255,255,0.4), inset -1px -1px 2px rgba(0,0,0,0.15);
}
.neu-inset {
  background: linear-gradient(145deg, var(--bg-mid), var(--bg));
  box-shadow: inset 4px 4px 8px var(--shadow-dark), inset -4px -4px 8px var(--shadow-light);
}
```

### Radius System (this defines the visual feel — go BIG)

| Element | Radius | Why |
|---|---|---|
| Hero preview frame | `40px` (rounded-[40px]) | Signature element — oversized = premium |
| Hero inner container | `30px` (rounded-[30px]) | Slightly smaller than frame |
| Cards | `30px` (rounded-3xl) | Generous, soft |
| Buttons | `16px` (rounded-2xl) | Chunky, tactile |
| Badges/pills | `9999px` (rounded-full) | Pill shape |
| Small elements | `12px` (rounded-xl) | Logo box, toggles |
| FAQ items | `24px` (rounded-3xl) | Same as cards |

### Typography

```html
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

| Role | Font | Weight | Notes |
|---|---|---|---|
| Headings | Outfit | 800–900 | `letter-spacing: -0.02em; line-height: 1.1; font-black` |
| Body | Inter | 400–600 | `line-height: 1.6; leading-relaxed` |
| Micro labels | Inter | 900 | `uppercase tracking-[0.2em] text-xs` — wide letter-spacing for labels |

### Button Patterns

```css
.btn-primary {
  background: linear-gradient(135deg, var(--accent), var(--accent-dark));
  box-shadow: 8px 8px 16px var(--shadow-dark), -8px -8px 16px var(--shadow-light),
              inset 1px 1px 2px rgba(255,255,255,0.4), inset -1px -1px 2px rgba(0,0,0,0.15);
  border-radius: 16px; padding: 16px 40px; color: white; border: none; cursor: pointer;
  font-family: 'Outfit', sans-serif; font-weight: 700; font-size: 16px;
  transition: all 0.15s ease;
}
.btn-primary:hover { transform: translateY(-2px); box-shadow: 0 20px 40px rgba(var(--accent-rgb),0.3); }
.btn-primary:active { transform: translateY(1px); box-shadow: inset 4px 4px 8px rgba(0,0,0,0.2); }

.btn-secondary {
  background: linear-gradient(145deg, var(--bg), var(--bg-mid));
  box-shadow: 8px 8px 16px var(--shadow-dark), -8px -8px 16px var(--shadow-light);
  border-radius: 16px; padding: 16px 40px; color: var(--text-primary); border: none; cursor: pointer;
  font-family: 'Outfit', sans-serif; font-weight: 700; font-size: 16px;
  transition: all 0.15s ease;
}
.btn-secondary:hover { transform: translateY(-2px); }
```

Buttons inside pricing cards and hero should be `py-4 rounded-2xl text-lg font-bold` — oversized for emphasis.

### Card Pattern

```css
.neu-card {
  background: linear-gradient(145deg, var(--bg), var(--bg-mid));
  box-shadow: 8px 8px 16px var(--shadow-dark), -8px -8px 16px var(--shadow-light);
  border-radius: 30px; padding: 32px;
  transition: all 0.3s ease;
}
.neu-card:hover { transform: translateY(-4px); }
```

### Tailwind Grid Rule (CRITICAL)

Every grid container MUST include the `grid` base class before any `grid-cols-*` classes. Without `display: grid`, column utilities are inert and everything stacks vertically — this is the #1 layout bug.

```html
<!-- WRONG — columns won't work -->
<div class="grid-cols-1 md:grid-cols-3 gap-8">

<!-- CORRECT -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
```

Apply this to every grid in the page: features, pricing, footer columns, team cards, how-it-works steps, etc.

### Only Use Defined CSS Classes

Only use the neumorphic classes defined in this skill: `.neu-raised`, `.neu-raised-sm`, `.neu-convex`, `.neu-inset`, `.neu-card`, `.btn-primary`, `.btn-secondary`. Do not invent variants like `.neu-raised-lg` or `.neu-card-xl` — the system is intentionally constrained. Use Tailwind utility overrides for size adjustments (e.g., `shadow-2xl` on top of `.neu-raised`).

### Spacing Rules (generous — the page BREATHES)

- **Container**: `max-width: 1280px; margin: 0 auto; padding: 0 24px` (use `max-w-7xl mx-auto px-4 md:px-6`)
- **Between major sections**: `8rem` minimum (use a wrapper div with Tailwind `space-y-32`)
- **Section heading → content**: `mb-16` (4rem gap after heading block)
- **Section heading → subtext**: `mb-6`
- **Section dividers**: use `border-t border-gray-200` between sections for subtle separation
- **Card gaps**: `gap-8` or `gap-10` (not gap-4 or gap-6 — too tight)
- **Hero top padding**: `pt-32 lg:pt-48` · bottom: `pb-20 lg:pb-32`

---

## 3. CDN Stack (always all four)

```html
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
```

---

## 4. Animation Rules

- **All GSAP code** inside a single `window.addEventListener('DOMContentLoaded', function() { ... })`
- **Each system** in its own IIFE inside that listener
- `gsap.registerPlugin(ScrollTrigger)` at top of the GSAP IIFE
- Section reveals: `start: 'top 85%', toggleActions: 'play none none reverse'`
- Card stagger: `stagger: 0.1, duration: 0.8, ease: 'power3.out'`
- **Hero entry**: page-load GSAP with staggered delays (NOT scroll-driven)
- Blob animations: CSS `@keyframes` with `animate-pulse` or custom `float`
- Marquee: CSS `@keyframes marquee` — NEVER Tailwind's `animate-marquee` class

---

## 5. Section Blueprints (S1–S8 Full Fidelity)

### S1: Navbar (position: fixed, z: 999)

- Transparent by default with `py-6`
- On scroll > 20px: JS adds `.scrolled` → `py-3 bg-[rgba(230,233,239,0.85)] backdrop-blur-md shadow-lg`
- **Logo**: icon box (`.neu-raised p-2 rounded-xl`) + brand name (`text-xl font-bold tracking-tight`)
- Center: nav links (`text-sm font-medium text-gray-600 hover:text-[accent]`)
- Right: small `.btn-primary` CTA + theme toggle (`.neu-raised-sm p-2 rounded-lg`)
- Mobile: hamburger → slide-down drawer (`bg-[#e6e9ef] border-t border-gray-200 shadow-xl p-6`)

### S2: Hero (min-height unset — content-driven height)

This is THE signature section. It has three visual layers: background blobs → centered text → giant preview frame.

**Layout**: `pt-32 pb-20 lg:pt-48 lg:pb-32`, centered text, `max-w-7xl mx-auto px-4 md:px-6 text-center`

**Background blobs**: 2 absolutely positioned circles:
- `w-[50%] h-[50%] bg-[accent]/20 blur-[120px] rounded-full opacity-30 animate-pulse` top-right
- `w-[40%] h-[40%] bg-blue-500/20 blur-[120px] rounded-full opacity-30 animate-pulse` bottom-left
- Both `-z-10 pointer-events-none`

**Badge**: `inline-flex items-center gap-2 px-4 py-2 rounded-full neu-raised-sm mb-8`
- Sparkle icon (★ or ✦) + label text (`text-xs font-bold text-gray-600 tracking-wider uppercase`) + chevron →

**Headline**: `text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-gray-900 mb-8`
- One key word in accent color (plain `text-[accent]`, not gradient — cleaner at this scale)

**Subheading**: `text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed mb-12`

**CTA Row**: `flex flex-col sm:flex-row items-center justify-center gap-6`
- Primary: `px-10 py-4 rounded-2xl text-lg shadow-2xl` with → icon that shifts on hover (`group-hover:translate-x-1`)
- Secondary: `px-10 py-4 rounded-2xl text-lg` with small play circle icon inside

**GIANT PREVIEW FRAME** (the signature element, `mt-24`):
```html
<div class="mt-24 relative max-w-5xl mx-auto">
  <!-- Outer frame -->
  <div class="neu-raised p-4 md:p-8 rounded-[40px] shadow-2xl border border-white/20">
    <!-- Inner container -->
    <div style="background:var(--bg)" class="rounded-[30px] overflow-hidden min-h-[500px] flex items-center justify-center relative border border-white/40 shadow-inner">
      <!-- Full-bleed image -->
      <img src="[hero image from library]" alt="Preview" class="absolute inset-0 w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000 opacity-90">
      <!-- Floating badge overlay (top-right, hidden on mobile) -->
      <div class="absolute top-10 right-10 neu-raised p-4 rounded-2xl hidden md:block backdrop-blur-sm bg-white/10">
        <span class="text-xs font-black uppercase tracking-widest text-[accent]">LIVE</span>
      </div>
      <!-- Floating stats overlay (bottom-left, hidden on mobile) -->
      <div class="absolute bottom-10 left-10 p-8 rounded-3xl hidden md:flex items-center gap-6 backdrop-blur-xl bg-white/5 border border-white/10 neu-raised text-left">
        <div class="w-12 h-12 rounded-full neu-raised flex items-center justify-center text-[accent]">★</div>
        <div>
          <div class="text-xs font-black uppercase tracking-widest text-[accent] mb-1">[Metric Label]</div>
          <div class="text-xl font-bold text-gray-800">"[Aspirational quote or stat]"</div>
        </div>
      </div>
    </div>
  </div>
</div>
```

**Hero GSAP entry**: staggered page-load animation with increasing delays (badge 500ms → headline 700ms → sub 700ms → CTAs 700ms → preview frame zoom-in 1000ms)

### S3: TrustedBy Strip

- `py-12 border-y border-gray-200` with slightly tinted background (`bg-[--bg-mid]/30`)
- Label: `text-xs font-black tracking-[0.2em] uppercase text-gray-400 mb-10` centered
- Logo strip: `flex flex-wrap items-center justify-center gap-12 md:gap-20`
- Each logo: `opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500`
  - Icon (emoji or inline SVG, `w-6 h-6 md:w-8 md:h-8`) + company name text (`text-sm font-bold text-gray-500`)
- Use 5-8 plausible company/tool names relevant to the business category. Examples: fitness → WHOOP, OURA, PELOTON, MYFITNESSPAL; SaaS → Google Docs, Notion, Slack, Figma; real estate → Zillow, Sotheby's, Compass; finance → Bloomberg, Stripe, Plaid. NEVER use generic tech names (Google, Microsoft, Airbnb) for non-tech businesses.

### S4: Features (separated by `border-t border-gray-200 pt-20`)

- Centered heading block: `text-4xl md:text-5xl font-black tracking-tight mb-6` + `text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-16`
- `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8` (the `grid` class is REQUIRED — without it, `grid-cols-*` does nothing and everything stacks vertically)
- 6 `.neu-card` feature cards: each with icon, Outfit 700 title, 2-line Inter description
- **Feature icon container** (Tailwind gotcha: `bg-opacity-*` does NOT work with arbitrary values like `bg-[var(--accent)]` — the opacity is ignored and you get a solid block hiding the SVG). Use inline style instead: `<div class="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style="background:rgba(var(--accent-rgb),0.15)">` with an SVG icon inside (`w-6 h-6 text-[var(--accent)]`)
- Cards lift on hover (`hover:-translate-y-2 transition-all duration-300`)

### S5: How It Works (separated by `border-t border-gray-200 pt-20`)

- Centered heading + subtitle
- **Desktop**: `grid grid-cols-4 gap-8` — 4 steps side-by-side horizontally. Each step is a column: numbered circle on top → dashed connector line → card below
- **Mobile**: `grid-cols-1` — steps stack vertically
- Each step: numbered circle (`.neu-raised w-14 h-14 rounded-full` with accent gradient number text, `mx-auto`) + `.neu-card` with step title + description
- GSAP: staggered fade-in on scroll

### S6: Interactive Demo (separated by `border-t border-gray-200 pt-20`)

- Outer `.neu-card` container `p-0 overflow-hidden`
- `grid grid-cols-1 lg:grid-cols-2`
- **Left** (`p-8`): 3 clickable feature pills — default `.neu-raised-sm rounded-xl p-5`; active: `.neu-inset` + `border-2 border-[accent]`
- **Right**: `.neu-inset rounded-[30px] min-h-[400px] p-8` preview area that fills completely — show a large image (`w-full h-48 object-cover rounded-2xl mb-4`) + title + description + stat. Content swaps on pill click.
- The preview must look full and rich, not a small card floating in empty space
- GSAP crossfade on switch

### S7: Pricing (separated by `border-t border-gray-200 pt-20`)

- `grid grid-cols-1 md:grid-cols-3 gap-10`
- All cards: `.neu-card rounded-3xl p-8` with `hover:-translate-y-2 transition-all duration-300`
- **Popular card (middle)**: `scale-105 z-10` + `border-2 border-[accent]/20` + "MOST POPULAR" badge positioned `absolute -top-4 left-1/2 -translate-x-1/2` in accent gradient with white text
- Price: `text-5xl font-black` Outfit
- Feature list: `space-y-4 mb-10 text-left` with check icons (small accent circles with ✓)
- CTA buttons: `w-full py-5 rounded-2xl text-lg font-bold` — BIG buttons
- Below pricing grid (`mt-24`): testimonial quote area — `.neu-inset p-8 md:p-12 rounded-[40px]` with large italic quote text

### S8: FAQ (separated by `border-t border-gray-200 pt-20 pb-20`)

- Section heading centered
- `max-width:800px; margin:0 auto` — narrower than other sections
- 5–7 accordion items; each is a `.neu-raised rounded-3xl` with `padding: 24px 28px; margin-bottom: 16px`
- Question row is ALWAYS visible (never inside the collapsible div): Outfit 700 text + `+` icon
- Answer div: starts with `style="max-height:0;overflow:hidden"` — animated open/closed via GSAP in the JS IIFE:

```js
// FAQ accordion IIFE (inside DOMContentLoaded)
(function(){
  document.querySelectorAll('.faq-item').forEach(function(item){
    item.addEventListener('click', function(){
      var answer = item.querySelector('.faq-answer');
      var icon = item.querySelector('.faq-icon');
      var isOpen = item.classList.contains('active');
      // close all
      document.querySelectorAll('.faq-item').forEach(function(i){
        i.classList.remove('active');
        gsap.to(i.querySelector('.faq-answer'),{maxHeight:0,duration:0.3,ease:'power2.inOut'});
        gsap.to(i.querySelector('.faq-icon'),{rotation:0,duration:0.3});
      });
      if(!isOpen){
        item.classList.add('active');
        gsap.to(answer,{maxHeight:answer.scrollHeight,duration:0.35,ease:'power2.out'});
        gsap.to(icon,{rotation:45,duration:0.3});
      }
    });
  });
})();
```

Do NOT use CSS `max-height` transitions or `.active` class toggling via CSS — use GSAP `gsap.to()` as shown above. The FAQ items must be visible on page load (question rows showing, answers hidden).

---

## 6. Section Blueprints (S9–S12, Full if Space Allows)

### S9: CTA Banner

- `.neu-card rounded-[40px]` with accent gradient overlay at 6% opacity
- "Ready to [outcome]?" Outfit 900 heading + subtext + `.btn-primary`

### S10: Marquee / Integration Strip

- Label centered above
- **CSS marquee only** — the key to a seamless loop is: (1) duplicate the entire set of items so the second copy starts exactly where the first ends, (2) use a generous `gap` between pills so there's no visual crowding, and (3) add matching `padding-right` on each half equal to the gap so the seam between the last pill of set 1 and the first pill of set 2 has the same spacing as all other pills:
```css
@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
.marquee-track{display:flex;gap:40px;animation:marquee 25s linear infinite;width:max-content}
.marquee-half{display:flex;gap:40px;padding-right:40px}
.marquee-wrap{overflow:hidden;-webkit-mask-image:linear-gradient(to right,transparent,black 10%,black 90%,transparent);mask-image:linear-gradient(to right,transparent,black 10%,black 90%,transparent)}
```
- 8–10 items in `.neu-raised-sm rounded-full px-6 py-3` pills (generous horizontal padding so text breathes)
- Structure: `.marquee-wrap` > `.marquee-track` > two identical `.marquee-half` divs each containing the full set of pills. The animation translates by -50% so set 2 seamlessly replaces set 1. The `padding-right` on each half matches the `gap` so the seam is invisible.
- Example HTML:
```html
<div class="marquee-wrap">
  <div class="marquee-track">
    <div class="marquee-half">
      <span class="neu-raised-sm rounded-full px-6 py-3 text-sm font-bold text-gray-500 whitespace-nowrap">BRAND 1</span>
      <span class="neu-raised-sm rounded-full px-6 py-3 text-sm font-bold text-gray-500 whitespace-nowrap">BRAND 2</span>
      <!-- ... all items ... -->
    </div>
    <div class="marquee-half">
      <!-- exact duplicate of above -->
    </div>
  </div>
</div>
```

### S11: About / Team

- 2-col layout: left text + `.btn-secondary`, right: 3 team member cards with avatar initials

### S12: Footer (SAME background as rest of page — NOT dark)

The footer uses the same `#e6e9ef` neumorphic background, NOT a dark footer. It is separated with `border-t border-gray-200 pt-20 pb-10`.

- `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16`
- **Logo**: same pattern as navbar (icon box `.neu-raised p-2 rounded-xl` + brand name)
- **Tagline**: `text-gray-500 leading-relaxed max-w-sm`
- **Social icons**: each in `.neu-raised-sm p-2 rounded-lg` with `text-gray-500 hover:text-[accent]`
- **Link sections**: heading `font-bold text-gray-800 mb-6` + links `text-gray-500 hover:text-[accent]`
- **Newsletter**: `.neu-inset` input + `.btn-primary` inline
- **Bottom bar**: `pt-8 border-t border-gray-200` with copyright + legal links + optional status dot (green `w-2 h-2 rounded-full bg-green-500`)

---

## 7. JavaScript Architecture

Same as before — wrap ALL systems in IIFEs inside one `DOMContentLoaded`:

```js
window.addEventListener('DOMContentLoaded', function() {
  // 1. Navbar scroll
  (function(){
    const nav = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    });
  })();

  // 2. GSAP animations
  (function(){
    gsap.registerPlugin(ScrollTrigger);
    // Hero page-load with staggered delays:
    gsap.fromTo('.hero-badge',{opacity:0,y:20},{opacity:1,y:0,duration:0.5,delay:0.3,ease:'power3.out'});
    gsap.fromTo('.hero-headline',{opacity:0,y:30},{opacity:1,y:0,duration:0.7,delay:0.4,ease:'power3.out'});
    gsap.fromTo('.hero-sub',{opacity:0,y:20},{opacity:1,y:0,duration:0.7,delay:0.5,ease:'power3.out'});
    gsap.fromTo('.hero-ctas',{opacity:0,y:20},{opacity:1,y:0,duration:0.7,delay:0.6,ease:'power3.out'});
    gsap.fromTo('.hero-preview',{opacity:0,scale:0.95},{opacity:1,scale:1,duration:1,delay:0.8,ease:'power3.out'});
    // Section reveals, card staggers, counters...
  })();

  // 3. Demo tab swap IIFE
  // 4. FAQ accordion IIFE (GSAP maxHeight)
  // 5. Hamburger mobile menu IIFE
});
```

---

## 8. Image Library

Use real hosted images throughout — never placeholder boxes or broken paths. Always pick from the Aura James collection first. Use any image freely — category match is not required.

### Aura James Collection (hardcoded CDN URLs — always use these)

```
atm_wealth      https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439beeba48751402641db.png
atm_biohacking  https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439be070c58e28e626115.png
atm_estate      https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439bed548179ed021687d.png
hero_wealth     https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439befb38cabb229231e2.png
hero_biohacking https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439bebfc81f54f4f24807.png
hero_estate     https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439befc5128f11e732220.png
hero_mindset    https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439be070c582337626116.png
process_lifestyle https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b43b27eba4875b6d267ef7.png
process_biological https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439bebfc81f54f4f24807.png
```

Pick any of these for any section. For a 12-section page, rotate through all 9 — use each image once, then reuse as needed. Prefer `hero_mindset` or `hero_biohacking` for the S2 hero frame, `process_lifestyle` or `atm_wealth` for demo/proof sections.

### Fallback: Unsplash

Only use Unsplash if you need more images beyond the 9 above. Format: `https://images.unsplash.com/photo-[ID]?q=80&w=870&auto=format&fit=crop`

| Category | Photo IDs |
|---|---|
| Fitness / gym | `1534438327167-1dcbe013c94b`, `1517836357163-dcda8edfe2b6` |
| Coaching / mindset | `1522075469751-3a6694fb2f61`, `1507003211169-0a1dd7228f2d` |
| Health / medical | `1559757148-5c350d0d3c56`, `1576091160550-2173dba999ef` |
| Tech / SaaS | `1518770660439-4636190af475`, `1563013544-824ae1b704d3` |
| Finance | `1611974789855-9c4f4b7e8b69`, `1565514020179-026b92b2d70b` |
| Real estate | `1560518883-ce09059eeffa`, `1582407947304-d97f8a4c2e8b` |
| Restaurant / food | `1414235077428-338989a2e8c0`, `1504674900247-0877df9cc836` |
| Agency / creative | `1497366216548-37526070297c`, `1559136555-9303baea8ebd` |

### Image Usage Rules

- Hero preview frame: full-bleed `absolute inset-0 w-full h-full object-cover`
- Demo/interactive section: `w-full h-48 object-cover rounded-2xl`
- Team/avatar circles: gradient backgrounds with initials (safer than faces)
- Feature card icons: inline SVG or Unicode emoji — never images
- Never use `placeholder.com`, `via.placeholder`, or `picsum.photos`
- Never use local file paths — only absolute `https://` URLs

---

## 9. Copy Generation

- **Outcome-first**: numbers beat adjectives. "Save 12 hours per week" beats "powerful platform"
- **Specific**: infer plausible metrics from category
- **Voice by category**: Healthcare → warm · Fitness → intense/direct · Finance → measured · Agency → confident · Tech → crisp/forward
- **Accent word** in hero headline = the thing the client most wants
- FAQ = real objections: pricing, timeline, support, integrations, security

---

## 10. Output Checklist

- [ ] `background: #e6e9ef` on `body` — never white, never dark
- [ ] CSS variables: `--bg`, `--bg-mid`, `--shadow-dark`, `--shadow-light`, `--accent`, `--accent-dark`, `--accent-rgb`
- [ ] `.neu-raised`, `.neu-raised-sm`, `.neu-convex`, `.neu-inset` classes defined
- [ ] Card radius is `30px` (rounded-3xl), hero preview is `40px`
- [ ] Buttons are `rounded-2xl` (16px)
- [ ] `.btn-primary` with gradient + convex shadow + active press state
- [ ] Accent inferred from category table
- [ ] Google Fonts (Outfit + Inter) CDN loaded
- [ ] Tailwind CDN loaded
- [ ] GSAP + ScrollTrigger CDN loaded
- [ ] **Hero has GIANT preview frame** with `rounded-[40px]`, inner `rounded-[30px]`, full-bleed image, floating overlays
- [ ] Hero entry is page-load GSAP (not scroll-driven)
- [ ] Hero preview zooms in with delay
- [ ] Navbar shrinks on scroll via `.scrolled` class (transition at scrollY > 20)
- [ ] TrustedBy section with `opacity-40 grayscale hover:grayscale-0` logos
- [ ] Sections separated with `border-t border-gray-200`
- [ ] `space-y-32` (8rem) between major sections
- [ ] `mb-16` gap between section heading and content
- [ ] `[data-count]` counters animate on scroll
- [ ] Pricing popular card uses `scale-105 z-10 border-2 border-[accent]/20`
- [ ] Pricing buttons are `w-full py-5 rounded-2xl text-lg`
- [ ] FAQ uses GSAP accordion (not CSS transition)
- [ ] Marquee uses CSS `@keyframes marquee` — NOT Tailwind animate-marquee
- [ ] **Footer is LIGHT** (same #e6e9ef bg with `border-t`), NOT dark
- [ ] Footer social icons in `.neu-raised-sm` boxes
- [ ] All images use https:// URLs (Aura James CDN or Unsplash)
- [ ] `{{FORM_ENDPOINT}}` placeholders for forms
- [ ] `<title>` contains business name
- [ ] Mobile responsive: hamburger nav, stacked grids
- [ ] Every `grid-cols-*` div also has the `grid` base class (otherwise columns don't work)
- [ ] Images match the business category (no luxury mansions for fitness, no gym photos for SaaS)
- [ ] TrustedBy logos are category-relevant (fitness→WHOOP/OURA, SaaS→Notion/Slack, NOT generic Google/Microsoft)
- [ ] Feature icon containers use `style="background:rgba(var(--accent-rgb),0.15)"` (NOT `bg-[accent] bg-opacity-*` which fails)
- [ ] FAQ items are visible on page load (question rows show, answers hidden) — no empty space
- [ ] FAQ uses GSAP `gsap.to(answer,{maxHeight:...})` — NOT CSS transitions
- [ ] How It Works is a 4-column grid on desktop (`grid grid-cols-4`), not stacked vertically
- [ ] All JS in one `DOMContentLoaded`, each system in its own IIFE
- [ ] Single HTML file — all CSS in `<style>`, all JS in `<script>`