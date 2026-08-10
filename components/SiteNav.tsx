'use client';

// Sticky top bar, matching the product shell: 58px tall, translucent bg with a
// 12px backdrop blur and a bottom hairline. Shows the two audience pages and the
// theme toggle. The current page's link is marked with the accent.

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';
import { APP_URL, NAV_LINKS } from '@/lib/site';

export function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 40,
        height: 58,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        paddingLeft: 'var(--page-gutter)',
        paddingRight: 'var(--page-gutter)',
        background: 'color-mix(in srgb, var(--bg) 86%, transparent)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${scrolled ? 'var(--border)' : 'transparent'}`,
        transition: 'border-color var(--transition)',
      }}
    >
      <Link href="/" aria-label="EasyContactForms home" style={{ color: 'var(--text)' }}>
        <Logo />
      </Link>

      <nav aria-label="Primary" className="hidden sm:flex" style={{ alignItems: 'center', gap: 4 }}>
        {NAV_LINKS.map((link) => {
          const active = pathname === link.path;
          return (
            <Link
              key={link.path}
              href={link.path}
              aria-current={active ? 'page' : undefined}
              style={{
                padding: '7px 12px',
                borderRadius: 'var(--radius-sm)',
                fontSize: 14,
                fontWeight: 600,
                color: active ? 'var(--accent)' : 'var(--text-dim)',
                transition: 'color var(--transition)',
              }}
            >
              {link.nav}
            </Link>
          );
        })}
      </nav>

      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <ThemeToggle />
        <a className="btn btn-secondary" href={`${APP_URL}/login`} style={{ padding: '8px 14px', fontSize: 14 }}>
          Sign in
        </a>
      </div>
    </header>
  );
}
