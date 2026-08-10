# Product Analysis

Deep read of the two source repositories in the workspace, treated as read-only
sources of truth. Both belong to one product — **EasyContactForms** — but they
serve two genuinely different buyers, which is why they get two landing pages.

- **`easycontactforms_frontend`** → the hosted dashboard (React SPA at
  `app.easycontactforms.com`). Sold to **non-technical site owners**.
- **`easycontactforms_api`** → the dependency-free PHP backend + drop-in embed
  widget (API at `api.easycontactforms.com`). Sold to **developers & agencies**.

> **Decision taken:** "two projects" resolves to these two repos, positioned to
> their two distinct audiences, sharing one design system. See README /
> Decisions taken.

---

## Product 1 — EasyContactForms (the inbox for your website's messages)

*Source: `easycontactforms_frontend`. Audience: freelancers, small businesses,
studios, anyone with a website and a contact form.*

### Purpose
A hosted place where every message your website's contact form receives lands,
gets organised, and can be acted on — built like an **inbox, not an analytics
dashboard**. You paste one snippet onto your site; enquiries show up in a
dashboard with an amber marker on everything you haven't dealt with yet.

### Target user
The person who owns the website but doesn't own a server: a freelance designer, a
plumber, a dentist's office, a Shopify/Webflow/Wix site owner, a small agency
managing several client sites. They are not going to wire up SMTP, parse form
POSTs, or fight spam filters.

### Jobs to be done
- "When someone fills in my contact form, I need to actually *see it* and reply —
  not lose it in a spam folder or a forwarded email that never arrived."
- "I run several sites/clients; I need each one's enquiries kept separate."
- "I need to know what's new at a glance without reading every row."
- "I need the form to match my site and not look like a third-party bolt-on."
- "I need to reply fast and look professional doing it."

### Pains removed
- **Missed enquiries = missed revenue.** Form-to-email is silently unreliable
  (deliverability, spam, typo'd forwarding address). Here nothing depends on an
  email being delivered — the submission is stored the instant it's made.
- **Inbox chaos.** Enquiries buried among newsletters and receipts. The dashboard
  is *only* enquiries, unread ones flagged amber (`is_read`/`read_at` in schema).
- **No idea what's outstanding.** The per-project and global unread counts answer
  "what needs me?" without reading anything.
- **Multi-site mess.** `projects` (one per site) each own their forms and
  branding, so client work stays cleanly separated.
- **Spam.** A honeypot field (`ecf-hp`) silently drops bots — no CAPTCHA friction
  for real visitors.
- **Ugly forms.** Per-project branding (logo/favicon, reply-from identity) and a
  form that auto-adopts light/dark.

### Gains delivered
- A real triage surface: search, filter by unread, per-form tabs, a submission
  drawer where every field value is individually copyable.
- A no-code **form builder**: add/reorder fields (text, email, phone, textarea),
  mark required — no redeploy. Field labels/types are *snapshotted per submission*
  so old messages never rewrite their own history.
- One-click **quick reply** from a branded sender address.
- Multiple forms per project (e.g. "Contact" + "Quote request") each with its own
  embed snippet, all landing in one inbox.
- Light/dark, fully responsive, keyboard-accessible.

### Quantified time / money / nerves saved
- **Time:** setup is paste-one-snippet (minutes) vs building and testing a
  mail-handling backend (hours to days). Triage-at-a-glance vs reading every email
  saves minutes on every visit; over a month of enquiries that's hours.
- **Money:** replaces a DIY backend *and* per-submission form SaaS pricing. No
  Zapier hop to route form → inbox. One flat service instead of three tools.
- **Nerves:** the amber rail is peace of mind — you can *see* nothing is
  unanswered. No more "did that contact form ever actually work?" dread, and no
  lost-lead panic.

---

## Product 2 — EasyContactForms API (a form backend you actually own)

*Source: `easycontactforms_api`. Audience: developers, agencies, indie hackers.*

### Purpose
A **dependency-free PHP 8 backend over MySQL/MariaDB** plus a **single-script
embed widget**. Drop `<div data-easycontact="TOKEN">` and one `<script>` onto any
page and a themed, validated, spam-protected form mounts itself — no build step,
no framework, no npm. Self-host it or use the hosted API; either way the data and
the code are yours.

### Target user
The developer who's been burned by form SaaS: monthly fees that scale with
submissions, data living on someone else's server, vendor lock-in, and a `<script>`
you can't read. Agencies shipping many client sites who want one backend they
control. Indie hackers who want to own their stack.

### Jobs to be done
- "I need a contact form on a static/Jamstack/plain-HTML site without standing up
  a server framework or a mail pipeline."
- "I want to self-host so the submissions live in *my* database."
- "I need it secure by default — no enumerable IDs, no leaking whether a record
  exists."
- "I need one embed that works identically as a script tag *and* inside React."
- "I need it to keep working when my API has a bad minute."

### Pains removed
- **Backend boilerplate.** Every request routes through one `index.php`; the whole
  thing is dependency-free PHP — clone, point at a MySQL DB, serve. `database.sql`
  for fresh installs, an **idempotent migration runner** for upgrades that never
  touches existing tokens (snippets already live on customer sites keep working).
- **SaaS tax & lock-in.** Self-hostable; you own the data. No per-submission
  billing, no plan tiers gating fields.
- **Security foot-guns, handled:** every external identifier is a random UUIDv4 /
  hex token (never a sequential `AUTO_INCREMENT`); dashboard endpoints return an
  **identical 404** whether a row is missing or simply isn't yours, so an attacker
  can't fish for which IDs exist; scoping is enforced server-side via
  `require_project/form/submission`, never left to a caller's `WHERE`.
- **Build-step friction.** The widget is vanilla JS served from a CDN — no bundler.
  Palette (auto/light/dark), layout (inline / full-page), alignment and offset are
  all HTML data-attributes.
- **Fragility.** If `/form/config` can't be fetched, the widget renders classic
  name/email/message fallback fields instead of a blank space. Honeypot spam
  protection. Per-type length limits and email/phone validation client-side.

### Gains delivered
- **True drop-in:** one div + one script tag, or the matching React `<ContactForm>`
  (identical rendering, kept in sync by design).
- **Public, unauthenticated submit** endpoint built to be called from sites you
  don't control, accepting three payload shapes so old and new embeds coexist.
- **Multi-form, multi-project** data model with field definitions and per-submission
  value snapshots.
- **Own your data / GDPR posture:** self-host and nothing leaves your server.
- A documented, real deployment path (cPanel/SSH) and a hard-won
  TROUBLESHOOTING.md.

### Quantified time / money / nerves saved
- **Time:** a working, spam-protected, themed, validated form in the time it takes
  to paste two lines — vs writing a POST handler, validation, spam filtering,
  storage, and an admin view yourself (easily a day or more). Idempotent migrations
  make upgrades a single command.
- **Money:** self-hosting on a server you already pay for eliminates recurring
  per-submission form-SaaS fees entirely; for an agency across many client sites
  the saving compounds per site.
- **Nerves:** you own the code and the database; unguessable IDs and uniform-404
  authorization mean the security-sensitive parts are done right; the fallback
  form means a bad API minute never shows a visitor a blank page.

---

## Competitive landscape (shared)

Direct: **Formspree, Basin, Getform, Formspark, Formcarry, Web3Forms, Netlify
Forms**. Adjacent: Google Forms, Typeform, Jotform (heavier, form-first, not
"inbox for your existing site").

**Positioning gaps to exploit:**
1. Most competitors are *email forwarders* — they email you the submission and
   hope it arrives. EasyContactForms is an **inbox with unread state**: the
   submission is the record, not the email. Own the word *inbox*.
2. Competitors are hosted-only SaaS. The API product's **self-host + own-your-data
   + dependency-free PHP** angle is a lane most rivals can't follow.
3. The **amber "waiting for you" rail** is a genuinely ownable visual/emotional
   idea competitors don't have — turn it into the brand.
