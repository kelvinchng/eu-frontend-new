'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'

interface FilterBarMobileProps {
  className?: string
  onSearch?: (filters: FilterOptions) => void
  onClearFilters?: () => void
  isOpen?: boolean
  onClose?: () => void
}

interface FilterOptions {
  destination: string
  from: string
  to: string
  holidayType: string
  duration: string
  sortBy: string
}

export function FilterBarMobile({ className, onSearch, onClearFilters, isOpen = true, onClose }: FilterBarMobileProps) {
  const [filters, setFilters] = useState<FilterOptions>({
    destination: 'Switzerland',
    from: 'Jan 2025',
    to: 'Jan 2025',
    holidayType: 'Group Holiday',
    duration: '6 – 9 Days',
    sortBy: 'Price: Low to High'
  })

  const handleSearch = () => {
    onSearch?.(filters)
    onClose?.()
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

  if (!isOpen) return null

  return (
    <div className={cn("w-full max-w-[358px]", className)}>
      <div className="flex flex-col gap-[34px]">
        {/* Filter Header */}
        <div className="relative h-[23px]">
          <h2 className="font-thunder font-normal text-[25px] leading-[0.92] text-[#242424]">
            Filter
          </h2>
          {/* Filter Icon */}
          <div className="absolute right-0 top-[3px] w-[17.36px] h-[16.26px]">
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

        {/* Filter Settings */}
        <div className="relative h-[592px]">
          {/* Destination */}
          <div className="absolute top-0 left-0 w-full h-[54px]">
            <div className="font-onest font-bold text-[13px] leading-[1.275] uppercase text-[#242424]">
              Destination
            </div>
            <div className="flex items-center gap-[10px] mt-[18px]">
              <svg width="13" height="20" viewBox="0 0 13 20" fill="none">
                <path d="M6.265 0C2.815 0 0 2.815 0 6.265C0 11.53 6.265 20 6.265 20S12.53 11.53 12.53 6.265C12.53 2.815 9.715 0 6.265 0Z" fill="#242424"/>
                <ellipse cx="6.265" cy="6.265" rx="2.43" ry="2.74" fill="white"/>
              </svg>
              <span className="font-onest text-[13px] leading-[1.275] text-[#242424]">{filters.destination}</span>
            </div>
            <svg className="absolute right-0 bottom-[8px]" width="8" height="5" viewBox="0 0 8 5" fill="none">
              <path d="M1 1L4 4L7 1" stroke="#1E1E1E" strokeWidth="1.5"/>
            </svg>
          </div>

          {/* Divider */}
          <div className="absolute top-[72px] left-0 w-full h-[1px] bg-[#E8E8E8]"></div>

          {/* From */}
          <div className="absolute top-[92px] left-0 w-full h-[52px]">
            <div className="font-onest font-bold text-[13px] leading-[1.275] uppercase text-[#242424]">
              From
            </div>
            <div className="flex items-center gap-[6px] mt-[18px]">
              <svg width="15" height="19" viewBox="0 0 15 19" fill="none">
                <path d="M0 2.365V17.565C0 18.35 0.63 19 1.4 19H13.6C14.37 19 15 18.35 15 17.565V2.365C15 1.58 14.37 0.93 13.6 0.93H11.8V2.365H13.6V17.565H1.4V2.365H3.2V0.93H1.4C0.63 0.93 0 1.58 0 2.365ZM3.2 0V1.435H11.8V0H13.2V1.435V2.87H11.8H3.2H1.8V1.435V0H3.2Z" fill="#242424"/>
              </svg>
              <span className="font-onest text-[13px] leading-[1.275] text-[#242424]">{filters.from}</span>
            </div>
            <svg className="absolute right-0 bottom-[10px]" width="8" height="5" viewBox="0 0 8 5" fill="none">
              <path d="M1 1L4 4L7 1" stroke="#1E1E1E" strokeWidth="1.5"/>
            </svg>
          </div>

          {/* Divider */}
          <div className="absolute top-[164px] left-0 w-full h-[1px] bg-[#E8E8E8]"></div>

          {/* To */}
          <div className="absolute top-[184px] left-0 w-full h-[52px]">
            <div className="font-onest font-bold text-[13px] leading-[1.275] uppercase text-[#242424]">
              To
            </div>
            <div className="flex items-center gap-[6px] mt-[18px]">
              <svg width="15" height="19" viewBox="0 0 15 19" fill="none">
                <path d="M0 2.365V17.565C0 18.35 0.63 19 1.4 19H13.6C14.37 19 15 18.35 15 17.565V2.365C15 1.58 14.37 0.93 13.6 0.93H11.8V2.365H13.6V17.565H1.4V2.365H3.2V0.93H1.4C0.63 0.93 0 1.58 0 2.365ZM3.2 0V1.435H11.8V0H13.2V1.435V2.87H11.8H3.2H1.8V1.435V0H3.2Z" fill="#242424"/>
              </svg>
              <span className="font-onest text-[13px] leading-[1.275] text-[#242424]">{filters.to}</span>
            </div>
            <svg className="absolute right-0 bottom-[10px]" width="8" height="5" viewBox="0 0 8 5" fill="none">
              <path d="M1 1L4 4L7 1" stroke="#1E1E1E" strokeWidth="1.5"/>
            </svg>
          </div>

          {/* Divider */}
          <div className="absolute top-[256px] left-0 w-full h-[1px] bg-[#E8E8E8]"></div>

          {/* Type of Holiday */}
          <div className="absolute top-[276px] left-0 w-full h-[52px]">
            <div className="font-onest font-bold text-[13px] leading-[1.275] uppercase text-[#242424]">
              Type of Holiday
            </div>
            <div className="flex items-center gap-[5px] mt-[18px]">
              <svg width="17" height="20" viewBox="0 0 17 20" fill="none">
                <path d="M8.32 0L11.76 8.7H16.64L8.32 19.39L0 8.7H5.14L8.32 0Z" fill="#242424"/>
              </svg>
              <span className="font-onest text-[13px] leading-[1.275] text-[#242424]">{filters.holidayType}</span>
            </div>
            <svg className="absolute right-0 bottom-[10px]" width="8" height="5" viewBox="0 0 8 5" fill="none">
              <path d="M1 1L4 4L7 1" stroke="#1E1E1E" strokeWidth="1.5"/>
            </svg>
          </div>

          {/* Divider */}
          <div className="absolute top-[348px] left-0 w-full h-[1px] bg-[#E8E8E8]"></div>

          {/* Duration */}
          <div className="absolute top-[368px] left-0 w-full h-[52px]">
            <div className="font-onest font-bold text-[13px] leading-[1.275] uppercase text-[#242424]">
              Duration
            </div>
            <div className="flex items-center gap-[6px] mt-[18px]">
              <svg width="15" height="19" viewBox="0 0 15 19" fill="none">
                <path d="M0 2.365V17.565C0 18.35 0.63 19 1.4 19H13.6C14.37 19 15 18.35 15 17.565V2.365C15 1.58 14.37 0.93 13.6 0.93H11.8V2.365H13.6V17.565H1.4V2.365H3.2V0.93H1.4C0.63 0.93 0 1.58 0 2.365ZM3.2 0V1.435H11.8V0H13.2V1.435V2.87H11.8H3.2H1.8V1.435V0H3.2Z" fill="#242424"/>
              </svg>
              <span className="font-onest text-[13px] leading-[1.275] text-[#242424]">{filters.duration}</span>
            </div>
            <svg className="absolute right-0 bottom-[10px]" width="8" height="5" viewBox="0 0 8 5" fill="none">
              <path d="M1 1L4 4L7 1" stroke="#1E1E1E" strokeWidth="1.5"/>
            </svg>
          </div>

          {/* Divider */}
          <div className="absolute top-[440px] left-0 w-full h-[1px] bg-[#E8E8E8]"></div>

          {/* Sort By */}
          <div className="absolute top-[460px] left-0 w-full h-[52px]">
            <div className="font-onest font-bold text-[13px] leading-[1.275] uppercase text-[#242424]">
              Sort By
            </div>
            <div className="mt-[18px]">
              <span className="font-onest text-[13px] leading-[1.275] text-[#242424]">{filters.sortBy}</span>
            </div>
            <svg className="absolute right-0 bottom-[10px]" width="8" height="5" viewBox="0 0 8 5" fill="none">
              <path d="M1 1L4 4L7 1" stroke="#1E1E1E" strokeWidth="1.5"/>
            </svg>
          </div>

          {/* Divider */}
          <div className="absolute top-[532px] left-0 w-full h-[1px] bg-[#E8E8E8]"></div>

          {/* Buttons */}
          <div className="absolute top-[556px] left-0 w-full flex gap-[5px]">
            {/* Clear Filters Button */}
            <button
              onClick={handleClearFilters}
              className="w-[118px] h-[36px] rounded-[4px] border border-[#242424] flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <span className="font-onest text-[12px] leading-[1.275] text-[#242424]">
                Clear Filters
              </span>
            </button>

            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="w-[118px] h-[36px] bg-[#242424] rounded-[4px] border border-[#242424] flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <span className="font-onest text-[12px] leading-[1.275] text-white">
                Search
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}