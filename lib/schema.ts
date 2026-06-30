import { BRAND, FAQS } from '@/lib/constants'

const CITY = 'Austin'
const STATE = 'TX'
const STATE_FULL = 'Texas'

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: BRAND.name,
    url: BRAND.siteUrl,
    telephone: BRAND.phone,
    email: BRAND.email,
    image: `${BRAND.siteUrl}/hero-image.png`,
    logo: `${BRAND.siteUrl}/logo.png`,
    description: `Expert bathroom remodeling contractor serving ${CITY}, ${STATE_FULL} and the greater Austin metro area. Full remodels, shower conversions, tile installation, vanity updates, and accessibility upgrades.`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: CITY,
      addressRegion: STATE,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.2672,
      longitude: -97.7431,
    },
    areaServed: [
      { '@type': 'City', name: 'Austin', sameAs: 'https://en.wikipedia.org/wiki/Austin,_Texas' },
      { '@type': 'City', name: 'Round Rock' },
      { '@type': 'City', name: 'Cedar Park' },
      { '@type': 'City', name: 'Georgetown' },
      { '@type': 'City', name: 'Pflugerville' },
      { '@type': 'City', name: 'Leander' },
      { '@type': 'City', name: 'Kyle' },
      { '@type': 'City', name: 'Buda' },
      { '@type': 'City', name: 'Lakeway' },
      { '@type': 'City', name: 'Bee Cave' },
      { '@type': 'City', name: 'West Lake Hills' },
      { '@type': 'City', name: 'Hutto' },
      { '@type': 'City', name: 'Manor' },
      { '@type': 'City', name: 'Bastrop' },
      { '@type': 'City', name: 'San Marcos' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '15:00',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Bathroom Remodeling Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Full Bathroom Remodel',
            description: `Complete bathroom remodeling service in ${CITY}, ${STATE_FULL}. Includes layout changes, shower, vanity, tile, lighting, and fixtures.`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Tub-to-Shower Conversion',
            description: `Convert a bathtub to a walk-in shower in ${CITY}, TX. Includes tile surround, frameless glass, and custom shower pan options.`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Shower Replacement',
            description: `Replace an outdated shower in your ${CITY} home with a modern, functional shower system.`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Tile & Flooring Installation',
            description: `Expert tile installation for bathroom floors, walls, and shower surrounds throughout the ${CITY} metro area.`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Vanity & Storage Updates',
            description: `Vanity replacement and storage upgrades for Austin, TX bathrooms. New vanities, mirrors, lighting, and cabinet solutions.`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Accessibility Bathroom Updates',
            description: `Aging-in-place and accessibility upgrades for ${CITY} homeowners — walk-in showers, grab bars, barrier-free entry, and slip-resistant flooring.`,
          },
        },
      ],
    },
    sameAs: [
      // Add Google Business Profile, Houzz, Angi, BBB URLs when available
    ],
  }
}

export function getFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
