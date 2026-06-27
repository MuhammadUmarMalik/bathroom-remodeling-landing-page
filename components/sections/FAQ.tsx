'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { CTAButton } from '@/components/shared/CTAButton'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { faqs } from '@/data/faqs'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const { ref, isInView } = useScrollAnimation()

  function toggle(index: number) {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <SectionWrapper id="faq" background="warm-white">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          headline="Frequently Asked Questions"
          subheadline="Everything you need to know before starting your bathroom remodel."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
          className="divide-y divide-warm-gray"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
              }}
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                className="w-full flex items-center justify-between gap-4 py-5 text-left group"
              >
                <h3 className="font-serif font-semibold text-navy text-base md:text-lg group-hover:text-gold transition-colors leading-snug">
                  {faq.question}
                </h3>
                <span className="shrink-0 w-7 h-7 rounded-full bg-warm-gray flex items-center justify-center text-navy group-hover:bg-gold/15 group-hover:text-gold transition-colors">
                  {openIndex === index ? (
                    <Minus size={14} strokeWidth={2.5} />
                  ) : (
                    <Plus size={14} strokeWidth={2.5} />
                  )}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    role="region"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-slate text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <p className="text-slate text-sm mb-4">
            Still have questions? We&rsquo;re happy to answer on your free call.
          </p>
          <CTAButton size="lg" data-event="cta_click_faq" />
        </div>
      </div>
    </SectionWrapper>
  )
}
