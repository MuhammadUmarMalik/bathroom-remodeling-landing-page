import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { BRAND } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Contact Us | ${BRAND.name}`,
  description: `Contact ${BRAND.name} to schedule your free bathroom remodeling consultation. Call us at ${BRAND.phone} or send us an email.`,
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-warm-white pt-24 pb-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        <div className="mb-10">
          <Link
            href="/"
            className="text-sm font-medium text-gold hover:text-gold-dark transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <h1 className="mb-4 font-serif text-4xl font-bold text-navy sm:text-5xl">
            Contact Us
          </h1>
          <p className="text-lg text-slate-dark leading-relaxed">
            Ready to start your bathroom remodel? Call us directly or send an email
            and a team member will get back to you to schedule your free consultation.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Contact info */}
          <div className="space-y-8">

            {/* Phone */}
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-warm-gray">
              <div className="mb-4 inline-flex size-12 items-center justify-center rounded-full bg-gold/10">
                <Phone className="size-6 text-gold" aria-hidden="true" />
              </div>
              <h2 className="mb-2 font-serif text-xl font-semibold text-navy">Call Us</h2>
              <p className="mb-4 text-sm text-slate">
                The fastest way to reach us. We&rsquo;re available during business hours.
              </p>
              <a
                href={`tel:${BRAND.phone}`}
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gold-dark"
              >
                <Phone className="size-4" aria-hidden="true" />
                {BRAND.phone}
              </a>
            </div>

            {/* Email */}
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-warm-gray">
              <div className="mb-4 inline-flex size-12 items-center justify-center rounded-full bg-gold/10">
                <Mail className="size-6 text-gold" aria-hidden="true" />
              </div>
              <h2 className="mb-2 font-serif text-xl font-semibold text-navy">Email Us</h2>
              <p className="mb-4 text-sm text-slate">
                Send us a message and we&rsquo;ll respond within one business day.
              </p>
              <a
                href={`mailto:${BRAND.email}`}
                className="text-gold font-medium hover:text-gold-dark transition-colors underline"
              >
                {BRAND.email}
              </a>
            </div>

            {/* Hours & location */}
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-warm-gray">
              <div className="mb-4 inline-flex size-12 items-center justify-center rounded-full bg-gold/10">
                <Clock className="size-6 text-gold" aria-hidden="true" />
              </div>
              <h2 className="mb-4 font-serif text-xl font-semibold text-navy">Business Hours</h2>
              <dl className="space-y-2 text-sm text-slate-dark">
                <div className="flex justify-between">
                  <dt>Monday – Friday</dt>
                  <dd className="font-medium">8:00 AM – 6:00 PM</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Saturday</dt>
                  <dd className="font-medium">9:00 AM – 4:00 PM</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Sunday</dt>
                  <dd className="font-medium text-slate">Closed</dd>
                </div>
              </dl>
              <div className="mt-5 flex items-start gap-2 text-sm text-slate">
                <MapPin className="size-4 mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                <span>{BRAND.address} and surrounding areas</span>
              </div>
            </div>

          </div>

          {/* Right panel */}
          <div className="space-y-8">

            {/* What to expect */}
            <div className="rounded-2xl bg-navy p-8 text-warm-white/90">
              <h2 className="mb-4 font-serif text-xl font-semibold text-warm-white">
                What Happens After You Call
              </h2>
              <ol className="space-y-5">
                {[
                  {
                    step: '01',
                    title: 'Brief intro call',
                    desc: 'We ask a few questions about your bathroom and project goals.',
                  },
                  {
                    step: '02',
                    title: 'Schedule your consultation',
                    desc: 'We set up a time to visit your home at no charge.',
                  },
                  {
                    step: '03',
                    title: 'Review your options',
                    desc: 'We walk through layout, materials, timeline, and budget options together.',
                  },
                  {
                    step: '04',
                    title: 'Receive a written estimate',
                    desc: 'You get a clear estimate based on the agreed project scope.',
                  },
                ].map(({ step, title, desc }) => (
                  <li key={step} className="flex gap-4">
                    <span className="mt-0.5 shrink-0 font-serif text-lg font-bold text-gold">{step}</span>
                    <div>
                      <p className="font-semibold text-warm-white">{title}</p>
                      <p className="text-sm text-warm-white/70">{desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Service areas preview */}
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-warm-gray">
              <h2 className="mb-4 font-serif text-xl font-semibold text-navy">Service Areas</h2>
              <p className="mb-4 text-sm text-slate">
                We serve homeowners in all 50 US states.
              </p>
              <div className="flex items-center gap-3 rounded-xl bg-gold/10 px-4 py-3">
                <MapPin className="size-5 shrink-0 text-gold" aria-hidden="true" />
                <p className="text-sm font-medium text-navy">
                  Nationwide coverage — local specialists everywhere
                </p>
              </div>
              <Link
                href="/service-areas"
                className="mt-5 inline-block text-sm font-medium text-gold hover:text-gold-dark transition-colors"
              >
                View all states we serve →
              </Link>
            </div>

          </div>
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-14 rounded-2xl bg-gold/10 border border-gold/20 p-8 text-center">
          <h2 className="mb-2 font-serif text-2xl font-semibold text-navy">
            Ready to Get Started?
          </h2>
          <p className="mb-6 text-slate-dark">
            Call us now for a free, no-obligation bathroom remodeling consultation.
          </p>
          <a
            href={`tel:${BRAND.phone}`}
            className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 font-semibold text-white transition-colors hover:bg-gold-dark"
          >
            <Phone className="size-5" aria-hidden="true" />
            {BRAND.phone}
          </a>
        </div>

      </div>
    </main>
  )
}
