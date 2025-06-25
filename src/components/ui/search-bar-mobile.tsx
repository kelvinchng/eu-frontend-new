'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'

interface SearchBarMobileProps {
  className?: string
  onSearch?: (filters: SearchFilters) => void
}

interface SearchFilters {
  destination: string
  from: string
  to: string
  holidayType: string
}

export function SearchBarMobile({ className, onSearch }: SearchBarMobileProps) {
  const [filters, setFilters] = useState<SearchFilters>({
    destination: 'Bali, Indonesia',
    from: 'Jan 25',
    to: 'Jan 25',
    holidayType: 'Group Holidays'
  })

  const handleSearch = () => {
    onSearch?.(filters)
  }

  return (
    <div className={cn("w-[358px] bg-white rounded-[12px] px-[25px] pt-[24px] pb-[28px]", className)}>
      <div className="flex flex-col gap-[27px]">
        {/* Destination Section */}
        <div className="flex flex-col gap-[23px]">
          {/* I want to travel to */}
          <div className="relative w-[156px] h-[45px]">
            <div className="absolute top-0 left-0 font-onest font-semibold text-[14px] leading-[1.275] uppercase text-[#242424]" style={{ letterSpacing: '-2.5%' }}>
              I want to travel to…
            </div>
            <div className="absolute top-[27px] left-0 flex items-center gap-[10px]">
              <svg width="13" height="18" viewBox="0 0 13 18" fill="none">
                <path d="M6.37 0C3.02 0 0.31 2.71 0.31 6.06C0.31 10.74 6.37 18 6.37 18C6.37 18 12.43 10.74 12.43 6.06C12.43 2.71 9.72 0 6.37 0Z" fill="#242424"/>
                <ellipse cx="6.37" cy="6.06" rx="2.47" ry="2.47" fill="white"/>
              </svg>
              <input
                type="text"
                value={filters.destination}
                onChange={(e) => setFilters({ ...filters, destination: e.target.value })}
                className="w-[94px] font-onest text-[14px] leading-[1.275] text-[#242424] bg-transparent outline-none"
                placeholder="Destination"
              />
            </div>
          </div>

          {/* From and To Row */}
          <div className="flex justify-between items-center gap-[73px]">
            {/* From */}
            <div className="relative w-[71px] h-[43px]">
              <div className="absolute top-0 left-0 font-onest font-semibold text-[14px] leading-[1.275] uppercase text-[#242424]" style={{ letterSpacing: '-2.5%' }}>
                From
              </div>
              <div className="absolute top-[25px] left-0 flex items-center gap-[10px]">
                <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
                  <path d="M0 2.365V16.635C0 17.42 0.63 18.07 1.4 18.07H14.72C15.49 18.07 16.12 17.42 16.12 16.635V2.365C16.12 1.58 15.49 0.93 14.72 0.93H12.92V2.365H14.72V16.635H1.4V2.365H3.2V0.93H1.4C0.63 0.93 0 1.58 0 2.365ZM3.42 0V1.435H12.7V0H14.12V1.435V2.87H12.7H3.42H2V1.435V0H3.42Z" fill="#242424"/>
                </svg>
                <input
                  type="text"
                  value={filters.from}
                  onChange={(e) => setFilters({ ...filters, from: e.target.value })}
                  className="w-[45px] font-onest text-[14px] leading-[1.275] text-[#242424] bg-transparent outline-none"
                  placeholder="From"
                />
              </div>
            </div>

            {/* To */}
            <div className="relative w-[71px] h-[43px]">
              <div className="absolute top-0 left-0 font-onest font-semibold text-[14px] leading-[1.275] uppercase text-[#242424]" style={{ letterSpacing: '-2.5%' }}>
                To
              </div>
              <div className="absolute top-[25px] left-0 flex items-center gap-[10px]">
                <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
                  <path d="M0 2.365V16.635C0 17.42 0.63 18.07 1.4 18.07H14.72C15.49 18.07 16.12 17.42 16.12 16.635V2.365C16.12 1.58 15.49 0.93 14.72 0.93H12.92V2.365H14.72V16.635H1.4V2.365H3.2V0.93H1.4C0.63 0.93 0 1.58 0 2.365ZM3.42 0V1.435H12.7V0H14.12V1.435V2.87H12.7H3.42H2V1.435V0H3.42Z" fill="#242424"/>
                </svg>
                <input
                  type="text"
                  value={filters.to}
                  onChange={(e) => setFilters({ ...filters, to: e.target.value })}
                  className="w-[45px] font-onest text-[14px] leading-[1.275] text-[#242424] bg-transparent outline-none"
                  placeholder="To"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Type of Holiday */}
        <div className="relative w-[165px] h-[44px]">
          <div className="absolute top-0 left-0 font-onest font-semibold text-[14px] leading-[1.275] uppercase text-[#242424]" style={{ letterSpacing: '-2.5%' }}>
            Type of holiday
          </div>
          <div className="absolute top-[26px] left-0 flex items-center gap-[10px]">
            <svg width="17" height="18" viewBox="0 0 17 18" fill="none">
              <path d="M8.725 0L12.36 7.8H17.45L8.725 18L0 7.8H5.09L8.725 0Z" fill="#242424"/>
            </svg>
            <input
              type="text"
              value={filters.holidayType}
              onChange={(e) => setFilters({ ...filters, holidayType: e.target.value })}
              className="w-[101px] font-onest text-[14px] leading-[1.275] text-[#242424] bg-transparent outline-none"
              placeholder="Holiday Type"
            />
          </div>
          {/* Dropdown Arrow */}
          <div className="absolute top-[33px] left-[156px] w-[9px] h-[5px] cursor-pointer">
            <svg width="9" height="5" viewBox="0 0 9 5" fill="none">
              <path d="M1 1L4.5 4L8 1" stroke="#1E1E1E" strokeWidth="1.5"/>
            </svg>
          </div>
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="w-[308px] h-[45px] bg-[#242424] rounded-[8px] flex items-center justify-center gap-[19.57px] hover:bg-gray-800 transition-colors"
        >
          <span className="font-onest text-[14px] leading-[1.275] text-white" style={{ letterSpacing: '-2.5%' }}>
            Search
          </span>
          <div className="w-[14.46px] h-[13.76px]">
            <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
              <circle cx="5.6" cy="5.35" r="5.1" stroke="white" strokeWidth="1" fill="none"/>
              <line x1="9.38" y1="9.31" x2="14.04" y2="13.76" stroke="white" strokeWidth="1"/>
            </svg>
          </div>
        </button>
      </div>
    </div>
  )
}