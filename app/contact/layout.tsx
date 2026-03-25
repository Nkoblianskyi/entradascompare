import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto | entradascompare',
  description:
    'Escríbenos para consultas sobre datos de fichas, sugerencias o colaboración. No gestionamos pagos ni devoluciones de entradas.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
