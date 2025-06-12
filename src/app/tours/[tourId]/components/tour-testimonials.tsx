'use client'

import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

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
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={cn(
          "w-[16px] h-[16px]",
          index < rating ? "text-yellow-400" : "text-gray-300"
        )}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <div className={cn("w-full", className)}>
      {/* Desktop Testimonials */}
      <div className="hidden lg:block">
        <h2 className="font-thunder text-[50px] leading-[0.92] text-[#242424] mb-[32px]">
          What Our Travelers Say
        </h2>
        
        <div className="grid gap-[32px]">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white border border-[#E8E8E8] rounded-[16px] p-[32px]">
              <div className="flex items-start gap-[24px]">
                {/* Avatar */}
                <div className="w-[64px] h-[64px] relative rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-[16px]">
                    <div>
                      <h3 className="font-onest font-semibold text-[18px] text-[#242424]">
                        {testimonial.name}
                      </h3>
                      <p className="font-onest text-[14px] text-[#666666]">
                        {testimonial.location} • {testimonial.date}
                      </p>
                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-[4px]">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  
                  {/* Comment */}
                  <p className="font-onest text-[16px] leading-[1.5] text-[#242424]">
                    "{testimonial.comment}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Mobile Testimonials */}
      <div className="lg:hidden">
        <h2 className="font-thunder text-[24px] leading-[0.92] text-[#242424] mb-[24px]">
          What Our Travelers Say
        </h2>
        
        <div className="space-y-[24px]">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white border border-[#E8E8E8] rounded-[12px] p-[20px]">
              <div className="flex items-start gap-[16px]">
                {/* Avatar */}
                <div className="w-[48px] h-[48px] relative rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="mb-[12px]">
                    <div className="flex items-center justify-between mb-[8px]">
                      <h3 className="font-onest font-semibold text-[14px] text-[#242424]">
                        {testimonial.name}
                      </h3>
                      
                      {/* Rating */}
                      <div className="flex items-center gap-[2px]">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                    
                    <p className="font-onest text-[12px] text-[#666666]">
                      {testimonial.location} • {testimonial.date}
                    </p>
                  </div>
                  
                  {/* Comment */}
                  <p className="font-onest text-[13px] leading-[1.4] text-[#242424]">
                    "{testimonial.comment}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}