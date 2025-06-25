import { NextResponse } from 'next/server'
import { getFeaturedTours } from '@/lib/server-data-fetchers'

export async function GET() {
  try {
    const data = await getFeaturedTours()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching featured tours:', error)
    return NextResponse.json(
      { error: 'Failed to fetch featured tours' },
      { status: 500 }
    )
  }
}