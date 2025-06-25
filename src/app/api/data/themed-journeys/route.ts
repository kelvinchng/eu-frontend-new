import { NextResponse } from 'next/server'
import { getThemedJourneys } from '@/lib/server-data-fetchers'

export async function GET() {
  try {
    const data = await getThemedJourneys()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching themed journeys:', error)
    return NextResponse.json(
      { error: 'Failed to fetch themed journeys' },
      { status: 500 }
    )
  }
}