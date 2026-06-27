'use client'

import { motion } from 'framer-motion'
import { Phone, Star } from 'lucide-react'
import { CTAButton } from '@/components/shared/CTAButton'
import { COMPANY_NAME, PHONE, PHONE_TEL, CITY, STATE } from '@/lib/constants'

const ease = [0.25, 0.1, 0.25, 1] as const

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease, delay },
  }
}

export function Hero() {
  return (
    <section
      aria-label="Hero — Bathroom Remodeling in Austin TX"
      className="relative min-h-screen flex flex-col justify-center bg-navy overflow-hidden pt-16"
    >
      {/* Decorative background geometry */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-150 h-150 rounded-full bg-navy-light/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-100 h-100 rounded-full bg-gold/8 blur-2xl" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-linear-to-b from-transparent via-warm-white/5 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl w-full px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 rounded-full px-4 py-1.5 mb-8"
          >
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={11} className="fill-gold text-gold" />
              ))}
            </div>
            <span className="text-gold text-xs font-semibold tracking-wide">
              4.9 Stars · 312 Reviews · {CITY}, {STATE}
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            {...fadeUp(0.1)}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-warm-white leading-[1.1] mb-6"
          >
            Your Bathroom
            <br />
            <span className="text-gold">Deserves Better.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            {...fadeUp(0.2)}
            className="text-warm-white/75 text-lg md:text-xl leading-relaxed max-w-xl mb-10"
          >
            {COMPANY_NAME} delivers premium bathroom remodels for {CITY}-area homeowners —
            on time, on budget, and backed by a{' '}
            <strong className="text-warm-white font-semibold">10-year warranty</strong>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.3)}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <CTAButton
              size="lg"
              variant="primary"
              data-event="cta_click_hero"
              className="shadow-lg shadow-gold/20"
            />

            <a
              href={PHONE_TEL}
              data-event="phone_click_hero"
              data-gtag="phone_click"
              aria-label={`Call ${COMPANY_NAME} at ${PHONE}`}
              className="flex items-center gap-2.5 text-warm-white hover:text-gold transition-colors group"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full border border-warm-white/20 group-hover:border-gold/50 transition-colors">
                <Phone size={16} />
              </span>
              <div>
                <p className="text-xs text-warm-white/50 leading-none mb-0.5">Or call us now</p>
                <p className="font-semibold text-sm">{PHONE}</p>
              </div>
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            {...fadeUp(0.45)}
            className="mt-14 flex flex-wrap gap-6"
          >
            {[
              'Licensed & Insured',
              'Free Estimate',
              '10-Year Warranty',
              '500+ Remodels',
            ].map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                <span className="text-warm-white/60 text-sm">{badge}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 inset-x-0 h-24 bg-linear-to-t from-warm-white to-transparent"
      />
    </section>
  )
}
