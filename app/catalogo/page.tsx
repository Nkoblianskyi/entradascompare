'use client'

import { useState, useMemo } from 'react'
import { Search, X, Trophy } from 'lucide-react'
import { events } from '@/lib/events-data'
import { EventCard } from '@/components/event-card'
import { CatalogToolbar } from '@/components/catalog-toolbar'
import { DisclaimerBlock } from '@/components/disclaimers'

export default function CatalogoPage() {
  const [query, setQuery] = useState('')
  const [mode, setMode] = useState<'grid' | 'feed'>('grid')

  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    return events.filter((e) => {
      if (!q) return true
      return (
        e.title.toLowerCase().includes(q) ||
        e.city.toLowerCase().includes(q) ||
        e.venue.toLowerCase().includes(q) ||
        (e.artist?.toLowerCase().includes(q) ?? false)
      )
    })
  }, [query])

  return (
    <>
      <section className="relative overflow-hidden border-b border-stone-800/10 bg-mesh-warm pb-14 pt-12 md:pb-16 md:pt-16">
        <div className="pointer-events-none absolute inset-0 bg-noise opacity-40" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-pattern-grid text-white/[0.03]" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-3 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
            <Trophy className="h-4 w-4" aria-hidden />
            Catálogo deportivo
          </div>
          <h1 className="font-display text-3xl font-bold text-stone-50 md:text-5xl">Eventos y rangos de precio</h1>
          <p className="mt-4 max-w-2xl text-lg text-stone-300">
            Busca por equipo, ciudad o recinto. Los importes son orientativos y pueden no coincidir con el precio nominal o de
            taquilla.
          </p>
        </div>
      </section>

      <section className="sticky top-24 z-40 border-b border-stone-300 bg-[#fffdf8]/95 backdrop-blur-md" aria-label="Filtros">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-stone-500" aria-hidden="true" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar partido, ciudad, estadio…"
                className="w-full rounded-lg border-2 border-stone-300 bg-white py-3.5 pl-12 pr-10 text-sm text-stone-900 outline-none placeholder:text-stone-500 focus:border-orange-700 focus:ring-2 focus:ring-orange-700/15"
                aria-label="Buscar eventos"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-500 hover:text-stone-900"
                  aria-label="Borrar búsqueda"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
            <CatalogToolbar mode={mode} onModeChange={setMode} />
          </div>
        </div>
      </section>

      <section className="min-h-[50vh] bg-stripe-amber py-12" aria-live="polite">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <DisclaimerBlock />
          </div>
          <p className="mb-8 text-sm text-stone-600">
            <span className="font-bold text-stone-900">{filtered.length}</span> resultados
          </p>

          {filtered.length > 0 ? (
            mode === 'grid' ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6">
                {filtered.map((event, index) => (
                  <EventCard key={event.id} event={event} variant="horizontal" priority={index < 2} />
                ))}
              </div>
            )
          ) : (
            <div className="rounded-2xl border-2 border-dashed border-stone-300 bg-[#fffdf8] py-20 text-center shadow-sm">
              <p className="font-display text-xl font-bold text-stone-900">Sin resultados</p>
              <p className="mt-2 text-sm text-stone-600">Prueba otras palabras o borra la búsqueda.</p>
              <button
                type="button"
                onClick={() => setQuery('')}
                className="mt-4 text-sm font-bold text-orange-800 underline underline-offset-4"
              >
                Limpiar búsqueda
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
