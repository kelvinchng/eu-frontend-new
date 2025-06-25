'use client'

import React from 'react'
import { TourCard } from '@/components/ui/cards/tour-card'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface Tour {
  id: string
  title: string
  description: string
  price: string
  imageUrl: string
  tags: string[]
  badge?: string
}

interface ToursListingGridProps {
  tours: Tour[]
  totalCount: number
  isLoading?: boolean
  className?: string
}

// Note: Using standard TourCard component for both desktop and mobile

export function ToursListingGrid({ 
  tours, 
  totalCount, 
  isLoading = false, 
  className 
}: ToursListingGridProps) {
  
  if (isLoading) {
    return (
      <div className={cn("w-full", className)}>
        {/* Loading State */}
        <div className="mb-[32px]">
          <div className="h-[24px] bg-gray-200 rounded animate-pulse w-[120px]" />
        </div>
        
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-[32px] lg:max-w-[1478px] lg:mx-auto">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="w-[460px] h-[643px] bg-gray-200 rounded-[9px] animate-pulse" />
          ))}
        </div>

        <div className="lg:hidden flex flex-col gap-[37px] items-center">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="w-[324px] h-[467px] bg-gray-200 rounded-[9px] animate-pulse" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className={cn("w-full", className)}>
      {/* Results Count */}
      <div className="mb-[48px]">
        <h2 className="font-thunder font-medium text-[32px] leading-[0.92] text-[#242424] lg:hidden">
          {totalCount} Tours
        </h2>
        <div className="hidden lg:block max-w-[1478px] mx-auto">
          <h2 className="font-onest font-medium text-[24px] text-[#242424]">
            {totalCount} Tours
          </h2>
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-[32px] lg:gap-y-[64px] lg:max-w-[1478px] lg:mx-auto lg:mb-[64px]">
        {tours.map((tour) => (
          <TourCard 
            key={tour.id}
            id={tour.id}
            title={tour.title}
            price={tour.price}
            description={tour.description}
            image={tour.imageUrl}
            tags={tour.tags}
            badge={tour.badge}
            href={`/tours/${tour.id}`}
          />
        ))}
      </div>

      {/* Mobile List - Using standard TourCard component */}
      <div className="lg:hidden flex flex-col gap-[37px] items-center mb-[32px]">
        {tours.map((tour) => (
          <TourCard 
            key={tour.id}
            id={tour.id}
            title={tour.title}
            price={tour.price}
            description={tour.description}
            image={tour.imageUrl}
            tags={tour.tags}
            badge={tour.badge}
            href={`/tours/${tour.id}`}
            className="mx-auto"
          />
        ))}
      </div>

      {/* No Results State */}
      {tours.length === 0 && !isLoading && (
        <div className="text-center py-[64px]">
          <h3 className="font-onest font-medium text-[24px] text-[#242424] mb-[16px]">
            No tours found
          </h3>
          <p className="font-onest text-[18px] text-[#666666] max-w-[400px] mx-auto">
            Try adjusting your filters or search criteria to find more tours.
          </p>
        </div>
      )}
    </div>
  )
}