// ─── Brand ────────────────────────────────────────────────────────────────────

export const BRAND = {
  name: 'Elite Bath & Tile',
  phone: '(512) 867-5309',
  email: 'info@elitebathandtile.com',
  address: 'Austin, TX',
  siteUrl: 'https://www.elitebathandtile.com',
  licenseNumber: '', // fill in when available
} as const

// ─── Navigation ───────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#gallery' },
  { label: 'Process', href: '#process' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
] as const

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const HERO = {
  headline: 'Expert Bathroom Remodeling in Austin, TX',
  subheadline:
    'Austin homeowners trust Elite Bath & Tile for full remodels, shower conversions, tile work, and vanity updates. Get a free in-home consultation and clear written estimate.',
  primaryCta: 'Book Your Free Bathroom Remodel Consultation',
  secondaryCta: 'Request a Free Quote',
  trustLine: 'Austin, TX Local Remodeling Team • Free In-Home Consultation • Written Estimate',
} as const

// ─── Lead Form ────────────────────────────────────────────────────────────────

export const LEAD_FORM = {
  headline: 'Request Your Free Bathroom Remodel Consultation',
  subheadline:
    'Share a few details about your bathroom project and a team member will contact you to discuss the next steps.',
  cta: 'Request My Free Consultation',
  privacyText:
    'By submitting this form, you agree to be contacted about your bathroom remodeling request. Your information will not be sold.',
} as const

export const BATHROOM_TYPE_OPTIONS = [
  'Master Bathroom',
  'Guest Bathroom',
  'Half Bathroom',
  'Kids Bathroom',
  'Not Sure Yet',
] as const

export const PROJECT_GOAL_OPTIONS = [
  'Full Bathroom Remodel',
  'Shower Replacement',
  'Tub-to-Shower Conversion',
  'Vanity & Storage Update',
  'Tile & Flooring Update',
  'Accessibility Update',
  'Other / Not Sure',
] as const

export const CALL_TIME_OPTIONS = [
  'Morning (8am – 12pm)',
  'Afternoon (12pm – 5pm)',
  'Evening (5pm – 8pm)',
] as const

// ─── Problem Section ──────────────────────────────────────────────────────────

export const PROBLEM = {
  headline: 'Is Your Austin Bathroom Ready for an Update?',
  subheadline:
    'Austin homeowners remodel their bathrooms to improve comfort, storage, safety, lighting, and everyday function. Here are the most common reasons to start.',
  cta: 'Talk to an Austin Remodeling Specialist',
  points: [
    'Outdated shower or bathtub',
    'Worn flooring or tile',
    'Limited storage',
    'Poor lighting',
    'Hard-to-clean surfaces',
    'Layout that no longer fits your needs',
    'Need for safer access or easier movement',
  ],
} as const

// ─── Services ─────────────────────────────────────────────────────────────────

export const SERVICES_SECTION = {
  headline: 'Bathroom Remodeling Services in Austin, TX',
  subheadline: 'From full gut remodels to targeted updates — choose the scope that fits your bathroom, home, and budget.',
  cta: 'Request a Free Quote',
} as const

export type Service = {
  id: string
  title: string
  description: string
  icon: string
}

export const SERVICES: Service[] = [
  {
    id: 'full-remodel',
    title: 'Full Bathroom Remodel',
    description:
      'Complete gut-to-finish remodel for Austin homeowners — new layout, vanity, shower, tile flooring, lighting, and fixtures.',
    icon: 'Bath',
  },
  {
    id: 'shower-replacement',
    title: 'Shower Replacement',
    description:
      'Replace an outdated Austin shower with a cleaner, more functional system — frameless glass, tile surround, or custom pan options.',
    icon: 'ShowerHead',
  },
  {
    id: 'tub-to-shower',
    title: 'Tub-to-Shower Conversion',
    description:
      'Convert an unused tub into a spacious walk-in shower. Popular for Austin master bathrooms and aging-in-place updates.',
    icon: 'ArrowRightLeft',
  },
  {
    id: 'vanity-storage',
    title: 'Vanity & Storage Updates',
    description:
      'Gain counter space and organized storage with a new vanity, mirrors, lighting, and custom cabinet solutions.',
    icon: 'Package',
  },
  {
    id: 'tile-flooring',
    title: 'Tile & Flooring Installation',
    description:
      'Refresh your Austin bathroom with new floor tile, wall tile, shower surrounds, and decorative accents that last for decades.',
    icon: 'Grid2X2',
  },
  {
    id: 'accessibility',
    title: 'Accessibility & Safety Updates',
    description:
      'Walk-in shower conversions, grab bars, barrier-free entry, and slip-resistant flooring for safer everyday use.',
    icon: 'Accessibility',
  },
]

// ─── Gallery ──────────────────────────────────────────────────────────────────

export const GALLERY_SECTION = {
  headline: 'Recent Bathroom Remodeling Projects',
  subheadline:
    'View examples of completed bathroom updates. Actual results vary based on home layout, materials, project scope, and budget.',
  cta: 'Plan a Bathroom Like This',
  disclaimer:
    'Use only real project photos. If stock photos are used, label them as design inspiration, not completed work.',
} as const

export type Project = {
  id: string
  image: string
  alt: string
  type: string
  location: string
  scope: string
  timeline?: string
  isInspiration?: boolean
}

export const PROJECTS: Project[] = [
  {
    id: 'project-1',
    image: '/images/projects/project-1.jpg',
    alt: 'Master bathroom full remodel in Austin TX',
    type: 'Full Bathroom Remodel',
    location: 'Austin, TX',
    scope: 'New shower, vanity, tile flooring, and lighting',
    timeline: '3 weeks',
  },
  {
    id: 'project-2',
    image: '/images/projects/project-2.jpg',
    alt: 'Tub-to-shower conversion in Austin TX',
    type: 'Tub-to-Shower Conversion',
    location: 'Round Rock, TX',
    scope: 'Removed tub, installed walk-in shower with frameless glass',
    timeline: '1 week',
  },
  {
    id: 'project-3',
    image: '/images/projects/project-3.jpg',
    alt: 'Vanity and storage update in Austin TX',
    type: 'Vanity & Storage Update',
    location: 'Cedar Park, TX',
    scope: 'New double vanity, mirrors, and overhead lighting',
    timeline: '4 days',
  },
]

// ─── Benefits ─────────────────────────────────────────────────────────────────

export const BENEFITS_SECTION = {
  headline: 'Make Your Austin Bathroom Easier to Use Every Day',
  subheadline:
    'A bathroom remodel improves comfort, storage, lighting, and function — and adds lasting value to your Austin home.',
  cta: 'Book Your Free Bathroom Remodel Consultation',
} as const

export const BENEFITS = [
  { id: 'layout', text: 'Better bathroom layout', icon: 'LayoutDashboard' },
  { id: 'storage', text: 'Improved storage', icon: 'Archive' },
  { id: 'shower', text: 'Updated shower or tub', icon: 'ShowerHead' },
  { id: 'cleaning', text: 'Easier cleaning', icon: 'Sparkles' },
  { id: 'lighting', text: 'Better lighting', icon: 'Lightbulb' },
  { id: 'comfort', text: 'More comfortable daily use', icon: 'Smile' },
  { id: 'safety', text: 'Safer entry and movement options', icon: 'Shield' },
  { id: 'budget', text: 'Design choices that fit your budget', icon: 'BadgeDollarSign' },
] as const

// ─── Process ──────────────────────────────────────────────────────────────────

export const PROCESS_SECTION = {
  headline: 'How Austin Bathroom Remodeling Works With Us',
  subheadline:
    'From first call to final walkthrough, we keep every Austin remodeling project on schedule, on budget, and stress-free.',
  cta: 'Book Your Free Bathroom Remodel Consultation',
} as const

export type ProcessStep = {
  number: number
  title: string
  description: string
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: 'Free Consultation',
    description:
      'We listen to your goals, style preferences, budget, and timeline before planning your bathroom remodel.',
  },
  {
    number: 2,
    title: 'Design & Estimate',
    description:
      'Our team reviews your space, recommends layout options, materials, fixtures, and provides a clear project estimate.',
  },
  {
    number: 3,
    title: 'Remodel & Installation',
    description:
      'We handle demolition, plumbing, tile, shower, vanity, lighting, and finishing work with clean project management.',
  },
  {
    number: 4,
    title: 'Final Walkthrough',
    description:
      'We review every detail with you, complete final touch-ups, and make sure your new bathroom is ready to enjoy.',
  },
]

// ─── Why Choose Us ────────────────────────────────────────────────────────────

export const WHY_US_SECTION = {
  headline: 'Why Austin Homeowners Choose Elite Bath & Tile',
  subheadline:
    'From the first call, you get straight answers, a clear written estimate, and a team that respects your home and timeline.',
  cta: 'Book Your Free Bathroom Remodel Consultation',
} as const

export const TRUST_POINTS = [
  { id: 'consultation', text: 'Clear consultation process', icon: 'MessageCircle' },
  { id: 'estimate', text: 'Written project estimate', icon: 'FileText' },
  { id: 'materials', text: 'Help with material and fixture choices', icon: 'Wrench' },
  { id: 'respectful', text: 'Respectful work process', icon: 'HandshakeIcon' },
  { id: 'local', text: 'Local service area knowledge', icon: 'MapPin' },
  { id: 'scope', text: 'Project scope explained before work begins', icon: 'ClipboardList' },
  { id: 'examples', text: 'Real project examples available', icon: 'Images' },
] as const

// ─── Reviews ──────────────────────────────────────────────────────────────────

export const REVIEWS_SECTION = {
  headline: 'What Austin Homeowners Say About Us',
  subheadline: 'Real reviews from homeowners across Austin, Round Rock, Cedar Park, and the surrounding areas.',
  cta: 'Book Your Free Bathroom Remodel Consultation',
} as const

export type Review = {
  id: string
  name: string
  city: string
  rating: number
  text: string
}

export const REVIEWS: Review[] = [
  {
    id: 'review-1',
    name: 'Sarah Mitchell',
    city: 'Austin, TX',
    rating: 5,
    text: 'We had our old bathroom remodeled, and the result looks clean, modern, and much better than we expected. The team explained the process clearly, kept the area tidy, and finished the work on time. Very happy with the new vanity, tile work, and shower setup.',
  },
  {
    id: 'review-2',
    name: 'James Carter',
    city: 'Austin, TX',
    rating: 5,
    text: 'Great experience from start to finish. Our bathroom was outdated, and they turned it into a bright, comfortable space. The communication was good, the pricing was clear, and the quality of the work looks solid.',
  },
  {
    id: 'review-3',
    name: 'Emily Johnson',
    city: 'Austin, TX',
    rating: 5,
    text: "They did a full bathroom remodel for us, including the flooring, shower, lighting, and fixtures. Everything looks professionally done. What I liked most was that they listened to what we wanted and didn't push unnecessary upgrades.",
  },
  {
    id: 'review-4',
    name: 'Michael Anderson',
    city: 'Austin, TX',
    rating: 5,
    text: 'Our small bathroom feels much bigger now. The new layout, tiles, and glass shower made a huge difference. The crew showed up when they said they would and cleaned up after each day. I would recommend them.',
  },
  {
    id: 'review-5',
    name: 'Linda Parker',
    city: 'Cedar Park, TX',
    rating: 5,
    text: 'We hired them to update our guest bathroom, and the final result is excellent. The work was neat, the finishes look high quality, and the whole bathroom feels fresh. Good service and honest communication.',
  },
  {
    id: 'review-6',
    name: 'Robert Wilson',
    city: 'Round Rock, TX',
    rating: 5,
    text: 'Very pleased with our bathroom renovation. They replaced our old tub, installed new tiles, added better lighting, and fixed a few plumbing issues. The bathroom now looks modern and works much better for our family.',
  },
  {
    id: 'review-7',
    name: 'Amanda Brooks',
    city: 'Austin, TX',
    rating: 5,
    text: 'The team did a great job remodeling our master bathroom. They helped us choose the right design without making the project confusing. The shower, vanity, mirror, and floor all came together really well.',
  },
  {
    id: 'review-8',
    name: 'David Thompson',
    city: 'Leander, TX',
    rating: 5,
    text: 'We wanted a simple bathroom upgrade, and they delivered exactly what we asked for. No pressure, no hidden surprises, and the work looks clean. The new fixtures and tile made the bathroom look completely different.',
  },
  {
    id: 'review-9',
    name: 'Jessica Miller',
    city: 'Georgetown, TX',
    rating: 5,
    text: 'Professional, friendly, and easy to work with. Our bathroom remodel was completed within the expected timeline, and the quality is impressive. The space feels brighter, cleaner, and more useful now.',
  },
  {
    id: 'review-10',
    name: 'Brian Davis',
    city: 'Pflugerville, TX',
    rating: 5,
    text: "They transformed our old bathroom into a modern space we actually enjoy using. The attention to detail was great, especially around the tile edges and shower area. I'd hire them again for future remodeling work.",
  },
]

// ─── Consultation Offer ───────────────────────────────────────────────────────

export const CONSULTATION_SECTION = {
  headline: 'Book Your Free Bathroom Remodel Consultation in Austin, TX',
  subheadline:
    'Talk with an Austin remodeling specialist about your project goals, design ideas, budget, and timeline. No obligation — just clear next steps.',
  cta: 'Book Your Free Bathroom Remodel Consultation',
  supportingLine: 'Free consultation · No purchase required · Serving Austin & surrounding areas',
} as const

export const CONSULTATION_FEATURES = [
  'Bathroom project discussion',
  'Layout and design direction',
  'Budget range discussion',
  'Timeline guidance',
  'Project scope review',
  'Clear next steps',
] as const

// ─── Service Area ─────────────────────────────────────────────────────────────

export const SERVICE_AREA_SECTION = {
  headline: 'Bathroom Remodeling in Austin & the Surrounding Area',
  subheadline:
    'We serve Austin and the greater Austin metro — from Round Rock and Cedar Park to Georgetown, Kyle, and beyond.',
  cta: 'Book Your Free Bathroom Remodel Consultation',
} as const

export const US_STATES = [
  { name: 'Alabama', abbr: 'AL' },
  { name: 'Alaska', abbr: 'AK' },
  { name: 'Arizona', abbr: 'AZ' },
  { name: 'Arkansas', abbr: 'AR' },
  { name: 'California', abbr: 'CA' },
  { name: 'Colorado', abbr: 'CO' },
  { name: 'Connecticut', abbr: 'CT' },
  { name: 'Delaware', abbr: 'DE' },
  { name: 'Florida', abbr: 'FL' },
  { name: 'Georgia', abbr: 'GA' },
  { name: 'Hawaii', abbr: 'HI' },
  { name: 'Idaho', abbr: 'ID' },
  { name: 'Illinois', abbr: 'IL' },
  { name: 'Indiana', abbr: 'IN' },
  { name: 'Iowa', abbr: 'IA' },
  { name: 'Kansas', abbr: 'KS' },
  { name: 'Kentucky', abbr: 'KY' },
  { name: 'Louisiana', abbr: 'LA' },
  { name: 'Maine', abbr: 'ME' },
  { name: 'Maryland', abbr: 'MD' },
  { name: 'Massachusetts', abbr: 'MA' },
  { name: 'Michigan', abbr: 'MI' },
  { name: 'Minnesota', abbr: 'MN' },
  { name: 'Mississippi', abbr: 'MS' },
  { name: 'Missouri', abbr: 'MO' },
  { name: 'Montana', abbr: 'MT' },
  { name: 'Nebraska', abbr: 'NE' },
  { name: 'Nevada', abbr: 'NV' },
  { name: 'New Hampshire', abbr: 'NH' },
  { name: 'New Jersey', abbr: 'NJ' },
  { name: 'New Mexico', abbr: 'NM' },
  { name: 'New York', abbr: 'NY' },
  { name: 'North Carolina', abbr: 'NC' },
  { name: 'North Dakota', abbr: 'ND' },
  { name: 'Ohio', abbr: 'OH' },
  { name: 'Oklahoma', abbr: 'OK' },
  { name: 'Oregon', abbr: 'OR' },
  { name: 'Pennsylvania', abbr: 'PA' },
  { name: 'Rhode Island', abbr: 'RI' },
  { name: 'South Carolina', abbr: 'SC' },
  { name: 'South Dakota', abbr: 'SD' },
  { name: 'Tennessee', abbr: 'TN' },
  { name: 'Texas', abbr: 'TX' },
  { name: 'Utah', abbr: 'UT' },
  { name: 'Vermont', abbr: 'VT' },
  { name: 'Virginia', abbr: 'VA' },
  { name: 'Washington', abbr: 'WA' },
  { name: 'West Virginia', abbr: 'WV' },
  { name: 'Wisconsin', abbr: 'WI' },
  { name: 'Wyoming', abbr: 'WY' },
] as const

// Keep SERVICE_AREAS for backward compatibility with existing sections
export const SERVICE_AREAS = US_STATES.map((s) => ({
  city: s.name,
  state: s.abbr,
  zips: [] as string[],
}))

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const FAQ_SECTION = {
  headline: 'Bathroom Remodeling FAQs — Austin, TX',
  cta: 'Ask About My Bathroom Project',
} as const

export type FAQ = {
  id: string
  question: string
  answer: string
}

export const FAQS: FAQ[] = [
  {
    id: 'faq-cost',
    question: 'How much does a bathroom remodel cost in Austin, TX?',
    answer:
      'A bathroom remodel in Austin, TX typically costs between $5,000 and $25,000 depending on bathroom size, materials, and project scope. A cosmetic refresh — new fixtures, tile, and paint — starts around $5,000–$8,000. A full gut remodel with custom tile, new plumbing, and a frameless shower can run $15,000–$25,000+. We provide a free written estimate after reviewing your space so you know exactly what to expect.',
  },
  {
    id: 'faq-timeline',
    question: 'How long does a bathroom remodel take in Austin?',
    answer:
      'Most bathroom remodels in Austin take 1 to 3 weeks from start to finish. A focused update — new vanity, tile, or fixtures — typically takes 3 to 5 days. A complete gut remodel with plumbing and layout changes takes 2 to 3 weeks. Your confirmed timeline is included in your written estimate before any work begins.',
  },
  {
    id: 'faq-consultation',
    question: 'Do you offer free consultations for Austin homeowners?',
    answer:
      'Yes — Elite Bath & Tile offers free in-home consultations for homeowners in Austin, Round Rock, Cedar Park, Georgetown, and surrounding areas. During the visit, we review your bathroom, discuss your design goals, and provide guidance on layout, materials, and budget. There is no obligation to proceed. Call (512) 867-5309 to schedule.',
  },
  {
    id: 'faq-small',
    question: 'Can you remodel a small bathroom in Austin?',
    answer:
      'Absolutely. Small Austin bathrooms — including half baths and narrow guest baths — often see the biggest transformation from a remodel. We specialize in maximizing storage, improving shower layout, upgrading fixtures, and using tile and lighting to make compact spaces feel larger and more functional.',
  },
  {
    id: 'faq-design',
    question: 'Do you help with design and material selections?',
    answer:
      'Yes. Our team guides Austin homeowners through every design decision — tile style and layout, vanity size and finish, shower type, flooring, lighting, and fixture finishes. We work within your budget and style preferences so you can make confident choices without feeling overwhelmed.',
  },
  {
    id: 'faq-estimate',
    question: 'Do I get a written estimate before work starts?',
    answer:
      'Yes. After your free consultation and in-home review, we provide a detailed written estimate that outlines the full scope of work, materials, timeline, and total cost. You approve everything before we begin — no surprise charges, no hidden fees.',
  },
  {
    id: 'faq-areas',
    question: 'What areas around Austin do you serve?',
    answer:
      'We serve Austin and the greater Austin metro area, including Round Rock, Cedar Park, Georgetown, Pflugerville, Leander, Kyle, Buda, Lakeway, Bee Cave, West Lake Hills, Hutto, Manor, and Bastrop. Not sure if we cover your area? Call (512) 867-5309 and we\'ll confirm.',
  },
  {
    id: 'faq-tub-to-shower',
    question: 'Can you convert a bathtub to a walk-in shower in Austin?',
    answer:
      'Yes. Tub-to-shower conversions are one of our most popular Austin remodeling services. We remove the existing tub, reconfigure the space for a walk-in shower, and finish with your choice of tile surround, frameless glass, or a custom shower pan. The project typically takes 5 to 7 days.',
  },
]

// ─── Final CTA ────────────────────────────────────────────────────────────────

export const FINAL_CTA = {
  headline: 'Ready to Start Your Austin Bathroom Remodel?',
  subheadline:
    'Book a free in-home consultation and get a clear written estimate for your bathroom remodeling project — no pressure, no obligation.',
  primaryCta: 'Book Your Free Bathroom Remodel Consultation',
  secondaryCta: 'Request a Free Quote',
  trustText: 'Free in-home consultation • Written estimate • Serving Austin, TX & surrounding areas',
} as const

// ─── Footer ───────────────────────────────────────────────────────────────────

export const FOOTER = {
  cta: 'Call Now for a Free Consultation',
  copyrightYear: 2026,
  links: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Contact', href: '/contact' },
    { label: 'Service Areas', href: '/service-areas' },
  ],
} as const
