export default {
  name: 'bannerSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'subHeading',
      title: 'Sub Heading',
      type: 'string',
    },
    {
      name: 'buttonOneText',
      title: 'Button One Text',
      type: 'string',
    },
    {
      name: 'buttonOneLink',
      title: 'Button One Link',
      type: 'url',
    },
    {
      name: 'buttonTwoText',
      title: 'Button Two Text',
      type: 'string',
    },
    {
      name: 'buttonTwoLink',
      title: 'Button Two Link',
      type: 'url',
    },
  ],
};
