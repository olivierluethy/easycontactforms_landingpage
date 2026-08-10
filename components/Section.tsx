// Marketing section wrapper: centred max-width column with the product's page
// gutter and the marketing vertical rhythm. `tone` optionally paints an
// alternate background band to separate sections. `width` widens the inner
// column for grid-heavy sections.

import type { CSSProperties, ReactNode } from 'react';

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  tone?: 'default' | 'alt' | 'sunken';
  width?: 'default' | 'wide';
  ariaLabel?: string;
  style?: CSSProperties;
};

const toneBg: Record<NonNullable<SectionProps['tone']>, string> = {
  default: 'transparent',
  alt: 'var(--bg-alt)',
  sunken: 'var(--surface-sunken)',
};

export function Section({
  children,
  id,
  className,
  tone = 'default',
  width = 'default',
  ariaLabel,
  style,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={className}
      style={{
        background: toneBg[tone],
        paddingTop: 'clamp(64px, 10vw, 128px)',
        paddingBottom: 'clamp(64px, 10vw, 128px)',
        ...style,
      }}
    >
      <div
        className="page-x"
        style={{ maxWidth: width === 'wide' ? 1240 : 1120, margin: '0 auto' }}
      >
        {children}
      </div>
    </section>
  );
}
