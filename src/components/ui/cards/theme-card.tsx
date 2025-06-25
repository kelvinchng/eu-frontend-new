'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ThemeCardProps {
  id: string
  title: string
  description: string
  image: string
  href?: string
  className?: string
}

export function ThemeCard({
  id,
  title,
  description,
  image,
  href = `/theme/${id}`,
  className
}: ThemeCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden",
        // Responsive outer dimensions - Figma spec (344×499px at 2xl)
        "w-[114px] sm:w-[251px] md:w-[229px] lg:w-[275px] xl:w-[320px] 2xl:w-[344px]",
        "h-[166px] sm:h-[415px] md:h-[332px] lg:h-[399px] xl:h-[465px] 2xl:h-[499px]",
        // Responsive border radius
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
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 344px"
        quality={95}
        priority
      />
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: `linear-gradient(180deg, 
            rgba(7, 7, 7, 0.71) 0%, 
            rgba(23, 23, 23, 0.60) 10.2%, 
            rgba(38, 38, 38, 0) 16.2%, 
            rgba(53, 53, 53, 0) 25.2%, 
            rgba(44, 44, 44, 0) 69.8%, 
            rgba(36, 36, 36, 0.61) 84.1%, 
            rgba(7, 7, 7, 0.75) 100%)`
        }}
      />
      
      {/* Title */}
      <h3 className={cn(
        "absolute font-thunder text-white overflow-hidden text-ellipsis z-20",
        // Responsive positioning from left and top
        "left-[10px] sm:left-[23px] md:left-[19px] lg:left-[23px] xl:left-[27px] 2xl:left-[29px]",
        "top-[13px] sm:top-[26px] md:top-[26px] lg:top-[31px] xl:top-[36px] 2xl:top-[39px]",
        "right-[18px] sm:right-[49px] md:right-[36px] lg:right-[44px] xl:right-[51px] 2xl:right-[55px]",
        // Responsive font size - SM set to 25px to match Figma
        "text-[16px] sm:text-[25px] md:text-[22px] lg:text-[36px] xl:text-[42px] 2xl:text-[45px]",
        // Responsive line height
        "leading-[15px] sm:leading-[23px] md:leading-[20px] lg:leading-[33px] xl:leading-[39px] 2xl:leading-[41px]",
        // Max lines to prevent overflow
        "line-clamp-3"
      )}>
        {title}
      </h3>
      
      {/* Bottom Content Container - positioned from bottom */}
      <div className={cn(
        "absolute z-20",
        // Responsive bottom positioning
        "bottom-[12px] sm:bottom-[32px] md:bottom-[25px] lg:bottom-[30px] xl:bottom-[35px] 2xl:bottom-[37px]",
        // Responsive left and right positioning
        "left-[10px] sm:left-[23px] md:left-[19px] lg:left-[23px] xl:left-[27px] 2xl:left-[29px]",
        "right-[10px] sm:right-[23px] md:right-[19px] lg:right-[23px] xl:right-[27px] 2xl:right-[29px]"
      )}>
        {/* Description */}
        <p className={cn(
          "font-onest font-medium text-white overflow-hidden text-ellipsis",
          // Responsive font size for description - SM set to 13px to match Figma
          "text-[8px] sm:text-[13px] md:text-[13px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]",
          // Responsive line height
          "leading-[10px] sm:leading-[17px] md:leading-[17px] lg:leading-[23px] xl:leading-[26px] 2xl:leading-[28px]",
          // Responsive margin bottom
          "mb-[7px] sm:mb-[21px] md:mb-[13px] lg:mb-[16px] xl:mb-[18px] 2xl:mb-[20px]",
          // Max lines to prevent overflow
          "line-clamp-2"
        )}>
          {description}
        </p>
        
        {/* View More Button */}
        <Link 
          href={href}
          className={cn(
            "inline-flex items-center justify-center",
            // Responsive button dimensions - SM set to match Figma 82.37×36.02px
            "w-[35px] h-[14px] sm:w-[82px] sm:h-[36px] md:w-[71px] md:h-[28px] lg:w-[85px] lg:h-[33px] xl:w-[99px] xl:h-[39px] 2xl:w-[107px] 2xl:h-[42px]",
            "bg-white hover:bg-gray-100 transition-colors",
            // Responsive border radius
            "rounded-[2px] sm:rounded-[3px] md:rounded-[4px] lg:rounded-[5px] xl:rounded-[6px] 2xl:rounded-[6px]"
          )}
        >
          <span className={cn(
            "font-onest tracking-[-0.025em] text-[#242424]",
            // Responsive button text size - SM set to 12px to match Figma
            "text-[5px] sm:text-[12px] md:text-[10px] lg:text-[13px] xl:text-[15px] 2xl:text-[16px]",
            // Responsive line height
            "leading-[6px] sm:leading-[15px] md:leading-[13px] lg:leading-[17px] xl:leading-[19px] 2xl:leading-[20px]"
          )}>
            View More
          </span>
        </Link>
      </div>
    </div>
  )
}