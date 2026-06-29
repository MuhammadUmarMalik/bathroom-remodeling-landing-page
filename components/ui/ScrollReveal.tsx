'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

type ScrollRevealProps = {
  children: React.ReactNode
  direction?: Direction
  delay?: number
  duration?: number
  className?: string
  once?: boolean
}

const directionMap: Record<Direction, { x?: number; y?: number }> = {
  up:    { y: 32 },
  down:  { y: -32 },
  left:  { x: 32 },
  right: { x: -32 },
  none:  {},
}

/* React Bits FadeContent — fades + slides children into view on scroll */
export function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.55,
  className,
  once = true,
}: ScrollRevealProps) {
  const hidden  = { opacity: 0, ...directionMap[direction] }
  const visible = {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration,
      delay,
      ease: [0, 0, 0.2, 1] as const,
    },
  }

  return (
    <motion.div
      initial={hidden}
      whileInView={visible}
      viewport={{ once, margin: '-60px' }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
