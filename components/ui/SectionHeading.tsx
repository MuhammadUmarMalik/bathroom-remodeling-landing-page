'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

type SectionHeadingProps = {
  headline: string
  subheadline?: string
  align?: 'left' | 'center'
  light?: boolean      // true when section bg is navy (inverts text)
  className?: string
}

/* React Bits BlurText — each word blurs + fades in, staggered */
const wordVariants = {
  hidden: { opacity: 0, filter: 'blur(10px)', y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.07,
      ease: [0, 0, 0.2, 1] as const,
    },
  }),
}

const subVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0, 0, 0.2, 1] as const },
  },
}

export function SectionHeading({
  headline,
  subheadline,
  align = 'center',
  light = false,
  className,
}: SectionHeadingProps) {
  const words = headline.split(' ')

  return (
    <motion.div
      className={cn(
        'mb-10 sm:mb-12 max-w-3xl 2xl:max-w-4xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      <h2
        className={cn(
          'font-serif text-[1.75rem] font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl',
          light ? 'text-warm-white' : 'text-navy'
        )}
      >
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            custom={i}
            variants={wordVariants}
            className="mr-[0.25em] inline-block"
          >
            {word}
          </motion.span>
        ))}
      </h2>

      {subheadline && (
        <motion.p
          variants={subVariants}
          className={cn(
            'mt-4 text-sm leading-relaxed sm:text-base md:text-lg 2xl:text-xl',
            light ? 'text-warm-white/75' : 'text-slate'
          )}
        >
          {subheadline}
        </motion.p>
      )}
    </motion.div>
  )
}
