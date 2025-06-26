import { BookingStep2Client } from './booking-step-2-client'
import { tourDetails } from '@/lib/mock-data'

interface BookingStep2PageProps {
  params: Promise<{ tourId: string }>
}

export default async function BookingStep2Page({ params }: BookingStep2PageProps) {
  const { tourId } = await params
  
  // In a real app, you would fetch tour data based on tourId
  // For now, we'll use the mock data
  
  return (
    <BookingStep2Client 
      tour={tourDetails}
      tourId={tourId}
    />
  )
}

export async function generateStaticParams() {
  // Return all possible tour IDs that can be booked
  return [
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
    
    // Add the transformed version of tour titles
    { tourId: '11d8n-switzerland-dream-apr-oct' },
    { tourId: '14d12n-scandinavian-capitals' },
    { tourId: '11d9n-eastern-europe-discovery' },
  ]
}