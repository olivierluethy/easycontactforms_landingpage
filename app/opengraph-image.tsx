import { OG_CONTENT_TYPE, OG_SIZE, renderOg } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'EasyContactForms — the inbox for your website’s messages';

export default function Image() {
  return renderOg({
    eyebrow: 'Blue means click · amber means waiting',
    title: 'The inbox for the messages your website receives.',
    tag: 'Hosted for owners, self-hostable for devs',
  });
}
