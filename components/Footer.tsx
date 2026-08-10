// Site footer. Semantic <footer> landmark, links both audience pages and the
// app, and restates the one-line pitch. Quiet by design — the product's muted
// palette, a single hairline at the top.

import Link from 'next/link';
import { Logo } from './Logo';
import { APP_URL, NAV_LINKS, SITE_NAME } from '@/lib/site';

export function Footer() {
  const year = 2026;
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        background: 'var(--bg-alt)',
        paddingTop: 56,
        paddingBottom: 40,
      }}
    >
      <div
        className="page-x"
        style={{ maxWidth: 1120, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 40, justifyContent: 'space-between' }}
      >
        <div style={{ maxWidth: 320 }}>
          <Link href="/" aria-label="EasyContactForms home" style={{ color: 'var(--text)' }}>
            <Logo />
          </Link>
          <p style={{ color: 'var(--text-muted)', fontSize: 14, marginTop: 14, marginBottom: 0 }}>
            An inbox for the messages your website receives — hosted for site
            owners, self-hostable for developers.
          </p>
        </div>

        <nav aria-label="Footer" style={{ display: 'flex', gap: 56, flexWrap: 'wrap' }}>
          <FooterColumn title="Product">
            {NAV_LINKS.map((l) => (
              <Link key={l.path} href={l.path} style={linkStyle}>
                {l.nav}
              </Link>
            ))}
          </FooterColumn>
          <FooterColumn title="Get started">
            <a href={`${APP_URL}/register`} style={linkStyle}>
              Create an account
            </a>
            <a href={`${APP_URL}/login`} style={linkStyle}>
              Sign in
            </a>
          </FooterColumn>
        </nav>
      </div>

      <div
        className="page-x"
        style={{
          maxWidth: 1120,
          margin: '40px auto 0',
          paddingTop: 20,
          borderTop: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 12,
          color: 'var(--text-muted)',
          fontSize: 13,
        }}
      >
        <span>
          © {year} {SITE_NAME}
        </span>
        <span className="mono" style={{ fontSize: 12 }}>
          Blue means click · amber means waiting for you
        </span>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <span className="eyebrow" style={{ marginBottom: 2 }}>
        {title}
      </span>
      {children}
    </div>
  );
}

const linkStyle: React.CSSProperties = {
  color: 'var(--text-dim)',
  fontSize: 14,
  fontWeight: 500,
};
