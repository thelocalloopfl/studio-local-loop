import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'shop',
  title: 'Shop Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'itemimage',
      title: 'Item Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Item Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'desc',
      title: 'Item Description',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Item Category',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Item Price',
      type: 'number',
      validation: Rule => Rule.required().min(0),
    }),
    defineField({
        name: 'comingsoon',
        title: 'Comming Soon',
        type: 'boolean',
        initialValue: false,
    }),
  ],
});
