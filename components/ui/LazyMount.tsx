'use client'

import { useState, useEffect, useRef } from 'react'

interface LazyMountProps {
  children: React.ReactNode
  /** Approximate height of the section — prevents CLS on scroll past */
  minHeight?: number
}

/**
 * Only mounts children once they are within 200 px of the viewport.
 * Before that, renders a lightweight placeholder so the page height stays
 * stable (no CLS). Dynamic imports in page.tsx won't even download their
 * JS chunks until their LazyMount sentinel scrolls into range.
 */
export function LazyMount({ children, minHeight = 400 }: LazyMountProps) {
  const [mounted, setMounted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMounted(true)
          io.disconnect()
        }
      },
      { rootMargin: '200px 0px', threshold: 0 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  if (!mounted) {
    return <div ref={ref} style={{ minHeight }} aria-hidden="true" />
  }

  return <>{children}</>
}
