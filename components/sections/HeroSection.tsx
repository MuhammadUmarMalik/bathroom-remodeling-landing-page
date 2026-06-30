// Server Component — no 'use client', no framer-motion, no JS for animations.
// Animations are pure CSS (globals.css) so the h1 (LCP element) renders immediately
// without waiting for hydration. The CTA pulse ring uses CSS @keyframes, not JS.
// The video uses <source media="(min-width: 768px)"> so mobile never downloads it.

import { MapPin, Phone, MessageCircle, FileText, ChevronDown } from 'lucide-react'
import { BRAND, HERO } from '@/lib/constants'
import { Container } from '@/components/layout'
import { Button } from '@/components/ui'

const trustItems = [
  { icon: MapPin,        text: 'Local Bathroom Remodeling Service' },
  { icon: MessageCircle, text: 'Free Consultation' },
  { icon: FileText,      text: 'Clear Project Estimate' },
]

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-navy-dark pt-18">

      {/* ── Background: static WebP always in DOM, video only on md+ via source media ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/hero-image.webp"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      {/* source media ensures mobile browsers never download the video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="/hero-image.webp"
        className="absolute inset-0 z-0 h-full w-full object-cover"
        aria-hidden="true"
      >
        <source media="(min-width: 768px)" src="/hero-section-video.mp4" type="video/mp4" />
      </video>

      {/* ── Overlay ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-1"
        style={{
          background:
            'linear-gradient(105deg, rgba(19,32,58,0.93) 0%, rgba(19,32,58,0.78) 50%, rgba(19,32,58,0.40) 100%)',
        }}
      />

      {/* ── Vignette ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-2"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(11,26,44,0.45) 100%)',
        }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 flex flex-1 items-center">
        <Container className="py-14 sm:py-16 md:py-20 lg:py-24 2xl:py-28">
          <div className="max-w-2xl 2xl:max-w-3xl">

            {/* Location badge — CSS fade-in */}
            <div className="hero-fade-in mb-5" style={{ animationDelay: '0ms' }}>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold">
                <MapPin className="size-3" aria-hidden="true" />
                Austin, TX · Local Remodeling Team
              </span>
            </div>

            {/* Headline — NO animation: immediately visible so browser can record LCP */}
            <h1 className="mb-4 font-serif text-[1.85rem] font-bold leading-[1.1] tracking-tight text-warm-white sm:text-4xl md:text-5xl lg:text-[3.5rem] 2xl:text-6xl">
              {HERO.headline}
            </h1>

            {/* Gold accent line — CSS scale-x animation */}
            <div
              aria-hidden="true"
              className="hero-scale-x mb-5 h-0.5 w-20 origin-left rounded-full"
              style={{
                background: 'linear-gradient(to right, #E07830, transparent)',
                animationDelay: '80ms',
              }}
            />

            {/* Subheadline — CSS fade-in */}
            <p
              className="hero-fade-in mb-8 max-w-full text-base leading-relaxed text-warm-white/85 sm:max-w-lg md:text-lg 2xl:text-xl"
              style={{ animationDelay: '120ms' }}
            >
              {HERO.subheadline}
            </p>

            {/* CTAs — CSS fade-in */}
            <div
              className="hero-fade-in flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: '200ms' }}
            >
              <div className="relative inline-flex shrink-0">
                {/* Pulsing ring — pure CSS, zero JS */}
                <span
                  aria-hidden="true"
                  className="animate-cta-pulse pointer-events-none absolute -inset-1 rounded-full border border-gold/45"
                />
                <Button
                  href={`tel:${BRAND.phone}`}
                  size="lg"
                  aria-label="Book your free bathroom remodel consultation"
                >
                  <Phone className="size-4 shrink-0" aria-hidden="true" />
                  {HERO.primaryCta}
                </Button>
              </div>

              <Button href="#gallery" variant="secondary" size="lg">
                {HERO.secondaryCta}
              </Button>
            </div>

            {/* Trust strip */}
            <div
              aria-label="Trust highlights"
              className="hero-fade-in mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-warm-white/10 pt-5"
              style={{ animationDelay: '300ms' }}
            >
              {trustItems.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-warm-white/80">
                  <Icon className="size-3.5 shrink-0 text-gold/70" aria-hidden="true" />
                  {text}
                </div>
              ))}
            </div>

          </div>
        </Container>
      </div>

      {/* ── Scroll indicator — Tailwind animate-bounce (CSS, no JS) ── */}
      <div
        className="animate-bounce absolute bottom-6 left-1/2 z-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <ChevronDown className="size-5 text-warm-white/25" />
      </div>

    </section>
  )
}
