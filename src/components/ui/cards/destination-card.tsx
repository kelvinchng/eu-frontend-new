'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface DestinationCardProps {
  id: string
  name: string
  image: string
  href?: string
  className?: string
}

export function DestinationCard({
  id,
  name,
  image,
  href = `/explore/${id}`,
  className
}: DestinationCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative block w-[364px] h-[519px] p-[10px]",
        "transition-all duration-300 hover:scale-[1.02]",
        className
      )}
    >
      {/* Inner container with image */}
      <div 
        className="relative w-[344.12px] h-[499.12px] overflow-hidden rounded-[9px]"
        style={{ boxShadow: '0px 3px 3px 0px rgba(0, 0, 0, 0.16)' }}
      >
        {/* Background Image */}
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="344px"
          priority
        />
        
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.648]"
          style={{
            background: `linear-gradient(180deg, 
              rgba(7, 7, 7, 0) 0%, 
              rgba(44, 44, 44, 0) 70.7%, 
              rgba(36, 36, 36, 0.61) 73.9%, 
              rgba(7, 7, 7, 0.75) 100%)`
          }}
        />
      </div>
      
      {/* Text and Arrow Container - positioned from bottom for consistent padding */}
      <div className="absolute bottom-[40px] left-[32.07px] right-[32px]">
        {/* Destination Name */}
        <h3 className="font-thunder text-[45px] leading-[41px] text-white max-w-[195px]">
          Explore {name}.
        </h3>
      </div>
      
      {/* Arrow Icon - aligned with text baseline */}
      <div className="absolute bottom-[55px] right-[63.4px] w-[17.66px] h-[11.33px] group-hover:translate-x-1 transition-transform">
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
          <path 
            d="M10.35 0L16.76 5.665L10.35 11.33" 
            stroke="white" 
            strokeWidth="1.4"
            fill="none"
          />
          <line 
            x1="0" 
            y1="5.665" 
            x2="17.66" 
            y2="5.665" 
            stroke="white" 
            strokeWidth="1.4"
          />
        </svg>
      </div>
    </Link>
  )
}