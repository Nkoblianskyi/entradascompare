'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqs = [
  {
    q: '¿Puedo comprar la entrada aquí?',
    a: 'No. entradascompare solo muestra información y enlaces. La compra y el cobro son siempre en la web del colaborador.',
  },
  {
    q: '¿Los precios son finales?',
    a: 'Son orientativos según la ficha. Pueden variar por demanda, gastos o promociones. Confirma el total en el checkout del partner.',
  },
  {
    q: '¿Pedís datos de tarjeta?',
    a: 'No para venta de entradas. No somos pasarela de pago. Solo tratamos lo necesario para el sitio y, si nos escribes, los datos del formulario.',
  },
  {
    q: '¿Quién ordena las ofertas?',
    a: 'Por precio y disponibilidad simulada en la ficha. Nadie compra una posición fija.',
  },
]

export function HomeFaq() {
  return (
    <section className="bg-[#ebe6db] py-16 md:py-20" aria-labelledby="faq-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-orange-900">FAQ</p>
            <h2 id="faq-title" className="font-display mt-2 text-3xl font-bold text-stone-900 md:text-4xl">
              Dudas habituales
            </h2>
            <p className="mt-4 text-stone-600">Si necesitas datos legales detallados: privacidad y cookies en el pie.</p>
          </div>
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="rounded-2xl border border-stone-300 bg-[#fffdf8] px-3 shadow-sm">
              {faqs.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-stone-200 px-3">
                  <AccordionTrigger className="py-4 text-left font-display text-base font-bold text-stone-900 hover:no-underline [&>svg]:text-orange-700">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm leading-relaxed text-stone-600">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
