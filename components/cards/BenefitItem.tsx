'use client'

import { motion } from 'framer-motion'
import { ICON_MAP } from '@/lib/icons'

type BenefitItemProps = {
  icon: string
  text: string
  index?: number
  light?: boolean
}

export function BenefitItem({ icon, text, index = 0 }: BenefitItemProps) {
  const IconComponent = ICON_MAP[icon] ?? ICON_MAP.Check

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.45,
        delay: index * 0.07,
        ease: [0, 0, 0.2, 1] as const,
      }}
      whileHover={{ y: -4, transition: { duration: 0.2, ease: 'easeOut' } }}
      className="group flex flex-col items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 transition-colors duration-200 hover:border-gold/30 hover:bg-gold/5"
    >
      {/* Icon */}
      <span
        className="flex shrink-0 items-center justify-center rounded-xl bg-gold/12 p-2.5 text-gold-dark transition-colors duration-200 group-hover:bg-gold/20"
        aria-hidden="true"
      >
        <IconComponent className="size-5" />
      </span>

      {/* Text */}
      <span className="text-sm font-medium leading-snug text-slate-dark">
        {text}
      </span>
    </motion.div>
  )
}
