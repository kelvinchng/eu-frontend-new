'use client'

import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { HeroSearchForm } from './hero-search-form'

interface HeroProps {
  className?: string
}

export function Hero({ className }: HeroProps) {
  return (
    <section className={cn(
      "relative w-full h-[100vh] overflow-hidden hidden lg:block",
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
      
      {/* Dark Overlay - Exact Figma Gradient */}
      <div 
        className="absolute inset-0" 
        style={{
          background: 'linear-gradient(180deg, rgba(7, 7, 7, 0.71) 0%, rgba(23, 23, 23, 0.6) 11.9%, rgba(38, 38, 38, 0) 23.1%, rgba(53, 53, 53, 0) 34.3%, rgba(44, 44, 44, 0) 47%, rgba(36, 36, 36, 0.61) 59.4%, rgba(7, 7, 7, 0.75) 100%)'
        }}
      />
      
      {/* Hero Content Container - Using flexbox with 35px gap as per Figma */}
      <div className="absolute left-[11.46%] max-w-[1920px] top-[45.94%] z-10 flex flex-col gap-[1.82vw]">
        {/* Hero Title & Icon Container */}
        <div className="flex items-center justify-start">
          {/* Title - 135px at 1920px = 7.03% */}
          <h1 className={cn(
            "font-thunder text-white whitespace-nowrap",
            "text-[7.03vw]",
            "leading-[0.92] tracking-[0.01em]"
          )}>
            Book the best travel deals
          </h1>
          
          {/* SVG Icon - 67.3x60.59px at 1920px */}
          <svg 
            className="ml-[2vw] w-[3.51vw] h-[3.16vw]"
            viewBox="0 0 73 66" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M64.2958 65.0214L68.7098 4.43164L8.07129 8.13146" stroke="white" strokeWidth="7"/>
            <line x1="2.44834" y1="61.9399" x2="69.7472" y2="4.27276" stroke="white" strokeWidth="7"/>
          </svg>
        </div>
        
        {/* Search Form */}
        <HeroSearchForm className="w-[71.77vw]" />
      </div>
      
      {/* Nav Dots - Positioned on right side */}
      <div className="absolute right-[57px] 3xl:right-[57px] top-1/2 -translate-y-1/2 flex flex-col space-y-[18px] z-10">
        <div className="w-[11px] h-[11px] rounded-full bg-white border-2 border-white" />
        <div className="w-[11px] h-[11px] rounded-full bg-transparent border-2 border-white" />
        <div className="w-[11px] h-[11px] rounded-full bg-transparent border-2 border-white" />
      </div>
    </section>
  )
}