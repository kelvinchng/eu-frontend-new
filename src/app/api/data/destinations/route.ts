import { NextResponse } from 'next/server'
import { getDestinations } from '@/lib/server-data-fetchers'

export async function GET() {
  try {
    const data = await getDestinations()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching destinations:', error)
    return NextResponse.json(
      { error: 'Failed to fetch destinations' },
      { status: 500 }
    )
  }
}