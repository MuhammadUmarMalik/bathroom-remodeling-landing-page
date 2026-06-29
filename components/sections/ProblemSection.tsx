'use client'

import { Phone, ShowerHead, Grid2x2, Archive, Lightbulb, Sparkles, LayoutDashboard, Shield } from 'lucide-react'
import { BRAND, PROBLEM } from '@/lib/constants'
import { Section, Container } from '@/components/layout'
import { SectionHeading, Button, ScrollReveal, MagicBento } from '@/components/ui'
import type { BentoItem } from '@/components/ui'

const PROBLEM_CARDS: BentoItem[] = [
  { icon: ShowerHead,      label: 'Shower & Tub',   title: 'Outdated shower or bathtub' },
  { icon: Grid2x2,         label: 'Flooring',        title: 'Worn flooring or tile' },
  { icon: Archive,         label: 'Storage',         title: 'Limited storage' },
  { icon: Lightbulb,       label: 'Lighting',        title: 'Poor lighting' },
  { icon: Sparkles,        label: 'Surfaces',        title: 'Hard-to-clean surfaces' },
  { icon: LayoutDashboard, label: 'Layout',          title: 'Layout that no longer fits your needs' },
  { icon: Shield,          label: 'Accessibility',   title: 'Need for safer access or easier movement' },
]

export function ProblemSection() {
  return (
    <Section id="problem" bg="warm-gray">
      <Container>
        <SectionHeading
          headline={PROBLEM.headline}
          subheadline={PROBLEM.subheadline}
        />

        <div className="mb-12">
          <MagicBento
            items={PROBLEM_CARDS}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={false}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={8}
          />
        </div>

        <ScrollReveal direction="up" className="flex justify-center">
          <Button href={`tel:${BRAND.phone}`} size="lg">
            <Phone className="size-4" aria-hidden="true" />
            {PROBLEM.cta}
          </Button>
        </ScrollReveal>
      </Container>
    </Section>
  )
}
