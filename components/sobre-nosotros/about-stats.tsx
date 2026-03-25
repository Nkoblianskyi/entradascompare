const stats = [
  { value: '0 €', label: 'Cobro en este sitio', hint: 'No checkout propio' },
  { value: '100%', label: 'Enfoque comparativo', hint: 'Sin venta de entradas' },
  { value: '6+', label: 'Fuentes referenciadas', hint: 'Partners habituales' },
]

export function AboutStats() {
  return (
    <section className="border-y border-stone-200 bg-white">
      <div className="mx-auto grid max-w-7xl divide-y divide-stone-200 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-8">
        {stats.map((s) => (
          <div key={s.label} className="px-6 py-10 text-center md:px-8">
            <p className="font-display text-4xl font-bold tabular-nums text-stone-950 md:text-5xl">{s.value}</p>
            <p className="mt-2 font-display text-sm font-bold uppercase tracking-wider text-orange-900">{s.label}</p>
            <p className="mt-1 text-xs text-stone-500">{s.hint}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
