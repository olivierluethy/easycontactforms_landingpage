'use client';

// Scroll-triggered entrance wrapper. Reveals once, when ~15% of the element
// enters the viewport. Respects prefers-reduced-motion by rendering in the
// final state with no transition. `as` lets it wrap any element; `stagger`
// turns it into a parent that staggers RevealItem children.

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ElementType, ReactNode } from 'react';
import { fadeUp, stagger as staggerVariants } from '@/lib/motion';

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: boolean;
  variants?: Variants;
  once?: boolean;
};

export function Reveal({
  children,
  as = 'div',
  className,
  delay = 0,
  stagger = false,
  variants,
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion(as as ElementType);
  const resolved = variants ?? (stagger ? staggerVariants : fadeUp);

  if (reduce) {
    const Tag = as as ElementType;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.15 }}
      variants={resolved}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </MotionTag>
  );
}

// A child of a stagger Reveal. Inherits the parent's orchestration.
export function RevealItem({
  children,
  as = 'div',
  className,
  variants = fadeUp,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  variants?: Variants;
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion(as as ElementType);

  if (reduce) {
    const Tag = as as ElementType;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag className={className} variants={variants}>
      {children}
    </MotionTag>
  );
}
