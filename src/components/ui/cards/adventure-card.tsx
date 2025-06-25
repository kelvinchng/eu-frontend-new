'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface AdventureCardProps {
  id: string
  title: string
  image: string
  icon?: React.ReactNode
  href?: string
  className?: string
}

export function AdventureCard({
  id,
  title,
  image,
  icon,
  href = `/adventure/${id}`,
  className
}: AdventureCardProps) {
  return (
    <div
      className={cn(
        "group relative",
        // Responsive card dimensions - Figma spec (344px at 2xl)
        "w-[114px] sm:w-[251px] md:w-[229px] lg:w-[275px] xl:w-[320px] 2xl:w-[344px]",
        className
      )}
    >
      {/* Image Container */}
      <div 
        className={cn(
          "relative overflow-hidden",
          // Responsive image dimensions
          "w-full",
          "h-[164px] sm:h-[428px] md:h-[331px] lg:h-[398px] xl:h-[464px] 2xl:h-[499px]",
          // Responsive border radius
          "rounded-[3px] sm:rounded-[9px] md:rounded-[6px] lg:rounded-[7px] xl:rounded-[8px] 2xl:rounded-[9px]"
        )}
        style={{ boxShadow: '0px 3px 3px 0px rgba(0, 0, 0, 0.16)' }}
      >
        {/* Background Image */}
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 640px) 114px, (max-width: 768px) 251px, (max-width: 1024px) 229px, (max-width: 1280px) 275px, (max-width: 1536px) 320px, 344px"
          priority
        />
        
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.648]"
          style={{
            background: `linear-gradient(180deg, 
              rgba(7, 7, 7, 0) 0%, 
              rgba(44, 44, 44, 0) 67.3%, 
              rgba(36, 36, 36, 0.61) 87.6%, 
              rgba(7, 7, 7, 0.75) 100%)`
          }}
        />
      </div>

      {/* Overlay Circle with Icon - positioned outside image container to avoid clipping */}
      {icon ? (
        <div className={cn(
          "absolute left-0 z-10",
          // Position at bottom of image container
          "top-[154px] sm:top-[402px] md:top-[309px] lg:top-[373px] xl:top-[435px] 2xl:top-[467px]",
          // Responsive circle size
          "w-[21px] h-[21px] sm:w-[52px] sm:h-[52px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px] xl:w-[58px] xl:h-[58px] 2xl:w-[63px] 2xl:h-[63px]"
        )}>
          {icon}
        </div>
      ) : (
        <div className={cn(
          "absolute left-0 bg-[#242424] rounded-full flex items-center justify-center z-10",
          // Position at bottom of image container  
          "top-[154px] sm:top-[402px] md:top-[309px] lg:top-[373px] xl:top-[435px] 2xl:top-[467px]",
          // Responsive circle size
          "w-[21px] h-[21px] sm:w-[52px] sm:h-[52px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px] xl:w-[58px] xl:h-[58px] 2xl:w-[63px] 2xl:h-[63px]"
        )}>
          <svg 
            className="w-full h-full p-2" 
            viewBox="0 0 26 14" 
            fill="none"
          >
            <path 
              d="M17.74 0L25.83 8.39L17.74 8.39" 
              stroke="white" 
              strokeWidth="2"
              fill="none"
            />
            <path 
              d="M0 0.02L25.81 13.67" 
              stroke="white" 
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      )}
      
      {/* Text Section */}
      <div className={cn(
        "flex flex-col",
        // Spacing from image (accounting for circle overlap) - increased for better visual separation
        "mt-[15px] sm:mt-[32px] md:mt-[28px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[40px]",
        // Responsive gap between title and view more - reduced gap
        "gap-[1px] sm:gap-[8px] md:gap-[6px] lg:gap-[8px] xl:gap-[10px] 2xl:gap-[12px]"
      )}>
        {/* Title */}
        <h3 className={cn(
          "font-thunder text-[#242424] overflow-hidden text-ellipsis whitespace-nowrap",
          // Responsive font size
          "text-[16px] sm:text-[30px] md:text-[32px] lg:text-[36px] xl:text-[42px] 2xl:text-[45px]",
          // Responsive line height
          "leading-[15px] sm:leading-[28px] md:leading-[30px] lg:leading-[33px] xl:leading-[39px] 2xl:leading-[41px]"
        )}>
          {title}
        </h3>
        
        {/* View More Link */}
        <Link 
          href={href}
          className={cn(
            "inline-flex items-center group/link hover:gap-[12px] transition-all",
            // Responsive gap between text and arrow
            "gap-[3px] sm:gap-[5px] md:gap-[6px] lg:gap-[7px] xl:gap-[8px] 2xl:gap-[8px]"
          )}
        >
          <span className={cn(
            "font-onest text-[#242424]",
            // Responsive font size
            "text-[5px] sm:text-[14px] md:text-[15px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px]",
            // Responsive line height
            "leading-[6px] sm:leading-[17px] md:leading-[18px] lg:leading-[15px] xl:leading-[17px] 2xl:leading-[20px]"
          )}>
            View more
          </span>
          <svg 
            className={cn(
              "flex-shrink-0",
              // Responsive arrow size
              "w-[6px] h-[5px] sm:w-[10px] sm:h-[6px] md:w-[9px] md:h-[5px] lg:w-[13px] lg:h-[8px] xl:w-[15px] xl:h-[12px] 2xl:w-[17px] 2xl:h-[14px]"
            )}
            viewBox="0 0 17 14" 
            fill="none"
          >
            <path 
              d="M10.58 0L16.61 6.98L10.58 13.97" 
              stroke="#242424" 
              strokeWidth="1"
              fill="none"
            />
            <line 
              x1="0" 
              y1="6.98" 
              x2="16.61" 
              y2="6.98" 
              stroke="#242424" 
              strokeWidth="1.4"
            />
          </svg>
        </Link>
      </div>
    </div>
  )
}