'use client'

import React from 'react'
import Image from 'next/image'

export function MICEHeroFigma() {
  return (
    <div className="relative w-full h-[409px] md:h-[838px] overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/assets/backgrounds/mice-hero-bg.jpg"
          alt="MICE Services Background"
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
              rgba(23, 23, 23, 0.43) 20%, 
              rgba(38, 38, 38, 0) 27.91%, 
              rgba(53, 53, 53, 0) 34.3%, 
              rgba(44, 44, 44, 0) 47%, 
              rgba(36, 36, 36, 0.61) 72.06%, 
              rgba(7, 7, 7, 0.75) 100%)`
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-end">
        <div className="w-full max-w-[1920px] mx-auto px-[34px] md:px-[220px] pb-[47px] md:pb-[160px]">
          <div className="flex items-end gap-[10px] md:gap-[21px]">
            {/* Title */}
            <h1 className="font-thunder font-normal text-[46px] md:text-[110px] leading-[42px] md:leading-[101px] tracking-[0.01em] text-white">
              EU Mice
            </h1>
            
            {/* Logo */}
            <div className="relative w-[69px] h-[44px] md:w-[178.55px] md:h-[114px] mb-[6px] md:mb-[13px]">
              <Image
                src="/assets/logos/mice-logo.png"
                alt="MICE Logo"
                fill
                sizes="(max-width: 768px) 69px, 179px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}