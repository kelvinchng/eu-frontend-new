'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface TourHighlightsProps {
  highlights: string[]
  inclusions: string[]
  exclusions: string[]
  price: string
  originalPrice?: string
  className?: string
}

export function TourHighlights({ 
  highlights, 
  inclusions, 
  exclusions, 
  price, 
  originalPrice,
  className 
}: TourHighlightsProps) {
  return (
    <div className={cn("w-full", className)}>
      {/* Desktop Highlights Sidebar */}
      <div className="hidden lg:block">
        <div className="w-[713px] bg-white border border-[#E8E8E8] rounded-[25px] p-[90px_90px_89px_76px]">
          {/* Tour Highlights Section */}
          <div className="mb-[64px]">
            <h3 className="font-thunder text-[50px] leading-[0.92] text-[#242424] text-center mb-[32px]">
              Tour Highlights
            </h3>
            
            <div className="space-y-[16px]">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-[12px]">
                  <div className="w-[6px] h-[6px] bg-[#242424] rounded-full mt-[8px] flex-shrink-0" />
                  <p className="font-onest text-[16px] leading-[1.4] text-[#242424]">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Price Section */}
          <div className="mb-[32px] text-center">
            <div className="space-y-[8px]">
              {originalPrice && (
                <p className="font-onest text-[18px] line-through text-[#ADADAD]">
                  {originalPrice}
                </p>
              )}
              <p className="font-thunder text-[36px] leading-[0.92] text-[#242424]">
                {price}
              </p>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="space-y-[16px]">
            <Button className="w-full h-[52px] bg-[#242424] text-white font-onest text-[16px] hover:bg-[#1a1a1a]">
              Book Now
            </Button>
            <Button variant="outline" className="w-full h-[52px] border-[#242424] text-[#242424] font-onest text-[16px] hover:bg-[#f5f5f5]">
              Download Brochure
            </Button>
            <Button variant="outline" className="w-full h-[52px] border-[#242424] text-[#242424] font-onest text-[16px] hover:bg-[#f5f5f5]">
              Enquire Now
            </Button>
          </div>
          
          {/* Inclusions */}
          <div className="mt-[32px]">
            <h4 className="font-thunder text-[20px] leading-[0.92] text-[#242424] mb-[16px]">
              Tour Includes
            </h4>
            <div className="space-y-[8px]">
              {inclusions.slice(0, 4).map((inclusion, index) => (
                <div key={index} className="flex items-start gap-[8px]">
                  <svg className="w-[16px] h-[16px] mt-[2px] text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="font-onest text-[14px] leading-[1.4] text-[#242424]">
                    {inclusion}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Highlights - Will be shown in tab content */}
      <div className="lg:hidden">
        <div className="space-y-[24px]">
          {/* Tour Highlights */}
          <div>
            <h3 className="font-thunder text-[24px] leading-[0.92] text-[#242424] mb-[16px]">
              Tour Highlights
            </h3>
            <div className="space-y-[12px]">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-[8px]">
                  <div className="w-[4px] h-[4px] bg-[#242424] rounded-full mt-[6px] flex-shrink-0" />
                  <p className="font-onest text-[13px] leading-[1.4] text-[#242424]">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Price and Actions */}
          <div className="bg-[#F9F9F9] p-[24px] rounded-[9px]">
            <div className="text-center mb-[24px]">
              {originalPrice && (
                <p className="font-onest text-[16px] line-through text-[#ADADAD]">
                  {originalPrice}
                </p>
              )}
              <p className="font-thunder text-[28px] leading-[0.92] text-[#242424]">
                {price}
              </p>
            </div>
            
            <div className="space-y-[12px]">
              <Button className="w-full h-[44px] bg-[#242424] text-white font-onest text-[14px] hover:bg-[#1a1a1a]">
                Book Now
              </Button>
              <div className="flex gap-[8px]">
                <Button variant="outline" className="flex-1 h-[36px] border-[#242424] text-[#242424] font-onest text-[12px] hover:bg-[#f5f5f5]">
                  Brochure
                </Button>
                <Button variant="outline" className="flex-1 h-[36px] border-[#242424] text-[#242424] font-onest text-[12px] hover:bg-[#f5f5f5]">
                  Enquire
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}