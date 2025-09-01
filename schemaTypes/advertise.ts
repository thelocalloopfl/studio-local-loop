export default {
  name: 'advertiseFormSubmission',
  title: 'Advertise Form Submission',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      readOnly: true,
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
    {
      name: 'businessName',
      title: 'Business Name',
      type: 'string',
      readOnly: true,
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      readOnly: true,
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text',
      readOnly: true,
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      readOnly: true,
      initialValue: () => new Date().toISOString(),
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
  ],
};
