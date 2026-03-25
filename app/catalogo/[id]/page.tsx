import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { events, formatPrice, getMinPrice } from '@/lib/events-data'
import { EventCard } from '@/components/event-card'
import { EventDetailHeader } from '@/components/event-detail/event-detail-header'
import { EventDetailHero } from '@/components/event-detail/event-detail-hero'
import { EventDetailMetaBand } from '@/components/event-detail/event-detail-meta-band'
import { EventDetailOffersGrid } from '@/components/event-detail/event-detail-offers-grid'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return events.map((e) => ({ id: e.id }))
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params
  const event = events.find((e) => e.id === id)
  if (!event) return {}
  const minPrice = getMinPrice(event.offers)
  return {
    title: `${event.title} — Comparativa | entradascompare`,
    description: `Precios orientativos para ${event.title}. Desde ${formatPrice(minPrice)}. No vendemos entradas; el pago es en la web del colaborador.`,
  }
}

export default async function EventDetailPage({ params }: Props) {
  const { id } = await params
  const event = events.find((e) => e.id === id)
  if (!event) notFound()

  const minPrice = getMinPrice(event.offers)
  const availableOffers = event.offers.filter((o) => o.available)
  const maxPrice = availableOffers.length > 0 ? Math.max(...availableOffers.map((o) => o.price)) : minPrice

  const sortedOffers = [...event.offers].sort((a, b) => {
    if (a.available && !b.available) return -1
    if (!a.available && b.available) return 1
    return a.price - b.price
  })

  const relatedEvents = events.filter((e) => e.id !== event.id && e.category === event.category).slice(0, 4)

  const dateLong = new Date(event.date).toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <EventDetailHeader eventTitle={event.title} />

      <EventDetailHero event={event} dateLong={dateLong} />

      <EventDetailMetaBand
        event={event}
        minPrice={minPrice}
        maxPrice={maxPrice}
        sourceCount={availableOffers.length}
      />

      <EventDetailOffersGrid sortedOffers={sortedOffers} minPrice={minPrice} maxPrice={maxPrice} />

      {relatedEvents.length > 0 && (
        <section className="border-t border-stone-800/20 bg-mesh-warm py-12 text-stone-100 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-widest text-orange-400/90">Misma categoría</p>
                <h2 className="font-display mt-2 text-2xl font-bold md:text-3xl">Otros eventos que te pueden interesar</h2>
              </div>
              <Link
                href="/catalogo"
                className="inline-flex items-center gap-1 text-sm font-bold text-orange-300 transition hover:text-white"
              >
                Ver todo el catálogo
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedEvents.map((e) => (
                <EventCard key={e.id} event={e} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-orange-900/25 bg-mesh-warm py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-center text-sm text-stone-300 sm:text-left">
            Los colaboradores cumplen normas de publicación propias. Si tienes dudas sobre comisiones o disponibilidad, revisa su
            web oficial.
          </p>
          <Link
            href="/partners"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            Cómo trabajamos con partners
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
