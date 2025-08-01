import {defineType, defineField} from 'sanity';

export default defineType({
  name: 'spotlight',
  title: 'Spotlight',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'offerText',
      title: 'Offer Text',
      type: 'string',
    }),
    defineField({
      name: 'websiteUrl',
      title: 'Website URL',
      type: 'url',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Spotlight Category',
      type: 'reference',
      to: [{ type: 'spotlightCategory' }],
      validation: Rule => Rule.required(),
    }),
  ],
});
