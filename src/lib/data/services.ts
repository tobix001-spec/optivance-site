export type ServiceIconKey =
  | "bot"
  | "globe"
  | "store"
  | "workflow"
  | "sparkles"
  | "plug"

export type ServiceItem = {
  title: string
  description: string
  icon: ServiceIconKey
}

export const SERVICES: ServiceItem[] = [
  {
    title: "Websites & landing pages",
    description:
      "We design and build clear, fast sites and promo pages—mobile-friendly and easy for you to update.",
    icon: "globe",
  },
  {
    title: "Chatbots",
    description:
      "Chat helpers on your site that answer common questions, point people to the right page, and collect leads.",
    icon: "bot",
  },
  {
    title: "Online stores & catalogs",
    description:
      "Product listings, collections, and checkout-style flows—for retail, makers, and any brand selling online.",
    icon: "store",
  },
  {
    title: "Automation",
    description:
      "Connect forms, email, spreadsheets, and CRMs so repeat tasks run in the background.",
    icon: "workflow",
  },
  {
    title: "Content & polish",
    description:
      "Sharper copy, clearer sections, and small UX tweaks so visitors know what to do next.",
    icon: "sparkles",
  },
  {
    title: "Integrations & support",
    description:
      "Hook up payments, booking, analytics, and other tools—and help when you need fixes or changes.",
    icon: "plug",
  },
]
