'use client'

import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { HeroSearchFormMobile } from './hero-search-form-mobile'

interface HeroMobileProps {
  className?: string
}

export function HeroMobile({ className }: HeroMobileProps) {
  return (
    <section className={cn(
      "relative w-full h-[643px] overflow-hidden lg:hidden",
      className
    )}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/hero-banner.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      
      {/* Dark Overlay - Same gradient as desktop */}
      <div 
        className="absolute inset-0" 
        style={{
          background: 'linear-gradient(180deg, rgba(7, 7, 7, 0.71) 0%, rgba(23, 23, 23, 0.6) 11.9%, rgba(38, 38, 38, 0) 23.1%, rgba(53, 53, 53, 0) 34.3%, rgba(44, 44, 44, 0) 47%, rgba(36, 36, 36, 0.61) 59.4%, rgba(7, 7, 7, 0.75) 100%)'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 w-full h-full">
        {/* Hero Title & Icon - Fixed position from top */}
        <div className="absolute left-[35px] top-[162px] right-[35px]">
          <div className="flex items-end justify-between">
            {/* Title - 53px in mobile Figma */}
            <h1 className="font-thunder text-white text-[53px] leading-[0.92] tracking-[0.01em] flex-1">
              Book the best<br/>travel deals
            </h1>
            
            {/* SVG Icon - 26x26.13px in mobile */}
            <svg 
              className="w-[26px] h-[26.13px] mb-2"
              viewBox="0 0 26 26" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.8499 25.6103L24.4643 1.74476L2.86668 3.19991" stroke="white" strokeWidth="4"/>
              <line x1="0.868164" y1="24.3849" x2="24.7525" y2="1.68342" stroke="white" strokeWidth="4"/>
            </svg>
          </div>
        </div>
        
        {/* Search Form - Vertical layout, adjusted position for proper gap */}
        <div className="absolute left-[28px] right-[28px] top-[280px] sm:top-[290px] md:top-[306px]">
          <HeroSearchFormMobile className="shadow-lg" />
        </div>
      </div>
    </section>
  )
}