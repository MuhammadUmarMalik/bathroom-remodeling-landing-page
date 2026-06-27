import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  id?: string
  background?: 'warm-white' | 'warm-gray' | 'navy' | 'white'
  as?: 'section' | 'div'
}

export function SectionWrapper({
  children,
  className,
  id,
  background = 'warm-white',
  as: Tag = 'section',
}: SectionWrapperProps) {
  const bgMap = {
    'warm-white': 'bg-warm-white',
    'warm-gray': 'bg-warm-gray',
    navy: 'bg-navy',
    white: 'bg-white',
  }

  return (
    <Tag
      id={id}
      className={cn('w-full py-20 md:py-28 px-4 sm:px-6 lg:px-8', bgMap[background], className)}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </Tag>
  )
}
