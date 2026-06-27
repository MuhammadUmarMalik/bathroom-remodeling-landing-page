'use client'

import { motion } from 'framer-motion'
import { AlertCircle, Frown, Clock, ShieldAlert } from 'lucide-react'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { CTAButton } from '@/components/shared/CTAButton'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const painPoints = [
  {
    icon: Frown,
    title: 'Embarrassed by an Outdated Bathroom',
    description:
      "Cracked grout, brass fixtures, and pink tile from 1987 — it's the room you apologize for when guests visit. You deserve to be proud of your home.",
  },
  {
    icon: ShieldAlert,
    title: 'Mold, Moisture & Failing Caulk',
    description:
      'Discolored caulk and musty smells aren\'t just cosmetic — they signal moisture getting where it shouldn\'t. Waiting only makes the damage (and the bill) worse.',
  },
  {
    icon: AlertCircle,
    title: 'Wasted Space in a Cramped Layout',
    description:
      'A poorly designed bathroom forces you to shuffle around fixtures. The right remodel can double functional space without touching your footprint.',
  },
  {
    icon: Clock,
    title: 'Tired of Unreliable Contractors',
    description:
      "Ghost quotes, missed timelines, surprise costs — bad contractor experiences are common. There\'s a better way, and you shouldn\'t have to settle.",
  },
]

export function PainPoint() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <SectionWrapper id="pain-points" background="warm-white">
      <SectionHeading
        headline="Sound Familiar?"
        subheadline="Most Austin homeowners wait years to remodel because of fear, not finances. Let's change that."
      />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
      >
        {painPoints.map((point, i) => {
          const Icon = point.icon
          return (
            <motion.div
              key={point.title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
              }}
              className="flex gap-5 p-6 bg-white rounded-sm border border-warm-gray hover:border-gold/40 hover:shadow-sm transition-all"
            >
              <div className="shrink-0 w-11 h-11 rounded-full bg-gold/10 flex items-center justify-center">
                <Icon size={22} className="text-gold" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-navy text-lg mb-1.5">
                  {point.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed">{point.description}</p>
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      <div className="mt-12 flex justify-center">
        <CTAButton size="lg" data-event="cta_click_pain_point" />
      </div>
    </SectionWrapper>
  )
}
