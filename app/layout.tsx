import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'
import { DisclaimerStrip } from '@/components/disclaimers'

const syne = Syne({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-syne',
  display: 'swap',
})
const dmSans = DM_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const siteUrl = 'https://entradascompare.com'

export const metadata: Metadata = {
  title: 'entradascompare — Comparador de precios de entradas deportivas',
  icons: { icon: '/icon.svg', shortcut: '/icon.svg' },
  description:
    'Comparamos precios publicados por colaboradores para eventos deportivos. No vendemos entradas ni recogemos datos de pago: solo información para decidir dónde comprar.',
  keywords:
    'entradas deporte España, comparar precios entradas, fútbol, baloncesto, tenis, Ticketmaster, Eventim, entradascompare',
  authors: [{ name: 'entradascompare', url: siteUrl }],
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: 'entradascompare — Entradas deportivas en comparativa',
    description:
      'Información y rangos de precio entre plataformas. Sin venta en este sitio y sin cobro aquí.',
    url: siteUrl,
    siteName: 'entradascompare',
    locale: 'es_ES',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <Header />
        <DisclaimerStrip />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
