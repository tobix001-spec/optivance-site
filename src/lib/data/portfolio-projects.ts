export type ProjectScreenshot = {
  /** Path under `public/` e.g. `/portfolio/lumina-1.png` */
  src: string
  alt: string
  caption?: string
}

export type PortfolioProject = {
  id: string
  name: string
  subtitle: string
  challenge: string
  solution: string
  tech: string[]
  features?: string[]
  results?: string
  githubUrl?: string
  liveUrl?: string
  screenshots: ProjectScreenshot[]
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "velvetcarat-storefront",
    name: "VelvetCarat Co",
    subtitle: "Lab-grown diamond jewelry — live storefront",
    challenge:
      "Lab-grown diamond jewelry brand that needed a true luxury e-commerce platform with complex variant management (metal types, stone types, sizes, custom requests), consultation booking, and high-end positioning.",
    solution:
      "I built a fully custom platform with an advanced backend admin panel for jewelry inventory management and GIA integration. Features include one-of-a-kind piece tracking, custom order workflow, and a clean luxury storefront.",
    tech: ["Next.js 14", "Prisma", "Stripe", "Custom admin dashboard"],
    results:
      "Production-ready e-commerce site that handles complex jewelry inventory without workarounds.",
    githubUrl: "https://github.com/tobix001-spec/velvetcarat-storefront",
    liveUrl: "https://velvetcaratco.com/",
    screenshots: [
      {
        src: "/portfolio/velvetcarat-1.png",
        alt: "VelvetCarat Co — homepage hero and navigation",
        caption: "Homepage",
      },
      {
        src: "/portfolio/velvetcarat-2.png",
        alt: "VelvetCarat Co — collections and featured products",
        caption: "Collections / featured products",
      },
    ],
  },
  {
    id: "vrundavan-jewels",
    name: "Vrundavan Jewels",
    subtitle: "Custom diamond jewelry — live storefront",
    challenge:
      "Diamond jewelry brand offering both natural and lab-grown stones across multiple shapes, made-to-order customization, and virtual appointment booking — all needing to work together in one clean platform.",
    solution:
      "Built a full e-commerce platform with a browsable diamond catalog filterable by shape, custom order workflow, virtual appointment booking, and GIA/IGI certificate display. Trust signals and financing options integrated throughout.",
    tech: ["Next.js", "Prisma", "Stripe", "Custom admin dashboard"],
    features: [
      "Multi-shape diamond catalog (round, oval, cushion, emerald, pear, heart)",
      "Made-to-order customization workflow",
      "GIA / IGI certificate display per product",
      "Virtual appointment booking",
      "Buy-now-pay-later financing integration",
      "Trustpilot & Google reviews integration",
    ],
    liveUrl: "https://vrundavanjewels.com/",
    screenshots: [
      {
        src: "/portfolio/vrundavan-1.png",
        alt: "Vrundavan Jewels — homepage with jewelry collections grid and Shop by Diamond Shape",
        caption: "Homepage · collections & diamond shapes",
      },
      {
        src: "/portfolio/vrundavan-2.png",
        alt: "Vrundavan Jewels — product page with metal finish, diamond type, ring size, and appointment booking",
        caption: "Product page · configurator & booking",
      },
    ],
  },
  {
    id: "lumina-jewelry",
    name: "Lumina Jewelry",
    subtitle: "Gemstone & silver jewelry e-commerce",
    challenge:
      "Gemstone and silver jewelry brand needing robust inventory management for mixed owned and consignment stock plus custom order handling.",
    solution:
      "I developed a custom e-commerce platform with a powerful backend admin panel that tracks every SKU, consignment items, and repair workflows.",
    tech: [
      "Next.js 14",
      "Framer Motion",
      "React Three Fiber",
      "Prisma",
      "Redis",
      "Stripe",
    ],
    features: [
      "Advanced variant handling beyond Shopify limits",
      "Consignment inventory separation",
      "Custom order and repair tracking",
      "Luxury mobile-first storefront",
    ],
    githubUrl: "https://github.com/tobix001-spec/lumina-jewelry",
    screenshots: [
      {
        src: "/portfolio/lumina-1.png",
        alt: "Lumina — homepage with category tiles and Shop by Shape diamond carousel",
        caption: "Homepage · categories & shop by shape",
      },
      {
        src: "/portfolio/lumina-2.png",
        alt: "Lumina — header with Wedding Rings mega menu",
        caption: "Navigation · mega menu",
      },
    ],
  },
]
