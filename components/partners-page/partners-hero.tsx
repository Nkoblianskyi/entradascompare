import Link from 'next/link'
import { Handshake, ArrowRight } from 'lucide-react'

export function PartnersHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#1a1814] text-[#f4f0e8]">
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden>
        <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-orange-600/30 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-amber-900/20 blur-[90px]" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,transparent_0%,rgba(26,24,20,0.3)_45%,rgba(194,65,12,0.12)_100%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 md:px-6 md:pb-28 md:pt-20 lg:px-8">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.2em] text-orange-300/95">
              <Handshake className="h-3.5 w-3.5" aria-hidden />
              Red de colaboradores
            </p>
            <h1 className="font-display mt-6 text-[clamp(2.25rem,5vw,3.75rem)] font-bold leading-[1.05] tracking-tight">
              Plataformas que
              <span className="block text-orange-400">alimentan la comparativa</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-stone-400 md:text-xl">
              Cada ficha puede enlazar a varias fuentes con precios orientativos. Tú eliges dónde continuar: nosotros no
              cerramos venta ni cobramos en este dominio.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/catalogo"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-stone-950 shadow-lg transition hover:bg-orange-50"
              >
                Ver catálogo
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Sugerir corrección
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:col-span-4 lg:grid-cols-1 lg:gap-4">
            {[
              { k: '6', l: 'Fuentes en matriz' },
              { k: '0 €', l: 'Checkout aquí' },
              { k: '100%', l: 'Enlaces externos' },
            ].map((s) => (
              <div
                key={s.k}
                className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 backdrop-blur-sm md:px-6 md:py-5"
              >
                <p className="font-display text-3xl font-bold tabular-nums text-white md:text-4xl">{s.k}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-stone-500">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
