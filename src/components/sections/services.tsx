import type { ComponentType } from "react"
import {
  ClipboardList,
  LayoutDashboard,
  Layers,
  Monitor,
  RefreshCw,
  ShieldCheck,
  SlidersHorizontal,
  Tag,
} from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { ServiceIconKey } from "@/lib/data/services"
import { SERVICES } from "@/lib/data/services"

const ICONS: Record<ServiceIconKey, ComponentType<{ className?: string }>> = {
  dashboard: LayoutDashboard,
  tag: Tag,
  layers: Layers,
  sliders: SlidersHorizontal,
  shield: ShieldCheck,
  clipboard: ClipboardList,
  refresh: RefreshCw,
  monitor: Monitor,
}

export function Services() {
  return (
    <section id="services" className="border-b border-white/10 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
          Custom solutions for jewelry-specific complexity
        </h2>
        <p className="mt-3 max-w-xl text-zinc-400">
          Every feature is built around how jewelry businesses actually operate.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.icon]
            return (
              <Card
                key={s.title}
                className="border-white/10 bg-[#121820]/80"
              >
                <CardHeader>
                  <div className="mb-1 flex size-9 items-center justify-center rounded-lg bg-sky-500/15 text-sky-400">
                    <Icon className="size-4" />
                  </div>
                  <CardTitle className="font-heading text-base text-white">
                    {s.title}
                  </CardTitle>
                  <CardDescription className="text-zinc-400">
                    {s.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0" />
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
