'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface PressArticleCardProps {
  id: string
  title: string
  description: string
  date: string
  thumbnail: string
  articleUrl?: string
  className?: string
}

export function PressArticleCard({ 
  id, 
  title, 
  description, 
  date, 
  thumbnail, 
  articleUrl,
  className 
}: PressArticleCardProps) {
  return (
    <div className={cn(
      "relative w-[467px] h-[735px] bg-white border border-[#E8E8E8] rounded-[20px]",
      className
    )}>
      {/* Thumbnail */}
      <div className="absolute left-[22.8px] top-[31px] w-[420.67px] h-[337px] rounded-[13px] overflow-hidden flex items-center justify-center">
        <Image
          src={thumbnail}
          alt={title}
          width={421}
          height={337}
          className="object-contain w-full h-full"
        />
      </div>

      {/* Title */}
      <h3 className="absolute left-[34px] top-[393px] w-[399px] font-thunder font-medium text-[32px] leading-[36px] text-[#242424]">
        {title}
      </h3>

      {/* Date */}
      <p className="absolute left-[34px] top-[474px] font-onest text-[15px] leading-[19px] tracking-[0.03em] text-[#475569]/50">
        {date}
      </p>

      {/* Description */}
      <p className="absolute left-[34.2px] top-[521px] w-[399.01px] font-onest text-[18px] leading-[23px] text-[#242424]">
        {description}
      </p>

      {/* Read Article Button */}
      <Link 
        href={articleUrl || `/press/${id}`}
        className="absolute left-[34px] top-[644px] w-[140px] h-[51px] bg-[#242424] border border-[#242424] rounded-[9px] font-onest text-[16px] leading-[20px] text-white hover:bg-[#333333] transition-colors flex items-center justify-center"
      >
        Read Article
      </Link>
    </div>
  )
}