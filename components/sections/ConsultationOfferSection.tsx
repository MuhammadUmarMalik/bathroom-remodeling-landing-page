'use client'

import { Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { BRAND, CONSULTATION_SECTION, CONSULTATION_FEATURES } from '@/lib/constants'
import { Section, Container } from '@/components/layout'
import { SectionHeading, Button } from '@/components/ui'
import { ConsultationFeatureItem } from '@/components/cards'

export function ConsultationOfferSection() {
  return (
    <Section id="consultation" bg="navy">
      <Container>
        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">

          {/* Left — offer features */}
          <div>
            <SectionHeading
              headline={CONSULTATION_SECTION.headline}
              subheadline={CONSULTATION_SECTION.subheadline}
              align="left"
              light
            />
            <ul className="space-y-3">
              {CONSULTATION_FEATURES.map((feature, i) => (
                <ConsultationFeatureItem key={feature} text={feature} index={i} light />
              ))}
            </ul>
          </div>

          {/* Right — call-to-action panel */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0, 0, 0.2, 1] as const }}
            className="rounded-2xl border border-gold/20 bg-navy-light p-8 text-center shadow-lg"
          >
            <p className="mb-2 font-serif text-2xl font-bold text-warm-white">
              Ready to get started?
            </p>
            <p className="mb-8 text-sm text-warm-white/70">
              Call now and speak directly with a remodeling specialist.
            </p>

            <Button href={`tel:${BRAND.phone}`} size="lg" className="w-full justify-center">
              <Phone className="size-5" aria-hidden="true" />
              {BRAND.phone}
            </Button>

            <p className="mt-5 text-xs text-warm-white/50">
              {CONSULTATION_SECTION.supportingLine}
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
