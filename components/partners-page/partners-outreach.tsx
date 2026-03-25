import Link from 'next/link'
import { Mail, Sparkles } from 'lucide-react'

export function PartnersOutreach() {
  return (
    <section className="relative overflow-hidden bg-stone-950 py-20 text-white md:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-600/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-64 w-64 translate-y-1/3 rounded-full bg-orange-950/25 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-display text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              Nuevas integraciones
            </p>
            <h2 className="font-display mt-6 text-3xl font-bold leading-tight md:text-4xl lg:text-[2.35rem]">
              ¿Representas una plataforma de venta de entradas?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-stone-400">
              Si operas en España con condiciones transparentes para el público y quieres valorar aparecer en nuestra matriz
              informativa, cuéntanos tu caso. Respondemos por correo; no garantizamos inclusión automática.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-orange-500/40 via-transparent to-amber-800/25 blur-sm" aria-hidden />
            <div className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur-md md:p-10">
              <p className="text-sm font-semibold text-stone-300">Canal preferente</p>
              <a
                href="mailto:info@entradascompare.com?subject=Partnership%20entradascompare"
                className="mt-3 flex items-center gap-3 break-all text-xl font-bold text-white transition hover:text-orange-200 md:text-2xl"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-700">
                  <Mail className="h-6 w-6" aria-hidden />
                </span>
                info@entradascompare.com
              </a>
              <p className="mt-6 text-sm leading-relaxed text-stone-500">
                Incluye URL del sitio, mercados cubiertos y un contacto técnico o comercial. También puedes usar el{' '}
                <Link href="/contact" className="font-bold text-orange-300 underline underline-offset-2 hover:text-white">
                  formulario de contacto
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
