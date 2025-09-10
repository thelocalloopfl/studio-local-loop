import { StructureBuilder } from 'sanity/desk'

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // Show all docs except StripeConfig
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'stripeConfig'
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
    ])
