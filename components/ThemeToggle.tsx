'use client';

// Light/dark switch matching the product's top-bar toggle: a single icon
// button showing the sun/moon glyph. Renders a stable placeholder until mounted
// to avoid a hydration mismatch, since the resolved theme isn't known on the
// server.

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === 'dark';
  const goingTo = isDark ? 'light' : 'dark';

  return (
    <button
      type="button"
      className="icon-btn"
      onClick={() => setTheme(goingTo)}
      aria-label={mounted ? `Switch to ${goingTo} mode` : 'Switch colour theme'}
      title={mounted ? `Switch to ${goingTo} mode` : 'Switch colour theme'}
    >
      <span aria-hidden="true">{mounted ? (isDark ? '☀' : '☾') : '☾'}</span>
    </button>
  );
}
