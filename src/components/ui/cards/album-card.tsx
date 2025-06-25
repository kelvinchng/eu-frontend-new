'use client'

import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface AlbumCardProps {
  id: string
  image: string
  date: string
  tourManager: string
  destination: string
  onClick?: () => void
  className?: string
}

export function AlbumCard({
  id,
  image,
  date,
  tourManager,
  destination,
  onClick,
  className
}: AlbumCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "relative w-[461px] h-[415px] bg-white rounded-[9px] overflow-hidden shadow-[0px_3px_3px_0px_rgba(0,0,0,0.16)] hover:shadow-lg transition-shadow cursor-pointer",
        className
      )}
    >
      {/* Image */}
      <div className="absolute left-0 top-0 w-[461px] h-[304px]">
        <Image
          src={image}
          alt={`${destination} tour`}
          fill
          className="object-cover rounded-[9px]"
        />
      </div>
      
      {/* Tour Manager Details */}
      <div className="absolute left-[26px] top-[330px] w-[266px] h-[51px]">
        {/* Date */}
        <div className="absolute left-0 top-0 flex items-start">
          <span className="font-onest font-bold text-[18px] leading-[23px] text-[#242424]">
            Date:
          </span>
          <span className="font-onest font-normal text-[18px] leading-[23px] text-[#242424] ml-[20px]">
            {date}
          </span>
        </div>
        {/* Tour Manager */}
        <div className="absolute left-0 top-[28px] flex items-start">
          <span className="font-onest font-bold text-[18px] leading-[23px] text-[#242424]">
            Tour Manager:
          </span>
          <span className="font-onest font-normal text-[18px] leading-[23px] text-[#242424] ml-[16px]">
            {tourManager}
          </span>
        </div>
      </div>
    </div>
  )
}