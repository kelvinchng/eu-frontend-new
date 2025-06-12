'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface ToursHeroProps {
  backgroundImage?: string
  className?: string
}

export function ToursHero({ 
  backgroundImage = '/assets/tours-hero-bg.jpg',
  className 
}: ToursHeroProps) {
  return (
    <section 
      className={cn(
        "hidden lg:flex relative w-full h-[838px] items-end",
        "bg-cover bg-center bg-no-repeat",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(7, 7, 7, 0.71) 0%, rgba(23, 23, 23, 0.6) 11.9%, rgba(38, 38, 38, 0) 23.1%, rgba(53, 53, 53, 0) 34.3%, rgba(44, 44, 44, 0) 47%, rgba(36, 36, 36, 0.61) 59.4%, rgba(7, 7, 7, 0.75) 100%), url(${backgroundImage})`
      }}
    >
      {/* Hero Title */}
      <div className="absolute left-[220px] bottom-[182px]">
        <h1 className="font-thunder text-[110px] leading-[0.92] tracking-[1%] text-white">
          Tours
        </h1>
      </div>
    </section>
  )
}

// Mobile version
export function ToursHeroMobile({ 
  backgroundImage = '/assets/tours-hero-bg.jpg',
  className 
}: ToursHeroProps) {
  return (
    <section 
      className={cn(
        "lg:hidden relative w-full h-[409px] flex items-end",
        "bg-cover bg-center bg-no-repeat",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(7, 7, 7, 0.71) 0%, rgba(23, 23, 23, 0.43) 20%, rgba(38, 38, 38, 0) 27.9%, rgba(53, 53, 53, 0) 34.3%, rgba(44, 44, 44, 0) 47%, rgba(36, 36, 36, 0.61) 72.1%, rgba(7, 7, 7, 0.75) 100%), url(${backgroundImage})`
      }}
    >
      {/* Hero Title */}
      <div className="absolute left-[34px] bottom-[42px]">
        <h1 className="font-thunder text-[46px] leading-[0.92] tracking-[1%] text-white">
          Tours
        </h1>
      </div>
    </section>
  )
}