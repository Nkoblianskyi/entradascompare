import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface EventDetailHeaderProps {
  eventTitle: string
}

export function EventDetailHeader({ eventTitle }: EventDetailHeaderProps) {
  return (
    <header className="border-b border-stone-200 bg-[#faf8f4]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/catalogo"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-stone-600 transition hover:text-stone-900"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-300 bg-white shadow-sm transition group-hover:border-orange-400/60 group-hover:bg-orange-50/80">
            <ChevronLeft className="h-4 w-4" aria-hidden />
          </span>
          Catálogo
        </Link>
        <nav className="flex max-w-[min(100%,520px)] items-center gap-1.5 text-xs text-stone-500 sm:text-sm" aria-label="Migas de pan">
          <Link href="/" className="shrink-0 hover:text-stone-800">
            Inicio
          </Link>
          <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-40" aria-hidden />
          <Link href="/catalogo" className="shrink-0 hover:text-stone-800">
            Catálogo
          </Link>
          <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-40" aria-hidden />
          <span className="truncate font-medium text-orange-800" title={eventTitle}>
            {eventTitle}
          </span>
        </nav>
      </div>
    </header>
  )
}
