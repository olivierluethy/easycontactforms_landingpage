import { OG_CONTENT_TYPE, OG_SIZE, renderOg } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Never miss a message from your website again';

export default function Image() {
  return renderOg({
    eyebrow: 'For site owners',
    title: 'Never miss a message from your website again.',
    tag: 'An inbox, not another lost email',
  });
}
