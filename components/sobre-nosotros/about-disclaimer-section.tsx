import { DisclaimerBlock } from '@/components/disclaimers'
import { FileWarning } from 'lucide-react'
import Link from 'next/link'

export function AboutDisclaimerSection() {
  return (
    <section className="bg-white py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <DisclaimerBlock variant="strong" />
          <div className="flex flex-col justify-center rounded-3xl border border-stone-200 bg-[#faf8f4] p-8">
            <div className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-stone-900 text-white">
                <FileWarning className="h-6 w-6" aria-hidden />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-stone-950">Limitación de responsabilidad</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">
                  entradascompare no forma parte del contrato entre tú y el vendedor de entradas. Al salir hacia un enlace
                  externo aceptas las políticas de ese sitio. Los precios pueden diferir del valor nominal o de taquilla.
                </p>
                <div className="mt-6 flex flex-wrap gap-3 text-sm font-bold">
                  <Link href="/privacidad" className="text-orange-900 underline decoration-orange-700/30 underline-offset-4 hover:decoration-orange-800">
                    Privacidad
                  </Link>
                  <span className="text-stone-300">·</span>
                  <Link href="/cookies" className="text-orange-900 underline decoration-orange-700/30 underline-offset-4 hover:decoration-orange-800">
                    Cookies
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
