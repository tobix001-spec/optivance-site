import { SITE } from "@/lib/site-config"

const STEPS = [
  "We learn your goals, audience, and tools.",
  "We agree on a small first deliverable you can see in the browser.",
  "We launch, measure, and improve with you—not over your head.",
]

export function About() {
  return (
    <section id="about" className="border-b border-white/10 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
          About {SITE.name}
        </h2>
        <p className="mt-4 max-w-2xl text-zinc-400">
          We work with{" "}
          <span className="text-zinc-200">
            anyone who needs a proper website or smarter day-to-day workflows
          </span>
          —shops, clinics, trades, coaches, SaaS side-projects, and growing
          brands. Jewelry and luxury retail are in our portfolio, but we’re not
          limited to one niche: if you have customers online, we can help you
          show up well.
        </p>
        <h3 className="mt-10 text-sm font-medium tracking-wide text-zinc-500 uppercase">
          How we work
        </h3>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-zinc-300">
          {STEPS.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
      </div>
    </section>
  )
}
