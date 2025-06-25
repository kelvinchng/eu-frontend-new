'use client'

import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ExpertCardProps {
  name: string
  description: string
  reviews: number
  image: string
  imageWidth: number
  imageHeight: number
  imageTop: number
  imageLeft: number
  onClick?: () => void
  className?: string
}

export function ExpertCard({ 
  name, 
  description, 
  reviews, 
  image,
  imageWidth,
  imageHeight,
  imageTop,
  imageLeft,
  onClick,
  className
}: ExpertCardProps) {
  return (
    <div 
      onClick={onClick}
      className={cn(
        "relative w-[467px] h-[559px] bg-white border border-[#E8E8E8] rounded-[20px]",
        onClick && "cursor-pointer hover:shadow-lg transition-shadow",
        className
      )}
    >
      {/* Expert Image */}
      <div 
        className="absolute overflow-hidden"
        style={{
          left: `${imageLeft}px`,
          top: `${imageTop}px`,
          width: `${imageWidth}px`,
          height: `${imageHeight}px`
        }}
      >
        <Image
          src={image}
          alt={name}
          width={imageWidth}
          height={imageHeight}
          className="object-cover"
        />
      </div>

      {/* Expert Name */}
      <h3 className="absolute left-[34.2px] top-[383px] font-thunder font-medium text-[32px] leading-[29px] text-[#242424]">
        {name}
      </h3>

      {/* Expert Reviews */}
      <p className="absolute left-[34.2px] top-[416px] font-onest font-medium text-[15px] leading-[19px] text-[#242424]">
        ({reviews} Reviews)
      </p>

      {/* Expert Description */}
      <p className="absolute left-[34.2px] top-[453px] w-[399.01px] font-onest text-[18px] leading-[23px] text-[#242424]">
        {description}
      </p>
    </div>
  )
}