import type { Metadata } from 'next';
import { SiteNav } from '@/components/SiteNav';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal, RevealItem } from '@/components/Reveal';
import { BenefitCard, FeatureCard, StatTile } from '@/components/Cards';
import { CodeSnippet } from '@/components/CodeSnippet';
import { Faq, type QA } from '@/components/Faq';
import { CtaBand } from '@/components/CtaBand';
import { JsonLd, faqSchema } from '@/components/JsonLd';
import { DevHero } from '@/components/pages/DevHero';
import { APP_URL, PAGES, SITE_NAME, SITE_URL } from '@/lib/site';

const url = `${SITE_URL}${PAGES.developers.path}`;

export const metadata: Metadata = {
  title: 'A Form Backend You Own',
  description:
    'Drop-in contact forms with a dependency-free PHP backend you can self-host. One script tag, no build step, unguessable IDs, your data in your database. A Formspree alternative you control.',
  alternates: { canonical: PAGES.developers.path },
  openGraph: {
    title: 'A form backend you actually own',
    description:
      'Dependency-free PHP, self-hostable, own-your-data. One script tag or a React component — no build step, secure IDs by default.',
    url,
    type: 'website',
  },
  twitter: {
    title: 'A form backend you actually own',
    description: 'Dependency-free PHP, self-hostable, one script tag. A Formspree alternative you control.',
  },
};

const FAQ_ITEMS: QA[] = [
  {
    q: 'Can I self-host, or is it hosted only?',
    a: 'Both. The backend is dependency-free PHP 8 over MySQL/MariaDB — clone the repo, point it at a database, serve the directory. There is a hosted API at api.easycontactforms.com if you would rather not run anything, but nothing forces you to: self-host and every submission stays in your own database.',
  },
  {
    q: 'What are the actual dependencies?',
    a: 'None to speak of. No Composer packages, no framework, no build tooling. Every request routes through a single index.php. A fresh install is a database.sql import; upgrades run an idempotent migration runner that records what it has applied and never rewrites existing tokens, so snippets already live on customer sites keep working.',
  },
  {
    q: 'How does the embed work without a build step?',
    a: 'It is vanilla JavaScript served from a CDN. Add a <div data-easycontact="TOKEN"> and one <script> tag and the form mounts itself on load — theme (auto/light/dark), layout (inline or full-page), alignment and offset are all HTML data-attributes. There is a matching React <ContactForm> component that renders identically for app codebases.',
  },
  {
    q: 'Is it secure by default?',
    a: 'Yes, and deliberately so. Every identifier that leaves the server is a random UUIDv4 or hex token — never a sequential auto-increment id you could walk. Dashboard endpoints return an identical 404 whether a record is missing or simply belongs to someone else, so an attacker can’t probe for which IDs exist, and scoping is enforced server-side, never left to a caller’s query.',
  },
  {
    q: 'What happens if the API has a bad minute?',
    a: 'The widget degrades gracefully. If it can’t fetch a form’s field definition, it renders the classic name / email / message fields — which the backend still accepts — instead of showing a visitor a blank space. A slow API never becomes a broken contact page.',
  },
  {
    q: 'Why not just use a hosted form SaaS?',
    a: 'You can — but you rent it. Per-submission pricing scales against you, your submissions live on their servers, and the embed is a script you can’t read. Owning the backend removes the recurring cost, keeps the data (and your GDPR posture) on your infrastructure, and gives you code you can audit and extend.',
  },
];

export default function DevelopersPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: `${SITE_NAME} API`,
          applicationCategory: 'DeveloperApplication',
          operatingSystem: 'PHP 8, MySQL/MariaDB, any browser',
          description:
            'A dependency-free PHP contact-form backend and a single-script embed widget. Self-hostable, own-your-data, with unguessable IDs and secure-by-default authorization.',
          url,
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        }}
      />
      <JsonLd data={faqSchema(FAQ_ITEMS)} />

      <SiteNav />
      <main>
        <DevHero />

        {/* Own your stack */}
        <Section id="own" tone="alt" ariaLabel="Own your stack">
          <SectionHeading
            eyebrow="The wedge"
            title="Rent a form service, or own the backend."
            lead="Most form tools are hosted-only: you pay per submission, your data sits on their servers, and the embed is a black box. This is the other option."
          />
          <Reveal stagger>
            <div className="ecf-grid" style={{ marginTop: 40, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
              <BenefitCard kicker="Saved money" title="No per-submission tax">
                Self-host on a server you already pay for and the recurring form-SaaS bill
                goes to zero. For an agency running many client sites, the saving compounds
                per site.
              </BenefitCard>
              <BenefitCard kicker="Saved time" title="Drop-in, not stand-up">
                A working, validated, spam-protected form in the time it takes to paste two
                lines — versus writing a POST handler, storage, validation and an admin view
                yourself.
              </BenefitCard>
              <BenefitCard kicker="Saved nerves" title="Your data, your rules" rail>
                Submissions land in your database. Nothing leaves your infrastructure, so
                your GDPR and data-residency story is simply “it’s on our server.”
              </BenefitCard>
            </div>
          </Reveal>
        </Section>

        {/* The embed, in detail */}
        <Section id="embed" ariaLabel="The embed">
          <div className="ecf-grid-2" style={{ gap: 'clamp(28px, 5vw, 56px)' }}>
            <SectionHeading
              eyebrow="One tag, any page"
              title="Static site, Jamstack, or plain HTML — it just mounts."
              lead="No bundler, no npm install. Configure everything through data-attributes; the widget reads them and renders itself."
            />
            <Reveal>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div>
                  <div className="eyebrow" style={{ marginBottom: 8 }}>
                    Full-page contact section
                  </div>
                  <CodeSnippet
                    code={`<div data-easycontact="f3a9c1b7e2d4"
     data-easycontact-theme="dark"
     data-easycontact-layout="page"
     data-easycontact-heading="Get in touch"></div>`}
                    ariaLabel="A full-page embed configured with data-attributes"
                  />
                </div>
                <div>
                  <div className="eyebrow" style={{ marginBottom: 8 }}>
                    Inside a React app
                  </div>
                  <CodeSnippet
                    code={`import { ContactForm } from './ContactForm';

<ContactForm token="f3a9c1b7e2d4" theme="auto" />`}
                    ariaLabel="The matching React component"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* Security / correctness proof */}
        <Section tone="alt" ariaLabel="Built right">
          <SectionHeading
            eyebrow="Done right, so you don’t have to"
            title="The security-sensitive parts, handled."
            lead="The details that are easy to get wrong when you roll your own — and expensive when you do."
          />
          <Reveal stagger>
            <div className="ecf-grid" style={{ marginTop: 40 }}>
              <FeatureCard glyph="#" title="Unguessable identifiers">
                Every external ID is a random UUIDv4 or hex token. Sequential auto-increment
                keys never leave the server, so nobody can walk to a neighbouring record.
              </FeatureCard>
              <FeatureCard glyph="404" title="Uniform 404 authorization">
                Missing row or not yours? Identical 404. A 403 would confirm the ID exists —
                exactly what an attacker is fishing for. Scoping is enforced server-side.
              </FeatureCard>
              <FeatureCard glyph="⛨" title="Honeypot spam protection">
                A hidden field silently drops bots at submit time. No CAPTCHA, no third-party
                risk-scoring, no friction for real visitors.
              </FeatureCard>
              <FeatureCard glyph="↺" title="Idempotent migrations">
                The migration runner records what it applied and is safe to run twice. It
                converts a pre-forms database in place without changing existing tokens.
              </FeatureCard>
              <FeatureCard glyph="⤓" title="Graceful fallback fields">
                If a form’s config can’t be fetched, the widget renders classic
                name/email/message fields the backend still accepts — never a blank page.
              </FeatureCard>
              <FeatureCard glyph="⧉" title="Multi-form data model">
                Projects own forms; forms own ordered field definitions; submissions
                snapshot field labels and types, so editing a form never rewrites history.
              </FeatureCard>
            </div>
          </Reveal>
        </Section>

        {/* Stat strip */}
        <Section tone="sunken" ariaLabel="At a glance" style={{ paddingTop: 'clamp(48px, 7vw, 88px)', paddingBottom: 'clamp(48px, 7vw, 88px)' }}>
          <Reveal stagger>
            <div className="ecf-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 28 }}>
              <StatTile value="0" label="runtime dependencies — no Composer, no framework, no build" />
              <StatTile value="2 lines" label="to embed on any page you control" />
              <StatTile value="UUIDv4" label="on every identifier that leaves the server" accent="unread" />
              <StatTile value="1 cmd" label="idempotent migration to upgrade an existing install" />
            </div>
          </Reveal>
        </Section>

        {/* FAQ */}
        <Section ariaLabel="Frequently asked questions">
          <SectionHeading eyebrow="Questions" title="What developers ask first." />
          <div style={{ marginTop: 36 }}>
            <Faq items={FAQ_ITEMS} />
          </div>
        </Section>

        {/* Closing CTA */}
        <Section tone="alt" ariaLabel="Get started">
          <CtaBand
            title="Own the form backend. Ship in two lines."
            lead="Grab a token, paste the snippet, and self-host whenever you’re ready — the data’s yours either way."
            primary={{ label: 'Create an account', href: `${APP_URL}/register` }}
            secondary={{ label: 'For site owners →', href: PAGES.business.path }}
          />
        </Section>
      </main>
      <Footer />
    </>
  );
}
