// Migreringsscript for tiltak i Vertskap og formidling
// Kjør med: SANITY_TOKEN=ditt-token node scripts/migrate-tiltak-vertskap.mjs

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
    id: 'aa-verter',
    title: 'Å-verter – mennesker møter mennesker',
    ikon: '👋',
    undertittel: 'Personlig vertskap i høysesongen',
    beskrivelse: 'Å-verter kan være personer som møter besøkende ved brygga eller ved innkjøringen til bygda i høysesongen. Dette kan være lokale, studenter eller sesongarbeidere som er synlige, vennlige og kan gi viktig informasjon på engelsk og tysk. De kan møte folk med viktige tips: hvor man kan gå, hvor toaletter er, hva som er spesielt med stedet.',
    hvorfor: 'Et menneske som møter folk kan være langt mer effektivt enn et skilt. Verter kan lese situasjoner, justere budskap til den enkelte og bygge bro mellom lokalbefolkning og besøkende. De kan også hjelpe med praktiske spørsmål og håndtere situasjoner før de blir konflikter. Dette handler om vertskap gjennom menneskelig møte.',
    status: 'planlagt',
    tidsperspektiv: 'kort',
    kompleksitet: 'middels',
    sesong: 'Kritisk i høysesongen (juni-august)',
    utfordringer: [
      'Hvem kan være Å-vert? Lokale, studenter, sesongarbeidere?',
      'Finansiering av lønnskostnader gjennom hele sesongen',
      'Opplæring: Hva bør vertene kunne? Hva bør de formidle?',
      'Synlighet: Hvordan gjøre vertene lett gjenkjennelige?',
      'Værharde forhold – behov for leskur eller basecamp',
    ],
    fremdriftSteg: [
      { tekst: 'Definere rolle og ansvar for Å-verter', blokkerer: 'Hva kan jobbeskrivelsen være? Hvem er målgruppen?' },
      { tekst: 'Utforske rekrutteringskilder', blokkerer: 'Lokale ungdommer, studenter eller andre muligheter' },
      { tekst: 'Utvikle opplæringsprogram', blokkerer: 'Lokal historie, natur, praktisk info, konfliktløsning' },
      { tekst: 'Teste konseptet i høysesongen', blokkerer: 'Pilotprosjekt, samle tilbakemeldinger, justere underveis' },
    ],
  },
  {
    id: 'informasjonspunkter',
    title: 'Informasjonspunkter på strategiske steder',
    ikon: 'ℹ️',
    undertittel: 'Veilede besøkende til riktige steder',
    beskrivelse: 'Informasjonspunkter kan etableres på strategiske steder – for eksempel ved parkeringen før Å, ved innkjøringen til bygda, eller i sentrum ved brygga. Slike punkt kan vise tydelig hvor folk kan oppholde seg (offentlige områder, stier, utsiktspunkter), hvor man ønsker at folk ikke går (private hager, hekkeplasser, boliger), samt informasjon om fasiliteter og viktige regler.',
    hvorfor: 'De fleste besøkende forstår ikke forskjellen på offentlig og privat i et fiskevær. De ser en fin hage og går inn for å ta bilde, eller følger en sti uten å vite at den går inn på privat eiendom. Visuelle informasjonspunkter kan lede folk til steder som tåler besøk og bort fra sårbare områder og private hjem. Dette handler om å gjøre det lett å oppføre seg riktig.',
    status: 'planlagt',
    tidsperspektiv: 'kort',
    kompleksitet: 'middels',
    sesong: 'Helårstiltak, spesielt viktig i høysesongen',
    utfordringer: [
      'Plassering: Hvor stopper folk naturlig og ser seg rundt?',
      'Design: Hvordan skape tydelig forskjell mellom ønskede og uønskede områder?',
      'Kulturforskjeller: Private hager er ikke åpenbart "private" for alle',
      'Balanse: Informere uten å skape skiltskog',
      'Vedlikehold: Hvem kan oppdatere når sesonger eller regler endres?',
    ],
    fremdriftSteg: [
      { tekst: 'Kartlegge kritiske punkt og besøksflyt', blokkerer: 'Hvor stopper folk? Hvor går de feil?' },
      { tekst: 'Definere områder for besøk og områder å verne', blokkerer: 'Kan gjøres i dialog med grunneiere og lokalbefolkning' },
      { tekst: 'Utforske designløsninger', blokkerer: 'Kart, farger, symboler, flerspråklig – hva kan fungere best?' },
      { tekst: 'Teste ulike løsninger', blokkerer: 'Kan starte med ett punkt, evaluere, justere før utvidelse' },
    ],
  },
  {
    id: 'flerspraklig-skilting',
    title: 'Flerspråklig skilting og veivising',
    ikon: '🪧',
    undertittel: 'Konsistent kommunikasjon på flere språk',
    beskrivelse: 'Skilting kan gjøres flerspråklig og konsistent gjennom hele Å. Skilt kan formuleres på minimum fire språk: norsk, engelsk, tysk og nederlandsk. Budskap kan formuleres positivt der det er mulig: "Følg merket sti" fremfor bare "Adgang forbudt". Skilting kan forklare hvorfor: "Hekkende fugler april-juli – vennligst hold avstand". Et konsistent design med samme farger, stil og ikoner kan gjøre det lett å gjenkjenne og forstå.',
    hvorfor: 'I dag er mesteparten av skilting kun på norsk. Folk forstår ikke nødvendigvis "Privat eiendom" eller "Hekkeområde". Resultatet kan være at de går inn i områder de ikke burde være i, ikke av uvilje, men av uvitenhet. Flerspråklig skilting kan være en grunnleggende forutsetning for at besøkende skal kunne oppføre seg som ønsket.',
    status: 'planlagt',
    tidsperspektiv: 'kort',
    kompleksitet: 'lav',
    sesong: 'Helårstiltak',
    utfordringer: [
      'Hvor mange skilt trengs? Risiko for skiltskog',
      'Konsistent oversettelse av termer på flere språk',
      'Balanse mellom informasjon og estetikk',
      'Plassering: Må være synlig uten å ødelegge landskapet',
      'Vedlikehold: Slitasje, hærverk, værpåvirkning',
    ],
    fremdriftSteg: [
      { tekst: 'Kartlegge behov for skilting', blokkerer: 'Hvor er problemområdene? Hvor trengs mest informasjon?' },
      { tekst: 'Utvikle designmanual', blokkerer: 'Farger, språk, tone, plassering – hva bør være standard?' },
      { tekst: 'Produsere og teste skilt', blokkerer: 'Kan prioritere områder med mest trafikk først' },
      { tekst: 'Evaluere effekt', blokkerer: 'Færre folk i uønskede områder? Bedre orientering?' },
    ],
  },
  {
    id: 'digital-kommunikasjon',
    title: 'Digital kommunikasjon før besøk',
    ikon: '📱',
    undertittel: 'Nå besøkende før de ankommer',
    beskrivelse: 'En digital kommunikasjonsstrategi kan møte besøkende før de kommer til Å. Dette kan inkludere en nettside med "Før du besøker Å – viktig informasjon", en kort video som viser hvor du kan gå og hva som er spesielt med stedet, integrering i Google Maps med korrekt informasjon, QR-koder på flyplass, hoteller eller Hurtigruten, og samarbeid med TripAdvisor og Lonely Planet for å spre riktig informasjon.',
    hvorfor: 'De fleste besøkende planlegger turen selv. De søker på "Å Lofoten" og leser reiseblogger. Digital kommunikasjon kan møte dem der de er før de ankommer. Hvis de får riktig informasjon i planleggingsfasen, kan de oppføre seg riktigere når de faktisk er her. Digital kommunikasjon kan nå tusenvis av mennesker til en brøkdel av kostnaden ved fysisk tilstedeværelse.',
    status: 'planlagt',
    tidsperspektiv: 'mellomlang',
    kompleksitet: 'middels',
    sesong: 'Helårstiltak',
    utfordringer: [
      'Hvem kan lage og vedlikeholde digitalt innhold?',
      'Hvordan nå folk i deres planleggingsfase? SEO? Annonser?',
      'Innholdet må kunne oppdateres kontinuerlig (sesong, værforhold)',
      'Koordinering med Visit Lofoten, Nordnorsk Reiseliv',
      'Hvordan måle effekt av digital kommunikasjon?',
    ],
    fremdriftSteg: [
      { tekst: 'Kartlegge digital tilstedeværelse i dag', blokkerer: 'Hva finner folk når de søker? Hva mangler?' },
      { tekst: 'Utforske innholdsløsninger', blokkerer: 'Nettside, video, sosiale medier – hva kan fungere best?' },
      { tekst: 'Vurdere integrasjon med eksisterende plattformer', blokkerer: 'Google Maps, TripAdvisor, booking-sider' },
      { tekst: 'Måle og forbedre', blokkerer: 'Analytics, tilbakemeldinger, kontinuerlig justering' },
    ],
  },
  {
    id: 'guidede-opplevelser',
    title: 'Naturforvaltning gjennom guidede opplevelser',
    ikon: '🦅',
    undertittel: 'Lære om natur gjennom opplevelse',
    beskrivelse: 'Guidede turer med lokale naturguider kan formidle om krykkjer, hekkesesong og hvordan allemansretten fungerer i praksis i Lofoten. Det kan etableres merkede naturruter med informasjonstavler, et fugletårn eller observasjonspunkt der folk kan se fugler uten å forstyrre, og arrangementer som "Møt krykkjene" der folk lærer om naturen gjennom opplevelse.',
    hvorfor: 'Folk må forstå naturen for å respektere den. Forbud alene virker ikke alltid. Men når folk lærer hvorfor krykkjer hekker på bakken, hvorfor de angriper hvis du kommer for nært, og hvorfor dette er viktig for økosystemet – kan atferden endres. Formidling gjennom opplevelse kan være mer effektivt enn informasjon alene.',
    status: 'planlagt',
    tidsperspektiv: 'mellomlang',
    kompleksitet: 'høy',
    sesong: 'Spesielt viktig i hekkesesongen (april-juli)',
    utfordringer: [
      'Hvem kan være naturguider? Trengs sertifisering?',
      'Finansiering: Bør turer være gratis eller koste noe?',
      'Kapasitet: Hvor mange kan delta uten å skade naturen?',
      'Koordinering med Statsforvalter og eksisterende aktører',
      'Sikkerhet: Ansvar ved ulykker på guidede turer',
    ],
    fremdriftSteg: [
      { tekst: 'Kartlegge naturverdier og sårbarheter', blokkerer: 'Kan gjøres i samarbeid med Statsforvalter og lokale naturkjennere' },
      { tekst: 'Utforske guide-ressurser', blokkerer: 'Lokale med kunnskap og formidlingsevne' },
      { tekst: 'Vurdere ruter og observasjonspunkter', blokkerer: 'Merkede stier som kan lede bort fra sårbare områder' },
      { tekst: 'Teste konseptet med guidede turer', blokkerer: 'Pilotprosjekt, samle tilbakemeldinger' },
    ],
  },
  {
    id: 'historiefortelling-ambassador',
    title: 'Lokal historiefortelling og ambassadørprogram',
    ikon: '🎭',
    undertittel: 'Dele historier og skape forståelse',
    beskrivelse: '"Lygårkveld på brygga" kan institusjonaliseres som et ukentlig arrangement i sesongen der lokale deler historier om fiskeværet og livet i Å. Et ambassadørprogram kan etableres der lokale innbyggere fungerer som vertskap og møtepunkter for besøkende. Arrangementer som "Møt en innbygger" kan skape forståelse for hvordan det er å leve her – ikke bare "se på museum", men forstå livet.',
    hvorfor: 'Folk husker historier, ikke bare fakta. Forbindelse med lokalbefolkning kan skape respekt. Når besøkende møter en innbygger som forteller om hvordan det er å leve i Å hele året, kan perspektivet skifte fra "dette er et fotomotiv" til "dette er noens hjem". Empati kan skape bedre atferd.',
    status: 'planlagt',
    tidsperspektiv: 'lang',
    kompleksitet: 'middels',
    sesong: 'Helårstiltak med fokus i høysesongen',
    utfordringer: [
      'Hvordan få lokale til å delta uten at det blir byrde?',
      'Kompensasjon: Bør lokale ambassadører få noe tilbake?',
      'Privatliv: Balanse mellom deling og personvern',
      'Sesongvariasjon: Vanskeligere å arrangere utenfor høysesong',
      'Språkbarrierer: Ikke alle lokale snakker engelsk',
    ],
    fremdriftSteg: [
      { tekst: 'Kartlegge interesse blant lokalbefolkning', blokkerer: 'Hvem kan være interessert? Hva motiverer dem?' },
      { tekst: 'Utforske struktur for Lygårkveld', blokkerer: 'Fast tid, sted, format, markedsføring' },
      { tekst: 'Vurdere opplæring for ambassadører', blokkerer: 'Historiefortelling, formidlingsteknikk' },
      { tekst: 'Teste og videreutvikle', blokkerer: 'Samle tilbakemeldinger fra både lokale og besøkende' },
    ],
  },
]

async function migrate() {
  console.log('Starter migrering av tiltak for Vertskap og formidling...\n')

  const pakkeId = 'tiltakspakke-vertskap-formidling'

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
