'use client';

// Pain-first hero for the business page. The headline names the fear; the mock
// beside it is the relief — a real inbox with the amber "waiting for you" rail.
// Thesis and proof share the fold.

import { motion, useReducedMotion } from 'framer-motion';
import { InboxMock } from '@/components/mocks/InboxMock';
import { fadeUp, stagger } from '@/lib/motion';
import { APP_URL } from '@/lib/site';

export function BusinessHero() {
  const reduce = useReducedMotion();

  return (
    <section aria-label="Introduction" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* faint atmospheric grid, fades out downward; never shifts layout */}
      <div
        aria-hidden
        className="bg-grid"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.5,
          maskImage: 'radial-gradient(120% 80% at 70% 0%, #000 0%, transparent 65%)',
          WebkitMaskImage: 'radial-gradient(120% 80% at 70% 0%, #000 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />
      <div
        className="page-x"
        style={{
          position: 'relative',
          maxWidth: 1200,
          margin: '0 auto',
          paddingTop: 'clamp(48px, 8vw, 96px)',
          paddingBottom: 'clamp(56px, 9vw, 104px)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gap: 'clamp(36px, 5vw, 64px)',
            gridTemplateColumns: 'minmax(0, 1fr)',
            alignItems: 'center',
          }}
          className="ecf-hero-grid"
        >
          <motion.div
            initial={reduce ? false : 'hidden'}
            animate="show"
            variants={stagger}
            style={{ display: 'flex', flexDirection: 'column', gap: 22, maxWidth: 560 }}
          >
            <motion.div variants={fadeUp}>
              <span className="badge-unread">One missed message = one lost customer</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              style={{ fontSize: 'var(--fs-display)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.04, margin: 0 }}
            >
              Never miss a message from your website again.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              style={{ fontSize: 'var(--fs-lead)', color: 'var(--text-dim)', margin: 0, maxWidth: 500 }}
            >
              Contact forms email you the enquiry and hope it arrives. EasyContactForms
              gives you an <strong style={{ color: 'var(--text)', fontWeight: 650 }}>inbox</strong> instead —
              every message saved the instant it&apos;s sent, the ones you haven&apos;t answered
              flagged in amber. Nothing slips through.
            </motion.p>

            <motion.div variants={fadeUp} style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a className="btn" href={`${APP_URL}/register`}>
                Start free — no code
              </a>
              <a className="btn btn-secondary" href="#how">
                See how it works
              </a>
            </motion.div>

            <motion.ul
              variants={fadeUp}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px 18px',
                listStyle: 'none',
                padding: 0,
                margin: '4px 0 0',
                fontSize: 13.5,
                color: 'var(--text-muted)',
              }}
            >
              {['Live in minutes', 'Spam filtered automatically', 'Dark mode built in'].map((t) => (
                <li key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
                  <span aria-hidden style={{ color: 'var(--success)' }}>
                    ✓
                  </span>
                  {t}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          >
            <InboxMock />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
