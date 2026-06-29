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
} from '@/components/sections'

export default function HomePage() {
  return (
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
  )
}
