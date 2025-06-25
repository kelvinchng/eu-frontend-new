import { NextResponse } from 'next/server'
import { getTravelWithEUTabs } from '@/lib/server-data-fetchers'

export async function GET() {
  try {
    const data = await getTravelWithEUTabs()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching travel with EU tabs:', error)
    return NextResponse.json(
      { error: 'Failed to fetch travel with EU tabs' },
      { status: 500 }
    )
  }
}