import type { NextConfig } from 'next'

// Next.js injects inline <script> tags for hydration and JSON-LD schema
// (layout.tsx uses dangerouslySetInnerHTML). 'unsafe-inline' for scripts is
// required until a nonce-based CSP is wired through the app. For now this
// CSP blocks the most dangerous attack vectors (external script injection,
// framing, MIME sniffing) while keeping the site functional.
//
// 'unsafe-eval' is added in development only: React dev mode uses eval() to
// reconstruct cross-environment callstacks. It is never emitted in production.
const isDev = process.env.NODE_ENV === 'development'

const ContentSecurityPolicy = [
  "default-src 'self'",
  // Scripts: self + inline (Next.js hydration) + eval in dev only (React callstacks)
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''} https://fonts.googleapis.com`,
  // Styles: self + Google Fonts CSS + inline (Tailwind injects inline styles)
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  // Fonts: self + Google Fonts CDN
  "font-src 'self' https://fonts.gstatic.com",
  // Images: self + data URIs (canvas toDataURL) + blob (WebGL textures)
  "img-src 'self' data: blob:",
  // Media: self only (hero video served locally)
  "media-src 'self'",
  // WebGL canvas workers
  "worker-src 'self' blob:",
  // Connections: self only (no external API calls)
  "connect-src 'self'",
  // Frames: none — this site never embeds third-party frames
  "frame-src 'none'",
  // Object/embed: block entirely
  "object-src 'none'",
  // Upgrade insecure requests (force HTTPS everywhere)
  "upgrade-insecure-requests",
].join('; ')

const securityHeaders = [
  // Block rendering the page inside an iframe (clickjacking protection)
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  // Prevent MIME-type sniffing
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Limit referrer info sent cross-origin
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // Isolate the browsing context so cross-origin windows can't access this one
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
  // Prevent other origins embedding our resources
  { key: 'Cross-Origin-Resource-Policy', value: 'same-origin' },
  // Restrict powerful browser features this site doesn't need
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()' },
  // Content Security Policy
  { key: 'Content-Security-Policy', value: ContentSecurityPolicy },
]

const nextConfig: NextConfig = {
  compress: true,

  experimental: {
    // Inline critical CSS and defer non-critical stylesheets, eliminating
    // render-blocking CSS from dynamically-split Tailwind chunks.
    optimizeCss: true,
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
    ],
  },
}

export default nextConfig
