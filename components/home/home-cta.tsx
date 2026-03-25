import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function HomeCta() {
  return (
    <section className="relative overflow-hidden border-t border-stone-800/20 bg-mesh-warm py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-white md:text-4xl">¿Listo para comparar?</h2>
        <p className="mt-4 text-lg text-stone-300">Mismo diseño y reglas que en el catálogo y en cada ficha de evento.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/catalogo" className="btn-primary px-10 py-3.5 text-base">
            Ir al catálogo
            <ArrowRight className="h-5 w-5" aria-hidden />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-stone-500 px-8 py-3.5 text-base font-bold text-stone-100 transition hover:border-stone-100 hover:bg-stone-100 hover:text-stone-900"
          >
            Contacto
          </Link>
        </div>
      </div>
    </section>
  )
}
