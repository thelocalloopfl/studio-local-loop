import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'sociallinks',
  title: 'Social Links',
  type: 'document',
  fields: [
    defineField({
      name: 'sociallinkstitle',
      title: 'Social Links',
      type: 'string',
      readOnly: true,
      initialValue: 'Social Links',
        hidden: true,
    }),

    defineField({
      name: 'facebook',
      title: 'Facebook URL',
      type: 'url',
      description: 'Enter the full URL of your Facebook page',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'x',
      title: 'X URL',
      type: 'url',
      description: 'Enter the full URL of your X page',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram URL',
      type: 'url',
      description: 'Enter the full URL of your Instagram page',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    }),
  ],
})
