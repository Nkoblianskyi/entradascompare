import { Search, ArrowLeftRight, ExternalLink } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Busca en el catálogo',
    text: 'Filtra por ciudad o palabras clave. Todo el contenido es deportivo y enlaza a fichas con comparativa.',
  },
  {
    icon: ArrowLeftRight,
    title: 'Compara precios',
    text: 'Cada ficha ordena colaboradores para que veas el panorama. No es una cesta: es información.',
  },
  {
    icon: ExternalLink,
    title: 'Compra en el partner',
    text: 'Al hacer clic sales de entradascompare. Pago, tasas y legales: en su web, no en la nuestra.',
  },
]

export function HomeHowItWorks() {
  return (
    <section className="border-y border-stone-200 bg-[#fffdf8] py-16 md:py-20" aria-labelledby="how-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-orange-800">Cómo funciona</p>
          <h2 id="how-title" className="font-display mt-2 text-3xl font-bold text-stone-900 md:text-4xl">
            Tres pasos, una sola regla: aquí no pagas
          </h2>
        </div>
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="card-surface flex flex-col p-6 md:p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-stone-900 text-orange-400">
                <s.icon className="h-6 w-6" strokeWidth={1.25} aria-hidden />
              </span>
              <span className="mt-4 font-mono text-xs font-bold text-orange-800">0{i + 1}</span>
              <h3 className="font-display mt-1 text-lg font-bold text-stone-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
