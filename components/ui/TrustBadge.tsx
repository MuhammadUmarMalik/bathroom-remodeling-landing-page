'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

type TrustBadgeProps = {
  icon: React.ReactNode
  text: string
  light?: boolean   // for navy backgrounds
  className?: string
}

export function TrustBadge({ icon, text, light = false, className }: TrustBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0, 0, 0.2, 1] }}
      className={cn(
        'flex items-center gap-2 text-sm font-medium',
        light ? 'text-warm-white/90' : 'text-slate-dark',
        className
      )}
    >
      <span
        className={cn(
          'flex shrink-0 items-center justify-center rounded-full p-1.5',
          light ? 'bg-gold/20 text-gold' : 'bg-gold/15 text-gold-dark'
        )}
      >
        {icon}
      </span>
      {text}
    </motion.div>
  )
}
