import { ExternalLink, Sparkles } from 'lucide-react'
import type { TicketOffer } from '@/lib/events-data'
import { formatPrice } from '@/lib/events-data'

interface EventDetailOffersGridProps {
  sortedOffers: TicketOffer[]
  minPrice: number
  maxPrice: number
}

function barWidth(price: number, min: number, max: number): number {
  if (max <= min) return 100
  return 20 + ((price - min) / (max - min)) * 80
}

export function EventDetailOffersGrid({ sortedOffers, minPrice, maxPrice }: EventDetailOffersGridProps) {
  return (
    <section className="scroll-mt-28 bg-stripe-amber py-14 md:py-20" id="ofertas" aria-labelledby="ofertas-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="font-display text-xs font-bold uppercase tracking-widest text-orange-900/90">Colaboradores</p>
          <h2 id="ofertas-title" className="font-display mt-2 text-2xl font-bold text-stone-900 md:text-3xl">
            Dónde comparar el precio
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-stone-700 md:text-base">
            Cada tarjeta enlaza a la web del partner. Nosotros no cobramos ni tramitamos la compra: solo te mostramos el importe
            observado en esta ficha.
          </p>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {sortedOffers.map((offer, index) => {
            const isBest = index === 0 && offer.available
            const width = offer.available ? barWidth(offer.price, minPrice || offer.price, maxPrice) : 8

            return (
              <li key={offer.partner}>
                <article
                  className={`relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md ${
                    isBest ? 'border-orange-600 ring-2 ring-orange-500/25' : 'border-stone-200 hover:border-stone-300'
                  }`}
                >
                  {isBest && (
                    <div className="flex items-center gap-1.5 bg-gradient-to-r from-orange-700 to-amber-600 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
                      <Sparkles className="h-3.5 w-3.5" aria-hidden />
                      Mejor precio en esta comparativa
                    </div>
                  )}

                  <div className="flex flex-1 flex-col p-5 pt-4">
                    <div className="mb-4 flex items-start justify-between gap-2">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Partner</p>
                        <h3 className="font-display text-lg font-bold leading-tight text-stone-900">{offer.partner}</h3>
                      </div>
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-100 font-display text-sm font-bold text-stone-500">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <div className="mb-4">
                      <p
                        className={`font-display text-3xl font-bold tabular-nums ${
                          offer.available ? 'text-stone-900' : 'text-stone-400 line-through'
                        }`}
                      >
                        {formatPrice(offer.price)}
                      </p>
                      {!offer.available && (
                        <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-stone-500">No disponible</p>
                      )}
                    </div>

                    <div className="mb-5 mt-auto">
                      <div className="mb-1 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-stone-400">
                        <span>Relativo al resto</span>
                        <span>{offer.available ? `${Math.round(width)}%` : '—'}</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-stone-200">
                        <div
                          className={`h-full rounded-full transition-all ${
                            offer.available ? (isBest ? 'bg-orange-600' : 'bg-stone-600') : 'bg-stone-300'
                          }`}
                          style={{ width: `${width}%` }}
                          role="presentation"
                        />
                      </div>
                    </div>

                    {offer.available ? (
                      <a
                        href={offer.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold"
                      >
                        Abrir web del partner
                        <ExternalLink className="h-4 w-4" aria-hidden />
                      </a>
                    ) : (
                      <span className="rounded-lg bg-stone-100 py-3 text-center text-xs font-medium text-stone-500">
                        Sin enlace activo
                      </span>
                    )}
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
