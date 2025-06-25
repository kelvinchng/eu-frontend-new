'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { FilterBarMobile } from './filter-bar-mobile'

interface FilterBarProps {
  className?: string
  onSearch?: (filters: FilterOptions) => void
  onClearFilters?: () => void
}

interface FilterOptions {
  destination: string
  from: string
  to: string
  holidayType: string
  duration: string
  sortBy: string
}

export function FilterBar({ className, onSearch, onClearFilters }: FilterBarProps) {
  const [filters, setFilters] = useState<FilterOptions>({
    destination: 'Switzerland',
    from: 'Jan 25',
    to: 'Jan 25',
    holidayType: 'Group Holiday',
    duration: '6 - 9 Days',
    sortBy: 'Price: Low to High'
  })
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)

  const handleSearch = () => {
    onSearch?.(filters)
  }

  const handleClearFilters = () => {
    const clearedFilters = {
      destination: '',
      from: '',
      to: '',
      holidayType: '',
      duration: '',
      sortBy: ''
    }
    setFilters(clearedFilters)
    onClearFilters?.()
  }

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="lg:hidden">
        <button
          onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
          className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow-sm"
        >
          <span className="font-onest font-semibold text-sm sm:text-[16px] text-[#242424]">Filter & Sort</span>
          <div className="flex items-center gap-2">
            <div className="w-[17.36px] h-[16.26px]">
              <svg width="18" height="17" viewBox="0 0 18 17" fill="none">
                <g stroke="#000000" strokeWidth="2">
                  <path d="M2.89 0L8.85 6.21" />
                  <path d="M8.85 3.1H17.36" />
                  <path d="M0 3.1H2.89" />
                  <path d="M8.51 10.05L14.47 16.26" />
                  <path d="M0 13.15H8.51" />
                  <path d="M14.47 13.15H17.36" />
                </g>
              </svg>
            </div>
          </div>
        </button>
        
        {/* Mobile Filter Panel */}
        {mobileFilterOpen && (
          <div className="fixed inset-0 z-50 bg-black/50" onClick={() => setMobileFilterOpen(false)}>
            <div className="absolute right-0 top-0 h-full w-full max-w-[400px] bg-white p-6" onClick={(e) => e.stopPropagation()}>
              <FilterBarMobile
                onSearch={(filters) => {
                  onSearch?.(filters)
                  setMobileFilterOpen(false)
                }}
                onClearFilters={onClearFilters}
                isOpen={true}
                onClose={() => setMobileFilterOpen(false)}
              />
            </div>
          </div>
        )}
      </div>

      {/* Desktop Version */}
      <div className={cn("hidden lg:block w-full", className)}>
        <div className="flex flex-col gap-6 2xl:gap-[32px]">
          {/* First Row */}
          <div className="grid grid-cols-12 gap-4 xl:gap-6">
            {/* Destination */}
            <div className="col-span-3">
              <div className="relative">
                <label className="block font-onest font-semibold text-[10px] sm:text-xs md:text-xs lg:text-sm xl:text-base 2xl:text-[18px] 3xl:text-[18px] leading-[1.275] tracking-[-2.5%] uppercase text-[#242424] mb-2">
                  Destination
                </label>
                <div className="relative">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[16.53px] h-[26.39px]">
                    <svg width="17" height="27" viewBox="0 0 17 27" fill="none">
                      <path d="M8.265 0C3.805 0 0.4 3.305 0.4 7.765C0.4 13.46 8.265 26.39 8.265 26.39S16.13 13.46 16.13 7.765C16.13 3.305 12.725 0 8.265 0Z" fill="#242424"/>
                      <ellipse cx="8.265" cy="7.765" rx="3.2" ry="3.6" fill="white"/>
                    </svg>
                  </div>
                  <select
                    value={filters.destination}
                    onChange={(e) => setFilters({ ...filters, destination: e.target.value })}
                    className="w-full pl-8 pr-8 py-2 font-onest text-[10px] sm:text-xs md:text-xs lg:text-sm xl:text-base 2xl:text-[18px] 3xl:text-[18px] leading-[1.275] text-[#242424] bg-transparent border-b border-gray-300 outline-none focus:border-gray-500 appearance-none cursor-pointer"
                  >
                    <option value="Switzerland">Switzerland</option>
                    <option value="Italy">Italy</option>
                    <option value="France">France</option>
                    <option value="Germany">Germany</option>
                  </select>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[15px] h-[8px] pointer-events-none">
                    <svg width="15" height="8" viewBox="0 0 15 8" fill="none">
                      <path d="M1 1L7.5 7L14 1" stroke="#1E1E1E" strokeWidth="1.5"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* From */}
            <div className="col-span-2">
              <div className="relative">
                <label className="block font-onest font-semibold text-[10px] sm:text-xs md:text-xs lg:text-sm xl:text-base 2xl:text-[18px] 3xl:text-[18px] leading-[1.275] tracking-[-2.5%] uppercase text-[#242424] mb-2">
                  From
                </label>
                <div className="relative">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[21px] h-[26px]">
                    <svg width="21" height="27" viewBox="0 0 21 27" fill="none">
                      <path d="M0 3.365V18.565C0 19.35 0.63 20 1.4 20H19.6C20.37 20 21 19.35 21 18.565V3.365C21 2.58 20.37 1.93 19.6 1.93H17.8V3.365H19.6V18.565H1.4V3.365H3.2V1.93H1.4C0.63 1.93 0 2.58 0 3.365ZM4.6 1V2.435H16.4V1H17.8V2.435V3.87H16.4H4.6H3.2V2.435V1H4.6Z" fill="#242424"/>
                    </svg>
                  </div>
                  <input
                    type="text"
                    value={filters.from}
                    onChange={(e) => setFilters({ ...filters, from: e.target.value })}
                    className="w-full pl-8 pr-2 py-2 font-onest text-[10px] sm:text-xs md:text-xs lg:text-sm xl:text-base 2xl:text-[18px] 3xl:text-[18px] leading-[1.275] text-[#242424] bg-transparent border-b border-gray-300 outline-none focus:border-gray-500"
                    placeholder="Select date"
                  />
                </div>
              </div>
            </div>

            {/* To */}
            <div className="col-span-2">
              <div className="relative">
                <label className="block font-onest font-semibold text-[10px] sm:text-xs md:text-xs lg:text-sm xl:text-base 2xl:text-[18px] 3xl:text-[18px] leading-[1.275] tracking-[-2.5%] uppercase text-[#242424] mb-2">
                  To
                </label>
                <div className="relative">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[21px] h-[26px]">
                    <svg width="21" height="27" viewBox="0 0 21 27" fill="none">
                      <path d="M0 3.365V18.565C0 19.35 0.63 20 1.4 20H19.6C20.37 20 21 19.35 21 18.565V3.365C21 2.58 20.37 1.93 19.6 1.93H17.8V3.365H19.6V18.565H1.4V3.365H3.2V1.93H1.4C0.63 1.93 0 2.58 0 3.365ZM4.6 1V2.435H16.4V1H17.8V2.435V3.87H16.4H4.6H3.2V2.435V1H4.6Z" fill="#242424"/>
                    </svg>
                  </div>
                  <input
                    type="text"
                    value={filters.to}
                    onChange={(e) => setFilters({ ...filters, to: e.target.value })}
                    className="w-full pl-8 pr-2 py-2 font-onest text-[10px] sm:text-xs md:text-xs lg:text-sm xl:text-base 2xl:text-[18px] 3xl:text-[18px] leading-[1.275] text-[#242424] bg-transparent border-b border-gray-300 outline-none focus:border-gray-500"
                    placeholder="Select date"
                  />
                </div>
              </div>
            </div>

            {/* Type of Holiday */}
            <div className="col-span-3">
              <div className="relative">
                <label className="block font-onest font-semibold text-[10px] sm:text-xs md:text-xs lg:text-sm xl:text-base 2xl:text-[18px] 3xl:text-[18px] leading-[1.275] tracking-[-2.5%] uppercase text-[#242424] mb-2">
                  Type of Holiday
                </label>
                <div className="relative">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[23px] h-[26px]">
                    <svg width="23" height="27" viewBox="0 0 23 27" fill="none">
                      <path d="M11.32 0L16.48 11.44H23.64L11.32 26.39L0 11.44H7.16L11.32 0Z" fill="#242424"/>
                    </svg>
                  </div>
                  <select
                    value={filters.holidayType}
                    onChange={(e) => setFilters({ ...filters, holidayType: e.target.value })}
                    className="w-full pl-9 pr-8 py-2 font-onest text-[10px] sm:text-xs md:text-xs lg:text-sm xl:text-base 2xl:text-[18px] 3xl:text-[18px] leading-[1.275] text-[#242424] bg-transparent border-b border-gray-300 outline-none focus:border-gray-500 appearance-none cursor-pointer"
                  >
                    <option value="Group Holiday">Group Holiday</option>
                    <option value="Private Tour">Private Tour</option>
                    <option value="Family Holiday">Family Holiday</option>
                    <option value="Honeymoon">Honeymoon</option>
                  </select>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[15px] h-[8px] pointer-events-none">
                    <svg width="15" height="8" viewBox="0 0 15 8" fill="none">
                      <path d="M1 1L7.5 7L14 1" stroke="#1E1E1E" strokeWidth="1.5"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons - First Row */}
            <div className="col-span-2 flex items-end">
              <button
                onClick={handleClearFilters}
                className="w-full text-center font-onest text-[10px] sm:text-xs md:text-xs lg:text-sm xl:text-base 2xl:text-[18px] 3xl:text-[18px] leading-[1.275] text-[#242424] hover:opacity-70 transition-opacity pb-2"
                style={{ letterSpacing: '-2.5%' }}
              >
                Clear Filters
              </button>
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-full h-[1px] bg-black/25"></div>

          {/* Second Row */}
          <div className="grid grid-cols-12 gap-4 xl:gap-6">
            {/* Duration */}
            <div className="col-span-3">
              <div className="relative">
                <label className="block font-onest font-semibold text-[10px] sm:text-xs md:text-xs lg:text-sm xl:text-base 2xl:text-[18px] 3xl:text-[18px] leading-[1.275] tracking-[-2.5%] uppercase text-[#242424] mb-2">
                  Duration
                </label>
                <div className="relative">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[21px] h-[26px]">
                    <svg width="21" height="27" viewBox="0 0 21 27" fill="none">
                      <path d="M0 3.365V18.565C0 19.35 0.63 20 1.4 20H19.6C20.37 20 21 19.35 21 18.565V3.365C21 2.58 20.37 1.93 19.6 1.93H17.8V3.365H19.6V18.565H1.4V3.365H3.2V1.93H1.4C0.63 1.93 0 2.58 0 3.365ZM4.6 1V2.435H16.4V1H17.8V2.435V3.87H16.4H4.6H3.2V2.435V1H4.6Z" fill="#242424"/>
                    </svg>
                  </div>
                  <select
                    value={filters.duration}
                    onChange={(e) => setFilters({ ...filters, duration: e.target.value })}
                    className="w-full pl-8 pr-8 py-2 font-onest text-[10px] sm:text-xs md:text-xs lg:text-sm xl:text-base 2xl:text-[18px] 3xl:text-[18px] leading-[1.275] text-[#242424] bg-transparent border-b border-gray-300 outline-none focus:border-gray-500 appearance-none cursor-pointer"
                  >
                    <option value="3 - 5 Days">3 - 5 Days</option>
                    <option value="6 - 9 Days">6 - 9 Days</option>
                    <option value="10 - 14 Days">10 - 14 Days</option>
                    <option value="15+ Days">15+ Days</option>
                  </select>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[15px] h-[8px] pointer-events-none">
                    <svg width="15" height="8" viewBox="0 0 15 8" fill="none">
                      <path d="M1 1L7.5 7L14 1" stroke="#1E1E1E" strokeWidth="1.5"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Sort By */}
            <div className="col-span-4">
              <div className="relative">
                <label className="block font-onest font-semibold text-[10px] sm:text-xs md:text-xs lg:text-sm xl:text-base 2xl:text-[18px] 3xl:text-[18px] leading-[1.275] tracking-[-2.5%] uppercase text-[#242424] mb-2">
                  Sort by
                </label>
                <div className="relative">
                  <select
                    value={filters.sortBy}
                    onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                    className="w-full pr-8 py-2 font-onest text-[10px] sm:text-xs md:text-xs lg:text-sm xl:text-base 2xl:text-[18px] 3xl:text-[18px] leading-[1.275] text-[#242424] bg-transparent border-b border-gray-300 outline-none focus:border-gray-500 appearance-none cursor-pointer"
                  >
                    <option value="Price: Low to High">Price: Low to High</option>
                    <option value="Price: High to Low">Price: High to Low</option>
                    <option value="Duration: Short to Long">Duration: Short to Long</option>
                    <option value="Duration: Long to Short">Duration: Long to Short</option>
                    <option value="Most Popular">Most Popular</option>
                  </select>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[15px] h-[8px] pointer-events-none">
                    <svg width="15" height="8" viewBox="0 0 15 8" fill="none">
                      <path d="M1 1L7.5 7L14 1" stroke="#1E1E1E" strokeWidth="1.5"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Empty space */}
            <div className="col-span-3"></div>

            {/* Buttons */}
            <div className="col-span-2 flex gap-3">
              <button
                onClick={handleSearch}
                className="flex-1 h-[45px] lg:h-[51px] bg-[#242424] rounded-[9px] border border-black/35 flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
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