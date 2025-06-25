'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface PhotoAlbum {
  id: string
  title: string
  description?: string
  coverImage: string
  photoCount: number
  destination: string
  tourDate: string
  category?: 'landscape' | 'culture' | 'adventure' | 'food' | 'people' | 'architecture'
  tags?: string[]
  photographer?: string
  featured?: boolean
  photos?: {
    id: string
    url: string
    thumbnail: string
    caption?: string
    photographer?: string
  }[]
}

interface PhotoAlbumsGridProps {
  albums: PhotoAlbum[]
  title?: string
  subtitle?: string
  columns?: 2 | 3 | 4
  showFilters?: boolean
  showSearch?: boolean
  showCategoryFilter?: boolean
  showDateFilter?: boolean
  showLoadMore?: boolean
  itemsPerPage?: number
  onAlbumClick?: (album: PhotoAlbum) => void
  className?: string
}

export function PhotoAlbumsGrid({
  albums,
  title = "Tour Photo Albums",
  subtitle = "Explore beautiful moments and memories from our guided tours around the world",
  columns = 3,
  showFilters = true,
  showSearch = true,
  showCategoryFilter = true,
  showDateFilter = true,
  showLoadMore = true,
  itemsPerPage = 12,
  onAlbumClick,
  className
}: PhotoAlbumsGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedDestination, setSelectedDestination] = useState<string>('all')
  const [selectedYear, setSelectedYear] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [displayCount, setDisplayCount] = useState(itemsPerPage)
  const [selectedPhoto, setSelectedPhoto] = useState<{ url: string; caption?: string; album: string } | null>(null)

  // Get unique values for filters
  const categories = Array.from(new Set(albums.map(album => album.category).filter(Boolean))).sort()
  const destinations = Array.from(new Set(albums.map(album => album.destination))).sort()
  const years = Array.from(new Set(albums.map(album => new Date(album.tourDate).getFullYear().toString()))).sort((a, b) => b.localeCompare(a))

  // Date filtering helper
  const filterByYear = (album: PhotoAlbum) => {
    if (selectedYear === 'all') return true
    return new Date(album.tourDate).getFullYear().toString() === selectedYear
  }

  // Filter albums
  const filteredAlbums = albums.filter(album => {
    const matchesCategory = selectedCategory === 'all' || album.category === selectedCategory
    const matchesDestination = selectedDestination === 'all' || album.destination === selectedDestination
    const matchesYear = filterByYear(album)
    const matchesSearch = searchQuery === '' || 
      album.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      album.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      album.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
      album.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    return matchesCategory && matchesDestination && matchesYear && matchesSearch
  })

  // Sort albums: featured first, then by date (newest first)
  const sortedAlbums = [...filteredAlbums].sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return new Date(b.tourDate).getTime() - new Date(a.tourDate).getTime()
  })

  // Get albums to display based on load more functionality
  const displayedAlbums = showLoadMore 
    ? sortedAlbums.slice(0, displayCount)
    : sortedAlbums

  const hasMoreAlbums = displayCount < sortedAlbums.length

  const loadMoreAlbums = () => {
    setDisplayCount(prev => Math.min(prev + itemsPerPage, sortedAlbums.length))
  }

  const clearFilters = () => {
    setSelectedCategory('all')
    setSelectedDestination('all')
    setSelectedYear('all')
    setSearchQuery('')
    setDisplayCount(itemsPerPage)
  }

  const getGridClasses = () => {
    const baseClasses = "grid gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14"
    
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

  const activeFiltersCount = [selectedCategory, selectedDestination, selectedYear].filter(f => f !== 'all').length + (searchQuery ? 1 : 0)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric'
    })
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
                      placeholder="Search albums by destination, title, or tags..."
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
                    {/* Category Filter */}
                    {showCategoryFilter && categories.length > 0 && (
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
                          {categories.map(category => category && (
                            <option key={category} value={category}>
                              {category.charAt(0).toUpperCase() + category.slice(1)}
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

                    {/* Year Filter */}
                    {showDateFilter && years.length > 0 && (
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
              Showing {displayedAlbums.length} of {sortedAlbums.length} albums
              {activeFiltersCount > 0 && ` (${activeFiltersCount} filter${activeFiltersCount > 1 ? 's' : ''} applied)`}
            </p>
          </div>

          {/* Albums Grid */}
          {displayedAlbums.length > 0 ? (
            <div className={getGridClasses()}>
              {displayedAlbums.map(album => (
                <div
                  key={album.id}
                  className={cn(
                    "group cursor-pointer transition-all duration-300 hover:scale-[1.02]",
                    album.featured && "ring-2 ring-[#0066CC] ring-offset-4"
                  )}
                  onClick={() => onAlbumClick?.(album)}
                >
                  {/* Album Card */}
                  <div className={cn(
                    "bg-white border border-[#F0F0F0] overflow-hidden transition-all duration-300 group-hover:shadow-xl",
                    // Responsive border radius
                    "rounded-[8px] sm:rounded-[10px] md:rounded-[12px] lg:rounded-[14px] xl:rounded-[16px] 2xl:rounded-[18px]"
                  )}>
                    {/* Cover Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={album.coverImage}
                        alt={album.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                      
                      {/* Photo count badge */}
                      <div className="absolute top-3 right-3">
                        <span className={cn(
                          "bg-black/70 text-white font-onest font-medium rounded-full backdrop-blur-sm",
                          "px-[8px] py-[4px] sm:px-[10px] sm:py-[5px] md:px-[12px] md:py-[6px]",
                          "text-[10px] sm:text-[11px] md:text-[12px]"
                        )}>
                          📸 {album.photoCount} photos
                        </span>
                      </div>

                      {/* Category badge */}
                      {album.category && (
                        <div className="absolute top-3 left-3">
                          <span className={cn(
                            "bg-[#0066CC] text-white font-onest font-medium rounded-full",
                            "px-[8px] py-[4px] sm:px-[10px] sm:py-[5px] md:px-[12px] md:py-[6px]",
                            "text-[10px] sm:text-[11px] md:text-[12px]"
                          )}>
                            {album.category.charAt(0).toUpperCase() + album.category.slice(1)}
                          </span>
                        </div>
                      )}

                      {/* Featured badge */}
                      {album.featured && (
                        <div className="absolute bottom-3 left-3">
                          <span className={cn(
                            "bg-[#FFD700] text-[#242424] font-onest font-bold rounded-full",
                            "px-[8px] py-[4px] sm:px-[10px] sm:py-[5px] md:px-[12px] md:py-[6px]",
                            "text-[10px] sm:text-[11px] md:text-[12px]"
                          )}>
                            ⭐ FEATURED
                          </span>
                        </div>
                      )}

                      {/* View album overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className={cn(
                          "bg-white/90 text-[#242424] font-onest font-medium rounded-full transition-all duration-300 hover:bg-white",
                          "px-[16px] py-[8px] sm:px-[20px] sm:py-[10px] md:px-[24px] md:py-[12px]",
                          "text-[12px] sm:text-[14px] md:text-[16px]"
                        )}>
                          View Album
                        </button>
                      </div>
                    </div>

                    {/* Album Details */}
                    <div className={cn(
                      // Responsive padding
                      "p-[12px] sm:p-[16px] md:p-[20px] lg:p-[24px] xl:p-[28px] 2xl:p-[32px]"
                    )}>
                      {/* Title */}
                      <h3 className={cn(
                        "font-thunder font-medium text-[#242424] mb-2 sm:mb-3",
                        // Responsive font size
                        "text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]",
                        // Responsive line height
                        "leading-[16px] sm:leading-[20px] md:leading-[22px] lg:leading-[24px] xl:leading-[26px] 2xl:leading-[28px]"
                      )}>
                        {album.title}
                      </h3>

                      {/* Destination and Date */}
                      <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <span className={cn(
                          "font-onest text-[#0066CC] font-medium",
                          "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]"
                        )}>
                          📍 {album.destination}
                        </span>
                        <span className={cn(
                          "font-onest text-[#888888]",
                          "text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px]"
                        )}>
                          {formatDate(album.tourDate)}
                        </span>
                      </div>

                      {/* Description */}
                      {album.description && (
                        <p className={cn(
                          "font-onest text-[#666666] mb-3 sm:mb-4 line-clamp-2",
                          "text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px]",
                          "leading-[14px] sm:leading-[15px] md:leading-[16px] lg:leading-[17px] xl:leading-[18px] 2xl:leading-[19px]"
                        )}>
                          {album.description}
                        </p>
                      )}

                      {/* Tags */}
                      {album.tags && album.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {album.tags.slice(0, 3).map((tag, index) => (
                            <span
                              key={index}
                              className={cn(
                                "bg-[#F0F8FF] text-[#0066CC] font-onest rounded-full",
                                "px-[6px] py-[2px] sm:px-[8px] sm:py-[3px]",
                                "text-[8px] sm:text-[9px] md:text-[10px]"
                              )}
                            >
                              #{tag}
                            </span>
                          ))}
                          {album.tags.length > 3 && (
                            <span className={cn(
                              "text-[#888888] font-onest",
                              "text-[8px] sm:text-[9px] md:text-[10px]"
                            )}>
                              +{album.tags.length - 3}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
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
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                />
              </svg>
              <h3 className={cn(
                "font-thunder font-medium text-[#242424] mb-2",
                "text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]"
              )}>
                No albums found
              </h3>
              <p className={cn(
                "font-onest text-[#666666] max-w-md mx-auto mb-4",
                "text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px]"
              )}>
                No photo albums match your current search and filter criteria. Try adjusting your filters or search terms.
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
          {showLoadMore && hasMoreAlbums && (
            <div className="text-center mt-8 sm:mt-12">
              <button
                onClick={loadMoreAlbums}
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
                <span>Load More Albums</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              <p className={cn(
                "font-onest text-[#888888] mt-3",
                "text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px]"
              )}>
                {sortedAlbums.length - displayCount} more albums available
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}