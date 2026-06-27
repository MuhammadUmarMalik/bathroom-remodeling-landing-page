import {
  COMPANY_NAME,
  PHONE,
  FULL_ADDRESS,
  ADDRESS,
  CITY,
  STATE,
  ZIP,
  SITE_URL,
  GEO_LAT,
  GEO_LNG,
  SERVICE_AREAS,
} from './constants'

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#local-business`,
    name: COMPANY_NAME,
    description:
      'Premium bathroom remodeling services in Austin, TX and surrounding areas. Specializing in full bathroom renovations, shower conversions, tile work, and custom vanities.',
    url: SITE_URL,
    telephone: PHONE,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ADDRESS,
      addressLocality: CITY,
      addressRegion: STATE,
      postalCode: ZIP,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: GEO_LAT,
      longitude: GEO_LNG,
    },
    areaServed: SERVICE_AREAS.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    serviceType: [
      'Bathroom Remodeling',
      'Shower Installation',
      'Tile Installation',
      'Vanity Installation',
      'Walk-in Shower Conversion',
      'ADA Accessible Bathroom',
    ],
    priceRange: '$$',
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
        closes: '14:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '312',
    },
    sameAs: [
      'https://www.facebook.com/elitebathandtile',
      'https://www.instagram.com/elitebathandtile',
      'https://www.yelp.com/biz/elite-bath-tile-austin',
    ],
  }
}
