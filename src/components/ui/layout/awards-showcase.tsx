'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { AwardCard } from '@/components/ui/cards/award-card'

interface Award {
  id: string
  title: string
  description?: string
  image: string
  year: string
  organization: string
  category?: string
  featured?: boolean
  region?: string
  type?: 'service' | 'innovation' | 'sustainability' | 'excellence' | 'recognition'
}

interface AwardsShowcaseProps {
  awards: Award[]
  title?: string
  subtitle?: string
  columns?: 2 | 3 | 4
  showFilters?: boolean
  showSearch?: boolean
  showYearFilter?: boolean
  showLoadMore?: boolean
  itemsPerPage?: number
  onAwardClick?: (award: Award) => void
  className?: string
}

export function AwardsShowcase({
  awards,
  title = "Awards & Recognition",
  subtitle = "We're proud to be recognized for our commitment to excellence in travel services",
  columns = 3,
  showFilters = true,
  showSearch = true,
  showYearFilter = true,
  showLoadMore = true,
  itemsPerPage = 9,
  onAwardClick,
  className
}: AwardsShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedYear, setSelectedYear] = useState<string>('all')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [displayCount, setDisplayCount] = useState(itemsPerPage)

  // Get unique values for filters
  const categories = Array.from(new Set(awards.map(award => award.category).filter(Boolean))).sort()
  const years = Array.from(new Set(awards.map(award => award.year))).sort((a, b) => b.localeCompare(a))
  const types = Array.from(new Set(awards.map(award => award.type).filter(Boolean))).sort()

  // Filter awards
  const filteredAwards = awards.filter(award => {
    const matchesCategory = selectedCategory === 'all' || award.category === selectedCategory
    const matchesYear = selectedYear === 'all' || award.year === selectedYear
    const matchesType = selectedType === 'all' || award.type === selectedType
    const matchesSearch = searchQuery === '' || 
      award.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      award.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      award.description?.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesCategory && matchesYear && matchesType && matchesSearch
  })

  // Sort awards: featured first, then by year (newest first)
  const sortedAwards = [...filteredAwards].sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return b.year.localeCompare(a.year)
  })

  // Get awards to display based on load more functionality
  const displayedAwards = showLoadMore 
    ? sortedAwards.slice(0, displayCount)
    : sortedAwards

  const hasMoreAwards = displayCount < sortedAwards.length

  const loadMoreAwards = () => {
    setDisplayCount(prev => Math.min(prev + itemsPerPage, sortedAwards.length))
  }

  const clearFilters = () => {
    setSelectedCategory('all')
    setSelectedYear('all')
    setSelectedType('all')
    setSearchQuery('')
    setDisplayCount(itemsPerPage)
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

  const activeFiltersCount = [selectedCategory, selectedYear, selectedType].filter(f => f !== 'all').length + (searchQuery ? 1 : 0)

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

          {/* Search and Filters */}
          {(showSearch || showFilters) && (
            <div className="mb-8 sm:mb-12">
              {/* Search Bar */}
              {showSearch && (
                <div className="mb-6 sm:mb-8">
                  <div className="max-w-md mx-auto relative">
                    <svg 
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#666666]"
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                      type="text"
                      placeholder="Search awards, organizations, or descriptions..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className={cn(
                        "w-full border border-[#DDDDDD] rounded-[8px] pl-10 pr-4 py-3",
                        "font-onest text-[#242424] placeholder:text-[#888888]",
                        "focus:outline-none focus:border-[#0066CC] focus:ring-2 focus:ring-blue-200",
                        "text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px]"
                      )}
                    />
                  </div>
                </div>
              )}

              {/* Filter Controls */}
              {showFilters && (
                <div className="space-y-4 sm:space-y-6">
                  {/* Filter Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Category Filter */}
                    {categories.length > 0 && (
                      <div>
                        <label className={cn(
                          "block font-onest font-medium text-[#242424] mb-2",
                          "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px]"
                        )}>
                          Category
                        </label>
                        <select
                          value={selectedCategory}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className={cn(
                            "w-full border border-[#DDDDDD] rounded-[6px] px-3 py-2",
                            "font-onest text-[#242424] focus:outline-none focus:border-[#0066CC]",
                            "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px]"
                          )}
                        >
                          <option value="all">All Categories</option>
                          {categories.map(category => (
                            <option key={category} value={category}>
                              {category}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}

                    {/* Year Filter */}
                    {showYearFilter && years.length > 0 && (
                      <div>
                        <label className={cn(
                          "block font-onest font-medium text-[#242424] mb-2",
                          "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px]"
                        )}>
                          Year
                        </label>
                        <select
                          value={selectedYear}
                          onChange={(e) => setSelectedYear(e.target.value)}
                          className={cn(
                            "w-full border border-[#DDDDDD] rounded-[6px] px-3 py-2",
                            "font-onest text-[#242424] focus:outline-none focus:border-[#0066CC]",
                            "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px]"
                          )}
                        >
                          <option value="all">All Years</option>
                          {years.map(year => (
                            <option key={year} value={year}>
                              {year}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}

                    {/* Type Filter */}
                    {types.length > 0 && (
                      <div>
                        <label className={cn(
                          "block font-onest font-medium text-[#242424] mb-2",
                          "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px]"
                        )}>
                          Type
                        </label>
                        <select
                          value={selectedType}
                          onChange={(e) => setSelectedType(e.target.value)}
                          className={cn(
                            "w-full border border-[#DDDDDD] rounded-[6px] px-3 py-2",
                            "font-onest text-[#242424] focus:outline-none focus:border-[#0066CC]",
                            "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px]"
                          )}
                        >
                          <option value="all">All Types</option>
                          {types.map(type => (
                            <option key={type} value={type}>
                              {type.charAt(0).toUpperCase() + type.slice(1)}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}

                    {/* Clear Filters */}
                    {activeFiltersCount > 0 && (
                      <div className="flex items-end">
                        <button
                          onClick={clearFilters}
                          className={cn(
                            "w-full bg-gray-100 text-[#666666] hover:bg-gray-200 hover:text-[#242424] transition-colors",
                            "font-onest font-medium rounded-[6px] px-3 py-2",
                            "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px]"
                          )}
                        >
                          Clear All ({activeFiltersCount})
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Results Count */}
          <div className="mb-6 sm:mb-8">
            <p className={cn(
              "font-onest text-[#666666] text-center",
              // Responsive font size
              "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]"
            )}>
              Showing {displayedAwards.length} of {sortedAwards.length} awards
              {activeFiltersCount > 0 && ` (${activeFiltersCount} filter${activeFiltersCount > 1 ? 's' : ''} applied)`}
            </p>
          </div>

          {/* Awards Grid */}
          {displayedAwards.length > 0 ? (
            <div className={getGridClasses()}>
              {displayedAwards.map(award => (
                <div
                  key={award.id}
                  className={cn(
                    "transition-transform duration-300 hover:scale-[1.02]",
                    onAwardClick && "cursor-pointer"
                  )}
                  onClick={() => onAwardClick?.(award)}
                >
                  <AwardCard
                    id={award.id}
                    title={award.title}
                    description={award.description}
                    image={award.image}
                    year={award.year}
                    organization={award.organization}
                    category={award.category}
                    className={cn(
                      award.featured && "ring-2 ring-[#FFD700] ring-offset-4"
                    )}
                  />
                  
                  {/* Featured Badge */}
                  {award.featured && (
                    <div className="relative -mt-4 flex justify-center">
                      <span className={cn(
                        "bg-[#FFD700] text-[#242424] font-onest font-bold rounded-full",
                        "px-[8px] py-[2px] sm:px-[10px] sm:py-[3px] md:px-[12px] md:py-[4px]",
                        "text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px]"
                      )}>
                        ⭐ FEATURED AWARD
                      </span>
                    </div>
                  )}
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
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" 
                />
              </svg>
              <h3 className={cn(
                "font-thunder font-medium text-[#242424] mb-2",
                "text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]"
              )}>
                No awards found
              </h3>
              <p className={cn(
                "font-onest text-[#666666] max-w-md mx-auto mb-4",
                "text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px]"
              )}>
                No awards match your current search and filter criteria. Try adjusting your filters or search terms.
              </p>
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearFilters}
                  className={cn(
                    "font-onest font-medium bg-[#0066CC] text-white hover:bg-[#004499] transition-colors",
                    "px-[16px] py-[8px] sm:px-[20px] sm:py-[10px] rounded-[6px] sm:rounded-[8px]",
                    "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px]"
                  )}
                >
                  Clear All Filters
                </button>
              )}
            </div>
          )}

          {/* Load More Button */}
          {showLoadMore && hasMoreAwards && (
            <div className="text-center mt-8 sm:mt-12">
              <button
                onClick={loadMoreAwards}
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
                <span>Load More Awards</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              <p className={cn(
                "font-onest text-[#888888] mt-3",
                "text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px]"
              )}>
                {sortedAwards.length - displayCount} more awards available
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}