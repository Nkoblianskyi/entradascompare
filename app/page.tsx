import { HomeHero } from '@/components/home/home-hero'
import { HomeEventPreview } from '@/components/home/home-event-preview'
import { HomeHowItWorks } from '@/components/home/home-how-it-works'
import { HomeFaq } from '@/components/home/home-faq'
import { HomeAbout } from '@/components/home/home-about'
import { HomeDisclaimer } from '@/components/home/home-disclaimer'
import { HomePartners } from '@/components/home/home-partners'
import { HomeCta } from '@/components/home/home-cta'

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeEventPreview />
      <HomeHowItWorks />
      <HomeFaq />
      <HomeAbout />
      <HomeDisclaimer />
      <HomePartners />
      <HomeCta />
    </>
  )
}
