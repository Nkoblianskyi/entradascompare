'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Cookie, X } from 'lucide-react'

const CONSENT_KEY = 'entradascompare_cookie_consent_v2'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (!stored) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem(CONSENT_KEY, 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookies"
      className="fixed inset-x-0 bottom-0 z-[60] border-t-2 border-stone-300 bg-[#fffdf8]/98 shadow-[0_-12px_40px_rgba(28,25,23,0.12)] backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex min-w-0 flex-1 gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-stone-300 bg-orange-50">
            <Cookie className="h-5 w-5 text-orange-800" aria-hidden />
          </span>
          <div className="min-w-0">
            <p className="font-display text-sm font-bold text-stone-900">Cookies</p>
            <p className="mt-1 text-xs leading-relaxed text-stone-600">
              Necesarias para el sitio y, si aceptas, analítica agregada. No vendemos datos.{' '}
              <Link href="/cookies" className="font-bold text-orange-800 underline underline-offset-2" onClick={() => setVisible(false)}>
                Política
              </Link>{' '}
              ·{' '}
              <Link href="/privacidad" className="font-bold text-orange-800 underline underline-offset-2" onClick={() => setVisible(false)}>
                Privacidad
              </Link>
            </p>
          </div>
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-2 sm:justify-end">
          <button
            type="button"
            onClick={decline}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-stone-800 bg-transparent px-4 py-2.5 text-sm font-bold text-stone-900 sm:flex-none"
            aria-label="Solo cookies necesarias"
          >
            <X className="h-4 w-4" aria-hidden />
            Necesarias
          </button>
          <button
            type="button"
            onClick={accept}
            className="inline-flex flex-1 items-center justify-center rounded-xl bg-orange-700 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-orange-600 sm:flex-none"
            aria-label="Aceptar cookies"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  )
}
