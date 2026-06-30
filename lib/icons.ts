/**
 * Explicit icon map — only the icons actually used in this project.
 * Replaces `import * as Icons from 'lucide-react'` in ServiceCard,
 * BenefitItem, and WhyChooseUsSection, which was importing the entire
 * 800+ icon library and breaking tree-shaking.
 */
import type { LucideProps } from 'lucide-react'
import type { ComponentType } from 'react'
import {
  // Service icons
  Bath, ShowerHead, ArrowRightLeft, Package, Grid2X2, Accessibility, Wrench,
  // Benefit icons
  LayoutDashboard, Archive, Sparkles, Lightbulb, Smile, Shield, BadgeDollarSign, Check,
  // Trust point icons (WhyChooseUsSection)
  MessageCircle, FileText, HandshakeIcon, MapPin, ClipboardList, Images,
  CheckCircle2, ArrowRight, ShieldCheck,
} from 'lucide-react'

export const ICON_MAP: Record<string, ComponentType<LucideProps>> = {
  // Services
  Bath,
  ShowerHead,
  ArrowRightLeft,
  Package,
  Grid2X2,
  Accessibility,
  Wrench,
  // Benefits
  LayoutDashboard,
  Archive,
  Sparkles,
  Lightbulb,
  Smile,
  Shield,
  BadgeDollarSign,
  Check,
  // Trust points
  MessageCircle,
  FileText,
  HandshakeIcon,
  MapPin,
  ClipboardList,
  Images,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
}
