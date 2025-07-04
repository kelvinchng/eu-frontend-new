'use client'

import React from 'react'
import Image from 'next/image'

export function AboutHero() {
  return (
    <div className="relative w-full h-[409px] lg:h-[590px] xl:h-[690px] 2xl:h-[790px] 3xl:h-[890px] overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/assets/backgrounds/about-us-hero-bg.jpg"
          alt="About Us Background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        {/* Gradient Overlay - Figma gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, 
              rgba(7, 7, 7, 0.71) 0%, 
              rgba(23, 23, 23, 0.6) 11.9%, 
              rgba(38, 38, 38, 0) 23.1%, 
              rgba(53, 53, 53, 0) 34.3%, 
              rgba(44, 44, 44, 0) 47%, 
              rgba(36, 36, 36, 0.61) 59.4%, 
              rgba(7, 7, 7, 0.75) 100%)`
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-end">
        <div className="w-full max-w-[1920px] mx-auto px-[34px] md:px-[220px] pb-[47px] md:pb-[82px]">
          {/* Title */}
          <h1 className="font-thunder font-normal text-[46px] leading-[42px] md:text-[110px] md:leading-[101px] tracking-[0.01em] text-white">
            About Us
          </h1>
        </div>
      </div>
    </div>
  )
}