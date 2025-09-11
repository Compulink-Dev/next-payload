import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Categories } from './collections/Categories'
import { News } from './collections/News'
import { ExchangeRates } from './collections/ExchangeRates'
import { MonetaryPolicyStatements } from './collections/MonetayPolicyStatements'
import { QuickLinks } from './collections/QuickLinks'
import { EconomicIndicators } from './collections/EconomicIndicators'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    // Use different media config based on environment
    process.env.VERCEL
      ? {
          slug: 'media',
          access: {
            read: () => true,
          },
          upload: {
            handlers: [], // Empty handlers for Vercel
          },
          fields: [
            {
              name: 'alt',
              type: 'text',
              required: true,
            },
          ],
        }
      : Media,
    Categories,
    News,
    ExchangeRates,
    MonetaryPolicyStatements,
    QuickLinks,
    EconomicIndicators,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    ...(process.env.VERCEL
      ? [
          vercelBlobStorage({
            collections: {
              media: true,
            },
            token: process.env.BLOB_READ_WRITE_TOKEN || '',
          }),
        ]
      : []),
  ],
})
