'use client'

import React, { useState, useEffect } from 'react'
import { TourCard } from '@/components/ui/cards/tour-card'
import { CarouselSection } from '@/components/common/carousel-section'
import { cn } from '@/lib/utils'
import { FeaturedTour, fetchFeaturedToursClient } from '@/lib/data-fetchers'

interface FeaturedToursProps {
  className?: string
  tours?: FeaturedTour[]
}


export function FeaturedToursSection({ className, tours: initialTours }: FeaturedToursProps) {
  const [tours, setTours] = useState<FeaturedTour[]>(initialTours || [])
  const [loading, setLoading] = useState(!initialTours)

  useEffect(() => {
    if (!initialTours) {
      fetchFeaturedToursClient()
        .then(setTours)
        .catch(console.error)
        .finally(() => setLoading(false))
    }
  }, [initialTours])

  if (loading) {
    return <div>Loading featured tours...</div>
  }

  return (
    <CarouselSection
      title="Featured Tours"
      viewAllLink="/tours"
      items={tours}
      renderCard={(tour) => <TourCard {...tour} />}
      itemsPerSlide={4}
      gap={20}
      sectionClassName={cn("py-16 lg:py-20", className)}
      titleAlignment="left"
    />
  )
}