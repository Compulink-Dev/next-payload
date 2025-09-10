import type { CollectionConfig } from 'payload'

export const EconomicIndicators: CollectionConfig = {
  slug: 'economic-indicators',
  admin: {
    useAsTitle: 'indicator',
    defaultColumns: ['indicator', 'value', 'lastUpdated'],
  },
  fields: [
    {
      name: 'indicator',
      type: 'select',
      options: [
        { label: 'Inflation Rate (YoY)', value: 'inflation-yoy' },
        { label: 'Inflation Rate (MoM)', value: 'inflation-mom' },
        { label: 'Policy Rate', value: 'policy-rate' },
        { label: 'Gold Price (USD per ounce)', value: 'gold-price' },
        { label: 'Interbank Rate', value: 'interbank-rate' },
        { label: 'GDP Growth', value: 'gdp-growth' },
      ],
      required: true,
    },
    {
      name: 'value',
      type: 'text',
      required: true,
    },
    {
      name: 'period',
      type: 'text',
      required: true,
    },
    {
      name: 'lastUpdated',
      type: 'date',
      required: true,
    },
    {
      name: 'trend',
      type: 'select',
      options: [
        { label: 'Up', value: 'up' },
        { label: 'Down', value: 'down' },
        { label: 'Stable', value: 'stable' },
      ],
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}