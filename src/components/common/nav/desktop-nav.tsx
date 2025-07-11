'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { MegaMenu } from './mega-menu'

interface DesktopNavProps {
  className?: string
  variant?: 'default' | 'overlay'
  viewAsComponent?: boolean
}

export function DesktopNav({ className, variant = 'default', viewAsComponent = false }: DesktopNavProps) {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)

  return (
    <>
      {/* Navbar Container */}
      <div className={cn(
        viewAsComponent ? "w-full relative" : "hidden lg:block w-full relative",
        variant === 'overlay' ? (viewAsComponent ? "" : "absolute left-0 right-0 top-0 z-50") : ""
      )}>
        {/* Regular Navbar */}
        <nav
          className={cn(
            "w-full transition-all duration-300",
            viewAsComponent ? "h-[121.6px]" : "h-[121.6px]",
            variant === 'overlay' ? 
              (viewAsComponent ? "bg-transparent" : (isMegaMenuOpen ? "bg-[#242424]" : "bg-transparent")) : 
              "bg-[#242424]",
            className
          )}
        >
          <div className="flex items-center relative h-full">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex-shrink-0 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className={cn(
              "relative transition-all duration-300",
              "w-[80px] h-[56px] lg:w-[90px] lg:h-[63px] xl:w-[100px] xl:h-[70px] 2xl:w-[120px] 2xl:h-[84px] 3xl:w-[144.95px] 3xl:h-[102px]"
            )}>
              <Image
                src="/assets/logos/eu-logo.png"
                alt="EU Holidays"
                fill
                sizes="(max-width: 1024px) 80px, (max-width: 1280px) 90px, (max-width: 1536px) 100px, (max-width: 1920px) 120px, 145px"
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Menu items */}
          <div className="absolute inset-0 flex items-center justify-between w-full px-[2.6%]" style={{ paddingBottom: variant === 'overlay' && !viewAsComponent ? '20px' : '0' }}>
            {/* Left side - Menu with hamburger */}
            <button 
              onClick={viewAsComponent ? () => {} : () => setIsMegaMenuOpen(!isMegaMenuOpen)}
              className="flex items-center group"
            >
              <span className="font-thunder text-[27px] leading-[0.92em] tracking-[0.03em] text-white group-hover:opacity-80 transition-opacity">
                Menu
              </span>
              <span className="ml-[10px] inline-flex w-[17.12px] h-[9.18px] flex-col justify-between">
                <span className="block w-full h-[1.7px] bg-white transition-all group-hover:opacity-80"></span>
                <span className="block w-full h-[1.7px] bg-white transition-all group-hover:opacity-80"></span>
                <span className="block w-full h-[1.7px] bg-white transition-all group-hover:opacity-80"></span>
              </span>
            </button>
            
            {/* Right side - Travel Essentials and Travel Club */}
            <div className="flex items-center gap-[41px]">
              <Link 
                href={viewAsComponent ? "#" : "/travel-essentials"} 
                className="font-thunder text-[27px] leading-[0.92em] tracking-[0.03em] text-white hover:opacity-80 transition-opacity"
                onClick={viewAsComponent ? (e) => e.preventDefault() : undefined}
              >
                Travel Essentials
              </Link>
              <Link 
                href={viewAsComponent ? "#" : "/travel-club"} 
                className="font-thunder text-[27px] leading-[0.92em] tracking-[0.03em] text-white hover:opacity-80 transition-opacity"
                onClick={viewAsComponent ? (e) => e.preventDefault() : undefined}
              >
                Travel Club
              </Link>
            </div>
          </div>
          </div>
        </nav>
        
        {/* Mega Menu */}
        {!viewAsComponent && (
          <MegaMenu 
            isOpen={isMegaMenuOpen} 
            onClose={() => setIsMegaMenuOpen(false)}
            variant={variant}
          />
        )}
      </div>

    </>
  )
}