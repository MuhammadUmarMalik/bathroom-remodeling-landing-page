'use client'

import { Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { BRAND, PROCESS_STEPS, PROCESS_SECTION } from '@/lib/constants'
import { Section, Container } from '@/components/layout'
import { Button, ScrollReveal } from '@/components/ui'
import { ProcessStep } from '@/components/cards'

type WaveConnectorProps = {
  reversed?: boolean
  index: number
}

function WaveConnector({ reversed = false, index }: WaveConnectorProps) {
  /* S-curve: left→right or right→left between card centres (≈23% and ≈77% of width) */
  const d = reversed
    ? 'M 770 0 C 770 55 230 45 230 100'
    : 'M 230 0 C 230 55 770 45 770 100'

  return (
    <motion.svg
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 + 0.25 }}
      viewBox="0 0 1000 100"
      preserveAspectRatio="none"
      className="h-16 w-full md:h-24"
      aria-hidden="true"
    >
      <motion.path
        d={d}
        fill="none"
        stroke="rgba(224,120,48,0.22)"
        strokeWidth="2.5"
        vectorEffect="non-scaling-stroke"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, delay: index * 0.08 + 0.35, ease: [0.4, 0, 0.2, 1] as const }}
      />
      {/* Animated travelling dot */}
    </motion.svg>
  )
}

export function ProcessSection() {
  return (
    <Section id="process" bg="white">
      <Container>
        {/* Section header */}
        <ScrollReveal direction="up" className="mb-16 text-center">
          <span className="mb-3 inline-block text-[11px] font-black uppercase tracking-[0.22em] text-gold">
            How It Works
          </span>
          <h2 className="font-serif text-[1.75rem] font-bold text-navy sm:text-3xl md:text-4xl 2xl:text-5xl">
            {PROCESS_SECTION.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-slate">
            {PROCESS_SECTION.subheadline}
          </p>
        </ScrollReveal>

        {/* Steps + wave connectors */}
        <div className="mx-auto mb-16 max-w-3xl 2xl:max-w-4xl">
          {PROCESS_STEPS.map((step, i) => (
            <div key={step.number}>
              <ProcessStep step={step} index={i} />

              {i < PROCESS_STEPS.length - 1 && (
                <WaveConnector reversed={i % 2 !== 0} index={i} />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal direction="up" className="flex justify-center">
          <Button href={`tel:${BRAND.phone}`} size="lg">
            <Phone className="size-4" aria-hidden="true" />
            {PROCESS_SECTION.cta}
          </Button>
        </ScrollReveal>
      </Container>
    </Section>
  )
}
