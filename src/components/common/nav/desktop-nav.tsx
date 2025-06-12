'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { MegaMenu } from './mega-menu'

interface DesktopNavProps {
  className?: string
  variant?: 'default' | 'overlay'
}

export function DesktopNav({ className, variant = 'default' }: DesktopNavProps) {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)

  return (
    <>
      {/* Navbar Container */}
      <div className={cn(
        "hidden lg:block w-full relative",
        variant === 'overlay' ? "absolute left-0 right-0 top-0 z-50" : "",
        isMegaMenuOpen && variant === 'overlay' && "bg-[#242424] transition-colors duration-300"
      )}>
        {/* Regular Navbar */}
        <nav
          className={cn(
            "w-full transition-all duration-300",
            variant === 'overlay' ? 
              "py-2 lg:py-[10px]" : 
              "h-[121.6px] bg-[#242424]",
            className
          )}
        >
          <div className={cn(
            "flex items-center relative",
            variant === 'overlay' ? "h-20 lg:h-[102px]" : "h-full"
          )}>
          {/* Logo */}
          <Link 
            href="/" 
            className={cn(
              "flex-shrink-0 absolute left-1/2 transform -translate-x-1/2",
              variant === 'overlay' ? "top-0" : "top-1/2 -translate-y-1/2"
            )}
          >
            <div className={cn(
              "relative transition-all duration-300",
              "w-[80px] h-[56px] lg:w-[90px] lg:h-[63px] xl:w-[100px] xl:h-[70px] 2xl:w-[120px] 2xl:h-[84px] 3xl:w-[144.95px] 3xl:h-[102px]"
            )}>
              <Image
                src="/assets/eulogo.png"
                alt="EU Holidays"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Menu items */}
          {variant === 'overlay' ? (
            <div className="absolute inset-0 flex items-center justify-between w-full px-6 lg:px-8 xl:px-12 2xl:px-[50px]">
              {/* Left side - Menu with hamburger */}
              <button 
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                className="flex items-center group"
              >
                <span className="font-thunder text-2xl lg:text-3xl leading-tight tracking-[0.03em] text-white group-hover:opacity-80 transition-opacity">
                  Menu
                </span>
                <span className="ml-2 lg:ml-3 inline-flex w-4 lg:w-5 h-2.5 lg:h-3 flex-col justify-between">
                  <span className="block w-full h-0.5 bg-white transition-all group-hover:opacity-80"></span>
                  <span className="block w-full h-0.5 bg-white transition-all group-hover:opacity-80"></span>
                  <span className="block w-full h-0.5 bg-white transition-all group-hover:opacity-80"></span>
                </span>
              </button>
              
              {/* Right side - Tours, Travel Essentials and EU Elites */}
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <Link 
                  href="/tours" 
                  className="font-thunder text-2xl lg:text-3xl leading-tight tracking-[0.03em] text-white hover:opacity-80 transition-opacity"
                >
                  Tours
                </Link>
                <Link 
                  href="/travel-essentials" 
                  className="font-thunder text-2xl lg:text-3xl leading-tight tracking-[0.03em] text-white hover:opacity-80 transition-opacity"
                >
                  Travel Essentials
                </Link>
                <Link 
                  href="/eu-elites" 
                  className="font-thunder text-2xl lg:text-3xl leading-tight tracking-[0.03em] text-white hover:opacity-80 transition-opacity"
                >
                  Travel Club
                </Link>
              </div>
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-between w-full px-6 lg:px-8 xl:px-12 2xl:px-[50px]">
              {/* Left side - Menu with hamburger */}
              <button 
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
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
                  href="/travel-essentials" 
                  className="font-thunder text-[27px] leading-[0.92em] tracking-[0.03em] text-white hover:opacity-80 transition-opacity"
                >
                  Travel Essentials
                </Link>
                <Link 
                  href="/travel-club" 
                  className="font-thunder text-[27px] leading-[0.92em] tracking-[0.03em] text-white hover:opacity-80 transition-opacity"
                >
                  Travel Club
                </Link>
              </div>
            </div>
          )}
          </div>
        </nav>
        
        {/* Mega Menu */}
        <MegaMenu 
          isOpen={isMegaMenuOpen} 
          onClose={() => setIsMegaMenuOpen(false)}
          variant={variant}
        />
      </div>

      {/* Spacer when not overlay */}
      {variant !== 'overlay' && <div className="hidden lg:block h-[121.6px]" />}
    </>
  )
}