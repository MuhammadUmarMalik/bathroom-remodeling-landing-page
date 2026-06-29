'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, MessageCircle, FileText, ChevronDown } from 'lucide-react'
import { BRAND, HERO } from '@/lib/constants'
import { Container } from '@/components/layout'
import { Button } from '@/components/ui'

const trustItems = [
  { icon: MapPin,        text: 'Local Bathroom Remodeling Service' },
  { icon: MessageCircle, text: 'Free Consultation' },
  { icon: FileText,      text: 'Clear Project Estimate' },
]

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-navy-dark pt-18">

      {/* ── Background video ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
        aria-hidden="true"
      >
        <source src="/hero-section-video.mp4" type="video/mp4" />
      </video>

      {/* ── Overlay ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-1"
        style={{
          background:
            'linear-gradient(105deg, rgba(19,32,58,0.93) 0%, rgba(19,32,58,0.78) 50%, rgba(19,32,58,0.40) 100%)',
        }}
      />

      {/* ── Vignette ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-2"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(11,26,44,0.45) 100%)',
        }}
      />

      {/* ── Main content — flex-1 stretches this to fill space above the trust strip ── */}
      <div className="relative z-10 flex flex-1 items-center">
        <Container className="py-16 lg:py-20">
          <div className="max-w-2xl">

            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] }}
              className="mb-5"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold">
                <MapPin className="size-3" aria-hidden="true" />
                Austin, TX · Local Remodeling Team
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1, ease: [0, 0, 0.2, 1] }}
              className="mb-4 font-serif text-4xl font-bold leading-[1.1] tracking-tight text-warm-white md:text-5xl lg:text-[3.5rem]"
            >
              {HERO.headline}
            </motion.h1>

            {/* Gold accent line */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.18, ease: [0, 0, 0.2, 1] }}
              aria-hidden="true"
              className="mb-5 h-0.5 w-20 origin-left rounded-full"
              style={{ background: 'linear-gradient(to right, #E07830, transparent)' }}
            />

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease: [0, 0, 0.2, 1] }}
              className="mb-8 max-w-lg text-base leading-relaxed text-warm-white/72 md:text-lg"
            >
              {HERO.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3, ease: [0, 0, 0.2, 1] }}
              className="flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <div className="relative inline-flex shrink-0">
                <motion.span
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-1 rounded-full border border-gold/45"
                  animate={{ scale: [1, 1.18, 1], opacity: [0.55, 0, 0.55] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut' }}
                />
                <Button href={`tel:${BRAND.phone}`} size="lg">
                  <Phone className="size-4 shrink-0" aria-hidden="true" />
                  {HERO.primaryCta}
                </Button>
              </div>

              <Button href="#gallery" variant="secondary" size="lg">
                {HERO.secondaryCta}
              </Button>
            </motion.div>

            {/* Trust strip — directly below CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.45, ease: [0, 0, 0.2, 1] }}
              aria-label="Trust highlights"
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-warm-white/10 pt-5"
            >
              {trustItems.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-warm-white/60">
                  <Icon className="size-3.5 shrink-0 text-gold/70" aria-hidden="true" />
                  {text}
                </div>
              ))}
            </motion.div>

          </div>
        </Container>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.85, duration: 0.4 }}
        className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="size-5 text-warm-white/25" />
        </motion.div>
      </motion.div>

    </section>
  )
}
