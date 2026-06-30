// framer-motion removed — hover/tap effects are pure CSS (scale, shadow, shimmer).
// This makes Button a server-renderable component (no hydration needed for links),
// which removes framer-motion from the initial JS bundle entirely.

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
  'relative inline-flex items-center justify-center overflow-hidden rounded-full font-semibold ' +
  'transition-[transform,box-shadow] duration-200 ease-[cubic-bezier(0.25,0,0.2,1)] ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ' +
  'disabled:pointer-events-none disabled:opacity-50 ' +
  'hover:scale-[1.04] active:scale-[0.96]'

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-gold text-white hover:bg-gold-dark hover:shadow-[0_8px_28px_rgba(224,120,48,0.55)]',
  secondary:
    'border-2 border-white/60 text-white bg-transparent hover:bg-white/10 hover:border-white hover:shadow-[0_6px_22px_rgba(255,255,255,0.16)]',
  ghost:
    'text-gold underline-offset-4 hover:underline bg-transparent',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
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

  const inner = (
    <>
      {/* Shimmer sweep on hover — CSS transition, no JS */}
      {variant === 'primary' && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -translate-x-[110%] -skew-x-[20deg] bg-white/25 blur-sm transition-transform duration-[550ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-[220%]"
        />
      )}
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </>
  )

  if (href) {
    return (
      <Link href={href} className={cn(classes, variant === 'primary' ? 'group' : '')} aria-label={ariaLabel}>
        {inner}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(classes, variant === 'primary' ? 'group' : '')}
      aria-label={ariaLabel}
    >
      {inner}
    </button>
  )
}
