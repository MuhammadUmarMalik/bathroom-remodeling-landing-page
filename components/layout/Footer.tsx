import { Phone, MapPin, Clock } from 'lucide-react'
import {
  COMPANY_NAME,
  PHONE,
  PHONE_TEL,
  FULL_ADDRESS,
  CITY,
  STATE,
  ZIP,
  ADDRESS,
  SITE_URL,
  SERVICE_AREAS,
} from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-dark text-warm-white/80" itemScope itemType="https://schema.org/LocalBusiness">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand + NAP */}
          <div className="lg:col-span-2">
            <p className="font-serif text-2xl font-bold text-warm-white mb-2" itemProp="name">
              {COMPANY_NAME}
            </p>
            <p className="text-sm text-warm-white/60 mb-6 max-w-xs leading-relaxed">
              Premium bathroom remodeling for Austin-area homeowners. Licensed, insured, and backed by a 10-year workmanship warranty.
            </p>

            {/* NAP — structured for Local SEO */}
            <address
              className="not-italic space-y-3"
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <span className="text-sm">
                  <span itemProp="streetAddress">{ADDRESS}</span>
                  <br />
                  <span itemProp="addressLocality">{CITY}</span>,{' '}
                  <span itemProp="addressRegion">{STATE}</span>{' '}
                  <span itemProp="postalCode">{ZIP}</span>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-gold shrink-0" />
                <a
                  href={PHONE_TEL}
                  data-event="phone_click_footer"
                  data-gtag="phone_click"
                  itemProp="telephone"
                  className="text-sm hover:text-gold transition-colors"
                >
                  {PHONE}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock size={16} className="text-gold shrink-0" />
                <span className="text-sm">Mon–Fri 8am–6pm · Sat 9am–2pm</span>
              </div>
            </address>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-warm-white font-semibold text-sm uppercase tracking-widest mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {[
                'Full Bathroom Remodel',
                'Shower & Tub Conversion',
                'Tile & Stone Installation',
                'Vanity & Fixture Upgrades',
                'Walk-In Shower Design',
                'Accessible Bathroom Design',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm hover:text-gold transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-warm-white font-semibold text-sm uppercase tracking-widest mb-4">
              Service Areas
            </h3>
            <ul className="space-y-2.5">
              {SERVICE_AREAS.map((area) => (
                <li key={area} className="text-sm">
                  {area}, {STATE}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-warm-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-warm-white/40">
            © {currentYear} {COMPANY_NAME}. All rights reserved. · Licensed Texas Contractor · Fully Insured
          </p>
          <div className="flex items-center gap-4">
            <a href={`${SITE_URL}/privacy`} className="text-xs text-warm-white/40 hover:text-warm-white/70 transition-colors">
              Privacy Policy
            </a>
            <a href={`${SITE_URL}/terms`} className="text-xs text-warm-white/40 hover:text-warm-white/70 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
