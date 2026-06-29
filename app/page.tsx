import { SiteHeader } from '@/components/layout'
import {
  HeroSection,
  ProblemSection,
  ServicesSection,
  GallerySection,
  BenefitsSection,
  ProcessSection,
  WhyChooseUsSection,
  ReviewsSection,
  ConsultationOfferSection,
  ServiceAreaSection,
  FAQSection,
  FinalCTASection,
  Footer,
} from '@/components/sections'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ProblemSection />
        <ServicesSection />
        <GallerySection />
        <BenefitsSection />
        <ProcessSection />
        <WhyChooseUsSection />
        <ReviewsSection />
        <ServiceAreaSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  )
}
