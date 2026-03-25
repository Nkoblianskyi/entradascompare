import type { Metadata } from 'next'
import { PartnersHero } from '@/components/partners-page/partners-hero'
import { PartnersRules } from '@/components/partners-page/partners-rules'
import { PartnersMosaic } from '@/components/partners-page/partners-mosaic'
import { PartnersOutreach } from '@/components/partners-page/partners-outreach'

export const metadata: Metadata = {
  title: 'Colaboradores | entradascompare',
  description:
    'Plataformas cuyas ofertas podemos citar en comparativas de entradas deportivas. entradascompare no vende entradas.',
}

export default function PartnersPage() {
  return (
    <>
      <PartnersHero />
      <PartnersRules />
      <PartnersMosaic />
      <PartnersOutreach />
    </>
  )
}
