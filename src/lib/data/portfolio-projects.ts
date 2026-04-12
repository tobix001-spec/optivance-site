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
  summary: string
  highlights: string[]
  /** Omit for sample / concept work */
  githubUrl?: string
  liveUrl?: string
  /** Fictional portfolio piece — shown as “Sample” in UI */
  isSample?: boolean
  screenshots: ProjectScreenshot[]
}

/**
 * Lumina → lumina-*.png · VelvetCarat → velvetcarat-*.png (`npm run capture:velvet`)
 * Sample projects use sample-*.svg — replace with real PNGs anytime.
 */
export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "lumina-jewelry",
    name: "Lumina Jewelry",
    subtitle: "Luxury fine jewelry e-commerce",
    summary:
      "Full-stack jewelry platform: rich product presentation, smooth motion, 3D-friendly visuals, real payments, and data layer ready to scale.",
    highlights: [
      "Next.js 14",
      "Framer Motion",
      "React Three Fiber",
      "Prisma",
      "Redis",
      "Stripe",
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
        alt: "Lumina — header with Wedding Rings mega menu, columns and hero",
        caption: "Navigation · mega menu",
      },
    ],
  },
  {
    id: "velvetcarat-storefront",
    name: "VelvetCarat Co",
    subtitle: "Luxury diamond jewellery — live storefront",
    summary:
      "Production e-commerce for VelvetCarat Co (velvetcaratco.com): lab-grown diamonds, rings to bracelets, consultations, and UK-focused trust signals (GIA, shipping, returns). UI shots below are captured from the live store.",
    highlights: [
      "Collections & navigation",
      "Featured products & quick add",
      "Consultation & newsletter flows",
      "Trust & policy content",
    ],
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
        caption: "Collections / featured",
      },
    ],
  },
  
]
