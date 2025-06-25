'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { ExpertCard } from '@/components/ui/cards/expert-card'

interface Expert {
  id: string
  name: string
  title: string
  image: string
  bio?: string
  email?: string
  phone?: string
  specialization?: string[]
  experience?: string
  languages?: string[]
  certifications?: string[]
  featured?: boolean
}

interface ExpertGridProps {
  experts: Expert[]
  title?: string
  subtitle?: string
  columns?: 2 | 3 | 4
  showFilters?: boolean
  showLoadMore?: boolean
  itemsPerPage?: number
  onExpertClick?: (expert: Expert) => void
  className?: string
}

export function ExpertGrid({
  experts,
  title = "Meet Our Travel Experts",
  subtitle = "Our experienced team is here to help you plan the perfect journey",
  columns = 3,
  showFilters = true,
  showLoadMore = true,
  itemsPerPage = 6,
  onExpertClick,
  className
}: ExpertGridProps) {
  const [selectedSpecialization, setSelectedSpecialization] = useState<string>('all')
  const [displayCount, setDisplayCount] = useState(itemsPerPage)

  // Get unique specializations for filter
  const specializations = Array.from(
    new Set(
      experts.flatMap(expert => expert.specialization || [])
    )
  ).sort()

  // Filter experts based on selected specialization
  const filteredExperts = selectedSpecialization === 'all'
    ? experts
    : experts.filter(expert => 
        expert.specialization?.includes(selectedSpecialization)
      )

  // Get experts to display based on load more functionality
  const displayedExperts = showLoadMore 
    ? filteredExperts.slice(0, displayCount)
    : filteredExperts

  const hasMoreExperts = displayCount < filteredExperts.length

  const loadMoreExperts = () => {
    setDisplayCount(prev => Math.min(prev + itemsPerPage, filteredExperts.length))
  }

  const getGridClasses = () => {
    const baseClasses = "grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 2xl:gap-16"
    
    switch (columns) {
      case 2:
        return cn(baseClasses, "grid-cols-1 sm:grid-cols-2")
      case 3:
        return cn(baseClasses, "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3")
      case 4:
        return cn(baseClasses, "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4")
      default:
        return cn(baseClasses, "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3")
    }
  }

  return (
    <div className={cn("w-full", className)}>
      <div className="w-full max-w-[1920px] mx-auto">
        <div className={cn(
          // Responsive padding
          "px-[16px] sm:px-[20px] md:px-[24px] lg:px-[28px] xl:px-[32px] 2xl:px-[36px]",
          "py-[32px] sm:py-[40px] md:py-[48px] lg:py-[56px] xl:py-[64px] 2xl:py-[72px]"
        )}>
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className={cn(
              "font-thunder font-medium text-[#242424] mb-4 sm:mb-6",
              // Responsive font size
              "text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px]",
              // Responsive line height
              "leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[40px] xl:leading-[44px] 2xl:leading-[48px]"
            )}>
              {title}
            </h2>
            <p className={cn(
              "font-onest text-[#666666] max-w-3xl mx-auto",
              // Responsive font size
              "text-[12px] sm:text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[19px]",
              // Responsive line height
              "leading-[16px] sm:leading-[20px] md:leading-[22px] lg:leading-[24px] xl:leading-[26px] 2xl:leading-[28px]"
            )}>
              {subtitle}
            </p>
          </div>

          {/* Filters */}
          {showFilters && specializations.length > 0 && (
            <div className="mb-8 sm:mb-12">
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
                <button
                  onClick={() => setSelectedSpecialization('all')}
                  className={cn(
                    "font-onest font-medium transition-all duration-200",
                    // Responsive padding and border radius
                    "px-[12px] py-[6px] sm:px-[16px] sm:py-[8px] md:px-[20px] md:py-[10px] lg:px-[24px] lg:py-[12px]",
                    "rounded-[20px] sm:rounded-[24px] md:rounded-[28px] lg:rounded-[32px]",
                    // Responsive font size
                    "text-[11px] sm:text-[12px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px]",
                    selectedSpecialization === 'all'
                      ? "bg-[#0066CC] text-white"
                      : "bg-[#F5F5F5] text-[#666666] hover:bg-[#E5E5E5] hover:text-[#242424]"
                  )}
                >
                  All Experts ({experts.length})
                </button>
                
                {specializations.map(spec => {
                  const count = experts.filter(expert => 
                    expert.specialization?.includes(spec)
                  ).length
                  
                  return (
                    <button
                      key={spec}
                      onClick={() => setSelectedSpecialization(spec)}
                      className={cn(
                        "font-onest font-medium transition-all duration-200",
                        // Responsive padding and border radius
                        "px-[12px] py-[6px] sm:px-[16px] sm:py-[8px] md:px-[20px] md:py-[10px] lg:px-[24px] lg:py-[12px]",
                        "rounded-[20px] sm:rounded-[24px] md:rounded-[28px] lg:rounded-[32px]",
                        // Responsive font size
                        "text-[11px] sm:text-[12px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px]",
                        selectedSpecialization === spec
                          ? "bg-[#0066CC] text-white"
                          : "bg-[#F5F5F5] text-[#666666] hover:bg-[#E5E5E5] hover:text-[#242424]"
                      )}
                    >
                      {spec} ({count})
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* Results Count */}
          <div className="mb-6 sm:mb-8">
            <p className={cn(
              "font-onest text-[#666666] text-center",
              // Responsive font size
              "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]"
            )}>
              Showing {displayedExperts.length} of {filteredExperts.length} experts
              {selectedSpecialization !== 'all' && ` specializing in ${selectedSpecialization}`}
            </p>
          </div>

          {/* Expert Grid */}
          {displayedExperts.length > 0 ? (
            <div className={getGridClasses()}>
              {displayedExperts.map(expert => (
                <div
                  key={expert.id}
                  className={cn(
                    "transition-transform duration-300 hover:scale-[1.02]",
                    onExpertClick && "cursor-pointer"
                  )}
                  onClick={() => onExpertClick?.(expert)}
                >
                  <ExpertCard
                    name={expert.name}
                    description={expert.title}
                    reviews={0}
                    image={expert.image}
                    imageWidth={300}
                    imageHeight={400}
                    imageTop={0}
                    imageLeft={0}
                    className={cn(
                      expert.featured && "ring-2 ring-[#0066CC] ring-offset-4"
                    )}
                  />
                  
                  {/* Featured Badge */}
                  {expert.featured && (
                    <div className="relative -mt-4 flex justify-center">
                      <span className={cn(
                        "bg-[#0066CC] text-white font-onest font-bold rounded-full",
                        "px-[8px] py-[2px] sm:px-[10px] sm:py-[3px] md:px-[12px] md:py-[4px]",
                        "text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px]"
                      )}>
                        FEATURED EXPERT
                      </span>
                    </div>
                  )}

                  {/* Additional Info (shown on hover or always visible) */}
                  <div className={cn(
                    "mt-3 sm:mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                    "lg:opacity-100" // Always visible on larger screens
                  )}>
                    {expert.experience && (
                      <p className={cn(
                        "font-onest text-[#888888] text-center mb-2",
                        "text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px]"
                      )}>
                        {expert.experience} experience
                      </p>
                    )}
                    
                    {expert.languages && expert.languages.length > 0 && (
                      <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
                        {expert.languages.slice(0, 3).map((language, index) => (
                          <span
                            key={index}
                            className={cn(
                              "bg-[#F0F8FF] text-[#0066CC] font-onest rounded-full",
                              "px-[6px] py-[1px] sm:px-[8px] sm:py-[2px]",
                              "text-[7px] sm:text-[8px] md:text-[9px]"
                            )}
                          >
                            {language}
                          </span>
                        ))}
                        {expert.languages.length > 3 && (
                          <span className={cn(
                            "text-[#888888] font-onest",
                            "text-[7px] sm:text-[8px] md:text-[9px]"
                          )}>
                            +{expert.languages.length - 3}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* No Results */
            <div className="text-center py-12 sm:py-16 md:py-20">
              <svg 
                className="w-16 h-16 sm:w-20 sm:h-20 text-[#CCCCCC] mx-auto mb-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" 
                />
              </svg>
              <h3 className={cn(
                "font-thunder font-medium text-[#242424] mb-2",
                "text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]"
              )}>
                No experts found
              </h3>
              <p className={cn(
                "font-onest text-[#666666] max-w-md mx-auto",
                "text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px]"
              )}>
                No experts match the selected specialization. Try selecting a different category.
              </p>
              <button
                onClick={() => setSelectedSpecialization('all')}
                className={cn(
                  "mt-4 font-onest font-medium bg-[#0066CC] text-white hover:bg-[#004499] transition-colors",
                  "px-[16px] py-[8px] sm:px-[20px] sm:py-[10px] rounded-[6px] sm:rounded-[8px]",
                  "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px]"
                )}
              >
                Show All Experts
              </button>
            </div>
          )}

          {/* Load More Button */}
          {showLoadMore && hasMoreExperts && (
            <div className="text-center mt-8 sm:mt-12">
              <button
                onClick={loadMoreExperts}
                className={cn(
                  "font-onest font-medium bg-[#0066CC] text-white hover:bg-[#004499] transition-all duration-200",
                  "flex items-center gap-2 mx-auto",
                  // Responsive padding and border radius
                  "px-[24px] py-[12px] sm:px-[32px] sm:py-[14px] md:px-[36px] md:py-[16px] lg:px-[40px] lg:py-[18px]",
                  "rounded-[8px] sm:rounded-[10px] md:rounded-[12px] lg:rounded-[14px]",
                  // Responsive font size
                  "text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px]"
                )}
              >
                <span>Load More Experts</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              <p className={cn(
                "font-onest text-[#888888] mt-3",
                "text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px]"
              )}>
                {filteredExperts.length - displayCount} more experts available
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}