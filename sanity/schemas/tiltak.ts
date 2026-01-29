import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'tiltak',
  title: 'Tiltak',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tittel',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL-slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ikon',
      title: 'Ikon (emoji)',
      type: 'string',
      description: 'Valgfritt emoji-ikon, f.eks. 🚽',
    }),
    defineField({
      name: 'undertittel',
      title: 'Undertittel',
      type: 'string',
      description: 'Kort undertittel som vises under hovedtittel',
    }),
    defineField({
      name: 'tiltakspakke',
      title: 'Tiltakspakke',
      type: 'reference',
      to: [{ type: 'tiltakspakke' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'beskrivelse',
      title: 'Beskrivelse',
      type: 'text',
      rows: 5,
      description: 'Detaljert beskrivelse av tiltaket',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hvorfor',
      title: 'Hvorfor dette tiltaket?',
      type: 'text',
      rows: 5,
      description: 'Begrunnelse for hvorfor tiltaket er viktig',
    }),
    defineField({
      name: 'hovedbilde',
      title: 'Hovedbilde',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'visualiseringer',
      title: 'Visualiseringer',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      description: 'Bilder og visualiseringer for tiltaket',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Ikke påbegynt', value: 'ikke-pabegynt' },
          { title: 'Under planlegging', value: 'planlegging' },
          { title: 'Pågår', value: 'pågår' },
        ],
        layout: 'radio',
      },
      initialValue: 'ikke-pabegynt',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tidsperspektiv',
      title: 'Tidsperspektiv',
      type: 'string',
      options: {
        list: [
          { title: 'Kort sikt (0-6 mnd)', value: 'kort' },
          { title: 'Mellomlang sikt (6-12 mnd)', value: 'mellomlang' },
          { title: 'Lang sikt (1-3 år)', value: 'lang' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'kompleksitet',
      title: 'Kompleksitet',
      type: 'string',
      options: {
        list: [
          { title: '●○○ Lav', value: 'lav' },
          { title: '●●○ Middels', value: 'middels' },
          { title: '●●● Høy', value: 'høy' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sesong',
      title: 'Sesong',
      type: 'string',
      description: 'Når er tiltaket mest relevant?',
    }),
    defineField({
      name: 'utfordringer',
      title: 'Utfordringer',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Liste over utfordringer knyttet til tiltaket',
    }),
    defineField({
      name: 'fremdriftSteg',
      title: 'Fremdrift',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'tekst', title: 'Steg', type: 'string' },
            { name: 'blokkerer', title: 'Blokkerer / avhengighet', type: 'string' },
            { name: 'ferdig', title: 'Ferdig?', type: 'boolean', initialValue: false },
          ],
          preview: {
            select: {
              title: 'tekst',
              ferdig: 'ferdig',
            },
            prepare({ title, ferdig }) {
              return {
                title: title,
                subtitle: ferdig ? '✅ Ferdig' : '⏳ Pågår',
              }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'kontaktEpost',
      title: 'Kontakt e-post',
      type: 'string',
    }),
    defineField({
      name: 'kontaktTekst',
      title: 'Kontakttekst',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'ekstraKontakter',
      title: 'Ekstra kontaktpersoner',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'navn', title: 'Navn', type: 'string' },
            { name: 'rolle', title: 'Rolle', type: 'string' },
            { name: 'epost', title: 'E-post', type: 'string' },
          ],
          preview: {
            select: {
              title: 'navn',
              subtitle: 'rolle',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'aktorer',
      title: 'Aktører',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Hvem er involvert i tiltaket?',
    }),
    defineField({
      name: 'finansiering',
      title: 'Finansiering',
      type: 'string',
    }),
    defineField({
      name: 'lovverk',
      title: 'Relevant lovverk',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      pakkeTitle: 'tiltakspakke.title',
      status: 'status',
      media: 'hovedbilde',
    },
    prepare({ title, pakkeTitle, status, media }) {
      const statusTekst: Record<string, string> = {
        'ikke-pabegynt': '[Ikke påbegynt]',
        'planlegging': '[Planlegging]',
        'pågår': '[Pågår]',
      }
      return {
        title: title,
        subtitle: `${pakkeTitle || 'Ingen pakke'} ${statusTekst[status] || ''}`,
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Tiltakspakke',
      name: 'tiltakspakkeAsc',
      by: [{ field: 'tiltakspakke', direction: 'asc' }],
    },
    {
      title: 'Status',
      name: 'statusAsc',
      by: [{ field: 'status', direction: 'asc' }],
    },
  ],
})
