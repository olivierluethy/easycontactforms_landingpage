'use client';

// Developer hero: the promise is "own your stack", the instant proof is the
// two-line embed and the form it renders. Code on the left, result on the right.

import { motion, useReducedMotion } from 'framer-motion';
import { CodeSnippet } from '@/components/CodeSnippet';
import { FormPreview } from '@/components/mocks/FormPreview';
import { fadeUp, stagger } from '@/lib/motion';

const EMBED = `<div data-easycontact="f3a9c1b7e2d4"></div>
<script src="https://api.easycontactforms.com/widget/embed.js" defer></script>`;

export function DevHero() {
  const reduce = useReducedMotion();

  return (
    <section aria-label="Introduction" style={{ position: 'relative', overflow: 'hidden' }}>
      <div
        aria-hidden
        className="bg-grid"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.5,
          maskImage: 'radial-gradient(120% 80% at 30% 0%, #000 0%, transparent 65%)',
          WebkitMaskImage: 'radial-gradient(120% 80% at 30% 0%, #000 0%, transparent 65%)',
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
        <div className="ecf-hero-grid" style={{ display: 'grid', gap: 'clamp(36px, 5vw, 64px)', alignItems: 'center' }}>
          <motion.div
            initial={reduce ? false : 'hidden'}
            animate="show"
            variants={stagger}
            style={{ display: 'flex', flexDirection: 'column', gap: 22, maxWidth: 560 }}
          >
            <motion.div variants={fadeUp}>
              <span className="chip mono" style={{ fontSize: 12 }}>
                <span aria-hidden style={{ color: 'var(--unread)' }}>
                  ●
                </span>
                dependency-free PHP · self-hostable
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              style={{ fontSize: 'var(--fs-display)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.04, margin: 0 }}
            >
              A form backend you actually own.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              style={{ fontSize: 'var(--fs-lead)', color: 'var(--text-dim)', margin: 0, maxWidth: 520 }}
            >
              One script tag drops a themed, validated, spam-protected form onto any page —
              no build step, no framework. Behind it: dependency-free PHP over MySQL you can
              self-host, so the submissions live in{' '}
              <strong style={{ color: 'var(--text)', fontWeight: 650 }}>your</strong> database, not someone else&apos;s.
            </motion.p>

            <motion.div variants={fadeUp} style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a className="btn" href="#embed">
                Grab the snippet
              </a>
              <a className="btn btn-secondary" href="#own">
                Why self-host
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
              {['No npm, no build', 'Unguessable IDs by default', 'Script tag or React'].map((t) => (
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
            style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
          >
            <div>
              <div className="eyebrow" style={{ marginBottom: 8 }}>
                Paste this
              </div>
              <CodeSnippet code={EMBED} ariaLabel="The two-line embed snippet" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--text-muted)', fontSize: 13 }}>
              <span aria-hidden style={{ flex: 1, height: 1, background: 'var(--border)' }} />
              renders
              <span aria-hidden style={{ flex: 1, height: 1, background: 'var(--border)' }} />
            </div>
            <FormPreview />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
