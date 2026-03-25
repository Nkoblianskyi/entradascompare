import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f4f0e8]">
      <div
        className="pointer-events-none absolute -right-24 top-0 h-[min(70vw,520px)] w-[min(70vw,520px)] rounded-full bg-orange-500/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-amber-900/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-16 md:grid-cols-12 md:gap-8 md:pb-28 md:pt-20 lg:px-8">
        <div className="flex flex-col justify-center md:col-span-7">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-stone-900/10 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-stone-700 shadow-sm backdrop-blur">
            Sobre entradascompare
          </p>
          <h1 className="font-display mt-6 text-[clamp(2.25rem,5vw,3.75rem)] font-bold leading-[1.05] tracking-tight text-stone-950">
            Comparar precios.
            <span className="block text-orange-800">Sin venderte nada aquí.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-stone-600 md:text-xl">
            Somos un comparador informativo de entradas deportivas en España. Reunimos cifras orientativas de colaboradores
            conocidos; el contrato y el pago ocurren siempre en su web.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/catalogo"
              className="inline-flex items-center gap-2 rounded-full bg-stone-950 px-7 py-3.5 text-sm font-bold text-[#f7f3eb] shadow-lg shadow-stone-900/20 transition hover:bg-stone-800"
            >
              Explorar eventos
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/contact"
              className="text-sm font-bold text-stone-800 underline decoration-orange-700/40 decoration-2 underline-offset-4 hover:decoration-orange-700"
            >
              Contacto
            </Link>
          </div>
        </div>

        <div className="relative flex items-stretch md:col-span-5">
          <div className="relative flex w-full flex-col justify-between rounded-[2rem] border border-stone-900/8 bg-white p-8 shadow-[0_20px_50px_-12px_rgba(28,25,23,0.2)]">
            <div className="space-y-6">
              <p className="font-display text-4xl font-bold leading-none text-stone-950 md:text-5xl">01</p>
              <p className="text-sm font-medium leading-relaxed text-stone-600">
                No procesamos pagos, no guardamos tarjetas y no somos intermediarios del evento. Solo contexto para decidir.
              </p>
            </div>
            <div className="mt-10 h-px w-full bg-gradient-to-r from-orange-700/40 via-stone-300 to-transparent" />
            <p className="mt-6 text-xs font-bold uppercase tracking-widest text-stone-500">Editorial · datos orientativos</p>
          </div>
        </div>
      </div>
    </section>
  )
}
