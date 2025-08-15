import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'shop',
  title: 'Shop',
  type: 'document',
  fields: [
    defineField({
      name: 'itemimage',
      title: 'Item Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'title',
      title: 'Item Title',
      type: 'string',
    }),
    defineField({
      name: 'desc',
      title: 'Item desc',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Item Category',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Item Price',
      type: 'number',
    }),
    defineField({
        name: 'comingsoon',
        title: 'Comming Soon',
        type: 'boolean',
        initialValue: false,
    }),
  ],
});
