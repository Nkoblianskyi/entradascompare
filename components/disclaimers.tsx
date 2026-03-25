import { AlertTriangle, Shield } from 'lucide-react'

export function DisclaimerStrip() {
  return (
    <div className="border-b border-orange-900/15 bg-orange-50">
      <div className="mx-auto flex max-w-7xl flex-wrap items-start gap-3 px-4 py-2.5 text-xs text-stone-800 sm:px-6 sm:text-sm lg:px-8">
        <Shield className="mt-0.5 h-4 w-4 shrink-0 text-orange-700" aria-hidden />
        <p className="leading-relaxed">
          <strong className="font-semibold text-stone-900">Solo comparamos precios.</strong> No vendemos entradas, no procesamos
          pagos y no recogemos datos bancarios. Los importes pueden diferir del precio nominal o de taquilla; confirma siempre
          en la web del colaborador.
        </p>
      </div>
    </div>
  )
}

export function DisclaimerBlock({ variant = 'default' }: { variant?: 'default' | 'strong' }) {
  return (
    <div
      role="note"
      className={
        variant === 'strong'
          ? 'rounded-2xl border-2 border-orange-800/30 bg-orange-50/90 p-5 text-sm text-stone-800 md:p-6'
          : 'rounded-2xl border border-stone-300 bg-[#faf8f4] p-5 text-sm text-stone-700'
      }
    >
      <div className="flex gap-3">
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-orange-700" aria-hidden />
        <div className="space-y-2 leading-relaxed">
          <p>
            <strong className="text-stone-900">entradascompare</strong> es un comparador informativo: reunimos precios
            publicados o simulados por colaboradores para que elijas con contexto.
          </p>
          <ul className="list-disc space-y-1 pl-4 marker:text-orange-700">
            <li>No vendemos entradas en este dominio.</li>
            <li>No almacenamos ni solicitamos datos de tarjeta ni pagos.</li>
            <li>
              Los precios mostrados pueden variar respecto al valor nominal, gastos de gestión, demanda o promociones del
              partner.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
