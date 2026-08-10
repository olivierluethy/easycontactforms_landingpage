# SEO Plan

One codebase, two indexable landing pages plus a minimal index. Domain assumed
`https://easycontactforms.com` (the apex is the marketing home; `app.` and `api.`
are the product's existing subdomains). Each page targets a distinct intent cluster so the two pages
don't cannibalise each other's keywords.

## Positioning angles explored (brainstorm → resolved)

For each page several angles were generated and one was chosen; the rest are
logged so the choice is traceable.

**Business page** — candidates: (a) "never miss a message" / missed-lead fear;
(b) "an inbox for your website, not another email forward"; (c) "no-code contact
form in 60 seconds". **Chosen: (a)+(b) fused** — lead with the fear of the missed
enquiry (the amber-rail signature *is* this), prove it with the "inbox not
forwarder" mechanism. It's the most emotional and the most differentiated.

**Developer page** — candidates: (a) "a form backend you own"; (b) "contact form,
no backend, no build step"; (c) "self-hosted Formspree alternative". **Chosen:
(a) as headline, (b) as the proof, (c) as the SEO capture** — ownership is the
durable wedge SaaS rivals can't copy; the no-build embed is the instant gratifier;
the "alternative" phrasing catches high-intent comparison search.

---

## Page: `/` (index)

- **Role:** thin router/hub, not a ranking target. `noindex` is *not* used —
  it stays indexable and canonical to itself, but carries minimal copy and links
  to both product pages (internal-link equity).
- **Title:** `EasyContactForms — the inbox for your website's messages`
- **Meta:** `Contact-form submissions that never get lost. A hosted inbox for
  site owners, and a self-hostable form backend for developers. Dark mode, no
  spam, live in minutes.`

---

## Page: `/easycontactforms` (business / no-code)

- **Search intent:** site owners looking to add/repair a contact form and stop
  losing enquiries.
- **Primary keyword:** `contact form for your website`
- **Secondary:** `no-code contact form`, `contact form inbox`, `never miss a
  contact form submission`, `contact form without email`, `contact form spam
  protection`, `embeddable contact form`, `contact form dashboard`.
- **Title tag (≤60):** `Contact Forms That Never Lose a Message | EasyContactForms`
- **Meta description (≤155):** `Add a contact form to any website and see every
  message in one inbox — unread ones flagged, spam filtered, replies in a click.
  No code. Dark mode. Live in minutes.`
- **Differentiating angle:** *An inbox, not an email forward.* Competitors email
  you the submission and hope it arrives; here the submission is the record and
  the amber rail shows what's still waiting on you.
- **Structured data:** `SoftwareApplication` (category `BusinessApplication`) +
  `FAQPage`.
- **OG/Twitter:** title "Never miss a message from your website again", summary
  card, generated OG image using product palette.

---

## Page: `/developers` (developer / self-host + API)

- **Search intent:** developers wanting a form backend, evaluating/replacing form
  SaaS, or wanting to self-host.
- **Primary keyword:** `form backend`
- **Secondary:** `self-hosted contact form`, `PHP contact form API`, `Formspree
  alternative`, `contact form API`, `embeddable form widget`, `contact form no
  backend`, `own your form data`, `GDPR contact form`.
- **Title tag (≤60):** `A Form Backend You Own | EasyContactForms API`
- **Meta description (≤155):** `Drop-in contact forms with a dependency-free PHP
  backend you can self-host. One script tag, no build step, unguessable IDs, your
  data in your database. A Formspree alternative you control.`
- **Differentiating angle:** *Own your stack.* Dependency-free PHP, self-hostable,
  own-your-data, secure-by-default IDs — the lane hosted-only rivals can't enter.
- **Structured data:** `SoftwareApplication` (category `DeveloperApplication`) +
  `FAQPage`.
- **OG/Twitter:** title "A form backend you actually own", code-forward OG image.

---

## Technical SEO checklist (implemented site-wide)

- Next.js **Metadata API** per route: `title`, `description`, `alternates.canonical`,
  `openGraph`, `twitter`. Root `metadataBase` set.
- **JSON-LD**: `SoftwareApplication`/`Product` per page + `FAQPage` from the FAQ
  content; `Organization`/`WebSite` on the index.
- **`app/sitemap.ts`** listing `/`, `/easycontactforms`, `/developers`.
- **`app/robots.ts`** allowing all, pointing at the sitemap.
- **Canonical URLs** absolute, per page.
- **Semantic HTML**: one `<h1>` per page, `<header>/<main>/<section>/<footer>`
  landmarks, `<nav aria-label>`, FAQ as real `<details>`/headings.
- **Core Web Vitals**: system fonts (no webfont blocking), no layout shift (fixed
  aspect wrappers), Lottie lazy + off the LCP path, animations transform/opacity
  only. Target LCP < 2.5s, CLS ~0.
- **Images** via `next/image` (AVIF/WebP), OG images at 1200×630.
- **Accessibility as ranking hygiene**: visible focus, reduced-motion support,
  colour contrast from the product tokens.
- **Keywords land in**: H1, first paragraph, one H2 per secondary cluster, image
  alt text, and the meta — never stuffed.
