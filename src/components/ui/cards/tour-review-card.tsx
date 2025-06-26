'use client'

import React from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TourReviewCardProps {
  id: string
  customerName: string
  customerInitial?: string
  rating: number
  date: string
  reviewText: string
  fullText?: string
  source?: 'facebook' | 'google' | 'website'
  verified?: boolean
  avatar?: string
  isExpanded?: boolean
  onToggleExpand?: (id: string) => void
  className?: string
}

export function TourReviewCard({
  id,
  customerName,
  customerInitial,
  rating,
  date,
  reviewText,
  fullText,
  source = 'website',
  verified = true,
  avatar,
  isExpanded = false,
  onToggleExpand,
  className
}: TourReviewCardProps) {
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className="w-[15px] h-[14px]"
            fill={star <= rating ? "#FCBE00" : "#E8E8E8"}
            color={star <= rating ? "#FCBE00" : "#E8E8E8"}
          />
        ))}
      </div>
    )
  }

  const getAvatarBg = () => {
    switch (source) {
      case 'facebook':
        return 'bg-[#242424]'
      case 'google':
        return 'bg-[#D9D9D9]'
      default:
        return 'bg-[#242424]'
    }
  }

  const getAvatarTextColor = () => {
    switch (source) {
      case 'facebook':
        return 'text-white'
      case 'google':
        return 'text-[#666]'
      default:
        return 'text-white'
    }
  }

  return (
    <div className={cn(
      "bg-white border border-[#E8E8E8] w-full relative",
      // Mobile dimensions
      "rounded-[9px] p-[27px_31px_31px_31px] h-[238px]",
      // Desktop dimensions
      "lg:rounded-[25px] lg:p-[32px_36px_36px_36px] lg:h-auto lg:min-h-[250px]",
      className
    )}>
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="flex items-start gap-4">
          {/* Avatar */}
          <div className={cn(
            "w-[63px] h-[63px] rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden",
            getAvatarBg()
          )}>
            {avatar ? (
              <Image
                src={avatar}
                alt={customerName}
                width={63}
                height={63}
                className="rounded-full object-cover"
              />
            ) : customerInitial ? (
              <span className={cn(
                "font-thunder font-semibold text-[40px]",
                getAvatarTextColor()
              )}>
                {customerInitial}
              </span>
            ) : (
              <span className={cn(
                "font-thunder font-semibold text-2xl",
                getAvatarTextColor()
              )}>
                {customerName.charAt(0)}
              </span>
            )}
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <h3 className="font-onest font-bold text-lg text-[#242424] uppercase">
                  {customerName}
                </h3>
                {verified && (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 0C4.032 0 0 4.032 0 9s4.032 9 9 9 9-4.032 9-9-4.032-9-9-9zm4.171 7.08l-4.5 4.5a1.122 1.122 0 01-1.591 0l-2.25-2.25a1.125 1.125 0 111.591-1.591l1.454 1.454 3.705-3.704a1.125 1.125 0 111.591 1.591z" fill="#1877F2"/>
                  </svg>
                )}
              </div>
              <span className="font-onest text-base text-[#242424] opacity-50">
                {date}
              </span>
            </div>

            <div className="mb-4">
              {renderStars(rating)}
            </div>

            <p className="font-onest text-base leading-relaxed text-[#242424]">
              {isExpanded && fullText ? fullText : reviewText}
            </p>

            {fullText && onToggleExpand && (
              <button
                onClick={() => onToggleExpand(id)}
                className="font-onest text-base text-[#242424] opacity-50 mt-3"
              >
                {isExpanded ? 'Read less' : 'Read more'}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Layout - Keep existing absolute positioning */}
      <div className="lg:hidden">
        {/* Profile Image */}
        <div className={cn(
          "absolute left-[31px] top-[27px] w-[40px] h-[40px] rounded-full flex items-center justify-center overflow-hidden",
          getAvatarBg()
        )}>
          {avatar ? (
            <Image
              src={avatar}
              alt={customerName}
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
          ) : customerInitial ? (
            <span className={cn(
              "font-thunder font-semibold text-[20px]",
              getAvatarTextColor()
            )}>
              {customerInitial}
            </span>
          ) : (
            <span className={cn(
              "font-thunder font-semibold text-[16px]",
              getAvatarTextColor()
            )}>
              {customerName.charAt(0)}
            </span>
          )}
        </div>

        {/* Customer Name and Verified */}
        <div className="absolute left-[80px] top-[30px] flex items-center gap-[6px]">
          <h3 className="font-onest font-bold text-[13px] leading-[17px] text-[#242424] uppercase">
            {customerName}
          </h3>
          {verified && (
            <div className="flex items-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8 8-3.584 8-8-3.584-8-8-8zm3.707 6.293l-4 4a.997.997 0 01-1.414 0l-2-2a.999.999 0 111.414-1.414L7 8.172l3.293-3.293a.999.999 0 111.414 1.414z" fill="#1877F2"/>
              </svg>
            </div>
          )}
        </div>

        {/* Date */}
        <span className="absolute left-[80px] top-[47px] font-onest text-[13px] leading-[17px] text-[#242424] opacity-50">
          {date}
        </span>

        {/* Stars - Always show for tour details page */}
        <div className="absolute left-[80px] top-[68px] flex items-center gap-0.5">
          {renderStars(rating)}
        </div>

        {/* Review Text */}
        <p className="absolute left-[31px] top-[100px] w-[271px] h-[85px] font-onest text-[13px] leading-[17px] text-[#242424] overflow-hidden">
          {isExpanded && fullText ? fullText : reviewText}
        </p>

        {/* Read More */}
        {fullText && onToggleExpand && (
          <button
            onClick={() => onToggleExpand(id)}
            className="absolute left-[31px] top-[202px] font-onest text-[13px] leading-[17px] text-[#242424] opacity-50"
          >
            {isExpanded ? 'Read less' : 'Read more'}
          </button>
        )}
      </div>
    </div>
  )
}