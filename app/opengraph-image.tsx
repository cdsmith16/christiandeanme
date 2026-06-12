import { ImageResponse } from 'next/og';

export const alt = 'Christian Dean — Builder. Strategist. Polymath.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

async function loadRaleway(weight: 300 | 700) {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=Raleway:wght@${weight}&text=${encodeURIComponent(
      'Christian D. Smith Builder. Strategist. Polymath. CHRISTIANDSMITH.COM ·PMSATAMDEAIVCHOSEYURLN—'
    )}`,
    { headers: { 'User-Agent': 'Mozilla/5.0' } }
  ).then((r) => r.text());
  const match = css.match(/src: url\((.+?)\) format\('(?:truetype|opentype)'\)/);
  if (!match) return null;
  return fetch(match[1]).then((r) => r.arrayBuffer());
}

export default async function OgImage() {
  let fonts;
  try {
    const [light, bold] = await Promise.all([loadRaleway(300), loadRaleway(700)]);
    if (light && bold) {
      fonts = [
        { name: 'Raleway', data: light, weight: 300 as const, style: 'normal' as const },
        { name: 'Raleway', data: bold, weight: 700 as const, style: 'normal' as const },
      ];
    }
  } catch {
    // Fall back to the default embedded font if Google Fonts is unreachable at build time.
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(180deg, #0F0F0F 0%, #14301a 100%)',
          fontFamily: 'Raleway',
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 8,
            color: '#F5A623',
            fontWeight: 300,
          }}
        >
          CHRISTIANDSMITH.COM
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 104,
            fontWeight: 700,
            color: '#F0EDE8',
            lineHeight: 1.05,
          }}
        >
          Christian D. Smith
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 40,
            fontWeight: 300,
            color: '#F0EDE8',
            opacity: 0.75,
          }}
        >
          Builder. Strategist. Polymath.
        </div>
        <div
          style={{
            marginTop: 90,
            fontSize: 22,
            letterSpacing: 4,
            color: '#F0EDE8',
            opacity: 0.55,
          }}
        >
          PM · SA · TAM · DE · AI · VC — CHOOSE YOUR LENS
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
