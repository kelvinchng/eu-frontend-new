'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface TourImageGalleryProps {
  gallery?: string[]
  className?: string
}

// Default gallery images if none provided
const defaultGallery = [
  '/assets/tour-details/bern-fountain-clock-tower.jpg',
  '/assets/tour-details/gornergrat-railway.jpg', 
  '/assets/tour-details/interlaken-lake-thun.jpg',
  '/assets/tour-details/tour-album-1.jpg',
  '/assets/tour-details/tour-album-2.jpg',
  '/assets/tour-details/tour-album-3.jpg',
]

export function TourImageGallery({ gallery = defaultGallery, className }: TourImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  
  return (
    <div className={cn("w-full", className)}>
      {/* Desktop Gallery - Exact Figma Layout */}
      <div className="hidden lg:block h-[706px] w-full max-w-[1480px]">
        <div className="flex gap-[16px] h-full">
          {/* Main Large Image - Left Side */}
          <div className="relative flex-1 max-w-[980px] h-[705px] rounded-[9px] overflow-hidden" style={{ boxShadow: '0px 3px 3px 0px rgba(0, 0, 0, 0.16)' }}>
            <Image
              src={gallery[0] || defaultGallery[0]}
              alt="Main tour image"
              fill
              className="object-cover"
              sizes="(max-width: 1480px) 66vw, 980px"
              priority
            />
          </div>
          
          {/* Right Side Container */}
          <div className="flex flex-col gap-[17px] w-[480px] flex-shrink-0">
            {/* Top Image */}
            <div className="relative w-full h-[344px] rounded-[9px] overflow-hidden" style={{ boxShadow: '0px 3px 3px 0px rgba(0, 0, 0, 0.16)' }}>
              <Image
                src={gallery[1] || defaultGallery[1]}
                alt="Tour image 2"
                fill
                className="object-cover"
                sizes="480px"
              />
            </div>
            
            {/* Bottom Image */}
            <div className="relative w-full h-[344px] rounded-[9px] overflow-hidden" style={{ boxShadow: '0px 3px 3px 0px rgba(0, 0, 0, 0.16)' }}>
              <Image
                src={gallery[2] || defaultGallery[2]}
                alt="Tour image 3"
                fill
                className="object-cover"
                sizes="480px"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Gallery */}
      <div className="lg:hidden w-[325px] h-[428px]">
        {/* Large main image */}
        <div 
          className="relative w-[325px] h-[263px] rounded-[9px] overflow-hidden"
          style={{ boxShadow: '0px 3px 3px 0px rgba(0, 0, 0, 0.16)' }}
        >
          <Image
            src={gallery[0] || defaultGallery[0]}
            alt="Main tour image"
            fill
            className="object-cover"
            sizes="325px"
            priority
          />
        </div>
        
        {/* Two smaller images below */}
        <div className="mt-[6px] flex gap-[7px]">
          <div 
            className="relative w-[159px] h-[159px] rounded-[9px] overflow-hidden"
            style={{ boxShadow: '0px 3px 3px 0px rgba(0, 0, 0, 0.16)' }}
          >
            <Image
              src={gallery[1] || defaultGallery[1]}
              alt="Tour image 2"
              fill
              className="object-cover"
              sizes="159px"
            />
          </div>
          
          <div 
            className="relative w-[159px] h-[159px] rounded-[9px] overflow-hidden"
            style={{ boxShadow: '0px 3px 3px 0px rgba(0, 0, 0, 0.16)' }}
          >
            <Image
              src={gallery[2] || defaultGallery[2]}
              alt="Tour image 3"
              fill
              className="object-cover"
              sizes="159px"
            />
          </div>
        </div>
      </div>
    </div>
  )
}