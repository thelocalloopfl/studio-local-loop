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
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
    {
      name: 'subHeading',
      title: 'Sub Heading',
      type: 'string',
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
    {
      name: 'buttonOneText',
      title: 'Button One Text',
      type: 'string',
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
    {
      name: 'buttonOneLink',
      title: 'Button One Link',
      type: 'url',
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
    {
      name: 'buttonTwoText',
      title: 'Button Two Text',
      type: 'string',
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
    {
      name: 'buttonTwoLink',
      title: 'Button Two Link',
      type: 'url',
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
  ],
};
