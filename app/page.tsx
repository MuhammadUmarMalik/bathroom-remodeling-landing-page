import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { BookingModal } from '@/components/shared/BookingModal'
import { PhoneButton } from '@/components/shared/PhoneButton'

import { Hero } from '@/components/sections/Hero'
import { PainPoint } from '@/components/sections/PainPoint'
import { Services } from '@/components/sections/Services'
import { WhyUs } from '@/components/sections/WhyUs'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Gallery } from '@/components/sections/Gallery'
import { Testimonials } from '@/components/sections/Testimonials'
import { Offer } from '@/components/sections/Offer'
import { FAQ } from '@/components/sections/FAQ'
import { FinalCTA } from '@/components/sections/FinalCTA'

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <PainPoint />
        <Services />
        <WhyUs />
        <HowItWorks />
        <Gallery />
        <Testimonials />
        <Offer />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />

      {/* Global: booking modal (client, driven by Zustand store) */}
      <BookingModal />

      {/* Sticky phone bar — renders only on mobile via useIsMobile hook */}
      <PhoneButton />
    </>
  )
}
