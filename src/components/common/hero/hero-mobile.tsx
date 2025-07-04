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
      "relative w-full overflow-hidden lg:hidden",
      // Responsive height: smaller screens get shorter height
      "h-[500px] xs:h-[550px] sm:h-[600px] md:h-[643px]",
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
        {/* Hero Title & Icon - Responsive positioning */}
        <div className="absolute left-4 right-4 xs:left-6 xs:right-6 sm:left-8 sm:right-8 md:left-[35px] md:right-[35px]
                        top-[120px] xs:top-[140px] sm:top-[150px] md:top-[162px]">
          <div className="flex items-end justify-between">
            {/* Title - Responsive sizing */}
            <h1 className="font-thunder text-white leading-[0.92] tracking-[0.01em] flex-1
                           text-[32px] xs:text-[38px] sm:text-[45px] md:text-[53px]">
              Book the best<br/>travel deals
            </h1>
            
            {/* SVG Icon - Responsive sizing */}
            <svg 
              className="mb-2 w-[18px] h-[18px] xs:w-[20px] xs:h-[20px] sm:w-[23px] sm:h-[23px] md:w-[26px] md:h-[26px]"
              viewBox="0 0 26 26" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.8499 25.6103L24.4643 1.74476L2.86668 3.19991" stroke="white" strokeWidth="4"/>
              <line x1="0.868164" y1="24.3849" x2="24.7525" y2="1.68342" stroke="white" strokeWidth="4"/>
            </svg>
          </div>
        </div>
        
      </div>
    </section>
  )
}