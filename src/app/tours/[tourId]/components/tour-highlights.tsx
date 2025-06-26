'use client'

import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface TourHighlightsData {
  exclusives: string[]
  destinations: {
    [key: string]: string[]
  }
  specialties: {
    delicacies: string[]
    mealPlan: string[]
  }
  hotels: {
    rating: string
    locations: Array<{ city: string; hotel: string }>
    note: string
  }
}

interface TourHighlightsProps {
  highlights: TourHighlightsData
  mapImage?: string
  className?: string
}

export function TourHighlights({ 
  highlights,
  mapImage = '/assets/tour-details/switzerland-map.png',
  className 
}: TourHighlightsProps) {
  return (
    <div className={cn("w-full", className)}>
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        {/* Section Title */}
        <h2 className="font-thunder font-medium text-[50px] leading-[0.92] text-[#242424] text-center mb-[65px]">
          Tour Highlights
        </h2>
        
        {/* Content Container */}
        <div className="flex gap-[26px]">
        {/* Left Side - Highlights Box */}
        <div className="w-[713px] bg-white border border-[#E8E8E8] rounded-[25px] p-[90px_90px_89px_76px]">
          {/* Exclusives Section */}
          <div className="mb-[64px]">
            <h3 className="font-thunder text-[50px] leading-[0.92] text-[#242424] mb-[36px]">
              Exclusives
            </h3>
            <div className="space-y-[0.5em]">
              {highlights.exclusives.map((item, index) => (
                <div key={index} className="flex items-start gap-[12px]">
                  <span className="font-onest font-normal text-[18px] leading-[1.611] text-[#242424]">•</span>
                  <p className="font-onest font-normal text-[18px] leading-[1.611] text-[#242424]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Switzerland Heading */}
          <div className="mb-[39px]">
            <h3 className="font-thunder text-[50px] leading-[0.92] text-[#242424]">
              Switzerland
            </h3>
          </div>
          
          {/* Destinations List */}
          <div className="space-y-[39px]">
            {Object.entries(highlights.destinations).map(([city, attractions], index) => (
              <div key={city} className="space-y-[17px]">
                <h4 className="font-onest font-bold text-[18px] leading-[1.275] uppercase text-[#242424] text-left">
                  {city}
                </h4>
                <div className="space-y-[0.5em]">
                  {attractions.map((attraction, idx) => (
                    <div key={idx} className="flex items-start gap-[12px]">
                      <span className="font-onest font-normal text-[18px] leading-[1.611] text-[#242424]">•</span>
                      <p className="font-onest font-normal text-[18px] leading-[1.611] text-[#242424]">
                        {attraction}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right Side - Map and Specialties */}
        <div className="flex-1 flex flex-col gap-[27px]">
          {/* Map Container */}
          <div className="relative w-[740px] h-[608px] bg-[#E2F4FD] rounded-[25px] overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center p-[65px]">
              <div className="relative w-full h-full">
                <Image
                  src={mapImage}
                  alt="Tour Map"
                  fill
                  className="object-contain rounded-[9px]"
                />
              </div>
            </div>
            {/* Map Icon */}
            <button className="absolute top-[38px] right-[38px] w-[35px] h-[35px]">
              <Image
                src="/assets/icons/zoom-icon.svg"
                alt="Zoom map"
                width={35}
                height={35}
              />
            </button>
          </div>
          
          {/* Specialties Box */}
          <div className="w-[741px] bg-white border border-[#E8E8E8] rounded-[25px] p-[90px_86px]">
            {/* Specialties */}
            <div className="mb-[36px]">
              <h3 className="font-thunder text-[50px] leading-[0.92] text-[#242424] mb-[36px]">
                Specialties
              </h3>
              <div className="space-y-[0.5em]">
                {highlights.specialties.delicacies.map((item, index) => (
                  <div key={index} className="flex items-start gap-[12px]">
                    <span className="font-onest font-normal text-[18px] leading-[1.611] text-[#242424]">•</span>
                    <p className="font-onest font-normal text-[18px] leading-[1.611] text-[#242424]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Delicacies */}
            <div className="mb-[36px]">
              <h3 className="font-thunder text-[50px] leading-[0.92] text-[#242424] mb-[39px]">
                Delicacies
              </h3>
              <div className="mb-[40px]">
                <h4 className="font-onest font-bold text-[18px] leading-[1.275] uppercase text-[#242424] mb-[17px]">
                  Meal Plan
                </h4>
                <div className="space-y-[0.5em]">
                  {highlights.specialties.mealPlan.map((item, index) => (
                    <div key={index} className="flex items-start gap-[12px]">
                      <span className="font-onest font-normal text-[18px] leading-[1.611] text-[#242424]">•</span>
                      <p className="font-onest font-normal text-[18px] leading-[1.611] text-[#242424]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Hotels */}
            <div>
              <h3 className="font-thunder text-[50px] leading-[0.92] text-[#242424] mb-[36px]">
                {highlights.hotels.rating}
              </h3>
              <div className="space-y-[0.5em] mb-[36px]">
                {highlights.hotels.locations.map((location, index) => (
                  <div key={index} className="flex items-start gap-[12px]">
                    <span className="font-onest font-normal text-[18px] leading-[1.611] text-[#242424]">•</span>
                    <p className="font-onest font-normal text-[18px] leading-[1.611] text-[#242424]">
                      <span className="font-bold">{location.city}</span> {location.hotel}
                    </p>
                  </div>
                ))}
              </div>
              <p className="font-onest font-normal text-[18px] leading-[1.611] text-[#242424]">
                <span className="font-bold">Note:</span> {highlights.hotels.note}
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Section Title */}
        <h2 className="font-thunder font-medium text-[32px] leading-[0.92] text-[#242424] text-center mb-[32px]">
          Tour Highlights
        </h2>
        
        {/* Mobile Content - Single Column */}
        <div className="space-y-[20px]">
          {/* Map Container */}
          <div className="relative w-full h-[250px] bg-[#E2F4FD] rounded-[16px] overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center p-[20px]">
              <div className="relative w-full h-full">
                <Image
                  src={mapImage}
                  alt="Tour Map"
                  fill
                  className="object-contain rounded-[9px]"
                />
              </div>
            </div>
            {/* Map Icon */}
            <button className="absolute top-[16px] right-[16px] w-[24px] h-[24px]">
              <Image
                src="/assets/icons/zoom-icon.svg"
                alt="Zoom map"
                width={24}
                height={24}
              />
            </button>
          </div>
          
          {/* Highlights Box */}
          <div className="bg-white border border-[#E8E8E8] rounded-[16px] p-[24px]">
            {/* Exclusives Section */}
            <div className="mb-[32px]">
              <h3 className="font-thunder text-[28px] leading-[0.92] text-[#242424] mb-[16px]">
                Exclusives
              </h3>
              <div className="space-y-[8px]">
                {highlights.exclusives.map((item, index) => (
                  <div key={index} className="flex items-start gap-[8px]">
                    <span className="font-onest font-normal text-[14px] leading-[1.5] text-[#242424]">•</span>
                    <p className="font-onest font-normal text-[14px] leading-[1.5] text-[#242424]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Switzerland Heading */}
            <div className="mb-[24px]">
              <h3 className="font-thunder text-[28px] leading-[0.92] text-[#242424]">
                Switzerland
              </h3>
            </div>
            
            {/* Destinations List */}
            <div className="space-y-[24px]">
              {Object.entries(highlights.destinations).map(([city, attractions], index) => (
                <div key={city} className="space-y-[12px]">
                  <h4 className="font-onest font-bold text-[14px] leading-[1.275] uppercase text-[#242424] text-left">
                    {city}
                  </h4>
                  <div className="space-y-[8px]">
                    {attractions.map((attraction, idx) => (
                      <div key={idx} className="flex items-start gap-[8px]">
                        <span className="font-onest font-normal text-[14px] leading-[1.5] text-[#242424]">•</span>
                        <p className="font-onest font-normal text-[14px] leading-[1.5] text-[#242424]">
                          {attraction}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Specialties Box */}
          <div className="bg-white border border-[#E8E8E8] rounded-[16px] p-[24px]">
            {/* Specialties */}
            <div className="mb-[24px]">
              <h3 className="font-thunder text-[28px] leading-[0.92] text-[#242424] mb-[16px]">
                Specialties
              </h3>
              <div className="space-y-[8px]">
                {highlights.specialties.delicacies.map((item, index) => (
                  <div key={index} className="flex items-start gap-[8px]">
                    <span className="font-onest font-normal text-[14px] leading-[1.5] text-[#242424]">•</span>
                    <p className="font-onest font-normal text-[14px] leading-[1.5] text-[#242424]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Delicacies */}
            <div className="mb-[24px]">
              <h3 className="font-thunder text-[28px] leading-[0.92] text-[#242424] mb-[16px]">
                Delicacies
              </h3>
              <div className="mb-[20px]">
                <h4 className="font-onest font-bold text-[14px] leading-[1.275] uppercase text-[#242424] mb-[12px]">
                  Meal Plan
                </h4>
                <div className="space-y-[8px]">
                  {highlights.specialties.mealPlan.map((item, index) => (
                    <div key={index} className="flex items-start gap-[8px]">
                      <span className="font-onest font-normal text-[14px] leading-[1.5] text-[#242424]">•</span>
                      <p className="font-onest font-normal text-[14px] leading-[1.5] text-[#242424]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Hotels */}
            <div>
              <h3 className="font-thunder text-[28px] leading-[0.92] text-[#242424] mb-[16px]">
                {highlights.hotels.rating}
              </h3>
              <div className="space-y-[8px] mb-[16px]">
                {highlights.hotels.locations.map((location, index) => (
                  <div key={index} className="flex items-start gap-[8px]">
                    <span className="font-onest font-normal text-[14px] leading-[1.5] text-[#242424]">•</span>
                    <p className="font-onest font-normal text-[14px] leading-[1.5] text-[#242424]">
                      <span className="font-bold">{location.city}</span> {location.hotel}
                    </p>
                  </div>
                ))}
              </div>
              <p className="font-onest font-normal text-[14px] leading-[1.5] text-[#242424]">
                <span className="font-bold">Note:</span> {highlights.hotels.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}