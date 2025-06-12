'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ToursSearchFilterProps {
  className?: string
  onSearch?: (filters: SearchFilters) => void
}

interface SearchFilters {
  destination: string
  from: string
  to: string
  holidayType: string
  duration: string
  sortBy: string
}

export function ToursSearchFilter({ className, onSearch }: ToursSearchFilterProps) {
  const [filters, setFilters] = useState<SearchFilters>({
    destination: 'Switzerland',
    from: 'Jan 2025',
    to: 'Jan 2025',
    holidayType: 'Group Holiday',
    duration: '6 – 9 Days',
    sortBy: 'Price: Low to High'
  })

  const [isExpanded, setIsExpanded] = useState(true)

  const handleFilterChange = (key: keyof SearchFilters, value: string) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onSearch?.(newFilters)
  }

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
    onSearch?.(clearedFilters)
  }

  return (
    <div className={cn("w-full", className)}>
      {/* Desktop Filter - Matches Figma exactly */}
      <div className="hidden lg:block">
        <div className="w-full max-w-[1255px] mx-auto">
          <div className="flex flex-col gap-[32px]">
            {/* First Row */}
            <div className="flex items-center gap-[172px]">
              {/* Left Group */}
              <div className="flex items-center justify-between gap-[120px]">
                {/* Destination */}
                <div className="w-[203px] h-[76px] relative">
                  <div className="absolute left-0 top-0 font-onest font-semibold text-[18px] leading-[1.275] tracking-[-2.5%] uppercase text-[#242424]">
                    Destination
                  </div>
                  <div className="absolute left-[32px] top-[52px] font-onest text-[18px] leading-[1.275] text-[#242424]">
                    {filters.destination}
                  </div>
                  {/* Location Icon */}
                  <div className="absolute left-[0.4px] top-[50px] w-[16.53px] h-[26.39px]">
                    <svg width="17" height="27" viewBox="0 0 17 27" fill="none">
                      <path d="M8.265 0C3.805 0 0.4 3.305 0.4 7.765C0.4 13.46 8.265 26.39 8.265 26.39S16.13 13.46 16.13 7.765C16.13 3.305 12.725 0 8.265 0Z" fill="#242424"/>
                      <ellipse cx="8.265" cy="7.765" rx="3.2" ry="3.6" fill="white"/>
                    </svg>
                  </div>
                  {/* Dropdown Arrow */}
                  <div className="absolute right-0 top-[61px] w-[15px] h-[8px]">
                    <svg width="15" height="8" viewBox="0 0 15 8" fill="none">
                      <path d="M1 1L7.5 7L14 1" stroke="#1E1E1E" strokeWidth="1.5"/>
                    </svg>
                  </div>
                </div>

                {/* From */}
                <div className="w-[144px] h-[78px] relative">
                  <div className="absolute left-0 top-0 font-onest font-semibold text-[18px] leading-[1.275] tracking-[-2.5%] uppercase text-[#242424]">
                    From
                  </div>
                  <div className="absolute left-[36px] top-[54px] font-onest text-[18px] leading-[1.275] text-[#242424]">
                    {filters.from}
                  </div>
                  {/* Calendar Icon */}
                  <div className="absolute left-0 top-[52px] w-[21px] h-[26px]">
                    <svg width="21" height="27" viewBox="0 0 21 27" fill="none">
                      <path d="M0 3.365V18.565C0 19.35 0.63 20 1.4 20H19.6C20.37 20 21 19.35 21 18.565V3.365C21 2.58 20.37 1.93 19.6 1.93H17.8V3.365H19.6V18.565H1.4V3.365H3.2V1.93H1.4C0.63 1.93 0 2.58 0 3.365ZM4.6 1V2.435H16.4V1H17.8V2.435V3.87H16.4H4.6H3.2V2.435V1H4.6Z" fill="#242424"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* To */}
              <div className="w-[156px] h-[78px] relative">
                <div className="absolute left-0 top-0 font-onest font-semibold text-[18px] leading-[1.275] tracking-[-2.5%] uppercase text-[#242424]">
                  To
                </div>
                <div className="absolute left-[34px] top-[54px] font-onest text-[18px] leading-[1.275] text-[#242424]">
                  {filters.to}
                </div>
                {/* Calendar Icon */}
                <div className="absolute left-0 top-[52px] w-[21px] h-[26px]">
                  <svg width="21" height="27" viewBox="0 0 21 27" fill="none">
                    <path d="M0 3.365V18.565C0 19.35 0.63 20 1.4 20H19.6C20.37 20 21 19.35 21 18.565V3.365C21 2.58 20.37 1.93 19.6 1.93H17.8V3.365H19.6V18.565H1.4V3.365H3.2V1.93H1.4C0.63 1.93 0 2.58 0 3.365ZM4.6 1V2.435H16.4V1H17.8V2.435V3.87H16.4H4.6H3.2V2.435V1H4.6Z" fill="#242424"/>
                  </svg>
                </div>
              </div>

              {/* Type of Holiday */}
              <div className="w-[257px] h-[78px] relative">
                <div className="absolute left-0 top-0 font-onest font-semibold text-[18px] leading-[1.275] tracking-[-2.5%] uppercase text-[#242424]">
                  Type of Holiday
                </div>
                <div className="absolute left-[35px] top-[54px] font-onest text-[18px] leading-[1.275] text-[#242424]">
                  {filters.holidayType}
                </div>
                {/* Tree Icon */}
                <div className="absolute left-0 top-[52px] w-[23px] h-[26px]">
                  <svg width="23" height="27" viewBox="0 0 23 27" fill="none">
                    <path d="M11.32 0L16.48 11.44H23.64L11.32 26.39L0 11.44H7.16L11.32 0Z" fill="#242424"/>
                  </svg>
                </div>
                {/* Dropdown Arrow */}
                <div className="absolute right-0 top-[60px] w-[15px] h-[8px]">
                  <svg width="15" height="8" viewBox="0 0 15 8" fill="none">
                    <path d="M1 1L7.5 7L14 1" stroke="#1E1E1E" strokeWidth="1.5"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Divider Line */}
            <div className="w-full h-[1px] bg-black/25"></div>

            {/* Second Row */}
            <div className="flex items-center justify-between gap-[369px]">
              {/* Left Group */}
              <div className="flex items-center justify-between gap-[117px]">
                {/* Duration */}
                <div className="w-[205px] h-[78px] relative">
                  <div className="absolute left-0 top-0 font-onest font-semibold text-[18px] leading-[1.275] tracking-[-2.5%] uppercase text-[#242424]">
                    Duration
                  </div>
                  <div className="absolute left-[34px] top-[54px] font-onest text-[18px] leading-[1.275] text-[#242424]">
                    {filters.duration}
                  </div>
                  {/* Calendar Icon */}
                  <div className="absolute left-0 top-[52px] w-[21px] h-[26px]">
                    <svg width="21" height="27" viewBox="0 0 21 27" fill="none">
                      <path d="M0 3.365V18.565C0 19.35 0.63 20 1.4 20H19.6C20.37 20 21 19.35 21 18.565V3.365C21 2.58 20.37 1.93 19.6 1.93H17.8V3.365H19.6V18.565H1.4V3.365H3.2V1.93H1.4C0.63 1.93 0 2.58 0 3.365ZM4.6 1V2.435H16.4V1H17.8V2.435V3.87H16.4H4.6H3.2V2.435V1H4.6Z" fill="#242424"/>
                    </svg>
                  </div>
                  {/* Dropdown Arrow */}
                  <div className="absolute right-0 top-[60px] w-[15px] h-[8px]">
                    <svg width="15" height="8" viewBox="0 0 15 8" fill="none">
                      <path d="M1 1L7.5 7L14 1" stroke="#1E1E1E" strokeWidth="1.5"/>
                    </svg>
                  </div>
                </div>

                {/* Sort By */}
                <div className="w-[239px] h-[73px] relative">
                  <div className="absolute left-0 top-0 font-onest font-semibold text-[18px] leading-[1.275] tracking-[-2.5%] uppercase text-[#242424]">
                    Sort by
                  </div>
                  <div className="absolute left-0 top-[50px] font-onest text-[18px] leading-[1.275] text-[#242424]">
                    {filters.sortBy}
                  </div>
                  {/* Dropdown Arrow */}
                  <div className="absolute right-0 top-[56px] w-[15px] h-[8px]">
                    <svg width="15" height="8" viewBox="0 0 15 8" fill="none">
                      <path d="M1 1L7.5 7L14 1" stroke="#1E1E1E" strokeWidth="1.5"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right Group - Buttons */}
              <div className="flex items-center gap-[21px]">
                {/* Search Button */}
                <Button
                  onClick={handleSearch}
                  className="w-[152px] h-[51px] bg-[#242424] text-white rounded-[9px] border border-black/35 font-onest text-[18px] leading-[1.275] tracking-[-2.5%] hover:bg-[#1a1a1a]"
                >
                  Search
                </Button>
                
                {/* Clear Filters Button */}
                <Button
                  onClick={handleClearFilters}
                  variant="outline"
                  className="w-[152px] h-[51px] bg-transparent text-[#242424] rounded-[9px] border border-black font-onest text-[18px] leading-[1.275] tracking-[-2.5%] hover:bg-gray-50"
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filter Header */}
      <div className="lg:hidden mb-[34px]">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-[16px] w-full"
        >
          {/* Filter Icon */}
          <div className="w-[17.36px] h-[16.26px]">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
              <g>
                <path d="M2.89 0L5.96 6.21M8.85 3.1L17.36 3.1M0 3.1L2.89 3.1" stroke="#242424" strokeWidth="2"/>
                <path d="M8.51 10.05L5.96 16.26M0 13.15L8.51 13.15M14.47 13.15L17.36 13.15" stroke="#242424" strokeWidth="2"/>
              </g>
            </svg>
          </div>
          <span className="font-thunder text-[25px] leading-[0.92] text-[#242424]">
            Filter
          </span>
        </button>
      </div>

      {/* Mobile Filter Settings */}
      {isExpanded && (
        <div className="lg:hidden">
          <div className="flex flex-col space-y-0">
            
            {/* Destination */}
            <div className="py-[18px] border-b border-[#E8E8E8]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[22px]">
                  {/* Location Icon */}
                  <div className="w-[12.53px] h-[20px]">
                    <svg width="13" height="20" viewBox="0 0 13 20" fill="none">
                      <path d="M6.265 0C2.805 0 0 2.805 0 6.265C0 10.96 6.265 20 6.265 20S12.53 10.96 12.53 6.265C12.53 2.805 9.725 0 6.265 0Z" fill="#242424"/>
                      <ellipse cx="6.265" cy="6.265" rx="2.43" ry="2.745" fill="white"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-onest font-bold text-[13px] leading-[1.275] text-[#242424] uppercase">
                      Destination
                    </div>
                    <div className="font-onest text-[13px] leading-[1.275] text-[#242424]">
                      {filters.destination}
                    </div>
                  </div>
                </div>
                {/* Arrow */}
                <svg width="8" height="4" viewBox="0 0 8 4" fill="none">
                  <path d="M1 1L4 3L7 1" stroke="#1E1E1E" strokeWidth="1.5"/>
                </svg>
              </div>
            </div>

            {/* From */}
            <div className="py-[18px] border-b border-[#E8E8E8]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[22px]">
                  {/* Calendar Icon */}
                  <div className="w-[15px] h-[18.93px]">
                    <svg width="15" height="19" viewBox="0 0 15 19" fill="none">
                      <path d="M0 2.365V17.565C0 18.35 0.63 19 1.4 19H13.6C14.37 19 15 18.35 15 17.565V2.365C15 1.58 14.37 0.93 13.6 0.93H11.8V2.365H13.6V17.565H1.4V2.365H3.2V0.93H1.4C0.63 0.93 0 1.58 0 2.365ZM4.6 0V1.435H10.4V0H11.8V1.435V2.87H10.4H4.6H3.2V1.435V0H4.6Z" fill="#242424"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-onest font-bold text-[13px] leading-[1.275] text-[#242424] uppercase">
                      From
                    </div>
                    <div className="font-onest text-[13px] leading-[1.275] text-[#242424]">
                      {filters.from}
                    </div>
                  </div>
                </div>
                {/* Arrow */}
                <svg width="8" height="4" viewBox="0 0 8 4" fill="none">
                  <path d="M1 1L4 3L7 1" stroke="#1E1E1E" strokeWidth="1.5"/>
                </svg>
              </div>
            </div>

            {/* To */}
            <div className="py-[18px] border-b border-[#E8E8E8]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[22px]">
                  {/* Calendar Icon */}
                  <div className="w-[15px] h-[18.93px]">
                    <svg width="15" height="19" viewBox="0 0 15 19" fill="none">
                      <path d="M0 2.365V17.565C0 18.35 0.63 19 1.4 19H13.6C14.37 19 15 18.35 15 17.565V2.365C15 1.58 14.37 0.93 13.6 0.93H11.8V2.365H13.6V17.565H1.4V2.365H3.2V0.93H1.4C0.63 0.93 0 1.58 0 2.365ZM4.6 0V1.435H10.4V0H11.8V1.435V2.87H10.4H4.6H3.2V1.435V0H4.6Z" fill="#242424"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-onest font-bold text-[13px] leading-[1.275] text-[#242424] uppercase">
                      To
                    </div>
                    <div className="font-onest text-[13px] leading-[1.275] text-[#242424]">
                      {filters.to}
                    </div>
                  </div>
                </div>
                {/* Arrow */}
                <svg width="8" height="4" viewBox="0 0 8 4" fill="none">
                  <path d="M1 1L4 3L7 1" stroke="#1E1E1E" strokeWidth="1.5"/>
                </svg>
              </div>
            </div>

            {/* Type of Holiday */}
            <div className="py-[18px] border-b border-[#E8E8E8]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[22px]">
                  {/* Tree Icon */}
                  <div className="w-[16.64px] h-[19.39px]">
                    <svg width="17" height="19" viewBox="0 0 17 19" fill="none">
                      <path d="M8.32 0L12.48 8.44H16.64L8.32 19.39L0 8.44H4.16L8.32 0Z" fill="#242424"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-onest font-bold text-[13px] leading-[1.275] text-[#242424] uppercase">
                      Type of Holiday
                    </div>
                    <div className="font-onest text-[13px] leading-[1.275] text-[#242424]">
                      {filters.holidayType}
                    </div>
                  </div>
                </div>
                {/* Arrow */}
                <svg width="8" height="4" viewBox="0 0 8 4" fill="none">
                  <path d="M1 1L4 3L7 1" stroke="#1E1E1E" strokeWidth="1.5"/>
                </svg>
              </div>
            </div>

            {/* Duration */}
            <div className="py-[18px] border-b border-[#E8E8E8]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[22px]">
                  {/* Calendar Icon */}
                  <div className="w-[15px] h-[18.93px]">
                    <svg width="15" height="19" viewBox="0 0 15 19" fill="none">
                      <path d="M0 2.365V17.565C0 18.35 0.63 19 1.4 19H13.6C14.37 19 15 18.35 15 17.565V2.365C15 1.58 14.37 0.93 13.6 0.93H11.8V2.365H13.6V17.565H1.4V2.365H3.2V0.93H1.4C0.63 0.93 0 1.58 0 2.365ZM4.6 0V1.435H10.4V0H11.8V1.435V2.87H10.4H4.6H3.2V1.435V0H4.6Z" fill="#242424"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-onest font-bold text-[13px] leading-[1.275] text-[#242424] uppercase">
                      Duration
                    </div>
                    <div className="font-onest text-[13px] leading-[1.275] text-[#242424]">
                      {filters.duration}
                    </div>
                  </div>
                </div>
                {/* Arrow */}
                <svg width="8" height="4" viewBox="0 0 8 4" fill="none">
                  <path d="M1 1L4 3L7 1" stroke="#1E1E1E" strokeWidth="1.5"/>
                </svg>
              </div>
            </div>

            {/* Sort By */}
            <div className="py-[18px] border-b border-[#E8E8E8]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[22px]">
                  <div className="w-[15px]"></div> {/* Spacer to align with other items */}
                  <div>
                    <div className="font-onest font-bold text-[13px] leading-[1.275] text-[#242424] uppercase">
                      Sort By
                    </div>
                    <div className="font-onest text-[13px] leading-[1.275] text-[#242424]">
                      {filters.sortBy}
                    </div>
                  </div>
                </div>
                {/* Arrow */}
                <svg width="8" height="4" viewBox="0 0 8 4" fill="none">
                  <path d="M1 1L4 3L7 1" stroke="#1E1E1E" strokeWidth="1.5"/>
                </svg>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-[5px] pt-[24px]">
              <Button
                onClick={handleClearFilters}
                variant="outline"
                className="flex-1 h-[36px] border border-[#242424] bg-transparent text-[#242424] rounded-[4px] font-onest text-[12px] hover:bg-[#f5f5f5]"
              >
                Clear Filters
              </Button>
              <Button
                onClick={handleSearch}
                variant="primary"
                className="flex-1 h-[36px] bg-[#242424] text-white rounded-[4px] font-onest text-[12px] hover:bg-[#1a1a1a]"
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}