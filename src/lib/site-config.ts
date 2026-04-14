export const SITE = {
  name: "Optivance",
  tagline: "Custom e-commerce platforms for UK jewelry brands — built for how you actually sell",
  description:
    "I build custom e-commerce platforms exclusively for UK jewelry brands. Specialist in one-of-a-kind inventory tracking, consignment management, GIA integration, and complex variant handling that breaks Shopify's limits.",
  url: "https://optivance.co.uk",
  email: "hello@optivance.co.uk",
  calendlyUrl: "https://calendly.com/optivance",
  social: {
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
  },
} as const

/** Kept for backward-compat with reviews.tsx (not rendered in page) */
export const SOCIAL_PROOF = {
  satisfiedCustomers: "2",
  satisfiedLabel: "production jewelry platforms",
  supportingLine: "Trusted by independent jewelry brands across the UK.",
  heroStats: [] as { value: string; label: string }[],
} as const

export const NAV_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const
