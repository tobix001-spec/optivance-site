import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const PILLS = [
  {
    label: "Custom Admin Panel",
    tooltip: "Purpose-built inventory management — not adapted from generic templates",
  },
  {
    label: "No Shopify Limits",
    tooltip: "Unlimited variants: metal + stone + band + size, all in one product",
  },
  {
    label: "4–6 Week Build",
    tooltip: "Fixed timeline with weekly check-ins and no scope creep",
  },
  {
    label: "£8k – £15k",
    tooltip: "Fixed-price project — no hourly billing surprises",
  },
]

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-white/10"
      style={{
        background:
          "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(14,42,80,0.9) 0%, #0c1017 65%)",
      }}
    >
      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8 lg:py-32">

        {/* Eyebrow */}
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
          Jewelry E-commerce Specialist
        </p>

        {/* Headline */}
        <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Custom inventory systems for jewelry brands
        </h1>

        {/* Subheading */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
          Shopify breaks at 3 product options. Your rings need metal + stone +
          band + size. I build platforms that actually handle jewelry complexity:
          one-of-a-kind pieces, consignment, custom orders, unlimited variants.
        </p>

        {/* Feature pills — 2×2 on mobile, single row on sm+ */}
        <div className="mx-auto mt-8 grid max-w-xs grid-cols-2 gap-2 sm:flex sm:max-w-none sm:flex-wrap sm:justify-center sm:gap-3">
          {PILLS.map((pill) => (
            <span
              key={pill.label}
              title={pill.tooltip}
              className="inline-flex cursor-default items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-zinc-300 transition-colors hover:border-sky-500/40 hover:bg-sky-500/10 hover:text-sky-300"
            >
              {pill.label}
            </span>
          ))}
        </div>

        {/* CTAs — stacked on mobile, row on sm+ */}
        <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
          <Link
            href="#contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 gap-2 bg-sky-600 px-8 text-base font-semibold text-white hover:bg-sky-500"
            )}
          >
            <Calendar className="size-4" aria-hidden />
            Book 20-min discovery call
          </Link>
          <a
            href="https://vrundavanjewels.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-12 gap-2 border-white/20 bg-transparent px-6 text-base text-white hover:bg-white/5"
            )}
          >
            Vrundavan Jewels
            <ArrowRight className="size-4" aria-hidden />
          </a>
        </div>

        {/* Trust line */}
        <p className="mt-5 text-sm text-zinc-500">
          Built for independent UK jewelry brands doing £500k–£5M revenue
        </p>

        {/* Soft link */}
        <p className="mt-3">
          <Link
            href="#problems"
            className="text-xs text-zinc-600 underline-offset-2 transition-colors hover:text-zinc-400 hover:underline"
          >
            Not ready to book? Read why Shopify fails jewelry brands →
          </Link>
        </p>

      </div>
    </section>
  )
}
