'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { Plus, Minus } from 'lucide-react'

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

  // Format the title with meals info
  const formatDayTitle = (day: ItineraryDay) => {
    const mealsInfo = day.meals.length > 0 ? ` (${day.meals.join(', ')})` : ''
    return `Day ${day.day} : ${day.location}${mealsInfo}`
  }

  return (
    <div className={cn("w-full", className)}>
      {/* Desktop Itinerary */}
      <div className="hidden lg:block">
        <div className="mb-[25px]">
          <h2 className="font-thunder font-medium text-[50px] leading-[0.92] text-[#242424]">
            Day by Day Itinerary
          </h2>
        </div>
        
        <div className="space-y-[25px]">
          {itinerary.map((day, index) => {
            const isExpanded = expandedDays.has(day.day)
            const isFirstDay = index === 0
            
            return (
              <div key={day.day} className="relative">
                {/* Expanded Day 1 - Special Layout */}
                {isExpanded && isFirstDay && (
                  <div className="relative h-[148px]">
                    {/* Expand All button - positioned at top right */}
                    <button
                      onClick={handleExpandAll}
                      className="absolute right-0 top-0 font-onest font-normal text-[18px] leading-[1.275] text-[#242424] hover:underline"
                    >
                      {expandAll ? 'Collapse All' : 'Expand All'}
                    </button>
                    
                    {/* Black background bar at position 44px from top */}
                    <div className="absolute top-[44px] left-0 right-0 h-[56px] bg-[#242424] rounded-[8px]" />
                    
                    {/* Day Title - White text on black background */}
                    <div className="absolute top-[44px] left-0 right-0 h-[56px] flex items-center justify-between px-[43px]">
                      <h3 className="font-onest font-bold text-[20px] leading-[1.275] text-white uppercase">
                        {formatDayTitle(day)}
                      </h3>
                      
                      {/* Minus icon */}
                      <button onClick={() => toggleDay(day.day)} className="p-2">
                        <Minus className="w-6 h-6 text-white" />
                      </button>
                    </div>
                    
                    {/* Description below black bar */}
                    <p className="absolute left-[68px] top-[125px] font-onest font-normal text-[18px] leading-[1.275] text-[#242424] max-w-[664px]">
                      {day.description}
                    </p>
                  </div>
                )}
                
                {/* Expanded Other Days */}
                {isExpanded && !isFirstDay && (
                  <div>
                    {/* Black background bar */}
                    <div className="relative h-[56px] bg-[#242424] rounded-[8px]">
                      {/* Day Title - White text on black background */}
                      <div className="absolute inset-0 flex items-center justify-between px-[43px]">
                        <h3 className="font-onest font-bold text-[20px] leading-[1.275] text-white uppercase">
                          {formatDayTitle(day)}
                        </h3>
                        
                        {/* Minus icon */}
                        <button onClick={() => toggleDay(day.day)} className="p-2">
                          <Minus className="w-6 h-6 text-white" />
                        </button>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="mt-[25px] ml-[68px] font-onest font-normal text-[18px] leading-[1.275] text-[#242424] max-w-[664px]">
                      {day.description}
                    </p>
                  </div>
                )}
                
                {/* Collapsed Day */}
                {!isExpanded && (
                  <button
                    onClick={() => toggleDay(day.day)}
                    className="w-full h-[56px] flex items-center justify-between px-[46px] border border-[#DCDCDC] rounded-[9px] hover:bg-[#F9F9F9] transition-colors"
                  >
                    <h3 className="font-onest font-bold text-[20px] leading-[1.275] text-[#242424] uppercase">
                      {formatDayTitle(day)}
                    </h3>
                    
                    {/* Plus icon */}
                    <Plus className="w-5 h-5 text-[#242424]" />
                  </button>
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
              {expandedDays.has(day.day) && (
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