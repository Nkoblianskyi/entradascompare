export type EventCategory = 'Concierto' | 'Deporte' | 'Teatro' | 'Festival' | 'Comedia'

export interface TicketOffer {
  partner: string
  price: number
  url: string
  available: boolean
}

export interface Event {
  id: string
  title: string
  artist?: string
  category: EventCategory
  date: string
  time: string
  venue: string
  city: string
  image: string
  description: string
  offers: TicketOffer[]
  featured?: boolean
}

export const partners = [
  {
    name: 'Ticketmaster España',
    url: 'https://www.ticketmaster.es',
    description: 'Venta oficial de entradas para conciertos, deportes y espectáculos en toda España.',
  },
  {
    name: 'Eventim España',
    url: 'https://www.eventim.es',
    description: 'Plataforma europea con amplio catálogo de eventos en Madrid, Barcelona y más ciudades.',
  },
  {
    name: 'Entradas.com',
    url: 'https://www.entradas.com',
    description: 'Agregador español muy utilizado para teatro, música y experiencias en vivo.',
  },
  {
    name: 'El Corte Inglés Entradas',
    url: 'https://www.elcorteingles.es/entradas/',
    description: 'Canal de confianza para entradas culturales y de entretenimiento en España.',
  },
  {
    name: 'Fnac Entradas',
    url: 'https://www.fnac.es/comprar-entradas-con-fnac',
    description: 'Entradas para conciertos, festivales y espectáculos con cobertura nacional.',
  },
  {
    name: 'Atrapalo',
    url: 'https://www.atrapalo.com/entradas/',
    description: 'Ofertas y comparación de planes de ocio, incluidos muchos eventos con entrada.',
  },
]

export const events: Event[] = [
  {
    id: '1',
    title: 'Atletico de Madrid - Partido de Liga',
    artist: undefined,
    category: 'Deporte',
    date: '2026-06-20',
    time: '21:00',
    venue: 'Riyadh Air Metropolitano',
    city: 'Madrid',
    image: '/61750b809bf97f2c3e1500c7df7aa1e6.jpg',
    description:
      'Partido grande en la capital con ambiente intenso, grada completa y ritmo competitivo de primera division.',
    featured: true,
    offers: [
      { partner: 'Ticketmaster España', price: 72, url: 'https://www.ticketmaster.es', available: true },
      { partner: 'Eventim España', price: 78, url: 'https://www.eventim.es', available: true },
      { partner: 'Fnac Entradas', price: 75, url: 'https://www.fnac.es/comprar-entradas-con-fnac', available: true },
    ],
  },
  {
    id: '2',
    title: 'Real Madrid - LaLiga EA Sports',
    artist: undefined,
    category: 'Deporte',
    date: '2026-04-26',
    time: '21:00',
    venue: 'Santiago Bernabéu',
    city: 'Madrid',
    image: '/b231d37f5ba077b406d7d806e8f14d4b.jpg',
    description:
      'Ambiente de élite en el templo blanco: encuentro de liga con la exigencia y el ritual que solo el Bernabéu sabe crear.',
    featured: true,
    offers: [
      { partner: 'Ticketmaster España', price: 95, url: 'https://www.ticketmaster.es', available: true },
      { partner: 'Entradas.com', price: 102, url: 'https://www.entradas.com', available: true },
    ],
  },
  {
    id: '3',
    title: 'Real Madrid Baloncesto - Euroliga',
    artist: undefined,
    category: 'Deporte',
    date: '2026-05-09',
    time: '17:00',
    venue: 'WiZink Center',
    city: 'Madrid',
    image: '/ae4e8ba63fc279dc902721b2ec827732.jpg',
    description:
      'Noche de baloncesto europeo con duelo de alto nivel y atmosfera de playoff en pista cubierta.',
    featured: true,
    offers: [
      { partner: 'El Corte Inglés Entradas', price: 68, url: 'https://www.elcorteingles.es/entradas/', available: true },
      { partner: 'Entradas.com', price: 71, url: 'https://www.entradas.com', available: true },
    ],
  },
  {
    id: '4',
    title: 'FC Barcelona - Champions League',
    artist: undefined,
    category: 'Deporte',
    date: '2026-06-04',
    time: '14:00',
    venue: 'Estadi Olímpic Lluís Companys',
    city: 'Barcelona',
    image: '/26337f98e0bd5ef30130fbdff8399eb0.jpg',
    description:
      'Noche europea en Barcelona con eliminatoria decisiva y ambiente internacional en las gradas.',
    featured: true,
    offers: [
      { partner: 'Ticketmaster España', price: 265, url: 'https://www.ticketmaster.es', available: true },
      { partner: 'Atrapalo', price: 258, url: 'https://www.atrapalo.com/entradas/', available: true },
      { partner: 'Eventim España', price: 272, url: 'https://www.eventim.es', available: true },
    ],
  },
  {
    id: '5',
    title: 'Movistar Estudiantes - LEB Oro',
    artist: undefined,
    category: 'Deporte',
    date: '2026-05-14',
    time: '21:30',
    venue: 'WiZink Center',
    city: 'Madrid',
    image: '/Movistar-Estudiantes_101223-6-scaled.jpg',
    description:
      'Jornada clave de baloncesto nacional con partido igualado y plazas de ascenso en juego.',
    offers: [
      { partner: 'Eventim España', price: 58, url: 'https://www.eventim.es', available: true },
      { partner: 'Fnac Entradas', price: 62, url: 'https://www.fnac.es/comprar-entradas-con-fnac', available: true },
    ],
  },
  {
    id: '6',
    title: 'FC Barcelona - LaLiga',
    artist: undefined,
    category: 'Deporte',
    date: '2026-05-03',
    time: '18:30',
    venue: 'Estadi Olímpic Lluís Companys',
    city: 'Barcelona',
    image: '/EYP6PZ6ELZMBXJMKWWX4WL34V4.jpg',
    description:
      'Ritual culé en Montjuïc: hinchada, mosaic y un partido de alto voltaje en la élite del fútbol español.',
    offers: [
      { partner: 'Ticketmaster España', price: 88, url: 'https://www.ticketmaster.es', available: true },
      { partner: 'Entradas.com', price: 94, url: 'https://www.entradas.com', available: true },
    ],
  },
  {
    id: '7',
    title: 'FC Barcelona Basket - Liga Endesa',
    artist: undefined,
    category: 'Deporte',
    date: '2026-04-18',
    time: '21:00',
    venue: 'Palau Blaugrana',
    city: 'Barcelona',
    image: '/2021-2022barc.jpg',
    description:
      'Encuentro de basket en Barcelona con ritmo alto, ambiente local y rival directo en la tabla.',
    offers: [
      { partner: 'Entradas.com', price: 48, url: 'https://www.entradas.com', available: true },
      { partner: 'Atrapalo', price: 52, url: 'https://www.atrapalo.com/entradas/', available: true },
    ],
  },
  {
    id: '8',
    title: 'Madrid Marathon 2026',
    artist: undefined,
    category: 'Deporte',
    date: '2026-07-09',
    time: '16:00',
    venue: 'Paseo de la Castellana',
    city: 'Madrid',
    image: '/egok4dbzhavhuwihfe2n.jpeg',
    description:
      'Carrera urbana de larga distancia por el centro de Madrid con miles de participantes y publico en ruta.',
    offers: [
      { partner: 'Ticketmaster España', price: 289, url: 'https://www.ticketmaster.es', available: true },
      { partner: 'Eventim España', price: 295, url: 'https://www.eventim.es', available: true },
      { partner: 'Fnac Entradas', price: 292, url: 'https://www.fnac.es/comprar-entradas-con-fnac', available: true },
    ],
  },
  {
    id: '9',
    title: 'Open Madrid de Padel - Finales',
    artist: undefined,
    category: 'Deporte',
    date: '2026-05-22',
    time: '20:30',
    venue: 'Madrid Arena',
    city: 'Madrid',
    image: '/F1qWzlkWYAIhDOc-fotor-2023072314263.jpg',
    description:
      'Jornada final del circuito profesional de padel con cruces decisivos y pistas de alta velocidad.',
    offers: [
      { partner: 'Entradas.com', price: 35, url: 'https://www.entradas.com', available: true },
      { partner: 'El Corte Inglés Entradas', price: 38, url: 'https://www.elcorteingles.es/entradas/', available: true },
    ],
  },
  {
    id: '11',
    title: 'Athletic Club - Partido de Liga',
    artist: undefined,
    category: 'Deporte',
    date: '2026-07-10',
    time: '17:00',
    venue: 'San Mames',
    city: 'Bilbao',
    image: '/berenguer-goal-san-mames-bilbao-athletic-club-vs-atletico-de-madrid.jpg',
    description:
      'Partido en Bilbao con presion alta y apoyo de una de las aficiones mas intensas del campeonato.',
    offers: [
      { partner: 'Eventim España', price: 178, url: 'https://www.eventim.es', available: true },
      { partner: 'Ticketmaster España', price: 185, url: 'https://www.ticketmaster.es', available: true },
    ],
  },
  {
    id: '12',
    title: 'Barcelona Open Banc Sabadell - ATP 500',
    artist: undefined,
    category: 'Deporte',
    date: '2026-06-07',
    time: '19:00',
    venue: 'Real Club de Tenis Barcelona',
    city: 'Barcelona',
    image: '/barcelona-all-you-need-to-know-2025.jpg',
    description:
      'Torneo ATP sobre tierra batida con cuadros de alto nivel y sesiones en pista central.',
    offers: [
      { partner: 'Entradas.com', price: 28, url: 'https://www.entradas.com', available: true },
      { partner: 'Fnac Entradas', price: 30, url: 'https://www.fnac.es/comprar-entradas-con-fnac', available: true },
    ],
  },
  {
    id: '13',
    title: 'Sevilla FC - Partido de Liga',
    artist: undefined,
    category: 'Deporte',
    date: '2026-07-25',
    time: '22:00',
    venue: 'Estadio La Cartuja',
    city: 'Sevilla',
    image: '/202505_Sevilla-FC_Nueva-Web_Header_1920x1080_Di-a-de-partido_02.webp',
    description:
      'Noche de futbol en Sevilla con duelo de maxima exigencia y gran ambiente en estadio.',
    offers: [
      { partner: 'Ticketmaster España', price: 45, url: 'https://www.ticketmaster.es', available: true },
      { partner: 'Eventim España', price: 49, url: 'https://www.eventim.es', available: true },
      { partner: 'Atrapalo', price: 47, url: 'https://www.atrapalo.com/entradas/', available: true },
    ],
  },
  {
    id: '14',
    title: 'Copa del Rey - Semifinal',
    artist: undefined,
    category: 'Deporte',
    date: '2026-05-30',
    time: '20:00',
    venue: 'Civitas Metropolitano',
    city: 'Madrid',
    image: '/piM-NhOjNM_trofeo_copa_del_Rey2.jfif',
    description:
      'Cruce de semifinal con eliminatoria a todo o nada y alto impacto en la temporada.',
    offers: [
      { partner: 'El Corte Inglés Entradas', price: 42, url: 'https://www.elcorteingles.es/entradas/', available: true },
      { partner: 'Entradas.com', price: 45, url: 'https://www.entradas.com', available: true },
    ],
  },
  {
    id: '15',
    title: 'Mutua Madrid Open - Tenis ATP/WTA',
    artist: undefined,
    category: 'Deporte',
    date: '2026-04-28',
    time: '11:00',
    venue: 'Caja Mágica',
    city: 'Madrid',
    image: '/APERTURA-2-1.jpg',
    description:
      'Tierra batida de primer nivel: sesiones diurnas, ambiente internacional y la oportunidad de ver a las mejores raquetas del mundo.',
    offers: [
      { partner: 'Ticketmaster España', price: 38, url: 'https://www.ticketmaster.es', available: true },
      { partner: 'Fnac Entradas', price: 41, url: 'https://www.fnac.es/comprar-entradas-con-fnac', available: true },
    ],
  },
  {
    id: '16',
    title: 'New York Knicks - NBA Regular Season',
    artist: undefined,
    category: 'Deporte',
    date: '2026-08-14',
    time: '20:00',
    venue: 'MetLife Stadium',
    city: 'New York, USA',
    image: '/New_York_Knicks_logo.svg.png',
    description:
      'Partido NBA en la costa este con ritmo alto, rotaciones intensas y ambiente de gran pabellon.',
    featured: true,
    offers: [
      { partner: 'Ticketmaster España', price: 210, url: 'https://www.ticketmaster.es', available: true },
      { partner: 'Eventim España', price: 235, url: 'https://www.eventim.es', available: true },
      { partner: 'Entradas.com', price: 228, url: 'https://www.entradas.com', available: true },
    ],
  },
  {
    id: '17',
    title: 'LA Lakers - NBA Regular Season',
    artist: undefined,
    category: 'Deporte',
    date: '2026-09-05',
    time: '19:30',
    venue: 'SoFi Stadium',
    city: 'Los Angeles, USA',
    image: '/80203f738f12d5ee8575489accbe2151.jpg',
    description:
      'Encuentro NBA en Los Angeles con grandes figuras y alta demanda en mercado secundario.',
    offers: [
      { partner: 'Ticketmaster España', price: 165, url: 'https://www.ticketmaster.es', available: true },
      { partner: 'Fnac Entradas', price: 182, url: 'https://www.fnac.es/comprar-entradas-con-fnac', available: true },
      { partner: 'Atrapalo', price: 176, url: 'https://www.atrapalo.com/entradas/', available: true },
    ],
  },
  {
    id: '18',
    title: 'Miami Open - ATP/WTA Finals Weekend',
    artist: undefined,
    category: 'Deporte',
    date: '2026-10-10',
    time: '21:00',
    venue: 'Hard Rock Stadium',
    city: 'Miami, USA',
    image: '/dc7cdaebd8f3ff52992bcd9454a60796.jpg',
    description:
      'Fin de semana decisivo del torneo de Miami con semifinales y final en pista principal.',
    offers: [
      { partner: 'Ticketmaster España', price: 145, url: 'https://www.ticketmaster.es', available: true },
      { partner: 'Entradas.com', price: 158, url: 'https://www.entradas.com', available: true },
      { partner: 'Eventim España', price: 154, url: 'https://www.eventim.es', available: true },
    ],
  },
  {
    id: '19',
    title: 'Formula 1 Las Vegas Grand Prix 2026',
    artist: undefined,
    category: 'Deporte',
    date: '2026-11-21',
    time: '22:00',
    venue: 'Las Vegas Strip Circuit',
    city: 'Las Vegas, USA',
    image: '/38528d38e7f93464db598c9dc90d65b4.jpg',
    description:
      'Carrera nocturna del calendario mundial de F1 con paquetes y tickets de alta variacion de precio segun tribuna y servicios.',
    offers: [
      { partner: 'Ticketmaster España', price: 320, url: 'https://www.ticketmaster.es', available: true },
      { partner: 'Atrapalo', price: 349, url: 'https://www.atrapalo.com/entradas/', available: true },
      { partner: 'Fnac Entradas', price: 338, url: 'https://www.fnac.es/comprar-entradas-con-fnac', available: true },
    ],
  },
]

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(price)
}

export function getMinPrice(offers: TicketOffer[]): number {
  const available = offers.filter((o) => o.available)
  if (available.length === 0) return 0
  return Math.min(...available.map((o) => o.price))
}

export function getCategoryColor(category: EventCategory): string {
  const map: Record<EventCategory, string> = {
    Concierto: 'bg-stone-100 text-stone-800 border border-stone-300',
    Deporte: 'bg-emerald-100 text-emerald-950 border border-emerald-800/25',
    Teatro: 'bg-stone-100 text-stone-800 border border-stone-300',
    Festival: 'bg-amber-50 text-amber-950 border border-amber-800/20',
    Comedia: 'bg-stone-100 text-stone-800 border border-stone-300',
  }
  return map[category]
}
