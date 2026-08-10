import type { Metadata } from 'next';
import { SiteNav } from '@/components/SiteNav';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal, RevealItem } from '@/components/Reveal';
import { BenefitCard, FeatureCard, StatTile } from '@/components/Cards';
import { Faq, type QA } from '@/components/Faq';
import { CtaBand } from '@/components/CtaBand';
import { JsonLd, faqSchema } from '@/components/JsonLd';
import { BusinessHero } from '@/components/pages/BusinessHero';
import { WaitingPing } from '@/components/WaitingPing';
import { APP_URL, PAGES, SITE_NAME, SITE_URL } from '@/lib/site';

const url = `${SITE_URL}${PAGES.business.path}`;

export const metadata: Metadata = {
  title: 'Contact Forms That Never Lose a Message',
  description:
    'Add a contact form to any website and see every message in one inbox — unread ones flagged, spam filtered, replies in a click. No code. Dark mode. Live in minutes.',
  alternates: { canonical: PAGES.business.path },
  openGraph: {
    title: 'Never miss a message from your website again',
    description:
      'A contact form that gives you an inbox, not another email that gets lost. Unread enquiries flagged in amber, spam filtered, replies in a click.',
    url,
    type: 'website',
  },
  twitter: {
    title: 'Never miss a message from your website again',
    description: 'A contact form that gives you an inbox, not another email that gets lost.',
  },
};

const FAQ_ITEMS: QA[] = [
  {
    q: 'Do I need to know how to code?',
    a: 'No. You copy one line into your site — the same way you would add Google Analytics — and the form appears. If you can paste a snippet into your website builder or your HTML, you can use EasyContactForms. Works with Webflow, WordPress, Wix, Squarespace, Shopify and plain HTML.',
  },
  {
    q: 'How is this different from just getting form emails?',
    a: 'Form emails are one-way and unreliable: they land in spam, get buried, or never arrive because of a typo in a forwarding address. Here the submission is saved the instant it is made and shown in a dashboard, so it exists whether or not any email is delivered. The ones you have not dealt with are flagged in amber, so you always know what is still waiting on you.',
  },
  {
    q: 'Will it stop spam?',
    a: 'Yes. Every form includes a hidden honeypot field that silently catches automated bots, so junk never reaches your inbox — and real visitors never face a CAPTCHA.',
  },
  {
    q: 'Can I manage more than one website?',
    a: 'Yes. Each website is its own project with its own forms, branding and inbox, kept cleanly separate. It is built for freelancers and agencies juggling several client sites as much as for a single business.',
  },
  {
    q: 'Can I change what the form asks for?',
    a: 'Any time. The built-in form builder lets you add, rename, reorder and require fields — text, email, phone or a longer message — with no redeploy. You can even run several forms on one site, like a contact form and a quote request, all landing in the same inbox.',
  },
  {
    q: 'Does it match my site and support dark mode?',
    a: 'The form adopts your visitor’s light or dark preference automatically and stays out of the way visually, and you can set your logo and reply-from identity so replies look like they came from you.',
  },
];

export default function BusinessPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: SITE_NAME,
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
          description:
            'A hosted inbox for the messages your website’s contact form receives. Unread enquiries are flagged, spam is filtered, and you can reply in a click — no code required.',
          url,
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        }}
      />
      <JsonLd data={faqSchema(FAQ_ITEMS)} />

      <SiteNav />
      <main>
        <BusinessHero />

        {/* The problem, in the customer's words */}
        <Section tone="alt" ariaLabel="The problem">
          <div className="ecf-grid-2" style={{ gap: 'clamp(28px, 5vw, 64px)' }}>
            <SectionHeading
              eyebrow="The quiet leak"
              title="The enquiry you never saw was a customer you never got."
              lead="It doesn’t announce itself. A form emails you, the email lands in spam or never sends, and weeks later you find out someone tried to hire you — and gave up when you didn’t reply."
            />
            <Reveal>
              <figure
                className="surface-card"
                style={{ position: 'relative', overflow: 'hidden', padding: '24px 26px', margin: 0 }}
              >
                <span
                  aria-hidden
                  style={{
                    position: 'absolute',
                    insetBlock: 0,
                    insetInlineStart: 0,
                    width: 'var(--rail-width)',
                    background: 'var(--unread)',
                  }}
                />
                <blockquote style={{ margin: 0, fontSize: 18, lineHeight: 1.5, letterSpacing: '-0.01em' }}>
                  “I found out three of my contact-form messages had gone to spam for a
                  <span style={{ color: 'var(--unread-text)' }}> month</span>. One was a
                  £4,000 job. I didn’t reply, so they went elsewhere.”
                </blockquote>
                <figcaption style={{ marginTop: 16, fontSize: 13.5, color: 'var(--text-muted)' }}>
                  — the exact problem EasyContactForms exists to end
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </Section>

        {/* How it works */}
        <Section id="how" ariaLabel="How it works">
          <SectionHeading
            eyebrow="Three steps"
            title="Paste one line. Get an inbox. Reply."
            lead="From nothing to a working, spam-protected contact form in the time it takes to make a coffee."
            align="center"
          />
          <Reveal stagger>
            <ol
              className="ecf-grid"
              style={{ listStyle: 'none', padding: 0, margin: '40px 0 0', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}
            >
              {STEPS.map((step, i) => (
                <RevealItem as="li" key={step.title}>
                  <div className="surface-card" style={{ padding: '22px 22px', height: '100%' }}>
                    <span
                      className="mono"
                      aria-hidden
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: 'var(--accent)',
                        border: '1px solid var(--border)',
                        borderRadius: 6,
                        padding: '2px 8px',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 style={{ fontSize: 16.5, fontWeight: 700, letterSpacing: '-0.02em', margin: '14px 0 8px' }}>
                      {step.title}
                    </h3>
                    <p style={{ margin: 0, color: 'var(--text-dim)', fontSize: 14.5, lineHeight: 1.6 }}>
                      {step.body}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </ol>
          </Reveal>
        </Section>

        {/* Signature moment: the amber "waiting" ping */}
        <Section ariaLabel="What the amber rail means" style={{ paddingTop: 'clamp(40px, 6vw, 72px)', paddingBottom: 'clamp(40px, 6vw, 72px)' }}>
          <Reveal>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: 18,
                maxWidth: 620,
                margin: '0 auto',
              }}
            >
              <WaitingPing size={132} />
              <h2 style={{ fontSize: 'var(--fs-h2)', fontWeight: 700, letterSpacing: '-0.02em', margin: 0 }}>
                Amber means someone is waiting for you.
              </h2>
              <p style={{ margin: 0, color: 'var(--text-dim)', fontSize: 'var(--fs-lead)' }}>
                It&apos;s the one colour the interface reserves for a real person who
                reached out and hasn&apos;t heard back. When it&apos;s gone, you&apos;re
                caught up — and you never had to wonder.
              </p>
            </div>
          </Reveal>
        </Section>

        {/* Benefits: time / money / nerves */}
        <Section tone="alt" ariaLabel="What you get back">
          <SectionHeading
            eyebrow="What you get back"
            title="Saved time. Saved money. Saved nerves."
            lead="The point isn’t features — it’s what a contact form should have been giving you all along."
          />
          <Reveal stagger>
            <div className="ecf-grid" style={{ marginTop: 40, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
              <BenefitCard kicker="Saved time" title="Triage at a glance">
                Unread messages wear an amber rail, so you see what needs you without
                reading a single row. Search, filter and per-form tabs turn a pile of
                emails into a two-minute review.
              </BenefitCard>
              <BenefitCard kicker="Saved money" title="One tool, not three">
                Replaces a DIY form backend, a separate form service’s per-submission
                fees, and the automation glue between them. No lost leads, no stacked
                subscriptions.
              </BenefitCard>
              <BenefitCard kicker="Saved nerves" title="Certainty nothing was missed" rail>
                The amber rail is peace of mind you can see. When it’s gone, everyone has
                had a reply. No more wondering whether the form even works.
              </BenefitCard>
            </div>
          </Reveal>
        </Section>

        {/* Proof: features as evidence */}
        <Section ariaLabel="Features">
          <SectionHeading
            eyebrow="How it delivers"
            title="Everything that makes “nothing gets lost” true."
            lead="Each of these is here for one reason: to make sure a real person’s message reaches you and gets answered."
          />
          <Reveal stagger>
            <div className="ecf-grid" style={{ marginTop: 40 }}>
              <FeatureCard glyph="✎" title="No-code form builder">
                Add, rename, reorder and require fields — text, email, phone, message —
                without touching code or redeploying.
              </FeatureCard>
              <FeatureCard glyph="⧉" title="Many forms, one inbox">
                Run a contact form and a quote request side by side; every submission
                lands in the same organised inbox.
              </FeatureCard>
              <FeatureCard glyph="⛨" title="Spam filtered silently">
                A hidden honeypot drops bots automatically — no CAPTCHA friction for the
                real visitors you want to hear from.
              </FeatureCard>
              <FeatureCard glyph="↩" title="Reply in a click">
                Answer from a branded sender address without leaving the dashboard, so you
                look professional and reply faster.
              </FeatureCard>
              <FeatureCard glyph="⧉" title="Copy any detail instantly">
                Every field in a message is its own copyable value — grab an email, a phone
                number or an order number in one tap.
              </FeatureCard>
              <FeatureCard glyph="◐" title="Light and dark, everywhere">
                The dashboard and the embedded form both follow light or dark preference,
                and the choice persists.
              </FeatureCard>
            </div>
          </Reveal>
        </Section>

        {/* Stat strip */}
        <Section tone="sunken" ariaLabel="At a glance" style={{ paddingTop: 'clamp(48px, 7vw, 88px)', paddingBottom: 'clamp(48px, 7vw, 88px)' }}>
          <Reveal stagger>
            <div
              className="ecf-grid"
              style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 28 }}
            >
              <StatTile value="1 line" label="of code to install — paste it and you’re live" />
              <StatTile value="0" label="messages that depend on an email being delivered" accent="unread" />
              <StatTile value="∞" label="forms and websites, each with its own inbox" />
              <StatTile value="2" label="themes — light and dark, chosen for the visitor automatically" />
            </div>
          </Reveal>
        </Section>

        {/* FAQ */}
        <Section ariaLabel="Frequently asked questions">
          <SectionHeading eyebrow="Questions" title="Everything you might be wondering." />
          <div style={{ marginTop: 36 }}>
            <Faq items={FAQ_ITEMS} />
          </div>
        </Section>

        {/* Closing CTA */}
        <Section tone="alt" ariaLabel="Get started">
          <CtaBand
            title="Stop losing the messages that matter."
            lead="Set up your first form in minutes and watch the enquiries land where you’ll actually see them."
            primary={{ label: 'Create your free account', href: `${APP_URL}/register` }}
            secondary={{ label: 'For developers →', href: PAGES.developers.path }}
          />
        </Section>
      </main>
      <Footer />
    </>
  );
}

const STEPS = [
  {
    title: 'Paste one snippet',
    body: 'Drop a single line into your site — no build step, no plugins. The form appears, styled and ready.',
  },
  {
    title: 'Messages land in your inbox',
    body: 'Every submission is saved the moment it’s sent and shown in your dashboard, with new ones flagged in amber.',
  },
  {
    title: 'Read, reply, done',
    body: 'Open a message, copy any detail, reply from your own address, and the amber rail clears. Nothing forgotten.',
  },
];
