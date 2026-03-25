interface LegalDocShellProps {
  toc: React.ReactNode
  children: React.ReactNode
}

export function LegalDocShell({ toc, children }: LegalDocShellProps) {
  return (
    <div className="border-b border-stone-200 bg-[#faf8f4]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="lg:grid lg:grid-cols-[min(280px,32%)_1fr] lg:gap-14 xl:gap-20">
          <div className="mb-12 lg:mb-0">{toc}</div>
          <article className="min-w-0 rounded-[2rem] border border-stone-200/80 bg-white px-6 py-12 shadow-[0_24px_80px_-24px_rgba(28,25,23,0.12)] sm:px-10 sm:py-14 md:px-14 md:py-16">
            {children}
          </article>
        </div>
      </div>
    </div>
  )
}
