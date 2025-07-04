'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
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
      // Responsive dimensions - Reduced to fit 4 cards
      "flex flex-col overflow-hidden",
      "w-[324px] md:w-[280px] lg:w-[280px] xl:w-[300px] 2xl:w-[320px]",
      "h-[467px] md:h-[430px] lg:h-[460px] xl:h-[490px] 2xl:h-[520px]",
      // Mobile-first border radius - Base size is mobile 9px from Figma
      "rounded-[9px] md:rounded-[7px] lg:rounded-[8px] xl:rounded-[8px] 2xl:rounded-[9px]",
      "bg-white",
      className
    )}
    style={{ boxShadow: designTokens.shadows.card }}
    >
      {/* Image - positioned at top */}
      <div className="relative w-full overflow-hidden h-[172px] md:h-[150px] lg:h-[160px] xl:h-[170px] 2xl:h-[180px] flex-shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 324px, (max-width: 1024px) 280px, (max-width: 1280px) 300px, (max-width: 1536px) 320px, 320px"
          priority
        />
        {badge && (
          <TourCardBadge>
            {badge}
          </TourCardBadge>
        )}
      </div>
      
      {/* Content section using flex layout */}
      <div className={cn(
        "flex flex-col justify-between flex-1",
        "pt-[10px] md:pt-[10px] lg:pt-[15px] xl:pt-[15px] 2xl:pt-[15px]",
        "px-[20px] md:px-[18px] lg:px-[20px] xl:px-[22px] 2xl:px-[24px]",
        "pb-[20px] md:pb-[18px] lg:pb-[20px] xl:pb-[22px] 2xl:pb-[24px]"
      )}>
        {/* Top content: Title + Price/Description group */}
        <div className="flex flex-col">
          {/* Title - Fixed height for 2 rows */}
          <h3 className={cn(
            "font-onest font-bold leading-[1.275]",
            "text-[15px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px]",
            "mb-[20px] md:mb-[20px] lg:mb-[25px] xl:mb-[25px] 2xl:mb-[25px]",
            // Fixed height for 2 rows with line-height 1.275 - increased for better fit
            "h-[38px] md:h-[42px] lg:h-[44px] xl:h-[47px] 2xl:h-[50px]",
            "overflow-hidden"
          )}
          style={{ color: designTokens.colors.primary }}>
            {title}
          </h3>
          
          {/* Price and Description group - tight spacing */}
          <div className="space-y-[8px] md:space-y-[8px] lg:space-y-[10px] xl:space-y-[10px] 2xl:space-y-[10px]">
            {/* Price */}
            <p className={cn(
              "font-onest font-medium leading-[1.275]",
              "text-[13px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]"
            )}
            style={{ color: designTokens.colors.primary }}>
              {price}
            </p>
            
            {/* Description */}
            <p className={cn(
              "font-onest leading-[1.275] overflow-hidden line-clamp-3",
              "text-[13px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]"
            )}
            style={{ color: designTokens.colors.primary }}>
              {description}
            </p>
          </div>
        </div>

        {/* Bottom Section with Tag and View More */}
        <div className="flex flex-col gap-[8px] md:gap-[6px] lg:gap-[7px] xl:gap-[8px] 2xl:gap-[9px] mt-auto">
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
                // Reduced font size for smaller cards
                "text-[12px] md:text-[12px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px]"
              )}
              style={{ color: designTokens.colors.primary }}
              >
                View More
              </span>
              {/* Down Arrow - responsive sizing */}
              <ChevronDown 
                className="w-[8px] h-[5px] md:w-[7px] md:h-[4px] lg:w-[8px] lg:h-[5px] xl:w-[10px] xl:h-[6px] 2xl:w-[11px] 2xl:h-[6px]"
                style={{ color: designTokens.colors.primary }}
                strokeWidth={1.5}
              />
            </Link>
          </div>
        </div>
      </div>
    </Card>
  )
}