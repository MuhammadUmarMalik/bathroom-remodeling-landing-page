'use client'

import { Phone } from 'lucide-react'
import { BRAND, GALLERY_SECTION } from '@/lib/constants'
import { Section, Container } from '@/components/layout'
import { SectionHeading, Button, ScrollReveal } from '@/components/ui'
import CircularGallery from '@/components/ui/CircularGallery'

const GALLERY_ITEMS = [
  {
    image: '/BM-1%20(1).png',
    text: 'Master Bath Remodel',
    details: {
      'Project Type': 'Full Bathroom Remodel',
      'Location':     'Austin, TX',
      'Scope':        'New shower, vanity, tile flooring, and lighting',
      'Timeline':     '3 weeks',
    },
  },
  {
    image: '/BM-1%20(2).png',
    text: 'Walk-in Shower',
    details: {
      'Project Type': 'Shower Replacement',
      'Location':     'Round Rock, TX',
      'Scope':        'Removed tub, installed frameless walk-in shower',
      'Timeline':     '1 week',
    },
  },
  {
    image: '/BM-1%20(3).png',
    text: 'Tile & Flooring',
    details: {
      'Project Type': 'Tile & Flooring Update',
      'Location':     'Cedar Park, TX',
      'Scope':        'Floor-to-ceiling porcelain tile, heated floor system',
      'Timeline':     '5 days',
    },
  },
  {
    image: '/BM-1%20(4).png',
    text: 'Vanity Update',
    details: {
      'Project Type': 'Vanity & Storage Update',
      'Location':     'Georgetown, TX',
      'Scope':        'New double vanity, mirrors, and overhead lighting',
      'Timeline':     '4 days',
    },
  },
  {
    image: '/BM-BA%20(1).png',
    text: 'Before & After',
    details: {
      'Project Type': 'Full Bathroom Remodel',
      'Location':     'Pflugerville, TX',
      'Scope':        'Complete gut renovation — new shower, tile, vanity, and fixtures',
      'Timeline':     '4 weeks',
    },
  },
  {
    image: '/BM-BA%20(2).png',
    text: 'Full Remodel',
    details: {
      'Project Type': 'Full Bathroom Remodel',
      'Location':     'Leander, TX',
      'Scope':        'Layout redesign with walk-in shower and soaking tub',
      'Timeline':     '3 weeks',
    },
  },
  {
    image: '/BM-BA%20(3).png',
    text: 'Bathroom Design',
    details: {
      'Project Type': 'Design & Renovation',
      'Location':     'Austin, TX',
      'Scope':        'Custom tile accent wall, floating vanity, rainfall shower',
      'Timeline':     '2 weeks',
    },
  },
  {
    image: '/BM-BA%20(4).png',
    text: 'Tub Conversion',
    details: {
      'Project Type': 'Tub-to-Shower Conversion',
      'Location':     'Round Rock, TX',
      'Scope':        'Removed soaking tub, added walk-in shower with bench seating',
      'Timeline':     '1 week',
    },
  },
]

export function GallerySection() {
  return (
    <Section id="gallery" bg="warm-gray">
      <Container>
        <SectionHeading
          headline={GALLERY_SECTION.headline}
          subheadline={GALLERY_SECTION.subheadline}
        />
      </Container>

      <div style={{ height: '580px', position: 'relative' }} className="w-full mb-10">
        <CircularGallery
          items={GALLERY_ITEMS}
          bend={2}
          textColor="#374151"
          borderRadius={0.08}
          scrollSpeed={2}
          scrollEase={0.03}
          autoScrollSpeed={0.25}
          font="bold 22px Figtree"
        />
      </div>

      <Container>
        <ScrollReveal direction="up" className="flex justify-center">
          <Button href={`tel:${BRAND.phone}`} size="lg">
            <Phone className="size-4" aria-hidden="true" />
            {GALLERY_SECTION.cta}
          </Button>
        </ScrollReveal>
      </Container>
    </Section>
  )
}
