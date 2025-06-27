import { Metadata } from 'next'
import { Suspense } from 'react'
import { BookingStep4Client } from './booking-step-4-client'
import { tourDetails, featuredTours, relatedTours } from '@/lib/mock-data'

interface BookingStep4PageProps {
  params: Promise<{
    tourId: string
  }>
}

export async function generateStaticParams() {
  // Generate static params for all available tours
  const allTourIds = [
    tourDetails.id,
    ...featuredTours.map(tour => tour.id),
    ...relatedTours.map(tour => tour.id)
  ]
  
  // Remove duplicates
  const uniqueTourIds = [...new Set(allTourIds)]
  
  return uniqueTourIds.map((tourId) => ({
    tourId: tourId,
  }))
}

export async function generateMetadata({ params }: BookingStep4PageProps): Promise<Metadata> {
  const { tourId } = await params
  // For now, using tourDetails as the only tour data
  const tour = tourId === 'ecsbts' ? tourDetails : null
  
  return {
    title: `Payment - ${tour?.title || 'Tour'} | EU Holidays`,
    description: `Complete payment for ${tour?.title || 'tour'}`
  }
}

export default async function BookingStep4Page({ params }: BookingStep4PageProps) {
  const { tourId } = await params
  // For now, using tourDetails as the only tour data
  const tour = tourId === 'ecsbts' ? tourDetails : null
  
  if (!tour) {
    return <div>Tour not found</div>
  }

  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <BookingStep4Client tour={tour} tourId={tourId} />
    </Suspense>
  )
}