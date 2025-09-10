// collections/MonetaryPolicyStatements.ts
import type { CollectionConfig } from 'payload'

export const MonetaryPolicyStatements: CollectionConfig = {
  slug: 'monetary-policy-statements',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'date', 'isActive', 'updatedAt'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Policy Statement', value: 'policy' },
        { label: 'MPC Statement', value: 'mpc' },
      ],
      required: true,
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: false,
    },
    {
      name: 'fullStatement',
      type: 'upload',
      relationTo: 'media', // This should match your media collection slug
      required: true,
    },
    {
      name: 'atAGlance',
      type: 'upload',
      relationTo: 'media', // This should match your media collection slug
      required: false,
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}