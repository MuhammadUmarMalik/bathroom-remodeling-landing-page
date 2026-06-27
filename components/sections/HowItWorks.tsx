'use client'

import { motion } from 'framer-motion'
import { Phone, Ruler, HardHat, BadgeCheck, LucideIcon } from 'lucide-react'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { CTAButton } from '@/components/shared/CTAButton'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { howItWorksSteps } from '@/data/howItWorks'

const iconMap: Record<string, LucideIcon> = {
  Phone,
  Ruler,
  HardHat,
  BadgeCheck,
}

export function HowItWorks() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <SectionWrapper id="how-it-works" background="navy">
      <SectionHeading
        headline="How It Works"
        subheadline="Four clear steps from first call to final reveal. No surprises, no runaround."
        light
      />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {howItWorksSteps.map((step, index) => {
          const Icon = iconMap[step.icon] ?? Phone
          const isLast = index === howItWorksSteps.length - 1

          return (
            <motion.div
              key={step.step}
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
              }}
              className="relative"
            >
              {/* Connector line (desktop) */}
              {!isLast && (
                <div
                  aria-hidden="true"
                  className="hidden lg:block absolute top-6 left-[3.5rem] right-0 h-px bg-warm-white/15"
                />
              )}

              {/* Step number + icon */}
              <div className="flex items-center gap-3 mb-5">
                <div className="relative shrink-0 w-12 h-12 rounded-full bg-gold flex items-center justify-center shadow-md shadow-gold/30">
                  <Icon size={20} className="text-navy" strokeWidth={2} />
                </div>
                <span className="text-warm-white/30 text-4xl font-serif font-bold leading-none">
                  {String(step.step).padStart(2, '0')}
                </span>
              </div>

              <h3 className="font-serif text-xl font-semibold text-warm-white mb-3">
                {step.title}
              </h3>
              <p className="text-warm-white/65 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          )
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <CTAButton size="lg" variant="light" data-event="cta_click_how_it_works" />
        <p className="text-warm-white/50 text-sm">Start with a free 30-minute call</p>
      </motion.div>
    </SectionWrapper>
  )
}
