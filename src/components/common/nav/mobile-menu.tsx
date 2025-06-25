'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  viewAsComponent?: boolean
}

export function MobileMenu({ isOpen, onClose, viewAsComponent = false }: MobileMenuProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(['plan-journey', 'europe'])

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
  }

  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen && !viewAsComponent) return null

  return (
    <>
      {/* Backdrop */}
      {!viewAsComponent && (
        <div 
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Mobile Menu */}
      <div className={cn(
        viewAsComponent ? "w-[393px] h-[600px] bg-[#242424] transform transition-transform duration-300 overflow-y-auto relative" : "fixed inset-0 w-full bg-[#242424] z-50 transform transition-transform duration-300 lg:hidden overflow-y-auto",
        !viewAsComponent && (isOpen ? "translate-x-0" : "translate-x-full")
      )}>
        {/* Close Button */}
        <div className="absolute right-[19px] top-[58px] w-[31px] h-[27px]">
          <button
            onClick={viewAsComponent ? undefined : onClose}
            className="w-full h-full flex items-center justify-center"
          >
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
              <path 
                d="M8.75 7.75L15.5 13.5M8.75 6.75L15.5 1M8.75 6.75L1 13.5M8.75 7.75L1 1" 
                stroke="white" 
                strokeWidth="1.6"
              />
            </svg>
          </button>
        </div>

        {/* Menu Content Container */}
        <div className="absolute left-0 top-[107px] w-full flex flex-col gap-[22px]">
          {/* Plan Your Journey Section */}
          <div className="w-full">
            {/* Plan Your Journey Header */}
            <div className="relative w-full h-[51px]">
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#5C5C5C] opacity-30" />
              <button
                onClick={() => toggleSection('plan-journey')}
                className="w-full h-full relative"
              >
                <span className="absolute left-[24.81px] top-[21px] w-[119px] h-[30px] font-onest text-[14px] leading-[30px] text-white">
                  Plan Your Journey
                </span>
                <svg 
                  className={cn(
                    "absolute left-[333.46px] top-[34px] w-[9.92px] h-[3.59px] transition-transform",
                    expandedSections.includes('plan-journey') && "rotate-180"
                  )}
                  viewBox="0 0 10 4" 
                  fill="none"
                >
                  <path d="M1 1L5 3L9 1" stroke="white" strokeWidth="2"/>
                </svg>
              </button>
            </div>

            {/* Expanded Plan Your Journey Content */}
            {expandedSections.includes('plan-journey') && (
              <div className="w-full flex flex-col gap-[11px]">
                {/* Africa */}
                <div className="relative w-full h-[52px]">
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#5C5C5C] opacity-30" />
                  <button className="w-full h-full relative">
                    <span className="absolute left-[44.66px] top-[11px] w-[44.34px] h-[30px] font-onest font-thin text-[14px] leading-[30px] text-white">
                      Africa
                    </span>
                    <svg className="absolute left-[333.46px] top-[24px] w-[9.92px] h-[3.59px]" viewBox="0 0 10 4" fill="none">
                      <path d="M1 1L5 3L9 1" stroke="white" strokeWidth="2"/>
                    </svg>
                  </button>
                </div>

                {/* Antarctica */}
                <div className="relative w-full h-[41px]">
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#5C5C5C] opacity-30" />
                  <button className="w-full h-full relative">
                    <span className="absolute left-[44.66px] top-[11px] w-[59px] h-[30px] font-onest font-thin text-[14px] leading-[30px] text-white">
                      Antarctica
                    </span>
                    <svg className="absolute left-[333.46px] top-[13px] w-[9.92px] h-[3.59px]" viewBox="0 0 10 4" fill="none">
                      <path d="M1 1L5 3L9 1" stroke="white" strokeWidth="2"/>
                    </svg>
                  </button>
                </div>

                {/* Asia */}
                <div className="relative w-full h-[41px]">
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#5C5C5C] opacity-30" />
                  <button className="w-full h-full relative">
                    <span className="absolute left-[44.66px] top-[11px] w-[27px] h-[30px] font-onest font-thin text-[14px] leading-[30px] text-white">
                      Asia
                    </span>
                    <svg className="absolute left-[333.46px] top-[13px] w-[9.92px] h-[3.59px]" viewBox="0 0 10 4" fill="none">
                      <path d="M1 1L5 3L9 1" stroke="white" strokeWidth="2"/>
                    </svg>
                  </button>
                </div>

                {/* China */}
                <div className="relative w-full h-[41px]">
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#5C5C5C] opacity-30" />
                  <button className="w-full h-full relative">
                    <span className="absolute left-[44.66px] top-[11px] w-[37px] h-[30px] font-onest font-thin text-[14px] leading-[30px] text-white">
                      China
                    </span>
                    <svg className="absolute left-[333.46px] top-[13px] w-[9.92px] h-[3.59px]" viewBox="0 0 10 4" fill="none">
                      <path d="M1 1L5 3L9 1" stroke="white" strokeWidth="2"/>
                    </svg>
                  </button>
                </div>

                {/* Europe Section */}
                <div className="relative w-full">
                  {/* Europe Header */}
                  <div className="relative w-full h-[41px]">
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#5C5C5C] opacity-30" />
                    <button
                      onClick={() => toggleSection('europe')}
                      className="w-full h-full relative"
                    >
                      <span className="absolute left-[44.66px] top-[11px] w-[47px] h-[30px] font-onest font-thin text-[14px] leading-[30px] text-white">
                        Europe
                      </span>
                      <svg 
                        className={cn(
                          "absolute left-[333.46px] top-[13px] w-[9.92px] h-[3.59px] transition-transform",
                          expandedSections.includes('europe') && "rotate-180"
                        )}
                        viewBox="0 0 10 4" 
                        fill="none"
                      >
                        <path d="M1 1L5 3L9 1" stroke="white" strokeWidth="2"/>
                      </svg>
                    </button>
                  </div>

                  {/* Europe Sub-items */}
                  {expandedSections.includes('europe') && (
                    <>
                      {/* Central Europe */}
                      <div className="relative w-full h-[41px]">
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#5C5C5C] opacity-30" />
                        <Link href="/tours/europe/central-europe" className="block w-full h-full relative">
                          <span className="absolute left-[58px] top-[11px] w-[97px] h-[30px] font-onest font-thin text-[14px] leading-[30px] text-white">
                            Central Europe
                          </span>
                        </Link>
                      </div>

                      {/* France */}
                      <div className="relative w-full h-[41px]">
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#5C5C5C] opacity-30" />
                        <Link href="/explore/france" className="block w-full h-full relative">
                          <span className="absolute left-[82px] top-[11px] w-[46px] h-[30px] font-onest font-thin text-[14px] leading-[30px] text-white">
                            France
                          </span>
                        </Link>
                      </div>

                      {/* Italy */}
                      <div className="relative w-full h-[41px]">
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#5C5C5C] opacity-30" />
                        <Link href="/explore/italy" className="block w-full h-full relative">
                          <span className="absolute left-[82px] top-[11px] w-[28px] h-[30px] font-onest font-thin text-[14px] leading-[30px] text-white">
                            Italy
                          </span>
                        </Link>
                      </div>

                      {/* Liechtenstein */}
                      <div className="relative w-full h-[41px]">
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#5C5C5C] opacity-30" />
                        <Link href="/tours/europe/liechtenstein" className="block w-full h-full relative">
                          <span className="absolute left-[82px] top-[11px] w-[88px] h-[30px] font-onest font-thin text-[14px] leading-[30px] text-white">
                            Liechtenstein
                          </span>
                        </Link>
                      </div>

                      {/* Netherlands */}
                      <div className="relative w-full h-[41px]">
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#5C5C5C] opacity-30" />
                        <Link href="/explore/netherlands" className="block w-full h-full relative">
                          <span className="absolute left-[82px] top-[11px] w-[80px] h-[30px] font-onest font-thin text-[14px] leading-[30px] text-white">
                            Netherlands
                          </span>
                        </Link>
                      </div>

                      {/* Switzerland */}
                      <div className="relative w-full h-[41px]">
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#5C5C5C] opacity-30" />
                        <Link href="/explore/switzerland" className="block w-full h-full relative">
                          <span className="absolute left-[82px] top-[11px] w-[76px] h-[30px] font-onest font-thin text-[14px] leading-[30px] text-white">
                            Switzerland
                          </span>
                        </Link>
                      </div>

                      {/* Vatican City */}
                      <div className="relative w-full h-[41px]">
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#5C5C5C] opacity-30" />
                        <Link href="/tours/europe/vatican-city" className="block w-full h-full relative">
                          <span className="absolute left-[82px] top-[11px] w-[78px] h-[30px] font-onest font-thin text-[14px] leading-[30px] text-white">
                            Vatican City
                          </span>
                        </Link>
                      </div>

                      {/* Arctic */}
                      <div className="relative w-full h-[41px]">
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#5C5C5C] opacity-30" />
                        <Link href="/tours/europe/arctic" className="block w-full h-full relative">
                          <span className="absolute left-[58px] top-[11px] w-[37px] h-[30px] font-onest font-thin text-[14px] leading-[30px] text-white">
                            Arctic
                          </span>
                        </Link>
                      </div>

                      {/* Eastern Europe */}
                      <div className="relative w-full h-[41px]">
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#5C5C5C] opacity-30" />
                        <Link href="/tours/europe/eastern-europe" className="block w-full h-full relative">
                          <span className="absolute left-[58px] top-[11px] w-[101px] h-[30px] font-onest font-thin text-[14px] leading-[30px] text-white">
                            Eastern Europe
                          </span>
                        </Link>
                      </div>

                      {/* Northern Europe */}
                      <div className="relative w-full h-[41px]">
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#5C5C5C] opacity-30" />
                        <Link href="/tours/europe/northern-europe" className="block w-full h-full relative">
                          <span className="absolute left-[58px] top-[11px] w-[110px] h-[30px] font-onest font-thin text-[14px] leading-[30px] text-white">
                            Northern Europe
                          </span>
                        </Link>
                      </div>

                      {/* Southern Europe */}
                      <div className="relative w-full h-[41px]">
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#5C5C5C] opacity-30" />
                        <Link href="/tours/europe/southern-europe" className="block w-full h-full relative">
                          <span className="absolute left-[58px] top-[11px] w-[111px] h-[30px] font-onest font-thin text-[14px] leading-[30px] text-white">
                            Southern Europe
                          </span>
                        </Link>
                      </div>

                      {/* Exotic */}
                      <div className="relative w-full h-[41px]">
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#5C5C5C] opacity-30" />
                        <Link href="/tours/europe/exotic" className="block w-full h-full relative">
                          <span className="absolute left-[58px] top-[11px] w-[39px] h-[30px] font-onest font-thin text-[14px] leading-[30px] text-white">
                            Exotic
                          </span>
                        </Link>
                      </div>
                    </>
                  )}
                </div>

                {/* Middle East */}
                <div className="relative w-full h-[41px]">
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#5C5C5C] opacity-30" />
                  <button className="w-full h-full relative">
                    <span className="absolute left-[44.66px] top-[11px] w-[75px] h-[30px] font-onest font-thin text-[14px] leading-[30px] text-white">
                      Middle East
                    </span>
                    <svg className="absolute left-[333.46px] top-[13px] w-[9.92px] h-[3.59px]" viewBox="0 0 10 4" fill="none">
                      <path d="M1 1L5 3L9 1" stroke="white" strokeWidth="2"/>
                    </svg>
                  </button>
                </div>

                {/* North & South America */}
                <div className="relative w-full h-[41px]">
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#5C5C5C] opacity-30" />
                  <button className="w-full h-full relative">
                    <span className="absolute left-[44.66px] top-[11px] w-[149px] h-[30px] font-onest font-thin text-[14px] leading-[30px] text-white">
                      North & South America
                    </span>
                    <svg className="absolute left-[333.46px] top-[13px] w-[9.92px] h-[3.59px]" viewBox="0 0 10 4" fill="none">
                      <path d="M1 1L5 3L9 1" stroke="rgba(255,255,255,0.2)" strokeWidth="2"/>
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Trending Destinations */}
          <div className="relative w-full h-[51px]">
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#5C5C5C] opacity-30" />
            <button 
              onClick={() => toggleSection('trending')}
              className="w-full h-full relative"
            >
              <span className="absolute left-[24.81px] top-[11px] w-[143px] h-[30px] font-onest text-[14px] leading-[30px] text-white">
                Trending Destinations
              </span>
              <svg 
                className={cn(
                  "absolute left-[333.46px] top-[24px] w-[9.92px] h-[3.59px] transition-transform",
                  expandedSections.includes('trending') && "rotate-180"
                )}
                viewBox="0 0 10 4" 
                fill="none"
              >
                <path d="M1 1L5 3L9 1" stroke="white" strokeWidth="2"/>
              </svg>
            </button>
          </div>

          {/* Tours */}
          <div className="relative w-full h-[51px]">
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#5C5C5C] opacity-30" />
            <Link href="/tours" className="block w-full h-full relative">
              <span className="absolute left-[24.81px] top-[11px] w-[40px] h-[30px] font-onest text-[14px] leading-[30px] text-white">
                Tours
              </span>
            </Link>
          </div>

          {/* Deals */}
          <div className="relative w-full h-[51px]">
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#5C5C5C] opacity-30" />
            <button 
              onClick={() => toggleSection('deals')}
              className="w-full h-full relative"
            >
              <span className="absolute left-[24.81px] top-[11px] w-[41.68px] h-[30px] font-onest text-[14px] leading-[30px] text-white">
                Deals
              </span>
              <svg 
                className={cn(
                  "absolute left-[333.46px] top-[24px] w-[9.92px] h-[3.59px] transition-transform",
                  expandedSections.includes('deals') && "rotate-180"
                )}
                viewBox="0 0 10 4" 
                fill="none"
              >
                <path d="M1 1L5 3L9 1" stroke="white" strokeWidth="2"/>
              </svg>
            </button>
          </div>

          {/* About Us */}
          <div className="relative w-full h-[51px]">
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#5C5C5C] opacity-30" />
            <Link href="/about-us" className="block w-full h-full relative">
              <span className="absolute left-[24.81px] top-[11px] w-[69.47px] h-[30px] font-onest text-[14px] leading-[30px] text-white">
                About Us
              </span>
            </Link>
          </div>

          {/* Our Brands */}
          <div className="relative w-full h-[51px]">
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#5C5C5C] opacity-30" />
            <Link href="/brands" className="block w-full h-full relative">
              <span className="absolute left-[24.81px] top-[11px] w-[84.36px] h-[30px] font-onest text-[14px] leading-[30px] text-white">
                Our Brands
              </span>
            </Link>
          </div>

          {/* Travel Essentials */}
          <div className="relative w-full h-[51px]">
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#5C5C5C] opacity-30" />
            <Link href="/travel-essentials" className="block w-full h-full relative">
              <span className="absolute left-[24.81px] top-[11px] w-[109px] h-[30px] font-onest text-[14px] leading-[30px] text-white">
                Travel Essentials
              </span>
            </Link>
          </div>

          {/* EU Elites */}
          <div className="relative w-full h-[51px]">
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#5C5C5C] opacity-30" />
            <Link href="/eu-elites" className="block w-full h-full relative">
              <span className="absolute left-[24.81px] top-[11px] w-[66.49px] h-[30px] font-onest text-[14px] leading-[30px] text-white">
                EU Elites
              </span>
            </Link>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="absolute left-[151px] top-[1618px] flex items-center gap-[15.55px]">
          <Link href="https://instagram.com/euholidays" target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 1.8C12.67 1.8 13 1.81 14.04 1.86C15.08 1.91 15.84 2.07 16.52 2.31C17.22 2.56 17.82 2.9 18.42 3.48C19.01 4.08 19.35 4.68 19.6 5.38C19.84 6.06 20 6.82 20.05 7.86C20.1 8.9 20.11 9.23 20.11 11.9V12.1C20.11 14.77 20.1 15.1 20.05 16.14C20 17.18 19.84 17.94 19.6 18.62C19.35 19.32 19.01 19.92 18.42 20.52C17.82 21.11 17.22 21.45 16.52 21.7C15.84 21.94 15.08 22.1 14.04 22.15C13 22.2 12.67 22.21 10 22.21C7.33 22.21 7 22.2 5.96 22.15C4.92 22.1 4.16 21.94 3.48 21.7C2.78 21.45 2.18 21.11 1.58 20.52C0.99 19.92 0.65 19.32 0.4 18.62C0.16 17.94 0 17.18 -0.05 16.14C-0.1 15.1 -0.11 14.77 -0.11 12.1V11.9C-0.11 9.23 -0.1 8.9 -0.05 7.86C0 6.82 0.16 6.06 0.4 5.38C0.65 4.68 0.99 4.08 1.58 3.48C2.18 2.89 2.78 2.55 3.48 2.3C4.16 2.06 4.92 1.9 5.96 1.85C7 1.81 7.33 1.8 10 1.8ZM10 0C7.28 0 6.94 0.01 5.88 0.06C4.81 0.11 3.99 0.28 3.27 0.53C2.53 0.78 1.89 1.12 1.25 1.76C0.61 2.4 0.27 3.04 0.02 3.78C-0.23 4.5 -0.4 5.32 -0.45 6.39C-0.5 7.45 -0.51 7.79 -0.51 10.51C-0.51 13.23 -0.5 13.57 -0.45 14.63C-0.4 15.7 -0.23 16.52 0.02 17.24C0.27 17.98 0.61 18.62 1.25 19.26C1.89 19.9 2.53 20.24 3.27 20.49C3.99 20.74 4.81 20.91 5.88 20.96C6.94 21.01 7.28 21.02 10 21.02C12.72 21.02 13.06 21.01 14.12 20.96C15.19 20.91 16.01 20.74 16.73 20.49C17.47 20.24 18.11 19.9 18.75 19.26C19.39 18.62 19.73 17.98 19.98 17.24C20.23 16.52 20.4 15.7 20.45 14.63C20.5 13.57 20.51 13.23 20.51 10.51C20.51 7.79 20.5 7.45 20.45 6.39C20.4 5.32 20.23 4.5 19.98 3.78C19.73 3.04 19.39 2.4 18.75 1.76C18.11 1.12 17.47 0.78 16.73 0.53C16.01 0.28 15.19 0.11 14.12 0.06C13.06 0.01 12.72 0 10 0ZM10 5.14C7.14 5.14 4.82 7.46 4.82 10.32C4.82 13.18 7.14 15.5 10 15.5C12.86 15.5 15.18 13.18 15.18 10.32C15.18 7.46 12.86 5.14 10 5.14ZM10 13.7C8.13 13.7 6.62 12.19 6.62 10.32C6.62 8.45 8.13 6.94 10 6.94C11.87 6.94 13.38 8.45 13.38 10.32C13.38 12.19 11.87 13.7 10 13.7ZM16.72 4.92C16.72 5.63 16.15 6.2 15.44 6.2C14.73 6.2 14.16 5.63 14.16 4.92C14.16 4.21 14.73 3.64 15.44 3.64C16.15 3.64 16.72 4.21 16.72 4.92Z" fill="white"/>
            </svg>
          </Link>
          
          <Link href="https://facebook.com/euholidays" target="_blank" rel="noopener noreferrer">
            <svg width="11" height="20" viewBox="0 0 11 20" fill="none">
              <path d="M6.88 20V10.88H9.86L10.27 7.32H6.88V5.05C6.88 4.02 7.14 3.32 8.48 3.32H10.37V0.14C10.08 0.097 9.06 0 7.88 0C5.41 0 3.72 1.49 3.72 4.23V7.32H0.73V10.88H3.72V20H6.88Z" fill="white"/>
            </svg>
          </Link>
          
          <Link href="https://youtube.com/euholidays" target="_blank" rel="noopener noreferrer">
            <svg width="29" height="20" viewBox="0 0 29 20" fill="none">
              <path d="M27.79 3.13C27.46 1.92 26.49 0.96 25.28 0.63C23.09 0 14.27 0 14.27 0C14.27 0 5.45 0 3.26 0.63C2.05 0.96 1.08 1.92 0.75 3.13C0.12 5.32 0.12 10 0.12 10C0.12 10 0.12 14.68 0.75 16.87C1.08 18.08 2.05 19.04 3.26 19.37C5.45 20 14.27 20 14.27 20C14.27 20 23.09 20 25.28 19.37C26.49 19.04 27.46 18.08 27.79 16.87C28.42 14.68 28.42 10 28.42 10C28.42 10 28.42 5.32 27.79 3.13ZM11.39 14.29V5.71L18.73 10L11.39 14.29Z" fill="white"/>
            </svg>
          </Link>
        </div>
      </div>
    </>
  )
}