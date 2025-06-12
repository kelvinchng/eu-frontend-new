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

// Mobile Tour Card Component that matches Figma exactly
function MobileTourCard({ tour }: { tour: Tour }) {
  return (
    <Link href={`/tours/${tour.id}`} className="block">
      <div className="relative w-[324.06px] h-[467px] bg-white rounded-[9px] mx-auto shadow-[0px_3px_3px_0px_rgba(0,0,0,0.16)] hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="relative w-full h-[172px] overflow-hidden rounded-t-[9px]">
        <img
          src={tour.imageUrl}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        {tour.badge && (
          <div className="absolute top-0 right-0 bg-[#242424] text-white px-[28px] py-[7px] rounded-bl-[9px] font-onest text-[13px]">
            {tour.badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-[29px] pb-[19px]">
        {/* Title */}
        <h3 className="font-onest font-bold text-[15px] leading-[1.275] text-[#242424] mb-[22px] line-clamp-2">
          {tour.title}
        </h3>

        {/* Price */}
        <p className="font-onest font-medium text-[13px] leading-[1.275] text-[#242424] mb-[26px]">
          {tour.price}
        </p>

        {/* Description */}
        <p className="font-onest text-[13px] leading-[1.275] text-[#242424] mb-[27px] line-clamp-4">
          {tour.description}
        </p>

        {/* Tag */}
        {tour.tags[0] && (
          <div className="flex items-center border border-[#E8E8E8] rounded-[7px] h-[30px] px-[12px] mb-[13px] w-fit">
            <div className="flex items-center gap-[8px]">
              {/* Bag Icon */}
              <div className="w-[15px] h-[14px]">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <rect width="15" height="14.41" fill="url(#pattern0)" y="0.59"/>
                  <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use xlinkHref="#image0" transform="matrix(0.0111111 0 0 0.0115741 0 0)"/>
                    </pattern>
                    <image id="image0" width="90" height="90" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACqklEQVR4nO2dSYoUQRSGPxBErJW7VsEBdeUJFBucjiCu9AxO0LpTsNsrqH0B8Qza6kZc6K4HRUTQpZYLtXBA5ElAJiTS2U1lZ756Ufl/8FMQSUVUfEQOlUMkCCFE9pwCFoHXwAiwMTMqvnsfODnpzkTkELDUQOxmeQQcnHTnonAcGHYgucxn4Bg95wDwqUPJZYbFWtNbHjtILvOEnnLaUXKZXu4gF2tk/ASuADMN6twNXC3qWK/ue/SQNzUykuStcq2m7jV6yPcaGU1G8v/M1NT9jR5iNcml/mwwiZboqcI0oiV6qjCNaImeKkwjWqKzYhtwHngIvN/g/MMkU16RSeddzpIhs8BqAJE2Zp4BR8iEi8DvANKsYb4UAyU0afX7E0CWtSD7MEHZAXwMIMla3IyE5HIAOdZyzhCQFwHEWMtJ94eEYjvwN4AYaznp0C8U+wNIsQ6SrgKF4mgAKdZRQiHRTki0ExLthEQ7IdFOSLQTEu2ERDsh0U5ItBMS7YREOyHRTki0ExLthEQ7IdFOSLQTEu2ERDsh0U5ItBMS7YREOyHRTkh05qJ/AXPAng3aTsuud/iUQS9Ez43xG5JsiaaZhDSjzFbn6NCIpl3ReyUal03HDYlGO8O20OGdExLthEQ7IdFOSLQTEu2ERDsh0U5ItBP7Ovr7axPOV4IxrQ/drxGQ5wHEWMu5S0AuBRBjLSdNjx9yqp8PAeRYS3lKYGYznyHMcpi8quRC5rKHwAkyelvQcgBpNmaWcnwxTpoy8xzwAHgH/Aggcr2pfFaL14aE3PE1ZaXSydvALmC+UraSaVvhGFU6urMoG1TKRpm2FY6VSkfni1G2UClbzrStcNzZZJu5kGlb4RgAr2o6/rJYnmNbIRkAt4C3xU2M6fNmZTuaa1tCCEHL/AM17o7ez0bTNQAAAABJRU5ErkJggg=="/>
                  </defs>
                </svg>
              </div>
              <span className="font-onest text-[12px] text-[#242424]">
                {tour.tags[0]}
              </span>
            </div>
          </div>
        )}

        {/* View More */}
        <div className="flex justify-center">
          <div className="flex items-center gap-[8px]">
            <span className="font-onest text-[12px] text-[#242424] underline">
              View More
            </span>
            <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
              <path d="M1 1L4 4L7 1" stroke="#242424" strokeWidth="1.5"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
    </Link>
  )
}

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
        <h2 className="hidden lg:block font-onest font-medium text-[24px] text-[#242424]">
          {totalCount} Tours
        </h2>
      </div>

      {/* Desktop Grid */}
      <div className="hidden lg:grid lg:grid-cols-3 lg:gap-[32px] lg:max-w-[1478px] lg:mx-auto lg:mb-[64px]">
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

      {/* Mobile List */}
      <div className="lg:hidden flex flex-col gap-[37px] items-center mb-[32px]">
        {tours.map((tour) => (
          <MobileTourCard key={tour.id} tour={tour} />
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