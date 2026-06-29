import { cn } from '@/lib/cn'

type SectionBg = 'warm-white' | 'warm-gray' | 'navy' | 'white'

type SectionProps = {
  children: React.ReactNode
  id?: string
  bg?: SectionBg
  className?: string
}

const bgClasses: Record<SectionBg, string> = {
  'warm-white': 'bg-warm-white text-navy',
  'warm-gray':  'bg-warm-gray text-navy',
  'navy':       'bg-navy text-warm-white',
  'white':      'bg-white text-navy',
}

export function Section({ children, id, bg = 'warm-white', className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('py-16 md:py-24', bgClasses[bg], className)}
    >
      {children}
    </section>
  )
}
