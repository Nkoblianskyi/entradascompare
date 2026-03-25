import type { LucideIcon } from 'lucide-react'

interface LegalHeroProps {
  icon: LucideIcon
  label: string
  title: string
  docRef: string
  updated: string
  jurisdiction: string
}

export function LegalHero({ icon: Icon, label, title, docRef, updated, jurisdiction }: LegalHeroProps) {
  return (
    <header className="relative isolate overflow-hidden border-b border-stone-800 bg-stone-950 text-stone-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-40%,rgba(234,88,12,0.22),transparent)]" aria-hidden />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 rounded-full bg-amber-900/15 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-orange-300/95">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 backdrop-blur">
            <Icon className="h-3.5 w-3.5" aria-hidden />
            {label}
          </span>
          <span className="hidden text-stone-500 sm:inline">·</span>
          <span className="font-mono text-[10px] tracking-normal text-stone-400 sm:text-xs">{docRef}</span>
        </div>

        <h1 className="font-display mt-8 max-w-4xl text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-white">
          {title}
        </h1>

        <div className="mt-10 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-2 lg:max-w-3xl">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Última actualización</p>
            <p className="mt-1 font-display text-lg font-semibold text-white">{updated}</p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Ámbito jurídico</p>
            <p className="mt-1 text-sm leading-relaxed text-stone-400">{jurisdiction}</p>
          </div>
        </div>
      </div>
    </header>
  )
}
