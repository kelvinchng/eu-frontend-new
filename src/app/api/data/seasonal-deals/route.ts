import { NextResponse } from 'next/server'
import { getSeasonalDeals } from '@/lib/server-data-fetchers'

export async function GET() {
  try {
    const data = await getSeasonalDeals()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching seasonal deals:', error)
    return NextResponse.json(
      { error: 'Failed to fetch seasonal deals' },
      { status: 500 }
    )
  }
}