// Migreringsscript for Organisering og kompetanse
// Kjør med: SANITY_TOKEN=ditt-token node scripts/migrate-organisering.mjs

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: '849pwpa4',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
})

// Tiltakspakke content
const tiltakspakke = {
  _type: 'tiltakspakke',
  _id: 'tiltakspakke-organisering-kompetanse',
  title: 'Organisering og kompetanse',
  slug: { _type: 'slug', current: 'organisering-kompetanse' },
  kortBeskrivelse: 'Bygge strukturer og kompetanse som gjør besøksforvaltningen bærekraftig over tid.',
  heroTekst: 'Gode tiltak trenger noen som driver dem fremover. Denne pakken handler om å bygge strukturer og kompetanse som gjør besøksforvaltningen i Å bærekraftig over tid.',
  omTiltaket: [
    {
      _type: 'block',
      _key: 'block1',
      style: 'normal',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 'span1',
          text: 'Fysisk infrastruktur og god formidling løser mye. Men hvem skal drive arbeidet fremover? Hvem skal ta beslutninger? Hvem skal søke midler? Hvem skal koordinere aktørene?',
          marks: [],
        },
      ],
    },
    {
      _type: 'block',
      _key: 'block2',
      style: 'normal',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 'span2',
          text: 'I dag er ansvaret fragmentert mellom mange. Det gjør det vanskelig å komme videre. Organisering og kompetanse handler om å bygge strukturer som gjør at arbeidet kan fortsette etter at DOGA-prosjektet er ferdig. Det handler om å skape møteplasser der folk kan snakke sammen, profesjonalisere vertskapet, og etablere en organisasjon som kan ta ansvar.',
          marks: [],
        },
      ],
    },
    {
      _type: 'block',
      _key: 'block3',
      style: 'normal',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 'span3',
          text: 'På lang sikt kan Å også bli et sted andre destinasjoner lærer av.',
          marks: [],
        },
      ],
    },
  ],
  aktorer: [
    'Moskenes kommune (prosjektgruppa)',
    'Lokalbefolkning i Å',
    'Næringsdrivende i Å',
    'Visit Lofoten',
    'Museum Nord / Å',
    'Nasjonalparken',
  ],
  finansiering: [
    'DOGA-midler',
    'Kommunebudsjettet',
    'Nordland fylke',
    'Distriktstilskudd',
    'Kulturmidler',
    'Næringsinntekter (studiebesøk, konsulentvirksomhet)',
  ],
  lovverk: [
    '§ Lov om interkommunale selskap',
    '§ Lov om lag og foreninger',
    '§ Plan- og bygningsloven',
  ],
  lovverkBeskrivelse: 'Kommunen kan etablere ulike organisasjonsformer for besøksforvaltning, fra frivillige foreninger til interkommunale selskap. Valg av organisasjonsform påvirker mandat, finansiering og ansvarsfordeling.',
  prinsippLokalsamfunn: 'God organisering gir lokalsamfunnet strukturer for å ta beslutninger sammen. Møteplasser skaper dialog. Bygdegeneratorer styrker fellesskapet. Når lokalbefolkningen har reell innflytelse og gode arenaer for samling, blir Å mer robust.',
  prinsippNatur: 'En organisasjon som har mandat og ressurser kan drive naturforvaltning systematisk over tid. Det sikrer at naturhensyn ikke bare er gode intensjoner, men faktisk blir ivaretatt.',
  prinsippTurister: 'Profesjonalisert vertskap og god organisering sikrer at besøkende får konsistent og god informasjon. Det skaper forutsigbarhet og bedre opplevelser.',
  sitater: [
    {
      _type: 'object',
      _key: 'sitat1',
      tekst: 'Vi snakker om de samme problemene hvert år, men ingenting skjer. Vi trenger noen som faktisk driver dette fremover.',
    },
    {
      _type: 'object',
      _key: 'sitat2',
      tekst: 'Alle er enige om at noe må gjøres, men hvem skal gjøre det? Det er det ingen som vet.',
    },
    {
      _type: 'object',
      _key: 'sitat3',
      tekst: 'Hvis vi kan lære av Å og få tilgang til det de har gjort, ville det spart oss for så mye tid.',
    },
  ],
  order: 3,
}

// Tiltak content
const tiltak = [
  {
    id: 'aa-forum',
    title: 'Å-forum – møterekke for dialog',
    ikon: '🗣️',
    undertittel: 'Fast møteplass for beslutninger',
    beskrivelse: 'Å-forum kan etableres som en fast møteplass der lokalbefolkning, næringsdrivende, grunneiere og kommune møtes for å diskutere og ta beslutninger sammen. Dette kan være månedlige eller kvartalsvise møter med faste rammer: tid, sted, agenda og møteledelse. Forum kan fungere som en diskusjonsplattform der alle som er berørt av besøksforvaltningen i Å har en stemme.',
    hvorfor: 'Mange av utfordringene i Å krever at folk snakker sammen og blir enige. Fragmentert ansvar og uklare roller skaper frustrasjon. Et fast forum kan gi struktur på dialogen og bygge tillit mellom ulike aktører. Det kan også gjøre det enklere å ta beslutninger fordi alle vet når og hvor ting skal diskuteres.',
    status: 'planlegging',
    tidsperspektiv: 'kort',
    kompleksitet: 'lav',
    sesong: 'Helårstiltak',
    utfordringer: [
      'Hvem skal lede møtene? Trenger en nøytral møteleder?',
      'Hvordan sikre at alle stemmer blir hørt, ikke bare de sterkeste?',
      'Kan møtene bli for lange eller ustrukturerte?',
      'Oppmøte: Hvordan motivere folk til å delta over tid?',
      'Beslutninger: Hvem har mandat til å beslutte hva?',
    ],
    fremdriftSteg: [
      { tekst: 'Invitere til første møte', blokkerer: 'Hvem bør være med? Hvor kan det holdes?' },
      { tekst: 'Etablere struktur og rammer', blokkerer: 'Fast tid, sted, agenda, møteledelse' },
      { tekst: 'Teste format over noen møter', blokkerer: 'Justere basert på tilbakemeldinger' },
      { tekst: 'Evaluere og videreutvikle', blokkerer: 'Fungerer det? Kommer folk? Tas det beslutninger?' },
    ],
  },
  {
    id: 'opplaering-vertskap',
    title: 'Opplæring av vertskap',
    ikon: '🎓',
    undertittel: 'Felles standard for alle som møter besøkende',
    beskrivelse: 'Opplæring kan gi alle som møter besøkende en felles standard og forståelse. Dette kan inkludere Å-verter, ansatte i restaurant og museum, og andre som har kontakt med turister. Opplæringen kan dekke temaer som lokal historie, krykkjer og hekkesesong, praktisk informasjon, formidlingsteknikk og hvordan håndtere konflikter. Målet er å profesjonalisere vertskapet uten å miste autentisiteten.',
    hvorfor: 'Når ulike aktører gir ulik informasjon, kan det skape forvirring. Felles opplæring kan sørge for at alle formidler det samme budskapet. Det kan også gi trygghet til de som skal være verter – de vet hva de skal si og hvordan de kan håndtere vanskelige situasjoner.',
    status: 'planlegging',
    tidsperspektiv: 'kort',
    kompleksitet: 'middels',
    sesong: 'Før høysesongen',
    utfordringer: [
      'Hvem kan holde opplæringen? Trengs ekstern kompetanse?',
      'Tid: Når kan folk delta? Må det være betalt arbeidstid?',
      'Innhold: Hva er viktigst å lære? Hva kan droppes?',
      'Oppfølging: Er én opplæring nok, eller trengs det repetering?',
      'Motivasjon: Hvordan få folk til å prioritere opplæring?',
    ],
    fremdriftSteg: [
      { tekst: 'Kartlegge behov for opplæring', blokkerer: 'Hva trenger folk å kunne? Hva vet de allerede?' },
      { tekst: 'Utvikle opplæringsprogram', blokkerer: 'Innhold, varighet, format – teoretisk og praktisk?' },
      { tekst: 'Gjennomføre pilot-opplæring', blokkerer: 'Teste med en gruppe, samle tilbakemeldinger' },
      { tekst: 'Justere og rulle ut', blokkerer: 'Tilby opplæring til alle relevante aktører' },
    ],
  },
  {
    id: 'destinasjonsorganisasjon',
    title: 'Lokal destinasjonsorganisasjon',
    ikon: '🏛️',
    undertittel: 'Samle ansvar og koordinere tiltak',
    beskrivelse: 'En lokal destinasjonsorganisasjon kan etableres for å ta ansvar for besøksforvaltning i Å. Organisasjonen kan koordinere tiltak, søke finansiering, drive informasjonsarbeid og være kontaktpunkt for samarbeid. Viktige bidragsytere kan være prosjektgruppa i Moskenes kommune, Nasjonalparken, Visit Lofoten og Museum Nord. Organisasjonen kan ha ansatte eller drives av frivillige, avhengig av finansiering og ambisjonsnivå.',
    hvorfor: 'I dag er ansvaret fragmentert mellom mange aktører. En lokal organisasjon kan samle trådene og sørge for at noen faktisk driver arbeidet fremover. Det kan også gjøre det enklere å søke midler og samarbeide med regionale og nasjonale aktører.',
    status: 'planlegging',
    tidsperspektiv: 'mellomlang',
    kompleksitet: 'høy',
    sesong: 'Helårstiltak',
    utfordringer: [
      'Organisasjonsform: Forening, AS, interkommunalt selskap?',
      'Finansiering: Hvordan sikre bærekraftig økonomi over tid?',
      'Mandat: Hva kan organisasjonen beslutte? Hva må andre godkjenne?',
      'Bemanning: Trenger ansatte, eller kan det drives av frivillige?',
      'Forankring: Hvordan sikre støtte fra alle relevante aktører?',
    ],
    fremdriftSteg: [
      { tekst: 'Utrede organisasjonsform', blokkerer: 'Hva er mulig? Hva har andre destinasjoner gjort?' },
      { tekst: 'Dialog med relevante aktører', blokkerer: 'Hvem vil være med? Hva kan de bidra med?' },
      { tekst: 'Søke finansiering', blokkerer: 'Etableringsmidler fra fylke, kommune, nasjonale ordninger?' },
      { tekst: 'Etablere organisasjon', blokkerer: 'Vedtekter, styre, arbeidsplan, budsjett' },
    ],
  },
  {
    id: 'bygdegeneratorer',
    title: 'Bygdegeneratorer',
    ikon: '🏠',
    undertittel: 'Fysiske møteplasser for lokalsamfunnet',
    beskrivelse: 'Bygdegeneratorer kan være fysiske møteplasser som forsterker lokalt engasjement og samhold. Dette kan være et bygg, en plass eller et arrangement som bidrar til å gjøre lokalsamfunnet mer robust og levende. Eksempler kan være fellesverksted, kulturhus, utendørs samlingsplass eller andre arenaer der lokale kan møtes og samles. Målet er ikke primært rettet mot turister, men mot lokalbefolkningen.',
    hvorfor: 'Et sterkt lokalsamfunn er bedre rustet til å håndtere turisttrykk. Når folk kjenner hverandre og møtes regelmessig, blir det enklere å ta felles beslutninger og støtte hverandre. Bygdegeneratorer kan bidra til at folk blir værende og at nye flytter til – noe som styrker Å på lang sikt.',
    status: 'planlegging',
    tidsperspektiv: 'mellomlang',
    kompleksitet: 'middels',
    sesong: 'Helårstiltak',
    utfordringer: [
      'Hva trenger Å mest? Fysisk plass eller sosiale arrangementer?',
      'Lokalisering: Hvor kan en bygdegenerator plasseres?',
      'Finansiering: Hvem betaler for bygg, drift og vedlikehold?',
      'Eierskap: Hvem eier og driver bygdegeneratoren?',
      'Bruk: Hvordan sikre at det faktisk blir brukt?',
    ],
    fremdriftSteg: [
      { tekst: 'Kartlegge behov og ønsker', blokkerer: 'Hva savner lokalbefolkningen? Hva ville styrket fellesskapet?' },
      { tekst: 'Utforske muligheter', blokkerer: 'Eksisterende bygg, nye bygg, utendørs løsninger?' },
      { tekst: 'Søke finansiering', blokkerer: 'Distriktstilskudd, kulturmidler, næringsfond?' },
      { tekst: 'Realisere pilot', blokkerer: 'Starte enkelt, teste, utvikle videre' },
    ],
  },
  {
    id: 'referansedestinasjon',
    title: 'Å som referansedestinasjon',
    ikon: '🌟',
    undertittel: 'Dele erfaringer med andre destinasjoner',
    beskrivelse: 'Å kan utvikles som referansedestinasjon der effekten av tiltak dokumenteres og deles åpent med andre. Dette kan inkludere vertskap for studiebesøk fra andre kommuner og steder som sliter med samme utfordringer, deling av verktøy og erfaringer, og åpen dokumentasjon av hva som fungerer og ikke fungerer. Viktige bidragsytere kan være lokale næringsaktører, kunstnere og utviklere som allerede jobber innovativt.',
    hvorfor: 'Mange små destinasjoner i Norge sliter med overtourisme. Hvis Å kan vise vei og dele erfaringer, kan det ha verdi langt utover Moskenes kommune. Det kan også gi mening og stolthet lokalt – å være et sted som andre lærer av. I tillegg kan det tiltrekke seg samarbeidspartnere og finansiering.',
    status: 'planlegging',
    tidsperspektiv: 'lang',
    kompleksitet: 'middels',
    sesong: 'Helårstiltak',
    utfordringer: [
      'Dokumentasjon: Hvem kan systematisk dokumentere arbeidet?',
      'Tid: Krever ressurser å være vertskap for studiebesøk',
      'Troverdighet: Må vise reelle resultater før andre vil lære',
      'Balanse: Å skal være levende sted, ikke museum for tiltak',
      'Økonomi: Kan studiebesøk og konsulentvirksomhet gi inntekt?',
    ],
    fremdriftSteg: [
      { tekst: 'Dokumentere prosess og resultater', blokkerer: 'Hva har vi gjort? Hva har effekten vært?' },
      { tekst: 'Dele erfaringer åpent', blokkerer: 'Artikler, foredrag, åpne dokumenter' },
      { tekst: 'Ta imot studiebesøk', blokkerer: 'Når tiltak er implementert og har vist effekt' },
      { tekst: 'Videreutvikle som kompetansesenter', blokkerer: 'Kan det bli en inntektskilde på lang sikt?' },
    ],
  },
]

async function migrate() {
  console.log('Starter migrering av Organisering og kompetanse...\n')

  // 1. Opprett/oppdater tiltakspakke
  try {
    await client.createOrReplace(tiltakspakke)
    console.log('✅ Tiltakspakke opprettet: Organisering og kompetanse')
  } catch (error) {
    console.error('❌ Feil ved opprettelse av tiltakspakke:', error.message)
  }

  // 2. Opprett tiltak
  const pakkeId = 'tiltakspakke-organisering-kompetanse'

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
