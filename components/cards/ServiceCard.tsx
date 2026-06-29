'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import type { Service } from '@/lib/constants'

type ServiceCardProps = {
  service: Service
  index?: number
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [spot, setSpot] = useState({ x: 0, y: 0, visible: false })

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    setSpot({ x: e.clientX - rect.left, y: e.clientY - rect.top, visible: true })
  }

  const onMouseLeave = () => setSpot((s) => ({ ...s, visible: false }))

  /* Resolve icon name → Lucide component */
  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[service.icon]
    ?? Icons.Wrench

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0, 0, 0.2, 1] as const,
      }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl border border-warm-gray bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      {/* React Bits SpotlightCard — gold radial gradient follows cursor */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: spot.visible ? 1 : 0,
          background: `radial-gradient(280px circle at ${spot.x}px ${spot.y}px, rgba(224,120,48,0.13), transparent 70%)`,
        }}
      />

      {/* Icon */}
      <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-gold/10 p-3 text-gold-dark transition-colors group-hover:bg-gold/20">
        <IconComponent className="size-6" />
      </div>

      {/* Text */}
      <h3 className="mb-2 font-serif text-lg font-semibold text-navy">
        {service.title}
      </h3>
      <p className="text-sm leading-relaxed text-slate">
        {service.description}
      </p>
    </motion.div>
  )
}
