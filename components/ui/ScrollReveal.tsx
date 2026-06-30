'use client'

import { cn } from '@/lib/cn'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

type ScrollRevealProps = {
  children: React.ReactNode
  direction?: Direction
  /** Delay in seconds (matches framer-motion convention) */
  delay?: number
  duration?: number
  className?: string
  once?: boolean
}

export function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  className,
}: ScrollRevealProps) {
  const animClass = direction === 'none' ? 'animate-fade' : 'animate-rise'

  return (
    <div
      className={cn(animClass, className)}
      style={delay > 0 ? { animationDelay: `${delay * 1000}ms` } : undefined}
    >
      {children}
    </div>
  )
}
