'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
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
        "group relative block overflow-hidden transition-all duration-300 hover:scale-[1.02]",
        // Mobile-first responsive dimensions - Figma mobile spec 265×428px
        "w-[265px] sm:w-[251px] md:w-[229px] lg:w-[275px] xl:w-[320px] 2xl:w-[344px]",
        "h-[428px] sm:h-[415px] md:h-[332px] lg:h-[399px] xl:h-[465px] 2xl:h-[499px]",
        // Mobile-first border radius
        "rounded-[8px] sm:rounded-[5px] md:rounded-[7px] lg:rounded-[9px] xl:rounded-[10px] 2xl:rounded-[11px]",
        className
      )}
      style={{ 
        boxShadow: '0px 3px 3px 0px rgba(0, 0, 0, 0.16)'
      }}
    >
      {/* Background Image */}
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 344px"
        quality={95}
        priority
      />
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 z-10 opacity-[0.648]"
        style={{
          background: `linear-gradient(180deg, 
            rgba(7, 7, 7, 0) 0%, 
            rgba(44, 44, 44, 0) 70.7%, 
            rgba(36, 36, 36, 0.61) 73.9%, 
            rgba(7, 7, 7, 0.75) 100%)`
        }}
      />
      
      {/* Text and Arrow Container - proportional to mobile 265x428 card */}
      <div className={cn(
        "absolute flex items-center justify-between z-20",
        // Mobile positioning proportional to 265x428 card
        "bottom-[32px] sm:bottom-[32px] md:bottom-[25px] lg:bottom-[30px] xl:bottom-[35px] 2xl:bottom-[40px]",
        // Mobile left positioning proportional to card width
        "left-[20px] sm:left-[16px] md:left-[15px] lg:left-[18px] xl:left-[20px] 2xl:left-[22px]",
        // Mobile right positioning proportional to card width
        "right-[20px] sm:right-[38px] md:right-[30px] lg:right-[36px] xl:right-[42px] 2xl:right-[45px]"
      )}>
        {/* Destination Name */}
        <h3 className={cn(
          "font-thunder text-white overflow-hidden text-ellipsis whitespace-nowrap",
          // Mobile typography proportional to 265x428 card
          "text-[24px] sm:text-[25px] md:text-[22px] lg:text-[36px] xl:text-[42px] 2xl:text-[45px]",
          // Mobile line heights proportional to font size
          "leading-[26px] sm:leading-[23px] md:leading-[24px] lg:leading-[40px] xl:leading-[45px] 2xl:leading-[48px]",
          // Mobile max width proportional to card width (265px - 40px padding)
          "max-w-[180px] sm:max-w-[105px] md:max-w-[150px] lg:max-w-[180px] xl:max-w-[210px] 2xl:max-w-[225px]"
        )}>
          Explore {name}.
        </h3>
        
        {/* Arrow Icon - proportional to mobile card size */}
        <ArrowRight 
          className={cn(
            "flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1",
            // Mobile arrow dimensions proportional to card - bigger on desktop
            "w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] md:w-[20px] md:h-[20px] lg:w-[24px] lg:h-[24px] xl:w-[28px] xl:h-[28px] 2xl:w-[32px] 2xl:h-[32px]"
          )}
          color="white"
          strokeWidth={2}
        />
      </div>
    </Link>
  )
}