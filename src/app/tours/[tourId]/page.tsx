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
  // For now, including all tour IDs referenced in the application
  return [
    // Country pages
    { tourId: 'switzerland' },
    
    // Original tour codes
    { tourId: 'ecsbts' },
    { tourId: 'ecfrit' },
    { tourId: 'ecgrat' },
    { tourId: 'ecnord' },
    { tourId: 'eceast' },
    
    // Featured tours
    { tourId: 'korea-scenic' },
    { tourId: 'japan-classic' },
    { tourId: 'taiwan-discovery' },
    { tourId: 'turkey-wonders' },
    
    // Seasonal deals
    { tourId: 'japan-sakura' },
    { tourId: 'iceland-aurora' },
    { tourId: 'swiss-summer' },
    { tourId: 'med-cruise' },
    { tourId: 'eastern-europe' },
    { tourId: 'scandinavia-lights' },
    
    // Country specific tours
    { tourId: 'switzerland-dream' },
    { tourId: 'scandinavian-capitals' },
  ]
}