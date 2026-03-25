const steps = [
  {
    step: '1',
    title: 'Exploras el catálogo',
    body: 'Filtras por ciudad o interés y abres la ficha del evento que te interesa.',
  },
  {
    step: '2',
    title: 'Ves precios reunidos',
    body: 'Listamos importes orientativos de colaboradores. Pueden variar respecto al nominal o taquilla.',
  },
  {
    step: '3',
    title: 'Sigues el enlace',
    body: 'Sales de entradascompare hacia la web del partner que elijas.',
  },
  {
    step: '4',
    title: 'Compras allí',
    body: 'Condiciones legales, disponibilidad y pago: todo en su plataforma, no en la nuestra.',
  },
]

export function AboutTimeline() {
  return (
    <section className="bg-[#fffcf7] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="font-display max-w-xl text-3xl font-bold text-stone-950 md:text-4xl">Cómo encaja todo en la práctica</h2>
        <p className="mt-4 max-w-2xl text-stone-600">
          No hay paso oculto: la compra no ocurre en este dominio. Usamos la ficha solo para ordenar la información pública o
          habitual de cada partner.
        </p>

        <div className="relative mt-14 md:mt-16">
          <div
            className="pointer-events-none absolute left-[1.15rem] top-3 hidden h-[calc(100%-1.5rem)] w-px bg-gradient-to-b from-orange-600 via-stone-300 to-stone-200 md:block"
            aria-hidden
          />
          <ol className="relative list-none p-0">
          {steps.map((s, i) => (
            <li key={s.step} className="relative md:grid md:grid-cols-[4rem_1fr] md:gap-8">
              <div className="hidden md:flex md:justify-start md:pt-1">
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-orange-700 bg-[#fffcf7] font-display text-sm font-bold text-orange-900 shadow-sm">
                  {s.step}
                </span>
              </div>
              <div
                className={`border-l-2 border-orange-700/35 py-6 pl-8 md:border-l-0 md:py-8 md:pl-0 ${i < steps.length - 1 ? 'border-b border-stone-200 md:border-b-0' : ''}`}
              >
                <span className="font-display text-xs font-bold uppercase tracking-widest text-orange-800 md:hidden">
                  Paso {s.step}
                </span>
                <h3 className="font-display mt-1 text-xl font-bold text-stone-950 md:mt-0">{s.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-stone-600 md:text-base">{s.body}</p>
              </div>
            </li>
          ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
