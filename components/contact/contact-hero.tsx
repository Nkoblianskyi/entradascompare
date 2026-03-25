export function ContactHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-stone-200 bg-[#f0ebe3]">
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 translate-x-1/3 -translate-y-1/4 rounded-full bg-orange-400/20 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 -translate-x-1/4 translate-y-1/4 rounded-full bg-amber-900/10 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-14 md:px-6 md:pb-16 md:pt-16 lg:px-8">
        <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-stone-600">Hablemos</p>
        <h1 className="font-display mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-stone-950 md:text-5xl">
          Contacto
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600 md:text-xl">
          ¿Datos que no cuadran en una ficha, una idea para el catálogo o una consulta sobre colaboradores? Te respondemos por
          correo en <strong className="font-semibold text-stone-800">1–2 días laborables</strong>. No tramitamos devoluciones ni
          cargos: eso siempre en la plataforma donde pagaste.
        </p>
      </div>
    </section>
  )
}
