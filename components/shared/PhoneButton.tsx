'use client'

import { Phone } from 'lucide-react'
import { COMPANY_NAME, PHONE, PHONE_TEL } from '@/lib/constants'
import { useIsMobile } from '@/hooks/useIsMobile'

export function PhoneButton() {
  const isMobile = useIsMobile()

  if (!isMobile) return null

  return (
    <a
      href={PHONE_TEL}
      data-event="phone_click_sticky"
      data-gtag="phone_click"
      aria-label={`Call ${COMPANY_NAME} at ${PHONE}`}
      className="fixed bottom-0 inset-x-0 z-40 md:hidden flex items-center justify-center gap-3 bg-gold text-navy font-semibold py-4 shadow-[0_-4px_24px_rgba(0,0,0,0.18)] active:bg-gold-dark transition-colors"
    >
      <Phone size={20} strokeWidth={2.5} />
      <span className="text-base tracking-wide">Call Now: {PHONE}</span>
    </a>
  )
}
