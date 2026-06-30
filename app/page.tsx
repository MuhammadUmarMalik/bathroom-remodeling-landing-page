import dynamic from 'next/dynamic'
import { HeroSection } from '@/components/sections'

// HeroSection loads eagerly — it is above the fold and sets LCP.
// All sections below the fold are code-split so their JS (framer-motion,
// GSAP, OGL) is only parsed after the hero is interactive, slashing TBT.

const ProblemSection = dynamic(
  () => import('@/components/sections/ProblemSection').then(m => ({ default: m.ProblemSection })),
)
const ServicesSection = dynamic(
  () => import('@/components/sections/ServicesSection').then(m => ({ default: m.ServicesSection })),
)
const GallerySection = dynamic(
  () => import('@/components/sections/GallerySection').then(m => ({ default: m.GallerySection })),
)
const BenefitsSection = dynamic(
  () => import('@/components/sections/BenefitsSection').then(m => ({ default: m.BenefitsSection })),
)
const ProcessSection = dynamic(
  () => import('@/components/sections/ProcessSection').then(m => ({ default: m.ProcessSection })),
)
const WhyChooseUsSection = dynamic(
  () => import('@/components/sections/WhyChooseUsSection').then(m => ({ default: m.WhyChooseUsSection })),
)
const ReviewsSection = dynamic(
  () => import('@/components/sections/ReviewsSection').then(m => ({ default: m.ReviewsSection })),
)

const ServiceAreaSection = dynamic(
  () => import('@/components/sections/ServiceAreaSection').then(m => ({ default: m.ServiceAreaSection })),
)
const FAQSection = dynamic(
  () => import('@/components/sections/FAQSection').then(m => ({ default: m.FAQSection })),
)
const FinalCTASection = dynamic(
  () => import('@/components/sections/FinalCTASection').then(m => ({ default: m.FinalCTASection })),
)

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
