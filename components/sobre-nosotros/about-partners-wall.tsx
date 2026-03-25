import Link from 'next/link'
import { partners } from '@/lib/events-data'
import { ExternalLink } from 'lucide-react'

export function AboutPartnersWall() {
  return (
    <section className="border-t border-stone-200 bg-stone-950 py-16 text-stone-100 md:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-orange-400/90">Colaboradores</p>
            <h2 className="font-display mt-2 text-3xl font-bold md:text-4xl">Marcas con las que cruzamos datos</h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-stone-400">
              No “vendemos” su servicio: enlazamos a sus sitios para que compares. Cada uno publica sus propias condiciones y
              comisiones.
            </p>
          </div>
          <Link
            href="/partners"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-white/10"
          >
            Página de partners
            <ExternalLink className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((p) => (
            <li key={p.name}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 transition hover:border-orange-500/40 hover:bg-white/[0.07]"
              >
                <span className="font-display text-sm font-bold text-white group-hover:text-orange-200">{p.name}</span>
                <span className="mt-2 line-clamp-2 text-xs leading-relaxed text-stone-500 group-hover:text-stone-400">
                  {p.description}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
