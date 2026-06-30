'use client'

import { Phone } from 'lucide-react'
import { BRAND, BENEFITS, BENEFITS_SECTION } from '@/lib/constants'
import { Section, Container } from '@/components/layout'
import { SectionHeading, Button, ScrollReveal } from '@/components/ui'
import { BenefitItem } from '@/components/cards'

export function BenefitsSection() {
  return (
    <Section id="benefits" bg="navy">
      <Container>
        <SectionHeading
          headline={BENEFITS_SECTION.headline}
          subheadline={BENEFITS_SECTION.subheadline}
          light
        />

        <div className="mb-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 2xl:gap-6">
          {BENEFITS.map((benefit, i) => (
            <BenefitItem
              key={benefit.id}
              icon={benefit.icon}
              text={benefit.text}
              index={i}
              light
            />
          ))}
        </div>

        <ScrollReveal direction="up" className="flex justify-center">
          <Button href={`tel:${BRAND.phone}`} size="lg">
            <Phone className="size-4" aria-hidden="true" />
            {BENEFITS_SECTION.cta}
          </Button>
        </ScrollReveal>
      </Container>
    </Section>
  )
}
