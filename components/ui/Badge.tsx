'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

type BadgeVariant = 'default' | 'gold' | 'outline' | 'navy'

type BadgeProps = {
  label: string
  variant?: BadgeVariant
  className?: string
}

const variants: Record<BadgeVariant, string> = {
  default: 'bg-warm-gray text-slate-dark',
  gold:    'bg-gold/15 text-gold-dark border border-gold/30',
  outline: 'border border-navy/20 text-navy bg-transparent',
  navy:    'bg-navy text-warm-white',
}

export function Badge({ label, variant = 'default', className }: BadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] }}
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase',
        variants[variant],
        className
      )}
    >
      {label}
    </motion.span>
  )
}
