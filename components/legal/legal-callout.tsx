import type { LucideIcon } from 'lucide-react'

interface LegalCalloutProps {
  icon: LucideIcon
  title: string
  children: React.ReactNode
  variant?: 'neutral' | 'emphasis' | 'critical'
}

export function LegalCallout({ icon: Icon, title, children, variant = 'neutral' }: LegalCalloutProps) {
  const styles = {
    neutral: 'border-stone-300 bg-stone-50 text-stone-800',
    emphasis: 'border-orange-800/35 bg-orange-50/90 text-stone-900',
    critical: 'border-red-900/30 bg-red-50/90 text-stone-900',
  }[variant]

  const iconStyles = {
    neutral: 'text-stone-600',
    emphasis: 'text-orange-800',
    critical: 'text-red-800',
  }[variant]

  return (
    <div className={`rounded-2xl border-2 p-6 md:p-7 ${styles}`} role="note">
      <div className="flex gap-4">
        <Icon className={`mt-0.5 h-6 w-6 shrink-0 ${iconStyles}`} aria-hidden />
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-wider text-stone-900">{title}</p>
          <div className="mt-3 space-y-2 text-sm leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  )
}
