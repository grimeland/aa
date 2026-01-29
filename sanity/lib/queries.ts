import { groq } from 'next-sanity'

// Hent alle tiltakspakker
export const allTiltakspakkerQuery = groq`
  *[_type == "tiltakspakke"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    kortBeskrivelse,
    hovedbilde
  }
`

// Hent en spesifikk tiltakspakke med slug
export const tiltakspakkeBySlugQuery = groq`
  *[_type == "tiltakspakke" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    kortBeskrivelse,
    heroTekst,
    hovedbilde,
    omTiltaket,
    aktorer,
    finansiering,
    lovverk,
    lovverkBeskrivelse,
    prinsippLokalsamfunn,
    prinsippNatur,
    prinsippTurister,
    sitater
  }
`

// Hent alle tiltak
export const allTiltakQuery = groq`
  *[_type == "tiltak"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    ikon,
    undertittel,
    "tiltakspakke": tiltakspakke->slug.current,
    "tiltakspakkeTitle": tiltakspakke->title,
    beskrivelse,
    status,
    tidsperspektiv,
    kompleksitet,
    sesong,
    hovedbilde
  }
`

// Hent tiltak for en spesifikk tiltakspakke (via slug)
export const tiltakByPakkeQuery = groq`
  *[_type == "tiltak" && tiltakspakke->slug.current == $pakke] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    ikon,
    undertittel,
    "tiltakspakke": tiltakspakke->slug.current,
    "tiltakspakkeTitle": tiltakspakke->title,
    beskrivelse,
    status,
    tidsperspektiv,
    kompleksitet,
    sesong,
    hovedbilde
  }
`

// Hent ett spesifikt tiltak
export const tiltakBySlugQuery = groq`
  *[_type == "tiltak" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    ikon,
    undertittel,
    "tiltakspakke": tiltakspakke->slug.current,
    "tiltakspakkeTitle": tiltakspakke->title,
    beskrivelse,
    hvorfor,
    hovedbilde,
    visualiseringer,
    status,
    tidsperspektiv,
    kompleksitet,
    sesong,
    utfordringer,
    fremdriftSteg,
    kontaktEpost,
    kontaktTekst,
    ekstraKontakter,
    aktorer,
    finansiering,
    lovverk
  }
`

// Hent andre tiltak i samme pakke (for "andre tiltak"-seksjonen)
export const andreTiltakQuery = groq`
  *[_type == "tiltak" && tiltakspakke->slug.current == $pakke && slug.current != $currentSlug][0..2] {
    _id,
    title,
    "slug": slug.current,
    "tiltakspakke": tiltakspakke->slug.current,
    beskrivelse,
    hovedbilde
  }
`

// TypeScript types for Sanity data
export interface SanityTiltakspakke {
  _id: string
  title: string
  slug: string
  kortBeskrivelse?: string
  heroTekst?: string
  hovedbilde?: any
  omTiltaket?: any[]
  aktorer?: string[]
  finansiering?: string[]
  lovverk?: string[]
  lovverkBeskrivelse?: string
  prinsippLokalsamfunn?: string
  prinsippNatur?: string
  prinsippTurister?: string
  sitater?: { tekst: string }[]
}

export interface SanityTiltak {
  _id: string
  title: string
  slug: string
  ikon?: string
  undertittel?: string
  tiltakspakke: string
  tiltakspakkeTitle?: string
  beskrivelse: string
  hvorfor?: string
  hovedbilde?: any
  visualiseringer?: any[]
  status: 'pågår' | 'planlagt' | 'ferdig'
  tidsperspektiv: 'kort' | 'mellomlang' | 'lang'
  kompleksitet: 'lav' | 'middels' | 'høy'
  sesong?: string
  utfordringer?: string[]
  fremdriftSteg?: {
    tekst: string
    blokkerer?: string
    ferdig?: boolean
  }[]
  kontaktEpost?: string
  kontaktTekst?: string
  ekstraKontakter?: {
    navn: string
    rolle: string
    epost: string
  }[]
  aktorer?: string[]
  finansiering?: string
  lovverk?: string[]
}
