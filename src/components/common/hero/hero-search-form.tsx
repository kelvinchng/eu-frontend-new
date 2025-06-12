'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface HeroSearchFormProps {
  className?: string
}

export function HeroSearchForm({ className }: HeroSearchFormProps) {
  return (
    <div className={cn(
      "h-[8.8vw] bg-white rounded-[12px] shadow-lg",
      "px-[3.7vw] py-[2.08vw]",
      "hidden lg:block", // Only show on desktop
      className
    )}>
      <form className="flex items-center h-full">
        {/* I want to travel to... - 201px width */}
        <div className="relative w-[10.47vw] h-[3.28vw]">
          <label className="font-onest font-semibold text-[0.94vw] uppercase leading-[1.275] tracking-[-0.025em] text-[#242424] block">
            I want to travel to…
          </label>
          <div className="relative mt-[0.89vw]">
            <svg className="absolute left-[0.016vw] top-[0.16vw] w-[0.66vw] h-[0.94vw]" viewBox="0 0 13 18" fill="none">
              <path d="M6.37 0C2.85 0 0 2.85 0 6.37c0 4.75 6.37 11.63 6.37 11.63s6.37-6.88 6.37-11.63C12.74 2.85 9.89 0 6.37 0zm0 9.56c-1.76 0-3.19-1.43-3.19-3.19s1.43-3.19 3.19-3.19 3.19 1.43 3.19 3.19-1.43 3.19-3.19 3.19z" fill="#242424"/>
            </svg>
            <input
              type="text"
              placeholder="Bali, Indonesia"
              className="w-full font-onest text-[0.94vw] leading-[1.275] text-[#242424] placeholder:text-[#242424] focus:outline-none bg-transparent pl-[1.2vw]"
            />
          </div>
        </div>

        {/* Gap 133px */}
        <div className="w-[6.93vw]" />

        {/* From Date - 83px width */}
        <div className="relative w-[4.32vw] h-[3.28vw]">
          <label className="font-onest font-semibold text-[0.94vw] uppercase leading-[1.275] tracking-[-0.025em] text-[#242424] block">
            From
          </label>
          <div className="relative mt-[0.89vw]">
            <svg className="absolute left-0 top-[0.16vw] w-[0.84vw] h-[0.94vw]" viewBox="0 0 16 18" fill="none">
              <path d="M14.12 2h-1.06V0h-2.12v2H5.06V0H2.94v2H1.88C.84 2 0 2.84 0 3.88v12.24C0 17.16.84 18 1.88 18h12.24c1.04 0 1.88-.84 1.88-1.88V3.88C16 2.84 15.16 2 14.12 2zm0 14.12H1.88V7.06h12.24v9.06z" fill="#242424"/>
            </svg>
            <input
              type="text"
              value="Jan 25"
              readOnly
              className="w-full font-onest text-[0.94vw] leading-[1.275] text-[#242424] cursor-pointer focus:outline-none bg-transparent pl-[1.35vw]"
            />
          </div>
        </div>

        {/* Gap 133px */}
        <div className="w-[6.93vw]" />

        {/* To Date - 83px width */}
        <div className="relative w-[4.32vw] h-[3.28vw]">
          <label className="font-onest font-semibold text-[0.94vw] uppercase leading-[1.275] tracking-[-0.025em] text-[#242424] block">
            To
          </label>
          <div className="relative mt-[0.89vw]">
            <svg className="absolute left-0 top-[0.16vw] w-[0.84vw] h-[0.94vw]" viewBox="0 0 16 18" fill="none">
              <path d="M14.12 2h-1.06V0h-2.12v2H5.06V0H2.94v2H1.88C.84 2 0 2.84 0 3.88v12.24C0 17.16.84 18 1.88 18h12.24c1.04 0 1.88-.84 1.88-1.88V3.88C16 2.84 15.16 2 14.12 2zm0 14.12H1.88V7.06h12.24v9.06z" fill="#242424"/>
            </svg>
            <input
              type="text"
              value="Jan 25"
              readOnly
              className="w-full font-onest text-[0.94vw] leading-[1.275] text-[#242424] cursor-pointer focus:outline-none bg-transparent pl-[1.35vw]"
            />
          </div>
        </div>

        {/* Gap 133px */}
        <div className="w-[6.93vw]" />

        {/* Type of Holiday - 202px width */}
        <div className="relative w-[10.52vw] h-[3.28vw]">
          <label className="font-onest font-semibold text-[0.94vw] uppercase leading-[1.275] tracking-[-0.025em] text-[#242424] block">
            Type of Holiday
          </label>
          <div className="relative mt-[0.89vw]">
            <svg className="absolute left-0 top-[0.16vw] w-[0.91vw] h-[0.94vw]" viewBox="0 0 18 18" fill="none">
              <path d="M8.72 1.72a.75.75 0 00-1.44 0L5.85 4.6a.75.75 0 01-.56.41l-3.2.47a.75.75 0 00-.42 1.28l2.32 2.26a.75.75 0 01.22.66l-.55 3.2a.75.75 0 001.09.79l2.86-1.5a.75.75 0 01.7 0l2.86 1.5a.75.75 0 001.09-.79l-.55-3.2a.75.75 0 01.22-.66l2.32-2.26a.75.75 0 00-.42-1.28l-3.2-.47a.75.75 0 01-.56-.41L8.72 1.72z" fill="#242424"/>
            </svg>
            <select className="w-full font-onest text-[0.94vw] leading-[1.275] text-[#242424] appearance-none cursor-pointer focus:outline-none bg-transparent pl-[1.41vw] pr-[2.08vw]">
              <option>Group Holidays</option>
              <option>Private Tour</option>
              <option>Flexi Holidays</option>
            </select>
            <svg className="absolute right-[0.78vw] top-[0.42vw] w-[0.78vw] h-[0.42vw] pointer-events-none" viewBox="0 0 15 8" fill="none">
              <path d="M1 1l6.5 6L14 1" stroke="#1E1E1E" strokeWidth="1.5" fill="none"/>
            </svg>
          </div>
        </div>

        {/* Gap 133px */}
        <div className="w-[6.93vw]" />

        {/* Filter & Search - 136px width */}
        <div className="relative w-[7.08vw] h-[4.38vw]">
          <button 
            type="button" 
            className="absolute top-0 left-0 font-onest text-[0.94vw] leading-[1.275] tracking-[-0.025em] text-[#242424] hover:underline"
          >
            Clear Filters
          </button>
          <button 
            type="submit" 
            className="absolute bottom-0 left-0 w-full h-[2.66vw] bg-[#242424] hover:bg-gray-800 rounded-[8px] flex items-center justify-center gap-[0.42vw] transition-colors"
          >
            <svg className="w-[0.82vw] h-[0.84vw]" viewBox="0 0 16 16" fill="none">
              <circle cx="6.3" cy="6.3" r="6.3" fill="none" stroke="white" strokeWidth="1"/>
              <line x1="10.54" y1="10.96" x2="15.78" y2="16.2" stroke="white" strokeWidth="1"/>
            </svg>
            <span className="font-onest text-[0.94vw] leading-[1.275] tracking-[-0.025em] text-white">Search</span>
          </button>
        </div>
      </form>
    </div>
  )
}