import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

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

// Modify your Media collection to remove uploads entirely
const mediaWithoutUploads = {
  ...Media,
  upload: undefined, // Remove upload capability
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'url',
      type: 'text',
      label: 'File URL',
      required: true,
    },
  ],
}

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
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
    // Remove vercelBlobStorage for now
  ],
})
