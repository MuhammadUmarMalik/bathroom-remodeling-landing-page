'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'

export function useScrollAnimation(options?: {
  once?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    once: options?.once ?? true,
    margin: '-8% 0px' as `${number}${'px' | '%'} ${number}${'px' | '%'}`,
  })

  return { ref, isInView }
}
