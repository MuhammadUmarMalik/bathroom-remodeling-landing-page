'use client'

import { useRef, useState } from 'react'
import { ICON_MAP } from '@/lib/icons'
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

  const IconComponent = ICON_MAP[service.icon] ?? ICON_MAP.Wrench

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="animate-rise group relative overflow-hidden rounded-2xl border border-warm-gray bg-white p-6 shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-md"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Spotlight — gold radial gradient follows cursor */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: spot.visible ? 1 : 0,
          background: `radial-gradient(280px circle at ${spot.x}px ${spot.y}px, rgba(224,120,48,0.13), transparent 70%)`,
        }}
      />

      <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-gold/10 p-3 text-gold-dark transition-colors group-hover:bg-gold/20">
        <IconComponent className="size-6" />
      </div>

      <h3 className="mb-2 font-serif text-lg font-semibold text-navy">
        {service.title}
      </h3>
      <p className="text-sm leading-relaxed text-slate">
        {service.description}
      </p>
    </div>
  )
}
