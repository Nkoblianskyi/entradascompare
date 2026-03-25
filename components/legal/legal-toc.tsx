interface TocItem {
  id: string
  label: string
}

interface LegalTocProps {
  title: string
  items: TocItem[]
}

export function LegalToc({ title, items }: LegalTocProps) {
  return (
    <nav className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm lg:sticky lg:top-28" aria-label="Índice del documento">
      <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-stone-500">{title}</p>
      <ol className="mt-4 space-y-2.5 text-sm">
        {items.map((item, i) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="group flex gap-3 text-stone-600 transition hover:text-stone-950"
            >
              <span className="font-mono text-xs tabular-nums text-stone-400 group-hover:text-orange-800">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-medium leading-snug underline decoration-transparent decoration-2 underline-offset-4 group-hover:decoration-orange-700/40">
                {item.label}
              </span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
