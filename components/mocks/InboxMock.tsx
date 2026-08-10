'use client';

// The business hero's centrepiece: a faithful miniature of the product's
// submissions inbox. The whole pitch is here — real enquiries land as rows, and
// the ones you haven't dealt with wear the amber rail. On load a fresh message
// arrives at the top and its rail draws itself in: the one orchestrated motion
// moment on the page. Everything else stays still.

import { motion, useReducedMotion } from 'framer-motion';
import { EASE } from '@/lib/motion';

type Row = {
  name: string;
  email: string;
  when: string;
  preview: string;
  unread: boolean;
  form: string;
};

const ROWS: Row[] = [
  {
    name: 'Marta Feld',
    email: 'marta@feld.studio',
    when: 'just now',
    preview: 'Hi — saw your work on the Kessler project. We need a similar site by mid-March. Are you taking new clients?',
    unread: true,
    form: 'Contact',
  },
  {
    name: 'Devon Alvarez',
    email: 'devon.a@northbay.co',
    when: '2h',
    preview: 'Quick one: do you offer a maintenance retainer after launch, or is it project-only?',
    unread: true,
    form: 'Quote',
  },
  {
    name: 'Priya Raman',
    email: 'priya@ramanmakes.com',
    when: 'Yesterday',
    preview: 'Thanks for the quote — approved. When can we kick off?',
    unread: false,
    form: 'Contact',
  },
];

export function InboxMock() {
  const reduce = useReducedMotion();

  return (
    <div
      className="surface-card"
      style={{ boxShadow: 'var(--shadow-lg)', overflow: 'hidden', width: '100%' }}
      role="img"
      aria-label="The EasyContactForms inbox showing two unread enquiries marked with an amber rail and one that has been read."
    >
      {/* panel head */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
          padding: '13px 16px',
          borderBottom: '1px solid var(--border)',
          background: 'var(--surface-sunken)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
          <span
            aria-hidden
            style={{
              width: 26,
              height: 26,
              borderRadius: 7,
              background: 'var(--accent-soft)',
              color: 'var(--accent)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 13,
              fontWeight: 700,
              flex: 'none',
            }}
          >
            RS
          </span>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 13.5, fontWeight: 650, letterSpacing: '-0.01em' }}>
              Riverside Studio
            </div>
            <div className="mono" style={{ fontSize: 11, color: 'var(--text-muted)' }}>
              app.easycontactforms.com
            </div>
          </div>
        </div>
        <span className="badge-unread">2 waiting</span>
      </div>

      {/* rows */}
      <div>
        {ROWS.map((row, i) => (
          <SubmissionRow key={row.email} row={row} index={i} reduce={!!reduce} isNew={i === 0} />
        ))}
      </div>

      {/* foot */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 16px',
          borderTop: '1px solid var(--border)',
          background: 'var(--surface-sunken)',
          fontSize: 12,
          color: 'var(--text-muted)',
        }}
      >
        <span className="mono">3 messages</span>
        <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}>
          <span aria-hidden style={dot('var(--success)')} /> Nothing lost
        </span>
      </div>
    </div>
  );
}

function SubmissionRow({
  row,
  index,
  reduce,
  isNew,
}: {
  row: Row;
  index: number;
  reduce: boolean;
  isNew: boolean;
}) {
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: isNew ? -8 : 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: reduce ? 0 : 0.15 + index * 0.12, duration: 0.45, ease: EASE }}
      style={{
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) auto',
        gap: '4px 14px',
        padding: '14px 16px 14px 19px',
        borderBottom: index < ROWS.length - 1 ? '1px solid var(--border)' : 'none',
        background: row.unread ? 'transparent' : 'var(--bg-alt)',
      }}
    >
      {/* the amber rail — draws itself in for unread rows */}
      {row.unread ? (
        <motion.span
          aria-hidden
          initial={reduce ? false : { scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: reduce ? 0 : 0.35 + index * 0.12, duration: 0.5, ease: EASE }}
          style={{
            position: 'absolute',
            insetBlock: 0,
            insetInlineStart: 0,
            width: 'var(--rail-width)',
            background: 'var(--unread)',
            transformOrigin: 'top',
          }}
        />
      ) : null}

      <div style={{ display: 'flex', alignItems: 'baseline', gap: 9, minWidth: 0 }}>
        <span
          style={{
            fontSize: 14.5,
            fontWeight: row.unread ? 650 : 500,
            color: row.unread ? 'var(--text)' : 'var(--text-dim)',
            whiteSpace: 'nowrap',
          }}
        >
          {row.name}
        </span>
        <span
          className="mono"
          style={{
            fontSize: 11.5,
            color: 'var(--text-muted)',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {row.email}
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap' }}>
        <span
          style={{
            fontSize: 10.5,
            fontWeight: 600,
            color: 'var(--text-muted)',
            padding: '1px 7px',
            borderRadius: 999,
            border: '1px solid var(--border)',
          }}
        >
          {row.form}
        </span>
        <span className="mono" style={{ fontSize: 11.5, color: 'var(--text-dim)' }}>
          {row.when}
        </span>
      </div>

      <p
        style={{
          gridColumn: '1 / -1',
          margin: 0,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          color: 'var(--text-muted)',
          fontSize: 13,
          lineHeight: 1.5,
        }}
      >
        {row.preview}
      </p>
    </motion.div>
  );
}

function dot(color: string): React.CSSProperties {
  return { width: 6, height: 6, borderRadius: 999, background: color, display: 'inline-block' };
}
