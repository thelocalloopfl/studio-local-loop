import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'sidebar',
  title: 'SideBar Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'sidebarimage',
      title: 'SideBar Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'SideBar Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'buttonLink',
      title: 'Button Link',
      type: 'url',
      description: 'URL where the button will redirect',
      validation: Rule => Rule.required(),
    }),
  ],
});
