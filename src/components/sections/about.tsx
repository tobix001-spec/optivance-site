const STATS = [
  {
    value: "67%",
    label: "of UK jewelry purchases happen on mobile",
  },
  {
    value: "30–40%",
    label: "conversion increase from ring configurators",
  },
  {
    value: "43%",
    label: "of small jewelry businesses still rely on spreadsheets",
  },
]

const LOGOS = ["VelvetCarat Co", "Lumina Jewelry"]

export function About() {
  return (
    <section id="about" className="border-b border-white/10 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
              Specialised in jewelry e-commerce
            </h2>
            <div className="mt-5 space-y-4 text-zinc-400">
              <p>
                I'm a developer who builds custom e-commerce platforms
                exclusively for jewelry brands.
              </p>
              <p>
                After building my first jewelry site I saw how poorly standard
                platforms handle jewelry inventory complexity, so I specialised.
              </p>
              <p>
                I've built two production jewelry platforms — VelvetCarat Co and
                Lumina Jewelry. I understand the real challenges: one-of-a-kind
                pieces, consignment tracking, custom orders, and the variant
                complexity that breaks Shopify's 3-option limit.
              </p>
              <p className="text-zinc-300">
                Most agencies focus on design. I focus on building backend
                systems that match exactly how jewelry businesses operate.
              </p>
            </div>
          </div>

          <div className="space-y-8 lg:pt-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                Trusted by
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                {LOGOS.map((name) => (
                  <span
                    key={name}
                    className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-300"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg border border-white/10 bg-[#121820]/80 p-5"
                >
                  <p className="font-heading text-2xl font-bold text-sky-400">
                    {s.value}
                  </p>
                  <p className="mt-1 text-sm text-zinc-400">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
