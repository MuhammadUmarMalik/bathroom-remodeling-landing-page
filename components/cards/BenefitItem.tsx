'use client'

import { ICON_MAP } from '@/lib/icons'

type BenefitItemProps = {
  icon: string
  text: string
  index?: number
  light?: boolean
}

export function BenefitItem({ icon, text, index = 0 }: BenefitItemProps) {
  const IconComponent = ICON_MAP[icon] ?? ICON_MAP.Check

  return (
    <div
      className="animate-rise group flex flex-col items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 transition-[transform,border-color,background-color] duration-200 hover:-translate-y-1 hover:border-gold/30 hover:bg-gold/5"
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <span
        className="flex shrink-0 items-center justify-center rounded-xl bg-gold/12 p-2.5 text-gold-dark transition-colors duration-200 group-hover:bg-gold/20"
        aria-hidden="true"
      >
        <IconComponent className="size-5" />
      </span>

      <span className="text-sm font-medium leading-snug text-slate-dark">
        {text}
      </span>
    </div>
  )
}
