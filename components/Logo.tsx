// Wordmark for EasyContactForms. The mark is the product's signature amber rail
// standing beside an envelope outline — "a message, waiting for you". Purely
// inline SVG so it inherits currentColor and needs no asset request.

export function Logo({ className }: { className?: string }) {
  return (
    <span className={className} style={{ display: 'inline-flex', alignItems: 'center', gap: 9 }}>
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        aria-hidden="true"
        style={{ flex: 'none' }}
      >
        {/* the amber rail */}
        <rect x="1" y="3" width="3" height="16" rx="1.5" fill="var(--unread)" />
        {/* the envelope */}
        <rect
          x="7"
          y="4.5"
          width="14"
          height="13"
          rx="2.5"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M7.8 6.2 14 11l6.2-4.8"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span style={{ fontWeight: 700, letterSpacing: '-0.02em', fontSize: 15.5 }}>
        EasyContactForms
      </span>
    </span>
  );
}
