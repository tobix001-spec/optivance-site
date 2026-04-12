import { TESTIMONIALS } from "@/lib/data/testimonials"
import { SOCIAL_PROOF } from "@/lib/site-config"

const SHOW = TESTIMONIALS.slice(0, 4)

export function Reviews() {
  return (
    <section
      id="reviews"
      className="border-b border-white/10 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
          What clients say
        </h2>
        <p className="mt-3 max-w-2xl text-zinc-400">
          {SOCIAL_PROOF.supportingLine}
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {SHOW.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-xl border border-white/10 bg-[#121820]/80 p-5"
            >
              <blockquote className="flex-1 text-sm leading-relaxed text-zinc-300">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-4 border-t border-white/10 pt-4">
                <p className="font-medium text-white">
                  {t.name}
                  <span className="font-normal text-zinc-500">
                    {" "}
                    · {t.role}
                  </span>
                </p>
                <p className="text-xs text-zinc-500">{t.company}</p>
                <span className="mt-2 inline-block rounded-md bg-sky-500/15 px-2 py-0.5 text-xs font-medium text-sky-300">
                  {t.metric}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-sky-500/20 bg-sky-500/5 px-6 py-8 text-center">
          <p className="font-heading text-3xl font-bold text-white sm:text-4xl">
            {SOCIAL_PROOF.satisfiedCustomers}
          </p>
          <p className="mt-1 text-sm font-medium tracking-wide text-sky-200/90 uppercase">
            {SOCIAL_PROOF.satisfiedLabel}
          </p>
          <p className="mx-auto mt-3 max-w-md text-sm text-zinc-400">
            And we’re just getting started—every launch teaches us how to serve
            the next client even better.
          </p>
        </div>
      </div>
    </section>
  )
}
