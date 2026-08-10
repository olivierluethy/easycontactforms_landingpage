import { OG_CONTENT_TYPE, OG_SIZE, renderOg } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'A form backend you actually own';

export default function Image() {
  return renderOg({
    eyebrow: 'For developers',
    title: 'A form backend you actually own.',
    tag: 'Dependency-free PHP · self-hostable',
  });
}
