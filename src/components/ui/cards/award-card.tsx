'use client'

import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface AwardCardProps {
  id: string
  image: string
  year: string
  fitType?: 'cover' | 'contain'
  onClick?: () => void
  className?: string
}

export function AwardCard({
  id,
  image,
  year,
  fitType = 'cover',
  onClick,
  className
}: AwardCardProps) {
  return (
    <div 
      onClick={onClick}
      className={cn(
        "relative bg-white rounded-lg shadow-xl w-[247px] h-[290px]",
        onClick && "cursor-pointer hover:shadow-2xl transition-shadow",
        className
      )}
    >
      {/* Award Image positioned exactly as in Figma */}
      <div className="absolute left-[13.6%] top-[5.7%] w-[73.3%] h-[88.6%]">
        <Image
          src={image}
          alt={`Award ${id}`}
          fill
          className={fitType === 'contain' ? 'object-contain' : 'object-cover'}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
        />
      </div>
    </div>
  )
}