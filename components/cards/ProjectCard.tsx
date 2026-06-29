'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, Clock } from 'lucide-react'
import { cn } from '@/lib/cn'
import type { Project } from '@/lib/constants'

type ProjectCardProps = {
  project: Project
  index?: number
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [glare, setGlare] = useState({ x: 50, y: 50, visible: false })

  /* React Bits GlareCard — white glare follows mouse */
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setGlare({ x, y, visible: true })
  }

  const onMouseLeave = () => setGlare((g) => ({ ...g, visible: false }))

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
        delay: index * 0.1,
        ease: [0, 0, 0.2, 1] as const,
      }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl bg-warm-gray shadow-sm transition-shadow hover:shadow-lg"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden sm:h-64">
        <Image
          src={project.image}
          alt={project.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Glare overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            opacity: glare.visible ? 1 : 0,
            background: `radial-gradient(400px circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.18), transparent 65%)`,
          }}
        />

        {/* Inspiration label */}
        {project.isInspiration && (
          <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
            Design Inspiration
          </span>
        )}
      </div>

      {/* Metadata */}
      <div className="p-5">
        <p className="mb-2 font-serif text-base font-semibold text-navy">
          {project.type}
        </p>
        <p className="mb-3 text-sm leading-relaxed text-slate">{project.scope}</p>

        <div className="flex flex-wrap gap-3 text-xs text-slate">
          <span className="flex items-center gap-1">
            <MapPin className="size-3.5 shrink-0 text-gold-dark" />
            {project.location}
          </span>
          {project.timeline && (
            <span className="flex items-center gap-1">
              <Clock className="size-3.5 shrink-0 text-gold-dark" />
              {project.timeline}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}
