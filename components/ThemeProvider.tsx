'use client';

// next-themes wired to the product's convention: the theme is written as
// `data-theme` on <html> (values "light" / "dark"), the same attribute
// styles.css and this site's globals.css switch on. Defaults to the system
// preference; the choice persists per browser.

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ReactNode } from 'react';

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
