// Migreringsscript for å importere tiltakspakker til Sanity
// Kjør med: SANITY_TOKEN=ditt-token node scripts/migrate-tiltakspakker.mjs

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: '849pwpa4',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
})

const tiltakspakker = [
  {
    id: 'fysisk-infrastruktur',
    title: 'Fysisk infrastruktur og besøksflyt',
    kortBeskrivelse: 'Konkrete tiltak for å forbedre fysisk infrastruktur og styre besøksflyten på Å.',
    heroTekst: 'Teknisk planlegging, oppgradering av eksisterende anlegg og nye løsninger for å redusere slitasje og forbedre opplevelsen.',
    aktorer: ['Moskenes kommune', 'Grunneiere i Å', 'Å og Brygga Restaurant', 'Statens vegvesen', 'Statsforvalteren i Nordland'],
    finansiering: ['Nordland fylke', 'Miljødirektoratet', 'Kommunebudsjettet'],
    lovverk: ['§ Plan- og bygningsloven', '§ Vegtrafikkoven', '§ Naturmangfoldloven'],
    lovverkBeskrivelse: 'Kommunen kan regulere parkering, etablere bilfri sone, styre ferdsel i sårbare områder og verne hekkeplasser.',
    prinsippLokalsamfunn: 'Gir lokalsamfunnet kontroll over eget sted, reduserer kaos og konflikter',
    prinsippNatur: 'Reduserer slitasje, beskytter hekkeplasser for krykkjer, leder folk bort fra sårbare områder',
    prinsippTurister: 'Skaper forutsigbarhet, bedre opplevelse og tydelige møtepunkter med stedet',
    sitater: [
      { tekst: 'Campervans parkerer og turister gjør fra seg i parken. Hunden min tråkket i menneskebæsj. Ikke koselig.' },
      { tekst: 'Veldig mange turister vil se «the view». De går inn i hagen vår, tar bilde av barna våre og kjører for fort på vegen. De har ikke toalett. De parkerer på private eiendommer.' },
      { tekst: 'Turistbusser parkerer hvor som helst og slipper av turister hvor som helst, til og med mellom hus.' },
    ],
    order: 1,
  },
  {
    id: 'vertskap-formidling',
    title: 'Vertskap og formidling',
    kortBeskrivelse: 'Tiltak for å styrke vertskapet og formidle informasjon til besøkende på en god måte.',
    heroTekst: 'Tiltak for å styrke vertskapet og formidle informasjon om kultur, natur og lokale regler på en effektiv måte.',
    aktorer: ['Lokale bedrifter', 'Museum Nord', 'Moskenes kommune', 'Lokale guider', 'Besøksnæringen'],
    finansiering: ['Kommunale midler', 'EU-midler for kultur', 'Private investeringer'],
    lovverk: ['§ Markedsføringsloven', '§ Kulturminneloven', '§ Personvernloven'],
    lovverkBeskrivelse: 'Vertskap og formidling må følge markedsføringsloven og sikre personvern ved digital kommunikasjon.',
    prinsippLokalsamfunn: 'Gir lokalsamfunnet kontroll over eget sted, reduserer kaos og konflikter',
    prinsippNatur: 'Reduserer slitasje, beskytter hekkeplasser for krykkjer, leder folk bort fra sårbare områder',
    prinsippTurister: 'Skaper forutsigbarhet, bedre opplevelse og tydelige møtepunkter med stedet',
    sitater: [
      { tekst: 'Campervans parkerer og turister gjør fra seg i parken. Hunden min tråkket i menneskebæsj. Ikke koselig.' },
      { tekst: 'Veldig mange turister vil se «the view». De går inn i hagen vår, tar bilde av barna våre og kjører for fort på vegen. De har ikke toalett. De parkerer på private eiendommer.' },
      { tekst: 'Turistbusser parkerer hvor som helst og slipper av turister hvor som helst, til og med mellom hus.' },
    ],
    order: 2,
  },
  {
    id: 'organisering-kompetanse',
    title: 'Organisering og kompetanse',
    kortBeskrivelse: 'Tiltak for å styrke organisering og bygge kompetanse innen besøksforvaltning.',
    heroTekst: 'Tiltak for å styrke organisering og bygge kompetanse innen besøksforvaltning for å sikre bærekraft over tid.',
    aktorer: ['Moskenes kommune', 'Lokale organisasjoner', 'Besøksnæringen', 'Faglige institusjoner', 'Regionale organisasjoner'],
    finansiering: ['Kommunale budsjetter', 'Regionale utviklingsmidler', 'EU-programmer'],
    lovverk: ['§ Kommuneloven', '§ Offentleglova', '§ Forvaltningsloven'],
    lovverkBeskrivelse: 'Kommunen har ansvar for å koordinere samarbeid og sikre god forvaltning av besøksforvaltningen.',
    prinsippLokalsamfunn: 'Gir lokalsamfunnet kontroll over eget sted, reduserer kaos og konflikter',
    prinsippNatur: 'Reduserer slitasje, beskytter hekkeplasser for krykkjer, leder folk bort fra sårbare områder',
    prinsippTurister: 'Skaper forutsigbarhet, bedre opplevelse og tydelige møtepunkter med stedet',
    sitater: [
      { tekst: 'Campervans parkerer og turister gjør fra seg i parken. Hunden min tråkket i menneskebæsj. Ikke koselig.' },
      { tekst: 'Veldig mange turister vil se «the view». De går inn i hagen vår, tar bilde av barna våre og kjører for fort på vegen. De har ikke toalett. De parkerer på private eiendommer.' },
      { tekst: 'Turistbusser parkerer hvor som helst og slipper av turister hvor som helst, til og med mellom hus.' },
    ],
    order: 3,
  },
]

// Mapping fra gammel string til ny referanse
const tiltakToPakke = {
  'toaletter-hygiene': 'fysisk-infrastruktur',
  'parkering-flyt': 'fysisk-infrastruktur',
  'soppelhandtering': 'fysisk-infrastruktur',
  'bilfri-sone': 'fysisk-infrastruktur',
  'gronn-mobilitet': 'fysisk-infrastruktur',
  'naturrestaurering': 'fysisk-infrastruktur',
  'informasjonsskilt': 'vertskap-formidling',
  'kompetansebygging': 'organisering-kompetanse',
}

async function migrate() {
  console.log('Starter migrering av tiltakspakker...\n')

  // 1. Opprett tiltakspakker
  for (const pakke of tiltakspakker) {
    const doc = {
      _type: 'tiltakspakke',
      _id: `tiltakspakke-${pakke.id}`,
      title: pakke.title,
      slug: { _type: 'slug', current: pakke.id },
      kortBeskrivelse: pakke.kortBeskrivelse,
      heroTekst: pakke.heroTekst,
      aktorer: pakke.aktorer,
      finansiering: pakke.finansiering,
      lovverk: pakke.lovverk,
      lovverkBeskrivelse: pakke.lovverkBeskrivelse,
      prinsippLokalsamfunn: pakke.prinsippLokalsamfunn,
      prinsippNatur: pakke.prinsippNatur,
      prinsippTurister: pakke.prinsippTurister,
      sitater: pakke.sitater?.map((s) => ({
        _type: 'object',
        _key: Math.random().toString(36).substring(7),
        tekst: s.tekst,
      })),
      order: pakke.order,
    }

    try {
      await client.createOrReplace(doc)
      console.log(`✅ Tiltakspakke opprettet: ${pakke.title}`)
    } catch (error) {
      console.error(`❌ Feil ved opprettelse av pakke ${pakke.title}:`, error.message)
    }
  }

  // 2. Oppdater tiltak til å referere til pakker
  console.log('\nOppdaterer tiltak med referanser til pakker...\n')

  for (const [tiltakSlug, pakkeSlug] of Object.entries(tiltakToPakke)) {
    try {
      await client
        .patch(`tiltak-${tiltakSlug}`)
        .set({
          tiltakspakke: {
            _type: 'reference',
            _ref: `tiltakspakke-${pakkeSlug}`,
          },
        })
        .commit()
      console.log(`✅ Tiltak oppdatert: ${tiltakSlug} -> ${pakkeSlug}`)
    } catch (error) {
      console.error(`❌ Feil ved oppdatering av ${tiltakSlug}:`, error.message)
    }
  }

  console.log('\n✨ Migrering fullført!')
}

migrate()
