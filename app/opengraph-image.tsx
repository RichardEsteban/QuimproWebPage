import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'QUIMPRO - Solventes químicos de alta calidad'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '80px',
          background: 'linear-gradient(135deg, #142a5c 0%, #1e4fa3 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: 32,
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 32,
              fontWeight: 700,
              letterSpacing: 1,
            }}
          >
            QUIMPRO
          </div>
          <div style={{ display: 'flex', fontSize: 20, color: '#9db8e8' }}>Química Proceres</div>
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 56,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 900,
            marginBottom: 24,
          }}
        >
          Solventes químicos de alta calidad al mejor precio
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 28,
            color: '#cfe0ff',
            maxWidth: 850,
          }}
        >
          Certificación ISO 9001:2015 · Uso industrial, automotriz y comercial · Desde 2002
        </div>
      </div>
    ),
    { ...size }
  )
}
