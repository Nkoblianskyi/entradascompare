import Link from 'next/link'
import { Mail, MapPin, ArrowUpRight } from 'lucide-react'
import { Logo } from '@/components/logo'
import { partners } from '@/lib/events-data'

const partnerNames = partners.map((p) => p.name)

const exploreLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Catálogo', href: '/catalogo' },
  { label: 'Sobre nosotros', href: '/sobre-nosotros' },
  { label: 'Colaboradores', href: '/partners' },
  { label: 'Contacto', href: '/contact' },
]

const legalLinks = [
  { label: 'Privacidad', href: '/privacidad' },
  { label: 'Cookies', href: '/cookies' },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-footer text-stone-400">
      <div className="pointer-events-none absolute inset-0 bg-pattern-dots text-white/[0.04]" aria-hidden />

      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <Logo variant="footer" href="/" />
              <p className="mt-5 max-w-md text-sm leading-relaxed text-stone-500">
                Comparador de precios de entradas deportivas. Sin carrito propio: enlazamos a colaboradores para que cierres la
                compra donde prefieras.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-orange-600/20 px-3 py-1 text-[11px] font-bold text-orange-300">
                  Sin datos de pago aquí
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] font-semibold text-stone-500">
                  Precios orientativos
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
              <div>
                <h3 className="mb-4 font-display text-xs font-bold uppercase tracking-[0.2em] text-stone-600">Mapa</h3>
                <ul className="space-y-2.5" role="list">
                  {exploreLinks.map(({ label, href }) => (
                    <li key={href}>
                      <Link href={href} className="text-sm font-semibold text-stone-300 transition hover:text-white">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-4 font-display text-xs font-bold uppercase tracking-[0.2em] text-stone-600">Legal</h3>
                <ul className="space-y-2.5">
                  {legalLinks.map(({ label, href }) => (
                    <li key={href}>
                      <Link href={href} className="text-sm font-semibold text-stone-300 transition hover:text-orange-300">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <h3 className="mb-4 font-display text-xs font-bold uppercase tracking-[0.2em] text-stone-600">Contacto</h3>
                <a
                  href="mailto:info@entradascompare.com"
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-orange-500/40"
                >
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" aria-hidden />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-stone-600">Email</p>
                    <p className="break-all text-sm font-bold text-white">info@entradascompare.com</p>
                  </div>
                </a>
                <div className="mt-4 flex items-start gap-3 rounded-2xl border border-white/10 p-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-stone-500" aria-hidden />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-stone-600">Dirección</p>
                    <p className="text-sm leading-snug text-stone-400">Paseo de la Castellana 95, 28046 Madrid, España</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-6 md:px-6">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-stone-600">Marcas referenciadas</p>
            <div className="flex flex-wrap gap-2">
              {partnerNames.map((p) => (
                <span key={p} className="rounded-lg border border-white/10 bg-stone-900/50 px-2.5 py-1 text-xs text-stone-500">
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col-reverse items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
            <p className="text-center text-xs text-stone-600 sm:text-left">
              © {new Date().getFullYear()} entradascompare · entradascompare.com. Información orientativa; sin venta en este sitio.
            </p>
            <Link
              href="/sobre-nosotros"
              className="inline-flex items-center gap-2 text-xs font-bold text-orange-400 hover:text-white"
            >
              Transparencia
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
