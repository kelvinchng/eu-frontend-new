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
  const [expandedDay, setExpandedDay] = useState<number | null>(1)

  const toggleDay = (day: number) => {
    setExpandedDay(expandedDay === day ? null : day)
  }

  return (
    <div className={cn("w-full", className)}>
      {/* Desktop Itinerary */}
      <div className="hidden lg:block">
        <h2 className="font-thunder text-[50px] leading-[0.92] text-[#242424] mb-[25px]">
          Day by Day Itinerary
        </h2>
        
        <div className="space-y-[8px]">
          {itinerary.map((day, index) => (
            <div key={day.day} className={cn(
              "border border-[#DCDCDC] rounded-[9px] overflow-hidden",
              expandedDay === day.day ? "border-[#242424]" : ""
            )}>
              {/* Day Header */}
              <button
                onClick={() => toggleDay(day.day)}
                className={cn(
                  "w-full h-[100px] flex items-center justify-between px-[32px] py-[24px] text-left transition-colors",
                  expandedDay === day.day ? "bg-[#F9F9F9]" : "hover:bg-[#F9F9F9]"
                )}
              >
                <div className="flex items-center gap-[24px]">
                  <div className="w-[48px] h-[48px] bg-[#242424] text-white rounded-full flex items-center justify-center font-thunder text-[18px]">
                    {day.day}
                  </div>
                  <div>
                    <h3 className="font-thunder text-[24px] leading-[0.92] text-[#242424] mb-[4px]">
                      {day.title}
                    </h3>
                    <p className="font-onest text-[14px] text-[#666666]">
                      {day.location}
                    </p>
                  </div>
                </div>
                
                <svg 
                  className={cn(
                    "w-[24px] h-[24px] text-[#242424] transition-transform",
                    expandedDay === day.day ? "rotate-180" : ""
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
                <div className="px-[68px] pb-[32px]">
                  {/* Description */}
                  <div className="mb-[24px]">
                    <p className="font-onest text-[18px] leading-[1.275] text-[#242424] max-w-[664px]">
                      {day.description}
                    </p>
                  </div>
                  
                  {/* Activities */}
                  {day.activities.length > 0 && (
                    <div className="mb-[16px]">
                      <h4 className="font-onest font-semibold text-[16px] text-[#242424] mb-[8px]">
                        Activities:
                      </h4>
                      <ul className="space-y-[4px]">
                        {day.activities.map((activity, idx) => (
                          <li key={idx} className="font-onest text-[16px] text-[#666666] flex items-start gap-[8px]">
                            <span className="text-[#242424]">•</span>
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Meals & Accommodation */}
                  <div className="flex gap-[32px] text-[14px]">
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
              )}
            </div>
          ))}
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
                    expandedDay === day.day ? "rotate-180" : ""
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