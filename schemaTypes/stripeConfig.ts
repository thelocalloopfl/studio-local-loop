interface StripeConfigDoc {
  enableSandbox?: boolean
}

export default {
  name: 'stripeConfig',
  title: 'Stripe Configuration',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'enableSandbox',
      title: 'Sandbox Mode',
      type: 'boolean',
      options: {
        layout: 'switch',
      },
      description: 'Toggle between Live and Sandbox keys',
    },
    {
      name: 'liveKey',
      title: 'Live API Key',
      type: 'string',
      hidden: ({ document }: { document: StripeConfigDoc }) =>
        document?.enableSandbox === true,
    },
    {
      name: 'liveSecret',
      title: 'Live API Secret',
      type: 'string',
      hidden: ({ document }: { document: StripeConfigDoc }) =>
        document?.enableSandbox === true,
    },
    {
      name: 'sandboxKey',
      title: 'Sandbox API Key',
      type: 'string',
      hidden: ({ document }: { document: StripeConfigDoc }) =>
        document?.enableSandbox !== true,
    },
    {
      name: 'sandboxSecret',
      title: 'Sandbox API Secret',
      type: 'string',
      hidden: ({ document }: { document: StripeConfigDoc }) =>
        document?.enableSandbox !== true,
    },
  ],
  preview: {
    select: {
      enableSandbox: 'enableSandbox',
    },
    prepare({ enableSandbox }: { enableSandbox?: boolean }) {
      return {
        title: enableSandbox ? 'Stripe Sandbox Enabled' : 'Stripe Live Mode',
      }
    },
  },
}
