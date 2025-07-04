'use client'

import React from 'react'
import { TourCard } from '@/components/ui/cards/tour-card'
import { TourGrid } from '@/components/common/layout/grid'
import { cn } from '@/lib/utils'

interface RelatedTour {
  id: string
  title: string
  price: string
  originalPrice?: string
  image: string
  duration: string
  departure: string
  tags: string[]
  description?: string
  badge?: string
}

interface RelatedToursProps {
  tours: RelatedTour[]
  className?: string
}

export function RelatedTours({ tours, className }: RelatedToursProps) {
  // Transform tour data to match TourCard props
  const transformedTours = tours.map(tour => ({
    ...tour,
    description: tour.description || `${tour.duration} • ${tour.departure}. Experience the best of our carefully curated tours with professional guides and premium accommodations.`,
    badge: tour.tags[0] // Use first tag as badge
  }))

  return (
    <div className={cn("w-full", className)}>
      <div className="mb-[24px] lg:mb-[50px]">
        <h2 className="font-thunder text-[32px] lg:text-[50px] leading-[0.92] text-[#242424] uppercase">
          Related Tours You Might Like
        </h2>
      </div>
      
      {/* Tour Grid - 4 cards per row on desktop, responsive */}
      <TourGrid>
        {transformedTours.map((tour) => (
          <TourCard
            key={tour.id}
            id={tour.id}
            title={tour.title}
            price={tour.price}
            description={tour.description}
            image={tour.image}
            tags={tour.tags}
            badge={tour.badge}
            href={`/tours/${tour.id}`}
          />
        ))}
      </TourGrid>
    </div>
  )
}