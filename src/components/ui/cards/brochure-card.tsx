'use client'

import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface BrochureCardProps {
  id: string
  title: string
  dateRange: string
  image: string
  onView?: () => void
  onDownload?: () => void
  className?: string
}

export function BrochureCard({
  id,
  title,
  dateRange,
  image,
  onView,
  onDownload,
  className
}: BrochureCardProps) {

  return (
    <div
      className={cn(
        "bg-white rounded-[20px] overflow-hidden border border-[#E8E8E8] group",
        className
      )}
    >
      {/* Image Container */}
      <div className="relative aspect-[261/337] overflow-hidden">
        <Image
          src={image}
          alt={`${title} brochure`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Title */}
      <div className="px-4 py-4 text-center">
        <h3 className="font-onest font-bold text-base text-[#242424] leading-tight">
          {title}
          <br />
          <span className="font-onest font-bold text-base text-[#242424]">
            {dateRange}
          </span>
        </h3>
      </div>

      {/* Buttons */}
      <div className="px-4 pb-4 space-y-2">
        <button 
          onClick={onView}
          className="w-full h-8 bg-[#242424] rounded-[9px] text-white font-onest text-sm hover:bg-[#333333] transition-colors"
        >
          View
        </button>
        <button 
          onClick={onDownload}
          className="w-full h-8 bg-white border border-[#242424] rounded-[9px] text-[#242424] font-onest text-sm hover:bg-gray-50 transition-colors"
        >
          Download
        </button>
      </div>
    </div>
  )
}