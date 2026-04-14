const STEPS = [
  {
    number: "01",
    title: "Discovery call (20 minutes)",
    description: "I review your current setup and inventory complexity.",
  },
  {
    number: "02",
    title: "Custom proposal",
    description:
      "Fixed-price scoped solution with a clear timeline — no vague estimates.",
  },
  {
    number: "03",
    title: "Build phase",
    description: "4–6 weeks with weekly check-ins so you always know where things stand.",
  },
  {
    number: "04",
    title: "Launch support",
    description: "30 days of post-launch support included in every project.",
  },
  {
    number: "05",
    title: "Ongoing support",
    description:
      "Optional monthly retainer if you want continued help after launch.",
  },
]

export function HowItWorks() {
  return (
    <section id="process" className="border-b border-white/10 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
          How we work together
        </h2>

        <div className="mt-10 max-w-xl space-y-0">
          {STEPS.map((step, index) => (
            <div key={step.number} className="relative flex gap-6 pb-8 last:pb-0">
              {index < STEPS.length - 1 && (
                <div
                  className="absolute left-5 top-10 h-full w-px bg-white/10"
                  aria-hidden
                />
              )}
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-[#121820] font-heading text-sm font-semibold text-sky-400">
                {step.number}
              </div>
              <div className="pt-1.5">
                <p className="font-medium text-white">{step.title}</p>
                <p className="mt-1 text-sm text-zinc-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
