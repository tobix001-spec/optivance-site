export const SITE = {
  name: "Optivance",
  tagline: "Websites, chatbots, and automation for growing teams",
  description:
    "We design and build sites, chat helpers, and simple automation for any small business—retail, services, trades, creators, and startups. Clear timelines, fair pricing, no fluff.",
  url: "https://optivance.example.com",
  email: "hello@optivance.example.com",
  social: {
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
  },
} as const

/** Shown in hero and reviews */
export const SOCIAL_PROOF = {
  satisfiedCustomers: "50+",
  satisfiedLabel: "satisfied customers",
  supportingLine:
    "Trusted by shop owners, agencies, and founders who wanted a site and systems that just work.",
  heroStats: [
    { value: "50+", label: "Happy clients" },
    { value: "100+", label: "Projects delivered" },
    { value: "2-week", label: "Typical first milestone" },
  ],
} as const

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#reviews", label: "Reviews" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
] as const
