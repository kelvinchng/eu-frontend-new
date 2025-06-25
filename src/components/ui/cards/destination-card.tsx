'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface DestinationCardProps {
  id: string
  name: string
  image: string
  href?: string
  className?: string
}

export function DestinationCard({
  id,
  name,
  image,
  href = `/explore/${id}`,
  className
}: DestinationCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative block overflow-hidden",
        // Responsive outer dimensions - Figma spec (344×499px at 2xl) - same as theme card
        "w-[114px] sm:w-[251px] md:w-[229px] lg:w-[275px] xl:w-[320px] 2xl:w-[344px]",
        "h-[166px] sm:h-[415px] md:h-[332px] lg:h-[399px] xl:h-[465px] 2xl:h-[499px]",
        // Responsive border radius - matching theme card
        "rounded-[4px] sm:rounded-[5px] md:rounded-[7px] lg:rounded-[9px] xl:rounded-[10px] 2xl:rounded-[11px]",
        className
      )}
      style={{ 
        boxShadow: '0px 3px 3px 0px rgba(0, 0, 0, 0.16)'
      }}
    >
      {/* Background Image */}
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 344px"
        quality={95}
        priority
      />
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 z-10 opacity-[0.648]"
        style={{
          background: `linear-gradient(180deg, 
            rgba(7, 7, 7, 0) 0%, 
            rgba(44, 44, 44, 0) 70.7%, 
            rgba(36, 36, 36, 0.61) 73.9%, 
            rgba(7, 7, 7, 0.75) 100%)`
        }}
      />
      
      {/* Text and Arrow Container - positioned from bottom for consistent padding */}
      <div className={cn(
        "absolute flex items-center justify-between z-20",
        // Responsive bottom positioning - matching Figma
        "bottom-[12px] sm:bottom-[32px] md:bottom-[25px] lg:bottom-[30px] xl:bottom-[35px] 2xl:bottom-[40px]",
        // Responsive left positioning - matching Figma
        "left-[7px] sm:left-[16px] md:left-[15px] lg:left-[18px] xl:left-[20px] 2xl:left-[22px]",
        // Responsive right positioning - matching Figma
        "right-[14px] sm:right-[38px] md:right-[30px] lg:right-[36px] xl:right-[42px] 2xl:right-[45px]"
      )}>
        {/* Destination Name */}
        <h3 className={cn(
          "font-thunder text-white overflow-hidden text-ellipsis whitespace-nowrap",
          // Responsive font size - SM increased to 25px to match Figma
          "text-[16px] sm:text-[25px] md:text-[22px] lg:text-[36px] xl:text-[42px] 2xl:text-[45px]",
          // Responsive line height - adjusted for different font sizes
          "leading-[18px] sm:leading-[23px] md:leading-[24px] lg:leading-[40px] xl:leading-[45px] 2xl:leading-[48px]",
          // Responsive max width - increased to show full "Explore Japan." text
          "max-w-[75px] sm:max-w-[105px] md:max-w-[150px] lg:max-w-[180px] xl:max-w-[210px] 2xl:max-w-[225px]"
        )}>
          Explore {name}.
        </h3>
        
        {/* Arrow Icon - center-aligned with text */}
        <div className={cn(
          "flex-shrink-0",
          // Responsive dimensions - arrow sizes to match Figma
          "w-[11px] h-[7px] sm:w-[14px] sm:h-[13px] md:w-[13px] md:h-[9px] lg:w-[14px] lg:h-[9px] xl:w-[16px] xl:h-[11px] 2xl:w-[18px] 2xl:h-[12px]"
        )}>
          <svg 
            className="w-full h-full" 
            viewBox="0 0 18 12" 
            fill="none"
          >
            <path 
              d="M10.35 0L16.76 5.665L10.35 11.33" 
              stroke="white" 
              strokeWidth="1.4"
              fill="none"
            />
            <line 
              x1="0" 
              y1="5.665" 
              x2="17.66" 
              y2="5.665" 
              stroke="white" 
              strokeWidth="1.4"
            />
          </svg>
        </div>
      </div>
    </Link>
  )
}