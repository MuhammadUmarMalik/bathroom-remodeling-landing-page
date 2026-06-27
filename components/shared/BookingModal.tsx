'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, CheckCircle, Phone } from 'lucide-react'
import { useBookingStore } from '@/store/useBookingStore'
import { services } from '@/data/services'
import { COMPANY_NAME, PHONE, PHONE_TEL } from '@/lib/constants'

interface FormState {
  name: string
  phone: string
  service: string
  message: string
}

export function BookingModal() {
  const { isModalOpen, selectedService, close } = useBookingStore()
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    service: selectedService,
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const firstInputRef = useRef<HTMLInputElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (isModalOpen) {
      setForm((f) => ({ ...f, service: selectedService }))
      setSubmitted(false)
      setTimeout(() => firstInputRef.current?.focus(), 100)
    }
  }, [isModalOpen, selectedService])

  useEffect(() => {
    if (!isModalOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [isModalOpen, close])

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    // Replace with real form submission (e.g. fetch to an API route or FormSpark)
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    setSubmitted(true)
  }

  const inputClass =
    'w-full rounded-sm border border-warm-gray bg-white px-4 py-3 text-sm text-navy placeholder:text-slate/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors'

  return (
    <AnimatePresence>
      {isModalOpen && (
        <>
          {/* Overlay */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-navy/70 backdrop-blur-sm"
            onClick={close}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="relative w-full max-w-md bg-warm-white rounded-sm shadow-2xl pointer-events-auto overflow-hidden">
              {/* Header */}
              <div className="bg-navy px-6 py-5 flex items-center justify-between">
                <div>
                  <h2 id="modal-title" className="font-serif text-xl font-bold text-warm-white">
                    Book Your Free Call
                  </h2>
                  <p className="text-warm-white/70 text-xs mt-0.5">
                    No obligation · 30 minutes · Speak with a project lead
                  </p>
                </div>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={close}
                  aria-label="Close booking modal"
                  className="text-warm-white/60 hover:text-warm-white transition-colors ml-4 shrink-0"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Body */}
              <div className="p-6">
                {submitted ? (
                  <div className="flex flex-col items-center text-center py-6 gap-4">
                    <CheckCircle size={48} className="text-gold" />
                    <h3 className="font-serif text-2xl font-bold text-navy">
                      We&apos;ll Be in Touch!
                    </h3>
                    <p className="text-slate text-sm leading-relaxed max-w-xs">
                      Thank you, {form.name}. Expect a call from our team within 1 business hour.
                      You can also reach us directly at:
                    </p>
                    <a
                      href={PHONE_TEL}
                      data-event="phone_click_modal_thanks"
                      data-gtag="phone_click"
                      className="flex items-center gap-2 text-gold font-semibold text-lg hover:text-gold-dark transition-colors"
                    >
                      <Phone size={18} />
                      {PHONE}
                    </a>
                    <button
                      type="button"
                      onClick={close}
                      className="mt-2 text-sm text-slate underline underline-offset-2 hover:text-navy transition-colors"
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-navy mb-1.5 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        ref={firstInputRef}
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-navy mb-1.5 uppercase tracking-wider">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(512) 555-0000"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-xs font-semibold text-navy mb-1.5 uppercase tracking-wider">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select a service…</option>
                        {services.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold text-navy mb-1.5 uppercase tracking-wider">
                        Anything else? (optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your bathroom, timeline, or questions…"
                        className={inputClass + ' resize-none'}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading || !form.name || !form.phone}
                      data-event="form_submit"
                      data-gtag="form_submit"
                      className="w-full bg-gold text-navy font-semibold py-3.5 rounded-sm text-sm tracking-wide hover:bg-gold-light active:bg-gold-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                    >
                      {loading ? 'Sending…' : 'Request My Free Call →'}
                    </button>

                    <p className="text-xs text-slate text-center leading-relaxed">
                      Or call us directly:{' '}
                      <a
                        href={PHONE_TEL}
                        data-event="phone_click_modal"
                        data-gtag="phone_click"
                        className="text-gold font-medium hover:underline"
                      >
                        {PHONE}
                      </a>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
