export type ServiceIconKey =
  | "dashboard"
  | "tag"
  | "layers"
  | "sliders"
  | "shield"
  | "clipboard"
  | "refresh"
  | "monitor"

export type ServiceItem = {
  title: string
  description: string
  icon: ServiceIconKey
}

export const SERVICES: ServiceItem[] = [
  {
    title: "Custom admin panels",
    description:
      "Backend dashboards built specifically for jewelry inventory — not adapted from generic e-commerce templates.",
    icon: "dashboard",
  },
  {
    title: "One-of-a-kind inventory tracking",
    description:
      "Full status workflows for individual pieces: available, reserved, consigned, sold, repaired.",
    icon: "tag",
  },
  {
    title: "Consignment inventory separation",
    description:
      "Clear accounting separation between owned stock and memo / consignment items for tax compliance.",
    icon: "layers",
  },
  {
    title: "Product configurators",
    description:
      "Ring builders and custom jewelry tools — unlimited variants, no Shopify 3-option workarounds.",
    icon: "sliders",
  },
  {
    title: "GIA / IGI certificate integration",
    description:
      "Certificates attached directly to each SKU for full traceability on high-value pieces.",
    icon: "shield",
  },
  {
    title: "Custom order & repair tracking",
    description:
      "From design brief to production to delivery — the entire workflow inside one system.",
    icon: "clipboard",
  },
  {
    title: "Multi-location inventory sync",
    description:
      "Retail store and online store in sync — no double-selling, no manual reconciliation.",
    icon: "refresh",
  },
  {
    title: "Luxury-focused storefront",
    description:
      "Mobile-first, fast-loading frontend design that positions your brand correctly.",
    icon: "monitor",
  },
]
