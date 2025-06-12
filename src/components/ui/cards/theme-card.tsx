'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ThemeCardProps {
  id: string
  title: string
  description: string
  image: string
  href?: string
  className?: string
}

export function ThemeCard({
  id,
  title,
  description,
  image,
  href = `/theme/${id}`,
  className
}: ThemeCardProps) {
  return (
    <div
      className={cn(
        "group relative w-[344px] h-[499px] overflow-hidden rounded-[11px]",
        className
      )}
      style={{ boxShadow: '0px 3px 3px 0px rgba(0, 0, 0, 0.16)' }}
    >
      {/* Background Image */}
      <div className="relative w-full h-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="344px"
          priority
        />
      </div>
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, 
            rgba(7, 7, 7, 0.71) 0%, 
            rgba(23, 23, 23, 0.60) 10.2%, 
            rgba(38, 38, 38, 0) 16.2%, 
            rgba(53, 53, 53, 0) 25.2%, 
            rgba(44, 44, 44, 0) 69.8%, 
            rgba(36, 36, 36, 0.61) 84.1%, 
            rgba(7, 7, 7, 0.75) 100%)`
        }}
      />
      
      {/* Title */}
      <h3 className="absolute left-[29.33px] top-[38.99px] right-[54.85px] font-thunder text-[45px] leading-[0.92] text-white">
        {title}
      </h3>
      
      {/* Bottom Content Container - positioned from bottom */}
      <div className="absolute bottom-[37px] left-[29px] right-[29px]">
        {/* Description */}
        <p className="font-onest font-medium text-[22px] leading-[1.275] text-white mb-[20px]">
          {description}
        </p>
        
        {/* View More Button */}
        <Link 
          href={href}
          className={cn(
            "inline-flex items-center justify-center",
            "w-[106.92px] h-[41.99px]",
            "bg-white rounded-[6px]",
            "hover:bg-gray-100 transition-colors"
          )}
        >
          <span className="font-onest text-[16px] leading-[1.275] tracking-[-0.025em] text-[#242424]">
            View More
          </span>
        </Link>
      </div>
    </div>
  )
}