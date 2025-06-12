import { tourDetails, relatedTours } from '@/lib/mock-data'
import { TourDetailPageClient } from './tour-detail-page-client'

interface TourDetailPageProps {
  params: Promise<{ tourId: string }>
}

export default async function TourDetailPage({ params }: TourDetailPageProps) {
  const { tourId } = await params
  
  // In a real app, you would fetch tour data based on tourId
  // For now, we'll use the mock data regardless of the tourId
  
  return (
    <TourDetailPageClient 
      tour={tourDetails} 
      relatedTours={relatedTours}
    />
  )
}

export async function generateStaticParams() {
  // In a real app, you would fetch all tour IDs from your API
  return [
    { tourId: 'ecsbts' },
    { tourId: 'ecfrit' },
    { tourId: 'ecgrat' },
    { tourId: 'ecnord' },
  ]
}