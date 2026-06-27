'use client'

import { motion } from 'framer-motion'
import { Phone, CalendarCheck } from 'lucide-react'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { CTAButton } from '@/components/shared/CTAButton'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { COMPANY_NAME, PHONE, PHONE_TEL, CITY, STATE } from '@/lib/constants'

export function FinalCTA() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <SectionWrapper id="contact" background="warm-gray">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 32 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="text-center"
      >
        {/* Icon */}
        <div className="inline-flex w-16 h-16 rounded-full bg-navy items-center justify-center mb-8">
          <CalendarCheck size={28} className="text-gold" strokeWidth={1.75} />
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl font-bold text-navy leading-tight mb-5">
          Ready to Love Your
          <br />
          Bathroom Again?
        </h2>

        <p className="text-slate text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Join 500+ {CITY}-area homeowners who trusted {COMPANY_NAME} to transform their
          bathrooms. Your free design consultation is 30 minutes and zero obligation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <CTAButton
            size="lg"
            label="Book My Free Design Call"
            data-event="cta_click_final"
            className="shadow-lg"
          />

          <a
            href={PHONE_TEL}
            data-event="phone_click_final"
            data-gtag="phone_click"
            aria-label={`Call ${COMPANY_NAME} at ${PHONE}`}
            className="flex items-center gap-2.5 border-2 border-navy text-navy hover:bg-navy hover:text-warm-white px-8 py-4 rounded-sm font-semibold text-base transition-colors"
          >
            <Phone size={18} />
            {PHONE}
          </a>
        </div>

        {/* Trust footer */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate">
          {[
            '✓ Free 30-Min Consultation',
            '✓ No Obligation Quote',
            '✓ Licensed & Insured',
            `✓ Serving ${CITY}, ${STATE} & Surrounding Areas`,
          ].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
