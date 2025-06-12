'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface HeroSearchFormMobileProps {
  className?: string
}

export function HeroSearchFormMobile({ className }: HeroSearchFormMobileProps) {
  return (
    <div className={cn("w-full h-[307px] bg-white rounded-xl p-6", className)}>
      <div className="space-y-4">
        {/* I want to travel to... */}
        <div>
          <label className="font-onest font-semibold text-[14px] uppercase tracking-[-2.5%] text-[#242424] mb-[9px] block">
            I want to travel to...
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Bali, Indonesia"
              className="w-full h-[27px] pl-[23px] pr-4 font-onest text-[14px] text-[#242424] placeholder:text-[#242424] focus:outline-none bg-transparent"
            />
            <svg className="absolute left-0 top-1/2 -translate-y-1/2 w-[12px] h-[18px]" fill="#242424" viewBox="0 0 13 18">
              <path d="M6.37 0C2.85 0 0 2.85 0 6.37c0 4.75 6.37 11.63 6.37 11.63s6.37-6.88 6.37-11.63C12.74 2.85 9.89 0 6.37 0zm0 9.56c-1.76 0-3.19-1.43-3.19-3.19s1.43-3.19 3.19-3.19 3.19 1.43 3.19 3.19-1.43 3.19-3.19 3.19z"/>
            </svg>
          </div>
        </div>
        
        {/* Date Row */}
        <div className="grid grid-cols-2 gap-[73px]">
          {/* From Date */}
          <div>
            <label className="font-onest font-semibold text-[14px] uppercase tracking-[-2.5%] text-[#242424] mb-[6px] block">
              From
            </label>
            <div className="relative">
              <input
                type="text"
                value="Jan 25"
                readOnly
                className="w-full h-[18px] pl-[26px] pr-2 font-onest text-[14px] text-[#242424] cursor-pointer focus:outline-none bg-transparent"
              />
              <svg className="absolute left-0 top-1/2 -translate-y-1/2 w-[16px] h-[18px]" fill="#242424" viewBox="0 0 16 18">
                <path d="M14.12 2h-1.06V0h-2.12v2H5.06V0H2.94v2H1.88C.84 2 0 2.84 0 3.88v12.24C0 17.16.84 18 1.88 18h12.24c1.04 0 1.88-.84 1.88-1.88V3.88C16 2.84 15.16 2 14.12 2zm0 14.12H1.88V7.06h12.24v9.06z"/>
              </svg>
            </div>
          </div>
          
          {/* To Date */}
          <div>
            <label className="font-onest font-semibold text-[14px] uppercase tracking-[-2.5%] text-[#242424] mb-[6px] block">
              To
            </label>
            <div className="relative">
              <input
                type="text"
                value="Jan 25"
                readOnly
                className="w-full h-[18px] pl-[26px] pr-2 font-onest text-[14px] text-[#242424] cursor-pointer focus:outline-none bg-transparent"
              />
              <svg className="absolute left-0 top-1/2 -translate-y-1/2 w-[16px] h-[18px]" fill="#242424" viewBox="0 0 16 18">
                <path d="M14.12 2h-1.06V0h-2.12v2H5.06V0H2.94v2H1.88C.84 2 0 2.84 0 3.88v12.24C0 17.16.84 18 1.88 18h12.24c1.04 0 1.88-.84 1.88-1.88V3.88C16 2.84 15.16 2 14.12 2zm0 14.12H1.88V7.06h12.24v9.06z"/>
              </svg>
            </div>
          </div>
        </div>
        
        {/* Type of Holiday */}
        <div>
          <label className="font-onest font-semibold text-[14px] uppercase tracking-[-2.5%] text-[#242424] mb-[6px] block">
            Type of holiday
          </label>
          <div className="relative">
            <select className="w-full h-[18px] pl-[27px] pr-[40px] font-onest text-[14px] text-[#242424] appearance-none cursor-pointer focus:outline-none bg-transparent">
              <option>Group Holidays</option>
              <option>Private Tour</option>
              <option>Flexi Holidays</option>
            </select>
            <svg className="absolute left-0 top-1/2 -translate-y-1/2 w-[17px] h-[18px]" fill="#242424" viewBox="0 0 17 18">
              <path d="M8.72 1.72a.75.75 0 00-1.44 0L5.85 4.6a.75.75 0 01-.56.41l-3.2.47a.75.75 0 00-.42 1.28l2.32 2.26a.75.75 0 01.22.66l-.55 3.2a.75.75 0 001.09.79l2.86-1.5a.75.75 0 01.7 0l2.86 1.5a.75.75 0 001.09-.79l-.55-3.2a.75.75 0 01.22-.66l2.32-2.26a.75.75 0 00-.42-1.28l-3.2-.47a.75.75 0 01-.56-.41L8.72 1.72z"/>
            </svg>
            <svg className="absolute right-[15px] top-1/2 -translate-y-1/2 w-[9px] h-[5px]" fill="none" viewBox="0 0 9 5">
              <path d="M1 1l3.5 3L8 1" stroke="#1E1E1E" strokeWidth="1.5"/>
            </svg>
          </div>
        </div>
        
        {/* Search Button */}
        <button type="submit" className="w-full h-[45px] bg-[#242424] hover:bg-gray-800 rounded-lg flex items-center justify-center gap-2 transition-colors mt-6">
          <svg className="w-[16px] h-[16px]" fill="white" viewBox="0 0 16 16">
            <path d="M15.7 14.3l-4.1-4.1c.8-1 1.3-2.3 1.3-3.7 0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6c1.4 0 2.7-.5 3.7-1.3l4.1 4.1c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4zM2 6.5C2 4 4 2 6.5 2S11 4 11 6.5 9 11 6.5 11 2 9 2 6.5z"/>
          </svg>
          <span className="font-onest text-[14px] text-white tracking-[-2.5%]">Search</span>
        </button>
      </div>
    </div>
  )
}