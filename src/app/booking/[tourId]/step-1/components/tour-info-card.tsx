'use client'

import React from 'react'
import Image from 'next/image'

interface TourInfoCardProps {
  tour: {
    title: string
    fullTitle: string
    gallery: string[]
  }
  departureDate: string | null
}

export function TourInfoCard({ tour, departureDate }: TourInfoCardProps) {
  return (
    <div className="bg-white rounded-[25px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.16)] overflow-hidden">
      <Image 
        src={tour.gallery[0]}
        alt={tour.title}
        width={500}
        height={250}
        className="w-full h-[200px] md:h-[220px] lg:h-[240px] xl:h-[250px] object-cover"
      />
      
      <div className="p-[60px_58px]">
        <div className="space-y-[17px]">
          <h3 className="font-onest font-semibold text-[20px] text-[#242424] uppercase tracking-[-2.5%] mb-[23px]">
            TOUR INFO
          </h3>
          
          <div className="flex">
            <span className="font-onest font-medium text-[18px] text-[#242424] w-[126px]">Tour Name</span>
            <span className="font-onest text-[18px] text-[#242424] flex-1">{tour.fullTitle}</span>
          </div>
          
          <div className="flex">
            <span className="font-onest font-medium text-[18px] text-[#242424] w-[126px]">Tour Code</span>
            <span className="font-onest text-[18px] text-[#242424]">04ECSBTS10/25QR</span>
          </div>
          
          <div className="flex">
            <span className="font-onest font-medium text-[18px] text-[#242424] w-[126px]">Departure Date</span>
            <span className="font-onest text-[18px] text-[#242424]">{departureDate || '10 April 2025'}</span>
          </div>
          
          <div className="flex">
            <span className="font-onest font-medium text-[18px] text-[#242424] w-[126px]">Return Date</span>
            <span className="font-onest text-[18px] text-[#242424]">21 April 2025</span>
          </div>
        </div>
      </div>
    </div>
  )
}