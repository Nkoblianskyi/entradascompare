import Link from 'next/link'
import { Ticket } from 'lucide-react'

export function AboutCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-700 via-orange-800 to-stone-900 py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden>
        <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-amber-400 blur-3xl" />
      </div>
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-4 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-orange-100/90">Siguiente paso</p>
          <h2 className="font-display mt-2 text-3xl font-bold text-white md:text-4xl">¿Listo para comparar?</h2>
          <p className="mt-3 max-w-md text-orange-100/90">El catálogo está ordenado para decidir rápido; la compra sigue fuera de aquí.</p>
        </div>
        <Link
          href="/catalogo"
          className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-stone-950 shadow-xl transition hover:bg-orange-50"
        >
          <Ticket className="h-5 w-5" aria-hidden />
          Ir al catálogo
        </Link>
      </div>
    </section>
  )
}
