'use client'

import { Phone } from 'lucide-react'
import { BRAND, REVIEWS, REVIEWS_SECTION } from '@/lib/constants'
import { Section, Container } from '@/components/layout'
import { SectionHeading, Button, ScrollReveal } from '@/components/ui'
import { ReviewCard } from '@/components/cards'

/* Double the array so the loop is seamless */
const DOUBLED = [...REVIEWS, ...REVIEWS]

export function ReviewsSection() {
  return (
    <Section id="reviews" bg="white">
      {/* Heading lives inside the container */}
      <Container>
        <SectionHeading
          headline={REVIEWS_SECTION.headline}
          subheadline={REVIEWS_SECTION.subheadline}
        />
      </Container>

      {/* Full-bleed infinite marquee — left-to-right scroll */}
      <div
        className="marquee-wrap mb-14 overflow-hidden py-4"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        }}
      >
        <div
          className="marquee-track-reverse flex w-max gap-5"
          style={{ animationDuration: '40s' }}
        >
          {DOUBLED.map((review, i) => (
            <div key={`${review.id}-${i}`} className="w-85 shrink-0">
              <ReviewCard review={review} index={0} />
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <Container>
        <ScrollReveal direction="up" className="flex justify-center">
          <Button href={`tel:${BRAND.phone}`} size="lg">
            <Phone className="size-4" aria-hidden="true" />
            {REVIEWS_SECTION.cta}
          </Button>
        </ScrollReveal>
      </Container>
    </Section>
  )
}
