'use client';

// A faithful still of the embed widget's rendered form (the .ecf-wrap markup
// from widget/embed.js), rebuilt with the product's tokens so the developer
// page shows exactly what the one-liner produces. Non-interactive by design —
// it's a preview, not a live form, so it never posts anywhere.

export function FormPreview({ heading = 'Get in touch' }: { heading?: string }) {
  return (
    <div
      className="surface-card"
      style={{ padding: '22px 22px 24px', boxShadow: 'var(--shadow-md)', width: '100%' }}
      role="img"
      aria-label="The contact form the embed snippet renders: full name, email and message fields with a Send message button."
    >
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: '-0.02em' }}>{heading}</div>
        <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 3 }}>
          Questions? Send us a message.
        </div>
      </div>

      <Field label="Full name" value="Marta Feld" />
      <Field label="Email" value="marta@feld.studio" mono />
      <Field label="Message" value="Are you taking new clients for a March launch?" textarea />

      <button
        type="button"
        tabIndex={-1}
        aria-hidden
        className="btn"
        style={{ width: '100%', marginTop: 4, pointerEvents: 'none' }}
      >
        Send message
      </button>
    </div>
  );
}

function Field({
  label,
  value,
  mono,
  textarea,
}: {
  label: string;
  value: string;
  mono?: boolean;
  textarea?: boolean;
}) {
  return (
    <div style={{ marginBottom: 13 }}>
      <div style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--text-dim)', marginBottom: 5 }}>
        {label}
      </div>
      <div
        className={mono ? 'mono' : undefined}
        style={{
          width: '100%',
          padding: textarea ? '10px 12px' : '9px 12px',
          minHeight: textarea ? 70 : undefined,
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-sm)',
          background: 'var(--surface-sunken)',
          color: 'var(--text)',
          fontSize: 14,
          lineHeight: 1.5,
        }}
      >
        {value}
      </div>
    </div>
  );
}
