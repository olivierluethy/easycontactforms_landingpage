# EasyContactForms — Style Guide

The single source of truth for the marketing site's visual system. Every token
here is **extracted verbatim from the shipped product** (`easycontactforms_frontend/src/styles.css`,
`easycontactforms_api/widget/embed.js`) so the landing pages read as the same
product, never a separate microsite. Colours and text styling stay exactly as
they are; new marketing surfaces reuse these tokens rather than inventing their
own.

> **Rule:** if a value isn't derivable from this file, it doesn't ship. The only
> additions the marketing site is allowed to make are documented under
> **Marketing extensions** — an *upward* extension of the existing type scale and
> a set of motion primitives. Nothing here restyles the product.

---

## The design idea (inherited from the product)

The dashboard is **an inbox, not an analytics dashboard**. The loudest thing on
any screen is *unread state* — a real person waiting for a reply — not charts or
totals. That yields the product's one structural device:

- **An amber rail** down the leading edge of anything with something new in it.
- **Blue means "you can click it." Amber only ever means "waiting for you."**
  Nothing else in the interface is amber, so a page can be triaged pre-attentively.

The marketing site is built on the same argument. The whole pitch — *don't leave
the people who contacted you waiting* — **is** the amber rail. So the rail is our
signature: it marks the enquiry that would otherwise be missed.

**Dark is the default. Light is a full peer**, not an afterthought — every token
is redefined for it. Toggle persists per browser; first visit follows the OS.

---

## Color tokens

Applied via `data-theme` on `<html>` (`dark` default, `light` peer). Names match
the product 1:1.

### Dark (default)

| Token | Value | Role |
|---|---|---|
| `--bg` | `#0a1120` | Page background (deep navy, not black) |
| `--bg-alt` | `#0d1526` | Quieter alternate background |
| `--surface` | `#131d31` | Cards, panels |
| `--surface-raised` | `#1a2540` | Raised controls, secondary buttons |
| `--surface-sunken` | `#0c1424` | Inputs, insets, panel headers |
| `--border` | `#223050` | Default hairline |
| `--border-strong` | `#32436c` | Emphasised border, hover |
| `--text` | `#e8eefb` | Primary text |
| `--text-dim` | `#a7b6d4` | Secondary text |
| `--text-muted` | `#7387ad` | Tertiary / labels |
| `--accent` | `#5b93fb` | **Clickable.** Links, primary buttons |
| `--accent-hover` | `#74a5ff` | Accent hover |
| `--accent-soft` | `rgba(91,147,251,0.14)` | Accent wash |
| `--accent-contrast` | `#06122a` | Text on accent fills |
| `--unread` | `#f2a33c` | **The signature. "Waiting for you."** Rails, dots |
| `--unread-soft` | `rgba(242,163,60,0.15)` | Amber wash |
| `--unread-text` | `#f7bf74` | Amber text |
| `--danger` | `#f4636a` | Errors |
| `--danger-soft` | `rgba(244,99,106,0.14)` | Error wash |
| `--success` | `#43cf95` | Confirmation |
| `--success-soft` | `rgba(67,207,149,0.14)` | Success wash |
| `--code-bg` | `#070d1a` | Code blocks |
| `--code-text` | `#cbd9f4` | Code text |

### Light (peer)

| Token | Value |
|---|---|
| `--bg` | `#f4f6fb` |
| `--bg-alt` | `#eef1f8` |
| `--surface` | `#ffffff` |
| `--surface-raised` | `#ffffff` |
| `--surface-sunken` | `#f7f9fd` |
| `--border` | `#dde3ef` |
| `--border-strong` | `#c3cddf` |
| `--text` | `#101a2e` |
| `--text-dim` | `#46566f` |
| `--text-muted` | `#6b7c99` |
| `--accent` | `#2563eb` |
| `--accent-hover` | `#1d4ed8` |
| `--accent-soft` | `rgba(37,99,235,0.10)` |
| `--accent-contrast` | `#ffffff` |
| `--unread` | `#c2740b` |
| `--unread-soft` | `rgba(194,116,11,0.12)` |
| `--unread-text` | `#96590a` |
| `--danger` | `#d92d33` |
| `--success` | `#14855c` |
| `--code-bg` | `#0d1526` |
| `--code-text` | `#d7e2f7` |

> The embed widget uses the same families of values (`--ecf-primary:#2563eb`
> light / `#60a5fa` dark; navy input backgrounds) so the form on a customer's
> site, the dashboard, and this marketing site are visibly one product.

---

## Typography

**No webfonts.** The product ships a system stack on purpose — a blocking font
request on every load is a worse trade than a well-built stack. Personality comes
from *scale and tracking*, not from a novelty face. The marketing site keeps this
exactly.

```
--font-ui:   ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
--font-mono: ui-monospace, "SF Mono", SFMono-Regular, "JetBrains Mono", Menlo, Consolas, monospace;
```

Voice:
- **Headings** — tight and heavy: weight `700`, `letter-spacing: -0.022em`, `line-height: 1.2`.
- **Labels / eyebrows** — wide and small: `11px`, weight `600`, `letter-spacing: 0.09em`, uppercase, `--text-muted`.
- **Machine-shaped things** (tokens, code, timestamps, stats) — `--font-mono`, slightly negative tracking.

### Product type scale (unchanged)

| Element | Size | Notes |
|---|---|---|
| `body` | `15px` / `1.55` | Base |
| `h1` | `clamp(22px, 2.2vw, 28px)` | Product page titles |
| `h2` | `17px` | |
| `h3` | `14px` | |
| `.eyebrow` | `11px`, `0.09em`, uppercase | Utility voice |
| `.muted` | `13px`, `--text-muted` | |
| `.mono` | `12.5px`, `-0.01em` | |

### Marketing extensions (upward only)

Landing heroes need type larger than any product screen ever shows. These extend
the **same** family, weight, and tracking philosophy *upward* — they never change
the faces or the product's own sizes.

| Token | Size | Use |
|---|---|---|
| `--fs-display` | `clamp(2.6rem, 6vw, 4.75rem)` | Hero headline, weight `700`, tracking `-0.03em`, `line-height: 1.04` |
| `--fs-h1` | `clamp(2rem, 4vw, 3rem)` | Section headline |
| `--fs-h2` | `clamp(1.5rem, 2.6vw, 2rem)` | Sub-section |
| `--fs-lead` | `clamp(1.05rem, 1.5vw, 1.3rem)` | Hero sub-copy / lead paragraphs, `--text-dim` |

---

## Spacing, radii, shadows, motion

```
--radius-sm: 6px;      /* controls, inputs, chips */
--radius:    10px;     /* cards, panels */
--radius-lg: 16px;     /* modals, hero cards */

--rail-width: 3px;     /* the amber signature rail */
--page-gutter: clamp(16px, 3vw, 40px);
--transition:  120ms cubic-bezier(0.4, 0, 0.2, 1);

--shadow-sm: 0 1px 2px rgba(2,6,16,.5);          /* light: 0 1px 2px rgba(16,26,46,.06) */
--shadow-md: 0 6px 20px -6px rgba(2,6,16,.7);    /* light: 0 6px 20px -6px rgba(16,26,46,.14) */
--shadow-lg: 0 24px 60px -12px rgba(2,6,16,.85); /* light: 0 24px 60px -12px rgba(16,26,46,.22) */
```

Spacing rhythm observed in the product: control padding `8px 15px`, card padding
`16–20px`, section gaps `14–22px`. The marketing site adds section vertical
rhythm of `clamp(64px, 10vw, 128px)` — larger whitespace between marketing
sections, same inner spacing inside components.

---

## Component patterns (reused, not reinvented)

Taken straight from the product so marketing UI is literally the product's UI:

- **Buttons** — `.btn` (accent fill, `radius-sm`, weight 600), `.btn-secondary`
  (raised surface + strong border, accent border on hover), `.btn-ghost`
  (transparent → raised on hover). Primary CTAs use the accent fill.
- **Cards / panels** — `.card` / `.panel` on `--surface` with `--border`,
  `radius`; `.panel-head` sits on `--surface-sunken`. Hover lifts `translateY(-1px)`
  + `--shadow-md` + `--border-strong` (from `.project-card`).
- **The amber rail** — `position:absolute; inset:0 auto 0 0; width:var(--rail-width); background:var(--unread)`.
  Drawn *only* when something is genuinely new/waiting. This is the one device to
  reach for when the marketing narrative says "this would have been missed."
- **Badges / chips** — `.badge-unread` (amber pill + dot), `.chip`, `.token-chip`
  (mono, copy-on-click, turns `--success` when copied).
- **Snippets** — `.snippet` on `--code-bg`, mono `12.5px`, copy button top-right
  that turns green on copy. This is the embed one-liner's native home.
- **Inputs** — `.input/.select/.textarea` on `--surface-sunken`, focus ring
  `0 0 0 3px var(--accent-soft)` + accent border.
- **Segmented control** — `.segmented` for toggles (e.g. plan/theme demos).
- **Nav** — sticky, `height:58px`, `backdrop-filter: blur(12px)`, translucent
  `--bg`, bottom hairline. The marketing nav matches.

### Interactive states

- One focus treatment everywhere, always visible: `outline: 2px solid var(--accent); outline-offset: 2px`.
- Transitions are `--transition` (120ms) on color/background/border/transform only.
- `@media (prefers-reduced-motion: reduce)` collapses all animation to `0.01ms`.
  Every marketing animation must respect this.

---

## Motion principles (marketing)

Rich but disciplined — animation must never block LCP or shift layout (CLS = 0).

- **Entrance:** scroll-reveal with a short upward translate + fade
  (`opacity 0→1`, `translateY(16px→0)`), staggered `~60ms` per item. Runs once.
- **The rail draws itself.** The hero's signature amber rail animates its height
  in (`scaleY`) on load — the one orchestrated moment. Everything else is quiet.
- **Hover** micro-interactions reuse the product's `translateY(-1px)` lift.
- **Lottie** is reserved for a single illustrative hero moment; it is lazy and
  never on the critical path for text/LCP.
- Honour `prefers-reduced-motion`: reveals become instant, the rail appears
  drawn, Lottie holds a static frame.

---

## Do / Don't

- **Do** keep amber exclusively for "waiting for you / would-have-been-missed."
- **Do** use mono for tokens, the embed snippet, stats, and timestamps.
- **Don't** introduce a webfont, a new accent hue, or gradients the product
  doesn't use.
- **Don't** let a marketing heading adopt a face or weight the product doesn't ship.
- **Don't** draw the amber rail decoratively — it must always mean the one thing.
