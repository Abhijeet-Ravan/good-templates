---
name: tokyo-beauty-funnel
description: Generates cinematic, atmospheric conversion websites modeled after the Tokyo Beauty aesthetic — bone/parchment backgrounds, Playfair serif headlines, asymmetric grids, meteorological GSAP motion, hero image carousel with clip-path transitions, ghost testimonial cards, focus-lighting witness section, and Lenis smooth scroll. Use when a client wants a premium, editorial, experience-forward website. Produces a single standalone HTML file ready for Vercel deployment. Trigger for luxury, beauty, fashion, coaching, creative, hospitality, wellness, art, architecture, or any brand that wants "cinematic", "atmospheric", "editorial", "premium", "minimalist", or "Japanese-inspired" design. Also trigger for "make me a website like Tokyo Beauty", "editorial funnel", "high-end landing page". Assume aggressively — invent plausible details if context is thin.
disable-model-invocation: true
argument-hint: [business description]
---

# Tokyo Beauty Cinematic Funnel Generator

You produce a single deployable HTML file with **cinematic atmospheric design**: bone/parchment backgrounds, asymmetric grids, Playfair Display serif headlines, one red accent (`--artery`), meteorological GSAP motion, clip-path hero transitions, ghost cards, focus lighting, grain + rain overlays, and Lenis smooth scroll.

This is not a dashboard. Not a SaaS UI. Not editorial-warm. It is a **site you enter** — still, purposeful, slightly unsettling in its refinement.

Given any business description, infer everything. Never ask for clarification.

## TOKEN PROTOCOL

Generate S1–S8 at full fidelity. If approaching output limit, stub S9–S12:
```html
<!-- TODO: S9 Echoes/Social Proof -->
<section id="echoes" style="padding:var(--breath);background:var(--color-background)"><div style="max-width:var(--container-xl);margin:0 auto;opacity:0.4;text-align:center;font-family:var(--font-primary);font-size:var(--text-xs);letter-spacing:0.2em;text-transform:uppercase">Section pending — run /tokyo-beauty-funnel again and say "expand S9"</div></section>
```

## CODE OUTPUT STYLE

Dense, minimal whitespace, terse variable names. No explanatory comments. AI-readable. All design tokens referenced by CSS variable — no raw hex values in component CSS.

## ASYMMETRY RULE

**No 50/50 splits. No perfect centers.** Text blocks offset 5–15% from geometric center. Primary content: `align-items:flex-start`. Allowed grid ratios: `1fr 2fr` · `2fr 1fr` · `1fr 3fr` · `2fr 3fr`. Never `1fr 1fr`.

## MOTION RULE

**No bounces. No elasticity. No linear timing.** All transitions use `--weather: cubic-bezier(0.23,1,0.75,1)`. Movement must feel like weather — inevitable, unhurried, slightly unpredictable. Duration scale: reveal 1200ms · settle 800ms · response 300ms · micro 150ms.

## SCRIPT PLACEMENT

All GSAP, Lenis, and interactive IIFEs go inside `window.addEventListener('DOMContentLoaded',function(){...})` at bottom of `<body>`.

---

## 1. Category & Accent Inference

**Default:** `--artery:#e83f43` (the red). This is always the accent — it does not change by category. What changes: the **primary/secondary image set**, the **headline voice**, and the **section copy persona**.

| Category | Voice | Primary Images to Use |
|---|---|---|
| `beauty` | reverent, sensory, intimate | slide 0+1+2, memory, artifacts |
| `luxury` | composed, elevated, scarce | slide 0+2, artifacts, sanctuary |
| `coaching` | witnessing, transformation, specific | memory, ritual, witness |
| `wellness` | atmospheric, embodied, still | slide 1+2, sanctuary, echoes |
| `creative` | observational, craft-focused | artifacts, memory, ritual |
| `hospitality` | atmospheric presence, arrival | slide 0+2, canvas, sanctuary |
| `fashion` | editorial, object-focused | artifacts, canvas, witness |
| `architecture` | monumental, material, spatial | slide 2, sanctuary, memory |

Default if no match: `beauty` voice.

The background is always `--color-background:#f7f3ef`. Body text always `--color-text-primary:#1a1a1a`. Artery red is always `--color-primary:#e83f43`.

---

## 2. Design Tokens (Complete)

```css
:root {
  /* Color */
  --color-primary:#e83f43;--color-primary-hover:#c42d2d;
  --color-background:#f7f3ef;--color-surface:#ffffff;--color-surface-alt:#eeece8;
  --color-overlay:rgba(26,26,26,0.05);
  --color-text-primary:#1a1a1a;--color-text-secondary:#5c5854;--color-text-muted:#847f7a;
  --color-text-inverse:#f7f3ef;
  --color-border:rgba(26,26,26,0.1);--color-border-subtle:rgba(26,26,26,0.05);

  /* Typography */
  --font-primary:"Inter",sans-serif;--font-secondary:"Playfair Display",serif;
  --t-h1:clamp(2.5rem,8vw,5rem);--t-h2:clamp(1.5rem,4vw,2.5rem);
  --t-body:clamp(0.9rem,2vw,1.125rem);--t-micro:0.75rem;
  --line-tight:1.1;--line-normal:1.6;
  --tracking-tight:-0.02em;

  /* Spacing */
  --space-2xs:4px;--space-xs:8px;--space-sm:12px;--space-md:16px;
  --space-lg:24px;--space-xl:32px;--space-2xl:48px;--space-3xl:64px;--space-4xl:96px;
  --breath:clamp(1.5rem,10vw,8rem);--pulse:clamp(0.8rem,5vw,4rem);

  /* Motion */
  --weather:cubic-bezier(0.23,1,0.75,1);
  --motion-reveal:1200ms var(--weather);--motion-settle:800ms var(--weather);
  --motion-response:300ms var(--weather);--motion-micro:150ms var(--weather);

  /* Layout */
  --container-xl:1200px;--radius-sm:2px;--radius-md:6px;
}

body{background:var(--color-background);color:var(--color-text-primary);font-family:var(--font-primary);cursor:none;overflow-x:hidden}
*{box-sizing:border-box;margin:0;padding:0}
```

### CDN Stack
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
<script src="https://unpkg.com/@studio-freight/lenis@1.0.33/dist/lenis.min.js"></script>
```

---

## 3. Atmosphere Layer (MANDATORY — always present)

Two fixed overlays on top of everything. Always include. Creates the cinematic grain + drift that makes the aesthetic work.

```html
<!-- Grain overlay -->
<div class="grain-overlay" style="position:fixed;inset:0;z-index:1000;pointer-events:none;opacity:0.04;background-image:url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/><feColorMatrix type=%22saturate%22 values=%220%22/></filter><rect width=%22200%22 height=%22200%22 filter=%22url(%23n)%22 opacity=%221%22/></svg>');background-size:200px"></div>
<!-- Rain drift overlay -->
<div class="rain-overlay" style="position:fixed;inset:0;z-index:1000;pointer-events:none;opacity:0.02;background:repeating-linear-gradient(90deg,transparent,transparent 1px,rgba(0,0,0,0.3) 1px,rgba(0,0,0,0.3) 2px);animation:rain-drift 20s linear infinite"></div>
```

```css
@keyframes rain-drift{from{transform:translateY(-50px)}to{transform:translateY(50px)}}
```

---

## 4. Custom Cursor (MANDATORY)

```html
<div class="custom-cursor" id="cursor" style="position:fixed;width:8px;height:8px;border-radius:50%;background:var(--color-primary);pointer-events:none;z-index:9999;transform:translate(-50%,-50%);transition:none"></div>
<div class="cursor-follower" id="cursor-follower" style="position:fixed;width:40px;height:40px;border-radius:50%;border:1px solid var(--color-primary);pointer-events:none;z-index:9998;transform:translate(-50%,-50%);opacity:0.6"></div>
```

```js
(function(){
  const cur=document.getElementById('cursor'),fol=document.getElementById('cursor-follower');
  const w=--weather; // use CSS var in gsap
  document.addEventListener('mousemove',e=>{
    gsap.to(cur,{x:e.clientX,y:e.clientY,duration:0.1});
    gsap.to(fol,{x:e.clientX,y:e.clientY,duration:0.6,ease:'cubic-bezier(0.23,1,0.75,1)'});
  });
  document.querySelectorAll('a,button,[data-hover]').forEach(el=>{
    el.addEventListener('mouseenter',()=>{gsap.to(fol,{scale:1.8,duration:0.3});gsap.to(cur,{scale:0,duration:0.2})});
    el.addEventListener('mouseleave',()=>{gsap.to(fol,{scale:1,duration:0.3});gsap.to(cur,{scale:1,duration:0.2})});
  });
})();
```

---

## 5. Image Library (All Live CDN URLs)

```
BASE: https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/

CANVAS (Hero Slides):
  slide_0_neon:    69b426da277ba02b27d0287b.png   — Neon/artery bleed, dramatic
  slide_1_shoji:   69b426dae8487cea717659b9.png   — Shadow geometry, gravity
  slide_2_atm:     69b426dad54817b6831deb30.png   — Atmospheric presence, mist

SUPPORTING:
  memory_wm:       69b426da277ba069c6d0287f.png   — Memory/watermark (high contrast)
  porch_shadow:    69b426dae8487cdf487659b8.png   — Porch shadows, stillness
  shinkansen:      69b426dafb38ca83408ecb9b.png   — Speed/precision/transit
  sashimono:       69b426daeba487700722d3e6.png   — Craft/detail/material
  monks_path:      69b426dabfc81f2479eeebca.png   — Journey/ritual/solitude
```

Prepend `https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/` to each filename.

For business categories not matching the imagery (e.g., dental clinic), use Unsplash: `https://images.unsplash.com/photo-[ID]?w=1400&q=85&fit=crop&auto=format`

---

## 6. Section Blueprints (S1–S8 — FULL FIDELITY)

### S1: Header (z:10, position:fixed)
- `background:transparent;mix-blend-mode:difference` initially
- On scroll >80px: JS removes mix-blend-mode, adds `background:rgba(247,243,239,0.92);backdrop-filter:blur(12px);border-bottom:1px solid var(--color-border)`
- Logo: Playfair Display 24px italic · Nav links: Inter 12px uppercase `letter-spacing:0.2em` · Audio toggle right
- No hamburger animation needed — mobile: nav collapses to just logo + audio icon

**Audio toggle (mocked ambient noise):**
```js
(function(){
  const btn=document.getElementById('audio-toggle');
  let ctx=null,running=false;
  btn?.addEventListener('click',()=>{
    if(!running){
      if(!ctx)ctx=new AudioContext();
      const buf=ctx.createBuffer(1,ctx.sampleRate*2,ctx.sampleRate);
      const d=buf.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=(Math.random()*2-1)*0.15;
      const src=ctx.createBufferSource();src.buffer=buf;src.loop=true;
      const g=ctx.createGain();g.gain.value=0;
      src.connect(g);g.connect(ctx.destination);src.start();
      gsap.to(g.gain,{value:0.3,duration:1.5});running=true;
    }
  });
})();
```

### S2: Canvas — Hero Carousel (z:1, height:100vh)
The hero is a full-viewport image carousel with clip-path slide transitions.

```html
<section id="canvas" class="experience-canvas" style="height:100vh;overflow:hidden;position:relative">
  <div id="slides-container" style="position:absolute;inset:0">
    <!-- 3 slides, each: position:absolute;inset:0;display:grid;grid-template-columns:1fr 2fr -->
    <div class="slide" data-index="0" style="position:absolute;inset:0;display:grid;grid-template-columns:1fr 2fr;align-items:center;padding:var(--breath)">
      <div class="content-wrap" style="max-width:60ch">
        <p class="section-label" style="font-size:var(--t-micro);text-transform:uppercase;letter-spacing:0.2em;color:var(--color-text-muted);margin-bottom:var(--space-xl)">Canvas · 01</p>
        <h1 class="slide-title" style="font-family:var(--font-secondary);font-size:var(--t-h1);font-weight:700;line-height:var(--line-tight);letter-spacing:var(--tracking-tight)">[HEADLINE_1]</h1>
        <p style="margin-top:var(--space-xl);color:var(--color-text-secondary);line-height:var(--line-normal);font-size:var(--t-body);max-width:44ch">[SUBHEADLINE_1]</p>
        <div style="margin-top:var(--space-2xl);display:flex;align-items:center;gap:var(--space-xl)">
          <button class="btn-primary" style="padding:var(--space-lg) var(--space-3xl);background:var(--color-text-primary);color:var(--color-text-inverse);font-family:var(--font-primary);font-size:var(--t-xs,12px);text-transform:uppercase;letter-spacing:0.2em;border:none;cursor:none">[CTA_TEXT]</button>
          <a href="#lintel" style="font-size:var(--t-micro);text-transform:uppercase;letter-spacing:0.2em;color:var(--color-text-muted);text-decoration:none;border-bottom:1px solid var(--color-border)">Enter ↓</a>
        </div>
      </div>
      <div class="visual-wrap" style="height:75vh;overflow:hidden;position:relative">
        <img src="https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b426da277ba02b27d0287b.png" alt="" style="width:110%;height:110%;object-fit:cover;transform:translate(-5%,-5%)"/>
      </div>
    </div>
    <!-- Slide 1, Slide 2 — same structure, different content/images -->
  </div>
  <!-- Controls -->
  <div class="canvas-controls" style="position:absolute;bottom:var(--space-2xl);right:var(--breath);display:flex;gap:1px;z-index:20">
    <button id="slide-prev" style="width:80px;height:80px;background:var(--color-surface);border:none;font-size:var(--t-micro);text-transform:uppercase;letter-spacing:0.2em;cursor:none">←</button>
    <button id="slide-next" style="width:80px;height:80px;background:var(--color-text-primary);color:var(--color-text-inverse);border:none;font-size:var(--t-micro);text-transform:uppercase;letter-spacing:0.2em;cursor:none">→</button>
  </div>
  <!-- Slide counter -->
  <div style="position:absolute;bottom:var(--space-2xl);left:var(--breath);font-size:var(--t-micro);text-transform:uppercase;letter-spacing:0.2em;color:var(--color-text-muted)"><span id="slide-cur">01</span> / 03</div>
</section>
```

**Canvas JS (IIFE):**
```js
(function(){
  const slides=document.querySelectorAll('.slide');
  let cur=0;
  function gotoSlide(n,dir){
    const from=slides[cur],to=slides[n];
    const tl=gsap.timeline();
    tl.set(to,{zIndex:2,opacity:1})
      .fromTo(to.querySelector('.visual-wrap'),
        {clipPath:dir==='next'?'inset(0 100% 0 0)':'inset(0 0 0 100%)'},
        {clipPath:'inset(0 0% 0 0)',duration:1.2,ease:'cubic-bezier(0.23,1,0.75,1)'})
      .fromTo(to.querySelector('.content-wrap'),
        {opacity:0,y:40},{opacity:1,y:0,duration:0.8,ease:'cubic-bezier(0.23,1,0.75,1)'},'-=0.6')
      .to(from,{opacity:0,duration:0.4},'-=0.8')
      .set(from,{zIndex:1});
    cur=n;
    document.getElementById('slide-cur').textContent=String(cur+1).padStart(2,'0');
    // Temporal debt — visited slides get subtle filter
    slides[n].dataset.visited='true';
    if(n>0)slides[n].style.filter='sepia(0.1) contrast(1.05)';
  }
  document.getElementById('slide-next')?.addEventListener('click',()=>gotoSlide((cur+1)%slides.length,'next'));
  document.getElementById('slide-prev')?.addEventListener('click',()=>gotoSlide((cur-1+slides.length)%slides.length,'prev'));
  // Ken Burns on all visual-wrap images
  document.querySelectorAll('.visual-wrap img').forEach(img=>{
    gsap.to(img,{x:'+=30px',y:'+=20px',scale:1.08,duration:25,ease:'sine.inOut',yoyo:true,repeat:-1});
  });
  // Init: only show slide 0
  slides.forEach((s,i)=>{s.style.opacity=i===0?'1':'0';s.style.zIndex=i===0?'2':'1'});
})();
```

### S3: Lintel — Manifesto / Ethos (`padding:var(--breath) var(--breath)`)
The first scroll section. Sets the worldview of the brand.

- Section label: Inter micro uppercase muted, "Ethos · [02]"
- `.manifesto-quote`: Playfair Display `var(--t-h1)` — 2-line philosophy statement. One phrase wrapped in `<span style="color:var(--color-primary)">` for artery emphasis.
- Below: 1-line Inter body text in muted (`max-width:60ch`)
- GSAP parallax: `scrollTrigger:{trigger:'.manifesto-quote',start:'top 80%',scrub:1}` — `y:-100` drift

No images. Typography-only section. Breathing room is the point.

### S4: Memory — Credibility Split (`padding:var(--breath)`)
Asymmetric 1:3 grid. Left: text column. Right: tall image with blur→sharp reveal.

```css
.memory-grid{display:grid;grid-template-columns:1fr 3fr;gap:var(--breath);align-items:start}
.memory-column-right{position:relative;height:50vh;overflow:hidden}
.memory-column-right img{width:110%;height:110%;object-fit:cover;transform:translate(-5%,-5%);filter:grayscale(1) blur(2px);transition:all 800ms var(--weather)}
/* JS adds .revealed class → filter:grayscale(0) blur(0) */
```

- Left column: section label + `<h2>` (Playfair, `var(--t-h2)`) + body paragraph (muted, `max-width:44ch`) + artery-colored stat (large Playfair number + small Inter label)
- Right column: full image, blur+grayscale that clears on scroll into view
- ScrollTrigger on `.memory-column-right img`: `start:'top 70%'` → set `filter:'grayscale(0) blur(0px)'`

Use `memory_wm` or `porch_shadow` image depending on category.

### S5: Ritual — Process Steps (`padding:var(--breath)`)
3-column grid of process steps.

```css
.ritual-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--space-2xl)}
.ritual-step{border-top:1px solid var(--color-border);padding-top:var(--space-xl)}
.step-num{font-family:var(--font-secondary);font-size:var(--t-h1);font-weight:700;color:var(--color-border);line-height:1}
.step-title{font-family:var(--font-secondary);font-size:var(--t-h2);margin:var(--space-lg) 0 var(--space-md)}
.step-desc{color:var(--color-text-secondary);line-height:var(--line-normal);font-size:var(--t-body);max-width:44ch}
```

- Section label + centered heading above grid
- 3 steps: number (large, nearly invisible border color) + title (Playfair) + description (Inter, muted)
- GSAP: stagger reveal `y:40→0, opacity:0→1, stagger:0.15s`
- Infer 3 steps from business category (e.g., Discover → Design → Deliver)

### S6: Artifacts — Collection/Offerings (`padding:var(--breath)`)
2-column grid of tall image cards with hover parallax.

```css
.artifacts-grid{display:grid;grid-template-columns:1fr 1fr;gap:var(--space-2xl)}
.artifact-card{position:relative;height:45vh;overflow:hidden;cursor:none}
.artifact-card img{position:absolute;inset:0;width:110%;height:110%;object-fit:cover;transform:translate(-5%,-5%);transition:transform 0.8s var(--weather)}
.artifact-info{position:absolute;bottom:0;left:0;right:0;padding:var(--space-xl);background:linear-gradient(transparent,rgba(0,0,0,0.4));color:#fff}
.artifact-title{font-family:var(--font-secondary);font-size:var(--t-h2);font-weight:700}
.artifact-meta{font-size:var(--t-micro);text-transform:uppercase;letter-spacing:0.2em;opacity:0.7;margin-top:var(--space-xs)}
```

- Section label above grid
- 2–4 cards (2 visible, 2 hidden behind "Reveal All" if needed)
- Each card: full-bleed image + gradient overlay + title + meta line
- **Hover parallax**: mousemove tracks position, moves image in opposite direction 40px (see §10 IIFE)
- Use: `sashimono`, `monks_path`, `shinkansen`, `porch_shadow` images
- Infer offering names from business category

### S7: Sanctuary — Benefits (`padding:var(--breath)`, `background:var(--color-text-primary)`)
Dark section. 2:3 grid — visual left, content right.

```css
.sanctuary-section{background:var(--color-text-primary);color:var(--color-text-inverse)}
.sanctuary-wrap{display:grid;grid-template-columns:2fr 3fr;gap:var(--breath);align-items:center}
.sanctuary-media{position:relative;height:60vh;overflow:hidden}
.sanctuary-media img{width:100%;height:100%;object-fit:cover}
```

- Left: tall image (use `slide_2_atm` or `slide_1_shoji`)
- Right:
  - Section label: `color:var(--color-primary)` (artery, on dark)
  - `<h2>` Playfair white, `var(--t-h2)`
  - 3 feature rows: `border-top:1px solid rgba(247,243,239,0.1)` · artery `+` icon · title · 1-line desc
  - CTA button: `background:var(--color-primary);color:#fff;padding:var(--space-lg) var(--space-3xl);font-size:var(--t-micro);text-transform:uppercase;letter-spacing:0.2em`
- GSAP: left `x:-30→0`; right `y:40→0` on ScrollTrigger

### S8: Witness Hero — Focus Lighting (`height:70vh`, `position:relative`, `overflow:hidden`)
Full-width dark section with a radial spotlight that follows the mouse.

```css
.witness-hero{position:relative;height:70vh;overflow:hidden;display:flex;align-items:center;justify-content:flex-start}
.witness-hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:-1;filter:brightness(0.4)}
.witness-hero::after{content:'';position:absolute;inset:0;background:radial-gradient(800px circle at var(--mouse-x,50%) var(--mouse-y,50%),transparent 0%,rgba(10,10,10,0.95) 100%);z-index:1;pointer-events:none}
.witness-content{position:relative;z-index:2;padding:var(--breath);max-width:60ch}
```

- Background image: `slide_0_neon` or `monks_path`
- Content (bottom-left positioned): large Playfair italic quote (white) + small Inter attribution (muted white)
- Optional voyage counter: `<span id="voyage-count" style="font-family:var(--font-secondary);font-size:var(--t-h1);font-weight:700;color:var(--color-primary)">000</span>` with `data-count="[X]"` + GSAP counter animation

**Focus lighting IIFE:**
```js
(function(){
  const hero=document.querySelector('.witness-hero');
  if(!hero)return;
  hero.addEventListener('mousemove',e=>{
    const r=hero.getBoundingClientRect();
    hero.style.setProperty('--mouse-x',`${e.clientX-r.left}px`);
    hero.style.setProperty('--mouse-y',`${e.clientY-r.top}px`);
  });
})();
```

---

## 7. Section Blueprints (S9–S12 — FULL IF SPACE, STUB IF NOT)

### S9: Echoes — Testimonials (`padding:var(--breath)`)
Asymmetric 2:1.5 grid. Left: large ghost cards. Right: stacked smaller cards. Background watermark text.

```css
.echoes-section{position:relative;overflow:hidden}
.echoes-watermark{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-family:var(--font-secondary);font-size:25vw;font-weight:700;background-image:url('https://assets.cdn.filesafe.space/3Mh94ewIWZaOQuAxTDt4/media/69b426da277ba069c6d0287f.png');background-clip:text;-webkit-background-clip:text;color:transparent;opacity:0.15;pointer-events:none;z-index:0;white-space:nowrap}
.echoes-grid{display:grid;grid-template-columns:2fr 1.5fr;gap:var(--space-4xl);align-items:start;position:relative;z-index:1}
.ghost-card{border:1px solid var(--color-border-subtle);padding:var(--space-2xl);opacity:0.3;transition:opacity 0.4s var(--weather),border-color 0.4s,transform 0.4s}
.ghost-card:hover{opacity:1;border-color:var(--color-primary);transform:translateY(-4px)}
.ghost-card.large{padding:var(--space-3xl)}
.ghost-author{font-size:var(--t-micro);text-transform:uppercase;letter-spacing:0.1em;color:var(--color-text-muted);margin-top:var(--space-xl)}
```

- Watermark text: business name or category word in large background-clipped text
- Left column: 1 large ghost card (featured testimonial, `class="ghost-card large"`) + 1 regular
- Right column: 2–3 stacked smaller ghost cards
- GSAP: cards reveal `y:40→0,opacity:0→0.3,stagger:0.1` (they stay at opacity 0.3 until hover)
- Generate 4–5 plausible testimonials with specific outcomes

### S10: Oracle — FAQ (`padding:var(--breath)`, `max-width:800px;margin:0 auto`)

```css
.accordion-item{border-bottom:1px solid var(--color-border)}
.accordion-trigger{display:flex;justify-content:space-between;align-items:center;width:100%;padding:var(--space-xl) 0;background:none;border:none;font-family:var(--font-secondary);font-size:20px;text-align:left;cursor:none;color:var(--color-text-primary)}
.accordion-trigger:hover{color:var(--color-primary)}
.accordion-icon{width:20px;height:20px;flex-shrink:0;transition:transform 0.3s var(--weather);font-size:20px}
.accordion-content{display:grid;grid-template-rows:0fr;transition:grid-template-rows 0.4s var(--weather)}
.accordion-content.open{grid-template-rows:1fr}
.accordion-inner{overflow:hidden;padding-bottom:var(--space-xl);color:var(--color-text-secondary);line-height:var(--line-normal)}
```

- Section label + Playfair heading above
- 6–8 questions generated from business category
- One open at a time; icon rotates 45deg when active
- GSAP: each item fades in on scroll `y:20→0,opacity:0→1,stagger:0.08`

**Accordion IIFE:**
```js
(function(){
  document.querySelectorAll('.accordion-trigger').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const item=btn.parentElement;const content=item.querySelector('.accordion-content');
      const isOpen=content.classList.contains('open');
      document.querySelectorAll('.accordion-content.open').forEach(c=>{c.classList.remove('open');c.parentElement.querySelector('.accordion-icon').style.transform='rotate(0deg)'});
      if(!isOpen){content.classList.add('open');btn.querySelector('.accordion-icon').style.transform='rotate(45deg)'}
    });
  });
})();
```

### S11: Conversion — Email Capture (`padding:var(--breath)`, centered)
The final email capture. Minimal. Intentional.

```css
.conversion-section{text-align:center;display:flex;flex-direction:column;align-items:center}
.capture-form{margin-top:var(--space-3xl);display:flex;flex-direction:column;align-items:center;gap:var(--space-2xl);width:100%;max-width:600px}
.capture-form input{width:100%;background:transparent;border:none;border-bottom:1px solid var(--color-text-primary);padding:var(--space-lg) 0;font-family:var(--font-secondary);font-size:var(--text-2xl,24px);color:var(--color-text-primary);text-align:center;outline:none;transition:border-color var(--motion-micro)}
.capture-form input:focus{border-color:var(--color-primary)}
.capture-form input::placeholder{color:var(--color-text-muted)}
.btn-submit{padding:var(--space-lg) var(--space-3xl);background:var(--color-text-primary);color:var(--color-text-inverse);font-family:var(--font-primary);font-size:var(--t-micro);text-transform:uppercase;letter-spacing:0.2em;border:none;cursor:none;transition:background var(--motion-response)}
.btn-submit:hover{background:var(--color-primary)}
```

- Section label + Playfair heading (large, `var(--t-h1)`) — final aspiration statement
- Muted subtext (`max-width:50ch`)
- Email input (Playfair 24px, centered, bottom-border only — no box)
- Submit button — on success: animate background to artery, show "Coordinates archived. The memory persists."
- `action="{{FORM_ENDPOINT}}"` placeholder

### S12: Footer (`padding:var(--space-2xl) var(--breath)`, `background:var(--color-surface-alt)`, `border-top:1px solid var(--color-border)`)
Minimal 3-column footer. No heavy grid.

- Left: business name Playfair italic + one-line tagline muted
- Center: 4 nav links (Inter micro uppercase, muted, artery on hover)
- Right: social icon links (text-only, micro uppercase) + "© [Year] [Business]"
- No newsletter repeat — conversion is done in S11

---

## 8. Full Animation Init

```js
(function(){
  // Lenis smooth scroll
  const lenis=new Lenis({duration:1.8,easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)),smoothWheel:true});
  function raf(t){lenis.raf(t);requestAnimationFrame(raf)}
  requestAnimationFrame(raf);
  // Sync with ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);
  lenis.on('scroll',ScrollTrigger.update);
  gsap.ticker.lagSmoothing(0);
})();

(function(){
  // Scroll reveals — fade up
  document.querySelectorAll('.lintel-section,.memory-grid,.ritual-step,.artifact-card,.sanctuary-wrap,.ghost-card,.accordion-item,.conversion-section').forEach(el=>{
    gsap.fromTo(el,{opacity:0,y:40},{opacity:1,y:0,duration:1.2,ease:'cubic-bezier(0.23,1,0.75,1)',scrollTrigger:{trigger:el,start:'top 85%',toggleActions:'play none none none'}});
  });
  // Manifesto parallax
  gsap.to('.manifesto-quote',{y:-100,scrollTrigger:{trigger:'.lintel-section',start:'top 80%',end:'bottom top',scrub:1}});
  // Echoes watermark parallax
  gsap.to('.echoes-watermark',{x:-150,scrollTrigger:{trigger:'.echoes-section',start:'top bottom',end:'bottom top',scrub:1}});
  // Memory image reveal
  const mimg=document.querySelector('.memory-column-right img');
  if(mimg)ScrollTrigger.create({trigger:'.memory-column-right',start:'top 70%',onEnter:()=>gsap.to(mimg,{filter:'grayscale(0) blur(0px)',duration:0.8,ease:'cubic-bezier(0.23,1,0.75,1)'})});
  // Voyage counter
  document.querySelectorAll('[data-count]').forEach(el=>{
    const t=parseFloat(el.dataset.count),sf=el.dataset.suffix||'',pf=el.dataset.prefix||'';
    gsap.fromTo({v:0},{v:t,duration:3,ease:'power2.out',onUpdate:function(){el.textContent=pf+String(Math.round(this.targets()[0].v)).padStart(3,'0')+sf},scrollTrigger:{trigger:el,start:'top 85%',once:true}});
  });
})();

(function(){
  // Artifact hover parallax
  document.querySelectorAll('.artifact-card').forEach(card=>{
    const img=card.querySelector('img');
    card.addEventListener('mousemove',e=>{
      const r=card.getBoundingClientRect();
      const x=(e.clientX-r.left)/r.width-0.5;
      const y=(e.clientY-r.top)/r.height-0.5;
      gsap.to(img,{x:x*-40+'px',y:y*-40+'px',duration:0.8,ease:'power2.out'});
    });
    card.addEventListener('mouseleave',()=>gsap.to(img,{x:'-5%',y:'-5%',duration:0.8,ease:'power2.out'}));
  });
})();
```

---

## 9. Copy Generation

### Voice
- **Not corporate.** No "solutions", "synergies", "cutting-edge".
- **Observational.** Describe what is — not what you're selling.
- **Specific.** Numbers, materials, durations, distances. Vagueness is weakness.
- **Present tense.** "You arrive." Not "You will arrive."
- **Short sentences with weight.** Rarely more than 20 words.

### Headline Patterns (Playfair serif — these are the "room")
```
"[Verb the experience], Not the [commodity]"
"The [Noun] of [Abstract quality]"
"[City/Place/Concept] in Absolute Stillness"
"Witness [outcome] Without [sacrifice]"
```

### Section Label Pattern
```
Overline: "[Concept] · [02]" — uppercase, artery, micro
```

### Voice by Category
- beauty → sensory, intimate ("The ritual begins before you enter")
- luxury → composed, scarce ("Not all arrivals are equal")
- coaching → witnessing, specific ("You already know what needs to change")
- wellness → embodied, present ("This is not optimization. This is return.")
- creative → craft-focused ("Made by hand. Disturbed by eye.")

---

## 10. Responsive Rules

All grids collapse to `1fr` at `max-width:1024px`. Specific overrides:
- `.slide`: `grid-template-columns:1fr` — image becomes full-height bg, content overlays
- `.memory-grid`: `grid-template-columns:1fr` — image below text
- `.sanctuary-wrap`: `grid-template-columns:1fr` — image hides or becomes section bg
- `.ritual-grid`: `grid-template-columns:1fr` — steps stack vertically
- `.echoes-grid`: `grid-template-columns:1fr` — cards stack
- `.artifacts-grid`: `grid-template-columns:1fr`
- Breath: uses `--pulse` on mobile (`padding:var(--pulse)`)
- Canvas controls: smaller on mobile (`width:60px;height:60px`)

---

## 11. Output Checklist

- [ ] Single HTML file — all CSS in `<style>`, all JS in `<script>`
- [ ] `<title>` = business name
- [ ] Google Fonts (Playfair Display + Inter) + GSAP + ScrollTrigger + Lenis in `<head>`
- [ ] `body { cursor: none }` — custom cursor replaces default
- [ ] Grain overlay + rain drift overlay present (fixed, z:1000, pointer-events:none)
- [ ] Custom cursor (8px dot + 40px follower) present and tracking
- [ ] All CSS uses token variables — no raw hex values in component rules
- [ ] `--artery:#e83f43` is the ONLY accent color — used for primary action, hover, emphasis
- [ ] Background is always `--color-background:#f7f3ef` (bone/parchment) — not white, not dark
- [ ] Canvas hero has 3 slides with clip-path transitions (not simple fade)
- [ ] Ken Burns animation on all hero images (25s scale + drift)
- [ ] Temporal debt: visited slides get `filter:sepia(0.1) contrast(1.05)`
- [ ] All grids are asymmetric — no `1fr 1fr` anywhere
- [ ] Memory image starts grayscale+blur, reveals on scroll
- [ ] Artifact cards have mousemove parallax
- [ ] Sanctuary section is dark (`#1a1a1a` background)
- [ ] Witness hero has focus-lighting (radial gradient following mouse)
- [ ] Ghost cards default opacity 0.3, full opacity on hover
- [ ] Echoes watermark: background-clip text image
- [ ] FAQ accordion: one open at a time, icon rotates
- [ ] Email input: bottom-border only (no box), Playfair 24px
- [ ] Lenis smooth scroll initialized and synced to ScrollTrigger
- [ ] All JS systems in IIFEs inside DOMContentLoaded
- [ ] Audio toggle present (mocked ambient noise)
- [ ] `{{FORM_ENDPOINT}}` placeholder on form submission
- [ ] Sections use `padding:var(--breath)` — never fixed pixel padding for section rhythm
- [ ] S1–S8 complete at full fidelity; S9–S12 full if space allows, stubbed if token-limited
- [ ] Mobile: all grids collapse to 1 column at 1024px
- [ ] No drop shadows for elevation — use `backdrop-filter:blur()` instead
- [ ] No all-caps text except nav links (≤3 characters) and micro labels