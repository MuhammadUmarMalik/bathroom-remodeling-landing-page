'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { BRAND, NAV_LINKS } from '@/lib/constants'
import { cn } from '@/lib/cn'
import StaggeredMenu from './StaggeredMenu'

const MENU_ITEMS = [
  ...NAV_LINKS.map((link) => ({
    label: link.label,
    ariaLabel: link.label,
    link: link.href,
  })),
  {
    label: 'Call Now',
    ariaLabel: 'Call for a free consultation',
    link: `tel:${BRAND.phone}`,
  },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const pathname                = usePathname()
  const { scrollY } = useScroll()

  // Only the home page has a dark hero — everywhere else the header is always solid.
  const onHeroPage = pathname === '/'
  const solidBg    = !onHeroPage || scrolled

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 24)
  })

  return (
    <>
      {/* Sticky logo bar — always visible; transparent on home hero, solid navy once scrolled */}
      <motion.header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
          solidBg ? 'bg-navy shadow-lg' : 'bg-transparent'
        )}
      >
        <div className="mx-auto flex h-18 w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8 2xl:max-w-screen-2xl 2xl:px-12">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2"
            aria-label={`${BRAND.name} home`}
          >
            <span className="font-serif text-xl font-bold text-white leading-tight">
              {BRAND.name}
            </span>
          </Link>
        </div>
      </motion.header>

      {/* Full-screen nav overlay — active on every viewport */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 60,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        <StaggeredMenu
          className="site-mobile-menu"
          isFixed={false}
          position="right"
          items={MENU_ITEMS}
          displaySocials={false}
          displayItemNumbering={true}
          colors={['#253762', '#1B2A4A']}
          menuButtonColor="#FFFFFF"
          openMenuButtonColor="#FFFFFF"
          accentColor="#E07830"
          changeMenuColorOnOpen={false}
        />
      </div>
    </>
  )
}
