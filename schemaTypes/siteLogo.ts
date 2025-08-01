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
    },
    {
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
    },
  ],
};

export default siteLogo;
