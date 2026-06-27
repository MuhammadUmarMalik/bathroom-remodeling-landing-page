'use client'

import { motion } from 'framer-motion'
import { Timer, Phone } from 'lucide-react'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { CTAButton } from '@/components/shared/CTAButton'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { PHONE, PHONE_TEL } from '@/lib/constants'

export function Offer() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <SectionWrapper id="offer" background="navy">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 32 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative text-center"
      >
        {/* Decorative ring */}
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-sm border border-gold/20 pointer-events-none"
        />

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 rounded-full px-5 py-2 mb-8">
          <Timer size={15} className="text-gold" />
          <span className="text-gold text-sm font-semibold tracking-wide">
            Limited-Time Offer — Austin Area Only
          </span>
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-warm-white leading-tight mb-4">
          <span className="text-gold">$500 Off</span> Your First
          <br />
          Bathroom Remodel
        </h2>

        <p className="text-warm-white/70 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Book your free design consultation this month and we&rsquo;ll apply a{' '}
          <strong className="text-warm-white">$500 credit</strong> toward your project —
          no minimum spend, no fine print.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <CTAButton
            size="lg"
            label="Claim Your $500 Discount"
            variant="primary"
            data-event="cta_click_offer"
            className="shadow-lg shadow-gold/25"
          />
          <a
            href={PHONE_TEL}
            data-event="phone_click_offer"
            data-gtag="phone_click"
            className="flex items-center gap-2 text-warm-white/80 hover:text-warm-white transition-colors"
          >
            <Phone size={16} />
            <span className="text-sm font-medium">{PHONE}</span>
          </a>
        </div>

        <p className="mt-8 text-warm-white/35 text-xs">
          Offer valid for new consultations scheduled before end of month. One discount per household.
        </p>
      </motion.div>
    </SectionWrapper>
  )
}
