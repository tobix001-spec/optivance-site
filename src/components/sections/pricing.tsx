import Link from "next/link"
import { Check } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const TIERS = [
  {
    id: "tier-1",
    name: "Shopify Setup",
    subtitle: "for Jewelry Brands",
    price: "£1,500 – £2,500",
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
    name: "Full Setup",
    subtitle: "+ Custom Features",
    price: "£3,000 – £5,000",
    timeline: "4–5 weeks",
    description:
      "Enhanced Shopify with jewelry-specific tools and custom functionality.",
    popular: false,
    includes: [
      "Everything in Tier 1",
      "Admin Panel",
      "Basic ring configurator (setting, stone, metal)",
      "Custom order inquiry system",
      "GIA certificate display integration",
      "Consultation booking system",
      "Advanced product filtering",
      "Custom product page layouts",
      "Inventory Management System",
      "Email automation (browse abandonment, post-purchase)",
      "1 month post-launch support",
    ],
    goodFit: [
      "0–800 SKUs",
      "Need basic customisation features",
      "Want faster time-to-market than full custom",
      "Planning to scale to custom platform later",
    ],
    notIncluded: null,
  },
]

const TIER2_ADDONS = [
  { name: "Meta advertising setup + first month management", price: "+£2,000" },
  { name: "Product photography optimisation", price: "+£800" },
  { name: "Advanced email flows (consultation nurture, VIP)", price: "+£1,200" },
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

      </div>
    </section>
  )
}
