// Repeated closing call-to-action. Carries the amber rail on its leading edge —
// the one place the marketing site is allowed to reuse the signature outside a
// literal "unread" context, because the message is the same: someone is waiting,
// don't leave them.

import { Reveal, RevealItem } from './Reveal';

export function CtaBand({
  title,
  lead,
  primary,
  secondary,
}: {
  title: string;
  lead: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <Reveal stagger>
      <div
        className="surface-card"
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: 'clamp(28px, 5vw, 52px)',
          boxShadow: 'var(--shadow-md)',
        }}
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
        <div style={{ maxWidth: 640, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <RevealItem as="h2">
            <span style={{ fontSize: 'var(--fs-h1)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.1 }}>
              {title}
            </span>
          </RevealItem>
          <RevealItem>
            <p style={{ margin: 0, fontSize: 'var(--fs-lead)', color: 'var(--text-dim)' }}>{lead}</p>
          </RevealItem>
          <RevealItem>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 4 }}>
              <a className="btn" href={primary.href}>
                {primary.label}
              </a>
              {secondary ? (
                <a className="btn btn-secondary" href={secondary.href}>
                  {secondary.label}
                </a>
              ) : null}
            </div>
          </RevealItem>
        </div>
      </div>
    </Reveal>
  );
}
