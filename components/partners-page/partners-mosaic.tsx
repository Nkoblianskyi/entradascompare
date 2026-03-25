import { ExternalLink } from 'lucide-react'
import { partners } from '@/lib/events-data'
import { mosaicSpans, partnerDetails, partnerInitials } from '@/lib/partners-page-data'

export function PartnersMosaic() {
  return (
    <section className="relative bg-[#ebe6dc] py-16 md:py-24" aria-labelledby="partners-mosaic-title">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-stone-400/40 to-transparent" aria-hidden />

      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-stone-600">Directorio</p>
            <h2 id="partners-mosaic-title" className="font-display mt-2 text-3xl font-bold text-stone-950 md:text-4xl">
              Fuentes que aparecen en fichas
            </h2>
            <p className="mt-3 max-w-xl text-stone-600">
              Mosaico asimétrico: cada tarjeta enlaza a la web oficial del colaborador. Los metadatos son orientativos.
            </p>
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
          {mosaicSpans.map((spanClass, idx) => {
            const partner = partners[idx]
            if (!partner) return null
            const details = partnerDetails[partner.name]
            const initials = partnerInitials(partner.name)
            const accent = idx % 3 === 0 ? 'from-orange-200/50' : idx % 3 === 1 ? 'from-stone-300/50' : 'from-amber-200/50'

            return (
              <li key={partner.name} className={`${spanClass}`}>
                <article className="group relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-[1.75rem] border border-stone-300/80 bg-white shadow-[0_20px_50px_-28px_rgba(28,25,23,0.25)] transition hover:-translate-y-0.5 hover:border-orange-800/30 hover:shadow-[0_28px_60px_-24px_rgba(28,25,23,0.3)]">
                  <div
                    className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${accent} to-transparent opacity-90`}
                    aria-hidden
                  />

                  <div className="relative flex flex-1 flex-col p-7 md:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-stone-950 font-display text-xl font-bold text-orange-400 shadow-lg ring-2 ring-white">
                          {initials}
                        </span>
                        <div className="min-w-0">
                          {details && (
                            <span className="inline-block rounded-full bg-orange-50 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-orange-900 ring-1 ring-orange-200/80">
                              {details.type}
                            </span>
                          )}
                          <h3 className="font-display mt-2 text-xl font-bold leading-tight text-stone-950 md:text-2xl">
                            {partner.name}
                          </h3>
                        </div>
                      </div>
                      <a
                        href={partner.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-white text-stone-500 shadow-sm transition hover:border-orange-700 hover:text-orange-800"
                        aria-label={`Sitio web de ${partner.name} (abre en nueva ventana)`}
                      >
                        <ExternalLink className="h-5 w-5" aria-hidden />
                      </a>
                    </div>

                    <p className="relative mt-5 flex-1 text-sm leading-relaxed text-stone-600 md:text-base">{partner.description}</p>

                    {details && (
                      <dl className="relative mt-6 grid gap-2 border-t border-stone-100 pt-6 text-sm">
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <dt className="text-stone-500">Ámbito</dt>
                          <dd className="font-semibold text-stone-900">{details.country}</dd>
                        </div>
                        {details.founded && details.founded !== '-' && (
                          <div className="flex flex-wrap items-baseline justify-between gap-2">
                            <dt className="text-stone-500">Referencia</dt>
                            <dd className="font-semibold text-stone-900">Desde {details.founded}</dd>
                          </div>
                        )}
                        {details.note && (
                          <dd className="text-xs leading-relaxed text-stone-500">{details.note}</dd>
                        )}
                      </dl>
                    )}

                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-stone-950 py-3.5 text-sm font-bold text-white transition group-hover:bg-orange-800"
                    >
                      Abrir en web del partner
                      <ExternalLink className="h-4 w-4 opacity-80" aria-hidden />
                    </a>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
