// Oppdater tiltakspakke Fysisk infrastruktur med CMS-innhold
// Kjør med: SANITY_TOKEN=ditt-token node scripts/update-tiltakspakke-fysisk.mjs

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: '849pwpa4',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
})

const pakke = {
  _type: 'tiltakspakke',
  _id: 'tiltakspakke-fysisk-infrastruktur',
  title: 'Fysisk infrastruktur og besøksflyt',
  slug: { _type: 'slug', current: 'fysisk-infrastruktur' },
  kortBeskrivelse: 'Konkrete tiltak for å forbedre infrastrukturen og styre besøksflyten på en bærekraftig måte.',
  heroTekst: 'Infrastrukturen i Å er ikke dimensjonert for turisttrykket. Denne pakken handler både om grunnleggende hygienefaktorer og om å styre besøksflyten gjennom fysiske intervensjoner – for folk, fugl og fesk.',
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
          text: 'Infrastrukturen i Å er ikke dimensjonert for turisttrykket. Toaletter, søppelhåndtering og parkering er alvorlig underdimensjonert. Men det handler ikke bare om å fikse det som mangler.',
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
          text: 'Denne pakken handler også om å styre besøksflyten gjennom fysiske intervensjoner. Ved å bygge, merke og plassere ting riktig kan vi lede folk til steder som tåler press – og bort fra sårbare områder.',
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
          text: 'Fysisk tilrettelegging kan gjøre Å bedre for alle: folk, fugl og fesk.',
          marks: [],
        },
      ],
    },
    {
      _type: 'block',
      _key: 'block4',
      style: 'normal',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: 'span4',
          text: 'Vi starter med det helt nødvendige (toaletter, søppel, parkering), men ser også fremover mot hvordan vi kan bygge og designe for bedre flyt på lengre sikt.',
          marks: [],
        },
      ],
    },
  ],
  aktorer: [
    'Moskenes kommune',
    'Grunneiere i Å',
    'Å og Brygga Restaurant',
    'Statens Vegvesen',
    'Statsforvalteren i Nordland',
  ],
  finansiering: [
    'DOGA-midler',
    'Nordland fylke',
    'Miljødirektoratet',
    'Kommunebudsjettet',
  ],
  lovverk: [
    '§ Plan- og bygningsloven',
    '§ Vegtrafikkloven',
    '§ Naturmangfoldloven',
  ],
  lovverkBeskrivelse: 'Kommunen kan regulere parkering, etablere bilfri sone, styre ferdsel i sårbare områder og verne hekkeplasser. Permanent bygging krever byggetillatelse og avklaring med grunneiere.',
  prinsippLokalsamfunn: 'Gir lokalsamfunnet kontroll over eget sted, reduserer kaos og konflikter. Bedre infrastruktur gjør hverdagen enklere for de som bor i Å hele året.',
  prinsippNatur: 'Reduserer slitasje, beskytter hekkeplasser for krykkjer, leder folk bort fra sårbare områder. Fysiske sperrer og merkede stier holder besøkende unna de mest sårbare sonene.',
  prinsippTurister: 'Skaper forutsigbarhet, bedre opplevelse og tydelige møtepunkter med stedet. Når fasiliteter fungerer og det er tydelig hvor man kan gå, blir opplevelsen bedre for alle.',
  sitater: [
    {
      _type: 'object',
      _key: 'sitat1',
      tekst: 'Campervans parkerer og turister gjør fra seg i parken. Hunden min tråkker i det. Det er flaut og ekkelt.',
    },
    {
      _type: 'object',
      _key: 'sitat2',
      tekst: "We couldn't find any toilets. Had to walk back to the parking area. Very frustrating.",
    },
    {
      _type: 'object',
      _key: 'sitat3',
      tekst: 'Turistbusser parkerer hvor som helst og slipper av turister hvor som helst. Det blir kaos når 40 personer kommer på én gang.',
    },
  ],
  order: 1,
}

async function update() {
  console.log('Oppdaterer tiltakspakke Fysisk infrastruktur...\n')

  try {
    await client.createOrReplace(pakke)
    console.log('✅ Tiltakspakke oppdatert: Fysisk infrastruktur og besøksflyt')
  } catch (error) {
    console.error('❌ Feil:', error.message)
  }

  console.log('\n✨ Ferdig!')
}

update()
