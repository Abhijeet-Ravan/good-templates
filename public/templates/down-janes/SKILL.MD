---
name: down-janes-funnel
description: Generates premium editorial conversion websites modeled after the Down Janes / Dow Janes design aesthetic — warm pearl backgrounds, bento-grid hero, serif+sans typography, alternating dark/light sections, GSAP scroll reveals, and a full 12-section layout. Use when a client describes their business and wants a complete website. Produces a single standalone HTML file (Tailwind CDN + GSAP CDN) ready for Vercel deployment. Trigger whenever someone describes a business, product, service, or program and wants a website built. Also trigger for phrases like "make me a site", "build my funnel", "landing page for my business", or any free-form business description. Default to this skill for coaching, wellness, education, finance, and community-driven brands. Assume aggressively — if context is thin, invent plausible details.
disable-model-invocation: true
argument-hint: [business description]
---

# Down Janes Editorial Funnel Generator

You produce a single deployable HTML file with a **warm editorial aesthetic**: pearl backgrounds, serif headlines, clean sans body, bento-grid hero, alternating section backgrounds (pearl → black → pearl → accent → pearl), and GSAP scroll reveals. This is not a SaaS dark-mode UI — it is a human, trustworthy, conversion-focused editorial site.

Given any business description, infer everything and produce all 12 sections. Never ask for clarification.

## TOKEN PROTOCOL

Generate S1–S8 at full fidelity. If approaching output limit, stub S9–S12:
```html
<!-- TODO: S9 Testimonial Slider -->
<section id="testimonial-slider" style="padding:80px 0;background:var(--col-black)"><div class="dj-container"><p style="color:#fff;text-align:center;opacity:0.5">Section pending — run /down-janes-funnel again and say "expand S9"</p></div></section>
```
A complete skeleton beats a truncated masterpiece.

## CODE OUTPUT STYLE

Dense, minimal whitespace, terse variable names. No explanatory comments. AI-readable, not human-readable.

## LAYOUT ALIGNMENT RULE

Section headers (overline + H2 + subtitle above a grid) are **centered** by default. Only left-align when the blueprint explicitly says "2-column" (hero, split sections). If in doubt: center.

## SCRIPT PLACEMENT RULE

All GSAP and interactive IIFEs go inside `window.addEventListener('DOMContentLoaded',function(){...})` at bottom of `<body>`.

---

## 1. Category & Accent Color Inference

Default theme: **always light (pearl)**. Accent color and section color choices adapt to category.

| Category | Keywords | Accent | Alt Section BG |
|---|---|---|---|
| `coaching` | coach, mentor, course, program, mastermind, transformation, journey | `#00483d` (deep green) | `bg-green` |
| `finance` | finance, wealth, investing, money, financial, debt, savings | `#00483d` (deep green) | `bg-green` |
| `wellness` | wellness, health, mindset, therapy, mental, holistic, healing | `#7c6b8a` (muted purple) | `bg-purple` |
| `fitness` | fitness, gym, training, athletic, nutrition, body | `#ec6340` (warm orange) | `bg-rust` |
| `ecommerce` | shop, store, brand, products, retail, DTC | `#ca8a39` (amber) | `bg-amber` |
| `education` | education, school, learning, academy, course, curriculum | `#0082f3` (bright blue) | `bg-navy` |
| `real-estate` | real estate, property, broker, listings, homes, housing | `#203558` (dark blue) | `bg-navy` |
| `hospitality` | hotel, restaurant, travel, tourism, venue, dining, food | `#ec6340` (warm orange) | `bg-rust` |
| `creative` | agency, creative, branding, design, studio, art, photography | `#ca8a39` (amber) | `bg-amber` |
| `community` | community, membership, club, network, association, group | `#7c6b8a` (muted purple) | `bg-purple` |

Default if no match: `coaching`, accent `#00483d`.

---

## 2. Color System

All themes use the pearl base. Only the accent and one alternate dark section BG change.

```css
:root {
  --pearl:#f5f4f3;--black:#211e1b;--white:#ffffff;--fg:#211e1b;--fg-muted:#5d6c7b;
  --border:#d4d6d8;--border-light:rgba(0,0,0,0.08);
  --accent:/* from table */;--accent-rgb:/* R,G,B */;
  --accent-10:/* accent at 10% opacity */;--accent-20:/* accent at 20% opacity */;
  --section-alt:/* alt bg from table, e.g. #00483d */;
  --shadow-card:0 4px 24px rgba(0,0,0,0.06),0 1px 4px rgba(0,0,0,0.04);
  --shadow-hover:0 8px 40px rgba(0,0,0,0.12),0 2px 8px rgba(0,0,0,0.06);
  --navbar-bg:rgba(245,244,243,0.92);
  --footer-bg:#211e1b;
  --radius-card:12px;--radius-pill:9999px;--radius-btn:8px;
}
body{background:var(--pearl);color:var(--fg);font-family:'Inter',sans-serif}
```

### Section Background Sequence
Use this alternation pattern across sections (S1–S12):
1. pearl (hero)
2. **black** (media logos strip)
3. pearl
4. pearl
5. pearl
6. **section-alt** (accent-colored dark section — S6 or S7)
7. pearl
8. **black** (testimonial slider)
9. pearl
10. pearl
11. pearl
12. footer (--footer-bg = black)

---

## 3. Design Tokens

### CDN Stack
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
```

### Typography
| Role | Font | Weight | Notes |
|---|---|---|---|
| Hero H1 / Big Serif Headlines | Playfair Display | 700 | `font-style:italic` optional for emphasis, `letter-spacing:-0.01em` |
| Section H2 | Playfair Display | 400–700 | `line-height:1.1` |
| Overline labels | Inter | 700 | `text-transform:uppercase;letter-spacing:0.12em;font-size:11px;color:var(--accent)` |
| Body / lead text | Inter | 400 | `line-height:1.7;font-size:17px` |
| Small / meta | Inter | 400–500 | `font-size:14px;color:var(--fg-muted)` |
| Buttons | Inter | 600 | `letter-spacing:0.04em` |

### Spacing
Sections: `padding:80px 0`. Container: `max-width:1200px;margin:0 auto;padding:0 24px`. Card gap: `24px`. **Dense and content-rich — not airy.** Never 140px+ vertical padding.

### Core CSS Classes
```css
.dj-container{max-width:1200px;margin:0 auto;padding:0 24px}
.overline{font-family:'Inter',sans-serif;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:var(--accent);margin-bottom:12px}
.classy{font-family:'Playfair Display',serif;font-weight:700;line-height:1.1;letter-spacing:-0.01em}
.classy-80{font-size:clamp(40px,5vw,80px)}
.lead-text{font-size:17px;line-height:1.7;color:var(--fg-muted)}
.bg-pearl{background:var(--pearl)}
.bg-black{background:var(--black)}
.bg-section-alt{background:var(--section-alt)}

/* Buttons */
.btn-primary{display:inline-flex;align-items:center;gap:8px;padding:15px 32px;background:var(--black);color:#fff;border:1px solid var(--black);border-radius:var(--radius-btn);font-family:'Inter',sans-serif;font-size:14px;font-weight:600;letter-spacing:0.04em;text-decoration:none;transition:background 0.25s,border-color 0.25s,transform 0.2s;cursor:pointer}
.btn-primary:hover{background:var(--accent);border-color:var(--accent);transform:translateY(-1px)}
.btn-accent{background:var(--accent);border-color:var(--accent)}
.btn-outline{background:transparent;color:var(--black);border-color:var(--black)}
.btn-outline:hover{background:var(--black);color:#fff}
.btn-outline-white{background:transparent;color:#fff;border-color:rgba(255,255,255,0.5);border-radius:var(--radius-btn);padding:15px 32px;font-size:14px;font-weight:600;letter-spacing:0.04em;display:inline-flex;align-items:center;gap:8px;transition:all 0.25s;cursor:pointer}
.btn-outline-white:hover{background:rgba(255,255,255,0.1);border-color:#fff}

/* Arrow link */
.arrow-link{display:inline-flex;align-items:center;gap:8px;font-size:14px;font-weight:600;color:var(--accent);text-decoration:none;transition:gap 0.2s}
.arrow-link:hover{gap:12px}
.arrow-link img{width:18px;height:18px}

/* Cards */
.dj-card{background:#fff;border-radius:var(--radius-card);box-shadow:var(--shadow-card);overflow:hidden;transition:transform 0.3s ease,box-shadow 0.3s ease}
.dj-card:hover{transform:translateY(-4px);box-shadow:var(--shadow-hover)}
.dj-card-pearl{background:var(--pearl)}

/* Stats */
.stat-number{font-family:'Playfair Display',serif;font-size:clamp(36px,4vw,56px);font-weight:700;color:var(--accent);line-height:1}
.stat-label{font-size:14px;color:var(--fg-muted);margin-top:6px}

/* Testimonial */
.testimonial-card{background:#fff;border-radius:var(--radius-card);padding:32px;box-shadow:var(--shadow-card)}
.testimonial-avatar{width:56px;height:56px;border-radius:50%;object-fit:cover}
.star-row img{height:20px;width:auto}
```

---

## 4. Bento Grid System (MANDATORY in Hero)

The bento grid is Down Janes' most distinctive feature. It must appear in the hero. It is a **4×4 CSS grid** mixing images and color-block cells. Do not replace it with a plain image.

```css
.aura-hero-grid{display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:repeat(4,1fr);gap:8px;width:100%;aspect-ratio:1/1}
.aura-box{position:relative;overflow:hidden;border-radius:6px;display:flex;align-items:center;justify-content:center}
.aura-box img{width:100%;height:100%;object-fit:cover;transition:transform 0.5s ease}
.aura-box:hover img{transform:scale(1.05)}
```

### Default Bento Layout (adapt image choice to business category)
```html
<div class="aura-hero-grid">
  <div class="aura-box" style="grid-area:1/2;background:var(--pearl)"></div>
  <div class="aura-box" style="grid-area:1/4/3/5"><img alt="" src="[HERO_IMG_1]"/></div>
  <div class="aura-box" style="grid-area:2/1"><img alt="" src="[HERO_IMG_2]"/></div>
  <div class="aura-box" style="grid-area:2/2;background:var(--accent-10)"></div>
  <div class="aura-box" style="grid-area:3/1;background:var(--accent-20)"></div>
  <div class="aura-box" style="grid-area:3/2/5/4"><img alt="" src="[HERO_IMG_3]"/></div>
  <div class="aura-box" style="grid-area:3/4;background:var(--pearl)"></div>
  <div class="aura-box" style="grid-area:4/1;background:var(--black)"></div>
  <div class="aura-box" style="grid-area:4/4"><img alt="" src="[HERO_IMG_4]"/></div>
</div>
```

### Bento Image Library (use these — they are live CDN URLs)
```
HERO_IMG_1 (estate/luxury):   https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439befc5128f11e732220.png
HERO_IMG_2 (wealth/premium):  https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439befb38cabb229231e2.png
HERO_IMG_3 (lifestyle/social): https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b43b27eba4875b6d267ef7.png
HERO_IMG_4 (mindset/person):  https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439be070c582337626116.png
ATM_WEALTH (atmospheric):     https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439beeba48751402641db.png
ATM_BIOHACKING (lab/tech):    https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439be070c58e28e626115.png
ATM_ESTATE (architectural):   https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439bed548179ed021687d.png
HERO_BIOHACKING (device):     https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b439bebfc81f54f4f24807.png
```

For non-luxury categories, supplement bento cells with Unsplash: `https://images.unsplash.com/photo-[ID]?w=600&q=80&fit=crop`

---

## 5. Asset Library (Resources CDN)

These are deployed and live. Use them directly.

```
BASE: https://templates-kappa-two.vercel.app/Resources/images/

Logos / badges:
  star_rating.svg            — 5-star row SVG
  arrow_right_green.svg      — accent arrow for arrow-links
  arrow_right_purple.svg     — purple arrow variant
  logo_insider.svg           — "Insider" media logo (white)
  logo_medium.svg            — Medium media logo (white)
  logo_wapo.svg              — Washington Post logo (white)
  logo_yahoo_finance.svg     — Yahoo Finance logo (white)
  logo_gobankingrates.svg    — GoBankingRates logo (white)

People / social proof:
  hero_clients.webp          — row of overlapping client faces
  avatar_ivy.avif            — client avatar 1 (female)
  avatar_marianne.avif       — client avatar 2 (female)
  avatar_katherine.avif      — client avatar 3 (female)
  avatar_rebecca.avif        — client avatar 4 (female)
  success_stories_collage.webp — collage of many client photos

Content thumbnails:
  youtube_thumb.avif         — YouTube content thumbnail
  free_class_thumb.webp      — free class / webinar thumbnail
  blog_budget_apps.avif      — blog post thumbnail (finance/apps)
```

---

## 6. Animation System

```js
gsap.registerPlugin(ScrollTrigger);
// Fade up — default reveal
const fadeUp=(s,st=0.1)=>document.querySelectorAll(s).forEach(el=>gsap.fromTo(el,{opacity:0,y:36},{opacity:1,y:0,duration:0.8,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 88%',toggleActions:'play none none reverse'}}));
// Stagger children
const staggerIn=(c,ch,st=0.1)=>document.querySelectorAll(c).forEach(p=>gsap.fromTo(p.querySelectorAll(ch),{opacity:0,y:24},{opacity:1,y:0,duration:0.7,stagger:st,ease:'power2.out',scrollTrigger:{trigger:p,start:'top 84%',toggleActions:'play none none reverse'}}));
// Counter
const counters=()=>document.querySelectorAll('[data-count]').forEach(el=>{const t=parseFloat(el.dataset.count),sf=el.dataset.suffix||'',pf=el.dataset.prefix||'';gsap.fromTo({v:0},{v:t,duration:2,ease:'power2.out',onUpdate:function(){el.textContent=pf+Math.round(this.targets()[0].v).toLocaleString()+sf},scrollTrigger:{trigger:el,start:'top 85%',once:true}})});
// Horizontal marquee (CSS-only — no GSAP needed)
// Hero bento hover handled in CSS (.aura-box:hover img { transform:scale(1.05) })
```

Use `fadeUp` on section headings. Use `staggerIn` on card grids. Vary: use `x:-30→0` on left-column elements and `x:30→0` on right-column elements in 2-col splits.

---

## 7. Section Blueprints (S1–S8 — FULL FIDELITY)

All sections: `position:relative`. Sections on pearl bg: `z-index` not required. Alternate backgrounds via section class.

### S1: Navbar
- `position:fixed;top:0;left:0;right:0;z-index:999;transition:background 0.3s,box-shadow 0.3s`
- Initial: transparent, no border
- On scroll >60px: JS `.scrolled` → `background:var(--navbar-bg);backdrop-filter:blur(16px);box-shadow:0 1px 0 var(--border-light)`
- Logo: Playfair Display 700 italic OR `<img>` with business name · Accent colored dot or icon
- Links center (hide mobile) · CTA right (`.btn-primary` or `.btn-accent`)
- Mobile: hamburger → slide-down pearl drawer with nav links stacked

### S2: Hero (`bg-pearl`, `padding:100px 0 80px`)
Two-column grid: `display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:60px`

**Left column:**
- `.overline` — 3–4 word context (e.g., "Financial Coaching for Women+")
- `<h1 class="classy">` — large serif headline, `clamp(42px,5.5vw,72px)`, may use `<em>` for italic emphasis on key phrase
- `<p class="lead-text">` — 2–3 sentences. Human tone. Outcome-focused.
- Button row: `.btn-primary` (main CTA) + `.arrow-link` (secondary, e.g., "Get to know us →")
- Social proof row: `<img src=".../hero_clients.webp">` (faces) + `<img src=".../star_rating.svg">` + "Join X,000 [customers] like you"

**Right column:** `.aura-hero-grid` (mandatory bento grid — see §4)

Mobile: stack to 1 column; hide bento grid on <768px (or show as 2×2 simplified)

### S3: Media / "As Seen In" (`bg-black`, `padding:40px 0`)
- `<p>` — "You may have seen us on" (white, centered, 13px, uppercase, letter-spacing)
- Flex row of logos, `justify-content:center;align-items:center;gap:40px;flex-wrap:wrap`
- Use: `logo_insider.svg`, `logo_medium.svg`, `logo_wapo.svg`, `logo_yahoo_finance.svg`, `logo_gobankingrates.svg`
- All logos: `height:24px;width:auto;filter:invert(1) brightness(0.7);opacity:0.8`
- Adapt logos to business category — if non-media brand, substitute with integration logos or award badges (generate plausible SVG text logos)

### S4: Programs / Offerings (`bg-pearl`, `padding:80px 0`)
- `.overline` + `<h2 class="classy">` centered, e.g. "Choose the Program That's Right for You"
- `<p class="lead-text">` centered, max-width:680px, mx-auto
- **3-column grid** of offering cards (`grid-cols-3`, gap:24px):
  - Each `.dj-card` with `padding:36px`:
    - Accent-colored overline (program tier name)
    - `<h3>` (Playfair, 24px)
    - `<ul>` — 4–5 bullet outcomes (Inter, 15px)
    - `.btn-primary.btn-outline` at bottom of card — "Learn More" or specific CTA
- One card can be visually elevated: `border:2px solid var(--accent); box-shadow: var(--shadow-hover)` with an "MOST POPULAR" badge pill at top

### S5: Quiz / Lead Magnet CTA (`bg-pearl`, `padding:80px 0`)
- `.dj-card` with `padding:48px;display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center`
- **Left (visual):** CSS phone mockup or abstract visual — pearl bg inner card with quiz-style card list (3 quiz items with checkbox UI)
  ```html
  <div style="background:var(--pearl);border-radius:24px;padding:32px;max-width:280px">
    <div style="background:#fff;border-radius:8px;padding:16px 20px;margin-bottom:12px;display:flex;align-items:center;gap:12px;box-shadow:var(--shadow-card)">
      <div style="width:20px;height:20px;border-radius:4px;border:2px solid var(--border)"></div>
      <div style="height:10px;background:var(--border);border-radius:4px;flex:1"></div>
    </div>
    <!-- repeat 2 more, one with accent checkmark -->
  </div>
  ```
- **Right (copy):**
  - `.overline` — "Free Assessment" or "Quick Quiz"
  - `<h3 class="classy">` — "Curious Where You Stand on the Path to [Outcome]?"
  - `<p class="lead-text">` — 2 sentences about personalized result
  - `.btn-accent` — "Take the [X]-Minute Quiz"
- GSAP: left panel `x:-30→0`; right `x:30→0` on scroll

### S6: Social Proof Grid (`bg-pearl`, `padding:80px 0`)
- `.overline` + `<h2 class="classy">` centered — "Trusted by [X,000] [Customers] Like You"
- **3-column masonry-style card grid** (use CSS grid, 3 cols, stagger heights via `padding` variation)
- Each `.testimonial-card`:
  - `<img src=".../star_rating.svg">` (star row)
  - `<p>` — testimonial quote (2–4 sentences, specific outcome)
  - Bottom: `<img class="testimonial-avatar">` + name + meta (location or result)
- Use avatar images: `avatar_ivy.avif`, `avatar_marianne.avif`, `avatar_katherine.avif`, `avatar_rebecca.avif`
- Generate 6 plausible testimonials from business category — specific numbers and outcomes
- GSAP: `staggerIn('.testimonial-grid','.testimonial-card',0.08)`

### S7: Approach / Philosophy (`bg-section-alt`, `padding:80px 0`)
Two-column: `grid-template-columns:1fr 1fr;gap:60px;align-items:center`

**Left:**
- `.overline` in `rgba(255,255,255,0.6)` (white muted)
- `<h2 class="classy" style="color:#fff">` — "Our [Approach/Method/Philosophy]"
- `<p style="color:rgba(255,255,255,0.75)">` — 2 short paragraphs
- `.btn-outline-white` CTA
- **Micro proof row:** green dot + 3 short proof claims inline (e.g., "Live support · Proven system · 40,000+ graduates"), white text, 14px

**Right:** 3 stacked `.dj-card` cards with slight translate offset (optical depth — see SKILL-v5 §7 pattern). Each card: icon (emoji or SVG) + title + 1 line desc. Cards use pearl bg on accent section.
- `.card-1 { z-index:3; transform:translate(0,0) }`
- `.card-2 { z-index:2; transform:translate(20px,20px); opacity:0.8 }`
- `.card-3 { z-index:1; transform:translate(40px,40px); opacity:0.6 }`

GSAP: left `x:-30→0,opacity:0→1`; right cards stagger `y:20→0,opacity:0→1`

### S8: Content / Media Section (`bg-pearl`, `padding:80px 0`)
- `.overline` + `<h2 class="classy">` centered — content type adapted to business
- **2-column grid** `grid-template-columns:1fr 1fr;gap:24px`:
  - Each `.dj-card` with image top (`height:220px;object-fit:cover;border-radius:12px 12px 0 0`) + meta overline + `<h4>` + `.arrow-link`
  - Use: `success_stories_collage.webp`, `youtube_thumb.avif`, `free_class_thumb.webp`, `blog_budget_apps.avif`
  - Adapt context: blog posts, case studies, YouTube, podcast, etc.
- Below 2-col grid: **1 featured full-width card** with `content-left-image` layout (image left, text right)
  - Image: `width:100%;max-width:480px;border-radius:var(--radius-card)`
  - Text: overline + H3 + lead-text + `.btn-primary` + `.arrow-link`
- GSAP: `staggerIn('.content-grid','.dj-card',0.1)`

---

## 8. Section Blueprints (S9–S12 — FULL IF SPACE, STUB IF NOT)

### S9: Testimonial Slider (`bg-black`, `padding:80px 0`)
Full-width dark section with sliding testimonials.

- Wrapper: `overflow:hidden;position:relative`
- **Slider container** `display:flex;transition:transform 0.5s ease` — JS slides left on arrow/auto
- Each slide `min-width:100%;padding:0 40px`:
  - `<h2 class="classy" style="color:#fff;font-style:italic;max-width:800px;margin:0 auto;text-align:center">` — large italic quote
  - Business logo or name (white, muted)
  - `<p style="color:rgba(255,255,255,0.75)">` — full quote text
  - Avatar row: `<img class="testimonial-slider-avatar-image">` + name (white)
- Left/right arrow buttons: `position:absolute;top:50%;transform:translateY(-50%)`
- Auto-advance: `setInterval` every 5000ms
- Dot nav below slides
- Generate 3–4 slides with plausible quotes from business category

### S10: Stats / Counter Section (`bg-pearl`, `padding:80px 0`)
- `.overline` + `<h2 class="classy">` centered
- **4-column stat grid** `grid-cols-2 md:grid-cols-4`:
  - Each cell: `.stat-number` with `data-count="X" data-suffix="+"` + `.stat-label`
  - Animated by `counters()` on scroll
- Below stats: **3-column feature grid** — each `.dj-card-pearl` with icon + title + 2-line desc
  - Infer 3 key differentiators from business category

### S11: CTA / Free Class (`bg-section-alt`, `padding:80px 0`)
- Centered layout, `max-width:680px;margin:0 auto;text-align:center`
- `.overline` (white muted) + `<h2 class="classy" style="color:#fff">` — urgency headline
- `<p style="color:rgba(255,255,255,0.75)">` — 2 sentences
- Button row: `.btn-primary` (white bg + black text) + `.btn-outline-white`
- 3 inline trust signals below (checkmark + text, white, 14px)

### S12: Footer (`background:var(--footer-bg)`, `padding:64px 0 24px`)
- **4-column grid:** Brand (logo + tagline + social icons) · Links group 1 · Links group 2 · Contact/newsletter
- Brand col: business name in Playfair 700 white + tagline Inter 14px white/60% + 4 social icon links
- Link cols: `<h5 class="overline" style="color:rgba(255,255,255,0.5)">` header + `<a>` links (white 60%, hover white 100%)
- Newsletter col: short copy + email input + `.btn-accent` submit
- Bottom bar: `border-top:1px solid rgba(255,255,255,0.1);padding-top:24px;margin-top:40px` · copyright · legal links · `font-size:13px;color:rgba(255,255,255,0.4)`

---

## 9. JavaScript Architecture

Each interactive system wrapped in IIFE to prevent variable collision.

```js
(function(){
  // Navbar scroll
  const nav=document.getElementById('navbar');
  window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',window.scrollY>60));
})();

(function(){
  // Testimonial slider
  const track=document.getElementById('slider-track');
  if(!track)return;
  let cur=0;const slides=track.querySelectorAll('.slide');const total=slides.length;
  const go=n=>{cur=(n+total)%total;track.style.transform=`translateX(-${cur*100}%)`};
  document.getElementById('slider-prev')?.addEventListener('click',()=>go(cur-1));
  document.getElementById('slider-next')?.addEventListener('click',()=>go(cur+1));
  setInterval(()=>go(cur+1),5000);
})();

(function(){
  // Mobile nav toggle
  const btn=document.getElementById('nav-toggle');const drawer=document.getElementById('nav-drawer');
  if(!btn||!drawer)return;
  btn.addEventListener('click',()=>{const open=drawer.style.display==='flex';drawer.style.display=open?'none':'flex';if(!open)gsap.fromTo(drawer,{opacity:0,y:-8},{opacity:1,y:0,duration:0.25})});
})();

(function(){
  // Cursor accent dot
  const c=document.createElement('div');c.style.cssText='position:fixed;width:10px;height:10px;border-radius:50%;background:var(--accent);pointer-events:none;z-index:99999;opacity:0.5;transform:translate(-50%,-50%);transition:transform 0.15s ease';
  document.body.appendChild(c);
  document.addEventListener('mousemove',e=>{c.style.left=e.clientX+'px';c.style.top=e.clientY+'px'});
  document.querySelectorAll('a,button').forEach(el=>{el.addEventListener('mouseenter',()=>c.style.transform='translate(-50%,-50%) scale(2.2)');el.addEventListener('mouseleave',()=>c.style.transform='translate(-50%,-50%) scale(1)')});
})();
```

Wrap ALL JS systems in IIFEs: navbar · mobile nav · slider · bento hover (CSS handles) · GSAP reveals · counters · any accordion/toggle.

---

## 10. Copy Generation

- **Human and warm.** Down Janes tone is: accessible, empowering, honest, specific. Not corporate jargon.
- **Outcome-first.** Name the result the customer wants, not the feature. "Pay off your debt in 12 months" > "debt management tools"
- **Overline = category signal.** Always uppercase, accent-colored, 2–5 words. Sets context before the headline.
- **Headline = aspiration.** The big serif H2/H1 should name what the customer *wants to become* or *have*.
- **Lead text = reassurance.** Muted body text answers "is this for me?" — acknowledge pain, promise path.
- **Voice by category:** wellness → gentle/affirming · finance → empowering/specific · fitness → energetic · coaching → mentor-voice · ecommerce → aspirational/tactile

---

## 11. Responsive Rules

Mobile-first. Breakpoints: `md:768px`, `lg:1024px`.
- Hero: 2-col → 1-col stack on mobile. Bento grid: `display:none` on <768px OR simplified to `grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr`
- All card grids: 1-col on mobile
- Navbar: hide center links, show hamburger on mobile
- Stats grid: 2×2 on mobile
- Container: `padding:0 16px` on mobile

---

## 12. Output Checklist

- [ ] Single HTML file — all CSS in `<style>`, all JS in `<script>`
- [ ] `<title>` = business name
- [ ] Google Fonts (Playfair Display + Inter) + Tailwind CDN + GSAP + ScrollTrigger in `<head>`
- [ ] `--accent`, `--accent-rgb`, `--section-alt` set from category table
- [ ] Theme is always **pearl/light** — no dark body background unless section-specific
- [ ] **Bento grid present in hero** — aura-hero-grid with 4×4 CSS grid
- [ ] Bento uses live CDN images (filesafe.space URLs) or Unsplash — no broken paths
- [ ] All Resources images use `https://templates-kappa-two.vercel.app/Resources/images/` base
- [ ] Section backgrounds alternate: pearl → black → pearl → ... → section-alt → ... → black → pearl
- [ ] Navbar transparent → glassed on scroll
- [ ] Mobile hamburger functional
- [ ] `.overline` on every section header
- [ ] Playfair Display serif on all H1/H2 headings
- [ ] `data-count` elements present in S10 with counter animation
- [ ] Testimonial slider functional (JS prev/next + auto-advance)
- [ ] Programs grid has 3 cards, one visually elevated
- [ ] Quiz/lead CTA section present with phone mockup visual
- [ ] GSAP fadeUp + staggerIn on all sections — nothing static
- [ ] All JS systems in IIFEs inside DOMContentLoaded
- [ ] `.btn-primary:hover` turns accent color
- [ ] `.arrow-link` pattern used for secondary CTAs (not plain text links)
- [ ] Cursor accent dot present
- [ ] Sections use `padding:80px 0` — not 140px+
- [ ] S1–S8 complete at full fidelity; S9–S12 full if space allows, stubbed if token-limited
- [ ] `{{FORM_ENDPOINT}}` placeholder on all form submissions
- [ ] Footer has 4 columns, warm black bg, social icons