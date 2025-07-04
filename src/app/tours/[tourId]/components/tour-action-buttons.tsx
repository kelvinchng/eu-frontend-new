'use client'

import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface TourActionButtonsProps {
  tourId: string
  onBookNow?: () => void
  className?: string
}

export function TourActionButtons({ tourId, onBookNow, className }: TourActionButtonsProps) {
  return (
    <section className={cn("w-full", className)}>
      {/* Desktop Buttons */}
      <div className="hidden lg:flex lg:justify-center lg:items-center lg:gap-[32px]">
        {/* Download Itinerary Button */}
        <Link 
          href={`/tours/${tourId}/itinerary.pdf`}
          className={cn(
            "inline-flex items-center justify-center",
            "w-[243px] h-[51px]",
            "bg-white border border-[#242424] text-[#242424]",
            "rounded-[9px]",
            "font-onest text-[18px] leading-[1.275]",
            "hover:bg-[#242424] hover:text-white transition-colors duration-300"
          )}
        >
          Download Itinerary
        </Link>

        {/* Enquire More Button */}
        <Link 
          href={`/contact?tour=${tourId}`}
          className={cn(
            "inline-flex items-center justify-center",
            "w-[243px] h-[51px]",
            "bg-white border border-[#242424] text-[#242424]",
            "rounded-[9px]",
            "font-onest text-[18px] leading-[1.275]",
            "hover:bg-[#242424] hover:text-white transition-colors duration-300"
          )}
        >
          Enquire More
        </Link>

        {/* Book Now Button */}
        <button 
          onClick={onBookNow}
          className={cn(
            "inline-flex items-center justify-center",
            "w-[243px] h-[51px]",
            "bg-[#242424] text-white",
            "rounded-[9px]",
            "font-onest text-[18px] leading-[1.275]",
            "hover:bg-[#1a1a1a] transition-colors duration-300"
          )}
        >
          Book Now
        </button>
      </div>

      {/* Mobile Buttons - Stacked */}
      <div className="lg:hidden flex flex-col items-center gap-[16px]">
        {/* Download Itinerary Button */}
        <Link 
          href={`/tours/${tourId}/itinerary.pdf`}
          className={cn(
            "inline-flex items-center justify-center",
            "w-[306px] h-[45px]",
            "bg-white border border-[#242424] text-[#242424]",
            "rounded-[5px]",
            "font-onest text-[14px] leading-[1.275]",
            "hover:bg-[#242424] hover:text-white transition-colors duration-300"
          )}
        >
          Download Itinerary
        </Link>

        {/* Enquire More Button */}
        <Link 
          href={`/contact?tour=${tourId}`}
          className={cn(
            "inline-flex items-center justify-center",
            "w-[306px] h-[45px]",
            "bg-white border border-[#242424] text-[#242424]",
            "rounded-[5px]",
            "font-onest text-[14px] leading-[1.275]",
            "hover:bg-[#242424] hover:text-white transition-colors duration-300"
          )}
        >
          Enquire More
        </Link>

        {/* Book Now Button */}
        <button 
          onClick={onBookNow}
          className={cn(
            "inline-flex items-center justify-center",
            "w-[306px] h-[45px]",
            "bg-[#242424] text-white",
            "rounded-[5px]",
            "font-onest text-[14px] leading-[1.275]",
            "hover:bg-[#1a1a1a] transition-colors duration-300"
          )}
        >
          Book Now
        </button>
      </div>
    </section>
  )
}