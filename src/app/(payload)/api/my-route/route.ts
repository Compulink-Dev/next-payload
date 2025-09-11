// app/api/test-payload/route.ts
import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function GET() {
  try {
    const payload = await getPayload({
      config: configPromise,
    })

    // Test connection by fetching any data
    const allCollections = await payload.find({
      collection: 'monetary-policy-statements',
      limit: 1,
    })

    return NextResponse.json({
      connected: true,
      totalDocs: allCollections.totalDocs,
      sample: allCollections.docs.length > 0 ? allCollections.docs[0] : null,
    })
  } catch (error: any) {
    return NextResponse.json(
      {
        connected: false,
        error: error.message,
      },
      { status: 500 },
    )
  }
}
