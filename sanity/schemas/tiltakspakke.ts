import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'tiltakspakke',
  title: 'Tiltakspakke',
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
      name: 'kortBeskrivelse',
      title: 'Kort beskrivelse',
      type: 'text',
      rows: 2,
      description: 'Vises på oversiktssiden',
    }),
    defineField({
      name: 'heroTekst',
      title: 'Hero-tekst',
      type: 'text',
      rows: 3,
      description: 'Tekst som vises i hero-seksjonen øverst på siden',
    }),
    defineField({
      name: 'hovedbilde',
      title: 'Hovedbilde',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Brukes som bakgrunn i hero og på kort',
    }),
    defineField({
      name: 'omTiltaket',
      title: 'Om tiltakspakken',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Lengre beskrivelse av tiltakspakken',
    }),
    defineField({
      name: 'aktorer',
      title: 'Nødvendige aktører',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Hvem må involveres?',
    }),
    defineField({
      name: 'finansiering',
      title: 'Finansieringskilder',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Hvordan kan tiltakene finansieres?',
    }),
    defineField({
      name: 'lovverk',
      title: 'Relevant lovverk',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'lovverkBeskrivelse',
      title: 'Lovverk-beskrivelse',
      type: 'text',
      rows: 2,
      description: 'Kort forklaring av juridisk handlingsrom',
    }),
    defineField({
      name: 'prinsippLokalsamfunn',
      title: 'Prinsipp: Lokalsamfunn',
      type: 'string',
      description: 'Hvordan pakken sikrer lokalsamfunnets interesser',
    }),
    defineField({
      name: 'prinsippNatur',
      title: 'Prinsipp: Natur',
      type: 'string',
      description: 'Hvordan pakken beskytter naturen',
    }),
    defineField({
      name: 'prinsippTurister',
      title: 'Prinsipp: Turister',
      type: 'string',
      description: 'Hvordan pakken bevisstgjør turister',
    }),
    defineField({
      name: 'sitater',
      title: 'Sitater ("Hva sier folk?")',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'tekst', title: 'Sitat', type: 'text', rows: 3 },
          ],
          preview: {
            select: { title: 'tekst' },
          },
        },
      ],
    }),
    defineField({
      name: 'order',
      title: 'Rekkefølge',
      type: 'number',
      description: 'Sorteringsrekkefølge (lavest først)',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'hovedbilde',
    },
  },
  orderings: [
    {
      title: 'Rekkefølge',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
