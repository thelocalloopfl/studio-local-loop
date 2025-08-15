import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'sidebar',
  title: 'SideBar',
  type: 'document',
  fields: [
    defineField({
      name: 'sidebarimage',
      title: 'SideBar Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'text',
      title: 'SideBar Title',
      type: 'string',
    }),
    defineField({
      name: 'buttonLink',
      title: 'Button Link',
      type: 'url',
      description: 'URL where the button will redirect',
    }),
  ],
});
