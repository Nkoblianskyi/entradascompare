import { ContactHero } from '@/components/contact/contact-hero'
import { ContactForm } from '@/components/contact/contact-form'
import { ContactInfoAside } from '@/components/contact/contact-info-aside'

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="relative bg-[#fffcf7] py-14 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(255,252,247,0)_40%,rgba(234,88,12,0.03)_100%)]" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-14">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            <div className="lg:col-span-5">
              <ContactInfoAside />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
