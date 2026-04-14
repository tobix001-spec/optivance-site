import Link from "next/link"
import { NAV_LINKS, SITE } from "@/lib/site-config"

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080b10] py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div>
            <Link href="#hero" className="font-heading text-2xl font-bold text-white">
              {SITE.name}
            </Link>
            <p className="mt-2 max-w-sm text-sm text-zinc-500">
              UK-based solo developer specialising in custom jewelry e-commerce
              platforms.
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
              Links
            </p>
            <ul className="mt-3 flex flex-col gap-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-zinc-400 hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Optivance Ltd</p>
          <div className="flex gap-5">
            <a
              href={SITE.social.linkedin}
              className="hover:text-sky-400"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={SITE.social.twitter}
              className="hover:text-sky-400"
              target="_blank"
              rel="noreferrer"
            >
              X
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
