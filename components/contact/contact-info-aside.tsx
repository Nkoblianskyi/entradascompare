import { Mail, MapPin, Clock, Shield } from 'lucide-react'
import Link from 'next/link'

export function ContactInfoAside() {
  return (
    <aside className="flex flex-col gap-5 lg:sticky lg:top-28">
      <div className="rounded-3xl border border-stone-200 bg-stone-950 p-7 text-stone-100 shadow-lg">
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-orange-300/90">Canal oficial</p>
        <h2 className="font-display mt-3 text-xl font-bold">Correo</h2>
        <a
          href="mailto:info@entradascompare.com"
          className="mt-4 inline-block break-all text-lg font-bold text-white underline decoration-orange-500/50 underline-offset-4 transition hover:decoration-orange-400"
        >
          info@entradascompare.com
        </a>
        <div className="mt-6 flex items-start gap-3 border-t border-white/10 pt-6 text-sm text-stone-400">
          <Mail className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" aria-hidden />
          <span>Usa el mismo email que indiques en el formulario para que podamos cruzar el hilo.</span>
        </div>
      </div>

      <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
        <div className="flex gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#faf8f4] text-stone-800 ring-1 ring-stone-200">
            <MapPin className="h-6 w-6" aria-hidden />
          </span>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-stone-500">Correspondencia</p>
            <p className="mt-1 text-sm font-semibold leading-snug text-stone-900">
              Paseo de la Castellana 95
              <br />
              28046 Madrid, España
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
        <div className="flex gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#faf8f4] text-stone-800 ring-1 ring-stone-200">
            <Clock className="h-6 w-6" aria-hidden />
          </span>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-stone-500">Tiempo de respuesta</p>
            <p className="mt-1 text-sm font-semibold text-stone-900">1–2 días laborables</p>
            <p className="mt-1 text-xs text-stone-500">Lunes a viernes, horario de oficina en España.</p>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border-2 border-orange-800/20 bg-gradient-to-br from-orange-50 to-amber-50/80 p-6">
        <div className="flex gap-3">
          <Shield className="h-6 w-6 shrink-0 text-orange-800" aria-hidden />
          <div>
            <p className="font-display text-sm font-bold text-stone-900">Importante</p>
            <p className="mt-2 text-sm leading-relaxed text-stone-700">
              entradascompare no vende entradas ni procesa pagos. Para cargos o reembolsos, contacta con la web donde hiciste la
              compra.
            </p>
            <Link href="/privacidad" className="mt-3 inline-block text-sm font-bold text-orange-900 underline underline-offset-2">
              Política de privacidad
            </Link>
          </div>
        </div>
      </div>
    </aside>
  )
}
