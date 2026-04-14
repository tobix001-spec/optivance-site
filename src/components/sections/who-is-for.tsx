import { Check } from "lucide-react"

const CRITERIA = [
  "200–2,000 SKUs",
  "Offering custom or bespoke pieces",
  "Carrying consignment / memo inventory",
  "Running both physical retail and online store",
  "Currently using 3+ Shopify apps as workarounds",
  "Frustrated with platform limitations",
]


export function WhoIsFor() {
  return (
    <section id="for" className="border-b border-white/10 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
              Built for independent jewelry brands that are growing
            </h2>
            <p className="mt-4 text-zinc-400">
              My work is a good fit if your business matches most of these:
            </p>
            <ul className="mt-8 space-y-3">
              {CRITERIA.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-sky-500/20">
                    <Check className="size-3 text-sky-400" />
                  </div>
                  <span className="text-zinc-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
