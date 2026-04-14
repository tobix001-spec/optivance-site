"use client"

import { ExternalLink, ZoomIn } from "lucide-react"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  PORTFOLIO_PROJECTS,
  type ProjectScreenshot,
} from "@/lib/data/portfolio-projects"

type LightboxState = { projectId: string; shot: ProjectScreenshot }

export function Portfolio() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null)

  return (
    <section id="work" className="border-b border-white/10 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
          Built for jewelry brands
        </h2>
        <p className="mt-3 max-w-2xl text-zinc-400">
          Two production platforms built from scratch for UK jewelry businesses.
        </p>

        <ul className="mt-10 space-y-10">
          {PORTFOLIO_PROJECTS.map((project) => (
            <li
              key={project.id}
              className="rounded-xl border border-white/10 bg-[#121820]/80 p-6"
            >
              <p className="text-xs font-medium text-amber-200/90">
                {project.subtitle}
              </p>
              <h3 className="mt-1 font-heading text-xl text-white">
                {project.name}
              </h3>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                    Challenge
                  </p>
                  <p className="mt-2 text-sm text-zinc-400">
                    {project.challenge}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                    Solution
                  </p>
                  <p className="mt-2 text-sm text-zinc-400">
                    {project.solution}
                  </p>
                </div>
              </div>

              {project.features && project.features.length > 0 && (
                <ul className="mt-5 space-y-1.5">
                  {project.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-zinc-300"
                    >
                      <span className="size-1.5 shrink-0 rounded-full bg-sky-400" />
                      {f}
                    </li>
                  ))}
                </ul>
              )}

              {project.results && (
                <div className="mt-5 rounded-lg border border-sky-500/20 bg-sky-500/5 px-4 py-3">
                  <p className="text-xs font-medium uppercase tracking-widest text-sky-400">
                    Result
                  </p>
                  <p className="mt-1 text-sm text-zinc-300">{project.results}</p>
                </div>
              )}

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {project.screenshots.map((shot, idx) => (
                  <button
                    key={`${project.id}-${idx}-${shot.src}`}
                    type="button"
                    onClick={() =>
                      setLightbox({ projectId: project.id, shot })
                    }
                    className="group relative overflow-hidden rounded-lg border border-white/10 bg-zinc-950 text-left ring-offset-2 ring-offset-[#121820] transition hover:border-sky-500/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                  >
                    <div className="relative w-full overflow-hidden">
                      <img
                        src={shot.src}
                        alt={shot.alt}
                        className="block h-auto w-full transition duration-300 group-hover:opacity-95"
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/35">
                        <span className="flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition group-hover:opacity-100">
                          <ZoomIn className="size-3.5" aria-hidden />
                          Enlarge
                        </span>
                      </span>
                    </div>
                    {shot.caption ? (
                      <span className="block border-t border-white/5 px-2.5 py-2 text-xs text-zinc-500">
                        {shot.caption}
                      </span>
                    ) : null}
                  </button>
                ))}
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-zinc-300"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              {project.liveUrl ? (
                <div className="mt-5">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-amber-200/90 hover:text-amber-100"
                  >
                    Live site
                    <ExternalLink className="size-3.5 opacity-70" aria-hidden />
                  </a>
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      </div>

      <Dialog
        open={lightbox !== null}
        onOpenChange={(open) => {
          if (!open) setLightbox(null)
        }}
      >
        <DialogContent
          showCloseButton
          className="max-h-[90vh] max-w-[min(100vw-1rem,56rem)] overflow-y-auto border-white/10 bg-[#0c1017] p-2 sm:p-4"
        >
          {lightbox ? (
            <>
              <DialogTitle className="sr-only">
                {lightbox.shot.alt}
              </DialogTitle>
              <div className="relative w-full min-h-[200px]">
                <div className="relative aspect-video w-full sm:aspect-auto sm:min-h-[50vh]">
                  <img
                    key={`${lightbox.projectId}-${lightbox.shot.src}`}
                    src={lightbox.shot.src}
                    alt={lightbox.shot.alt}
                    className="mx-auto block h-auto max-h-[80vh] w-full rounded-md object-contain"
                    decoding="async"
                  />
                </div>
                {lightbox.shot.caption ? (
                  <p className="mt-3 text-center text-sm text-zinc-500">
                    {lightbox.shot.caption}
                  </p>
                ) : null}
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  )
}
