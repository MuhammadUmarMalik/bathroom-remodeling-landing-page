'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, CheckCircle } from 'lucide-react'
import {
  BRAND,
  LEAD_FORM,
  BATHROOM_TYPE_OPTIONS,
  PROJECT_GOAL_OPTIONS,
  CALL_TIME_OPTIONS,
} from '@/lib/constants'
import { Section, Container } from '@/components/layout'
import { SectionHeading, Button } from '@/components/ui'

type FormState = {
  name: string
  phone: string
  email: string
  zip: string
  bathroomType: string
  projectGoal: string
  callTime: string
}

const INITIAL: FormState = {
  name: '',
  phone: '',
  email: '',
  zip: '',
  bathroomType: '',
  projectGoal: '',
  callTime: '',
}

const inputBase =
  'w-full rounded-xl border border-warm-gray bg-white px-4 py-3 text-sm text-navy placeholder:text-slate/60 outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20'

const selectBase =
  'w-full rounded-xl border border-warm-gray bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20 appearance-none cursor-pointer'

export function LeadFormSection() {
  const [form, setForm] = useState<FormState>(INITIAL)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <Section id="consultation-form" bg="warm-gray">
      <Container>
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-2">

          {/* Left — copy */}
          <div className="lg:sticky lg:top-24">
            <SectionHeading
              headline={LEAD_FORM.headline}
              subheadline={LEAD_FORM.subheadline}
              align="left"
            />

            {/* Direct call option */}
            <div className="mt-8 rounded-2xl border border-gold/30 bg-white p-6 shadow-sm">
              <p className="mb-1 text-sm font-semibold text-navy">
                Prefer to call directly?
              </p>
              <p className="mb-4 text-sm text-slate">
                Speak with a remodeling specialist right now.
              </p>
              <a
                href={`tel:${BRAND.phone}`}
                className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy-dark transition-colors hover:bg-gold-light"
              >
                <Phone className="size-4" aria-hidden="true" />
                {BRAND.phone}
              </a>
            </div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] as const }}
            className="rounded-2xl border border-warm-gray bg-white p-8 shadow-md"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col items-center py-8 text-center"
                >
                  <CheckCircle
                    className="mb-4 size-14 text-gold"
                    aria-hidden="true"
                  />
                  <h3 className="mb-2 font-serif text-2xl font-bold text-navy">
                    Request Received
                  </h3>
                  <p className="max-w-xs text-sm leading-relaxed text-slate">
                    A team member will contact you at your preferred call time to
                    discuss your bathroom remodeling project.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div className="mb-6 grid gap-4 sm:grid-cols-2">

                    {/* Full Name */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="lf-name"
                        className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-dark"
                      >
                        Full Name <span className="text-gold">*</span>
                      </label>
                      <input
                        id="lf-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Jane Smith"
                        value={form.name}
                        onChange={handleChange}
                        className={inputBase}
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="lf-phone"
                        className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-dark"
                      >
                        Phone Number <span className="text-gold">*</span>
                      </label>
                      <input
                        id="lf-phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder="(512) 555-0100"
                        value={form.phone}
                        onChange={handleChange}
                        className={inputBase}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="lf-email"
                        className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-dark"
                      >
                        Email Address <span className="text-gold">*</span>
                      </label>
                      <input
                        id="lf-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="jane@email.com"
                        value={form.email}
                        onChange={handleChange}
                        className={inputBase}
                      />
                    </div>

                    {/* ZIP Code */}
                    <div>
                      <label
                        htmlFor="lf-zip"
                        className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-dark"
                      >
                        ZIP Code <span className="text-gold">*</span>
                      </label>
                      <input
                        id="lf-zip"
                        name="zip"
                        type="text"
                        required
                        autoComplete="postal-code"
                        inputMode="numeric"
                        maxLength={10}
                        placeholder="78701"
                        value={form.zip}
                        onChange={handleChange}
                        className={inputBase}
                      />
                    </div>

                    {/* Bathroom Type */}
                    <div>
                      <label
                        htmlFor="lf-bathroomType"
                        className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-dark"
                      >
                        Bathroom Type
                      </label>
                      <div className="relative">
                        <select
                          id="lf-bathroomType"
                          name="bathroomType"
                          value={form.bathroomType}
                          onChange={handleChange}
                          className={selectBase}
                        >
                          <option value="">Select type</option>
                          {BATHROOM_TYPE_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate/50 text-xs"
                        >
                          ▾
                        </span>
                      </div>
                    </div>

                    {/* Project Goal */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="lf-projectGoal"
                        className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-dark"
                      >
                        Project Goal
                      </label>
                      <div className="relative">
                        <select
                          id="lf-projectGoal"
                          name="projectGoal"
                          value={form.projectGoal}
                          onChange={handleChange}
                          className={selectBase}
                        >
                          <option value="">Select a goal</option>
                          {PROJECT_GOAL_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate/50 text-xs"
                        >
                          ▾
                        </span>
                      </div>
                    </div>

                    {/* Preferred Call Time */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="lf-callTime"
                        className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-dark"
                      >
                        Preferred Call Time
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {CALL_TIME_OPTIONS.map((opt) => (
                          <label
                            key={opt}
                            className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                              form.callTime === opt
                                ? 'border-gold bg-gold/10 text-navy'
                                : 'border-warm-gray bg-white text-slate hover:border-gold/50'
                            }`}
                          >
                            <input
                              type="radio"
                              name="callTime"
                              value={opt}
                              checked={form.callTime === opt}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            {opt}
                          </label>
                        ))}
                      </div>
                    </div>

                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full justify-center"
                  >
                    {LEAD_FORM.cta}
                  </Button>

                  <p className="mt-4 text-center text-xs leading-relaxed text-slate/70">
                    {LEAD_FORM.privacyText}
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </Container>
    </Section>
  )
}
