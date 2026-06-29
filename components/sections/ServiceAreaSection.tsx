'use client'

import { motion } from 'framer-motion'
import { Phone, Globe } from 'lucide-react'
import { BRAND } from '@/lib/constants'
import { Container } from '@/components/layout'
import { Button, ScrollReveal } from '@/components/ui'

const US_STATES = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
  'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
  'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
  'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY',
]

const stats = [
  { value: '50', label: 'States Served' },
  { value: '500+', label: 'Cities Nationwide' },
  { value: '10K+', label: 'Projects Completed' },
]

export function ServiceAreaSection() {
  return (
    <section
      id="service-area"
      className="relative overflow-hidden py-20 md:py-32"
      style={{ background: 'linear-gradient(160deg, #0B1626 0%, #13203A 50%, #0D1A2E 100%)' }}
    >
      {/* Ambient gold glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 75% 55% at 50% 35%, rgba(224,120,48,0.09) 0%, transparent 70%)',
        }}
      />

      {/* Subtle grain texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='256' height='256' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      {/* Thin top border line */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(224,120,48,0.3) 40%, rgba(224,120,48,0.3) 60%, transparent 100%)' }}
      />

      <Container className="relative z-10">

        {/* Eyebrow badge */}
        <ScrollReveal direction="up">
          <div className="mb-7 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/8 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
              <Globe className="size-3.5" aria-hidden="true" />
              Nationwide Coverage
            </span>
          </div>
        </ScrollReveal>

        {/* Main headline */}
        <ScrollReveal direction="up" delay={0.06}>
          <div className="mb-5 text-center">
            <h2 className="font-serif text-4xl font-bold leading-[1.1] tracking-tight text-warm-white md:text-5xl lg:text-[3.5rem]">
              Bathroom Remodeling{' '}
              <br className="hidden sm:block" />
              <span className="relative inline-block">
                <span className="text-gold">Across All 50 States</span>
                <span
                  aria-hidden="true"
                  className="absolute -bottom-0.5 left-0 right-0 h-px"
                  style={{ background: 'linear-gradient(90deg, transparent, #E07830 35%, #E07830 65%, transparent)' }}
                />
              </span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Ornamental divider */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="mx-auto mb-5 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-gold/25" />
            <div className="size-1 rounded-full bg-gold/60" />
            <div className="size-1.5 rounded-full bg-gold/40" />
            <div className="size-1 rounded-full bg-gold/60" />
            <div className="h-px w-10 bg-gold/25" />
          </div>
        </ScrollReveal>

        {/* Subheadline */}
        <ScrollReveal direction="up" delay={0.13}>
          <p className="mx-auto mb-14 max-w-lg text-center text-base leading-relaxed text-warm-white/55 md:text-lg">
            Wherever you call home, our remodeling specialists are ready to help you create a bathroom you&apos;ll love.
          </p>
        </ScrollReveal>

        {/* Stats row */}
        <ScrollReveal direction="up" delay={0.18}>
          <div className="mx-auto mb-14 grid max-w-xl grid-cols-3 divide-x divide-warm-white/10">
            {stats.map(({ value, label }) => (
              <div key={label} className="px-4 py-3 text-center md:px-8">
                <div className="font-serif text-3xl font-bold text-gold md:text-4xl">{value}</div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-warm-white/40 md:text-xs">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* All 50 state abbreviations — staggered reveal */}
        <div className="mx-auto mb-14 max-w-2xl px-2">
          <div className="flex flex-wrap justify-center gap-1.5 md:gap-2">
            {US_STATES.map((abbr, i) => (
              <motion.div
                key={abbr}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.3, delay: i * 0.014, ease: [0, 0, 0.2, 1] as const }}
                whileHover={{ scale: 1.12, transition: { duration: 0.15 } }}
                className="group cursor-default"
              >
                <span className="block rounded-lg border border-warm-white/[0.07] bg-warm-white/4 px-2.5 py-1.5 text-[11px] font-bold tracking-[0.12em] text-warm-white/30 transition-all duration-200 group-hover:border-gold/35 group-hover:bg-gold/10 group-hover:text-gold/80 md:px-3 md:py-2 md:text-xs">
                  {abbr}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <ScrollReveal direction="up" delay={0.22} className="flex justify-center">
          <div className="relative inline-flex shrink-0">
            <motion.span
              aria-hidden="true"
              className="pointer-events-none absolute -inset-1.5 rounded-full border border-gold/40"
              animate={{ scale: [1, 1.18, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut' }}
            />
            <Button href={`tel:${BRAND.phone}`} size="lg">
              <Phone className="size-4 shrink-0" aria-hidden="true" />
              Book a Free Consultation
            </Button>
          </div>
        </ScrollReveal>

      </Container>

      {/* Thin bottom border line */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(224,120,48,0.2) 40%, rgba(224,120,48,0.2) 60%, transparent 100%)' }}
      />
    </section>
  )
}
