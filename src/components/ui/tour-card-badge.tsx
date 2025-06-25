'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { designTokens } from '@/lib/design-tokens'

interface TourCardBadgeProps {
  children: React.ReactNode
  className?: string
  backgroundColor?: string
}

export function TourCardBadge({ 
  children, 
  className,
  backgroundColor = designTokens.colors.primary
}: TourCardBadgeProps) {
  return (
    <div 
      className={cn(
        "absolute top-0 right-0 flex items-center justify-center z-[1]",
        // Mobile-first badge dimensions - Base 117px width for mobile readability
        "w-[117px] md:w-[107px] lg:w-[129px] xl:w-[150px] 2xl:w-[161px]",
        "h-[32px] md:h-[28px] lg:h-[34px] xl:h-[40px] 2xl:h-[42px]",
        // Mobile-first border radius
        "rounded-bl-[6px] md:rounded-bl-[6px] lg:rounded-bl-[7px] xl:rounded-bl-[8px] 2xl:rounded-bl-[9px]",
        className
      )}
      style={{ backgroundColor }}
    >
      <span className={cn(
        "text-white font-onest font-normal leading-[1.275]",
        // Mobile-first font size - Base 12px for mobile readability
        "text-[12px] md:text-[12px] lg:text-[14px] xl:text-[17px] 2xl:text-[18px]"
      )}>
        {children}
      </span>
    </div>
  )
}