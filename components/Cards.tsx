// Content cards shared by both landing pages. All are Reveal children so a
// parent grid can stagger them. Styling comes straight from the product's
// .card / .project-card patterns, including the hover lift.

'use client';

import type { ReactNode } from 'react';
import { RevealItem } from './Reveal';

// A benefit framed as an outcome (time / money / nerves). The `rail` variant
// marks it with the amber signature for the single most important benefit.
export function BenefitCard({
  kicker,
  title,
  children,
  rail = false,
}: {
  kicker: string;
  title: string;
  children: ReactNode;
  rail?: boolean;
}) {
  return (
    <RevealItem className="ecf-lift" as="div">
      <div
        className="surface-card"
        style={{ position: 'relative', overflow: 'hidden', padding: '20px 22px', height: '100%' }}
      >
        {rail ? (
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
        ) : null}
        <span className="eyebrow" style={{ color: rail ? 'var(--unread-text)' : 'var(--text-muted)' }}>
          {kicker}
        </span>
        <h3 style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-0.02em', margin: '12px 0 8px' }}>
          {title}
        </h3>
        <p style={{ margin: 0, color: 'var(--text-dim)', fontSize: 14.5, lineHeight: 1.6 }}>{children}</p>
      </div>
    </RevealItem>
  );
}

// A feature presented as proof the outcome is deliverable, with a small glyph.
export function FeatureCard({
  glyph,
  title,
  children,
}: {
  glyph: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <RevealItem as="div">
      <div className="surface-card" style={{ padding: '20px 20px', height: '100%' }}>
        <span
          aria-hidden
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 34,
            height: 34,
            borderRadius: 9,
            background: 'var(--accent-soft)',
            color: 'var(--accent)',
            fontSize: 16,
            marginBottom: 14,
          }}
        >
          {glyph}
        </span>
        <h3 style={{ fontSize: 15.5, fontWeight: 650, letterSpacing: '-0.01em', margin: '0 0 7px' }}>
          {title}
        </h3>
        <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.6 }}>{children}</p>
      </div>
    </RevealItem>
  );
}

// A large figure with a small label — used sparingly in a stat strip.
export function StatTile({
  value,
  label,
  accent = 'accent',
}: {
  value: string;
  label: string;
  accent?: 'accent' | 'unread';
}) {
  return (
    <RevealItem as="div">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span
          className="mono"
          style={{
            fontSize: 'clamp(1.8rem, 3.4vw, 2.6rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1,
            color: accent === 'unread' ? 'var(--unread-text)' : 'var(--text)',
          }}
        >
          {value}
        </span>
        <span style={{ fontSize: 13.5, color: 'var(--text-muted)', maxWidth: 220 }}>{label}</span>
      </div>
    </RevealItem>
  );
}
