import { ShieldAlert } from 'lucide-react'

export function HomeDisclaimer() {
  return (
    <section className="border-y-2 border-orange-800/40 bg-orange-50/90 py-14 md:py-16" aria-labelledby="home-disclaimer-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:gap-8">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange-700 text-white shadow-md">
            <ShieldAlert className="h-8 w-8" aria-hidden />
          </div>
          <div>
            <h2 id="home-disclaimer-title" className="font-display text-2xl font-bold text-stone-900 md:text-3xl">
              Aviso legal resumido
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-stone-800 md:text-lg">
              <strong className="text-stone-950">Solo comparamos precios.</strong> No vendemos entradas, no procesamos pagos y
              no recogemos datos bancarios para ticketing. Los importes pueden diferir del precio nominal o de taquilla; confirma
              siempre en la web del colaborador.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
