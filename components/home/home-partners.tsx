import Link from 'next/link'
import { partners } from '@/lib/events-data'
import { partnerInitials } from '@/lib/partners-page-data'
import { ExternalLink } from 'lucide-react'

export function HomePartners() {
  return (
    <section className="border-t border-stone-200 bg-stripe-amber py-16 md:py-20" aria-labelledby="home-partners-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-orange-800">Colaboradores</p>
            <h2 id="home-partners-title" className="font-display mt-2 text-3xl font-bold text-stone-900 md:text-4xl">
              Fuentes que citamos
            </h2>
            <p className="mt-2 max-w-xl text-stone-600">Enlaces a sitios externos; condiciones y precios finales en cada uno.</p>
          </div>
          <Link href="/partners" className="btn-primary w-fit">
            Página de colaboradores
            <ExternalLink className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          {partners.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl border border-stone-300 bg-[#fffdf8] px-4 py-3 shadow-sm transition hover:border-orange-800/40"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-stone-900 font-display text-xs font-bold text-orange-400">
                {partnerInitials(p.name)}
              </span>
              <span className="max-w-[200px] text-sm font-bold text-stone-900">{p.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
