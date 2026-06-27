import type { Metadata } from 'next'
import { CITY, STATE, COMPANY_NAME, SITE_URL, PHONE } from '@/lib/constants'

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Bathroom Remodeling in ${CITY}, ${STATE} | ${COMPANY_NAME}`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description: `Top-rated bathroom remodeling in ${CITY}, ${STATE}. Full remodels, shower conversions & tile work. Free consultations. Call ${PHONE} today.`,
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
  authors: [{ name: COMPANY_NAME, url: SITE_URL }],
  creator: COMPANY_NAME,
  publisher: COMPANY_NAME,
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
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    title: `Bathroom Remodeling in ${CITY}, ${STATE} | ${COMPANY_NAME}`,
    description: `Top-rated bathroom remodeling in ${CITY}, ${STATE}. Full remodels, shower conversions & tile work. Free consultations. Call today.`,
    siteName: COMPANY_NAME,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${COMPANY_NAME} — Bathroom Remodeling in ${CITY}, ${STATE}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Bathroom Remodeling in ${CITY}, ${STATE} | ${COMPANY_NAME}`,
    description: `Top-rated bathroom remodeling in ${CITY}, ${STATE}. Free consultations. Call today.`,
    images: [`${SITE_URL}/og-image.jpg`],
  },
}
