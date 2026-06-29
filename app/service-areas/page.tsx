import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MapPin, CheckCircle } from 'lucide-react'
import { BRAND, US_STATES } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Service Areas | ${BRAND.name}`,
  description: `${BRAND.name} provides bathroom remodeling services across all 50 US states. Call ${BRAND.phone} to schedule your free consultation.`,
}

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Call or Contact Us',
    body: 'Reach out by phone or email to tell us about your bathroom project and location. We match you with a specialist in your area.',
  },
  {
    step: '02',
    title: 'Free In-Home Consultation',
    body: 'A local remodeling specialist visits your home to assess the space, discuss your goals, and walk through design options.',
  },
  {
    step: '03',
    title: 'Written Estimate',
    body: 'You receive a clear, itemized estimate based on your specific project scope before any work begins.',
  },
  {
    step: '04',
    title: 'Expert Installation',
    body: 'Our vetted local crews handle the full project — from demo through final walkthrough — with clean, professional work.',
  },
]

const WHY_NATIONWIDE = [
  {
    title: 'Vetted Local Specialists',
    body: 'Every market is served by licensed, insured remodeling professionals who know local codes, suppliers, and building conditions.',
  },
  {
    title: 'Consistent Standards Everywhere',
    body: 'Regardless of where you live, you get the same consultation process, written estimate, and quality commitment.',
  },
  {
    title: 'All Project Sizes Welcome',
    body: 'From a single shower replacement to a full master bath remodel, we handle projects of all scopes across every state.',
  },
  {
    title: 'Local Code Compliance',
    body: 'Our specialists are familiar with state and local building codes, permit requirements, and inspection processes in your area.',
  },
  {
    title: 'No Hidden Travel Fees',
    body: 'Your consultation and estimate are free. Working with a local specialist in your market means no out-of-state travel charges.',
  },
  {
    title: 'Ongoing Support',
    body: 'After your project is complete, your local specialist remains your point of contact for any follow-up questions or warranty needs.',
  },
]

export default function ServiceAreasPage() {
  return (
    <main className="min-h-screen bg-warm-white pt-24 pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <div className="mb-10">
          <Link
            href="/"
            className="text-sm font-medium text-gold hover:text-gold-dark transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Hero */}
        <div className="mb-14 max-w-2xl">
          <h1 className="mb-4 font-serif text-4xl font-bold text-navy sm:text-5xl">
            Serving All 50 States
          </h1>
          <p className="text-lg text-slate-dark leading-relaxed">
            {BRAND.name} connects homeowners across the country with trusted local bathroom
            remodeling specialists. No matter where you live, you get a free consultation,
            a clear written estimate, and expert installation.
          </p>
          <a
            href={`tel:${BRAND.phone}`}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-white transition-colors hover:bg-gold-dark"
          >
            <Phone className="size-5" aria-hidden="true" />
            Call {BRAND.phone}
          </a>
        </div>

        {/* How it works */}
        <section className="mb-20">
          <h2 className="mb-8 font-serif text-3xl font-bold text-navy">
            How It Works in Your State
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HOW_IT_WORKS.map(({ step, title, body }) => (
              <div
                key={step}
                className="rounded-2xl bg-white p-6 shadow-sm border border-warm-gray"
              >
                <span className="mb-3 block font-serif text-3xl font-bold text-gold">{step}</span>
                <h3 className="mb-2 font-serif text-lg font-semibold text-navy">{title}</h3>
                <p className="text-sm text-slate-dark leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* All 50 states grid */}
        <section className="mb-20">
          <div className="mb-8 flex items-center gap-3">
            <h2 className="font-serif text-3xl font-bold text-navy">States We Serve</h2>
            <span className="rounded-full bg-gold/10 px-3 py-1 text-sm font-semibold text-gold">
              All 50
            </span>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm border border-warm-gray">
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {US_STATES.map((state) => (
                <li
                  key={state.abbr}
                  className="flex items-center gap-2 text-sm text-slate-dark"
                >
                  <CheckCircle className="size-4 shrink-0 text-gold" aria-hidden="true" />
                  <span>
                    {state.name}{' '}
                    <span className="text-slate">({state.abbr})</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Why nationwide */}
        <section className="mb-20">
          <h2 className="mb-8 font-serif text-3xl font-bold text-navy">
            Why Choose a Nationwide Service
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_NATIONWIDE.map(({ title, body }) => (
              <div
                key={title}
                className="rounded-2xl bg-white p-6 shadow-sm border border-warm-gray"
              >
                <div className="mb-3 inline-flex size-10 items-center justify-center rounded-full bg-gold/10">
                  <MapPin className="size-5 text-gold" aria-hidden="true" />
                </div>
                <h3 className="mb-2 font-serif text-lg font-semibold text-navy">{title}</h3>
                <p className="text-sm text-slate-dark leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="rounded-2xl bg-navy p-10 text-center">
          <h2 className="mb-3 font-serif text-3xl font-bold text-warm-white">
            Ready to Start Your Bathroom Remodel?
          </h2>
          <p className="mb-8 text-warm-white/75 max-w-xl mx-auto">
            Call us today to be connected with a local specialist in your state.
            Free consultation, no obligation.
          </p>
          <a
            href={`tel:${BRAND.phone}`}
            className="inline-flex items-center gap-2 rounded-full bg-gold px-10 py-4 text-lg font-semibold text-white transition-colors hover:bg-gold-dark"
          >
            <Phone className="size-5" aria-hidden="true" />
            {BRAND.phone}
          </a>
          <p className="mt-4 text-sm text-warm-white/50">
            Available Mon–Fri 8am–6pm · Sat 9am–4pm
          </p>
        </div>

      </div>
    </main>
  )
}
