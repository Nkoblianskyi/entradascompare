import Image from 'next/image'
import type { Event } from '@/lib/events-data'
import { getCategoryColor } from '@/lib/events-data'

interface EventDetailHeroProps {
  event: Event
  dateLong: string
}

export function EventDetailHero({ event, dateLong }: EventDetailHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fffcf7] via-[#f7f3eb] to-[#f0ebe3]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_100%_-20%,rgba(194,65,12,0.08),transparent_50%)]" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8 lg:pb-14 lg:pt-10">
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10 lg:gap-y-0">
          {/* Mobile: image first; desktop: text left, image right */}
          <div className="order-2 space-y-6 lg:order-1 lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`rounded-full px-3 py-1 text-xs font-bold ${getCategoryColor(event.category)}`}>
                {event.category}
              </span>
              <span className="text-xs font-medium uppercase tracking-wider text-stone-500">{dateLong}</span>
            </div>

            {event.artist && (
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-700">{event.artist}</p>
            )}

            <h1 className="font-display text-3xl font-bold leading-[1.15] text-stone-900 sm:text-4xl xl:text-[2.35rem]">
              {event.title}
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-stone-600 md:text-lg">{event.description}</p>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[1.75rem] shadow-[0_25px_60px_-15px_rgba(28,25,23,0.35)] ring-1 ring-stone-900/10 lg:mx-0 lg:max-w-none lg:aspect-[3/4]">
              <Image
                src={event.image}
                alt=""
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-transparent to-stone-950/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
