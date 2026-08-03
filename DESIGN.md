# QuantumBot — Style Reference

> One green, one typeface, hairlines instead of boxes. A clean B2B SaaS marketing page where the product UI is the proof and green only ever marks an action.

**Theme:** light
**Stack:** Nuxt 4 + Vue 3 + SCSS. Tokens are **SCSS variables**, not CSS custom properties. There is no Tailwind in this project.

## Where the tokens live

| Concern | File |
| --- | --- |
| Colour | `styles/variables/color.scss` |
| Radius, elevation, rhythm | `styles/variables/layout.scss` |
| Breakpoints | `styles/mixins/adaptive.scss` |
| Type scale | `styles/mixins/typography.scss` |
| Global element styles | `styles/index.scss` |

Everything in `styles/variables/` and `styles/mixins/` is auto-injected into every SFC `<style lang="scss">` block, so components use `$color-ink` and `@include text(h2)` directly without importing.

## Tokens — Colour

One chromatic hue. Green marks actions and proof; it never decorates.

| Token | Value | Role |
| --- | --- | --- |
| `$color-quantum-green` | `#008574` | Primary action fill, active states, accent dots, key brand strokes. 4.6:1 on white |
| `$color-quantum-deep` | `#056e62` | Hover/pressed state of the primary action |
| `$color-quantum-glow` | `#5cb8a8` | Link hover and accent dots **on dark surfaces only** — never on white |
| `$color-mint-wash` | `#edf7f4` | Quiet tinted surface for the featured tariff card |
| `$color-mint-line` | `#bfded6` | Border of the featured tariff card and duo-tone icon secondary fill |
| `$color-ink` | `#0a0a0a` | Headings, primary text, logo. 19.8:1 on white |
| `$color-carbon` | `#292b2a` | Nav links, secondary text, icon strokes |
| `$color-slate` | `#636564` | Supporting copy, eyebrow labels, list definitions. 5.9:1 on white — the floor for body-size text |
| `$color-ash` | `#8f9190` | Placeholder and disabled states only. 3.2:1 on white — it fails AA, so it must never carry text a user needs to read |
| `$color-hairline` | `#e7e8e7` | The dominant structural colour: dividers, card borders, control outlines |
| `$color-fog` | `#dfe0df` | Slightly firmer border where hairline disappears against linen |
| `$color-bone` | `#e5e7eb` | Neutral control fill |
| `$color-white` | `#ffffff` | Page canvas and card surfaces |
| `$color-linen` | `#f7f8f7` | Alternating section band |
| `$color-charcoal` | `#141615` | Dark contact panel |
| `$color-smoke` | `#3c3e3d` | Heavier neutral inside dark surfaces |

`$color-green-400`, `$color-lemon-500`, `$color-gray-600` and friends are **legacy aliases** kept so older selectors keep compiling. Do not use them in new code.

### Accent rationing

Green appears on: the primary CTA, the header CTA, section eyebrow dots, the featured tariff card's border and checkmarks, `Kaspi.kz` in the hero headline, the video play button, and link hover inside dark panels. Everywhere else — including the 22 non-featured tariff checkmarks and all team roles — stays neutral. Adding green to one more place measurably weakens the CTA.

## Tokens — Typography

**Public Sans**, weights 300 / 400 / 500. Nothing heavier exists in the system.

The scale is **fluid**: every role interpolates linearly between a 390px and a 1440px viewport via `clamp()`, so there are no per-breakpoint font overrides in components. Use `@include text($role)`; never hardcode `font-size`.

| Role | Min → Max | Line height | Tracking | Weight | Used for |
| --- | --- | --- | --- | --- | --- |
| `display` | 34 → 60px | 1.07 | -0.035em | 300 | Hero `h1` |
| `h2` | 27 → 44px | 1.14 | -0.03em | 300 | Section titles |
| `h3` | 19 → 26px | 1.26 | -0.02em | 500 | Card titles, tariff names |
| `h4` | 17 → 19px | 1.35 | -0.015em | 500 | Step titles, contact values, mobile nav |
| `lead` | 16 → 19px | 1.55 | -0.011em | 400 | Section descriptions, hero subtitle |
| `body` | 15 → 16px | 1.6 | -0.01em | 400 | Default copy |
| `body-sm` | 14 → 15px | 1.55 | -0.005em | 400 | Nav links, footer links, feature lists |
| `caption` | 13px | 1.45 | 0 | 400 | Notes, labels, copyright |
| `eyebrow` | 12px | 1 | 0.08em | 500 | Uppercase section labels — use `@include eyebrow` |
| `metric` | 32 → 46px | 1 | -0.03em | 300 | Result numbers |
| `price` | 30 → 40px | 1.05 | -0.03em | 400 | Tariff amounts |

Tracking only ever tightens as size grows. Display text is never all-caps; `eyebrow` is the single uppercase role.

## Tokens — Breakpoints

```scss
$bp-sm: 480px;   // phone
$bp-md: 768px;   // where multi-column grids must collapse
$bp-lg: 1024px;  // laptop threshold
$bp-xl: 1280px;
$bp-header: 900px; // the header's own collapse point
```

Use `@include until($bp)` / `@include from($bp)` for anything specific, and the named helpers otherwise: `mobile` (≤480), `compact` (≤768), `narrow` (≤1024), `wide` (>1024), `reduced-motion`.

The header collapses to a burger at ≤900px rather than at `narrow`, because logo + four links + login + CTA need roughly 740px of content width. That keeps the full nav on iPad landscape.

## Tokens — Shape, elevation, rhythm

### Radius ladder

| Token | Value | Applies to |
| --- | --- | --- |
| `$radius-control` | 8px | Burger button, small controls |
| `$radius-image` | 10px | Images inside cards |
| `$radius-card` | 12px | Cards, framed visuals |
| `$radius-panel` | 20px | Large panels — hero frame, contact block |
| `$radius-pill` / `$radius-secondary` / `$radius-nav` | 999px | Buttons and badges |

Scale determines radius. Never mix two radii at the same scale on one surface.

### Elevation

| Token | Applies to |
| --- | --- |
| `$shadow-cta` / `$shadow-cta-hover` | The primary button only |
| `$shadow-panel` | Hero product frame and the featured tariff card |

Cards are flat with a 1px hairline. Elevation is a privilege, not a default.

### Rhythm

```scss
$page-max-width: 1200px;
$page-gutter: 24px;         // 20px below $bp-sm
$section-gap:  clamp(72px, 9vw, 128px);  // between sections
$section-pad:  clamp(56px, 7vw, 104px);  // inside band sections
$block-gap:    clamp(28px, 3.4vw, 48px); // section head → body
$grid-gap:     clamp(12px, 1.4vw, 20px); // between cards
```

Vertical spacing lives in `app.vue` as a single `gap: $section-gap` on `main`. Sections do not add their own top or bottom margins.

## Surfaces

| Level | Token | Purpose |
| --- | --- | --- |
| 0 | `$color-white` | Page canvas, card fill |
| 1 | `$color-linen` | Alternating band (`<HomepageSection surface="band">`) |
| 2 | `$color-mint-wash` | Featured tariff card only |
| 3 | `$color-charcoal` | The contact panel |

Bands alternate down the page — plain, band, plain, band — so rhythm comes from surface changes rather than from a border around every group. Band sections carry `border-block: 1px solid $color-hairline` and their own `$section-pad`.

## Components

### `HomepageSection`

The wrapper every content section uses. Props: `title`, `eyebrow`, `description`, `surface` (`plain` | `band`), `centered`.

Above `$bp-lg` the head is a two-column grid — title left at `1.1fr`, description right at `0.9fr`, baseline-aligned. Headings are left-aligned and capped at `22ch`; descriptions at `46ch`. Eyebrows are uppercase `caption`-size labels preceded by a 6px green dot.

Each eyebrow is a distinct category, never a restatement of the title: Цифры, Процесс, Данные, Цены, Поддержка, О нас, Контакты.

### Buttons (`UiButton`)

`type="primary"` — green fill, white text, fully round, `$shadow-cta`, lifting 1px on hover with `$color-quantum-deep`. `type="secondary"` — white fill, hairline border, carbon text, same radius. Focus is a visible `:focus-visible` outline with offset; never suppressed.

### Hero trial hint (`.hero__hint`)

A `caption`-size line under the hero buttons stating the 3-day trial. It replaced a `floating-vue` tooltip: the offer is a reason to click, so it has to be readable without hovering — and unreachable by hover on touch devices in the first place.

### `UiVideoEmbed`

A poster image, a dark scrim and a green play button. The YouTube iframe is only injected on click, so the page loads no third-party player and shows no red branding.

### Tariff cards

`tariff-card__head` is a grid with a reserved `22px` first row for the "popular" flag and a `min-height` of two lines on the title, so prices, CTAs and feature lists share a baseline across all four cards regardless of flag or title length. Only the popular card gets green: border, flag, checkmarks and `$shadow-panel`.

### Carousels

There are none. Tariffs and team use a CSS `scroll-snap` row below `$bp-md` and a plain grid above it. Cards are ~78% of the viewport so the next one peeks and the affordance is obvious.

## Do

- Reach for `@include text($role)` and the colour tokens. A hardcoded `font-size` or hex in a component is a bug.
- Alternate `surface="plain"` and `surface="band"` down the page to create rhythm.
- Separate items in a group with a hairline divider rather than giving each item its own border.
- Keep every piece of readable text at `$color-slate` or darker — that is the AA floor. `$color-ash` fails contrast and is for placeholders and disabled states only.
- Give every interactive element a visible `:focus-visible` state and a tap target of at least 44px on touch widths.
- Let the product screenshot carry the hero. It is the strongest asset on the page.

## Don't

- Don't add a second accent hue. The system is achromatic plus one green.
- Don't use Public Sans above weight 500.
- Don't put a shadow on a card, an image, or a secondary button.
- Don't frame a cut-out render that already has its own shadow — that reads as a box inside a box.
- Don't use `$color-quantum-glow` on white; it fails contrast. It exists for dark surfaces.
- Don't restate the section title in its eyebrow.
- Don't reintroduce the legacy `$color-gray-*` / `$color-lemon-*` aliases in new code.
- Don't add vertical margins to a section — `main` owns the rhythm.

## Imagery

Two real product screenshots (`hero-desktop.png`, `hero-mobile.png`) and one isometric device render (`analytics-bg.png`). Team photos are cut-outs on `$color-linen`, square-cropped with `object-fit: cover` so all four share one treatment.

Screenshots are framed: `$radius-panel`, a hairline border, `$shadow-panel`. The device render is **not** framed — it is a cut-out with a baked-in shadow and sits directly on the band.

**Known gap:** the analytics render is generic stock-mockup material and its screen content is illegible at display size. The correct fix is a real dashboard capture, cropped flat and framed like the hero. Until then it is deliberately kept subordinate to the insight list beside it.

All raster assets are served through `NuxtImg` with `format="webp"` and `quality: 82` (`nuxt.config.ts`), with explicit `width`/`height` to reserve layout space.

## Layout

1200px centred, 24px gutters. The hero is the only centred composition on the page; every section below it is left-aligned, which makes the hero read as an opening rather than as one card among many.

Section bodies vary by content: metrics and team are equal-column grids, how-it-works is a numbered list, analytics and FAQ are two-column splits with the heading in the narrow column. FAQ pins its heading with `position: sticky` while the answers scroll past.

## Reference points

- **Linear** — one accent, hairline structure, product UI as the hero image.
- **Stripe (marketing)** — large light-weight editorial headings on a near-white canvas.
- **Vercel** — 1px borders as the primary structural device instead of shadows.
