import type { ReactNode } from 'react'
import { Inter, Playfair_Display } from 'next/font/google'
import { siteMetadata } from './metadata'
import { SiteHeader } from '@/components/layout'
import { Footer } from '@/components/sections'
import { getLocalBusinessSchema, getFAQSchema } from '@/lib/schema'
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
  const localBusinessSchema = getLocalBusinessSchema()
  const faqSchema = getFAQSchema()

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Preload hero image so LCP resolves before JS hydration */}
        <link rel="preload" as="image" href="/hero-image.webp" fetchPriority="high" />

        {/* Google Tag Manager placeholder — replace GTM-XXXXXXX with your ID */}
        {/* <script ... /> */}

        {/* LocalBusiness structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {/* FAQPage structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      {/* suppressHydrationWarning: browser extensions (e.g. ColorZilla) inject
          attributes like cz-shortcut-listen onto <body> after SSR, causing a
          hydration mismatch. This prop silences that single-element warning
          without disabling hydration checks for the rest of the tree. */}
      <body className="min-h-screen flex flex-col antialiased" suppressHydrationWarning>
        {/* Google Tag Manager noscript placeholder */}
        {/* <noscript>...</noscript> */}
        <SiteHeader />
        {children}
        <Footer />
      </body>
    </html>
  )
}
