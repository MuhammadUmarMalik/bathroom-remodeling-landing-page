'use client'

import { Phone } from 'lucide-react'
import * as Icons from 'lucide-react'
import { motion } from 'framer-motion'
import { BRAND, TRUST_POINTS, WHY_US_SECTION } from '@/lib/constants'
import { Section, Container } from '@/components/layout'
import { Button } from '@/components/ui'

// ─── Animation Variants ───────────────────────────────────────────────────────

const fadeLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const },
  },
}

const itemReveal = {
  hidden: { opacity: 0, x: 32 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

const lineGrow = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] as const },
  },
}

// ─── Component ────────────────────────────────────────────────────────────────

export function WhyChooseUsSection() {
  return (
    <Section
      id="why-us"
      bg="navy"
      className="relative overflow-hidden py-24! md:py-32!"
    >
      {/* ── Background texture ── */}
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden>
        {/* Noise grain overlay */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.03]">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>

        {/* Radial glow top-right */}
        <div className="absolute -top-32 right-0 h-150 w-150 rounded-full bg-gold/7 blur-[130px]" />
        {/* Radial glow bottom-left */}
        <div className="absolute -bottom-40 -left-20 h-125 w-125 rounded-full bg-gold/5 blur-[110px]" />

        {/* Subtle dot grid */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.07]">
          <defs>
            <pattern id="wcu-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#E07830" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wcu-grid)" />
        </svg>

        {/* Decorative large faded number — hidden on small screens to avoid overflow */}
        <div className="absolute -right-8 top-1/2 -translate-y-1/2 select-none font-serif font-bold leading-none text-white/2.5 hidden sm:block text-[12rem] md:text-[18rem] lg:text-[22rem]">
          01
        </div>
      </div>

      <Container className="relative">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.25fr] lg:gap-24 xl:gap-32">

          {/* ── Left Column — Sticky content ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeLeft}
            className="flex flex-col justify-center"
          >
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Why Elite Bath & Tile
              </span>
            </div>

            {/* Headline */}
            <h2 className="mb-6 font-serif text-[1.85rem] font-bold leading-[1.15] text-white sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl">
              {WHY_US_SECTION.headline}
            </h2>

            {/* Gold rule */}
            <motion.div
              variants={lineGrow}
              className="mb-6 h-0.5 w-16 origin-left rounded-full bg-linear-to-r from-gold-dark via-gold to-gold-light"
            />

            {/* Subheadline */}
            <p className="mb-10 text-base leading-relaxed text-white/60 md:text-lg">
              {WHY_US_SECTION.subheadline}
            </p>

            {/* CTA */}
            <div>
              <motion.div
                className="inline-flex rounded-full"
                animate={{
                  boxShadow: [
                    '0 0 0 0px rgba(224,120,48,0.5)',
                    '0 0 0 8px rgba(224,120,48,0.15)',
                    '0 0 0 18px rgba(224,120,48,0)',
                  ],
                }}
                transition={{ duration: 2.6, repeat: Infinity, ease: 'easeOut' }}
              >
                <Button href={`tel:${BRAND.phone}`} size="lg">
                  <Phone className="size-4" aria-hidden="true" />
                  {WHY_US_SECTION.cta}
                </Button>
              </motion.div>
            </div>

            {/* Trust badge */}
            <div className="mt-8 flex items-center gap-2">
              <Icons.ShieldCheck className="size-4 shrink-0 text-gold/70" />
              <span className="text-sm text-white/40">
                Licensed & insured · Austin, TX
              </span>
            </div>
          </motion.div>

          {/* ── Right Column — Trust points ── */}
          <div className="flex flex-col justify-center">
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="divide-y divide-white/7"
            >
              {TRUST_POINTS.map((point, i) => {
                const IconComponent =
                  (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[point.icon] ??
                  Icons.CheckCircle2

                return (
                  <motion.li
                    key={point.id}
                    custom={i}
                    variants={itemReveal}
                    whileHover="hover"
                    className="group relative"
                  >
                    {/* Hover gold left accent */}
                    <motion.div
                      className="absolute left-0 top-0 h-full w-0.5 origin-top rounded-full bg-gold"
                      initial={{ scaleY: 0, opacity: 0 }}
                      whileHover={{ scaleY: 1, opacity: 1 }}
                      transition={{ duration: 0.3, ease: [0.25, 0, 0.2, 1] as const }}
                    />

                    <div className="flex items-center gap-3 sm:gap-5 py-5 pl-4 sm:pl-6 pr-2 transition-colors duration-300 group-hover:bg-white/3">

                      {/* Number */}
                      <span
                        className="w-8 shrink-0 font-serif text-lg font-bold leading-none text-gold/40 transition-colors duration-300 group-hover:text-gold/80"
                        aria-hidden
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>

                      {/* Vertical divider */}
                      <div className="h-6 w-px shrink-0 bg-white/10" aria-hidden />

                      {/* Icon */}
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gold/20 group-hover:text-gold-light">
                        <IconComponent className="size-4" />
                      </div>

                      {/* Text */}
                      <p className="text-sm font-medium leading-snug text-white/70 transition-colors duration-300 group-hover:text-white/95 md:text-[15px]">
                        {point.text}
                      </p>

                      {/* Arrow reveal on hover */}
                      <motion.div
                        className="ml-auto shrink-0 text-gold/0 transition-colors duration-300 group-hover:text-gold/60"
                        initial={{ x: -6, opacity: 0 }}
                        whileHover={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Icons.ArrowRight className="size-4" />
                      </motion.div>

                    </div>
                  </motion.li>
                )
              })}
            </motion.ul>

            {/* Bottom stats strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.6, ease: [0, 0, 0.2, 1] as const }}
              className="mt-8 grid grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/8 bg-white/4 px-2 py-5 backdrop-blur-sm"
            >
              {[
                { value: '100%', label: 'Written estimates' },
                { value: 'Free', label: 'Consultation' },
                { value: 'Local', label: 'Austin-based team' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center gap-1 px-4 text-center">
                  <span className="font-serif text-xl font-bold text-gold md:text-2xl">{stat.value}</span>
                  <span className="text-xs text-white/45 md:text-sm">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </Container>
    </Section>
  )
}
