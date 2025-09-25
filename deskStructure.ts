import { StructureBuilder } from 'sanity/desk'

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // Show all docs except StripeConfig
      ...S.documentTypeListItems().filter(
        (item) => {
          const id = item.getId();
          return !id || !['stripeConfig', 'sociallinks'].includes(id);
        }
      ),

      // StripeConfig singleton
      S.listItem()
        .title('Stripe Configuration')
        .child(
          S.editor()
            .id('stripeConfig')
            .schemaType('stripeConfig')
            .documentId('stripeConfig') // fixed ID → singleton
        ),

        // SocialLinks singleton
      S.listItem()
        .title('Social Links')
        .child(
          S.editor()
            .id('sociallinks')
            .schemaType('sociallinks')
            .documentId('sociallinks') // fixed ID → singleton
        ),
    ])
