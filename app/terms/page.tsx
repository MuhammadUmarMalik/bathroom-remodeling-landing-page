import type { Metadata } from 'next'
import Link from 'next/link'
import { BRAND } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Terms & Conditions | ${BRAND.name}`,
  description: `Terms and Conditions for ${BRAND.name}. Please read before using our website or requesting bathroom remodeling services.`,
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-warm-white pt-24 pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">

        <div className="mb-10">
          <Link
            href="/"
            className="text-sm font-medium text-gold hover:text-gold-dark transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        <h1 className="mb-4 font-serif text-4xl font-bold text-navy">
          Terms &amp; Conditions
        </h1>
        <p className="mb-10 text-sm text-slate">
          Last updated: June 29, 2026
        </p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-dark leading-relaxed">

          <section>
            <h2 className="font-serif text-2xl font-semibold text-navy mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the {BRAND.name} website (&ldquo;Site&rdquo;) or requesting our
              services, you agree to be bound by these Terms &amp; Conditions. If you do not agree to
              these terms, please do not use our Site or services.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-navy mb-3">2. Services Description</h2>
            <p>
              {BRAND.name} provides bathroom remodeling services including full bathroom remodels,
              shower replacements, tub-to-shower conversions, vanity and storage updates, tile and
              flooring work, and accessibility improvements. All services are subject to a written
              project agreement signed by both parties prior to work commencing.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-navy mb-3">3. Free Consultations</h2>
            <p>
              Requesting or scheduling a free consultation does not create a binding contract or
              obligation to purchase services. A consultation is an opportunity to discuss your project
              goals, scope, and budget. Work begins only after a written estimate and project agreement
              have been reviewed and signed by the homeowner.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-navy mb-3">4. Project Estimates</h2>
            <p className="mb-3">
              Written estimates provided by {BRAND.name} are based on the project scope discussed at
              the time of consultation. Estimates may be subject to change if:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The scope of work changes after the estimate is issued.</li>
              <li>Unforeseen conditions are discovered during demolition or construction.</li>
              <li>Material costs change due to supplier pricing beyond our control.</li>
              <li>The customer requests additions or modifications to the original scope.</li>
            </ul>
            <p className="mt-3">
              Any changes to scope or cost will be communicated in writing before additional work proceeds.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-navy mb-3">5. Website Use</h2>
            <p className="mb-3">
              You agree to use this Site only for lawful purposes and in a manner that does not infringe
              the rights of others. You must not:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the Site in any way that violates applicable local, national, or international law.</li>
              <li>Transmit unsolicited or unauthorized advertising or promotional material.</li>
              <li>Attempt to gain unauthorized access to any part of the Site or its related systems.</li>
              <li>Reproduce, duplicate, or sell any part of this Site without our written permission.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-navy mb-3">6. Intellectual Property</h2>
            <p>
              All content on this Site, including text, photographs, graphics, logos, and design, is the
              property of {BRAND.name} or its content suppliers and is protected by applicable copyright
              and intellectual property laws. You may not copy, reproduce, distribute, or create derivative
              works from any content without prior written consent.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-navy mb-3">7. Project Photography</h2>
            <p>
              Photos on this Site represent completed projects from our portfolio or are clearly labeled
              as design inspiration images. We do not represent inspiration images as our own completed
              work. Actual results may vary based on your home&rsquo;s layout, chosen materials, project
              scope, and other factors.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-navy mb-3">8. Disclaimer of Warranties</h2>
            <p>
              This Site is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without
              warranties of any kind, either express or implied, including but not limited to warranties
              of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant
              that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-navy mb-3">9. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, {BRAND.name} shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages arising from your use of this Site
              or our services. Our total liability for any claim arising from your use of the Site or
              services shall not exceed the amount paid by you for the services in question.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-navy mb-3">10. Third-Party Links</h2>
            <p>
              This Site may contain links to third-party websites. These links are provided for your
              convenience only. We have no control over the content of those sites and accept no
              responsibility for them or for any loss or damage that may arise from your use of them.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-navy mb-3">11. Governing Law</h2>
            <p>
              These Terms &amp; Conditions are governed by and construed in accordance with the laws
              of the State of Texas, without regard to its conflict of law provisions. Any disputes
              arising under these terms shall be subject to the exclusive jurisdiction of the courts
              located in Travis County, Texas.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-navy mb-3">12. Changes to Terms</h2>
            <p>
              We reserve the right to update these Terms &amp; Conditions at any time. Changes will be
              posted on this page with an updated &ldquo;Last updated&rdquo; date. Your continued use
              of the Site after changes are posted constitutes your acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-navy mb-3">13. Contact Us</h2>
            <p className="mb-3">
              If you have questions about these Terms &amp; Conditions, please contact us:
            </p>
            <address className="not-italic space-y-1">
              <p className="font-semibold text-navy">{BRAND.name}</p>
              <p>{BRAND.address}</p>
              <p>
                Phone:{' '}
                <a href={`tel:${BRAND.phone}`} className="text-gold hover:text-gold-dark">
                  {BRAND.phone}
                </a>
              </p>
              <p>
                Email:{' '}
                <a href={`mailto:${BRAND.email}`} className="text-gold hover:text-gold-dark underline">
                  {BRAND.email}
                </a>
              </p>
            </address>
          </section>

        </div>
      </div>
    </main>
  )
}
