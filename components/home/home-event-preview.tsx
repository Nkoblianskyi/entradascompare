import Link from 'next/link'
import Image from 'next/image'
import { Calendar, MapPin, ChevronRight, ShieldAlert } from 'lucide-react'
import { events, formatPrice, getMinPrice, getCategoryColor } from '@/lib/events-data'

function StripCard({ event, priority }: { event: (typeof events)[0]; priority?: boolean }) {
  const minPrice = getMinPrice(event.offers)
  const max = event.offers.filter((o) => o.available).map((o) => o.price)
  const maxPrice = max.length ? Math.max(...max) : minPrice

  return (
    <Link
      href={`/catalogo/${event.id}`}
      className="group flex w-[min(100%,272px)] shrink-0 flex-col overflow-hidden rounded-2xl border border-stone-300/90 bg-[#fffdf8] shadow-sm transition hover:border-orange-800/45 hover:shadow-md sm:w-[288px]"
    >
      <div className="relative aspect-[5/3] overflow-hidden">
        <Image
          src={event.image}
          alt=""
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="288px"
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/85 via-transparent to-transparent" />
        <span
          className={`absolute left-2.5 top-2.5 rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${getCategoryColor(event.category)}`}
        >
          {event.category}
        </span>
        <p className="absolute bottom-2.5 left-2.5 right-2.5 line-clamp-2 font-display text-sm font-bold leading-tight text-white">
          {event.title}
        </p>
      </div>
      <div className="flex items-center justify-between gap-2 border-t border-stone-200 px-3 py-2.5">
        {minPrice > 0 ? (
          <div>
            <p className="text-[9px] font-bold uppercase tracking-wider text-stone-500">Desde</p>
            <p className="font-display text-base font-bold tabular-nums text-stone-900">
              {formatPrice(minPrice)}
              {maxPrice > minPrice && <span className="text-xs font-semibold text-stone-500"> – {formatPrice(maxPrice)}</span>}
            </p>
          </div>
        ) : (
          <span className="text-xs font-semibold text-stone-500">Ver ficha</span>
        )}
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-900 text-white transition group-hover:bg-orange-700">
          <ChevronRight className="h-4 w-4" aria-hidden />
        </span>
      </div>
    </Link>
  )
}

function FeatureRow({ event, priority }: { event: (typeof events)[0]; priority?: boolean }) {
  const minPrice = getMinPrice(event.offers)
  const max = event.offers.filter((o) => o.available).map((o) => o.price)
  const maxPrice = max.length ? Math.max(...max) : minPrice
  const dateStr = new Date(event.date).toLocaleDateString('es-ES', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  })

  return (
    <Link
      href={`/catalogo/${event.id}`}
      className="group card-surface flex flex-col overflow-hidden transition hover:border-orange-800/45 hover:shadow-lg md:flex-row"
    >
      <div className="relative aspect-[16/10] w-full md:w-[44%] md:min-h-[240px]">
        <Image
          src={event.image}
          alt=""
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 40vw"
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-stone-900/40" />
      </div>
      <div className="flex flex-1 flex-col justify-center border-t-4 border-orange-700 p-6 md:border-l-4 md:border-t-0 md:p-8">
        <span className={`w-fit rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${getCategoryColor(event.category)}`}>
          {event.category}
        </span>
        <h3 className="font-display mt-3 text-xl font-bold text-stone-900 group-hover:text-orange-800 md:text-2xl">{event.title}</h3>
        <div className="mt-3 space-y-1 text-sm text-stone-600">
          <p className="flex items-center gap-2">
            <Calendar className="h-4 w-4 shrink-0 text-orange-700" aria-hidden />
            {dateStr} · {event.time}
          </p>
          <p className="flex items-center gap-2">
            <MapPin className="h-4 w-4 shrink-0 text-orange-700" aria-hidden />
            {event.venue}, {event.city}
          </p>
        </div>
        {minPrice > 0 && (
          <p className="mt-4 font-display text-lg font-bold tabular-nums text-stone-900">
            {formatPrice(minPrice)}
            {maxPrice > minPrice && <span className="text-stone-500"> — {formatPrice(maxPrice)}</span>}
            <span className="ml-2 text-xs font-normal text-stone-500">indicativo</span>
          </p>
        )}
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-orange-800">
          Ver comparativa
          <ChevronRight className="h-4 w-4" aria-hidden />
        </span>
      </div>
    </Link>
  )
}

export function HomeEventPreview() {
  const featured = events.filter((e) => e.featured)
  const strip = featured.length >= 4 ? featured.slice(0, 4) : events.slice(0, 4)
  const a = strip[0]
  const b = strip[1] ?? events[1]

  if (!a) return null

  return (
    <>
      <section className="border-y border-stone-200 bg-stripe-amber py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-orange-800">Catálogo</p>
              <h2 className="font-display mt-2 text-3xl font-bold text-stone-900 md:text-4xl">Eventos en comparativa</h2>
              <p className="mt-2 max-w-xl text-stone-600">Desliza en móvil para ver más tarjetas. Misma información que en el catálogo completo.</p>
            </div>
            <Link href="/catalogo" className="btn-secondary border-stone-400 py-2.5 text-sm">
              Ver todos
            </Link>
          </div>

          <div
            className="mt-6 flex gap-4 rounded-2xl border-2 border-orange-800/25 bg-orange-50/95 p-4 shadow-sm md:mt-8 md:p-5"
            role="note"
          >
            <ShieldAlert className="mt-0.5 h-6 w-6 shrink-0 text-orange-800" aria-hidden />
            <div className="min-w-0 text-sm leading-relaxed text-stone-800">
              <p className="font-display font-bold text-stone-900">Importante</p>
              <p className="mt-2">
                <strong>No vendemos entradas.</strong> Solo <strong>comparamos precios orientativos</strong> de entradas entre
                distintos servicios y plataformas. Todas las <strong>transacciones</strong> (compra, pago, condiciones) se realizan{' '}
                <strong>en el sitio del proveedor</strong> que elijas.
              </p>
              <p className="mt-2">
                En este dominio <strong>no recogemos datos de pago</strong> ni <strong>realizamos operaciones financieras</strong>.
                El <strong>precio final del billete</strong> puede diferir del mostrado (comisiones, demanda, promociones):{' '}
                <strong>verifícalo siempre con el proveedor</strong>. Nosotros únicamente ofrecemos una comparación informativa de
                precios.
              </p>
            </div>
          </div>

          <div className="mt-8 flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mt-10">
            {strip.map((event, idx) => (
              <StripCard key={event.id} event={event} priority={idx < 2} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#faf8f4] py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-orange-800">Destacados</p>
          <h2 className="font-display mt-2 text-2xl font-bold text-stone-900 md:text-3xl">Fichas ampliadas</h2>
          <p className="mt-2 max-w-2xl text-stone-600">Mismo componente visual que en el listado en modo horizontal del catálogo.</p>
          <div className="mt-10 flex flex-col gap-6">
            <FeatureRow event={a} priority />
            {b && b.id !== a.id && <FeatureRow event={b} />}
          </div>
        </div>
      </section>
    </>
  )
}
