'use client'

import { useState, useEffect } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import { COMPANY_NAME, PHONE, PHONE_TEL } from '@/lib/constants'
import { CTAButton } from '@/components/shared/CTAButton'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#gallery' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  function handleLinkClick() {
    setMobileOpen(false)
  }

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-30 transition-all duration-300',
        scrolled
          ? 'bg-navy shadow-[0_2px_24px_rgba(0,0,0,0.18)]'
          : 'bg-navy/95'
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-18"
      >
        {/* Logo */}
        <a
          href="#"
          aria-label={`${COMPANY_NAME} homepage`}
          className="flex items-center gap-2 shrink-0"
        >
          <span className="font-serif text-xl font-bold text-warm-white leading-tight">
            {COMPANY_NAME}
          </span>
          <span className="hidden sm:block text-gold text-xs font-sans font-medium border-l border-warm-white/20 pl-2 ml-1">
            Austin, TX
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-warm-white/80 hover:text-warm-white text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: phone + CTA */}
        <div className="flex items-center gap-3">
          <a
            href={PHONE_TEL}
            data-event="phone_click_navbar"
            data-gtag="phone_click"
            aria-label={`Call us at ${PHONE}`}
            className="hidden md:flex items-center gap-1.5 text-gold hover:text-gold-light transition-colors"
          >
            <Phone size={15} strokeWidth={2.5} />
            <span className="text-sm font-semibold font-sans">{PHONE}</span>
          </a>

          <CTAButton
            size="md"
            className="hidden sm:inline-flex"
            data-event="cta_click_navbar"
          />

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
            className="lg:hidden text-warm-white p-1"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy border-t border-warm-white/10 px-4 pb-6 pt-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-warm-white/80 hover:text-warm-white text-base font-medium py-1 border-b border-warm-white/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={PHONE_TEL}
              data-event="phone_click_mobile_menu"
              data-gtag="phone_click"
              className="flex items-center gap-2 text-gold font-semibold py-2"
            >
              <Phone size={16} />
              {PHONE}
            </a>
            <CTAButton size="lg" className="w-full justify-center" data-event="cta_click_mobile_menu" />
          </div>
        </div>
      )}
    </header>
  )
}
