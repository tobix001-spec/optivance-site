import { AlertTriangle, Award, ClipboardList, Layers, RefreshCw, Tag } from "lucide-react"
import type { ComponentType } from "react"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type PainPoint = {
  icon: ComponentType<{ className?: string }>
  title: string
  description: string
}

const PAIN_POINTS: PainPoint[] = [
  {
    icon: Tag,
    title: "One-of-a-kind piece tracking",
    description:
      "Every piece has its own status, history, and location. Standard platforms can't follow it.",
  },
  {
    icon: Layers,
    title: "Consignment / memo inventory separation",
    description:
      "You need clear separation for accounting and tax compliance. Most platforms mix everything together.",
  },
  {
    icon: AlertTriangle,
    title: "Shopify's 3-option variant limit",
    description:
      "Metal + stone + band + size already exceeds the limit. You end up with messy workarounds.",
  },
  {
    icon: Award,
    title: "GIA certificate linkage",
    description:
      "High-value items need traceability. You need certificates attached directly to each SKU.",
  },
  {
    icon: ClipboardList,
    title: "Custom order workflow",
    description:
      "From design brief to production to delivery — the entire process needs to live inside one system.",
  },
  {
    icon: RefreshCw,
    title: "Multi-channel sync",
    description:
      "Retail store + online store without double-selling or stock errors.",
  },
]

export function Problems() {
  return (
    <section id="problems" className="border-b border-white/10 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
          Your jewelry inventory is too complex for template platforms
        </h2>
        <p className="mt-3 max-w-2xl text-zinc-400">
          Most platforms were built for t-shirts and generic products. Jewelry
          is different.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PAIN_POINTS.map((point) => {
            const Icon = point.icon
            return (
              <Card
                key={point.title}
                className="border-white/10 bg-[#121820]/80"
              >
                <CardHeader>
                  <div className="mb-1 flex size-9 items-center justify-center rounded-lg bg-amber-500/15 text-amber-300">
                    <Icon className="size-4" />
                  </div>
                  <CardTitle className="font-heading text-base text-white">
                    {point.title}
                  </CardTitle>
                  <CardDescription className="text-zinc-400">
                    {point.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>

        <blockquote className="mt-10 rounded-xl border border-amber-500/20 bg-amber-500/5 px-6 py-6 text-center">
          <p className="text-sm italic text-amber-100/80">
            "Using a system made for t-shirts on diamond rings is not just
            inefficient. It leads directly to financial risk and chaos."
          </p>
        </blockquote>
      </div>
    </section>
  )
}
