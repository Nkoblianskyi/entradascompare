'use client'

import { LayoutGrid, Rows3 } from 'lucide-react'

interface CatalogToolbarProps {
  mode: 'grid' | 'feed'
  onModeChange: (mode: 'grid' | 'feed') => void
}

export function CatalogToolbar({ mode, onModeChange }: CatalogToolbarProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <p className="text-sm font-medium text-stone-600">
        Contenido <span className="font-bold text-stone-900">solo deportivo</span>. Misma paleta que el resto del sitio.
      </p>
      <div className="flex items-center gap-1 rounded-xl border border-stone-300 bg-stone-100/90 p-1">
        <button
          type="button"
          onClick={() => onModeChange('grid')}
          className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-bold uppercase tracking-wide ${
            mode === 'grid' ? 'bg-stone-900 text-[#fffdf8]' : 'text-stone-600 hover:bg-stone-200'
          }`}
        >
          <LayoutGrid className="h-3.5 w-3.5" />
          Cuadrícula
        </button>
        <button
          type="button"
          onClick={() => onModeChange('feed')}
          className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-bold uppercase tracking-wide ${
            mode === 'feed' ? 'bg-stone-900 text-[#fffdf8]' : 'text-stone-600 hover:bg-stone-200'
          }`}
        >
          <Rows3 className="h-3.5 w-3.5" />
          Lista
        </button>
      </div>
    </div>
  )
}
