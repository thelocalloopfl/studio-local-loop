import {defineType, defineField} from 'sanity';

export default defineType({
  name: 'socialLinks',
  title: 'Social Links',
  type: 'object',
  fields: [
    defineField({
      name: 'facebook',
      title: 'Facebook',
      type: 'url',
      description: 'Facebook page link',
      initialValue: 'https://facebook.com/',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
      description: 'Instagram profile link',
      initialValue: 'https://instagram.com/',
    }),
    defineField({
      name: 'x',
      title: 'X (Twitter)',
      type: 'url',
      description: 'X (Twitter) profile link',
      initialValue: 'https://x.com/',
    }),
  ],
});
