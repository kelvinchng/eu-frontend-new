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
                "w-[245px] h-[56px] font-onest text-[18px] leading-[1.275] border-b-2 transition-colors",
                activeTab === tab.id
                  ? "text-[#242424] border-[#242424] font-semibold"
                  : "text-[#ADADAD] border-transparent hover:text-[#242424]"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* Mobile Tabs */}
      <div className="lg:hidden">
        <div className="relative">
          {/* Tabs Container */}
          <div className="flex items-center">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={cn(
                  "font-onest text-[14px] leading-[1.275] py-[8px] relative",
                  index === 0 ? "pr-[22px]" : "px-[22px]",
                  activeTab === tab.id
                    ? "text-[#242424] font-bold"
                    : "text-[#242424] font-normal"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
          
          {/* Active Tab Underline */}
          <div 
            className="absolute bottom-0 h-[2px] bg-[#242424] transition-all duration-300"
            style={{
              left: activeTab === 'itinerary' ? '0px' :
                    activeTab === 'testimonials' ? '57px' :
                    activeTab === 'tour-photos' ? '159px' : '261px',
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