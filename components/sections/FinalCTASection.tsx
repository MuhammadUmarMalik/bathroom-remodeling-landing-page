'use client'

import { motion } from 'framer-motion'
import { Phone, ArrowRight, Star, ShieldCheck, Clock3, Sparkles } from 'lucide-react'
import { BRAND, FINAL_CTA } from '@/lib/constants'
import { Container } from '@/components/layout'
import { Button } from '@/components/ui'

const stats = [
  { value: '500+', label: 'Projects Done' },
  { value: '5.0★', label: 'Star Rating' },
  { value: 'Free', label: 'Consultation' },
]

const guarantees = [
  { icon: ShieldCheck, text: 'Licensed & Insured' },
  { icon: Clock3, text: 'Same-Day Response' },
  { icon: Star, text: 'Clear Written Estimate' },
]

const ease = [0, 0, 0.2, 1] as [number, number, number, number]

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.52, ease } },
}

export function FinalCTASection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy-dark py-24 md:py-32">

      {/* Tile grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(224,120,48,0.055) 1px, transparent 1px),' +
            'linear-gradient(90deg, rgba(224,120,48,0.055) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Atmospheric glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 -left-48 h-[560px] w-[560px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(224,120,48,0.16) 0%, transparent 65%)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 -right-24 h-[420px] w-[420px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(224,120,48,0.1) 0%, transparent 65%)' }}
      />

      <Container>
        <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_400px] lg:gap-16 xl:gap-28">

          {/* ── Left: copy block ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col"
          >
            {/* Eyebrow chip */}
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
                <Sparkles className="size-3" aria-hidden="true" />
                Free Consultation — No Commitment
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={fadeUp}
              className="mb-5 font-serif text-4xl font-bold leading-[1.14] text-warm-white md:text-5xl xl:text-[3.4rem]"
            >
              {FINAL_CTA.headline}
            </motion.h2>

            {/* Gold accent rule */}
            <motion.div variants={fadeUp} className="mb-6 h-0.5 w-14 rounded-full bg-gold" />

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              className="mb-10 max-w-lg text-lg leading-relaxed text-warm-white/60"
            >
              {FINAL_CTA.subheadline}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Button href={`tel:${BRAND.phone}`} size="lg">
                <Phone className="size-4" aria-hidden="true" />
                {FINAL_CTA.primaryCta}
              </Button>
              <Button href={`tel:${BRAND.phone}`} variant="secondary" size="lg">
                {BRAND.phone}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
            </motion.div>

            {/* Trust strip */}
            <motion.ul
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2.5"
            >
              {guarantees.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-1.5 text-sm text-warm-white/45">
                  <Icon className="size-4 shrink-0 text-gold/70" aria-hidden="true" />
                  {text}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* ── Right: decorative card ── */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.68, ease }}
            className="relative hidden lg:block"
          >
            {/* Card */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy-light/45 p-8 shadow-2xl backdrop-blur-sm">

              {/* Top gold bar */}
              <div
                className="mb-7 h-0.5 w-14 rounded-full"
                style={{ background: 'linear-gradient(to right, #E07830, #ED8B42)' }}
              />

              {/* Call label */}
              <p className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-warm-white/35">
                Call Us Directly
              </p>

              {/* Prominent phone number */}
              <a
                href={`tel:${BRAND.phone}`}
                aria-label={`Call us at ${BRAND.phone}`}
                className="mb-7 block font-serif text-[1.75rem] font-bold text-warm-white transition-colors duration-200 hover:text-gold"
              >
                {BRAND.phone}
              </a>

              {/* Divider */}
              <div className="mb-7 h-px bg-white/10" />

              {/* Stats grid */}
              <div className="mb-7 grid grid-cols-3 gap-3">
                {stats.map(({ value, label }) => (
                  <div
                    key={label}
                    className="rounded-xl border border-white/10 bg-white/5 p-3 text-center"
                  >
                    <p className="mb-1 font-serif text-lg font-bold text-gold">{value}</p>
                    <p className="text-[11px] leading-tight text-warm-white/45">{label}</p>
                  </div>
                ))}
              </div>

              {/* Review strip */}
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-gold text-gold" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-sm text-warm-white/60">
                  <span className="font-semibold text-warm-white">100+</span> five-star reviews
                </p>
              </div>

              {/* Decorative tile corner */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-6 -right-6 size-28 opacity-[0.07]"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(248,249,251,1) 1px, transparent 1px),' +
                    'linear-gradient(90deg, rgba(248,249,251,1) 1px, transparent 1px)',
                  backgroundSize: '14px 14px',
                }}
              />
            </div>

            {/* Floating badge — top right */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-5 -top-5 flex items-center gap-2 rounded-full border border-gold/25 bg-navy-dark/95 px-4 py-2 shadow-2xl backdrop-blur-md"
            >
              <ShieldCheck className="size-4 text-gold" aria-hidden="true" />
              <span className="text-xs font-semibold text-warm-white">Licensed & Insured</span>
            </motion.div>

            {/* Floating badge — bottom left */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut', delay: 1.3 }}
              className="absolute -bottom-5 -left-5 flex items-center gap-2 rounded-full border border-white/10 bg-navy-dark/95 px-4 py-2 shadow-2xl backdrop-blur-md"
            >
              <Clock3 className="size-4 text-gold" aria-hidden="true" />
              <span className="text-xs font-semibold text-warm-white">Same-Day Response</span>
            </motion.div>
          </motion.div>

        </div>
      </Container>
    </section>
  )
}
