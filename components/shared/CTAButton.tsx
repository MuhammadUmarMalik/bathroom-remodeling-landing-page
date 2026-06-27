'use client'

import { useBookingStore } from '@/store/useBookingStore'
import { CTA_TEXT } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface CTAButtonProps {
  label?: string
  service?: string
  className?: string
  variant?: 'primary' | 'outline' | 'light'
  size?: 'md' | 'lg'
  'data-event'?: string
}

export function CTAButton({
  label,
  service,
  className,
  variant = 'primary',
  size = 'md',
  'data-event': dataEvent,
}: CTAButtonProps) {
  const open = useBookingStore((s) => s.open)

  const baseClasses =
    'inline-flex items-center justify-center font-sans font-semibold rounded-sm tracking-wide transition-all duration-200 focus-visible:outline-offset-2 cursor-pointer'

  const sizeClasses = {
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const variantClasses = {
    primary:
      'bg-gold text-navy hover:bg-gold-light active:bg-gold-dark shadow-md hover:shadow-lg',
    outline:
      'border-2 border-gold text-gold hover:bg-gold hover:text-navy',
    light:
      'bg-warm-white text-navy hover:bg-warm-gray',
  }

  return (
    <button
      type="button"
      onClick={() => open(service)}
      data-event={dataEvent ?? 'cta_click'}
      data-gtag="cta_click"
      className={cn(baseClasses, sizeClasses[size], variantClasses[variant], className)}
    >
      {label ?? CTA_TEXT}
    </button>
  )
}
