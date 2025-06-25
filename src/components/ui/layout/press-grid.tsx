'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { PressArticleCard } from '@/components/ui/cards/press-article-card'

interface PressArticle {
  id: string
  title: string
  excerpt?: string
  image: string
  publication: string
  publishedDate: string
  readTime?: string
  category?: string
  author?: string
  tags?: string[]
  featured?: boolean
  type?: 'news' | 'interview' | 'review' | 'feature' | 'press-release'
  href?: string
}

interface PressGridProps {
  articles: PressArticle[]
  title?: string
  subtitle?: string
  columns?: 2 | 3 | 4
  showFilters?: boolean
  showSearch?: boolean
  showDateFilter?: boolean
  showLoadMore?: boolean
  itemsPerPage?: number
  onArticleClick?: (article: PressArticle) => void
  className?: string
}

export function PressGrid({
  articles,
  title = "Press & Media",
  subtitle = "Stay updated with our latest news, features, and media coverage",
  columns = 3,
  showFilters = true,
  showSearch = true,
  showDateFilter = true,
  showLoadMore = true,
  itemsPerPage = 9,
  onArticleClick,
  className
}: PressGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [selectedPublication, setSelectedPublication] = useState<string>('all')
  const [dateRange, setDateRange] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [displayCount, setDisplayCount] = useState(itemsPerPage)

  // Get unique values for filters
  const categories = Array.from(new Set(articles.map(article => article.category).filter(Boolean))).sort()
  const types = Array.from(new Set(articles.map(article => article.type).filter(Boolean))).sort()
  const publications = Array.from(new Set(articles.map(article => article.publication))).sort()

  // Date filtering helper
  const filterByDate = (article: PressArticle) => {
    if (dateRange === 'all') return true
    
    const articleDate = new Date(article.publishedDate)
    const now = new Date()
    
    switch (dateRange) {
      case 'week':
        return (now.getTime() - articleDate.getTime()) <= 7 * 24 * 60 * 60 * 1000
      case 'month':
        return (now.getTime() - articleDate.getTime()) <= 30 * 24 * 60 * 60 * 1000
      case 'quarter':
        return (now.getTime() - articleDate.getTime()) <= 90 * 24 * 60 * 60 * 1000
      case 'year':
        return (now.getTime() - articleDate.getTime()) <= 365 * 24 * 60 * 60 * 1000
      default:
        return true
    }
  }

  // Filter articles
  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory
    const matchesType = selectedType === 'all' || article.type === selectedType
    const matchesPublication = selectedPublication === 'all' || article.publication === selectedPublication
    const matchesDate = filterByDate(article)
    const matchesSearch = searchQuery === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.publication.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.author?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    return matchesCategory && matchesType && matchesPublication && matchesDate && matchesSearch
  })

  // Sort articles: featured first, then by date (newest first)
  const sortedArticles = [...filteredArticles].sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  })

  // Get articles to display based on load more functionality
  const displayedArticles = showLoadMore 
    ? sortedArticles.slice(0, displayCount)
    : sortedArticles

  const hasMoreArticles = displayCount < sortedArticles.length

  const loadMoreArticles = () => {
    setDisplayCount(prev => Math.min(prev + itemsPerPage, sortedArticles.length))
  }

  const clearFilters = () => {
    setSelectedCategory('all')
    setSelectedType('all')
    setSelectedPublication('all')
    setDateRange('all')
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

  const activeFiltersCount = [selectedCategory, selectedType, selectedPublication, dateRange].filter(f => f !== 'all').length + (searchQuery ? 1 : 0)

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
                      placeholder="Search articles, publications, or authors..."
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
                          {types.map(type => type && (
                            <option key={type} value={type}>
                              {type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' ')}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}

                    {/* Publication Filter */}
                    {publications.length > 0 && (
                      <div>
                        <label className={cn(
                          "block font-onest font-medium text-[#242424] mb-2",
                          "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px]"
                        )}>
                          Publication
                        </label>
                        <select
                          value={selectedPublication}
                          onChange={(e) => setSelectedPublication(e.target.value)}
                          className={cn(
                            "w-full border border-[#DDDDDD] rounded-[6px] px-3 py-2",
                            "font-onest text-[#242424] focus:outline-none focus:border-[#0066CC]",
                            "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px]"
                          )}
                        >
                          <option value="all">All Publications</option>
                          {publications.map(publication => (
                            <option key={publication} value={publication}>
                              {publication}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}

                    {/* Date Range Filter */}
                    {showDateFilter && (
                      <div>
                        <label className={cn(
                          "block font-onest font-medium text-[#242424] mb-2",
                          "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px]"
                        )}>
                          Published
                        </label>
                        <select
                          value={dateRange}
                          onChange={(e) => setDateRange(e.target.value)}
                          className={cn(
                            "w-full border border-[#DDDDDD] rounded-[6px] px-3 py-2",
                            "font-onest text-[#242424] focus:outline-none focus:border-[#0066CC]",
                            "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px]"
                          )}
                        >
                          <option value="all">All Time</option>
                          <option value="week">Past Week</option>
                          <option value="month">Past Month</option>
                          <option value="quarter">Past 3 Months</option>
                          <option value="year">Past Year</option>
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
              Showing {displayedArticles.length} of {sortedArticles.length} articles
              {activeFiltersCount > 0 && ` (${activeFiltersCount} filter${activeFiltersCount > 1 ? 's' : ''} applied)`}
            </p>
          </div>

          {/* Articles Grid */}
          {displayedArticles.length > 0 ? (
            <div className={getGridClasses()}>
              {displayedArticles.map(article => (
                <div
                  key={article.id}
                  className={cn(
                    "transition-transform duration-300 hover:scale-[1.02]",
                    onArticleClick && "cursor-pointer"
                  )}
                  onClick={() => onArticleClick?.(article)}
                >
                  <PressArticleCard
                    id={article.id}
                    title={article.title}
                    description={article.excerpt || ''}
                    date={article.publishedDate}
                    thumbnail={article.image}
                    articleUrl={article.href}
                    className={cn(
                      article.featured && "ring-2 ring-[#0066CC] ring-offset-4"
                    )}
                  />
                  
                  {/* Featured Badge */}
                  {article.featured && (
                    <div className="relative -mt-4 flex justify-center">
                      <span className={cn(
                        "bg-[#0066CC] text-white font-onest font-bold rounded-full",
                        "px-[8px] py-[2px] sm:px-[10px] sm:py-[3px] md:px-[12px] md:py-[4px]",
                        "text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px]"
                      )}>
                        📰 FEATURED STORY
                      </span>
                    </div>
                  )}

                  {/* Tags */}
                  {article.tags && article.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap justify-center gap-1 sm:gap-2">
                      {article.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className={cn(
                            "bg-[#F0F8FF] text-[#0066CC] font-onest rounded-full",
                            "px-[6px] py-[1px] sm:px-[8px] sm:py-[2px]",
                            "text-[7px] sm:text-[8px] md:text-[9px]"
                          )}
                        >
                          #{tag}
                        </span>
                      ))}
                      {article.tags.length > 3 && (
                        <span className={cn(
                          "text-[#888888] font-onest",
                          "text-[7px] sm:text-[8px] md:text-[9px]"
                        )}>
                          +{article.tags.length - 3}
                        </span>
                      )}
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
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" 
                />
              </svg>
              <h3 className={cn(
                "font-thunder font-medium text-[#242424] mb-2",
                "text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]"
              )}>
                No articles found
              </h3>
              <p className={cn(
                "font-onest text-[#666666] max-w-md mx-auto mb-4",
                "text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px]"
              )}>
                No articles match your current search and filter criteria. Try adjusting your filters or search terms.
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
          {showLoadMore && hasMoreArticles && (
            <div className="text-center mt-8 sm:mt-12">
              <button
                onClick={loadMoreArticles}
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
                <span>Load More Articles</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              <p className={cn(
                "font-onest text-[#888888] mt-3",
                "text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px]"
              )}>
                {sortedArticles.length - displayCount} more articles available
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}