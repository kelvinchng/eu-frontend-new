'use client'

import React from 'react'
import { TourCard } from '@/components/ui/cards/tour-card'
import { TourGrid } from '@/components/common/layout/grid'
import { Button } from '@/components/ui/button'
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

interface CountryTourListingsProps {
  countryName: string
  tours: Tour[]
  totalTours?: number
  className?: string
}

export function CountryTourListings({ 
  countryName, 
  tours,
  totalTours = tours.length,
  className 
}: CountryTourListingsProps) {
  return (
    <section className={cn("w-full max-w-[1478px] mx-auto", className)}>
      {/* Section Title */}
      <div className="mb-[96px]">
        <h2 className="font-thunder font-medium text-[50px] leading-[0.92] text-[#242424]">
          {countryName} Tours
        </h2>
      </div>

      {/* Tour Grid */}
      <TourGrid className="mb-[69px]">
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
      </TourGrid>

      {/* View All Button */}
      <div className="flex justify-center">
        <Button
          variant="primary"
          className="w-[180px] h-[51px] bg-[#242424] text-white font-onest text-[18px] leading-[1.275] rounded-[4px] hover:bg-[#1a1a1a]"
        >
          View All
        </Button>
      </div>
    </section>
  )
}


// Mobile version
export function CountryTourListingsMobile({ 
  countryName, 
  tours,
  totalTours = tours.length,
  className 
}: CountryTourListingsProps) {
  return (
    <section className={cn("lg:hidden w-full max-w-[325px] mx-auto", className)}>
      {/* Section Title */}
      <div className="mb-[48px]">
        <h2 className="font-thunder font-medium text-[32px] leading-[0.92] text-[#242424]">
          {totalTours} Tours
        </h2>
      </div>

      {/* Tour List - Single Column on Mobile */}
      <div className="flex flex-col gap-[77px] mb-[26px]">
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
            className="w-full max-w-[324px] mx-auto"
          />
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center">
        <Button
          variant="outline"
          className="w-[118px] h-[36px] border border-[#242424] text-[#242424] bg-white font-onest text-[12px] leading-[1.275] rounded-[4px] hover:bg-[#f5f5f5]"
        >
          View All
        </Button>
      </div>
    </section>
  )
}

