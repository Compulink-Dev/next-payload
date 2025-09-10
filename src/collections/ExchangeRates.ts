import type { CollectionConfig } from 'payload'

export const ExchangeRates: CollectionConfig = {
  slug: 'exchange-rates',
  admin: {
    useAsTitle: 'currency',
    defaultColumns: ['currency', 'rate', 'lastUpdated'],
  },
  fields: [
    {
      name: 'currency',
      type: 'select',
      options: [
        { label: 'USD', value: 'usd' },
        { label: 'GBP', value: 'gbp' },
        { label: 'EUR', value: 'eur' },
        { label: 'ZAR', value: 'zar' },
        { label: 'CNY', value: 'cny' },
        { label: 'BWP', value: 'bwp' },
      ],
      required: true,
    },
    {
      name: 'rate',
      type: 'number',
      required: true,
      min: 0,
    },
    {
      name: 'lastUpdated',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}