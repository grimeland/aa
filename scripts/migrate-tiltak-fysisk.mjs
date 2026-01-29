// Migreringsscript for tiltak i Fysisk infrastruktur og besøksflyt
// Kjør med: SANITY_TOKEN=ditt-token node scripts/migrate-tiltak-fysisk.mjs

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: '849pwpa4',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
})

const tiltak = [
  {
    id: 'toaletter-hygiene',
    title: 'Toaletter & hygiene',
    ikon: '🚻',
    undertittel: 'Grunnleggende infrastruktur for besøkende',
    beskrivelse: 'Tiltaket handler om å etablere tilstrekkelig toalettkapasitet for både besøkende og lokalbefolkning. Mobile toalettenheter kan plasseres ved brygga og ved innkjøringen til bygda. Parallelt med dette kan en permanent toalettløsning utredes – en løsning som fungerer hele året og passer inn i Å sin arkitektur.',
    hvorfor: 'I dag har Å bare tre offentlige toaletter for tusenvis av besøkende i sesongen. I turistundersøkelsen scoret toaletter lavest av alle fasiliteter. Dette handler om hygiene, verdighet og grunnleggende infrastruktur som må på plass.',
    status: 'pågår',
    tidsperspektiv: 'kort',
    kompleksitet: 'middels',
    sesong: 'Kritisk før påske og gjennom hele sommersesongen',
    utfordringer: [
      'Vanskelig grunnforhold (fjell, grunnvann)',
      'Uavklart hvem som eier tomt for permanent løsning',
      'Driftsansvar uklart (hvem tømmer, rengjør, vedlikeholder?)',
      'Vinterbruk (kan rør fryse ved -20°C?)',
      'Kloakkløsning må godkjennes av Statsforvalter',
    ],
    fremdriftSteg: [
      { tekst: 'Avklare tomt med grunneiere', blokkerer: 'Blokkerer bestilling av mobile enheter' },
      { tekst: 'Bestille mobile toalettenheter (2 stk)', blokkerer: 'Må være på plass før høysesongen' },
      { tekst: 'Plassere mobile enheter strategisk', blokkerer: 'Ved brygga og ved innkjøring' },
      { tekst: 'Utrede permanent løsning', blokkerer: 'Kan starte parallelt med mobile' },
    ],
  },
  {
    id: 'soppelhandtering',
    title: 'Søppelhåndtering',
    ikon: '🗑️',
    undertittel: 'Bedre avfallshåndtering i bygda',
    beskrivelse: 'Plassere flere søppelkasser ved strategiske punkter i Å. Tydelig merking og kildesorteringsstasjon ved inngang til bygda. Informasjonskampanje om «Ta med deg søppel hjem» for å redusere total avfallsmengde.',
    hvorfor: 'Med dagens løsning (én søppeldunk) havner søppel i veikanten, på private eiendommer og i naturen. Dette skaper hygieneproblem, belastning på lokalsamfunnet og naturskade. Bedre søppelhåndtering er en grunnleggende forutsetning for andre tiltak.',
    status: 'pågår',
    tidsperspektiv: 'kort',
    kompleksitet: 'lav',
    sesong: 'Kritisk gjennom hele sommersesongen',
    utfordringer: [
      'Tømmehyppighet må økes betydelig i sesongen',
      'Hvem finansierer drift og vedlikehold?',
      'Kildesortering krever plass og flere dunker',
      'Folk må faktisk bruke søppelkassene (atferdsendring)',
    ],
    fremdriftSteg: [
      { tekst: 'Kartlegge plassering av søppelkasser', blokkerer: 'Hvor samler folk seg? Hvor er det mest søppel?' },
      { tekst: 'Bestille og plassere søppelkasser', blokkerer: 'Minimum 5-6 nye kasser strategisk plassert' },
      { tekst: 'Etablere kildesorteringsstasjon', blokkerer: 'Ved innkjøring, tydelig merket på flere språk' },
      { tekst: 'Informasjonskampanje', blokkerer: 'Skilting, brosjyrer, digital kommunikasjon' },
    ],
  },
  {
    id: 'parkering-flyt',
    title: 'Parkering og flyt',
    ikon: '🅿️',
    undertittel: 'Bedre parkeringsløsninger og trafikkstyring',
    beskrivelse: 'Definere og merke parkeringsområder for biler og busser. Samarbeid med bussoperatører for drop-off-soner. Flerspråklig skilting og informasjon om hvor man kan/ikke kan parkere. Etablere ladestasjoner for elbiler.',
    hvorfor: 'I turistundersøkelsen scoret parkering 3,79/5 – dårligst av alle fasiliteter. Folk parkerer i veikanten, blokkerer innkjørsler og skaper trafikkfare. Bedre parkeringsløsninger er nødvendig for å redusere kaos og forbedre opplevelsen for alle.',
    status: 'planlagt',
    tidsperspektiv: 'mellomlang',
    kompleksitet: 'middels',
    sesong: 'Kritisk i sommersesongen, relevant hele året',
    utfordringer: [
      'Begrenset plass for nye parkeringsområder',
      'Koordinering med Statens Vegvesen (offentlig vei)',
      'Bussoperatører må involveres og følge regler',
      'Bobiler og campingvogner tar mye plass',
      'Håndhevelse av parkeringsregler',
    ],
    fremdriftSteg: [
      { tekst: 'Kartlegge eksisterende parkeringssituasjon', blokkerer: 'Hvor parkerer folk? Hvor er konfliktene?' },
      { tekst: 'Definere parkeringsområder', blokkerer: 'Dialog med Statens Vegvesen og lokale' },
      { tekst: 'Etablere skilting og merking', blokkerer: 'Flerspråklig, tydelig, konsistent' },
      { tekst: 'Koordinere med bussoperatører', blokkerer: 'Drop-off-soner, turnering, tidsplan' },
    ],
  },
  {
    id: 'bilfri-sone',
    title: 'Bilfri sone i sentrum',
    ikon: '🚶',
    undertittel: 'Tryggere og roligere sentrum',
    beskrivelse: 'Stenge kjøring til brygga i høysesongen. Tillate varetransport og beboere. Tydelig skilting og fysiske sperrer. Dialog med lokalbefolkning om praktiske løsninger.',
    hvorfor: 'Sentrum av Å – området mellom brygga og veien – er trangt. Når biler og busser kjører inn samtidig som folk går, oppstår farlige situasjoner. En bilfri sone reduserer trafikk og forbedrer opplevelsen for besøkende og lokalbefolkning i sentrum.',
    status: 'planlagt',
    tidsperspektiv: 'mellomlang',
    kompleksitet: 'høy',
    sesong: 'Spesielt relevant i høysesongen',
    utfordringer: [
      'Motstand fra enkelte beboere og næringsdrivende',
      'Varetransport må fortsatt fungere',
      'Behov for unntak (utrykningskjøretøy)',
      'Håndhevelse av regelverket',
      'Må godkjennes av Statens Vegvesen',
    ],
    fremdriftSteg: [
      { tekst: 'Dialog med lokalbefolkning', blokkerer: 'Forankring av tiltaket, høre bekymringer' },
      { tekst: 'Utarbeide regelverk og unntak', blokkerer: 'Hvem får kjøre? Når? Hvordan?' },
      { tekst: 'Skilting og fysiske sperrer', blokkerer: 'Før implementering, tydelig kommunikasjon' },
      { tekst: 'Prøveordning i høysesongen', blokkerer: 'Evaluering etterpå, justere underveis' },
    ],
  },
  {
    id: 'gronn-mobilitet',
    title: 'Grønn mobilitet',
    ikon: '🚲',
    undertittel: 'Bærekraftige transportalternativer',
    beskrivelse: 'Utrede bedre bussavganger, sykkelutleie, samkjøring og eventuell fergeforbindelse. Ladestasjoner for el-sykler og el-biler. Gjøre det enklere å komme til Å uten privatbil, og dermed redusere biltrafikk og vibrasjoner.',
    hvorfor: 'Å ligger langt fra kollektivknutepunkter. De fleste kommer med privatbil. Bedre kollektivtilbud og grønne alternativer kan redusere biltrafikk, vibrasjoner og miljøbelastning samtidig som det gir besøkende et godt alternativ.',
    status: 'planlagt',
    tidsperspektiv: 'lang',
    kompleksitet: 'middels',
    sesong: 'Helårstiltak med fokus på sommersesongen',
    utfordringer: [
      'Avhenger av fylkeskommune og transportaktører',
      'Lavt antall passasjerer utenfor høysesong',
      'Lang avstand til Leknes/Svolvær',
      'Krevende å finansiere sesongbaserte løsninger',
      'Begrenset interesse for sykkel i Lofoten (vær, vind)',
    ],
    fremdriftSteg: [
      { tekst: 'Kartlegge dagens transportmønstre', blokkerer: 'Hvordan kommer folk til Å? Når? Hvorfor bil?' },
      { tekst: 'Dialog med Nordland fylkeskommune', blokkerer: 'Muligheter for bedre bussavganger' },
      { tekst: 'Utrede sykkelutleie og ladestasjoner', blokkerer: 'Hvor? Hvem driver? Finansiering?' },
      { tekst: 'Pilotprosjekt i høysesong', blokkerer: 'Teste løsninger, måle effekt' },
    ],
  },
  {
    id: 'naturrestaurering',
    title: 'Naturrestaurering',
    ikon: '🌿',
    undertittel: 'Beskytte og gjenopprette natur',
    beskrivelse: 'Kartlegge områder med mest slitasje. Etablere vernesoner rundt hekkeplasser for krykkjer. Gjenopprette vegetasjon i ødelagte områder. Merke stier tydelig for å lede folk bort fra sårbare områder. Overvåke effekt av tiltak.',
    hvorfor: 'Slitasje på stier, folk som går utenfor merkede stier, og forstyrrelser av hekkende krykkjer er synlig i Å. Naturen trenger tid og aktive tiltak for å komme seg. Dette er langsiktig arbeid som krever samarbeid med Statsforvalter og lokale naturguider.',
    status: 'planlagt',
    tidsperspektiv: 'lang',
    kompleksitet: 'høy',
    sesong: 'Kritisk i hekkesesongen (april-juli)',
    utfordringer: [
      'Krykkjer hekker i hele bygda – vanskelig å verne alt',
      'Folk forstår ikke alltid hvor de kan/ikke kan gå',
      'Restaurering tar tid (vegetasjon vokser sakte)',
      'Behov for kontinuerlig overvåkning og vedlikehold',
      'Må balansere naturvern med tilgjengelighet',
    ],
    fremdriftSteg: [
      { tekst: 'Kartlegge slitasje og hekkeplasser', blokkerer: 'Samarbeid med Statsforvalter og lokale' },
      { tekst: 'Etablere vernesoner og merking', blokkerer: 'Fysiske sperrer, skilting, informasjon' },
      { tekst: 'Gjenopprette vegetasjon', blokkerer: 'Plante, gjødsle, beskytte områder' },
      { tekst: 'Overvåke og evaluere', blokkerer: 'Måle effekt, justere tiltak over tid' },
    ],
  },
]

async function migrate() {
  console.log('Starter migrering av tiltak for Fysisk infrastruktur...\n')

  // Finn tiltakspakke-referansen
  const pakkeId = 'tiltakspakke-fysisk-infrastruktur'

  for (const t of tiltak) {
    const doc = {
      _type: 'tiltak',
      _id: `tiltak-${t.id}`,
      title: t.title,
      slug: { _type: 'slug', current: t.id },
      ikon: t.ikon,
      undertittel: t.undertittel,
      tiltakspakke: {
        _type: 'reference',
        _ref: pakkeId,
      },
      beskrivelse: t.beskrivelse,
      hvorfor: t.hvorfor,
      status: t.status,
      tidsperspektiv: t.tidsperspektiv,
      kompleksitet: t.kompleksitet,
      sesong: t.sesong,
      utfordringer: t.utfordringer,
      fremdriftSteg: t.fremdriftSteg.map((steg, i) => ({
        _type: 'object',
        _key: `steg-${i}`,
        tekst: steg.tekst,
        blokkerer: steg.blokkerer,
        ferdig: false,
      })),
    }

    try {
      await client.createOrReplace(doc)
      console.log(`✅ Tiltak opprettet: ${t.title}`)
    } catch (error) {
      console.error(`❌ Feil ved opprettelse av ${t.title}:`, error.message)
    }
  }

  console.log('\n✨ Migrering fullført!')
}

migrate()
