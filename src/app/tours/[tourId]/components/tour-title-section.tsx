'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface TourTitleSectionProps {
  tour: any
  className?: string
  onBookNow?: () => void
}

export function TourTitleSection({ tour, className, onBookNow }: TourTitleSectionProps) {
  return (
    <div className={cn("w-full", className)}>
      {/* Desktop Title Section - Exactly matching Figma */}
      <div className="hidden lg:block">
        <div className="h-[276px] relative">
          {/* Breadcrumbs - Position 0,0 */}
          <div className="absolute left-0 top-0 flex items-center h-[27.88px]">
            <span className="font-onest font-normal text-[20px] leading-[1.275] text-[#242424]">
              Switzerland Tours
            </span>
            
            {/* Arrow */}
            <div className="w-[8.02px] h-[12.15px] ml-[9.49px]">
              <svg width="9" height="13" viewBox="0 0 9 13" fill="none">
                <path d="M1 1L8 6.075L1 11.15" stroke="#000000" strokeWidth="1.5"/>
              </svg>
            </div>
            
            <span className="font-onest font-normal text-[20px] leading-[1.275] text-[#242424] ml-[26.49px]">
              {tour.fullTitle}
            </span>
          </div>
          
          {/* Tour Title - Position 0,72 */}
          <h1 className="absolute left-0 top-[72px] font-thunder font-medium text-[50px] leading-[0.92] text-[#242424] uppercase w-[800px]">
            {tour.fullTitle}
          </h1>
          
          {/* Tour Code and Description - Position 0,162 */}
          <div className="absolute left-0 top-[162px] w-[569px]">
            <p className="font-onest font-semibold text-[18px] leading-[1.275] tracking-[-2.5%] text-[#242424] uppercase">
              Tour Code : {tour.code}
            </p>
            
            <p className="font-onest font-normal text-[18px] leading-[1.275] text-[#242424] mt-[22px] w-[569px]">
              {tour.description}
            </p>
          </div>
          
          {/* Action Buttons - Bottom right */}
          <div className="absolute right-0 bottom-0 flex gap-[11px]">
            {/* Download Itinerary Button - Position 813,225 */}
            <button 
              className="w-[243px] h-[51px] bg-white border border-[#242424] rounded-[9px] font-onest font-normal text-[18px] leading-[1.275] text-[#242424] hover:bg-[#f5f5f5] transition-colors"
            >
              Download Itinerary
            </button>
            
            {/* Enquire More Button - Position 1067,225 */}
            <button 
              className="w-[222px] h-[51px] bg-white border border-[#242424] rounded-[9px] font-onest font-normal text-[18px] leading-[1.275] text-[#242424] hover:bg-[#f5f5f5] transition-colors"
            >
              Enquire More
            </button>
            
            {/* Book Now Button - Position 1300,225 */}
            <button 
              className="w-[180px] h-[51px] bg-[#242424] text-white rounded-[9px] font-onest font-normal text-[18px] leading-[1.275] hover:bg-[#1a1a1a] transition-colors relative overflow-hidden"
              onClick={onBookNow}
            >
              <span className="relative z-10">Book Now</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Title Section */}
      <div className="lg:hidden">
        {/* Title */}
        <h1 className="font-thunder text-[32px] leading-[0.92] text-[#242424] uppercase">
          {tour.fullTitle}
        </h1>
        
        {/* Tour Code */}
        <div className="mt-[18px]">
          <span className="font-onest text-[13px] leading-[1.275] text-[#242424]">
            Tour Code: {tour.code}
          </span>
        </div>
        
        {/* Tags */}
        <div className="flex items-center gap-[5.6px] mt-[18px] flex-wrap">
          {tour.tags.map((tag: string, index: number) => (
            <div key={index} className="bg-[#F5F5F5] text-[#242424] font-onest text-[10px] px-[8px] py-[2px] rounded">
              {tag}
            </div>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="flex items-center gap-[5.6px] mt-[18px] flex-wrap">
          <button 
            className="w-[151.4px] h-[36px] bg-white border border-[#242424] rounded-[4px] font-onest font-normal text-[12px] leading-[1.275] text-[#242424]"
          >
            Download Itinerary
          </button>
          
          <button 
            className="w-[118px] h-[36px] bg-white border border-[#242424] rounded-[4px] font-onest font-normal text-[12px] leading-[1.275] text-[#242424]"
          >
            Enquire More
          </button>
          
          <button 
            className="w-[118px] h-[36px] bg-[#242424] border border-[#242424] text-white rounded-[4px] font-onest font-normal text-[12px] leading-[1.275]"
            onClick={onBookNow}
          >
            Book Now
          </button>
        </div>
        
        {/* Description */}
        <div className="mt-[22px]">
          <p className="font-onest text-[13px] leading-[1.275] text-[#242424]">
            {tour.description}
          </p>
        </div>
      </div>
    </div>
  )
}