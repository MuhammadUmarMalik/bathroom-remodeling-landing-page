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
  description: `Top-rated bathroom remodeling in ${CITY}, ${STATE}. Full remodels, shower conversions & tile work. Free consultations. Call ${BRAND.phone} today.`,
  keywords: [
    `bathroom remodeling ${CITY}`,
    `bathroom renovation ${CITY} ${STATE}`,
    `bathroom remodel ${CITY} TX`,
    'shower conversion Austin',
    'tile installation Austin',
    'walk-in shower Austin',
    'bathroom contractor Austin',
    'bathroom remodel cost Austin TX',
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
    description: `Top-rated bathroom remodeling in ${CITY}, ${STATE}. Full remodels, shower conversions & tile work. Free consultations. Call today.`,
    siteName: BRAND.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `Bathroom Remodeling in ${CITY}, ${STATE} | ${BRAND.name}`,
    description: `Top-rated bathroom remodeling in ${CITY}, ${STATE}. Free consultations. Call today.`,
  },
}
