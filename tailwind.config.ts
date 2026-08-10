import type { Config } from 'tailwindcss';

// Dark mode is driven by `data-theme` on <html> (next-themes), matching the
// product exactly. Colours resolve to the CSS variables defined in globals.css
// so a token only has to change in one place and both themes follow.
const config: Config = {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        'bg-alt': 'var(--bg-alt)',
        surface: 'var(--surface)',
        'surface-raised': 'var(--surface-raised)',
        'surface-sunken': 'var(--surface-sunken)',
        border: 'var(--border)',
        'border-strong': 'var(--border-strong)',
        text: 'var(--text)',
        'text-dim': 'var(--text-dim)',
        'text-muted': 'var(--text-muted)',
        accent: 'var(--accent)',
        'accent-hover': 'var(--accent-hover)',
        'accent-soft': 'var(--accent-soft)',
        'accent-contrast': 'var(--accent-contrast)',
        unread: 'var(--unread)',
        'unread-soft': 'var(--unread-soft)',
        'unread-text': 'var(--unread-text)',
        danger: 'var(--danger)',
        'danger-soft': 'var(--danger-soft)',
        success: 'var(--success)',
        'success-soft': 'var(--success-soft)',
        'code-bg': 'var(--code-bg)',
        'code-text': 'var(--code-text)',
      },
      fontFamily: {
        sans: 'var(--font-ui)',
        mono: 'var(--font-mono)',
      },
      fontSize: {
        display: ['var(--fs-display)', { lineHeight: '1.04', letterSpacing: '-0.03em' }],
        h1: ['var(--fs-h1)', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        h2: ['var(--fs-h2)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        lead: ['var(--fs-lead)', { lineHeight: '1.55' }],
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        DEFAULT: 'var(--radius)',
        lg: 'var(--radius-lg)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
      },
      maxWidth: {
        page: '1180px',
      },
      transitionTimingFunction: {
        product: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
