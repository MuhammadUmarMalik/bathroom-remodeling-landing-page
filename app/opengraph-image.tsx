import { ImageResponse } from 'next/og'

export const alt = 'Elite Bath & Tile — Bathroom Remodeling in Austin, TX'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#1B2A4A',
          padding: '60px',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* Gold accent bar */}
        <div style={{ width: '80px', height: '4px', background: '#E07830', marginBottom: '36px', borderRadius: '2px', display: 'flex' }} />

        {/* Company name */}
        <div
          style={{
            fontSize: '80px',
            fontWeight: '700',
            color: '#FFFFFF',
            textAlign: 'center',
            lineHeight: 1.1,
            marginBottom: '24px',
            display: 'flex',
          }}
        >
          Elite Bath &amp; Tile
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '36px',
            color: '#E07830',
            textAlign: 'center',
            marginBottom: '20px',
            display: 'flex',
          }}
        >
          Premium Bathroom Remodeling
        </div>

        {/* Location */}
        <div
          style={{
            fontSize: '26px',
            color: 'rgba(255,255,255,0.55)',
            textAlign: 'center',
            display: 'flex',
          }}
        >
          Austin, TX · Free Consultations · Licensed &amp; Insured
        </div>
      </div>
    ),
    { ...size }
  )
}
