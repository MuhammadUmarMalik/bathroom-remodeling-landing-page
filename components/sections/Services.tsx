'use client'

import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  Droplets,
  Grid2X2,
  Sparkles,
  Waves,
  Accessibility,
  LucideIcon,
} from 'lucide-react'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { CTAButton } from '@/components/shared/CTAButton'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { services } from '@/data/services'

const iconMap: Record<string, LucideIcon> = {
  LayoutDashboard,
  Droplets,
  Grid2X2,
  Sparkles,
  Waves,
  Accessibility,
}

export function Services() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <SectionWrapper id="services" background="warm-gray">
      <SectionHeading
        headline="What We Remodel"
        subheadline="From full gut-and-rebuilds to targeted upgrades — every project is designed for your home, your timeline, and your budget."
      />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service) => {
          const Icon = iconMap[service.icon] ?? Sparkles
          return (
            <motion.article
              key={service.id}
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
              }}
              className="group bg-warm-white rounded-sm p-7 border border-transparent hover:border-gold/30 hover:shadow-md transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-5 w-12 h-12 rounded-sm bg-navy flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                <Icon size={22} className="text-warm-white" strokeWidth={1.75} />
              </div>

              <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                {service.title}
              </h3>
              <p className="text-slate text-sm leading-relaxed">{service.description}</p>

              <button
                type="button"
                onClick={() => {}}
                aria-label={`Learn more about ${service.title}`}
                className="mt-5 text-xs font-semibold text-gold uppercase tracking-widest hover:text-gold-dark transition-colors"
              >
                Learn more →
              </button>
            </motion.article>
          )
        })}
      </motion.div>

      <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
        <CTAButton size="lg" data-event="cta_click_services" />
        <p className="text-sm text-slate">Free in-home estimates · No obligation</p>
      </div>
    </SectionWrapper>
  )
}
