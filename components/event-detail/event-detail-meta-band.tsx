import Link from 'next/link'
import { Calendar, Clock, MapPin, TrendingDown, ArrowDown } from 'lucide-react'
import type { Event } from '@/lib/events-data'
import { formatPrice } from '@/lib/events-data'

interface EventDetailMetaBandProps {
  event: Event
  minPrice: number
  maxPrice: number
  sourceCount: number
}

export function EventDetailMetaBand({ event, minPrice, maxPrice, sourceCount }: EventDetailMetaBandProps) {
  const cards = [
    {
      icon: Calendar,
      label: 'Fecha',
      value: new Date(event.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' }),
    },
    { icon: Clock, label: 'Hora', value: event.time },
    {
      icon: MapPin,
      label: 'Lugar',
      value: (
        <>
          {event.venue}
          <span className="mt-0.5 block text-xs font-normal text-stone-500">{event.city}</span>
        </>
      ),
    },
  ]

  return (
    <section className="border-y border-stone-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-stretch lg:gap-8">
          <div className="grid gap-6 sm:grid-cols-3 sm:gap-8 lg:col-span-7">
            {cards.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex gap-3">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-orange-700" aria-hidden />
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-stone-500">{label}</p>
                  <div className="mt-0.5 text-sm font-semibold leading-snug text-stone-900">{value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-between gap-3 rounded-2xl border-2 border-orange-800/20 bg-gradient-to-br from-orange-50 via-white to-amber-50/80 p-4 shadow-sm lg:col-span-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-orange-900/80">Precio orientativo desde</p>
              {minPrice > 0 ? (
                <>
                  <p className="font-display mt-1 text-4xl font-bold tabular-nums text-stone-900 sm:text-[2.75rem]">
                    {formatPrice(minPrice)}
                  </p>
                  {maxPrice > minPrice && (
                    <p className="mt-1 text-sm text-stone-600">Hasta {formatPrice(maxPrice)} en esta comparativa</p>
                  )}
                </>
              ) : (
                <p className="mt-2 text-lg font-medium text-stone-600">Sin precio publicado</p>
              )}
              <div className="mt-2 flex items-center gap-2 text-sm text-stone-700">
                <TrendingDown className="h-4 w-4 shrink-0 text-orange-700" aria-hidden />
                <span>
                  {sourceCount} fuente{sourceCount !== 1 ? 's' : ''} · solo referencia, compra en el colaborador
                </span>
              </div>
            </div>
            <Link
              href="#ofertas"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-orange-800/30 bg-white px-4 py-2 text-sm font-bold text-orange-900 shadow-sm transition hover:bg-orange-50"
            >
              Ver colaboradores
              <ArrowDown className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
