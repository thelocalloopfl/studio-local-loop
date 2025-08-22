const siteLogo = {
  name: 'siteLogo',
  title: 'Site Logo',
  type: 'document',
  fields: [
    {
      name: 'logo',
      title: 'Logo Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
    {
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
  ],
};

export default siteLogo;
