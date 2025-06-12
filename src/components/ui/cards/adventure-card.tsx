'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface AdventureCardProps {
  id: string
  title: string
  image: string
  icon?: React.ReactNode
  href?: string
  className?: string
}

export function AdventureCard({
  id,
  title,
  image,
  icon,
  href = `/adventure/${id}`,
  className
}: AdventureCardProps) {
  return (
    <div
      className={cn(
        "group relative w-[344.47px] h-[606.25px]",
        className
      )}
    >
      {/* Image Container */}
      <div 
        className="relative w-[344.46px] h-[499.25px] overflow-hidden rounded-[9px]"
        style={{ boxShadow: '0px 3px 3px 0px rgba(0, 0, 0, 0.16)' }}
      >
        {/* Background Image */}
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="344px"
          priority
        />
        
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.648]"
          style={{
            background: `linear-gradient(180deg, 
              rgba(7, 7, 7, 0) 0%, 
              rgba(44, 44, 44, 0) 67.3%, 
              rgba(36, 36, 36, 0.61) 87.6%, 
              rgba(7, 7, 7, 0.75) 100%)`
          }}
        />
      </div>

      {/* Icon - positioned at bottom left, overlapping image and content */}
      {icon ? (
        <div className="absolute left-0 top-[450.25px] w-[63px] h-[63px] z-10">
          {icon}
        </div>
      ) : (
        <div className="absolute left-0 top-[450.25px] w-[63px] h-[63px] bg-[#242424] rounded-full flex items-center justify-center z-10">
          <svg width="26" height="14" viewBox="0 0 26 14" fill="none">
            <path 
              d="M17.74 0L25.83 8.39L17.74 8.39" 
              stroke="white" 
              strokeWidth="2"
              fill="none"
            />
            <path 
              d="M0 0.02L25.81 13.67" 
              stroke="white" 
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      )}
      
      {/* Title - positioned based on Figma */}
      <h3 className="absolute left-[0.02px] top-[533.01px] font-thunder text-[45px] leading-[0.92] text-[#242424] whitespace-nowrap">
        {title}
      </h3>
      
      {/* View More Link - positioned based on Figma */}
      <Link 
        href={href}
        className={cn(
          "absolute left-[1.02px] top-[583.25px]",
          "inline-flex items-center gap-[8.48px]",
          "group/link hover:gap-[12px] transition-all"
        )}
      >
        <span className="font-onest text-[18px] leading-[1.275] text-[#242424]">
          View more
        </span>
        <svg 
          width="17" 
          height="14" 
          viewBox="0 0 17 14" 
          fill="none"
          className="mt-[5px]"
        >
          <path 
            d="M10.58 0L16.61 6.98L10.58 13.97" 
            stroke="#242424" 
            strokeWidth="1"
            fill="none"
          />
          <line 
            x1="0" 
            y1="6.98" 
            x2="16.61" 
            y2="6.98" 
            stroke="#242424" 
            strokeWidth="1.4"
          />
        </svg>
      </Link>
    </div>
  )
}