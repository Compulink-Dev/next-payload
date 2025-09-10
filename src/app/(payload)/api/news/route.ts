import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function GET() {
  try {
    const payload = await getPayload({
      config: configPromise,
    })

    const data = await payload.find({
      collection: 'news',
      limit: 4,
      sort: '-date',
    })

    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching news:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const payload = await getPayload({
      config: configPromise,
    })

    const body = await request.json()

    const newNews = await payload.create({
      collection: 'news',
      data: body, // { title, content, date, ... }
    })

    return NextResponse.json(newNews, { status: 201 })
  } catch (error) {
    console.error('Error creating news:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
