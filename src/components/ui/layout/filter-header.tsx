'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'

interface FilterOption {
  id: string
  label: string
  value: string
  count?: number
}

interface FilterSection {
  id: string
  title: string
  type: 'select' | 'multiselect' | 'range' | 'checkbox'
  options?: FilterOption[]
  min?: number
  max?: number
  unit?: string
}

interface FilterHeaderProps {
  totalResults: number
  resultsLabel?: string
  sortOptions?: FilterOption[]
  filterSections?: FilterSection[]
  onSortChange?: (sortValue: string) => void
  onFilterChange?: (filters: Record<string, any>) => void
  onFilterOpen?: () => void
  showFilterButton?: boolean
  className?: string
}

export function FilterHeader({
  totalResults,
  resultsLabel = "tours found",
  sortOptions = [],
  filterSections = [],
  onSortChange,
  onFilterChange,
  onFilterOpen,
  showFilterButton = true,
  className
}: FilterHeaderProps) {
  const [currentSort, setCurrentSort] = useState(sortOptions[0]?.value || '')
  const [filters, setFilters] = useState<Record<string, any>>({})
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const handleSortChange = (value: string) => {
    setCurrentSort(value)
    onSortChange?.(value)
  }

  const handleFilterChange = (sectionId: string, value: any) => {
    const newFilters = { ...filters, [sectionId]: value }
    setFilters(newFilters)
    onFilterChange?.(newFilters)
  }

  const clearAllFilters = () => {
    setFilters({})
    onFilterChange?.({})
  }

  const getActiveFilterCount = () => {
    return Object.values(filters).filter(value => {
      if (Array.isArray(value)) return value.length > 0
      return value !== null && value !== undefined && value !== ''
    }).length
  }

  const toggleFilterPanel = () => {
    setIsFilterOpen(!isFilterOpen)
    if (!isFilterOpen) onFilterOpen?.()
  }

  return (
    <div className={cn("w-full", className)}>
      {/* Main Header */}
      <div className={cn(
        "flex items-center justify-between",
        // Responsive padding
        "px-[16px] py-[12px] sm:px-[20px] sm:py-[14px] md:px-[24px] md:py-[16px] lg:px-[28px] lg:py-[18px] xl:px-[32px] xl:py-[20px] 2xl:px-[36px] 2xl:py-[22px]",
        "bg-white border-b border-[#F0F0F0]"
      )}>
        {/* Results Count */}
        <div className="flex items-center">
          <span className={cn(
            "font-thunder font-medium text-[#242424]",
            // Responsive font size
            "text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]",
            // Responsive line height
            "leading-[16px] sm:leading-[19px] md:leading-[21px] lg:leading-[24px] xl:leading-[26px] 2xl:leading-[28px]"
          )}>
            {totalResults.toLocaleString()}
          </span>
          <span className={cn(
            "font-onest text-[#666666] ml-2",
            // Responsive font size
            "text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px]",
            // Responsive line height
            "leading-[14px] sm:leading-[17px] md:leading-[18px] lg:leading-[19px] xl:leading-[20px] 2xl:leading-[21px]"
          )}>
            {resultsLabel}
          </span>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Sort Dropdown */}
          {sortOptions.length > 0 && (
            <div className="relative">
              <select
                value={currentSort}
                onChange={(e) => handleSortChange(e.target.value)}
                className={cn(
                  "appearance-none bg-white border border-[#DDDDDD] cursor-pointer",
                  // Responsive padding and border radius
                  "pl-[12px] pr-[32px] py-[6px] sm:pl-[14px] sm:pr-[36px] sm:py-[8px] md:pl-[16px] md:pr-[40px] md:py-[9px] lg:pl-[18px] lg:pr-[44px] lg:py-[10px]",
                  "rounded-[6px] sm:rounded-[7px] md:rounded-[8px] lg:rounded-[9px] xl:rounded-[10px] 2xl:rounded-[11px]",
                  // Responsive font size
                  "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]",
                  "font-onest focus:outline-none focus:border-[#0066CC]"
                )}
              >
                {sortOptions.map(option => (
                  <option key={option.id} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <svg 
                className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-[#666666] pointer-events-none"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          )}

          {/* Filter Button */}
          {showFilterButton && (
            <button
              onClick={toggleFilterPanel}
              className={cn(
                "relative flex items-center gap-2 border transition-colors",
                // Responsive padding and border radius
                "px-[12px] py-[6px] sm:px-[14px] sm:py-[8px] md:px-[16px] md:py-[9px] lg:px-[18px] lg:py-[10px]",
                "rounded-[6px] sm:rounded-[7px] md:rounded-[8px] lg:rounded-[9px] xl:rounded-[10px] 2xl:rounded-[11px]",
                // Responsive font size
                "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]",
                "font-onest font-medium",
                isFilterOpen 
                  ? "bg-[#0066CC] text-white border-[#0066CC]"
                  : "bg-white text-[#242424] border-[#DDDDDD] hover:border-[#0066CC] hover:text-[#0066CC]"
              )}
            >
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
              </svg>
              <span>Filter</span>
              {getActiveFilterCount() > 0 && (
                <span className={cn(
                  "absolute -top-1 -right-1 bg-red-500 text-white rounded-full",
                  "w-[16px] h-[16px] text-[10px] flex items-center justify-center"
                )}>
                  {getActiveFilterCount()}
                </span>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Filter Panel */}
      {isFilterOpen && filterSections.length > 0 && (
        <div className={cn(
          "bg-white border-b border-[#F0F0F0]",
          // Responsive padding
          "px-[16px] py-[16px] sm:px-[20px] sm:py-[18px] md:px-[24px] md:py-[20px] lg:px-[28px] lg:py-[22px] xl:px-[32px] xl:py-[24px] 2xl:px-[36px] 2xl:py-[26px]"
        )}>
          <div className="space-y-4">
            {/* Filter Sections */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filterSections.map(section => (
                <div key={section.id} className="space-y-2">
                  <label className={cn(
                    "block font-onest font-medium text-[#242424]",
                    "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]"
                  )}>
                    {section.title}
                  </label>

                  {/* Select */}
                  {section.type === 'select' && section.options && (
                    <select
                      value={filters[section.id] || ''}
                      onChange={(e) => handleFilterChange(section.id, e.target.value)}
                      className={cn(
                        "w-full border border-[#DDDDDD] rounded-md",
                        "px-3 py-2 text-sm font-onest focus:outline-none focus:border-[#0066CC]"
                      )}
                    >
                      <option value="">All {section.title}</option>
                      {section.options.map(option => (
                        <option key={option.id} value={option.value}>
                          {option.label} {option.count ? `(${option.count})` : ''}
                        </option>
                      ))}
                    </select>
                  )}

                  {/* Multi-select checkboxes */}
                  {section.type === 'multiselect' && section.options && (
                    <div className="space-y-1 max-h-32 overflow-y-auto">
                      {section.options.map(option => (
                        <label key={option.id} className="flex items-center text-sm">
                          <input
                            type="checkbox"
                            checked={(filters[section.id] || []).includes(option.value)}
                            onChange={(e) => {
                              const currentValues = filters[section.id] || []
                              const newValues = e.target.checked
                                ? [...currentValues, option.value]
                                : currentValues.filter((v: string) => v !== option.value)
                              handleFilterChange(section.id, newValues)
                            }}
                            className="mr-2"
                          />
                          <span className="font-onest text-[#242424]">
                            {option.label} {option.count ? `(${option.count})` : ''}
                          </span>
                        </label>
                      ))}
                    </div>
                  )}

                  {/* Range */}
                  {section.type === 'range' && (
                    <div className="space-y-2">
                      <input
                        type="range"
                        min={section.min || 0}
                        max={section.max || 100}
                        value={filters[section.id] || section.min || 0}
                        onChange={(e) => handleFilterChange(section.id, parseInt(e.target.value))}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-[#666666]">
                        <span>{section.min}{section.unit}</span>
                        <span className="font-medium">{filters[section.id] || section.min}{section.unit}</span>
                        <span>{section.max}{section.unit}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Filter Actions */}
            <div className="flex justify-between items-center pt-4 border-t border-[#F0F0F0]">
              <button
                onClick={clearAllFilters}
                className={cn(
                  "text-[#666666] hover:text-[#242424] transition-colors font-onest",
                  "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px]"
                )}
              >
                Clear all filters
              </button>
              
              <div className="flex gap-3">
                <button
                  onClick={toggleFilterPanel}
                  className={cn(
                    "px-4 py-2 border border-[#DDDDDD] text-[#242424] rounded-md hover:bg-gray-50 transition-colors font-onest",
                    "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px]"
                  )}
                >
                  Cancel
                </button>
                <button
                  onClick={toggleFilterPanel}
                  className={cn(
                    "px-4 py-2 bg-[#0066CC] text-white rounded-md hover:bg-[#004499] transition-colors font-onest",
                    "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px]"
                  )}
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}