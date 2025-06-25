'use client'

import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface TestimonialsHeroProps {
  title?: string
  subtitle?: string
  description?: string
  backgroundImage?: string
  testimonialStats?: {
    totalReviews: number
    averageRating: number
    fiveStarPercent: number
  }
  className?: string
}

export function TestimonialsHero({
  title = "What Our Travelers Say",
  subtitle = "Real Stories from Real Adventures",
  description = "Discover why thousands of travelers choose EU Holidays for their dream vacations. Read authentic reviews and testimonials from our valued customers who have experienced unforgettable journeys with us.",
  backgroundImage = "/assets/images/testimonials-hero.jpg",
  testimonialStats,
  className
}: TestimonialsHeroProps) {
  
  const defaultStats = {
    totalReviews: 2847,
    averageRating: 4.8,
    fiveStarPercent: 92
  }

  const stats = testimonialStats || defaultStats

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      {/* Hero Section */}
      <div className={cn(
        "relative flex items-center justify-center",
        // Responsive height
        "h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] xl:h-[700px] 2xl:h-[750px]"
      )}>
        {/* Background Image */}
        <Image
          src={backgroundImage}
          alt="Customer Testimonials"
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-4xl mx-auto">
              {/* Total Reviews */}
              <div className={cn(
                "bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-white/15",
                // Responsive padding and border radius
                "p-[20px] sm:p-[24px] md:p-[28px] lg:p-[32px] xl:p-[36px] 2xl:p-[40px]",
                "rounded-[12px] sm:rounded-[14px] md:rounded-[16px] lg:rounded-[18px] xl:rounded-[20px] 2xl:rounded-[22px]"
              )}>
                <div className="text-center">
                  <div className={cn(
                    "font-thunder font-bold text-white mb-2 sm:mb-3",
                    // Responsive font size
                    "text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[44px] 2xl:text-[48px]",
                    // Responsive line height
                    "leading-[32px] sm:leading-[36px] md:leading-[40px] lg:leading-[44px] xl:leading-[48px] 2xl:leading-[52px]"
                  )}>
                    {stats.totalReviews.toLocaleString()}+
                  </div>
                  <p className={cn(
                    "font-onest font-medium text-white/90",
                    // Responsive font size
                    "text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px]",
                    // Responsive line height
                    "leading-[16px] sm:leading-[17px] md:leading-[18px] lg:leading-[19px] xl:leading-[20px] 2xl:leading-[21px]"
                  )}>
                    Happy Travelers
                  </p>
                </div>
              </div>

              {/* Average Rating */}
              <div className={cn(
                "bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-white/15",
                // Responsive padding and border radius
                "p-[20px] sm:p-[24px] md:p-[28px] lg:p-[32px] xl:p-[36px] 2xl:p-[40px]",
                "rounded-[12px] sm:rounded-[14px] md:rounded-[16px] lg:rounded-[18px] xl:rounded-[20px] 2xl:rounded-[22px]"
              )}>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
                    <span className={cn(
                      "font-thunder font-bold text-white",
                      // Responsive font size
                      "text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[44px] 2xl:text-[48px]",
                      // Responsive line height
                      "leading-[32px] sm:leading-[36px] md:leading-[40px] lg:leading-[44px] xl:leading-[48px] 2xl:leading-[52px]"
                    )}>
                      {stats.averageRating}
                    </span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={cn(
                            "text-yellow-400",
                            "w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] md:w-[20px] md:h-[20px] lg:w-[22px] lg:h-[22px] xl:w-[24px] xl:h-[24px] 2xl:w-[26px] 2xl:h-[26px]"
                          )}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className={cn(
                    "font-onest font-medium text-white/90",
                    // Responsive font size
                    "text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px]",
                    // Responsive line height
                    "leading-[16px] sm:leading-[17px] md:leading-[18px] lg:leading-[19px] xl:leading-[20px] 2xl:leading-[21px]"
                  )}>
                    Average Rating
                  </p>
                </div>
              </div>

              {/* Five Star Percentage */}
              <div className={cn(
                "bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-white/15",
                // Responsive padding and border radius
                "p-[20px] sm:p-[24px] md:p-[28px] lg:p-[32px] xl:p-[36px] 2xl:p-[40px]",
                "rounded-[12px] sm:rounded-[14px] md:rounded-[16px] lg:rounded-[18px] xl:rounded-[20px] 2xl:rounded-[22px]"
              )}>
                <div className="text-center">
                  <div className={cn(
                    "font-thunder font-bold text-white mb-2 sm:mb-3",
                    // Responsive font size
                    "text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[44px] 2xl:text-[48px]",
                    // Responsive line height
                    "leading-[32px] sm:leading-[36px] md:leading-[40px] lg:leading-[44px] xl:leading-[48px] 2xl:leading-[52px]"
                  )}>
                    {stats.fiveStarPercent}%
                  </div>
                  <p className={cn(
                    "font-onest font-medium text-white/90",
                    // Responsive font size
                    "text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px]",
                    // Responsive line height
                    "leading-[16px] sm:leading-[17px] md:leading-[18px] lg:leading-[19px] xl:leading-[20px] 2xl:leading-[21px]"
                  )}>
                    Five Star Reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}