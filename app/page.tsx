import dynamic from 'next/dynamic'
import { HeroSection } from '@/components/sections'
import { LazyMount } from '@/components/ui'

// HeroSection is above the fold — loads eagerly, sets LCP.
// Sections are split into two groups:
//   • Near-fold (ssr: true explicitly): SSR'd so their CSS lands in the main
//     HTML chunk, preventing a render-blocking lazy stylesheet flash.
//   • Below-fold: also ssr: true (the only option in a Server Component —
//     ssr: false is forbidden here per Next.js docs). LazyMount's intersection
//     observer already defers their JS until they near the viewport.

// --- Near-fold: rendered on server, CSS bundled with initial HTML ---
const ProblemSection = dynamic(
  () => import('@/components/sections/ProblemSection').then(m => ({ default: m.ProblemSection })),
  { ssr: true },
)
const ServicesSection = dynamic(
  () => import('@/components/sections/ServicesSection').then(m => ({ default: m.ServicesSection })),
  { ssr: true },
)

// --- Below-fold: default ssr: true (Server Component constraint) ---
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

      <LazyMount minHeight={500}>
        <ProblemSection />
      </LazyMount>

      <LazyMount minHeight={650}>
        <ServicesSection />
      </LazyMount>

      <LazyMount minHeight={600}>
        <GallerySection />
      </LazyMount>

      <LazyMount minHeight={550}>
        <BenefitsSection />
      </LazyMount>

      <LazyMount minHeight={900}>
        <ProcessSection />
      </LazyMount>

      <LazyMount minHeight={500}>
        <WhyChooseUsSection />
      </LazyMount>

      <LazyMount minHeight={500}>
        <ReviewsSection />
      </LazyMount>

      <LazyMount minHeight={400}>
        <ServiceAreaSection />
      </LazyMount>

      <LazyMount minHeight={600}>
        <FAQSection />
      </LazyMount>

      <LazyMount minHeight={350}>
        <FinalCTASection />
      </LazyMount>
    </main>
  )
}
