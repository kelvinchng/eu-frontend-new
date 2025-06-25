'use client'

import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface AlbumsHeroProps {
  title?: string
  subtitle?: string
  description?: string
  backgroundImage?: string
  albumStats?: {
    totalPhotos: number
    totalAlbums: number
    destinations: number
  }
  className?: string
}

export function AlbumsHero({
  title = "Tour Photo Albums",
  subtitle = "Relive the Magic of Your Journey",
  description = "Browse through our extensive collection of tour photos and memories. From breathtaking landscapes to unforgettable moments, explore the beauty and wonder of destinations around the world through the eyes of our travelers.",
  backgroundImage = "/assets/images/albums-hero.jpg",
  albumStats,
  className
}: AlbumsHeroProps) {
  
  const defaultStats = {
    totalPhotos: 15420,
    totalAlbums: 284,
    destinations: 47
  }

  const stats = albumStats || defaultStats

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
          alt="Tour Photo Albums"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />

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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-4xl mx-auto">
              {/* Total Photos */}
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className={cn(
                    "font-thunder font-bold text-white mb-2 sm:mb-3",
                    // Responsive font size
                    "text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px]",
                    // Responsive line height
                    "leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[40px] xl:leading-[44px] 2xl:leading-[48px]"
                  )}>
                    {stats.totalPhotos.toLocaleString()}+
                  </div>
                  <p className={cn(
                    "font-onest font-medium text-white/90",
                    // Responsive font size
                    "text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px]",
                    // Responsive line height
                    "leading-[16px] sm:leading-[17px] md:leading-[18px] lg:leading-[19px] xl:leading-[20px] 2xl:leading-[21px]"
                  )}>
                    Beautiful Photos
                  </p>
                </div>
              </div>

              {/* Total Albums */}
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div className={cn(
                    "font-thunder font-bold text-white mb-2 sm:mb-3",
                    // Responsive font size
                    "text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px]",
                    // Responsive line height
                    "leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[40px] xl:leading-[44px] 2xl:leading-[48px]"
                  )}>
                    {stats.totalAlbums}+
                  </div>
                  <p className={cn(
                    "font-onest font-medium text-white/90",
                    // Responsive font size
                    "text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px]",
                    // Responsive line height
                    "leading-[16px] sm:leading-[17px] md:leading-[18px] lg:leading-[19px] xl:leading-[20px] 2xl:leading-[21px]"
                  )}>
                    Tour Albums
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
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-8 sm:mt-12">
              <button className={cn(
                "bg-white/20 backdrop-blur-sm text-white border border-white/30 font-onest font-medium transition-all duration-300 hover:bg-white/30 hover:border-white/50",
                // Responsive padding and border radius
                "px-[20px] py-[10px] sm:px-[24px] sm:py-[12px] md:px-[28px] md:py-[14px] lg:px-[32px] lg:py-[16px]",
                "rounded-[8px] sm:rounded-[10px] md:rounded-[12px] lg:rounded-[14px]",
                // Responsive font size
                "text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px]"
              )}>
                Browse All Albums
              </button>
              
              <button className={cn(
                "bg-[#0066CC] text-white font-onest font-medium transition-all duration-300 hover:bg-[#004499]",
                // Responsive padding and border radius
                "px-[20px] py-[10px] sm:px-[24px] sm:py-[12px] md:px-[28px] md:py-[14px] lg:px-[32px] lg:py-[16px]",
                "rounded-[8px] sm:rounded-[10px] md:rounded-[12px] lg:rounded-[14px]",
                // Responsive font size
                "text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px]"
              )}>
                Upload Your Photos
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}