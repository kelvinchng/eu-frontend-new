'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface TourTabsProps {
  activeTab: string
  onTabChange: (tab: string) => void
  className?: string
}

const tabs = [
  { id: 'itinerary', label: 'Itinerary' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'tour-photos', label: 'Tour Photos' },
  { id: 'faq', label: 'FAQ' },
]

export function TourTabs({ activeTab, onTabChange, className }: TourTabsProps) {
  return (
    <div className={cn("w-full", className)}>
      {/* Desktop Tabs */}
      <div className="hidden lg:block">
        <div className="flex items-center gap-[28px]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "w-[245px] h-[56px] rounded-[8px] border border-[#242424] font-onest font-normal text-[18px] leading-[1.275] transition-colors",
                activeTab === tab.id
                  ? "bg-[#242424] text-white"
                  : "bg-white text-[#242424] hover:bg-[#f5f5f5]"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* Mobile Tabs */}
      <div className="lg:hidden flex justify-center">
        <div className="relative w-[311px]">
          {/* Tabs Container */}
          <div className="flex items-center justify-between h-[31px]">
            <button
              onClick={() => onTabChange('itinerary')}
              className={cn(
                "font-onest text-[14px] leading-[1.275]",
                activeTab === 'itinerary'
                  ? "text-[#242424] font-bold"
                  : "text-[#242424] font-normal"
              )}
            >
              Itinerary
            </button>
            
            <button
              onClick={() => onTabChange('testimonials')}
              className={cn(
                "font-onest text-[14px] leading-[1.275]",
                activeTab === 'testimonials'
                  ? "text-[#242424] font-bold"
                  : "text-[#242424] font-normal"
              )}
            >
              Testimonials
            </button>
            
            <button
              onClick={() => onTabChange('tour-photos')}
              className={cn(
                "font-onest text-[14px] leading-[1.275]",
                activeTab === 'tour-photos'
                  ? "text-[#242424] font-bold"
                  : "text-[#242424] font-normal"
              )}
            >
              Tour Photos
            </button>
            
            <button
              onClick={() => onTabChange('faq')}
              className={cn(
                "font-onest text-[14px] leading-[1.275]",
                activeTab === 'faq'
                  ? "text-[#242424] font-bold"
                  : "text-[#242424] font-normal"
              )}
            >
              FAQ
            </button>
          </div>
          
          {/* Active Tab Underline */}
          <div 
            className="absolute bottom-0 h-[2px] bg-[#242424] transition-all duration-300"
            style={{
              left: activeTab === 'itinerary' ? '0px' :
                    activeTab === 'testimonials' ? '79px' :
                    activeTab === 'tour-photos' ? '181px' : '283px',
              width: activeTab === 'itinerary' ? '57px' :
                     activeTab === 'testimonials' ? '80px' :
                     activeTab === 'tour-photos' ? '80px' : '28px'
            }}
          />
        </div>
      </div>
    </div>
  )
}