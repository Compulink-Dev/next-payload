// app/api/monetary-policy/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { getPayload, type Where } from 'payload'
import configPromise from '@payload-config'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')

    const payload = await getPayload({
      config: configPromise,
    })

    // Build the query safely with Payload's Where type
    const query: Where = {
      isActive: {
        equals: true,
      },
    }

    if (category) {
      query.category = {
        equals: category,
      }
    }

    const data = await payload.find({
      collection: 'monetary-policy-statements', // 👈 Fixed: matches your collection slug
      where: query,
      sort: '-date',
      limit: 50,
      depth: 2, // 👈 Add this to populate file references
    })

    console.log('Monetary data fetched:', data.docs.length, 'documents')
    if (data.docs.length > 0) {
      console.log('Sample document structure:', JSON.stringify(data.docs[0], null, 2))
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching monetary policy data:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
