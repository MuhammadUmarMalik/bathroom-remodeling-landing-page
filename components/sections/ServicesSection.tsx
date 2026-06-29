'use client'

import { Phone } from 'lucide-react'
import { BRAND, SERVICES, SERVICES_SECTION } from '@/lib/constants'
import { Section, Container } from '@/components/layout'
import { SectionHeading, Button, ScrollReveal } from '@/components/ui'
import { ServiceCard } from '@/components/cards'

export function ServicesSection() {
  return (
    <Section id="services" bg="white">
      <Container>
        <SectionHeading
          headline={SERVICES_SECTION.headline}
          subheadline={SERVICES_SECTION.subheadline}
        />

        <div className="mb-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        <ScrollReveal direction="up" className="flex justify-center">
          <Button href={`tel:${BRAND.phone}`} size="lg">
            <Phone className="size-4" aria-hidden="true" />
            {SERVICES_SECTION.cta}
          </Button>
        </ScrollReveal>
      </Container>
    </Section>
  )
}
