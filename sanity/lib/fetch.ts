import { client } from './client'
import { 
  allTiltakspakkerQuery,
  tiltakspakkeBySlugQuery,
  allTiltakQuery, 
  tiltakByPakkeQuery, 
  tiltakBySlugQuery, 
  andreTiltakQuery,
  type SanityTiltakspakke,
  type SanityTiltak 
} from './queries'

export async function getAllTiltakspakker(): Promise<SanityTiltakspakke[]> {
  return client.fetch(allTiltakspakkerQuery)
}

export async function getTiltakspakkeBySlug(slug: string): Promise<SanityTiltakspakke | null> {
  return client.fetch(tiltakspakkeBySlugQuery, { slug })
}

export async function getAllTiltak(): Promise<SanityTiltak[]> {
  return client.fetch(allTiltakQuery)
}

export async function getTiltakByPakke(pakke: string): Promise<SanityTiltak[]> {
  return client.fetch(tiltakByPakkeQuery, { pakke })
}

export async function getTiltakBySlug(slug: string): Promise<SanityTiltak | null> {
  return client.fetch(tiltakBySlugQuery, { slug })
}

export async function getAndreTiltak(pakke: string, currentSlug: string): Promise<SanityTiltak[]> {
  return client.fetch(andreTiltakQuery, { pakke, currentSlug })
}

// Helper functions that were in lib/tiltak.ts
export function getStatusText(status: string): string {
  switch (status) {
    case 'ikke-pabegynt':
      return 'Ikke påbegynt'
    case 'planlegging':
      return 'Under planlegging'
    case 'pågår':
      return 'Pågår'
    default:
      return ''
  }
}

// Alias for backwards compatibility
export const getStatusIcon = getStatusText

export function getKompleksitetDots(kompleksitet: string): string {
  switch (kompleksitet) {
    case 'lav':
      return '●○○'
    case 'middels':
      return '●●○'
    case 'høy':
      return '●●●'
    default:
      return ''
  }
}

export function getTidsperspektivTekst(tidsperspektiv: string): string {
  switch (tidsperspektiv) {
    case 'kort':
      return 'Kort sikt (0-6 mnd)'
    case 'mellomlang':
      return 'Mellomlang sikt (6-12 mnd)'
    case 'lang':
      return 'Lang sikt (1-3 år)'
    default:
      return ''
  }
}
