import type { CollectionConfig } from 'payload'

export const News: CollectionConfig = {
  slug: 'news',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'date', 'updatedAt'],
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
        { label: 'Publication', value: 'publication' },
        { label: 'Notice', value: 'notice' },
        { label: 'Report', value: 'report' },
        { label: 'Survey', value: 'survey' },
        { label: 'Announcement', value: 'announcement' },
      ],
      required: true,
    },
    {
      name: 'link',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: false,
    },
    {
      name: 'file',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
  ],
}