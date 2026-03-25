import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react'

const mockRows = [
  { name: 'Ticketmaster', price: '72 €', highlight: true },
  { name: 'Eventim', price: '78 €', highlight: false },
  { name: 'Fnac Entradas', price: '75 €', highlight: false },
]

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-stone-300 bg-home-split">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[radial-gradient(circle,_#d6d3cd_1px,_transparent_1px)] [background-size:20px_20px]"
        aria-hidden
      />

      <div className="relative grid lg:min-h-0 lg:grid-cols-2 lg:items-stretch">
        {/* Columna editorial — clara, texto tinta */}
        <div className="relative flex flex-col justify-center border-b border-stone-200 px-4 py-8 sm:px-8 sm:py-10 lg:border-b-0 lg:border-r lg:border-stone-200 lg:px-10 lg:py-10 xl:pl-14 xl:pr-12">
          <div className="absolute left-0 top-6 bottom-6 hidden w-1 rounded-full bg-orange-600 lg:block xl:w-1.5" aria-hidden />

          <div className="lg:pl-4">

            <h1 className="font-display mt-4 max-w-[14ch] text-[clamp(2rem,5vw,3.25rem)] font-extrabold leading-[0.95] tracking-tight text-stone-950">
              Precios.
              <span className="mt-1.5 block text-orange-700">Cero checkout.</span>
            </h1>

            <p className="mt-5 max-w-md text-base leading-relaxed text-stone-600 md:text-lg">
              Cruzamos <strong className="font-semibold text-stone-800">rangos entre colaboradores</strong> para que decidas
              dónde seguir. La compra y el cobro ocurren solo en la web del partner.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/catalogo"
                className="inline-flex items-center gap-2 rounded-full bg-stone-950 px-6 py-3 text-sm font-bold text-[#fffdf8] shadow-lg transition hover:bg-orange-700"
              >
                Entrar al catálogo
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/partners"
                className="inline-flex items-center gap-2 rounded-full border-2 border-stone-800 bg-transparent px-5 py-3 text-sm font-bold text-stone-900 transition hover:bg-stone-900 hover:text-[#fffdf8]"
              >
                Ver colaboradores
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>

            <dl className="mt-8 grid max-w-lg grid-cols-3 gap-3 border-t border-stone-300/80 pt-6">
              <div>
                <dt className="text-[10px] font-bold uppercase tracking-wider text-stone-500">Aquí</dt>
                <dd className="font-display mt-0.5 text-xl font-bold tabular-nums text-stone-900">0 €</dd>
              </div>
              <div>
                <dt className="text-[10px] font-bold uppercase tracking-wider text-stone-500">Fuentes</dt>
                <dd className="font-display mt-0.5 text-xl font-bold tabular-nums text-stone-900">6+</dd>
              </div>
              <div>
                <dt className="text-[10px] font-bold uppercase tracking-wider text-stone-500">Modelo</dt>
                <dd className="mt-0.5 text-sm font-bold leading-tight text-stone-800">Solo enlaces</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Panel ámbar — preview visual, no es el hero del catálogo */}
        <div className="relative flex flex-col justify-center overflow-hidden bg-gradient-to-br from-orange-600 via-orange-800 to-stone-900 px-6 py-10 sm:px-10 sm:py-12 lg:px-10 lg:py-10">
          <div className="pointer-events-none absolute -right-20 top-1/4 h-72 w-72 rounded-full bg-orange-400/25 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-stone-950/40 blur-3xl" aria-hidden />

          <p className="relative text-xs font-bold uppercase tracking-[0.25em] text-orange-100/90">Vista rápida</p>
          <p className="relative mt-1.5 font-display text-xl font-bold text-white md:text-2xl">Así se ve una comparativa</p>
          <p className="relative mt-1.5 max-w-sm text-xs text-orange-100/85 md:text-sm">
            Datos orientativos en ficha; orden por precio. Ejemplo ilustrativo.
          </p>

          <div className="relative mt-6 space-y-2.5">
            {mockRows.map((row) => (
              <div
                key={row.name}
                className={`flex items-center justify-between gap-4 rounded-xl border px-3 py-2.5 backdrop-blur-sm md:px-4 md:py-3 ${
                  row.highlight
                    ? 'border-white/40 bg-white/20 shadow-lg'
                    : 'border-white/15 bg-white/10'
                }`}
              >
                <span className="text-sm font-bold text-white">{row.name}</span>
                <span className="font-display text-lg font-bold tabular-nums text-white">{row.price}</span>
              </div>
            ))}
          </div>

          <p className="relative mt-5 text-center text-[10px] font-medium text-orange-200/80 md:text-[11px]">
            No vendemos entradas · confirmación siempre en el partner
          </p>
        </div>
      </div>
    </section>
  )
}
