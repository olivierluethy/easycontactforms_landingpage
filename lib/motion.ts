// Shared Framer Motion variants. Motion is deliberately restrained (see
// docs/STYLEGUIDE.md): a short upward translate + fade for entrances, staggered
// per item, run once. Reduced-motion is handled by the components that consume
// these (they skip the initial state), and globally by the CSS reset.

import type { Variants } from 'framer-motion';

export const EASE = [0.4, 0, 0.2, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: EASE } },
};

// Parent that staggers its children's entrance ~60ms apart.
export const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
};

export const staggerFast: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.04 },
  },
};
