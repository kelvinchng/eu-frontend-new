'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { TourReviewCard } from '@/components/ui/cards/tour-review-card'

interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  date: string
  comment: string
  avatar: string
}

interface TourTestimonialsProps {
  testimonials: Testimonial[]
  className?: string
}

export function TourTestimonials({ testimonials, className }: TourTestimonialsProps) {
  const [expandedReviews, setExpandedReviews] = useState<string[]>([])
  const [displayCount, setDisplayCount] = useState(6)

  const toggleReadMore = (reviewId: string) => {
    setExpandedReviews(prev => 
      prev.includes(reviewId) 
        ? prev.filter(id => id !== reviewId)
        : [...prev, reviewId]
    )
  }

  const displayedTestimonials = testimonials.slice(0, displayCount)
  const hasMoreTestimonials = displayCount < testimonials.length

  const loadMoreTestimonials = () => {
    setDisplayCount(prev => Math.min(prev + 6, testimonials.length))
  }

  return (
    <div className={cn("w-full", className)}>
      {/* Title */}
      <h2 className="font-thunder font-medium text-[32px] lg:text-[50px] leading-[0.92] text-[#242424] uppercase mb-[24px] lg:mb-[50px] text-center">
        Testimonials
      </h2>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[13px] lg:gap-[24px]">
        {displayedTestimonials.map((testimonial) => (
          <TourReviewCard
            key={testimonial.id}
            id={testimonial.id}
            customerName={testimonial.name}
            customerInitial={testimonial.name.charAt(0)}
            rating={testimonial.rating}
            date={testimonial.date}
            reviewText={testimonial.comment}
            fullText={testimonial.comment}
            source="website"
            verified={true}
            avatar={testimonial.avatar}
            isExpanded={expandedReviews.includes(testimonial.id)}
            onToggleExpand={toggleReadMore}
          />
        ))}
      </div>

      {/* Load More Button */}
      {hasMoreTestimonials && (
        <div className="flex justify-center mt-[35px] lg:mt-[50px]">
          <button
            onClick={loadMoreTestimonials}
            className="px-[32px] py-[12px] bg-[#242424] rounded-[8px] text-white font-onest text-[14px] lg:text-[16px] hover:bg-[#333333] transition-colors"
          >
            Load More Reviews
          </button>
        </div>
      )}

      {/* Results count */}
      <p className="text-center mt-[20px] font-onest text-[13px] lg:text-[14px] text-[#666666]">
        Showing {displayedTestimonials.length} of {testimonials.length} reviews
      </p>
    </div>
  )
}