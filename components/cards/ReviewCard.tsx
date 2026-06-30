'use client'

import { Star } from 'lucide-react'
import type { Review } from '@/lib/constants'

type ReviewCardProps = {
  review: Review
  index?: number
}

export function ReviewCard({ review, index = 0 }: ReviewCardProps) {
  return (
    <div
      className="animate-rise group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-6 shadow-[0_2px_20px_rgba(27,42,74,0.07)] ring-1 ring-navy/[0.07] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_10px_36px_rgba(27,42,74,0.13)]"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Gold accent bar — top edge */}
      <div className="absolute inset-x-0 top-0 h-0.75 bg-linear-to-r from-gold/0 via-gold to-gold/0" />

      {/* Decorative oversized quote mark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-3 right-4 select-none font-serif text-[110px] leading-none text-navy/4"
      >
        &ldquo;
      </span>

      {/* Stars */}
      <div
        role="img"
        className="mb-4 flex items-center gap-0.5"
        aria-label={`${review.rating} out of 5 stars`}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="size-4.5"
            fill={i < review.rating ? '#E07830' : '#E9ECF1'}
            stroke={i < review.rating ? '#C4662A' : '#CBD5E1'}
            strokeWidth={1.2}
          />
        ))}
      </div>

      {/* Review body */}
      <p className="relative mb-5 grow text-[15px] leading-[1.7] text-slate-dark">
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Divider */}
      <div className="mb-4 h-px bg-linear-to-r from-warm-gray via-warm-gray/60 to-transparent" />

      {/* Author row */}
      <div className="flex items-center gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-navy font-serif text-sm font-bold text-gold shadow-sm ring-2 ring-gold/25">
          {review.name.charAt(0)}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-navy">{review.name}</p>
          <p className="text-xs text-slate">{review.city}</p>
        </div>
      </div>
    </div>
  )
}
