import {defineType, defineField} from 'sanity';

export default defineType({
  name: 'spotlightCategory',
  title: 'Spotlight Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Category Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
  ],
});
