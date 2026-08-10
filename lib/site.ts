// Single source of truth for site-wide constants used by metadata, sitemap,
// robots and JSON-LD. Update SITE_URL here if the marketing site ships on a
// different host.

// Marketing site lives at the apex; app.* and api.* are the product's existing
// subdomains (see APP_URL / API_BASE below).
export const SITE_URL = 'https://easycontactforms.com';

export const SITE_NAME = 'EasyContactForms';

export const APP_URL = 'https://app.easycontactforms.com';
export const API_BASE = 'https://api.easycontactforms.com';

export type PageMeta = {
  slug: string;
  path: string;
  nav: string;
};

export const PAGES = {
  business: {
    slug: 'easycontactforms',
    path: '/easycontactforms',
    nav: 'For your website',
  },
  developers: {
    slug: 'developers',
    path: '/developers',
    nav: 'For developers',
  },
} satisfies Record<string, PageMeta>;

export const NAV_LINKS = [PAGES.business, PAGES.developers];
