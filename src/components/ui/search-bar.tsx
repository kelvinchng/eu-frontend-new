'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { SearchBarMobile } from './search-bar-mobile'
import { MapPin, Calendar, Plane, Search } from 'lucide-react'

interface SearchBarProps {
  className?: string
  onSearch?: (filters: SearchFilters) => void
  onClearFilters?: () => void
}

interface SearchFilters {
  destination: string
  from: string
  to: string
  holidayType: string
}

export function SearchBar({ className, onSearch, onClearFilters }: SearchBarProps) {
  const [filters, setFilters] = useState<SearchFilters>({
    destination: 'Bali, Indonesia',
    from: 'Jan 25',
    to: 'Jan 25',
    holidayType: 'Group Holidays'
  })

  const handleSearch = () => {
    onSearch?.(filters)
  }

  const handleClearFilters = () => {
    const clearedFilters = {
      destination: '',
      from: '',
      to: '',
      holidayType: ''
    }
    setFilters(clearedFilters)
    onClearFilters?.()
  }

  return (
    <>
      {/* Mobile Version */}
      <div className="lg:hidden flex justify-center">
        <SearchBarMobile 
          className={className}
          onSearch={onSearch}
        />
      </div>

      {/* Desktop Version */}
      <div className={cn(
        "hidden lg:block w-full bg-white rounded-[12px]",
        // Responsive padding based on Figma (71px at 1920px baseline)
        "px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 3xl:px-[71px]",
        "py-4 sm:py-6 md:py-7 lg:py-8 xl:py-9 2xl:py-10 3xl:py-[40px]",
        className
      )}>
        <div className="relative w-full mx-auto">
          <div className="grid grid-cols-12 gap-4 items-end">
            {/* Destination */}
            <div className="col-span-12 xl:col-span-3">
              <label className="block font-onest font-semibold text-[10px] sm:text-xs md:text-xs lg:text-sm xl:text-base 2xl:text-[18px] 3xl:text-[18px] leading-[1.275] uppercase text-[#242424] mb-2 sm:mb-3" style={{ letterSpacing: '-2.5%' }}>
                I want to travel to…
              </label>
              <div className="relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 md:w-[13px] md:h-[18px] lg:w-[13px] lg:h-[18px] xl:w-[13px] xl:h-[18px] 2xl:w-[12.74px] 2xl:h-[18px]">
                  <MapPin className="w-full h-full text-[#242424]" />
                </div>
                <input
                  type="text"
                  value={filters.destination}
                  onChange={(e) => setFilters({ ...filters, destination: e.target.value })}
                  className="w-full pl-4 sm:pl-5 md:pl-6 lg:pl-6 xl:pl-6 2xl:pl-6 pr-2 py-1 sm:py-1.5 md:py-2 font-onest text-[10px] sm:text-xs md:text-xs lg:text-sm xl:text-base 2xl:text-[18px] 3xl:text-[18px] leading-[1.275] text-[#242424] bg-transparent border-b border-gray-300 outline-none focus:border-gray-500"
                  placeholder="Destination"
                />
              </div>
            </div>

            {/* From */}
            <div className="col-span-6 xl:col-span-2">
              <label className="block font-onest font-semibold text-[10px] sm:text-xs md:text-xs lg:text-sm xl:text-base 2xl:text-[18px] 3xl:text-[18px] leading-[1.275] uppercase text-[#242424] mb-2 sm:mb-3" style={{ letterSpacing: '-2.5%' }}>
                From
              </label>
              <div className="relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 md:w-[16px] md:h-[18px] lg:w-[16px] lg:h-[18px] xl:w-[16px] xl:h-[18px] 2xl:w-[16.12px] 2xl:h-[18px]">
                  <Calendar className="w-full h-full text-[#242424]" />
                </div>
                <input
                  type="text"
                  value={filters.from}
                  onChange={(e) => setFilters({ ...filters, from: e.target.value })}
                  className="w-full pl-4 sm:pl-5 md:pl-6 lg:pl-6 xl:pl-7 2xl:pl-7 pr-2 py-1 sm:py-1.5 md:py-2 font-onest text-[10px] sm:text-xs md:text-xs lg:text-sm xl:text-base 2xl:text-[18px] 3xl:text-[18px] leading-[1.275] text-[#242424] bg-transparent border-b border-gray-300 outline-none focus:border-gray-500"
                  placeholder="From"
                />
              </div>
            </div>

            {/* To */}
            <div className="col-span-6 xl:col-span-2">
              <label className="block font-onest font-semibold text-[10px] sm:text-xs md:text-xs lg:text-sm xl:text-base 2xl:text-[18px] 3xl:text-[18px] leading-[1.275] uppercase text-[#242424] mb-2 sm:mb-3" style={{ letterSpacing: '-2.5%' }}>
                To
              </label>
              <div className="relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 md:w-[16px] md:h-[18px] lg:w-[16px] lg:h-[18px] xl:w-[16px] xl:h-[18px] 2xl:w-[16.12px] 2xl:h-[18px]">
                  <Calendar className="w-full h-full text-[#242424]" />
                </div>
                <input
                  type="text"
                  value={filters.to}
                  onChange={(e) => setFilters({ ...filters, to: e.target.value })}
                  className="w-full pl-4 sm:pl-5 md:pl-6 lg:pl-6 xl:pl-7 2xl:pl-7 pr-2 py-1 sm:py-1.5 md:py-2 font-onest text-[10px] sm:text-xs md:text-xs lg:text-sm xl:text-base 2xl:text-[18px] 3xl:text-[18px] leading-[1.275] text-[#242424] bg-transparent border-b border-gray-300 outline-none focus:border-gray-500"
                  placeholder="To"
                />
              </div>
            </div>

            {/* Holiday Type */}
            <div className="col-span-12 xl:col-span-3">
              <label className="block font-onest font-semibold text-[10px] sm:text-xs md:text-xs lg:text-sm xl:text-base 2xl:text-[18px] 3xl:text-[18px] leading-[1.275] uppercase text-[#242424] mb-2 sm:mb-3" style={{ letterSpacing: '-2.5%' }}>
                Type of Holiday
              </label>
              <div className="relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 md:w-[17px] md:h-[18px] lg:w-[17px] lg:h-[18px] xl:w-[17px] xl:h-[18px] 2xl:w-[17.45px] 2xl:h-[18px]">
                  <Plane className="w-full h-full text-[#242424]" />
                </div>
                <input
                  type="text"
                  value={filters.holidayType}
                  onChange={(e) => setFilters({ ...filters, holidayType: e.target.value })}
                  className="w-full pl-4 sm:pl-5 md:pl-6 lg:pl-7 xl:pl-7 2xl:pl-7 pr-4 sm:pr-6 md:pr-8 py-1 sm:py-1.5 md:py-2 font-onest text-[10px] sm:text-xs md:text-xs lg:text-sm xl:text-base 2xl:text-[18px] 3xl:text-[18px] leading-[1.275] text-[#242424] bg-transparent border-b border-gray-300 outline-none focus:border-gray-500"
                  placeholder="Holiday Type"
                />
                {/* Dropdown Arrow */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-2 sm:w-[15px] sm:h-[8px] cursor-pointer">
                  <svg className="w-full h-full" viewBox="0 0 15 8" fill="none">
                    <path d="M1 1L7.5 7L14 1" stroke="#1E1E1E" strokeWidth="1.5"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="col-span-12 xl:col-span-2 flex flex-col gap-2">
              <button
                onClick={handleClearFilters}
                className="text-left font-onest text-[10px] sm:text-xs md:text-xs lg:text-sm xl:text-base 2xl:text-[18px] 3xl:text-[18px] leading-[1.275] text-[#242424] hover:opacity-70 transition-opacity"
                style={{ letterSpacing: '-2.5%' }}
              >
                Clear Filters
              </button>
              <button
                onClick={handleSearch}
                className="w-full h-[32px] sm:h-[36px] md:h-[40px] lg:h-[45px] xl:h-[48px] 2xl:h-[51px] bg-[#242424] rounded-[6px] sm:rounded-[7px] md:rounded-[8px] flex items-center justify-center gap-1 sm:gap-2 hover:bg-gray-800 transition-colors group"
              >
                <Search className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-[15.78px] lg:h-[16.19px] text-white" />
                <span className="font-onest text-[10px] sm:text-xs md:text-xs lg:text-sm xl:text-base 2xl:text-[18px] 3xl:text-[18px] leading-[1.275] text-white" style={{ letterSpacing: '-2.5%' }}>
                  Search
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}