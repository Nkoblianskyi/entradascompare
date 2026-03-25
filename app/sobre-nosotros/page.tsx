import type { Metadata } from 'next'
import { AboutHero } from '@/components/sobre-nosotros/about-hero'
import { AboutStats } from '@/components/sobre-nosotros/about-stats'
import { AboutBento } from '@/components/sobre-nosotros/about-bento'
import { AboutTimeline } from '@/components/sobre-nosotros/about-timeline'
import { AboutPartnersWall } from '@/components/sobre-nosotros/about-partners-wall'
import { AboutDisclaimerSection } from '@/components/sobre-nosotros/about-disclaimer-section'
import { AboutCta } from '@/components/sobre-nosotros/about-cta'

export const metadata: Metadata = {
  title: 'Sobre nosotros | entradascompare',
  description:
    'Qué es entradascompare: comparador de precios de entradas deportivas en España. Sin venta en el sitio y sin cobro aquí.',
}

export default function SobreNosotrosPage() {
  return (
    <>
      <AboutHero />
      <AboutStats />
      <AboutBento />
      <AboutTimeline />
      <AboutDisclaimerSection />
      <AboutPartnersWall />
      <AboutCta />
    </>
  )
}
