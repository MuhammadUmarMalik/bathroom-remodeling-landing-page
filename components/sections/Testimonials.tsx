'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { CTAButton } from '@/components/shared/CTAButton'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { testimonials } from '@/data/testimonials'

export function Testimonials() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <SectionWrapper id="testimonials" background="warm-gray">
      <SectionHeading
        headline="What Homeowners Say"
        subheadline="Real reviews from real Austin-area homeowners — unedited and unpaid."
      />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {testimonials.map((testimonial) => (
          <motion.article
            key={testimonial.name}
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
            }}
            className="bg-warm-white rounded-sm p-7 border border-warm-gray hover:shadow-md transition-shadow relative flex flex-col"
          >
            {/* Quote mark */}
            <Quote
              size={28}
              className="text-gold/25 absolute top-5 right-5"
              strokeWidth={1.5}
            />

            {/* Stars */}
            <div className="flex items-center gap-0.5 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={14} className="fill-gold text-gold" />
              ))}
            </div>

            {/* Review */}
            <p className="text-slate-dark text-sm leading-relaxed flex-grow">
              &ldquo;{testimonial.review}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 mt-6 pt-4 border-t border-warm-gray">
              {/* Avatar */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-warm-white text-sm font-bold shrink-0"
                style={{ backgroundColor: testimonial.avatarColor }}
                aria-hidden="true"
              >
                {testimonial.initials}
              </div>
              <div>
                <p className="font-semibold text-navy text-sm">{testimonial.name}</p>
                <p className="text-slate text-xs">
                  {testimonial.city}, {testimonial.state}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <div className="mt-12 flex justify-center">
        <CTAButton size="lg" data-event="cta_click_testimonials" />
      </div>
    </SectionWrapper>
  )
}
