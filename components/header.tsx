'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X, LayoutGrid, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/logo'

const navLinks = [
  { href: '/catalogo', label: 'Catálogo' },
  { href: '/sobre-nosotros', label: 'Sobre nosotros' },
  { href: '/partners', label: 'Colaboradores' },
  { href: '/contact', label: 'Contacto' },
]

export function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-stone-300/80 bg-[#ebe6db] text-[11px] text-stone-600 sm:text-xs">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <p className="truncate font-medium text-stone-700">España · comparador · sin pago en este dominio</p>
          <div className="hidden shrink-0 items-center gap-4 sm:flex">
            <Link href="/privacidad" className="font-semibold text-stone-600 hover:text-stone-900">
              Privacidad
            </Link>
            <Link href="/cookies" className="font-semibold text-stone-600 hover:text-stone-900">
              Cookies
            </Link>
          </div>
        </div>
      </div>

      <div className="border-b border-stone-300/90 bg-[#fffdf8]/95 shadow-sm backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            <Logo variant="header" href="/" />

            <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
              {navLinks.map((link) => {
                const active = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'rounded-full px-4 py-2 text-sm font-bold transition-colors',
                      active ? 'bg-stone-900 text-[#fffdf8]' : 'text-stone-700 hover:bg-stone-200/80',
                    )}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            <div className="flex shrink-0 items-center gap-2">
              <Link
                href="/catalogo"
                className="hidden items-center gap-2 rounded-full bg-orange-700 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-orange-600 sm:inline-flex"
              >
                <LayoutGrid className="h-4 w-4" aria-hidden />
                Catálogo
              </Link>
              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 bg-[#faf8f4] text-stone-900 lg:hidden"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="fixed inset-0 top-[calc(2.25rem+4rem)] z-40 bg-stone-900/96 backdrop-blur-sm lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
        >
          <nav className="flex h-full flex-col overflow-y-auto px-4 py-6 pb-12" aria-label="Menú móvil">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const active = pathname === link.href
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        'flex items-center justify-between rounded-2xl px-4 py-4 text-base font-bold',
                        active ? 'bg-orange-700 text-white' : 'bg-stone-800 text-stone-100',
                      )}
                    >
                      {link.label}
                      <ChevronRight className="h-5 w-5 opacity-70" aria-hidden />
                    </Link>
                  </li>
                )
              })}
            </ul>
            <p className="mt-8 rounded-2xl border border-stone-600 bg-stone-800/80 p-4 text-sm leading-relaxed text-stone-300">
              No vendemos entradas: solo información y enlaces. El pago es en la web del colaborador.
            </p>
            <Link
              href="/catalogo"
              onClick={() => setMobileOpen(false)}
              className="mt-6 flex items-center justify-center rounded-2xl bg-orange-700 py-4 text-base font-bold text-white"
            >
              Ir al catálogo
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
