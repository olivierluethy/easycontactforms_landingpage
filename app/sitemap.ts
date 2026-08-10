import type { MetadataRoute } from 'next';
import { PAGES, SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-08-11');
  return [
    { url: SITE_URL, lastModified, changeFrequency: 'monthly', priority: 1 },
    {
      url: `${SITE_URL}${PAGES.business.path}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}${PAGES.developers.path}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];
}
