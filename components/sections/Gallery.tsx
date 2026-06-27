'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { CTAButton } from '@/components/shared/CTAButton'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { galleryItems } from '@/data/gallery'

export function Gallery() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <SectionWrapper id="gallery" background="white">
      <SectionHeading
        headline="Our Work"
        subheadline="A sample of recent bathroom transformations in Austin and surrounding communities."
      />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {galleryItems.map((item, index) => (
          <motion.figure
            key={item.src}
            variants={{
              hidden: { opacity: 0, scale: 0.97 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.5, ease: 'easeOut' },
              },
            }}
            className={`relative overflow-hidden rounded-sm bg-warm-gray group ${
              index === 1 || index === 3 ? 'sm:row-span-2' : ''
            }`}
            style={{
              aspectRatio:
                index === 1 || index === 3 ? '4/5' : '4/3',
            }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              loading={index < 3 ? 'eager' : 'lazy'}
            />

            {/* Tag */}
            <figcaption className="absolute bottom-0 inset-x-0 bg-linear-to-t from-navy/80 via-navy/30 to-transparent pt-10 pb-4 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-warm-white text-sm font-semibold">{item.tag}</span>
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>

      <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
        <CTAButton size="lg" label="Get Your Free Design Call" data-event="cta_click_gallery" />
        <p className="text-sm text-slate">We can do this for your bathroom too.</p>
      </div>
    </SectionWrapper>
  )
}
