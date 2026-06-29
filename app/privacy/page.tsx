import type { Metadata } from 'next'
import Link from 'next/link'
import { BRAND } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Privacy Policy | ${BRAND.name}`,
  description: `Privacy Policy for ${BRAND.name}. Learn how we collect, use, and protect your personal information.`,
}

export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>
        <p className="mb-10 text-sm text-slate">
          Last updated: June 29, 2026
        </p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-dark leading-relaxed">

          <section>
            <h2 className="font-serif text-2xl font-semibold text-navy mb-3">1. Introduction</h2>
            <p>
              {BRAND.name} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to
              protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website or contact us about bathroom
              remodeling services. Please read this policy carefully.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-navy mb-3">2. Information We Collect</h2>
            <p className="mb-3">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Contact Information:</strong> Name, phone number, and email address when you
                call us or contact us through the website.
              </li>
              <li>
                <strong>Project Details:</strong> Information about your bathroom remodeling project,
                such as scope, timeline preferences, and budget range, shared during consultations.
              </li>
              <li>
                <strong>Usage Data:</strong> Standard web analytics data including pages visited, time
                spent on the site, browser type, and referring URLs. This data is collected in
                aggregate and is not personally identifiable.
              </li>
              <li>
                <strong>Communications:</strong> Records of phone calls, emails, or messages you send
                us regarding a project or consultation.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-navy mb-3">3. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Schedule and conduct free consultations about your remodeling project.</li>
              <li>Provide project estimates and follow up on open inquiries.</li>
              <li>Respond to your questions and provide customer support.</li>
              <li>Improve our website and service offerings.</li>
              <li>Send you relevant communications about your project, if applicable.</li>
            </ul>
            <p className="mt-3">
              We do not sell, rent, or trade your personal information to third parties for
              marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-navy mb-3">4. Information Sharing</h2>
            <p className="mb-3">
              We may share your information only in the following limited circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Service Providers:</strong> We may share information with trusted
                third-party vendors who assist us in operating our business (e.g., scheduling
                software, communication tools), subject to confidentiality agreements.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose your information if required by
                law, court order, or government regulation.
              </li>
              <li>
                <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale
                of assets, your information may be transferred as part of that transaction.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-navy mb-3">5. Cookies and Tracking</h2>
            <p>
              Our website may use cookies and similar tracking technologies to improve your browsing
              experience and analyze site traffic. You can instruct your browser to refuse all cookies
              or to indicate when a cookie is being sent. Some features of our website may not function
              properly if cookies are disabled.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-navy mb-3">6. Data Security</h2>
            <p>
              We implement reasonable administrative, technical, and physical safeguards to protect
              your personal information. However, no method of transmission over the internet or
              electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-navy mb-3">7. Your Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Request access to the personal information we hold about you.</li>
              <li>Request correction of any inaccurate information.</li>
              <li>Request deletion of your personal information, subject to legal obligations.</li>
              <li>Opt out of any marketing communications we may send.</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us at{' '}
              <a href={`mailto:${BRAND.email}`} className="text-gold hover:text-gold-dark underline">
                {BRAND.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-navy mb-3">8. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the
              privacy practices or content of those sites. We encourage you to review the privacy
              policies of any third-party sites you visit.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-navy mb-3">9. Children&rsquo;s Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly
              collect personal information from children. If you believe we have inadvertently
              collected such information, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-navy mb-3">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this
              page with an updated &ldquo;Last updated&rdquo; date. Continued use of our website after
              changes are posted constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-navy mb-3">11. Contact Us</h2>
            <p className="mb-3">
              If you have questions or concerns about this Privacy Policy, please contact us:
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
