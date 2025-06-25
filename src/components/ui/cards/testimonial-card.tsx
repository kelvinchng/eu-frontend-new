'use client'

import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface TestimonialCardProps {
  id: string
  customerName: string
  customerLocation?: string
  customerImage?: string
  rating: number
  reviewText: string
  tourName?: string
  reviewDate?: string
  platform?: 'google' | 'facebook' | 'internal'
  className?: string
}

export function TestimonialCard({
  id,
  customerName,
  customerLocation,
  customerImage,
  rating,
  reviewText,
  tourName,
  reviewDate,
  platform = 'internal',
  className
}: TestimonialCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={cn(
          "inline-block",
          // Responsive star size
          "w-[8px] h-[8px] sm:w-[12px] sm:h-[12px] md:w-[11px] md:h-[11px] lg:w-[14px] lg:h-[14px] xl:w-[16px] xl:h-[16px] 2xl:w-[18px] 2xl:h-[18px]"
        )}
        viewBox="0 0 24 24"
        fill={index < rating ? "#FFD700" : "#E5E5E5"}
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))
  }

  const getPlatformIcon = () => {
    switch (platform) {
      case 'google':
        return (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        )
      case 'facebook':
        return (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#1877F2">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div
      className={cn(
        "group relative bg-white overflow-hidden transition-all duration-300 hover:shadow-lg",
        // Responsive dimensions scaling from 1920px Figma baseline
        "w-[152px] sm:w-[280px] md:w-[320px] lg:w-[380px] xl:w-[440px] 2xl:w-[480px]",
        // Responsive border radius
        "rounded-[8px] sm:rounded-[12px] md:rounded-[14px] lg:rounded-[16px] xl:rounded-[18px] 2xl:rounded-[20px]",
        // Responsive padding
        "p-[12px] sm:p-[20px] md:p-[18px] lg:p-[24px] xl:p-[28px] 2xl:p-[32px]",
        className
      )}
      style={{ boxShadow: '0px 3px 12px 0px rgba(0, 0, 0, 0.08)' }}
    >
      {/* Header with customer info and rating */}
      <div className={cn(
        "flex items-start justify-between",
        "mb-[8px] sm:mb-[12px] md:mb-[10px] lg:mb-[14px] xl:mb-[16px] 2xl:mb-[18px]"
      )}>
        {/* Customer Info */}
        <div className="flex items-start gap-[8px] sm:gap-[12px] md:gap-[10px] lg:gap-[14px] xl:gap-[16px] 2xl:gap-[18px]">
          {/* Customer Avatar */}
          {customerImage ? (
            <div className={cn(
              "relative overflow-hidden rounded-full flex-shrink-0",
              // Responsive avatar size
              "w-[24px] h-[24px] sm:w-[40px] sm:h-[40px] md:w-[36px] md:h-[36px] lg:w-[44px] lg:h-[44px] xl:w-[50px] xl:h-[50px] 2xl:w-[56px] 2xl:h-[56px]"
            )}>
              <Image
                src={customerImage}
                alt={customerName}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className={cn(
              "bg-[#F0F0F0] rounded-full flex items-center justify-center flex-shrink-0",
              // Responsive avatar size
              "w-[24px] h-[24px] sm:w-[40px] sm:h-[40px] md:w-[36px] md:h-[36px] lg:w-[44px] lg:h-[44px] xl:w-[50px] xl:h-[50px] 2xl:w-[56px] 2xl:h-[56px]"
            )}>
              <span className={cn(
                "font-thunder font-medium text-[#666666]",
                // Responsive text size
                "text-[10px] sm:text-[16px] md:text-[14px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]"
              )}>
                {customerName.charAt(0).toUpperCase()}
              </span>
            </div>
          )}

          {/* Name and Location */}
          <div className="flex-1 min-w-0">
            <h4 className={cn(
              "font-thunder font-medium text-[#242424] truncate",
              // Responsive font size
              "text-[10px] sm:text-[14px] md:text-[13px] lg:text-[16px] xl:text-[18px] 2xl:text-[19px]",
              // Responsive line height
              "leading-[12px] sm:leading-[18px] md:leading-[16px] lg:leading-[20px] xl:leading-[22px] 2xl:leading-[23px]"
            )}>
              {customerName}
            </h4>
            {customerLocation && (
              <p className={cn(
                "font-onest text-[#888888] truncate",
                // Responsive font size
                "text-[8px] sm:text-[11px] md:text-[10px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px]",
                // Responsive line height
                "leading-[10px] sm:leading-[14px] md:leading-[12px] lg:leading-[15px] xl:leading-[16px] 2xl:leading-[17px]"
              )}>
                {customerLocation}
              </p>
            )}
          </div>
        </div>

        {/* Platform Icon */}
        {platform !== 'internal' && (
          <div className="flex-shrink-0">
            {getPlatformIcon()}
          </div>
        )}
      </div>

      {/* Rating */}
      <div className={cn(
        "flex items-center",
        "gap-[2px] sm:gap-[3px] md:gap-[2px] lg:gap-[4px] xl:gap-[5px] 2xl:gap-[6px]",
        "mb-[8px] sm:mb-[12px] md:mb-[10px] lg:mb-[14px] xl:mb-[16px] 2xl:mb-[18px]"
      )}>
        {renderStars(rating)}
        <span className={cn(
          "font-onest font-medium text-[#666666] ml-[4px] sm:ml-[6px] md:ml-[5px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px]",
          // Responsive font size
          "text-[8px] sm:text-[11px] md:text-[10px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px]"
        )}>
          {rating}.0
        </span>
      </div>

      {/* Review Text */}
      <blockquote className={cn(
        "font-onest text-[#242424] italic",
        // Responsive font size
        "text-[10px] sm:text-[14px] md:text-[13px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px]",
        // Responsive line height
        "leading-[14px] sm:leading-[20px] md:leading-[18px] lg:leading-[22px] xl:leading-[24px] 2xl:leading-[25px]",
        "mb-[8px] sm:mb-[12px] md:mb-[10px] lg:mb-[14px] xl:mb-[16px] 2xl:mb-[18px]"
      )}>
        "{reviewText}"
      </blockquote>

      {/* Footer with tour name and date */}
      {(tourName || reviewDate) && (
        <div className={cn(
          "flex items-center justify-between text-[#888888]",
          "pt-[6px] sm:pt-[8px] md:pt-[7px] lg:pt-[10px] xl:pt-[12px] 2xl:pt-[14px]",
          "border-t border-[#F0F0F0]"
        )}>
          {tourName && (
            <span className={cn(
              "font-onest font-medium truncate",
              // Responsive font size
              "text-[8px] sm:text-[11px] md:text-[10px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px]",
              // Responsive line height
              "leading-[10px] sm:leading-[14px] md:leading-[12px] lg:leading-[15px] xl:leading-[16px] 2xl:leading-[17px]"
            )}>
              {tourName}
            </span>
          )}
          {reviewDate && (
            <span className={cn(
              "font-onest text-right flex-shrink-0",
              // Responsive font size
              "text-[8px] sm:text-[10px] md:text-[9px] lg:text-[11px] xl:text-[12px] 2xl:text-[13px]",
              // Responsive line height
              "leading-[10px] sm:leading-[12px] md:leading-[11px] lg:leading-[13px] xl:leading-[14px] 2xl:leading-[15px]"
            )}>
              {reviewDate}
            </span>
          )}
        </div>
      )}
    </div>
  )
}