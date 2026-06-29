export interface CircularGalleryItem {
  image: string
  text: string
  details?: Record<string, string>
}

export interface CircularGalleryProps {
  items?: CircularGalleryItem[]
  bend?: number
  textColor?: string
  borderRadius?: number
  font?: string
  fontUrl?: string
  scrollSpeed?: number
  scrollEase?: number
  autoScrollSpeed?: number
}

export default function CircularGallery(props: CircularGalleryProps): JSX.Element
