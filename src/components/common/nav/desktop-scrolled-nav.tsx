'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { MegaMenu } from './mega-menu'

interface DesktopScrolledNavProps {
  className?: string
}

export function DesktopScrolledNav({ className }: DesktopScrolledNavProps) {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)

  return (
    <>
    <nav
      className={cn(
        "hidden lg:block fixed top-0 left-0 right-0 h-[80px] lg:h-[90px] xl:h-[105px] 2xl:h-[121.6px] shadow-lg z-50 bg-[#242424] transition-all duration-300",
        className
      )}
    >
      <div className="h-full flex items-center justify-between w-full px-[30px] lg:px-[40px] xl:px-[45px] 2xl:px-[50px] relative">
        {/* Left side menu items */}
        <div className="flex items-center gap-x-[12px] lg:gap-x-[16px] xl:gap-x-[20px] 2xl:gap-x-[25px] 3xl:gap-x-[30px]">
          <button 
            onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
            className="font-thunder text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-[27px] leading-[0.92] tracking-[0.03em] text-white hover:opacity-80 transition-opacity flex items-center gap-x-[3px] lg:gap-x-[4px] xl:gap-x-[5px] 2xl:gap-x-[6px] 3xl:gap-x-[7px]"
          >
            Plan Your Journey
            <svg className="w-[8px] h-[4px] lg:w-[9px] lg:h-[4.5px] xl:w-[10px] xl:h-[5px] 2xl:w-[11px] 2xl:h-[6px] 3xl:w-[13.01px] 3xl:h-[7.07px]" viewBox="0 0 13 7" fill="none">
              <path d="M1 1L6.5 6L12 1" stroke="white" strokeWidth="1.5"/>
            </svg>
          </button>
          <button 
            onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
            className="font-thunder text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-[27px] leading-[0.92] tracking-[0.03em] text-white hover:opacity-80 transition-opacity flex items-center gap-x-[3px] lg:gap-x-[4px] xl:gap-x-[5px] 2xl:gap-x-[6px] 3xl:gap-x-[7px]"
          >
            Trending Destinations
            <svg className="w-[8px] h-[4px] lg:w-[9px] lg:h-[4.5px] xl:w-[10px] xl:h-[5px] 2xl:w-[11px] 2xl:h-[6px] 3xl:w-[13.01px] 3xl:h-[7.07px]" viewBox="0 0 13 7" fill="none">
              <path d="M1 1L6.5 6L12 1" stroke="white" strokeWidth="1.5"/>
            </svg>
          </button>
          <button 
            onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
            className="font-thunder text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-[27px] leading-[0.92] tracking-[0.03em] text-white hover:opacity-80 transition-opacity flex items-center gap-x-[3px] lg:gap-x-[4px] xl:gap-x-[5px] 2xl:gap-x-[6px] 3xl:gap-x-[7px]"
          >
            Deals
            <svg className="w-[8px] h-[4px] lg:w-[9px] lg:h-[4.5px] xl:w-[10px] xl:h-[5px] 2xl:w-[11px] 2xl:h-[6px] 3xl:w-[13.01px] 3xl:h-[7.07px]" viewBox="0 0 13 7" fill="none">
              <path d="M1 1L6.5 6L12 1" stroke="white" strokeWidth="1.5"/>
            </svg>
          </button>
          <button 
            onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
            className="font-thunder text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-[27px] leading-[0.92] tracking-[0.03em] text-white hover:opacity-80 transition-opacity flex items-center gap-x-[3px] lg:gap-x-[4px] xl:gap-x-[5px] 2xl:gap-x-[6px] 3xl:gap-x-[7px]"
          >
            About Us
            <svg className="w-[8px] h-[4px] lg:w-[9px] lg:h-[4.5px] xl:w-[10px] xl:h-[5px] 2xl:w-[11px] 2xl:h-[6px] 3xl:w-[13.01px] 3xl:h-[7.07px]" viewBox="0 0 13 7" fill="none">
              <path d="M1 1L6.5 6L12 1" stroke="white" strokeWidth="1.5"/>
            </svg>
          </button>
          <button 
            onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
            className="font-thunder text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-[27px] leading-[0.92] tracking-[0.03em] text-white hover:opacity-80 transition-opacity flex items-center gap-x-[3px] lg:gap-x-[4px] xl:gap-x-[5px] 2xl:gap-x-[6px] 3xl:gap-x-[7px]"
          >
            Our Brands
            <svg className="w-[8px] h-[4px] lg:w-[9px] lg:h-[4.5px] xl:w-[10px] xl:h-[5px] 2xl:w-[11px] 2xl:h-[6px] 3xl:w-[13.01px] 3xl:h-[7.07px]" viewBox="0 0 13 7" fill="none">
              <path d="M1 1L6.5 6L12 1" stroke="white" strokeWidth="1.5"/>
            </svg>
          </button>
        </div>
        
        {/* Center Logo */}
        <Link 
          href="/" 
          className="absolute left-1/2 transform -translate-x-1/2"
        >
          <div className="relative w-[80px] h-[56px] lg:w-[90px] lg:h-[63px] xl:w-[100px] xl:h-[70px] 2xl:w-[120px] 2xl:h-[84px] 3xl:w-[144.95px] 3xl:h-[102px]">
            <Image
              src="/assets/eulogo.png"
              alt="EU Holidays"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>
        
        {/* Right side links */}
        <div className="flex items-center gap-x-[15px] lg:gap-x-[20px] xl:gap-x-[25px] 2xl:gap-x-[35px] 3xl:gap-x-[41px]">
          <Link 
            href="/travel-essentials" 
            className="font-thunder text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-[27px] leading-[0.92] tracking-[0.03em] text-white hover:opacity-80 transition-opacity"
          >
            Travel Essentials
          </Link>
          <Link 
            href="/travel-club" 
            className="font-thunder text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-[27px] leading-[0.92] tracking-[0.03em] text-white hover:opacity-80 transition-opacity"
          >
            Travel Club
          </Link>
        </div>
      </div>
    </nav>
    
    {/* Mega Menu */}
    <MegaMenu 
      isOpen={isMegaMenuOpen} 
      onClose={() => setIsMegaMenuOpen(false)}
    />
    </>
  )
}