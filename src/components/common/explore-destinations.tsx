'use client'

import React, { useState, useEffect } from 'react'
import { DestinationCard } from '@/components/ui/cards/destination-card'
import { CarouselSection } from '@/components/common/carousel-section'
import { Destination, fetchDestinationsClient } from '@/lib/data-fetchers'

interface ExploreDestinationsProps {
  className?: string
  destinations?: Destination[]
}


export function ExploreDestinationsSection({ className, destinations: initialDestinations }: ExploreDestinationsProps) {
  const [destinations, setDestinations] = useState<Destination[]>(initialDestinations || [])
  const [loading, setLoading] = useState(!initialDestinations)

  useEffect(() => {
    if (!initialDestinations) {
      fetchDestinationsClient()
        .then(setDestinations)
        .catch(console.error)
        .finally(() => setLoading(false))
    }
  }, [initialDestinations])

  if (loading) {
    return <div>Loading destinations...</div>
  }

  // Show only 4 destinations at a time
  const displayDestinations = destinations.slice(0, 4)
  
  return (
    <CarouselSection
      title="Explore by Destinations"
      viewAllLink="/destinations"
      items={displayDestinations}
      renderCard={(destination) => <DestinationCard {...destination} />}
      gap={30}
      sectionClassName={className}
    />
  )
}