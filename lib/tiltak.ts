// Data structure for tiltak (initiatives)
// This file defines the structure and example data for tiltak

export type TiltakStatus = 'pågår' | 'planlagt' | 'ferdig'
export type Tidsperspektiv = 'kort' | 'mellomlang' | 'lang'
export type Kompleksitet = 'lav' | 'middels' | 'høy'
export type Tiltakspakke = 'fysisk-infrastruktur' | 'vertskap-formidling' | 'organisering-kompetanse'

export interface Tiltak {
  id: string
  title: string
  tiltakspakke: Tiltakspakke
  beskrivelse: string
  hvorfor: string
  visualiseringer?: string[]
  fremdrift?: string
  status: TiltakStatus
  tidsperspektiv: Tidsperspektiv
  kompleksitet: Kompleksitet
  sesong?: string
  aktører?: string[]
  finansiering?: string
  lovverk?: string[]
}

// Example tiltak data - replace with real data
export const tiltakData: Tiltak[] = [
  // Fysisk infrastruktur - maks 6 tiltak
  {
    id: 'toaletter-hygiene',
    title: 'Toaletter og hygiene',
    tiltakspakke: 'fysisk-infrastruktur',
    beskrivelse: 'Mobile toaletter plasseres strategisk. Permanent løsning utredes med restaurant og grunneiere.',
    hvorfor: 'Mangel på tilstrekkelige toalettfasiliteter skaper problemer for både besøkende og lokalbefolkning, og kan føre til miljøproblemer.',
    status: 'planlagt',
    tidsperspektiv: 'kort',
    kompleksitet: 'middels',
    sesong: 'Hele året, med fokus på sommersesongen',
  },
  {
    id: 'parkering-flyt',
    title: 'Parkering og flyt',
    tiltakspakke: 'fysisk-infrastruktur',
    beskrivelse: 'Definere og merke parkeringsområder for biler og busser. Samarbeid med bussoperatører for drop-off-soner. Flerspråklig skilting og ladestasjoner.',
    hvorfor: 'Parkeringspresset skaper kaos og konflikter, spesielt i høysesongen. Tydelige løsninger er nødvendig.',
    status: 'pågår',
    tidsperspektiv: 'mellomlang',
    kompleksitet: 'høy',
    sesong: 'Spesielt relevant i sommersesongen (juni-august)',
  },
  {
    id: 'soppelhandtering',
    title: 'Søppelhåndtering',
    tiltakspakke: 'fysisk-infrastruktur',
    beskrivelse: 'Plassere flere søppelkasser ved strategiske punkter. Tydelig merking og kildesorteringsstasjon ved inngang «Ta med søppel hjem»-kampanje.',
    hvorfor: 'Økt besøkstrykk fører til mer avfall som må håndteres på en bærekraftig måte.',
    status: 'pågår',
    tidsperspektiv: 'kort',
    kompleksitet: 'middels',
    sesong: 'Hele året, med fokus på sommersesongen',
  },
  {
    id: 'bilfri-sone',
    title: 'Bilfri sone i sentrum',
    tiltakspakke: 'fysisk-infrastruktur',
    beskrivelse: 'Stenge kjøring til brygga i høysesongen. Tillate varetransport og beboere. Tydelig skilting og fysiske sperrer. Dialog med lokalbefolkning om praktiske løsninger.',
    hvorfor: 'Redusere trafikk og forbedre opplevelsen for besøkende og lokalbefolkning i sentrum.',
    status: 'planlagt',
    tidsperspektiv: 'mellomlang',
    kompleksitet: 'høy',
    sesong: 'Spesielt relevant i høysesongen',
  },
  {
    id: 'gronn-mobilitet',
    title: 'Grønn mobilitet',
    tiltakspakke: 'fysisk-infrastruktur',
    beskrivelse: 'Utrede bedre bussavganger, sykkelutleie, samkjøring og evt. fergeforbindelse. Ladestasjoner for el-sykler og el-biler. Gjøre det enklere å komme til Å uten bil.',
    hvorfor: 'Redusere bilavhengighet og forbedre bærekraftig transport til og fra Å.',
    status: 'planlagt',
    tidsperspektiv: 'kort',
    kompleksitet: 'middels',
    sesong: 'Hele året',
  },
  {
    id: 'naturrestaurering',
    title: 'Naturrestaurering',
    tiltakspakke: 'fysisk-infrastruktur',
    beskrivelse: 'Kartlegge slitasje, etablere vernesoner rundt hekkeplasser og gjenopprette vegetasjon. Merke stier tydelig for å lede folk bort fra sårbare områder.',
    hvorfor: 'Naturmonumenter er sårbare og trenger beskyttelse mot slitasje fra besøkende.',
    status: 'planlagt',
    tidsperspektiv: 'lang',
    kompleksitet: 'middels',
    sesong: 'Hele året',
  },
  // Vertskap og formidling
  {
    id: 'informasjonsskilt',
    title: 'Informasjonsskilt og veivisere',
    tiltakspakke: 'vertskap-formidling',
    beskrivelse: 'Utvikle et system med informasjonsskilt som formidler viktig informasjon om kultur, natur og regler.',
    hvorfor: 'Tydelig formidling er nødvendig for å gjøre besøkende bevisste på lokale verdier og forventninger.',
    status: 'pågår',
    tidsperspektiv: 'kort',
    kompleksitet: 'middels',
    sesong: 'Hele året',
  },
  // Organisering og kompetanse
  {
    id: 'kompetansebygging',
    title: 'Kompetansebygging for lokale aktører',
    tiltakspakke: 'organisering-kompetanse',
    beskrivelse: 'Utvikle og tilby kurs og opplæring for lokale aktører innen besøksforvaltning.',
    hvorfor: 'Lokale aktører trenger kunnskap og verktøy for å håndtere besøksforvaltning på en bærekraftig måte.',
    status: 'planlagt',
    tidsperspektiv: 'lang',
    kompleksitet: 'middels',
    sesong: 'Hele året',
  },
]

// Helper functions
export function getTiltakByPakke(pakke: Tiltakspakke): Tiltak[] {
  // Returner maks 6 tiltak per pakke
  return tiltakData.filter(t => t.tiltakspakke === pakke).slice(0, 6)
}

export function getTiltakById(id: string): Tiltak | undefined {
  return tiltakData.find(t => t.id === id)
}

export function getStatusIcon(status: TiltakStatus): string {
  switch (status) {
    case 'pågår':
      return '⚡'
    case 'planlagt':
      return '📋'
    case 'ferdig':
      return '✅'
  }
}

export function getKompleksitetDots(kompleksitet: Kompleksitet): string {
  switch (kompleksitet) {
    case 'lav':
      return '●○○'
    case 'middels':
      return '●●○'
    case 'høy':
      return '●●●'
  }
}

export function getTidsperspektivTekst(tidsperspektiv: Tidsperspektiv): string {
  switch (tidsperspektiv) {
    case 'kort':
      return 'Kort sikt (0-6 mnd)'
    case 'mellomlang':
      return 'Mellomlang sikt (6-12 mnd)'
    case 'lang':
      return 'Lang sikt (1-3 år)'
  }
}
