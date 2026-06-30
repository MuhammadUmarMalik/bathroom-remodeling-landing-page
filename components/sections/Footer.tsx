import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { BRAND, FOOTER, NAV_LINKS } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-navy-dark text-warm-white/70">

      {/* Top CTA strip */}
      <div className="border-b border-warm-white/10 bg-navy">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-4 sm:flex-row sm:gap-4 sm:px-6 sm:py-5 lg:px-8 2xl:max-w-screen-2xl 2xl:px-12">
          <p className="text-sm font-medium text-warm-white">
            {FOOTER.cta}
          </p>
          <a
            href={`tel:${BRAND.phone}`}
            className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-navy-dark transition-colors hover:bg-gold-light"
          >
            <Phone className="size-4" aria-hidden="true" />
            {BRAND.phone}
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 2xl:max-w-screen-2xl 2xl:px-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand col */}
          <div className="lg:col-span-2">
            <p className="mb-3 font-serif text-xl font-bold text-warm-white">
              {BRAND.name}
            </p>
            <p className="mb-6 max-w-xs text-sm leading-relaxed">
              Local bathroom remodeling services in Austin, TX and surrounding areas.
              Free consultations available.
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`tel:${BRAND.phone}`}
                  className="flex items-center gap-2 transition-colors hover:text-gold"
                >
                  <Phone className="size-4 shrink-0 text-gold" aria-hidden="true" />
                  {BRAND.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-center gap-2 transition-colors hover:text-gold"
                >
                  <Mail className="size-4 shrink-0 text-gold" aria-hidden="true" />
                  {BRAND.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="size-4 shrink-0 text-gold" aria-hidden="true" />
                {BRAND.address}
              </li>
            </ul>
          </div>

          {/* Services nav */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-warm-white">
              Navigation
            </p>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal nav */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-warm-white">
              Legal
            </p>
            <ul className="space-y-2 text-sm">
              {FOOTER.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {BRAND.licenseNumber && (
              <p className="mt-4 text-xs text-warm-white/40">
                License #{BRAND.licenseNumber}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-warm-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-1.5 px-4 py-4 text-xs sm:flex-row sm:gap-2 sm:px-6 sm:py-5 lg:px-8 2xl:max-w-screen-2xl 2xl:px-12">
          <p>
            &copy; {FOOTER.copyrightYear} {BRAND.name}. All rights reserved.
          </p>
          <p>Austin, TX Bathroom Remodeling Services</p>
        </div>
      </div>
    </footer>
  )
}
