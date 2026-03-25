import { Sparkles, ShieldCheck, Compass } from 'lucide-react'

export function AboutBento() {
  return (
    <section className="bg-[#ebe6dc] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-stone-600">Por qué existe el proyecto</p>
          <h2 className="font-display mt-3 text-3xl font-bold text-stone-950 md:text-4xl">Tres ideas que no negociamos</h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-6 md:grid-rows-2 md:gap-5">
          <article className="flex flex-col justify-between rounded-3xl bg-stone-950 p-8 text-[#f4f0e8] md:col-span-4 md:row-span-2 md:min-h-[280px]">
            <Sparkles className="h-9 w-9 text-orange-400" strokeWidth={1.25} aria-hidden />
            <div>
              <h3 className="font-display text-2xl font-bold md:text-3xl">Claridad antes que prisa</h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-stone-400">
                Mostramos precios y enlaces para que compares en segundos. Si algo cambia en el partner, la responsabilidad es
                suya: nosotros no sustituimos su checkout.
              </p>
            </div>
          </article>

          <article className="rounded-3xl border-2 border-stone-900/10 bg-white p-7 shadow-sm md:col-span-2">
            <ShieldCheck className="h-8 w-8 text-orange-900" strokeWidth={1.25} aria-hidden />
            <h3 className="font-display mt-4 text-lg font-bold text-stone-950">Sin datos de pago</h3>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">
              No recogemos IBAN, tarjetas ni datos sensibles de compra. Solo navegación y cookies descritas en políticas.
            </p>
          </article>

          <article className="rounded-3xl border-2 border-orange-800/20 bg-orange-50/80 p-7 md:col-span-2">
            <Compass className="h-8 w-8 text-orange-800" strokeWidth={1.25} aria-hidden />
            <h3 className="font-display mt-4 text-lg font-bold text-stone-950">Deporte en foco</h3>
            <p className="mt-2 text-sm leading-relaxed text-stone-700">
              Priorizamos partidos y eventos deportivos en recintos españoles. Textos de ficha son orientativos, no oficiales del
              club.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
