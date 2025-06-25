'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { TourCardBadge } from '@/components/ui/tour-card-badge'
import { TourTagBadge } from '@/components/ui/tour-tag-badge'
import { cn } from '@/lib/utils'
import { designTokens } from '@/lib/design-tokens'

interface TourCardProps {
  id: string
  title: string
  price: string
  description: string
  image: string
  tags?: string[]
  badge?: string
  href?: string
  className?: string
}

export function TourCard({
  id,
  title,
  price,
  description,
  image,
  tags = [],
  badge,
  href = `/tours/${id}`,
  className
}: TourCardProps) {
  return (
    <Card className={cn(
      // Mobile-first responsive dimensions - Base size is mobile 324x467px from Figma
      "relative overflow-hidden",
      "w-[324px] md:w-[368px] lg:w-[414px] xl:w-[430px] 2xl:w-[460px]",
      "h-[467px] md:h-[525px] lg:h-[591px] xl:h-[601px] 2xl:h-[643px]",
      // Mobile-first border radius - Base size is mobile 9px from Figma
      "rounded-[9px] md:rounded-[7px] lg:rounded-[8px] xl:rounded-[8px] 2xl:rounded-[9px]",
      className
    )}
    style={{ boxShadow: designTokens.shadows.card }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-white" />
      
      {/* Image - positioned at top, Mobile-first height 172px from Figma */}
      <div className="relative w-full overflow-hidden h-[172px] md:h-[186px] lg:h-[223px] xl:h-[261px] 2xl:h-[279px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 324px, (max-width: 1024px) 368px, (max-width: 1280px) 414px, (max-width: 1536px) 430px, 460px"
          priority
        />
        {badge && (
          <TourCardBadge>
            {badge}
          </TourCardBadge>
        )}
      </div>
      
      {/* Title - Mobile-first positioning and font size from Figma */}
      <h3 className={cn(
        "absolute font-onest font-bold leading-[1.275]",
        // Mobile-first positioning from left - Base 29px from Figma mobile
        "left-[29px] md:left-[23px] lg:left-[28px] xl:left-[32px] 2xl:left-[35px]",
        // Mobile-first positioning from right - Base 29px from Figma mobile  
        "right-[29px] md:right-[24px] lg:right-[29px] xl:right-[33px] 2xl:right-[36px]",
        // Mobile-first top positioning - Base 199px from Figma mobile
        "top-[199px] md:top-[203px] lg:top-[243px] xl:top-[284px] 2xl:top-[304px]",
        // Mobile-first font size - Base 15px from Figma mobile
        "text-[15px] md:text-[16px] lg:text-[18px] xl:text-[19px] 2xl:text-[20px]"
      )}
      style={{ color: designTokens.colors.primary }}>
        {title}
      </h3>
      
      {/* Price - Mobile-first positioning and font size from Figma */}
      <p className={cn(
        "absolute font-onest font-medium leading-[1.275]",
        // Mobile-first positioning from left - Base 29px from Figma mobile
        "left-[29px] md:left-[24px] lg:left-[28px] xl:left-[33px] 2xl:left-[35px]",
        // Mobile-first top positioning - Base 246px from Figma mobile
        "top-[246px] md:top-[248px] lg:top-[298px] xl:top-[347px] 2xl:top-[372px]",
        // Mobile-first font size - Base 13px from Figma mobile
        "text-[13px] md:text-[14px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px]"
      )}
      style={{ color: designTokens.colors.primary }}>
        {price}
      </p>
      
      {/* Description - Mobile-first positioning and font size from Figma */}
      <p className={cn(
        "absolute font-onest leading-[1.275] overflow-hidden",
        // Line clamping for 3 lines with ellipsis
        "line-clamp-3",
        // Mobile-first positioning from left - Base 29px from Figma mobile
        "left-[29px] md:left-[24px] lg:left-[29px] xl:left-[33px] 2xl:left-[36px]", 
        // Mobile-first positioning from right - Base 29px from Figma mobile
        "right-[29px] md:right-[24px] lg:right-[29px] xl:right-[33px] 2xl:right-[36px]",
        // Mobile-first top positioning - Base 272px from Figma mobile
        "top-[272px] md:top-[279px] lg:top-[335px] xl:top-[391px] 2xl:top-[418px]",
        // Mobile-first font size - Base 13px from Figma mobile
        "text-[13px] md:text-[14px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px]",
        // Mobile-first max height - Base 101px for description area from Figma mobile
        "max-h-[101px] md:max-h-[50px] lg:max-h-[60px] xl:max-h-[75px] 2xl:max-h-[80px]"
      )}
      style={{ color: designTokens.colors.primary }}>
        {description}
      </p>
      
      {/* Bottom Section with Tag and View More - Mobile-first positioning from Figma */}
      <div className={cn(
        "absolute flex flex-col",
        // Mobile-first positioning - Base 29px from Figma mobile, tag at 375px, view more at 416px
        "left-[29px] md:left-[24px] lg:left-[28px] xl:left-[33px] 2xl:left-[35px]",
        "right-[29px] md:right-[24px] lg:right-[28px] xl:right-[33px] 2xl:right-[35px]",
        // Position tag at correct location - Base 375px for tag from Figma mobile
        "top-[375px] md:top-[410px] lg:top-[470px] xl:top-[520px] 2xl:top-[555px]",
        // Mobile-first gap between tag and view more - Base 11px gap from Figma mobile (416px - 375px - 30px = 11px gap)
        "gap-[11px] md:gap-[6px] lg:gap-[7px] xl:gap-[8px] 2xl:gap-[9px]"
      )}>
        <div className="flex flex-col gap-[inherit]">
          {/* Tag Container */}
          {tags[0] && (
            <TourTagBadge>
              {tags[0]}
            </TourTagBadge>
          )}

          {/* View More Link - centered below tag */}
          <div className="flex justify-center">
            <Link 
              href={href}
              className={cn(
                "flex items-center group",
                // Mobile-first gap between text and arrow
                "gap-[7px] md:gap-[10px] lg:gap-[12px] xl:gap-[14px] 2xl:gap-[15px]"
              )}
            >
              <span className={cn(
                "font-onest underline group-hover:no-underline",
                // Mobile-first font size - Base 12px for View More from Figma mobile
                "text-[12px] md:text-[14px] lg:text-[17px] xl:text-[20px] 2xl:text-[21px]"
              )}
              style={{ color: designTokens.colors.primary }}
              >
                View More
              </span>
              {/* Down Arrow - responsive sizing */}
              <svg 
                className="w-[8px] h-[5px] md:w-[7px] md:h-[4px] lg:w-[8px] lg:h-[5px] xl:w-[10px] xl:h-[6px] 2xl:w-[11px] 2xl:h-[6px]" 
                viewBox="0 0 9 6" 
                fill="none"
              >
                <path d="M1 1L4.5 4.66L8 1" stroke="#242424" strokeWidth="1.5"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  )
}