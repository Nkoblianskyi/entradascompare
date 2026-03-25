import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function HomeAbout() {
  return (
    <section className="relative overflow-hidden border-y border-stone-800/20 bg-mesh-warm py-16 text-stone-100 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange-300">Proyecto</p>
            <h2 className="font-display mt-3 text-3xl font-bold md:text-4xl">Transparencia antes que conversión</h2>
            <p className="mt-5 text-lg leading-relaxed text-stone-300">
              Explicamos qué hacemos y qué no: comparar precios entre plataformas conocidas, sin meter un checkout propio ni
              sustituir al organizador del evento.
            </p>
            <Link href="/sobre-nosotros" className="btn-primary mt-8">
              Sobre nosotros
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-sm">
            <ul className="space-y-4 text-sm text-stone-300">
              <li className="flex gap-3 border-l-2 border-orange-500 pl-3">
                <span className="font-bold text-orange-200">·</span>
                Madrid, España — información orientativa
              </li>
              <li className="flex gap-3 border-l-2 border-white/20 pl-3">
                <span className="font-bold text-orange-200">·</span>
                Colaboradores enlazados; condiciones en sus sitios
              </li>
              <li className="flex gap-3 border-l-2 border-white/20 pl-3">
                <span className="font-bold text-orange-200">·</span>
                Contacto abierto para errores en fichas
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
