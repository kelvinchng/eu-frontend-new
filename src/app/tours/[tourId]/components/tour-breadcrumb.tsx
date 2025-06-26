'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface TourBreadcrumbProps {
  tour: any
  className?: string
}

export function TourBreadcrumb({ tour, className }: TourBreadcrumbProps) {
  return (
    <div className={cn("flex items-center gap-[8px] overflow-hidden whitespace-nowrap", className)}>
      <span className="font-onest text-[13px] leading-[1.275] text-[#242424] whitespace-nowrap">
        Switzerland Tours
      </span>
      <span className="font-onest text-[13px] leading-[1.275] text-[#242424]">
        &gt;
      </span>
      <span className="font-onest text-[13px] leading-[1.275] text-[#242424] truncate">
        {tour.title}
      </span>
    </div>
  )
}