'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize    = 'sm' | 'md' | 'lg'

type ButtonProps = {
  children: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
  'aria-label'?: string
}

const base =
  'relative inline-flex items-center justify-center overflow-hidden rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-gold text-white hover:bg-gold-dark',
  secondary:
    'border-2 border-white/60 text-white bg-transparent hover:bg-white/10 hover:border-white',
  ghost:
    'text-gold underline-offset-4 hover:underline bg-transparent',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

/* Shimmer sweep — child picks up "hover" via Framer variant propagation */
const shimmerVariants = {
  rest:  { x: '-110%', skewX: '-20deg' as const },
  hover: {
    x: '220%',
    skewX: '-20deg' as const,
    transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] as const },
  },
}

/* Per-variant wrapper motion — scale + glow, shared "hover"/"tap" names */
const wrapperVariants = {
  primary: {
    rest:  { scale: 1, boxShadow: '0 0px 0px rgba(224,120,48,0)' },
    hover: {
      scale: 1.04,
      boxShadow: '0 8px 28px rgba(224,120,48,0.55)',
      transition: { duration: 0.2, ease: [0.25, 0, 0.2, 1] as const },
    },
    tap: { scale: 0.96, transition: { duration: 0.1 } },
  },
  secondary: {
    rest:  { scale: 1, boxShadow: '0 0px 0px rgba(255,255,255,0)' },
    hover: {
      scale: 1.04,
      boxShadow: '0 6px 22px rgba(255,255,255,0.16)',
      transition: { duration: 0.2, ease: [0.25, 0, 0.2, 1] as const },
    },
    tap: { scale: 0.96, transition: { duration: 0.1 } },
  },
  ghost: {
    rest:  { scale: 1 },
    hover: { scale: 1.03, transition: { duration: 0.18 } },
    tap:   { scale: 0.97 },
  },
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  disabled,
  className,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const classes = cn(base, variantClasses[variant], sizes[size], className)
  const wv = wrapperVariants[variant]

  const inner = (
    <>
      {variant === 'primary' && (
        <motion.span
          aria-hidden="true"
          variants={shimmerVariants}
          className="pointer-events-none absolute inset-0 bg-white/30 blur-sm"
        />
      )}
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </>
  )

  if (href) {
    return (
      <motion.div
        variants={wv}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        className="inline-flex"
        style={{ borderRadius: 9999 }}
      >
        <Link href={href} className={classes} aria-label={ariaLabel}>
          {inner}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      variants={wv}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
      style={{ borderRadius: 9999 }}
    >
      {inner}
    </motion.button>
  )
}
