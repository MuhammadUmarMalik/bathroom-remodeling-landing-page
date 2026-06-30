'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin } from 'lucide-react'
import { BRAND } from '@/lib/constants'
import { Container } from '@/components/layout'
import { Button, ScrollReveal } from '@/components/ui'

const AUSTIN_METRO_AREAS = [
  { name: 'Austin', highlight: true },
  { name: 'Round Rock' },
  { name: 'Cedar Park' },
  { name: 'Georgetown' },
  { name: 'Pflugerville' },
  { name: 'Leander' },
  { name: 'Kyle' },
  { name: 'Buda' },
  { name: 'Lakeway' },
  { name: 'Bee Cave' },
  { name: 'West Lake Hills' },
  { name: 'Hutto' },
  { name: 'Manor' },
  { name: 'Bastrop' },
  { name: 'San Marcos' },
  { name: 'Liberty Hill' },
  { name: 'Taylor' },
  { name: 'Elgin' },
]

const AUSTIN_NEIGHBORHOODS = [
  'South Congress',
  'East Austin',
  'Hyde Park',
  'Mueller',
  'Barton Hills',
  'Tarrytown',
  'North Loop',
  'Cherrywood',
  'Travis Heights',
  'Bouldin Creek',
  'Rollingwood',
  'West Campus',
]

const stats = [
  { value: '10+', label: 'Austin-Area Cities Served' },
  { value: '500+', label: 'Projects Completed' },
  { value: '5★', label: 'Avg. Customer Rating' },
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
              <MapPin className="size-3.5" aria-hidden="true" />
              Austin, TX &amp; Surrounding Areas
            </span>
          </div>
        </ScrollReveal>

        {/* Main headline */}
        <ScrollReveal direction="up" delay={0.06}>
          <div className="mb-5 text-center">
            <h2 className="font-serif text-[1.85rem] font-bold leading-[1.1] tracking-tight text-warm-white sm:text-4xl md:text-5xl lg:text-[3.5rem] 2xl:text-6xl">
              Bathroom Remodeling in{' '}
              <br className="hidden sm:block" />
              <span className="relative inline-block">
                <span className="text-gold">Austin &amp; the Greater Metro</span>
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
          <p className="mx-auto mb-14 max-w-full text-center text-base leading-relaxed text-warm-white/55 sm:max-w-xl md:text-lg 2xl:text-xl">
            We serve homeowners throughout Austin, TX and the surrounding communities. If you&apos;re in the Austin metro area, we can help you remodel your bathroom.
          </p>
        </ScrollReveal>

        {/* Stats row */}
        <ScrollReveal direction="up" delay={0.18}>
          <div className="mx-auto mb-14 grid max-w-xl grid-cols-3 divide-x divide-warm-white/10">
            {stats.map(({ value, label }) => (
              <div key={label} className="px-2 py-3 text-center sm:px-4 md:px-8">
                <div className="font-serif text-2xl font-bold text-gold sm:text-3xl md:text-4xl">{value}</div>
                <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-warm-white/40 sm:text-[10px] sm:tracking-[0.18em] md:text-xs">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Austin metro cities — staggered reveal */}
        <ScrollReveal direction="up" delay={0.2}>
          <p className="mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-warm-white/35">
            Cities &amp; Communities We Serve
          </p>
        </ScrollReveal>

        <div className="mx-auto mb-8 max-w-3xl px-2">
          <div className="flex flex-wrap justify-center gap-2 md:gap-2.5">
            {AUSTIN_METRO_AREAS.map((area, i) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.28, delay: i * 0.04, ease: [0, 0, 0.2, 1] as const }}
                whileHover={{ scale: 1.08, transition: { duration: 0.15 } }}
                className="group cursor-default"
              >
                <span
                  className={`block rounded-lg border px-3 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 md:px-4 md:py-2 ${
                    area.highlight
                      ? 'border-gold/60 bg-gold/15 text-gold'
                      : 'border-warm-white/10 bg-warm-white/5 text-warm-white/50 group-hover:border-gold/35 group-hover:bg-gold/10 group-hover:text-gold/80'
                  }`}
                >
                  {area.name}
                  {area.highlight && <span className="ml-1.5 text-[10px] opacity-70">TX</span>}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Austin neighborhoods */}
        <ScrollReveal direction="up" delay={0.24}>
          <p className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-warm-white/25">
            Austin Neighborhoods
          </p>
          <div className="mx-auto mb-14 max-w-2xl">
            <p className="text-center text-sm leading-relaxed text-warm-white/35">
              {AUSTIN_NEIGHBORHOODS.join(' · ')}
            </p>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal direction="up" delay={0.28} className="flex justify-center">
          <div className="relative inline-flex shrink-0">
            <motion.span
              aria-hidden="true"
              className="pointer-events-none absolute -inset-1.5 rounded-full border border-gold/40"
              animate={{ scale: [1, 1.18, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut' }}
            />
            <Button href={`tel:${BRAND.phone}`} size="lg">
              <Phone className="size-4 shrink-0" aria-hidden="true" />
              Book Your Free Bathroom Remodel Consultation
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
