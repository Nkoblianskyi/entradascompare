import Link from 'next/link'
import Image from 'next/image'
import { Calendar, MapPin, ArrowUpRight } from 'lucide-react'
import { type Event, formatPrice, getMinPrice, getCategoryColor } from '@/lib/events-data'

interface EventCardProps {
  event: Event
  priority?: boolean
  variant?: 'default' | 'horizontal'
}

export function EventCard({ event, priority = false, variant = 'default' }: EventCardProps) {
  const minPrice = getMinPrice(event.offers)
  const availableOffers = event.offers.filter((offer) => offer.available)
  const maxPrice = availableOffers.length > 0 ? Math.max(...availableOffers.map((offer) => offer.price)) : 0

  if (variant === 'horizontal') {
    return (
      <Link
        href={`/catalogo/${event.id}`}
        className="group card-surface flex flex-col overflow-hidden transition hover:border-orange-800/40 hover:shadow-md lg:flex-row"
        aria-label={`${event.title} — ${event.city}`}
      >
        <div className="relative aspect-[16/10] w-full shrink-0 lg:aspect-auto lg:w-[42%] lg:min-h-[220px]">
          <Image
            src={event.image}
            alt=""
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 1024px) 100vw, 42vw"
            priority={priority}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-stone-900/50" />
          <div className="absolute left-3 top-3">
            <span className={`inline-block rounded px-2 py-1 text-[10px] font-bold uppercase tracking-wider ${getCategoryColor(event.category)}`}>
              {event.category}
            </span>
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-between border-t-4 border-orange-700 p-5 lg:border-l-4 lg:border-t-0">
          <div>
            <h3 className="font-display text-xl font-bold leading-snug text-stone-900 group-hover:text-orange-800 md:text-2xl">
              {event.title}
            </h3>
            <div className="mt-3 space-y-1.5 text-sm text-stone-600">
              <p className="flex items-center gap-2">
                <Calendar className="h-4 w-4 shrink-0 text-orange-700" />
                {new Date(event.date).toLocaleDateString('es-ES', { month: 'short', day: 'numeric', year: 'numeric' })} ·{' '}
                {event.time}
              </p>
              <p className="flex items-center gap-2 truncate">
                <MapPin className="h-4 w-4 shrink-0 text-orange-700" />
                {event.venue}, {event.city}
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-end justify-between gap-4 border-t border-stone-200 pt-4">
            {minPrice > 0 && (
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Rango indicativo</p>
                <p className="font-display text-2xl font-bold tabular-nums text-stone-900">
                  {formatPrice(minPrice)} – {formatPrice(maxPrice)}
                </p>
                <p className="text-[11px] text-stone-500">Puede diferir del precio nominal.</p>
              </div>
            )}
            <span className="inline-flex items-center gap-1 text-sm font-bold text-orange-800">
              Ver comparativa
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link
      href={`/catalogo/${event.id}`}
      className="group card-surface flex h-full flex-col overflow-hidden transition hover:border-orange-800/50 hover:shadow-lg"
      aria-label={`${event.title} — ${event.city}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={event.image}
          alt=""
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
          loading={priority ? 'eager' : 'lazy'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent" />
        <div className="absolute left-3 right-3 top-3 flex flex-wrap gap-2">
          <span className={`text-[10px] font-bold uppercase tracking-wider ${getCategoryColor(event.category)}`}>
            {event.category}
          </span>
          {event.featured && (
            <span className="rounded bg-orange-700 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              Destacado
            </span>
          )}
        </div>
        {minPrice > 0 && (
          <div className="absolute bottom-3 left-3 right-3">
            <div className="rounded-lg border border-stone-200 bg-[#fffdf8]/95 px-3 py-2 shadow-sm backdrop-blur-sm">
              <p className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Desde (indicativo)</p>
              <p className="font-display text-lg font-bold tabular-nums text-stone-900">
                {formatPrice(minPrice)}
                {maxPrice > minPrice && (
                  <span className="text-stone-500">
                    {' '}
                    – {formatPrice(maxPrice)}
                  </span>
                )}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col border-t-4 border-orange-700 p-4">
        <h3 className="font-display line-clamp-2 text-base font-bold leading-snug text-stone-900 group-hover:text-orange-800">
          {event.title}
        </h3>
        <p className="mt-2 text-xs text-stone-500">
          {new Date(event.date).toLocaleDateString('es-ES', { month: 'short', day: 'numeric', year: 'numeric' })} ·{' '}
          {event.time}
        </p>
        <p className="mt-1 truncate text-sm text-stone-600">
          {event.venue}, {event.city}
        </p>
        <span className="mt-auto inline-flex items-center gap-1 pt-4 text-xs font-bold uppercase tracking-wider text-orange-800">
          Comparar en ficha
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  )
}
