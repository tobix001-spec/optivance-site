"use client"

import { Code2, ExternalLink, ZoomIn } from "lucide-react"
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
          Selected work
        </h2>
        <p className="mt-3 max-w-2xl text-zinc-400">
          Real GitHub work, a live store, plus a few{" "}
          <span className="text-zinc-300">marked “Sample”</span> concepts with
          mock UI frames—swap those images in{" "}
          <code className="rounded bg-white/10 px-1 text-xs text-zinc-400">
            public/portfolio/
          </code>{" "}
          when you have exports. VelvetCarat is from the{" "}
          <a
            href="https://velvetcaratco.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 underline-offset-2 hover:underline"
          >
            live site
          </a>
          .
        </p>

        <ul className="mt-10 space-y-10">
          {PORTFOLIO_PROJECTS.map((project) => (
            <li
              key={project.id}
              className="rounded-xl border border-white/10 bg-[#121820]/80 p-6"
            >
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-xs font-medium text-amber-200/90">
                  {project.subtitle}
                </p>
                {project.isSample ? (
                  <span className="rounded-md border border-violet-500/35 bg-violet-500/15 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-violet-200 uppercase">
                    Sample
                  </span>
                ) : null}
              </div>
              <h3 className="mt-1 font-heading text-lg text-white">
                {project.name}
              </h3>
              <p className="mt-2 text-sm text-zinc-400">{project.summary}</p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
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
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-zinc-300"
                  >
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-sky-400 hover:text-sky-300"
                  >
                    <Code2 className="size-4" aria-hidden />
                    View on GitHub
                    <ExternalLink className="size-3.5 opacity-70" aria-hidden />
                  </a>
                ) : null}
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-amber-200/90 hover:text-amber-100"
                  >
                    Live site
                    <ExternalLink className="size-3.5 opacity-70" aria-hidden />
                  </a>
                ) : null}
                {!project.githubUrl && !project.liveUrl ? (
                  <a
                    href="#contact"
                    className="text-sm font-medium text-zinc-400 underline-offset-2 hover:text-white hover:underline"
                  >
                    Discuss a similar project
                  </a>
                ) : null}
              </div>
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
