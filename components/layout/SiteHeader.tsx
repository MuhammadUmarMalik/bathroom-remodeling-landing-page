'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, Menu, X } from 'lucide-react'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import { BRAND, NAV_LINKS } from '@/lib/constants'
import { cn } from '@/lib/cn'

export function SiteHeader() {
  const [hidden, setHidden]       = useState(false)
  const [scrolled, setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = scrollY.getPrevious() ?? 0
    setHidden(latest > prev && latest > 100)
    setScrolled(latest > 24)
  })

  return (
    <motion.header
      animate={{ y: hidden ? '-100%' : '0%' }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 bg-white',
        scrolled ? 'shadow-md' : 'shadow-sm border-b border-gray-100'
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2"
          aria-label={`${BRAND.name} home`}
        >
          <span className="font-serif text-xl font-bold text-navy leading-tight">
            {BRAND.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-dark transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href={`tel:${BRAND.phone}`}
          className={cn(
            'hidden shrink-0 items-center gap-2 rounded-full px-5 py-2.5',
            'bg-gold text-white text-sm font-semibold',
            'transition-colors hover:bg-gold-dark lg:flex'
          )}
        >
          <Phone className="size-4" aria-hidden="true" />
          Get a Quote
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-md text-navy lg:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden bg-white border-t border-gray-100 lg:hidden"
          >
            <nav
              className="flex flex-col gap-1 px-4 pb-6 pt-2"
              aria-label="Mobile navigation"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md px-3 py-3 text-base font-medium text-slate-dark transition-colors hover:bg-warm-gray hover:text-gold"
                >
                  {link.label}
                </Link>
              ))}

              <a
                href={`tel:${BRAND.phone}`}
                className={cn(
                  'mt-3 flex items-center justify-center gap-2 rounded-full px-5 py-3',
                  'bg-gold text-white text-sm font-semibold',
                  'transition-colors hover:bg-gold-dark'
                )}
              >
                <Phone className="size-4" aria-hidden="true" />
                {BRAND.phone}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
