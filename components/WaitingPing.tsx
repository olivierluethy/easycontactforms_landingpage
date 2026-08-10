'use client';

// A small Lottie moment: the amber "waiting for you" ping — a radar pulse around
// a warm core, the emotional core of the brand in motion. Kept off the critical
// path: lottie-react is dynamically imported and only mounts once the element
// scrolls into view, so it never touches LCP. Reduced-motion users get a static
// amber dot instead of the animation.

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { useReducedMotion } from 'framer-motion';
import animationData from '@/lib/lottie/ping.json';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export function WaitingPing({ size = 120 }: { size?: number }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: '120px' },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [reduce]);

  return (
    <div
      ref={ref}
      aria-hidden
      style={{ width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      {reduce ? (
        <span style={{ width: 20, height: 20, borderRadius: 999, background: 'var(--unread)' }} />
      ) : visible ? (
        <Lottie animationData={animationData} loop autoplay style={{ width: size, height: size }} />
      ) : (
        <span style={{ width: 20, height: 20, borderRadius: 999, background: 'var(--unread)', opacity: 0.6 }} />
      )}
    </div>
  );
}
