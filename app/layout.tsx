import type { ReactNode } from 'react'
import { Inter, Playfair_Display } from 'next/font/google'
import { siteMetadata } from './metadata'
import { getLocalBusinessSchema } from '@/lib/schema'
import './globals.css'

export const metadata = siteMetadata

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600', '700', '800'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  const schema = getLocalBusinessSchema()

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Google Tag Manager placeholder — replace GTM-XXXXXXX with your ID */}
        {/* <script ... /> */}

        {/* JSON-LD LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {/* Google Tag Manager noscript placeholder */}
        {/* <noscript>...</noscript> */}
        {children}
      </body>
    </html>
  )
}
