import { Metadata } from 'next'
import { BookingStep3Client } from './booking-step-3-client'
import { tourDetails, featuredTours, relatedTours } from '@/lib/mock-data'

interface BookingStep3PageProps {
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

export async function generateMetadata({ params }: BookingStep3PageProps): Promise<Metadata> {
  const { tourId } = await params
  // For now, using tourDetails as the only tour data
  const tour = tourId === 'ecsbts' ? tourDetails : null
  
  return {
    title: `Review & Confirm - ${tour?.title || 'Tour'} | EU Holidays`,
    description: `Review and confirm your booking for ${tour?.title || 'tour'}`
  }
}

export default async function BookingStep3Page({ params }: BookingStep3PageProps) {
  const { tourId } = await params
  // For now, using tourDetails as the only tour data
  const tour = tourId === 'ecsbts' ? tourDetails : null
  
  if (!tour) {
    return <div>Tour not found</div>
  }

  return <BookingStep3Client tour={tour} tourId={tourId} />
}