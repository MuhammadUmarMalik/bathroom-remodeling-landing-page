import type { Metadata } from 'next'
import { BRAND } from '@/lib/constants'

const CITY = 'Austin'
const STATE = 'TX'

export const siteMetadata: Metadata = {
  metadataBase: new URL(BRAND.siteUrl),
  title: {
    default: `Bathroom Remodeling in ${CITY}, ${STATE} | ${BRAND.name}`,
    template: `%s | ${BRAND.name}`,
  },
  description: `Expert bathroom remodeling in ${CITY}, ${STATE} — full remodels, shower conversions, tile & vanity work. Locally trusted. Free in-home consultation. Call ${BRAND.phone}.`,
  keywords: [
    `bathroom remodeling ${CITY}`,
    `bathroom remodeling ${CITY} ${STATE}`,
    `bathroom renovation ${CITY} ${STATE}`,
    `bathroom remodel ${CITY} TX`,
    `shower conversion ${CITY}`,
    `tile installation ${CITY}`,
    `walk-in shower ${CITY}`,
    `bathroom contractor ${CITY}`,
    `bathroom remodel cost ${CITY} TX`,
    `tub to shower conversion ${CITY}`,
    `bathroom vanity installation ${CITY}`,
    `master bathroom remodel ${CITY}`,
    `local bathroom remodeler ${CITY} TX`,
    `bathroom remodeling near me`,
  ],
  authors: [{ name: BRAND.name, url: BRAND.siteUrl }],
  creator: BRAND.name,
  publisher: BRAND.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: BRAND.siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BRAND.siteUrl,
    title: `Bathroom Remodeling in ${CITY}, ${STATE} | ${BRAND.name}`,
    description: `Expert bathroom remodeling in ${CITY}, ${STATE} — full remodels, shower conversions & tile work. Free in-home consultation. Call ${BRAND.phone}.`,
    siteName: BRAND.name,
    images: [
      {
        url: '/hero-image.png',
        width: 1200,
        height: 630,
        alt: `Bathroom Remodeling in ${CITY}, ${STATE} | ${BRAND.name}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Bathroom Remodeling in ${CITY}, ${STATE} | ${BRAND.name}`,
    description: `Expert bathroom remodeling in ${CITY}, ${STATE}. Free in-home consultation. Call ${BRAND.phone}.`,
    images: ['/hero-image.png'],
  },
}
