'use client'

import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface BrochuresHeroProps {
  title?: string
  subtitle?: string
  description?: string
  backgroundImage?: string
  brochureStats?: {
    totalBrochures: number
    destinations: number
    languages: number
  }
  className?: string
}

export function BrochuresHero({
  title = "Travel Brochures & Guides",
  subtitle = "Download Your Dream Destination Guides",
  description = "Explore our comprehensive collection of travel brochures and destination guides. Get detailed information about tours, attractions, local culture, and insider tips to help you plan the perfect journey.",
  backgroundImage = "/assets/images/brochures-hero.jpg",
  brochureStats,
  className
}: BrochuresHeroProps) {
  
  const defaultStats = {
    totalBrochures: 127,
    destinations: 42,
    languages: 8
  }

  const stats = brochureStats || defaultStats

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      {/* Hero Section */}
      <div className={cn(
        "relative flex items-center justify-center",
        // Responsive height
        "h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px] xl:h-[650px] 2xl:h-[700px]"
      )}>
        {/* Background Image */}
        <Image
          src={backgroundImage}
          alt="Travel Brochures"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1920px] mx-auto">
          <div className={cn(
            "text-center text-white",
            // Responsive padding
            "px-[16px] sm:px-[20px] md:px-[24px] lg:px-[28px] xl:px-[32px] 2xl:px-[36px]",
            "py-[32px] sm:py-[40px] md:py-[48px] lg:py-[56px] xl:py-[64px] 2xl:py-[72px]"
          )}>
            {/* Title */}
            <h1 className={cn(
              "font-thunder font-medium mb-4 sm:mb-6 md:mb-8",
              // Responsive font size
              "text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] 2xl:text-[72px]",
              // Responsive line height
              "leading-[36px] sm:leading-[44px] md:leading-[52px] lg:leading-[60px] xl:leading-[68px] 2xl:leading-[76px]",
              "max-w-4xl mx-auto"
            )}>
              {title}
            </h1>

            {/* Subtitle */}
            <h2 className={cn(
              "font-onest font-medium text-white/90 mb-4 sm:mb-6 md:mb-8",
              // Responsive font size
              "text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px]",
              // Responsive line height
              "leading-[20px] sm:leading-[26px] md:leading-[30px] lg:leading-[34px] xl:leading-[38px] 2xl:leading-[42px]",
              "max-w-3xl mx-auto"
            )}>
              {subtitle}
            </h2>

            {/* Description */}
            <p className={cn(
              "font-onest text-white/80 mb-8 sm:mb-12 md:mb-16",
              // Responsive font size
              "text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]",
              // Responsive line height
              "leading-[18px] sm:leading-[22px] md:leading-[26px] lg:leading-[28px] xl:leading-[30px] 2xl:leading-[32px]",
              "max-w-2xl mx-auto"
            )}>
              {description}
            </p>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-4xl mx-auto mb-8 sm:mb-12">
              {/* Total Brochures */}
              <div className={cn(
                "bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-white/15",
                // Responsive padding and border radius
                "p-[20px] sm:p-[24px] md:p-[28px] lg:p-[32px] xl:p-[36px] 2xl:p-[40px]",
                "rounded-[12px] sm:rounded-[14px] md:rounded-[16px] lg:rounded-[18px] xl:rounded-[20px] 2xl:rounded-[22px]"
              )}>
                <div className="text-center">
                  <div className="mb-3 sm:mb-4">
                    <svg 
                      className={cn(
                        "mx-auto text-white/80",
                        "w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px] lg:w-[36px] lg:h-[36px] xl:w-[40px] xl:h-[40px] 2xl:w-[44px] 2xl:h-[44px]"
                      )}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className={cn(
                    "font-thunder font-bold text-white mb-2 sm:mb-3",
                    // Responsive font size
                    "text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px]",
                    // Responsive line height
                    "leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[40px] xl:leading-[44px] 2xl:leading-[48px]"
                  )}>
                    {stats.totalBrochures}+
                  </div>
                  <p className={cn(
                    "font-onest font-medium text-white/90",
                    // Responsive font size
                    "text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px]",
                    // Responsive line height
                    "leading-[16px] sm:leading-[17px] md:leading-[18px] lg:leading-[19px] xl:leading-[20px] 2xl:leading-[21px]"
                  )}>
                    Travel Brochures
                  </p>
                </div>
              </div>

              {/* Destinations Covered */}
              <div className={cn(
                "bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-white/15",
                // Responsive padding and border radius
                "p-[20px] sm:p-[24px] md:p-[28px] lg:p-[32px] xl:p-[36px] 2xl:p-[40px]",
                "rounded-[12px] sm:rounded-[14px] md:rounded-[16px] lg:rounded-[18px] xl:rounded-[20px] 2xl:rounded-[22px]"
              )}>
                <div className="text-center">
                  <div className="mb-3 sm:mb-4">
                    <svg 
                      className={cn(
                        "mx-auto text-white/80",
                        "w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px] lg:w-[36px] lg:h-[36px] xl:w-[40px] xl:h-[40px] 2xl:w-[44px] 2xl:h-[44px]"
                      )}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className={cn(
                    "font-thunder font-bold text-white mb-2 sm:mb-3",
                    // Responsive font size
                    "text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px]",
                    // Responsive line height
                    "leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[40px] xl:leading-[44px] 2xl:leading-[48px]"
                  )}>
                    {stats.destinations}+
                  </div>
                  <p className={cn(
                    "font-onest font-medium text-white/90",
                    // Responsive font size
                    "text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px]",
                    // Responsive line height
                    "leading-[16px] sm:leading-[17px] md:leading-[18px] lg:leading-[19px] xl:leading-[20px] 2xl:leading-[21px]"
                  )}>
                    Destinations
                  </p>
                </div>
              </div>

              {/* Languages Available */}
              <div className={cn(
                "bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-white/15",
                // Responsive padding and border radius
                "p-[20px] sm:p-[24px] md:p-[28px] lg:p-[32px] xl:p-[36px] 2xl:p-[40px]",
                "rounded-[12px] sm:rounded-[14px] md:rounded-[16px] lg:rounded-[18px] xl:rounded-[20px] 2xl:rounded-[22px]"
              )}>
                <div className="text-center">
                  <div className="mb-3 sm:mb-4">
                    <svg 
                      className={cn(
                        "mx-auto text-white/80",
                        "w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px] lg:w-[36px] lg:h-[36px] xl:w-[40px] xl:h-[40px] 2xl:w-[44px] 2xl:h-[44px]"
                      )}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                  </div>
                  <div className={cn(
                    "font-thunder font-bold text-white mb-2 sm:mb-3",
                    // Responsive font size
                    "text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px]",
                    // Responsive line height
                    "leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[40px] xl:leading-[44px] 2xl:leading-[48px]"
                  )}>
                    {stats.languages}
                  </div>
                  <p className={cn(
                    "font-onest font-medium text-white/90",
                    // Responsive font size
                    "text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px]",
                    // Responsive line height
                    "leading-[16px] sm:leading-[17px] md:leading-[18px] lg:leading-[19px] xl:leading-[20px] 2xl:leading-[21px]"
                  )}>
                    Languages
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <button className={cn(
                "bg-white/20 backdrop-blur-sm text-white border border-white/30 font-onest font-medium transition-all duration-300 hover:bg-white/30 hover:border-white/50 flex items-center gap-2",
                // Responsive padding and border radius
                "px-[20px] py-[10px] sm:px-[24px] sm:py-[12px] md:px-[28px] md:py-[14px] lg:px-[32px] lg:py-[16px]",
                "rounded-[8px] sm:rounded-[10px] md:rounded-[12px] lg:rounded-[14px]",
                // Responsive font size
                "text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px]"
              )}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Browse All Brochures
              </button>
              
              <button className={cn(
                "bg-[#0066CC] text-white font-onest font-medium transition-all duration-300 hover:bg-[#004499] flex items-center gap-2",
                // Responsive padding and border radius
                "px-[20px] py-[10px] sm:px-[24px] sm:py-[12px] md:px-[28px] md:py-[14px] lg:px-[32px] lg:py-[16px]",
                "rounded-[8px] sm:rounded-[10px] md:rounded-[12px] lg:rounded-[14px]",
                // Responsive font size
                "text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px]"
              )}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Catalog
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Features */}
      <div className={cn(
        "relative z-20 bg-white border-t border-[#F0F0F0]",
        // Responsive negative margin to overlap hero slightly
        "-mt-[20px] sm:-mt-[30px] md:-mt-[40px] lg:-mt-[50px] xl:-mt-[60px] 2xl:-mt-[70px]"
      )}>
        <div className="w-full max-w-[1920px] mx-auto">
          <div className={cn(
            "grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8",
            // Responsive padding
            "px-[16px] sm:px-[20px] md:px-[24px] lg:px-[28px] xl:px-[32px] 2xl:px-[36px]",
            "py-[24px] sm:py-[32px] md:py-[40px] lg:py-[48px] xl:py-[56px] 2xl:py-[64px]"
          )}>
            {/* Free Download */}
            <div className="text-center">
              <div className={cn(
                "inline-flex items-center justify-center bg-[#F0F8FF] text-[#0066CC] mb-3 sm:mb-4",
                "w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] md:w-[64px] md:h-[64px]",
                "rounded-[12px] sm:rounded-[14px] md:rounded-[16px]"
              )}>
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className={cn(
                "font-thunder font-medium text-[#242424] mb-2",
                "text-[14px] sm:text-[16px] md:text-[18px]"
              )}>
                Free Download
              </h3>
              <p className={cn(
                "font-onest text-[#666666]",
                "text-[11px] sm:text-[12px] md:text-[13px]"
              )}>
                All brochures are completely free to download
              </p>
            </div>

            {/* High Quality */}
            <div className="text-center">
              <div className={cn(
                "inline-flex items-center justify-center bg-[#F0F8FF] text-[#0066CC] mb-3 sm:mb-4",
                "w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] md:w-[64px] md:h-[64px]",
                "rounded-[12px] sm:rounded-[14px] md:rounded-[16px]"
              )}>
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className={cn(
                "font-thunder font-medium text-[#242424] mb-2",
                "text-[14px] sm:text-[16px] md:text-[18px]"
              )}>
                High Quality
              </h3>
              <p className={cn(
                "font-onest text-[#666666]",
                "text-[11px] sm:text-[12px] md:text-[13px]"
              )}>
                Professional photography and detailed information
              </p>
            </div>

            {/* Regular Updates */}
            <div className="text-center">
              <div className={cn(
                "inline-flex items-center justify-center bg-[#F0F8FF] text-[#0066CC] mb-3 sm:mb-4",
                "w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] md:w-[64px] md:h-[64px]",
                "rounded-[12px] sm:rounded-[14px] md:rounded-[16px]"
              )}>
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className={cn(
                "font-thunder font-medium text-[#242424] mb-2",
                "text-[14px] sm:text-[16px] md:text-[18px]"
              )}>
                Regular Updates
              </h3>
              <p className={cn(
                "font-onest text-[#666666]",
                "text-[11px] sm:text-[12px] md:text-[13px]"
              )}>
                Content updated with latest information and tours
              </p>
            </div>

            {/* Multiple Languages */}
            <div className="text-center">
              <div className={cn(
                "inline-flex items-center justify-center bg-[#F0F8FF] text-[#0066CC] mb-3 sm:mb-4",
                "w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] md:w-[64px] md:h-[64px]",
                "rounded-[12px] sm:rounded-[14px] md:rounded-[16px]"
              )}>
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <h3 className={cn(
                "font-thunder font-medium text-[#242424] mb-2",
                "text-[14px] sm:text-[16px] md:text-[18px]"
              )}>
                Multiple Languages
              </h3>
              <p className={cn(
                "font-onest text-[#666666]",
                "text-[11px] sm:text-[12px] md:text-[13px]"
              )}>
                Available in {stats.languages} languages for global travelers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}