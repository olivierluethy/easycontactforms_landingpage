// A reveal-animated section header: eyebrow, headline, optional lead. Keeps
// heading levels flexible so each page maintains a correct document outline
// (one <h1> in the hero, <h2> per section).

import type { ReactNode } from 'react';
import { Reveal, RevealItem } from './Reveal';

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  as = 'h2',
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2';
}) {
  const Tag = as;
  return (
    <Reveal stagger>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
          alignItems: align === 'center' ? 'center' : 'flex-start',
          textAlign: align === 'center' ? 'center' : 'left',
          maxWidth: align === 'center' ? 720 : 780,
          marginInline: align === 'center' ? 'auto' : undefined,
        }}
      >
        {eyebrow ? (
          <RevealItem>
            <span className="eyebrow">
              <span aria-hidden="true" style={railDot} />
              {eyebrow}
            </span>
          </RevealItem>
        ) : null}
        <RevealItem as={Tag}>
          <span
            style={{
              fontSize: 'var(--fs-h1)',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              fontWeight: 700,
              display: 'block',
            }}
          >
            {title}
          </span>
        </RevealItem>
        {lead ? (
          <RevealItem>
            <p style={{ fontSize: 'var(--fs-lead)', color: 'var(--text-dim)', margin: 0, maxWidth: 680 }}>
              {lead}
            </p>
          </RevealItem>
        ) : null}
      </div>
    </Reveal>
  );
}

const railDot: React.CSSProperties = {
  width: 6,
  height: 6,
  borderRadius: 999,
  background: 'var(--unread)',
  display: 'inline-block',
};
