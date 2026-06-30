'use client'

import { cn } from '@/lib/cn'
import type { ProcessStep as ProcessStepType } from '@/lib/constants'

type ProcessStepProps = {
  step: ProcessStepType
  index?: number
}

export function ProcessStep({ step, index = 0 }: ProcessStepProps) {
  const isRight = index % 2 !== 0
  const num = String(step.number).padStart(2, '0')
  const base = index * 120

  return (
    <div className={cn('flex w-full justify-center', isRight ? 'md:justify-end' : 'md:justify-start')}>
      <div
        className={cn(
          'animate-rise relative w-full sm:w-[90%] md:w-[54%] overflow-hidden',
          'bg-white rounded-[28px] border border-stone-100/80',
          'shadow-[0_4px_32px_rgba(0,0,0,0.07),0_1px_4px_rgba(0,0,0,0.04)]',
          'p-7 md:p-9 flex flex-col items-start gap-3',
        )}
        style={{ animationDelay: `${base}ms` }}
      >
        {/* Watermark number */}
        <span
          aria-hidden="true"
          className={cn(
            'pointer-events-none absolute -bottom-3 font-serif font-bold',
            'text-[110px] leading-none select-none text-stone-100/80',
            isRight ? 'left-3' : 'right-3',
          )}
        >
          {num}
        </span>

        {/* Step badge */}
        <div
          className="animate-rise inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/8 px-3.5 py-1.5"
          style={{ animationDelay: `${base + 150}ms` }}
        >
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
          <span className="text-[10px] font-black uppercase tracking-[0.18em] text-gold-dark">
            Step {num}
          </span>
        </div>

        {/* Title pill */}
        <div
          className="animate-rise rounded-2xl border border-gold/20 bg-linear-to-r from-amber-50 to-orange-50/60 px-5 py-2.5"
          style={{ animationDelay: `${base + 250}ms` }}
        >
          <h3 className="font-serif text-xl font-semibold leading-snug text-navy">
            {step.title}
          </h3>
        </div>

        {/* Description */}
        <p
          className="animate-rise relative z-10 max-w-75 text-sm leading-relaxed text-slate-dark"
          style={{ animationDelay: `${base + 350}ms` }}
        >
          {step.description}
        </p>
      </div>
    </div>
  )
}
