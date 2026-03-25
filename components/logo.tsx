'use client'

import Link from 'next/link'
import Image from 'next/image'

type LogoVariant = 'header' | 'headerDark' | 'footer'

interface LogoProps {
  variant?: LogoVariant
  className?: string
  href?: string
  showWordmark?: boolean
}

export function Logo({ variant = 'header', className = '', href = '/', showWordmark = true }: LogoProps) {
  const isFooter = variant === 'footer'
  const isDark = variant === 'headerDark' || isFooter

  const wordClass = isDark ? 'text-[#f5f0e8]' : 'text-stone-900'
  const accentClass = isDark ? 'text-orange-400' : 'text-orange-700'

  const content = (
    <>
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-xl shadow-sm ${
          isDark ? 'bg-white/10 ring-1 ring-white/15' : 'bg-stone-900 ring-1 ring-stone-900'
        }`}
      >
        <Image
          src="/favicon.ico"
          width={24}
          height={24}
          alt=""
          className={isDark ? 'opacity-95' : 'brightness-0 invert'}
        />
      </span>
      {showWordmark && (
        <span className={`font-display text-lg font-bold tracking-tight sm:text-xl ${wordClass}`}>
          entradas<span className={accentClass}>compare</span>
        </span>
      )}
    </>
  )

  const wrapClassName = `flex items-center gap-3 shrink-0 ${className}`

  if (href) {
    return (
      <Link href={href} className={wrapClassName} aria-label="entradascompare — inicio">
        {content}
      </Link>
    )
  }

  return <div className={wrapClassName}>{content}</div>
}
