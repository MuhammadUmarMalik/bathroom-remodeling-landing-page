'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/cn'

type ConsultationFeatureItemProps = {
  text: string
  index?: number
  light?: boolean
}

export function ConsultationFeatureItem({
  text,
  index = 0,
  light = false,
}: ConsultationFeatureItemProps) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.07,
        ease: [0, 0, 0.2, 1] as const,
      }}
      className="flex items-center gap-3"
    >
      <CheckCircle2
        className={cn(
          'size-5 shrink-0',
          light ? 'text-gold' : 'text-gold-dark'
        )}
        aria-hidden="true"
      />
      <span
        className={cn(
          'text-sm font-medium',
          light ? 'text-warm-white/90' : 'text-slate-dark'
        )}
      >
        {text}
      </span>
    </motion.li>
  )
}
