import { Scale, ListOrdered, CreditCard, Shield } from 'lucide-react'
import { DisclaimerBlock } from '@/components/disclaimers'

const rules = [
  {
    icon: Scale,
    title: 'Criterio de orden',
    text: 'En cada ficha priorizamos precio y disponibilidad simulada. Nadie compra una posición fija en el listado.',
  },
  {
    icon: ListOrdered,
    title: 'Editorial + datos',
    text: 'Los textos orientativos son nuestros; los importes reflejan lo que cada partner muestra o suele publicar.',
  },
  {
    icon: CreditCard,
    title: 'Pago fuera',
    text: 'Contrato, IVA/tasas y cobro: siempre en la web del colaborador que abras desde el enlace.',
  },
  {
    icon: Shield,
    title: 'Independencia',
    text: 'Si detectas un error en una ficha, escríbenos: lo revisamos sin compromiso comercial con el partner.',
  },
]

export function PartnersRules() {
  return (
    <section className="border-b border-stone-200 bg-[#fffcf7]">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
        <DisclaimerBlock variant="strong" />
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-16 md:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-orange-800">Marco de trabajo</p>
          <h2 className="font-display mt-2 text-3xl font-bold text-stone-950 md:text-4xl">Cómo usamos a los colaboradores</h2>
          <p className="mt-4 text-stone-600">
            Reglas claras antes del listado. La relación con cada marca es de referencia informativa, no de intermediación de
            venta.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {rules.map((r, i) => (
            <article
              key={r.title}
              className={`group relative overflow-hidden rounded-3xl border border-stone-200 bg-white p-7 shadow-sm transition hover:border-orange-800/25 hover:shadow-md md:p-8 ${
                i % 2 === 1 ? 'md:translate-y-4' : ''
              }`}
            >
              <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-orange-100/40 transition group-hover:bg-orange-200/50" aria-hidden />
              <span className="font-display text-5xl font-bold leading-none text-stone-100">{String(i + 1).padStart(2, '0')}</span>
              <div className="relative mt-4 flex gap-5">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-stone-950 text-orange-400 shadow-inner">
                  <r.icon className="h-7 w-7" strokeWidth={1.25} aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-stone-950">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{r.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
