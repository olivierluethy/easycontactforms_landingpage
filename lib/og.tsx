import { ImageResponse } from 'next/og';

// Shared 1200x630 Open Graph image renderer. Uses the product's dark palette and
// the amber-rail signature. No external fonts (keeps the build self-contained);
// the default sans is fine at this scale.

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = 'image/png';

export function renderOg({
  eyebrow,
  title,
  tag,
}: {
  eyebrow: string;
  title: string;
  tag: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#0a1120',
          color: '#e8eefb',
          padding: '72px 80px',
          position: 'relative',
        }}
      >
        {/* amber rail */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 14,
            background: '#f2a33c',
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, color: '#7387ad', fontSize: 26, letterSpacing: 2 }}>
            <div style={{ width: 12, height: 12, borderRadius: 12, background: '#f2a33c', display: 'flex' }} />
            {eyebrow.toUpperCase()}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            <div style={{ fontSize: 74, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, maxWidth: 940 }}>
              {title}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 27, color: '#a7b6d4' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#e8eefb', fontWeight: 700 }}>
                <div style={{ width: 26, height: 26, borderRadius: 7, background: '#5b93fb', display: 'flex' }} />
                EasyContactForms
              </div>
              <div style={{ color: '#32436c' }}>·</div>
              <div>{tag}</div>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
