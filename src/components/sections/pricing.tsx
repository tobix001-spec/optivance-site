import Link from "next/link"
import { Check } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const TIERS = [
  {
    id: "tier-1",
    name: "Shopify Setup",
    subtitle: "for Jewelry Brands",
    price: "£2,500 – £4,500",
    timeline: "2–3 weeks",
    description:
      "Professional Shopify store built specifically for jewelry businesses.",
    popular: false,
    includes: [
      "Custom Shopify theme setup (jewelry-optimized)",
      "Product catalog structure (up to 200 SKUs)",
      "Collection organisation (by metal, stone type, style, occasion)",
      "Variant configuration (within Shopify's limits)",
      "Payment gateway integration (Stripe / PayPal)",
      "Essential apps setup (reviews, email capture)",
      "Mobile optimisation",
      "Basic SEO setup",
      "2 weeks post-launch support",
    ],
    goodFit: [
      "Under 200 SKUs",
      "No consignment inventory",
      "No custom order workflows needed",
      "Want to launch quickly",
      "Professional presence on a budget",
    ],
    notIncluded: "Custom backend, advanced inventory management, ring configurators",
  },
  {
    id: "tier-2",
    name: "Shopify Plus",
    subtitle: "+ Custom Features",
    price: "£5,000 – £8,000",
    timeline: "4–5 weeks",
    description:
      "Enhanced Shopify with jewelry-specific tools and custom functionality.",
    popular: false,
    includes: [
      "Everything in Tier 1",
      "Advanced variant management (metal, stone, size combinations)",
      "Basic ring configurator (setting, stone, metal)",
      "Custom order inquiry system",
      "GIA certificate display integration",
      "Consultation booking system",
      "Advanced product filtering",
      "Custom product page layouts",
      "Abandoned cart recovery",
      "Email automation (browse abandonment, post-purchase)",
      "1 month post-launch support",
    ],
    goodFit: [
      "200–800 SKUs",
      "Need basic customisation features",
      "Want faster time-to-market than full custom",
      "Planning to scale to custom platform later",
    ],
    notIncluded: null,
  },
  {
    id: "tier-3",
    name: "Custom Jewelry Platform",
    subtitle: "",
    price: "£8,000 – £15,000",
    timeline: "4–6 weeks",
    description:
      "Fully custom e-commerce platform built for jewelry complexity.",
    popular: true,
    includes: [
      "Custom-designed storefront (luxury, mobile-first)",
      "Unlimited variant handling — no Shopify 3-option limit",
      "One-of-a-kind piece tracking",
      "Inventory status workflows (available, reserved, in production, sold)",
      "Stock management by metal type, stone type, size",
      "Low stock alerts & SKU / barcode generation",
      "Custom backend admin panel",
      "Product catalog with advanced filtering",
      "Payment integration (Stripe)",
      "Consultation / custom order forms",
      "Basic analytics dashboard",
      "30 days post-launch support",
      "Full source code ownership",
    ],
    goodFit: [
      "200–2,000+ SKUs",
      "Offering custom or bespoke pieces",
      "Carrying consignment / memo inventory",
      "Need inventory status tracking",
      "Running both physical retail and online",
      "Frustrated with Shopify's limitations",
    ],
    notIncluded: null,
  },
  {
    id: "tier-4",
    name: "Enterprise Jewelry Platform",
    subtitle: "",
    price: "£15,000 – £40,000+",
    timeline: "8–12 weeks",
    description: "For established brands with complex, multi-location requirements.",
    popular: false,
    includes: [
      "Everything in Tier 3",
      "Multi-location inventory sync (retail + online)",
      "Consignment inventory separation (owned vs. vendor-managed)",
      "GIA / IGI certificate API integration",
      "Supplier feed integration (diamond / gemstone suppliers)",
      "Dynamic metal pricing (live gold / silver rate updates)",
      "Repair and resize order tracking",
      "Custom order workflow (design → approval → production → delivery)",
      "Customer relationship tracking (preferences, past purchases, sizes)",
      "Advanced ring builder with 3D preview",
      "Multi-currency and international shipping",
      "Wholesale / trade portal",
      "POS system integration",
      "Advanced analytics and reporting",
      "Dedicated project manager",
      "60 days post-launch support",
    ],
    goodFit: [
      "2,000+ SKUs or multiple locations",
      "Significant consignment inventory",
      "Work with diamond / gemstone suppliers",
      "Need repair / custom order tracking",
      "Have wholesale / trade accounts",
      "Require POS integration",
    ],
    notIncluded: null,
  },
]

const TIER2_ADDONS = [
  { name: "Meta advertising setup + first month management", price: "+£2,000" },
  { name: "Product photography optimisation", price: "+£800" },
  { name: "Advanced email flows (consultation nurture, VIP)", price: "+£1,200" },
]

const DEV_ADDONS = [
  { name: "3D product visualisation", price: "£5,000" },
  { name: "Virtual try-on (AR)", price: "£6,000" },
  { name: "Advanced ring configurator", price: "£3,000 – £5,000" },
  { name: "Waiting list for sold items", price: "£800" },
  { name: "Gift card system", price: "£1,200" },
  { name: "Appointment scheduling integration", price: "£1,500" },
  { name: "Multi-language support", price: "£2,500" },
]

const MARKETING_ADDONS = [
  { name: "Meta ads setup + 3-month management", price: "£4,500 + ad spend" },
  { name: "Meta advertising (ongoing monthly)", price: "£1,500/mo + ad spend" },
  { name: "Google Shopping setup", price: "£2,000" },
  { name: "Email marketing automation (advanced flows)", price: "£2,500" },
  { name: "Jewelry-specific chatbot (FAQ, recommendations)", price: "£2,000" },
]

const CONTENT_ADDONS = [
  { name: "Product photography guidance", price: "£500" },
  { name: "Product description copywriting (per collection)", price: "£800" },
  { name: "Brand positioning consultation", price: "£1,200" },
]

const SUPPORT_TIERS = [
  {
    name: "Essential",
    price: "£400 / month",
    includes: [
      "Bug fixes and technical issues",
      "Security updates",
      "Backup management",
      "Email support (48hr response)",
      "Up to 2 hours of minor updates/month",
    ],
  },
  {
    name: "Growth",
    price: "£800 / month",
    includes: [
      "Everything in Essential",
      "Monthly performance review",
      "Conversion optimisation recommendations",
      "A/B testing implementation",
      "Up to 5 hours of updates/month",
      "Priority support (24hr response)",
    ],
  },
  {
    name: "Full-Service",
    price: "£1,500 / month",
    includes: [
      "Everything in Growth",
      "Meta advertising management",
      "Monthly analytics reporting",
      "New feature development (up to 10 hrs/month)",
      "Strategic consultation",
      "Same-day emergency support",
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="border-b border-white/10 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
          Clear pricing for jewelry e-commerce
        </h2>
        <p className="mt-3 max-w-2xl text-zinc-400">
          Choose the solution that matches where your jewelry business is today
          — with room to grow.
        </p>

        {/* 4 Tiers */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {TIERS.map((tier) => (
            <div
              key={tier.id}
              className={cn(
                "relative flex flex-col rounded-xl border p-6",
                tier.popular
                  ? "border-sky-500/50 bg-sky-500/5"
                  : "border-white/10 bg-[#121820]/80"
              )}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-6 rounded-full bg-sky-600 px-3 py-0.5 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}

              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                  {tier.id.replace("-", " ").toUpperCase()}
                </p>
                <p className={cn("mt-1 font-heading text-lg font-bold", tier.popular ? "text-sky-300" : "text-white")}>
                  {tier.name}
                  {tier.subtitle && (
                    <span className="text-zinc-400"> {tier.subtitle}</span>
                  )}
                </p>
                <p className="mt-2 font-heading text-2xl font-bold text-white">
                  {tier.price}
                </p>
                <p className="text-sm text-zinc-500">{tier.timeline}</p>
                <p className="mt-3 text-sm text-zinc-400">{tier.description}</p>
              </div>

              <ul className="mt-5 flex-1 space-y-2">
                {tier.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 size-3.5 shrink-0 text-sky-400" aria-hidden />
                    <span className="text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tier 2 add-ons */}
              {tier.id === "tier-2" && (
                <div className="mt-5 rounded-lg border border-white/10 p-4">
                  <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                    Add-ons available
                  </p>
                  <ul className="mt-3 space-y-2">
                    {TIER2_ADDONS.map((a) => (
                      <li key={a.name} className="flex items-center justify-between gap-3 text-xs">
                        <span className="text-zinc-400">{a.name}</span>
                        <span className="shrink-0 font-medium text-amber-200/90">{a.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Good fit */}
              <div className="mt-5 rounded-lg bg-white/5 p-4">
                <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                  Good fit if you:
                </p>
                <ul className="mt-2 space-y-1.5">
                  {tier.goodFit.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-zinc-400">
                      <span className="size-1.5 shrink-0 rounded-full bg-sky-400/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {tier.notIncluded && (
                <p className="mt-3 text-xs text-zinc-600">
                  Not included: {tier.notIncluded}
                </p>
              )}

              <Link
                href="#contact"
                className={cn(
                  buttonVariants({ size: "sm" }),
                  "mt-5 w-full",
                  tier.popular
                    ? "bg-sky-600 text-white hover:bg-sky-500"
                    : "border border-white/20 bg-transparent text-white hover:bg-white/5"
                )}
              >
                Get started
              </Link>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="mt-14">
          <h3 className="font-heading text-xl font-bold text-white">
            Add-ons (Any Tier)
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { title: "Development", items: DEV_ADDONS },
              { title: "Marketing", items: MARKETING_ADDONS },
              { title: "Content & Assets", items: CONTENT_ADDONS },
            ].map((group) => (
              <div
                key={group.title}
                className="rounded-xl border border-white/10 bg-[#121820]/80 p-5"
              >
                <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                  {group.title}
                </p>
                <ul className="mt-4 space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-start justify-between gap-3 border-b border-white/5 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-xs text-zinc-400">{item.name}</span>
                      <span className="shrink-0 text-xs font-medium text-amber-200/90">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Support */}
        <div className="mt-14">
          <h3 className="font-heading text-xl font-bold text-white">
            Ongoing Support & Maintenance
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {SUPPORT_TIERS.map((tier) => (
              <div
                key={tier.name}
                className="rounded-xl border border-white/10 bg-[#121820]/80 p-5"
              >
                <p className="font-heading text-base font-semibold text-white">
                  {tier.name}
                </p>
                <p className="mt-1 text-sm font-medium text-amber-200/90">
                  {tier.price}
                </p>
                <ul className="mt-4 space-y-2">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs">
                      <Check className="mt-0.5 size-3 shrink-0 text-sky-400" aria-hidden />
                      <span className="text-zinc-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Payment structure */}
        <div className="mt-10 rounded-xl border border-white/10 bg-[#121820]/80 px-6 py-5">
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Payment Structure
          </p>
          <div className="mt-3 flex flex-wrap gap-x-8 gap-y-2 text-sm text-zinc-300">
            <span>50% deposit to begin work</span>
            <span>50% on completion before launch</span>
            <span className="text-zinc-400">
              Payment plans available for projects over £10,000 (3-month split)
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
