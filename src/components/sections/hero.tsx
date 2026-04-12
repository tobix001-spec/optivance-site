import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { SITE, SOCIAL_PROOF } from "@/lib/site-config"
import { cn } from "@/lib/utils"

export function Hero() {
  return (
    <section
      id="hero"
      className="border-b border-white/10 bg-[#0c1017]"
    >
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <p className="text-sm font-medium text-sky-400">{SITE.name}</p>
        <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {SITE.tagline}
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-zinc-400">
          {SITE.description}
        </p>

        <div className="mx-auto mt-10 grid max-w-lg grid-cols-3 gap-4 border-y border-white/10 py-6 sm:max-w-xl">
          {SOCIAL_PROOF.heroStats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-heading text-xl font-semibold text-white sm:text-2xl">
                {s.value}
              </p>
              <p className="mt-1 text-[11px] leading-tight text-zinc-500 sm:text-xs">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-11 gap-2 bg-sky-600 px-8 text-base text-white hover:bg-sky-500"
            )}
          >
            Get in touch
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="#services"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-11 border-white/20 bg-transparent px-8 text-base text-white hover:bg-white/5"
            )}
          >
            View services
          </Link>
        </div>
      </div>
    </section>
  )
}
