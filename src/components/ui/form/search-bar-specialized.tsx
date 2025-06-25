'use client'

import React, { useState, useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface SearchSuggestion {
  id: string
  title: string
  subtitle?: string
  category?: string
  image?: string
  type: 'destination' | 'tour' | 'category' | 'keyword'
}

interface SearchBarSpecializedProps {
  placeholder?: string
  suggestions?: SearchSuggestion[]
  showCategories?: boolean
  showRecentSearches?: boolean
  showTrendingSearches?: boolean
  variant?: 'default' | 'compact' | 'hero'
  size?: 'sm' | 'md' | 'lg'
  onSearch?: (query: string) => void
  onSuggestionSelect?: (suggestion: SearchSuggestion) => void
  className?: string
}

export function SearchBarSpecialized({
  placeholder = "Search destinations, tours, or experiences...",
  suggestions = [],
  showCategories = true,
  showRecentSearches = true,
  showTrendingSearches = true,
  variant = 'default',
  size = 'md',
  onSearch,
  onSuggestionSelect,
  className
}: SearchBarSpecializedProps) {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([])
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const trendingSearches = [
    'Switzerland Tours',
    'Family Friendly Europe',
    'Christmas Markets',
    'Northern Lights',
    'Mediterranean Cruise'
  ]

  useEffect(() => {
    // Load recent searches from localStorage
    const stored = localStorage.getItem('recentSearches')
    if (stored) {
      setRecentSearches(JSON.parse(stored))
    }
  }, [])

  useEffect(() => {
    if (query.trim()) {
      const filtered = suggestions.filter(suggestion =>
        suggestion.title.toLowerCase().includes(query.toLowerCase()) ||
        suggestion.subtitle?.toLowerCase().includes(query.toLowerCase()) ||
        suggestion.category?.toLowerCase().includes(query.toLowerCase())
      )
      setFilteredSuggestions(filtered)
    } else {
      setFilteredSuggestions([])
    }
    setSelectedIndex(-1)
  }, [query, suggestions])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setSelectedIndex(-1)
      }
    }

    // Only add listener when dropdown is open
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside, { passive: true })
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    setIsOpen(true)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Only handle keyboard events when dropdown is open or for Enter key
    if (!isOpen && e.key !== 'Enter') return
    
    const totalItems = filteredSuggestions.length + 
      (showRecentSearches && !query ? recentSearches.length : 0) +
      (showTrendingSearches && !query ? trendingSearches.length : 0)

    switch (e.key) {
      case 'ArrowDown':
        if (isOpen) {
          e.preventDefault()
          e.stopPropagation()
          setSelectedIndex(prev => prev < totalItems - 1 ? prev + 1 : prev)
        }
        break
      case 'ArrowUp':
        if (isOpen) {
          e.preventDefault()
          e.stopPropagation()
          setSelectedIndex(prev => prev > -1 ? prev - 1 : -1)
        }
        break
      case 'Enter':
        e.preventDefault()
        e.stopPropagation()
        if (selectedIndex >= 0) {
          // Handle suggestion selection
          if (selectedIndex < filteredSuggestions.length) {
            handleSuggestionClick(filteredSuggestions[selectedIndex])
          } else {
            // Handle recent/trending search selection
            const searchText = !query && showRecentSearches && selectedIndex < recentSearches.length
              ? recentSearches[selectedIndex]
              : trendingSearches[selectedIndex - (showRecentSearches ? recentSearches.length : 0)]
            handleSearch(searchText)
          }
        } else {
          handleSearch(query)
        }
        break
      case 'Escape':
        e.preventDefault()
        e.stopPropagation()
        setIsOpen(false)
        setSelectedIndex(-1)
        inputRef.current?.blur()
        break
    }
  }

  const handleSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) return

    // Add to recent searches
    const updatedRecent = [searchQuery, ...recentSearches.filter(s => s !== searchQuery)].slice(0, 5)
    setRecentSearches(updatedRecent)
    localStorage.setItem('recentSearches', JSON.stringify(updatedRecent))

    setQuery(searchQuery)
    setIsOpen(false)
    onSearch?.(searchQuery)
  }

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    setQuery(suggestion.title)
    setIsOpen(false)
    onSuggestionSelect?.(suggestion)
  }

  const getInputClasses = () => {
    const baseClasses = cn(
      "w-full border transition-all duration-200 font-onest",
      "focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-[#0066CC]",
      "placeholder:text-[#888888]"
    )

    const sizeClasses = {
      sm: cn(
        "pl-[36px] pr-[12px] py-[8px] sm:pl-[40px] sm:pr-[14px] sm:py-[10px] md:pl-[38px] md:pr-[13px] md:py-[9px] lg:pl-[42px] lg:pr-[15px] lg:py-[11px]",
        "rounded-[6px] sm:rounded-[7px] md:rounded-[6px] lg:rounded-[8px]",
        "text-[11px] sm:text-[12px] md:text-[11px] lg:text-[13px]"
      ),
      md: cn(
        "pl-[40px] pr-[16px] py-[12px] sm:pl-[44px] sm:pr-[18px] sm:py-[14px] md:pl-[42px] md:pr-[17px] md:py-[13px] lg:pl-[48px] lg:pr-[20px] lg:py-[16px] xl:pl-[52px] xl:pr-[22px] xl:py-[18px]",
        "rounded-[8px] sm:rounded-[10px] md:rounded-[9px] lg:rounded-[12px] xl:rounded-[14px]",
        "text-[12px] sm:text-[14px] md:text-[13px] lg:text-[16px] xl:text-[17px]"
      ),
      lg: cn(
        "pl-[48px] pr-[20px] py-[16px] sm:pl-[52px] sm:pr-[24px] sm:py-[18px] md:pl-[50px] md:pr-[22px] md:py-[17px] lg:pl-[56px] lg:pr-[26px] lg:py-[20px] xl:pl-[60px] xl:pr-[28px] xl:py-[22px]",
        "rounded-[10px] sm:rounded-[12px] md:rounded-[11px] lg:rounded-[14px] xl:rounded-[16px]",
        "text-[14px] sm:text-[16px] md:text-[15px] lg:text-[18px] xl:text-[19px]"
      )
    }

    const variantClasses = {
      default: "border-[#DDDDDD] bg-white",
      compact: "border-[#DDDDDD] bg-white",
      hero: "border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/70"
    }

    return cn(baseClasses, sizeClasses[size], variantClasses[variant])
  }

  const getIconClasses = () => {
    const sizeClasses = {
      sm: "left-[12px] w-[16px] h-[16px]",
      md: "left-[14px] w-[18px] h-[18px] sm:left-[16px] sm:w-[20px] sm:h-[20px]",
      lg: "left-[16px] w-[20px] h-[20px] sm:left-[18px] sm:w-[22px] sm:h-[22px]"
    }

    return cn(
      "absolute top-1/2 -translate-y-1/2 text-[#666666]",
      variant === 'hero' && "text-white/70",
      sizeClasses[size]
    )
  }

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      {/* Search Input */}
      <div className="relative">
        <svg
          className={getIconClasses()}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          className={getInputClasses()}
        />
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className={cn(
          "absolute top-full left-0 right-0 mt-1 bg-white border border-[#DDDDDD] shadow-lg z-50 max-h-[400px] overflow-y-auto",
          "rounded-[8px] sm:rounded-[10px] md:rounded-[9px] lg:rounded-[12px]"
        )}>
          {/* Filtered Suggestions */}
          {filteredSuggestions.length > 0 && (
            <div className="py-2">
              <div className="px-4 py-2 text-xs font-medium text-[#666666] border-b border-[#F0F0F0]">
                SEARCH RESULTS
              </div>
              {filteredSuggestions.map((suggestion, index) => (
                <button
                  key={suggestion.id}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className={cn(
                    "w-full px-4 py-3 text-left hover:bg-[#F8F8F8] flex items-center gap-3 transition-colors",
                    selectedIndex === index && "bg-[#F0F8FF]"
                  )}
                >
                  {suggestion.image && (
                    <img
                      src={suggestion.image}
                      alt={suggestion.title}
                      className="w-8 h-8 rounded object-cover flex-shrink-0"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="font-onest font-medium text-[#242424] text-sm truncate">
                      {suggestion.title}
                    </p>
                    {suggestion.subtitle && (
                      <p className="font-onest text-[#666666] text-xs truncate">
                        {suggestion.subtitle}
                      </p>
                    )}
                  </div>
                  {suggestion.category && (
                    <span className="bg-[#F0F0F0] text-[#666666] text-xs px-2 py-1 rounded flex-shrink-0">
                      {suggestion.category}
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}

          {/* Recent Searches */}
          {!query && showRecentSearches && recentSearches.length > 0 && (
            <div className="py-2">
              <div className="px-4 py-2 text-xs font-medium text-[#666666] border-b border-[#F0F0F0]">
                RECENT SEARCHES
              </div>
              {recentSearches.map((search, index) => (
                <button
                  key={search}
                  onClick={() => handleSearch(search)}
                  className={cn(
                    "w-full px-4 py-3 text-left hover:bg-[#F8F8F8] flex items-center gap-3 transition-colors",
                    selectedIndex === filteredSuggestions.length + index && "bg-[#F0F8FF]"
                  )}
                >
                  <svg className="w-4 h-4 text-[#666666] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-onest text-[#242424] text-sm">{search}</span>
                </button>
              ))}
            </div>
          )}

          {/* Trending Searches */}
          {!query && showTrendingSearches && (
            <div className="py-2">
              <div className="px-4 py-2 text-xs font-medium text-[#666666] border-b border-[#F0F0F0]">
                TRENDING SEARCHES
              </div>
              {trendingSearches.map((search, index) => (
                <button
                  key={search}
                  onClick={() => handleSearch(search)}
                  className={cn(
                    "w-full px-4 py-3 text-left hover:bg-[#F8F8F8] flex items-center gap-3 transition-colors",
                    selectedIndex === filteredSuggestions.length + (showRecentSearches ? recentSearches.length : 0) + index && "bg-[#F0F8FF]"
                  )}
                >
                  <svg className="w-4 h-4 text-[#666666] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="font-onest text-[#242424] text-sm">{search}</span>
                </button>
              ))}
            </div>
          )}

          {/* No Results */}
          {query && filteredSuggestions.length === 0 && (
            <div className="px-4 py-8 text-center">
              <svg className="w-12 h-12 text-[#CCCCCC] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <p className="font-onest text-[#666666] text-sm">No results found for "{query}"</p>
              <button
                onClick={() => handleSearch(query)}
                className="font-onest text-[#0066CC] text-sm mt-2 hover:underline"
              >
                Search anyway
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}