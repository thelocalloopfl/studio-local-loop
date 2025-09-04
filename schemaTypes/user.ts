import { defineType, defineField } from "sanity";

export default defineType({
  name: "user",
  title: "User Details",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      readOnly: true,
      validation: (Rule) => Rule.required().min(2).max(50),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      readOnly: true,
      validation: (Rule) =>
        Rule.required()
          .email()
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
      readOnly: true,
      validation: (Rule) =>
        Rule.required()
          .min(10)
          .max(15)
    }),
    defineField({
      name: "password",
      title: "Password",
      type: "string",
      description: "Password will be hashed before saving",
      readOnly: true,
      validation: (Rule) =>
        Rule.required().min(6).warning("Password should be at least 6 characters"),
    }),
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    }),
  ],
});
