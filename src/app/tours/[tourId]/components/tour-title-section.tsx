'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface TourTitleSectionProps {
  tour: any
  className?: string
}

export function TourTitleSection({ tour, className }: TourTitleSectionProps) {
  return (
    <div className={cn("w-full", className)}>
      {/* Desktop Title Section - Exactly matching Figma */}
      <div className="hidden lg:block">
        <div className="h-[276px] relative">
          {/* Breadcrumbs - Position 0,0 */}
          <div className="absolute left-0 top-0 flex items-center gap-[8px] h-[27.88px]">
            <span className="font-onest text-[20px] leading-[1.275] text-[#242424]">
              Switzerland Tours
            </span>
            
            {/* Arrow */}
            <div className="w-[8.02px] h-[12.15px] ml-[1.49px]">
              <svg width="9" height="13" viewBox="0 0 9 13" fill="none">
                <path d="M1 1L8 6.075L1 11.15" stroke="#000000" strokeWidth="1.5"/>
              </svg>
            </div>
            
            <span className="font-onest text-[20px] leading-[1.275] text-[#242424] ml-[26.49px]">
              {tour.fullTitle}
            </span>
          </div>
          
          {/* Tour Title - Position 0,72 */}
          <h1 className="absolute left-0 top-[72px] font-thunder text-[50px] leading-[0.92] text-[#242424] uppercase w-[579px]">
            {tour.fullTitle}
          </h1>
          
          {/* Tour Code and Description - Position 0,162 */}
          <div className="absolute left-0 top-[162px] w-[569px]">
            <p className="font-onest font-semibold text-[18px] leading-[1.275] tracking-[-2.5%] text-[#242424] uppercase">
              Tour Code : {tour.code}
            </p>
            
            <p className="font-onest text-[18px] leading-[1.275] text-[#242424] mt-[44px] w-[569px]">
              {tour.description}
            </p>
          </div>
          
          {/* Action Buttons - Bottom right */}
          <div className="absolute right-0 bottom-0 flex gap-[11px]">
            {/* Download Itinerary Button - Position 813,225 */}
            <button className="w-[243px] h-[51px] bg-[#D9D9D9] border border-[#242424] rounded-[9px] flex items-center justify-center hover:bg-[#cccccc] transition-colors">
              <span className="font-onest text-[18px] leading-[1.275] text-[#242424]">
                Download Itinerary
              </span>
            </button>
            
            {/* Enquire More Button - Position 1067,225 */}
            <button className="w-[222px] h-[51px] bg-[#D9D9D9] border border-[#242424] rounded-[9px] flex items-center justify-center hover:bg-[#cccccc] transition-colors">
              <span className="font-onest text-[18px] leading-[1.275] text-[#242424]">
                Enquire More
              </span>
            </button>
            
            {/* Book Now Button - Position 1300,225 */}
            <button className="relative w-[180.16px] h-[51px] overflow-hidden group hover:scale-105 transition-transform">
              {/* Background SVG shape */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 180.16 51" fill="none">
                <path d="M0 9C0 4.02944 4.02944 0 9 0H163.16C168.131 0 172.16 4.02944 172.16 9V42C172.16 46.9706 168.131 51 163.16 51H9C4.02943 51 0 46.9706 0 42V9Z" fill="#242424" className="group-hover:fill-[#1a1a1a] transition-colors"/>
              </svg>
              <span className="relative font-onest text-[18px] leading-[1.275] text-white z-10">
                Book Now
              </span>
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