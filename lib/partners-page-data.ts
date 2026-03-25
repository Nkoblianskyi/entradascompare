export const partnerDetails: Record<string, { country: string; type: string; founded?: string; note?: string }> = {
  'Ticketmaster España': {
    country: 'España / internacional',
    type: 'Primaria oficial',
    founded: '1976',
    note: 'Amplia cobertura en grandes recintos deportivos.',
  },
  'Eventim España': {
    country: 'Europa',
    type: 'Primaria oficial',
    founded: '1989',
    note: 'Catálogo europeo con presencia en el mercado español.',
  },
  'Entradas.com': {
    country: 'España',
    type: 'Agregador',
    founded: '-',
    note: 'Muy usado para ocio y eventos con entrada.',
  },
  'El Corte Inglés Entradas': {
    country: 'España',
    type: 'Canal retail',
    founded: '-',
    note: 'Canal de confianza para público general.',
  },
  'Fnac Entradas': {
    country: 'España / Francia',
    type: 'Retail cultural',
    founded: '1954',
    note: 'Entradas y cultura con cobertura nacional.',
  },
  Atrapalo: {
    country: 'España',
    type: 'Ocio y viajes',
    founded: '2000',
    note: 'Planes y experiencias, a veces combinados con eventos.',
  },
}

export const mosaicSpans: ('lg:col-span-7' | 'lg:col-span-5')[] = [
  'lg:col-span-7',
  'lg:col-span-5',
  'lg:col-span-5',
  'lg:col-span-7',
  'lg:col-span-7',
  'lg:col-span-5',
]

export function partnerInitials(name: string): string {
  const words = name.split(/\s+/).filter(Boolean)
  if (words.length >= 2) {
    const a = words[0][0]
    const b = words.find((w) => w[0] && w !== words[0])?.[0] ?? words[1][0]
    return (a + b).toUpperCase()
  }
  return name.slice(0, 2).toUpperCase()
}
