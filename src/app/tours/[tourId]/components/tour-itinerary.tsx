'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'

interface ItineraryDay {
  day: number
  title: string
  location: string
  description: string
  activities: string[]
  meals: string[]
  accommodation: string
}

interface TourItineraryProps {
  itinerary: ItineraryDay[]
  className?: string
}

export function TourItinerary({ itinerary, className }: TourItineraryProps) {
  const [expandedDays, setExpandedDays] = useState<Set<number>>(new Set([1]))
  const [expandAll, setExpandAll] = useState(false)

  const toggleDay = (day: number) => {
    const newExpanded = new Set(expandedDays)
    if (newExpanded.has(day)) {
      newExpanded.delete(day)
    } else {
      newExpanded.add(day)
    }
    setExpandedDays(newExpanded)
  }

  const handleExpandAll = () => {
    if (expandAll) {
      setExpandedDays(new Set())
    } else {
      setExpandedDays(new Set(itinerary.map(day => day.day)))
    }
    setExpandAll(!expandAll)
  }

  return (
    <div className={cn("w-full", className)}>
      {/* Desktop Itinerary */}
      <div className="hidden lg:block">
        <div className="flex items-center justify-between mb-[25px]">
          <h2 className="font-thunder font-medium text-[50px] leading-[0.92] text-[#242424]">
            Day by Day Itinerary
          </h2>
          
          {/* Expand All button */}
          <button
            onClick={handleExpandAll}
            className="font-onest font-normal text-[18px] leading-[1.275] text-[#242424] hover:underline"
          >
            {expandAll ? 'Collapse All' : 'Expand All'}
          </button>
        </div>
        
        <div className="space-y-[25px]">
          {itinerary.map((day, index) => {
            const isExpanded = expandedDays.has(day.day)
            const isFirstDay = index === 0
            
            return (
              <div key={day.day} className="relative">
                {/* Expanded Day with black background */}
                {isExpanded && (
                  <div className={cn(
                    "relative",
                    isFirstDay ? "h-[148px]" : "h-[56px]"
                  )}>
                    {/* Black background bar */}
                    <div className={cn(
                      "absolute bg-[#242424] rounded-[8px]",
                      isFirstDay ? "top-[44px] h-[56px]" : "top-0 h-[56px]",
                      "left-0 right-0"
                    )} />
                    
                    {/* Day Title - White text on black background */}
                    <button
                      onClick={() => toggleDay(day.day)}
                      className={cn(
                        "absolute flex items-center justify-between w-full h-[56px] px-[43px]",
                        isFirstDay ? "top-[44px]" : "top-0"
                      )}
                    >
                      <h3 className="font-onest font-bold text-[20px] leading-[1.275] text-white uppercase">
                        Day {day.day} : {day.location}
                      </h3>
                      
                      {/* Minus icon for expanded state */}
                      <svg width="25" height="2" viewBox="0 0 25 2" fill="none">
                        <line y1="1" x2="25" y2="1" stroke="white" strokeWidth="2"/>
                      </svg>
                    </button>
                    
                    {/* Description below black bar */}
                    {isFirstDay && (
                      <p className="absolute left-[68px] top-[125px] font-onest font-normal text-[18px] leading-[1.275] text-[#242424] max-w-[664px]">
                        {day.description}
                      </p>
                    )}
                  </div>
                )}
                
                {/* Collapsed Day */}
                {!isExpanded && (
                  <button
                    onClick={() => toggleDay(day.day)}
                    className="w-full h-[56px] flex items-center justify-between px-[43px] border border-[#DCDCDC] rounded-[9px] hover:bg-[#F9F9F9] transition-colors"
                  >
                    <h3 className="font-onest font-bold text-[20px] leading-[1.275] text-[#242424] uppercase">
                      Day {day.day} : {day.location}
                    </h3>
                    
                    {/* Plus icon for collapsed state */}
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                      <line x1="12.5" y1="1" x2="12.5" y2="24" stroke="#242424" strokeWidth="2"/>
                      <line y1="12.5" x2="25" y2="12.5" stroke="#242424" strokeWidth="2"/>
                    </svg>
                  </button>
                )}
                
                {/* Expanded content for non-first days */}
                {isExpanded && !isFirstDay && (
                  <div className="mt-[16px] px-[68px]">
                    <p className="font-onest font-normal text-[18px] leading-[1.275] text-[#242424] max-w-[664px]">
                      {day.description}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
      
      {/* Mobile Itinerary */}
      <div className="lg:hidden">
        <h2 className="font-thunder text-[24px] leading-[0.92] text-[#242424] mb-[19px]">
          Day by Day Itinerary
        </h2>
        
        <div className="space-y-[12px]">
          {itinerary.map((day) => (
            <div key={day.day} className="border border-[#E8E8E8] rounded-[9px] overflow-hidden">
              {/* Day Header */}
              <button
                onClick={() => toggleDay(day.day)}
                className="w-full flex items-center justify-between px-[16px] py-[16px] text-left"
              >
                <div className="flex items-center gap-[16px]">
                  <div className="w-[32px] h-[32px] bg-[#242424] text-white rounded-full flex items-center justify-center font-thunder text-[14px]">
                    {day.day}
                  </div>
                  <div>
                    <h3 className="font-thunder text-[16px] leading-[0.92] text-[#242424] mb-[2px]">
                      Day {day.day}
                    </h3>
                    <p className="font-onest text-[12px] text-[#666666]">
                      {day.location}
                    </p>
                  </div>
                </div>
                
                <svg 
                  className={cn(
                    "w-[16px] h-[16px] text-[#242424] transition-transform",
                    expandedDays.has(day.day) ? "rotate-180" : ""
                  )} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Day Content */}
              {expandedDay === day.day && (
                <div className="px-[16px] pb-[16px] border-t border-[#E8E8E8]">
                  <div className="pt-[16px]">
                    <h4 className="font-thunder text-[14px] leading-[0.92] text-[#242424] mb-[8px]">
                      {day.title}
                    </h4>
                    <p className="font-onest text-[13px] leading-[1.275] text-[#242424] mb-[12px]">
                      {day.description}
                    </p>
                    
                    {/* Activities */}
                    {day.activities.length > 0 && (
                      <div className="mb-[12px]">
                        <p className="font-onest font-semibold text-[12px] text-[#242424] mb-[4px]">
                          Activities:
                        </p>
                        <div className="space-y-[2px]">
                          {day.activities.map((activity, idx) => (
                            <p key={idx} className="font-onest text-[12px] text-[#666666] flex items-start gap-[6px]">
                              <span className="text-[#242424]">•</span>
                              {activity}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Meals & Accommodation */}
                    <div className="space-y-[4px] text-[12px]">
                      {day.meals.length > 0 && (
                        <div>
                          <span className="font-onest font-semibold text-[#242424]">Meals: </span>
                          <span className="font-onest text-[#666666]">{day.meals.join(', ')}</span>
                        </div>
                      )}
                      <div>
                        <span className="font-onest font-semibold text-[#242424]">Stay: </span>
                        <span className="font-onest text-[#666666]">{day.accommodation}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}