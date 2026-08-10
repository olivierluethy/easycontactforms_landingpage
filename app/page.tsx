import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteNav } from '@/components/SiteNav';
import { Footer } from '@/components/Footer';
import { Reveal, RevealItem } from '@/components/Reveal';
import { JsonLd } from '@/components/JsonLd';
import { PAGES, SITE_NAME, SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: `${SITE_NAME} — the inbox for your website's messages`,
  description:
    'Contact-form submissions that never get lost. A hosted inbox for site owners, and a self-hostable form backend for developers. Pick your path.',
  alternates: { canonical: '/' },
};

export default function IndexPage() {
  return (
    <>
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: SITE_NAME,
            url: SITE_URL,
            description:
              'A contact-form service: a hosted inbox for site owners and a self-hostable form backend for developers.',
          },
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: SITE_NAME,
            url: SITE_URL,
          },
        ]}
      />
      <SiteNav />
      <main>
        <section
          className="page-x"
          style={{
            maxWidth: 1120,
            margin: '0 auto',
            minHeight: 'calc(100vh - 58px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingTop: 'clamp(48px, 8vw, 80px)',
            paddingBottom: 'clamp(48px, 8vw, 80px)',
          }}
        >
          <Reveal stagger>
            <RevealItem>
              <span className="eyebrow">
                <span aria-hidden style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--unread)', display: 'inline-block' }} />
                Blue means click · amber means waiting for you
              </span>
            </RevealItem>
            <RevealItem as="h1">
              <span
                style={{
                  display: 'block',
                  fontSize: 'var(--fs-display)',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.05,
                  margin: '16px 0 0',
                  maxWidth: 820,
                }}
              >
                The inbox for the messages your website receives.
              </span>
            </RevealItem>
            <RevealItem>
              <p style={{ fontSize: 'var(--fs-lead)', color: 'var(--text-dim)', margin: '18px 0 0', maxWidth: 620 }}>
                Every contact-form submission, saved the instant it&apos;s sent and flagged
                until you&apos;ve answered. Two ways in — pick the one that&apos;s you.
              </p>
            </RevealItem>

            <RevealItem>
              <div
                className="ecf-grid-2"
                style={{ marginTop: 44, gap: 20, alignItems: 'stretch' }}
              >
                <PathCard
                  href={PAGES.business.path}
                  eyebrow="For site owners"
                  title="Never miss a message"
                  body="A no-code inbox for your website’s enquiries. Paste one line, see every message, reply in a click — spam filtered, nothing lost."
                  cta="See the inbox"
                  rail
                />
                <PathCard
                  href={PAGES.developers.path}
                  eyebrow="For developers"
                  title="A form backend you own"
                  body="Dependency-free PHP you can self-host, plus a one-tag embed. No build step, unguessable IDs, your data in your database."
                  cta="See the API"
                />
              </div>
            </RevealItem>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}

function PathCard({
  href,
  eyebrow,
  title,
  body,
  cta,
  rail = false,
}: {
  href: string;
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  rail?: boolean;
}) {
  return (
    <Link href={href} className="ecf-lift" style={{ display: 'block', height: '100%' }}>
      <div
        className="surface-card"
        style={{ position: 'relative', overflow: 'hidden', padding: '26px 26px 24px', height: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}
      >
        {rail ? (
          <span
            aria-hidden
            style={{ position: 'absolute', insetBlock: 0, insetInlineStart: 0, width: 'var(--rail-width)', background: 'var(--unread)' }}
          />
        ) : null}
        <span className="eyebrow" style={{ color: rail ? 'var(--unread-text)' : 'var(--text-muted)' }}>
          {eyebrow}
        </span>
        <h2 style={{ fontSize: 'var(--fs-h2)', fontWeight: 700, letterSpacing: '-0.02em', margin: 0 }}>{title}</h2>
        <p style={{ margin: 0, color: 'var(--text-dim)', fontSize: 15, lineHeight: 1.6, flex: 1 }}>{body}</p>
        <span style={{ color: 'var(--accent)', fontWeight: 600, fontSize: 14.5, marginTop: 4 }}>{cta} →</span>
      </div>
    </Link>
  );
}
