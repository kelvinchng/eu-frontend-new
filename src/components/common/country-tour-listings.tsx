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
  image: string
  tags: string[]
  badge?: string
  href?: string
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
    <section className={cn("hidden lg:block w-full max-w-[1478px] mx-auto", className)}>
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
            image={tour.image}
            tags={tour.tags}
            badge={tour.badge}
            href={tour.href || `/tours/${tour.id}`}
          />
        ))}
      </TourGrid>

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
    <section className={cn("lg:hidden w-full px-[34px]", className)}>
      {/* Section Title */}
      <div className="mb-[48px]">
        <h2 className="font-thunder font-medium text-[32px] leading-[0.92] text-[#242424]">
          {totalTours} Tours
        </h2>
      </div>

      {/* Tour List - Single Column on Mobile */}
      <div className="flex flex-col gap-[37px] mb-[36px]">
        {tours.map((tour) => (
          <TourCard 
            key={tour.id}
            id={tour.id}
            title={tour.title}
            price={tour.price}
            description={tour.description}
            image={tour.image}
            tags={tour.tags}
            badge={tour.badge}
            href={tour.href || `/tours/${tour.id}`}
className="mx-auto lg:hidden"
          />
        ))}
      </div>

    </section>
  )
}

