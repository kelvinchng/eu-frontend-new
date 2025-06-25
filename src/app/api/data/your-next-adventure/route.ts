import { NextResponse } from 'next/server'
import { getYourNextAdventureData } from '@/lib/server-data-fetchers'

export async function GET() {
  try {
    const data = await getYourNextAdventureData()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching your next adventure data:', error)
    return NextResponse.json(
      { error: 'Failed to fetch your next adventure data' },
      { status: 500 }
    )
  }
}