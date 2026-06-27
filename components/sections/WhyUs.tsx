'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Award, Clock, Star, ThumbsUp, Users } from 'lucide-react'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { CTAButton } from '@/components/shared/CTAButton'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { COMPANY_NAME } from '@/lib/constants'

const reasons = [
  {
    icon: ShieldCheck,
    stat: '10-Year',
    label: 'Workmanship Warranty',
    detail: 'One of the longest guarantees in the Austin market — we stand behind every installation.',
  },
  {
    icon: Award,
    stat: '500+',
    label: 'Remodels Completed',
    detail: 'Over a decade of bathroom transformations across Austin and surrounding communities.',
  },
  {
    icon: Star,
    stat: '4.9 ★',
    label: 'Average Review Rating',
    detail: 'Rated 5-stars on Google, Yelp, and Houzz. Our reputation is our most valuable asset.',
  },
  {
    icon: Clock,
    stat: '98%',
    label: 'On-Time Completion',
    detail: 'We set a firm timeline at project start and we keep it — no excuses, no surprises.',
  },
  {
    icon: ThumbsUp,
    stat: '$0',
    label: 'Hidden Fees',
    detail: 'Our fixed-price quotes mean the number we give you is the number you pay. Period.',
  },
  {
    icon: Users,
    stat: 'W-2',
    label: 'Employees — Not Subs',
    detail: 'Every crew member is a trained, background-checked employee of {COMPANY_NAME}.',
  },
]

export function WhyUs() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <SectionWrapper id="why-us" background="warm-white">
      <SectionHeading
        headline={`Why ${COMPANY_NAME}`}
        subheadline="We built our business on referrals, not advertising. Here's what keeps homeowners coming back and sending their neighbors."
      />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {reasons.map((reason) => {
          const Icon = reason.icon
          return (
            <motion.div
              key={reason.stat}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
              }}
              className="flex flex-col"
            >
              {/* Icon + stat */}
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-gold/12 flex items-center justify-center shrink-0">
                  <Icon size={22} className="text-gold" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold text-navy leading-none">{reason.stat}</p>
                  <p className="text-xs font-semibold text-gold uppercase tracking-widest mt-0.5">
                    {reason.label}
                  </p>
                </div>
              </div>
              <p className="text-slate text-sm leading-relaxed border-l-2 border-warm-gray pl-4">
                {reason.detail.replace('{COMPANY_NAME}', COMPANY_NAME)}
              </p>
            </motion.div>
          )
        })}
      </motion.div>

      <div className="mt-14 flex justify-center">
        <CTAButton size="lg" data-event="cta_click_why_us" />
      </div>
    </SectionWrapper>
  )
}
