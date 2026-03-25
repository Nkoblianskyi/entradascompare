interface LegalSectionProps {
  id: string
  index: string
  title: string
  children: React.ReactNode
}

export function LegalSection({ id, index, title, children }: LegalSectionProps) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-stone-200 pt-14 first:border-t-0 first:pt-0">
      <div className="flex flex-col gap-6 md:flex-row md:gap-10">
        <div className="shrink-0 md:w-20">
          <span className="font-display text-5xl font-bold leading-none text-stone-200 md:text-6xl">{index}</span>
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="font-display text-2xl font-bold tracking-tight text-stone-950 md:text-3xl">{title}</h2>
          <div className="mt-6 space-y-4 text-base leading-[1.75] text-stone-700">{children}</div>
        </div>
      </div>
    </section>
  )
}
