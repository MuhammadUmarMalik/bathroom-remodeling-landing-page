export interface Service {
  id: string
  title: string
  description: string
  icon: string
}

export interface Testimonial {
  name: string
  city: string
  state: string
  rating: number
  review: string
  initials: string
  avatarColor: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface GalleryItem {
  src: string
  alt: string
  tag: string
  width: number
  height: number
}

export interface Step {
  step: number
  title: string
  description: string
  icon: string
}
