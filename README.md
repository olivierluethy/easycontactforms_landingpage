# EasyContactForms — marketing site

Two conversion-focused landing pages for **EasyContactForms**, built in one
Next.js App Router + TypeScript codebase that shares a design system lifted
verbatim from the product itself.

- **`/easycontactforms`** — for non-technical site owners. Sells the *need*:
  never miss a message from your website.
- **`/developers`** — for developers & agencies. Sells the *need*: a form backend
  you actually own.
- **`/`** — a thin, indexable hub routing to both.

The two source products it sells (`../easycontactforms_frontend`, `../easycontactforms_api`)
are read-only sources of truth — this repo never modifies or restyles them.

## Stack

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lottie
React · next-themes. Dark mode (default) and light mode are full peers, driven by
`data-theme` on `<html>` to match the product. SEO via the Metadata API, JSON-LD
(`SoftwareApplication` + `FAQPage`), `sitemap.xml`, `robots.txt`, canonicals, and
per-page dynamic Open Graph images.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Docs

- [`docs/STYLEGUIDE.md`](docs/STYLEGUIDE.md) — the visual system, extracted from
  the shipped product. Single source of truth.
- [`docs/ANALYSIS.md`](docs/ANALYSIS.md) — what each product does, who it's for,
  and the time/money/nerves it saves.
- [`docs/SEO.md`](docs/SEO.md) — per-page keywords, titles, meta and positioning.

## Decisions taken

Logged as required; each was resolved autonomously by picking the strongest
option and moving on.

- **"Two projects" = the two EasyContactForms repos, one landing page each.** The
  workspace holds a single product split across `easycontactforms_frontend`
  (React dashboard) and `easycontactforms_api` (PHP backend + embed widget). Since
  the working directory is `easycontactforms_landingpage`, the scope is this
  product. The two repos map cleanly to two distinct *audiences* — site owners vs
  developers — so each becomes its own page with its own need-framing, sharing one
  design system.
- **Styleguide is extracted, not invented.** Every colour and type token comes
  from the product's `styles.css` and embed widget. The only additions are an
  *upward* extension of the type scale for hero sizes and a set of motion
  primitives — no restyle.
- **Signature = the amber rail.** The product reserves amber for "waiting for
  you". The whole marketing argument is "don't leave people waiting", so the rail
  became the site's signature (hero mock, CTA edge, the Lottie ping).
- **System fonts kept.** The product ships a system stack on purpose (no blocking
  webfont). The marketing site honours that; personality comes from scale,
  tracking and the signature, not a novelty face.
- **Copy language: English.** The product's UI, docs and widget are all English
  and the audience is international.
- **Canonical host is the apex `https://easycontactforms.com`.** The product's
  existing subdomains are `app.easycontactforms.com` (dashboard) and
  `api.easycontactforms.com` (backend + embed script); the marketing site takes
  the apex. Set in `lib/site.ts`.
- **Live form preview is a non-interactive still.** The developer hero shows the
  form the embed renders without posting anywhere — it's a preview, not a live
  endpoint.
