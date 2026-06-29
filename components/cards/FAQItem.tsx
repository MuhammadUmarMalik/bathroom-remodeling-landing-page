'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/cn'
import type { FAQ } from '@/lib/constants'

type FAQItemProps = {
  faq: FAQ
  index?: number
}

export function FAQItem({ faq, index = 0 }: FAQItemProps) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{
        duration: 0.4,
        delay: index * 0.06,
        ease: [0, 0, 0.2, 1] as const,
      }}
      className={cn(
        'rounded-xl border transition-colors',
        open
          ? 'border-gold/40 bg-gold/5'
          : 'border-warm-gray bg-white hover:border-gold/25'
      )}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
        aria-controls={`faq-answer-${faq.id}`}
      >
        <span className="font-serif text-base font-semibold text-navy">
          {faq.question}
        </span>

        <motion.span
          animate={{ rotate: open ? 0 : 0 }}
          className="flex shrink-0 items-center justify-center rounded-full bg-gold/10 p-1 text-gold-dark"
          aria-hidden="true"
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="minus"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] as const }}
              >
                <Minus className="size-4" />
              </motion.span>
            ) : (
              <motion.span
                key="plus"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] as const }}
              >
                <Plus className="size-4" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`faq-answer-${faq.id}`}
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }}
            style={{ overflow: 'hidden' }}
          >
            <p className="px-5 pb-5 text-sm leading-relaxed text-slate">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
