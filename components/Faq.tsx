'use client';

// Objection-handling FAQ. Built on native <details>/<summary> so it works
// without JS and is announced correctly to assistive tech; Framer animates the
// answer height when JS is present. The same items feed the FAQPage JSON-LD, so
// what's shown and what's indexed can't drift.

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import { EASE } from '@/lib/motion';

export type QA = { q: string; a: string };

export function Faq({ items }: { items: QA[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 780 }}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className="surface-card"
            style={{ overflow: 'hidden', borderColor: isOpen ? 'var(--border-strong)' : 'var(--border)' }}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              style={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 14,
                padding: '16px 18px',
                border: 'none',
                background: 'transparent',
                color: 'var(--text)',
                font: 'inherit',
                fontSize: 15.5,
                fontWeight: 600,
                letterSpacing: '-0.01em',
                textAlign: 'left',
                cursor: 'pointer',
              }}
            >
              <span>{item.q}</span>
              <span
                aria-hidden
                style={{
                  flex: 'none',
                  color: 'var(--text-muted)',
                  transition: 'transform var(--transition)',
                  transform: isOpen ? 'rotate(45deg)' : 'none',
                  fontSize: 18,
                  lineHeight: 1,
                }}
              >
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  key="content"
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: EASE }}
                  style={{ overflow: 'hidden' }}
                >
                  <p
                    style={{
                      margin: 0,
                      padding: '0 18px 18px',
                      color: 'var(--text-dim)',
                      fontSize: 14.5,
                      lineHeight: 1.6,
                      maxWidth: 680,
                    }}
                  >
                    {item.a}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
