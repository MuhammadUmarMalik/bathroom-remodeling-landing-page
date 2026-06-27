import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  headline: string
  subheadline?: string
  align?: 'left' | 'center'
  light?: boolean
  className?: string
  as?: 'h2' | 'h3'
}

export function SectionHeading({
  headline,
  subheadline,
  align = 'center',
  light = false,
  className,
  as: Tag = 'h2',
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-12 md:mb-16', align === 'center' && 'text-center', className)}>
      <Tag
        className={cn(
          'font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight',
          light ? 'text-warm-white' : 'text-navy'
        )}
      >
        {headline}
      </Tag>
      {subheadline && (
        <p
          className={cn(
            'mt-4 text-base md:text-lg max-w-2xl leading-relaxed',
            align === 'center' && 'mx-auto',
            light ? 'text-warm-white/80' : 'text-slate'
          )}
        >
          {subheadline}
        </p>
      )}
    </div>
  )
}
