'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AdventureCardMobileProps {
  title: string
  image: string
  icon: 'trending' | 'deals' | 'cruises' | 'themed'
  href?: string
  onViewMore?: () => void
  className?: string
}

export function AdventureCardMobile({ 
  title, 
  image, 
  icon, 
  href,
  onViewMore,
  className 
}: AdventureCardMobileProps) {
  const getIconSrc = () => {
    switch (icon) {
      case 'trending':
        return '/assets/icons/trending-now-icon.svg'
      case 'deals':
        return '/assets/icons/travel-deals-icon.svg'
      case 'cruises':
        return '/assets/icons/cruises-icon.svg'
      case 'themed':
        return '/assets/icons/snowflake-icon.svg'
      default:
        return '/assets/icons/trending-now-icon.svg'
    }
  }

  const getDefaultHref = () => {
    switch (icon) {
      case 'trending':
        return '/tours?category=trending'
      case 'deals':
        return '/deals'
      case 'cruises':
        return '/tours?category=cruises'
      case 'themed':
        return '/themed-journeys'
      default:
        return '/tours'
    }
  }

  return (
    <div className={cn("relative w-[265px] h-[493px]", className)}>
      {/* Main Image */}
      <div className="relative w-[265px] h-[428px] rounded-[9px] overflow-hidden" style={{ boxShadow: '0px 3px 3px 0px rgba(0, 0, 0, 0.16)' }}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="265px"
        />
        
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(7, 7, 7, 0) 0%, rgba(44, 44, 44, 0) 67.3%, rgba(36, 36, 36, 0.61) 87.6%, rgba(7, 7, 7, 0.75) 100%)',
            opacity: 0.648
          }}
        />
      </div>
      
      {/* Icon Circle - Positioned outside image */}
      <div 
        className="absolute"
        style={{ 
          width: '46.09px',
          height: '46.09px',
          top: '394px',
          left: '0px'
        }}
      >
        <Image
          src={getIconSrc()}
          alt={`${title} icon`}
          width={46.09}
          height={46.09}
          className="w-full h-full"
          style={{ 
            filter: 'drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.16))'
          }}
        />
      </div>
      
      {/* Title */}
      <div 
        className="absolute text-[#242424] font-thunder text-[25px] leading-[0.92] font-normal"
        style={{
          top: '449px',
          left: '0px',
          width: icon === 'trending' ? '101px' : '89px',
          height: '23px'
        }}
      >
        {title}
      </div>
      
      {/* View More Button */}
      <Link 
        href={href || getDefaultHref()}
        className="absolute flex items-center gap-[11px] hover:opacity-80 transition-opacity"
        style={{
          top: '476px',
          left: '0px',
          width: '87.89px',
          height: '17px'
        }}
        onClick={onViewMore}
      >
        <span className="text-[#242424] font-onest text-[13px] leading-[1.275] font-normal text-right">
          View more
        </span>
        <ArrowRight 
          className="w-[10px] h-[10px]"
          color="#242424"
          strokeWidth={1.5}
        />
      </Link>
    </div>
  )
}