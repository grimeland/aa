// Data structure for tiltak (initiatives)
// This file defines the structure and example data for tiltak

export type TiltakStatus = 'pågår' | 'planlagt' | 'ferdig'
export type Tidsperspektiv = 'kort' | 'mellomlang' | 'lang'
export type Kompleksitet = 'lav' | 'middels' | 'høy'
export type Tiltakspakke = 'fysisk-infrastruktur' | 'vertskap-formidling' | 'organisering-kompetanse'

export interface FremdriftSteg {
  tekst: string
  blokkerer?: string
}

export interface Målgruppe {
  gruppe: string
  beskrivelse: string
}

export interface Engasjement {
  gruppe: string
  handling: string
}

export interface ForumInfo {
  dato: string
  tid: string
}

export interface EkstraKontakt {
  navn: string
  rolle: string
  epost: string
}

export interface Tiltak {
  id: string
  title: string
  ikon?: string
  undertittel?: string
  tiltakspakke: Tiltakspakke
  beskrivelse: string
  hvorfor: string
  visualiseringer?: string[]
  utfordringer?: string[]
  fremdriftSteg?: FremdriftSteg[]
  målgrupper?: Målgruppe[]
  engasjement?: Engasjement[]
  kontaktEpost?: string
  kontaktTekst?: string
  forumInfo?: ForumInfo
  ekstraKontakter?: EkstraKontakt[]
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
    title: 'Toaletter & hygiene',
    ikon: '🚽',
    tiltakspakke: 'fysisk-infrastruktur',
    undertittel: 'Mobile toaletter plasseres strategisk i Å',
    beskrivelse: 'Tiltaket handler om å etablere tilstrekkelig toalettkapasitet for både besøkende og lokalbefolkning. Mobile toalettenheter kan plasseres ved to kritiske punkter: ved brygga hvor de fleste besøkende samles, og ved innkjøringen til bygda. Parallelt med dette kan en permanent toalettløsning utredes – en løsning som fungerer hele året og passer inn i Å sin arkitektur. En permanent løsning krever avklaring av tomt, kloakksystem, drift og finansiering.',
    hvorfor: 'I dag har Å bare tre offentlige toaletter for tusenvis av besøkende i sesongen. Resultatet er synlig: folk bruker private eiendommer, går ut i naturen, eller drar videre frustrerte. I turistundersøkelsen scoret toaletter lavest av alle fasiliteter, og kommentarene var tydelige: "We couldn\'t find any toilets. Had to walk back to the parking area."\n\nDette handler om hygiene, verdighet og grunnleggende infrastruktur. Uten tilstrekkelig toalettkapasitet blir andre tiltak vanskeligere å gjennomføre. Både lokalbefolkning og besøkende peker på dette som ett av de mest presserende utfordringene å løse.',
    utfordringer: [
      'Vanskelig grunnforhold (fjell, grunnvann)',
      'Uavklart hvem som eier tomt for permanent løsning',
      'Driftsansvar uklart (hvem tømmer, rengjør, vedlikeholder?)',
      'Vinterbruk (kan rør fryse ved -20°C?)',
      'Kloakkløsning må godkjennes av Statsforvalter',
    ],
    fremdriftSteg: [
      { tekst: 'Avklare tomt med grunneiere', blokkerer: 'Blokkerer: Bestilling av mobile enheter' },
      { tekst: 'Bestille mobile enheter (2 stk)', blokkerer: 'Når tomt er avklart' },
      { tekst: 'Plassere mobile enheter', blokkerer: 'Før høysesongen starter' },
      { tekst: 'Utrede permanent løsning', blokkerer: 'Kan starte parallelt med mobile' },
    ],
    kontaktEpost: 'erlend@travers.no',
    kontaktTekst: 'Send innspill til erlend@travers.no eller kom på Å-Forum 12. februar',
    forumInfo: {
      dato: '12. februar 2025',
      tid: '18:00',
    },
    ekstraKontakter: [
      {
        navn: 'Tina Hansen',
        rolle: 'Reiselivskoordinator',
        epost: 'tina.hansen@moskenes.kommune.no',
      },
    ],
    status: 'pågår',
    tidsperspektiv: 'kort',
    kompleksitet: 'middels',
    sesong: 'Kritisk før påske/sommersesongen',
  },
  {
    id: 'parkering-flyt',
    title: 'Parkering og flyt',
    tiltakspakke: 'fysisk-infrastruktur',
    beskrivelse: 'Definere og merke parkeringsområder for biler og busser. Samarbeid med bussoperatører for drop-off-soner. Flerspråklig skilting og ladestasjoner.',
    hvorfor: 'Parkeringspresset skaper kaos og konflikter, spesielt i høysesongen. Tydelige løsninger er nødvendig.',
    utfordringer: [
      'Begrenset areal tilgjengelig for parkering',
      'Konflikter mellom turister og lokalbefolkning',
      'Bussoperatører har ulike behov og rutiner',
      'Finansiering av infrastruktur må avklares',
    ],
    fremdriftSteg: [
      { tekst: 'Kartlegge eksisterende parkeringsareal', blokkerer: 'Grunnlag for videre planlegging' },
      { tekst: 'Dialog med bussoperatører', blokkerer: 'Avklare drop-off-behov' },
      { tekst: 'Utarbeide skiltplan', blokkerer: 'Etter arealplan er klar' },
      { tekst: 'Implementere skilting og merking', blokkerer: 'Før høysesongen' },
    ],
    status: 'pågår',
    tidsperspektiv: 'mellomlang',
    kompleksitet: 'høy',
    sesong: 'Spesielt relevant i sommersesongen (juni-august)',
  },
  {
    id: 'soppelhandtering',
    title: 'Søppelhåndtering',
    tiltakspakke: 'fysisk-infrastruktur',
    beskrivelse: 'Plassere flere søppelkasser ved strategiske punkter. Tydelig merking og kildesorteringsstasjon ved inngang. «Ta med søppel hjem»-kampanje.',
    hvorfor: 'Økt besøkstrykk fører til mer avfall som må håndteres på en bærekraftig måte.',
    utfordringer: [
      'Tømmefrekvens må økes i høysesongen',
      'Kildesortering er vanskelig å kommunisere til turister',
      'Søppelkasser kan tiltrekke måker og andre dyr',
    ],
    fremdriftSteg: [
      { tekst: 'Kartlegge behov for søppelkasser', blokkerer: 'Grunnlag for innkjøp' },
      { tekst: 'Bestille og plassere søppelkasser', blokkerer: 'Før sesongen' },
      { tekst: 'Utvikle informasjonskampanje', blokkerer: 'Parallelt med fysiske tiltak' },
    ],
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
    utfordringer: [
      'Motstand fra enkelte beboere og næringsdrivende',
      'Varetransport må fortsatt fungere',
      'Behov for unntak og dispensasjoner',
      'Håndhevelse av regelverket',
    ],
    fremdriftSteg: [
      { tekst: 'Dialog med lokalbefolkning', blokkerer: 'Forankring av tiltaket' },
      { tekst: 'Utarbeide regelverk og unntak', blokkerer: 'Etter dialog' },
      { tekst: 'Skilting og fysiske sperrer', blokkerer: 'Før implementering' },
      { tekst: 'Prøveordning i høysesongen', blokkerer: 'Evaluering etterpå' },
    ],
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
    utfordringer: [
      'Avhengig av fylkeskommunens rutetilbud',
      'Begrenset marked for sykkelutleie',
      'Infrastruktur for lading krever investering',
    ],
    fremdriftSteg: [
      { tekst: 'Kartlegge eksisterende tilbud', blokkerer: 'Grunnlag for forbedring' },
      { tekst: 'Dialog med fylkeskommunen om buss', blokkerer: 'Politisk forankring' },
      { tekst: 'Utrede sykkelutleie-muligheter', blokkerer: 'Samarbeid med lokale aktører' },
    ],
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
    hvorfor: 'Naturområder er sårbare og trenger beskyttelse mot slitasje fra besøkende.',
    utfordringer: [
      'Krever fagkompetanse på naturforvaltning',
      'Langsiktig arbeid som tar tid',
      'Balanse mellom tilgjengelighet og vern',
    ],
    fremdriftSteg: [
      { tekst: 'Kartlegge slitasje og sårbare områder', blokkerer: 'Faglig grunnlag' },
      { tekst: 'Etablere vernesoner', blokkerer: 'Dialog med grunneiere' },
      { tekst: 'Skilte og merke stier', blokkerer: 'Etter soneavklaring' },
    ],
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
    beskrivelse: 'Utvikle et system med informasjonsskilt som formidler viktig informasjon om kultur, natur og regler. Flerspråklig innhold tilpasset hovedgruppene av turister.',
    hvorfor: 'Tydelig formidling er nødvendig for å gjøre besøkende bevisste på lokale verdier og forventninger.',
    utfordringer: [
      'Mange språk å dekke (norsk, engelsk, tysk, kinesisk)',
      'Skiltene må tåle værforhold',
      'Balanse mellom informasjon og visuell forurensning',
    ],
    fremdriftSteg: [
      { tekst: 'Utvikle innhold og design', blokkerer: 'Faglig kvalitetssikring' },
      { tekst: 'Oversette til hovedspråk', blokkerer: 'Etter norsk innhold er klart' },
      { tekst: 'Produsere og montere skilt', blokkerer: 'Før sesongen' },
    ],
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
    beskrivelse: 'Utvikle og tilby kurs og opplæring for lokale aktører innen besøksforvaltning. Dele erfaringer og beste praksis.',
    hvorfor: 'Lokale aktører trenger kunnskap og verktøy for å håndtere besøksforvaltning på en bærekraftig måte.',
    utfordringer: [
      'Travle aktører med begrenset tid',
      'Varierende kompetansenivå',
      'Behov for kontinuerlig oppdatering',
    ],
    fremdriftSteg: [
      { tekst: 'Kartlegge kompetansebehov', blokkerer: 'Dialog med aktører' },
      { tekst: 'Utvikle kursinnhold', blokkerer: 'Etter behovsanalyse' },
      { tekst: 'Gjennomføre første kurs', blokkerer: 'Før sesongen' },
    ],
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
