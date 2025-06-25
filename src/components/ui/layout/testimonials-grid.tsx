'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { TestimonialCard } from '@/components/ui/cards/testimonial-card'

interface Testimonial {
  id: string
  name: string
  location: string
  avatar: string
  rating: number
  review: string
  date: string
  tourName?: string
  destination?: string
  verifiedBooking?: boolean
  featured?: boolean
  helpful?: number
  platform?: 'google' | 'facebook' | 'tripadvisor' | 'website'
}

interface TestimonialsGridProps {
  testimonials: Testimonial[]
  title?: string
  subtitle?: string
  columns?: 2 | 3 | 4
  showFilters?: boolean
  showSearch?: boolean
  showPlatformFilter?: boolean
  showRatingFilter?: boolean
  showLoadMore?: boolean
  itemsPerPage?: number
  onTestimonialClick?: (testimonial: Testimonial) => void
  className?: string
}

export function TestimonialsGrid({
  testimonials,
  title = "Customer Reviews & Testimonials",
  subtitle = "Read what our travelers have to say about their experiences with EU Holidays",
  columns = 3,
  showFilters = true,
  showSearch = true,
  showPlatformFilter = true,
  showRatingFilter = true,
  showLoadMore = true,
  itemsPerPage = 9,
  onTestimonialClick,
  className
}: TestimonialsGridProps) {
  const [selectedRating, setSelectedRating] = useState<string>('all')
  const [selectedPlatform, setSelectedPlatform] = useState<string>('all')
  const [selectedDestination, setSelectedDestination] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [displayCount, setDisplayCount] = useState(itemsPerPage)

  // Get unique values for filters
  const destinations = Array.from(new Set(testimonials.map(t => t.destination).filter(Boolean))).sort()
  const platforms = Array.from(new Set(testimonials.map(t => t.platform).filter(Boolean))).sort()

  // Filter testimonials
  const filteredTestimonials = testimonials.filter(testimonial => {
    const matchesRating = selectedRating === 'all' || 
      (selectedRating === '5' && testimonial.rating === 5) ||
      (selectedRating === '4+' && testimonial.rating >= 4) ||
      (selectedRating === '3+' && testimonial.rating >= 3)
    
    const matchesPlatform = selectedPlatform === 'all' || testimonial.platform === selectedPlatform
    const matchesDestination = selectedDestination === 'all' || testimonial.destination === selectedDestination
    const matchesSearch = searchQuery === '' || 
      testimonial.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      testimonial.review.toLowerCase().includes(searchQuery.toLowerCase()) ||
      testimonial.tourName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      testimonial.destination?.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesRating && matchesPlatform && matchesDestination && matchesSearch
  })

  // Sort testimonials: featured first, then by rating and date
  const sortedTestimonials = [...filteredTestimonials].sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    if (a.rating !== b.rating) return b.rating - a.rating
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  // Get testimonials to display based on load more functionality
  const displayedTestimonials = showLoadMore 
    ? sortedTestimonials.slice(0, displayCount)
    : sortedTestimonials

  const hasMoreTestimonials = displayCount < sortedTestimonials.length

  const loadMoreTestimonials = () => {
    setDisplayCount(prev => Math.min(prev + itemsPerPage, sortedTestimonials.length))
  }

  const clearFilters = () => {
    setSelectedRating('all')
    setSelectedPlatform('all')
    setSelectedDestination('all')
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

  const activeFiltersCount = [selectedRating, selectedPlatform, selectedDestination].filter(f => f !== 'all').length + (searchQuery ? 1 : 0)

  // Calculate rating distribution
  const ratingStats = testimonials.reduce((acc, testimonial) => {
    acc[testimonial.rating] = (acc[testimonial.rating] || 0) + 1
    return acc
  }, {} as Record<number, number>)

  const averageRating = testimonials.length > 0 
    ? testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length 
    : 0

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
              "font-onest text-[#666666] max-w-3xl mx-auto mb-6 sm:mb-8",
              // Responsive font size
              "text-[12px] sm:text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[19px]",
              // Responsive line height
              "leading-[16px] sm:leading-[20px] md:leading-[22px] lg:leading-[24px] xl:leading-[26px] 2xl:leading-[28px]"
            )}>
              {subtitle}
            </p>

            {/* Rating Summary */}
            <div className="flex items-center justify-center gap-4 sm:gap-6 text-center">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={cn(
                        i < Math.floor(averageRating) ? "text-yellow-400" : "text-gray-300",
                        "w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] md:w-[20px] md:h-[20px]"
                      )}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className={cn(
                  "font-onest font-medium text-[#242424]",
                  "text-[14px] sm:text-[16px] md:text-[18px]"
                )}>
                  {averageRating.toFixed(1)}
                </span>
              </div>
              <span className={cn(
                "font-onest text-[#666666]",
                "text-[12px] sm:text-[14px] md:text-[16px]"
              )}>
                Based on {testimonials.length} reviews
              </span>
            </div>
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
                      placeholder="Search reviews by name, destination, or keywords..."
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
                  {/* Filter Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {/* Rating Filter */}
                    {showRatingFilter && (
                      <div>
                        <label className={cn(
                          "block font-onest font-medium text-[#242424] mb-2",
                          "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px]"
                        )}>
                          Rating
                        </label>
                        <select
                          value={selectedRating}
                          onChange={(e) => setSelectedRating(e.target.value)}
                          className={cn(
                            "w-full border border-[#DDDDDD] rounded-[6px] px-3 py-2",
                            "font-onest text-[#242424] focus:outline-none focus:border-[#0066CC]",
                            "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px]"
                          )}
                        >
                          <option value="all">All Ratings</option>
                          <option value="5">5 Stars ({ratingStats[5] || 0})</option>
                          <option value="4+">4+ Stars ({(ratingStats[4] || 0) + (ratingStats[5] || 0)})</option>
                          <option value="3+">3+ Stars ({(ratingStats[3] || 0) + (ratingStats[4] || 0) + (ratingStats[5] || 0)})</option>
                        </select>
                      </div>
                    )}

                    {/* Platform Filter */}
                    {showPlatformFilter && platforms.length > 0 && (
                      <div>
                        <label className={cn(
                          "block font-onest font-medium text-[#242424] mb-2",
                          "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px]"
                        )}>
                          Platform
                        </label>
                        <select
                          value={selectedPlatform}
                          onChange={(e) => setSelectedPlatform(e.target.value)}
                          className={cn(
                            "w-full border border-[#DDDDDD] rounded-[6px] px-3 py-2",
                            "font-onest text-[#242424] focus:outline-none focus:border-[#0066CC]",
                            "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px]"
                          )}
                        >
                          <option value="all">All Platforms</option>
                          {platforms.map(platform => (
                            <option key={platform} value={platform}>
                              {platform.charAt(0).toUpperCase() + platform.slice(1)}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}

                    {/* Destination Filter */}
                    {destinations.length > 0 && (
                      <div>
                        <label className={cn(
                          "block font-onest font-medium text-[#242424] mb-2",
                          "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px]"
                        )}>
                          Destination
                        </label>
                        <select
                          value={selectedDestination}
                          onChange={(e) => setSelectedDestination(e.target.value)}
                          className={cn(
                            "w-full border border-[#DDDDDD] rounded-[6px] px-3 py-2",
                            "font-onest text-[#242424] focus:outline-none focus:border-[#0066CC]",
                            "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px]"
                          )}
                        >
                          <option value="all">All Destinations</option>
                          {destinations.map(destination => (
                            <option key={destination} value={destination}>
                              {destination}
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
              Showing {displayedTestimonials.length} of {sortedTestimonials.length} reviews
              {activeFiltersCount > 0 && ` (${activeFiltersCount} filter${activeFiltersCount > 1 ? 's' : ''} applied)`}
            </p>
          </div>

          {/* Testimonials Grid */}
          {displayedTestimonials.length > 0 ? (
            <div className={getGridClasses()}>
              {displayedTestimonials.map(testimonial => (
                <div
                  key={testimonial.id}
                  className={cn(
                    "transition-transform duration-300 hover:scale-[1.02]",
                    onTestimonialClick && "cursor-pointer"
                  )}
                  onClick={() => onTestimonialClick?.(testimonial)}
                >
                  <TestimonialCard
                    id={testimonial.id}
                    name={testimonial.name}
                    location={testimonial.location}
                    avatar={testimonial.avatar}
                    rating={testimonial.rating}
                    review={testimonial.review}
                    date={testimonial.date}
                    tourName={testimonial.tourName}
                    className={cn(
                      testimonial.featured && "ring-2 ring-[#0066CC] ring-offset-4"
                    )}
                  />
                  
                  {/* Featured Badge */}
                  {testimonial.featured && (
                    <div className="relative -mt-4 flex justify-center">
                      <span className={cn(
                        "bg-[#0066CC] text-white font-onest font-bold rounded-full",
                        "px-[8px] py-[2px] sm:px-[10px] sm:py-[3px] md:px-[12px] md:py-[4px]",
                        "text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px]"
                      )}>
                        ⭐ FEATURED REVIEW
                      </span>
                    </div>
                  )}

                  {/* Platform Badge */}
                  {testimonial.platform && (
                    <div className="mt-2 flex justify-center">
                      <span className={cn(
                        "bg-[#F0F8FF] text-[#0066CC] font-onest font-medium rounded-full",
                        "px-[6px] py-[1px] sm:px-[8px] sm:py-[2px]",
                        "text-[7px] sm:text-[8px] md:text-[9px]"
                      )}>
                        {testimonial.platform.charAt(0).toUpperCase() + testimonial.platform.slice(1)}
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
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
                />
              </svg>
              <h3 className={cn(
                "font-thunder font-medium text-[#242424] mb-2",
                "text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]"
              )}>
                No reviews found
              </h3>
              <p className={cn(
                "font-onest text-[#666666] max-w-md mx-auto mb-4",
                "text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px]"
              )}>
                No reviews match your current search and filter criteria. Try adjusting your filters or search terms.
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
          {showLoadMore && hasMoreTestimonials && (
            <div className="text-center mt-8 sm:mt-12">
              <button
                onClick={loadMoreTestimonials}
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
                <span>Load More Reviews</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              <p className={cn(
                "font-onest text-[#888888] mt-3",
                "text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px]"
              )}>
                {sortedTestimonials.length - displayCount} more reviews available
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}