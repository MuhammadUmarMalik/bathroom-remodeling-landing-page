'use client'

import { Phone } from 'lucide-react'
import { BRAND, FAQS, FAQ_SECTION } from '@/lib/constants'
import { Section, Container } from '@/components/layout'
import { SectionHeading, Button, ScrollReveal } from '@/components/ui'
import { FAQItem } from '@/components/cards'

export function FAQSection() {
  return (
    <Section id="faq" bg="white">
      <Container>
        <SectionHeading headline={FAQ_SECTION.headline} />

        <div className="mx-auto mb-12 max-w-2xl space-y-3">
          {FAQS.map((faq, i) => (
            <FAQItem key={faq.id} faq={faq} index={i} />
          ))}
        </div>

        <ScrollReveal direction="up" className="flex justify-center">
          <Button href={`tel:${BRAND.phone}`} size="lg">
            <Phone className="size-4" aria-hidden="true" />
            {FAQ_SECTION.cta}
          </Button>
        </ScrollReveal>
      </Container>
    </Section>
  )
}
