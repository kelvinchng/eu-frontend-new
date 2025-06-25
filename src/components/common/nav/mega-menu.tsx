'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface MegaMenuProps {
  isOpen: boolean
  onClose: () => void
  variant?: 'default' | 'overlay'
  viewAsComponent?: boolean
  initialSelectedItem?: string | null
  skipPrimaryMenu?: boolean
}

// First level menu items
const primaryMenuItems = [
  { id: 'plan-journey', label: 'Plan Your Journey', hasArrow: true },
  { id: 'trending', label: 'Trending Destinations', hasArrow: true },
  { id: 'deals', label: 'Deals', hasArrow: true },
  { id: 'about', label: 'About Us', hasArrow: true },
  { id: 'brands', label: 'Our Brands', hasArrow: true },
]

// Region data for extended menu
const regions = [
  { id: 'africa', label: 'Africa', image: '/assets/region-africa.jpg' },
  { id: 'antarctica', label: 'Antarctica', image: '/assets/region-antarctica.jpg' },
  { id: 'asia', label: 'Asia', image: '/assets/region-asia.jpg' },
  { id: 'china', label: 'China', image: '/assets/region-china.jpg' },
  { id: 'europe', label: 'Europe', image: '/assets/region-europe.jpg' },
  { id: 'middle-east', label: 'Middle East', image: '/assets/region-middle-east.jpg' },
  { id: 'americas', label: 'North & South America', image: '/assets/region-americas.jpg' },
]

// European countries
const europeanCountries = [
  'Austria', 'Belgium', 'Bosnia & Herzegovina', 'Croatia', 'Czech Republic',
  'Denmark', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Iceland',
  'Ireland', 'Italy', 'Liechtenstein', 'Malta', 'Montenegro', 'Netherlands',
  'Norway', 'Poland', 'Portugal', 'Slovakia', 'Slovenia', 'Spain', 'Sweden',
  'Switzerland', 'Turkiye', 'Vatican City'
]

// Tour types
const tourTypes = ['Central Europe', 'Arctic', 'Eastern Europe', 'Northern Europe', 'Southern Europe', 'Exotic']

export function MegaMenu({ isOpen, onClose, variant = 'default', viewAsComponent = false, initialSelectedItem, skipPrimaryMenu = false }: MegaMenuProps) {
  const [selectedMenuItem, setSelectedMenuItem] = useState<string | null>(initialSelectedItem || null)
  const [selectedRegion, setSelectedRegion] = useState<string>('europe')

  React.useEffect(() => {
    if (!isOpen) {
      // Reset state when menu closes
      setSelectedMenuItem(null)
      setSelectedRegion('europe')
    } else if (initialSelectedItem) {
      // Set the initial selected item when menu opens
      setSelectedMenuItem(initialSelectedItem)
    }
  }, [isOpen, initialSelectedItem])

  if (!isOpen && !viewAsComponent) return null

  const handleMenuItemClick = (itemId: string) => {
    setSelectedMenuItem(itemId)
  }

  const handleRegionSelect = (regionId: string) => {
    setSelectedRegion(regionId)
  }
  
  const handleBackToPrimary = () => {
    setSelectedMenuItem(null)
  }

  return (
    <>
      {/* Backdrop */}
      {!viewAsComponent && (
        <div 
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => {
            setSelectedMenuItem(null)
            onClose()
          }}
        />
      )}
      
      {/* Primary Dropdown Menu - Only visible when not skipping */}
      {!skipPrimaryMenu && (
      <div className={cn(
        "w-[329px] h-[275.5px] bg-[#242424] rounded-lg",
        viewAsComponent ? "relative" : "absolute left-[50px] top-[calc(100%+10px)] z-50"
      )} 
             style={{ padding: '41px 42px' }}>
          <div className="relative w-[218.62px] h-[190.23px]">
            {/* Plan Your Journey - First item */}
            <button
              onClick={viewAsComponent ? () => {} : () => handleMenuItemClick('plan-journey')}
              className="absolute left-0 top-0 w-[185.62px] h-[22.96px] flex items-center justify-between group"
            >
              <span className="font-thunder text-[30px] leading-[0.92] text-white">
                Plan Your Journey
              </span>
              <svg 
                className="absolute w-[8.62px] h-[10.66px]" 
                style={{ 
                  right: '8.62px',
                  top: '5.74px'
                }}
                viewBox="0 0 9 11" 
                fill="none"
              >
                <path 
                  d="M0.79 0.39L8.03 5.39L0.79 10.39" 
                  stroke="white" 
                  strokeWidth="1.11"
                />
              </svg>
            </button>
            
            {/* Trending Destinations */}
            <button
              onClick={viewAsComponent ? () => {} : () => handleMenuItemClick('trending')}
              className="absolute left-0 top-[41.82px] w-[218.62px] h-[22.96px] flex items-center justify-between group"
            >
              <span className="font-thunder text-[30px] leading-[0.92] text-white">
                Trending Destinations
              </span>
              <svg 
                className="absolute w-[8.62px] h-[10.66px]" 
                style={{ 
                  right: '0',
                  top: '5.74px'
                }}
                viewBox="0 0 9 11" 
                fill="none"
              >
                <path 
                  d="M0.79 0.39L8.03 5.39L0.79 10.39" 
                  stroke="white" 
                  strokeWidth="1.11"
                />
              </svg>
            </button>
            
            {/* Deals */}
            <button
              onClick={viewAsComponent ? () => {} : () => handleMenuItemClick('deals')}
              className="absolute left-0 top-[83.63px] w-[73.62px] h-[22.96px] flex items-center justify-between group"
            >
              <span className="font-thunder text-[30px] leading-[0.92] text-white">
                Deals
              </span>
              <svg 
                className="absolute w-[8.62px] h-[10.66px]" 
                style={{ 
                  right: '0',
                  top: '5.74px'
                }}
                viewBox="0 0 9 11" 
                fill="none"
              >
                <path 
                  d="M0.79 0.39L8.03 5.39L0.79 10.39" 
                  stroke="white" 
                  strokeWidth="1.11"
                />
              </svg>
            </button>
            
            {/* About Us */}
            <button
              onClick={viewAsComponent ? () => {} : () => handleMenuItemClick('about')}
              className="absolute left-0 top-[125.45px] w-[104.62px] h-[22.96px] flex items-center justify-between group"
            >
              <span className="font-thunder text-[30px] leading-[0.92] text-white">
                About Us
              </span>
              <svg 
                className="absolute w-[8.62px] h-[10.66px]" 
                style={{ 
                  right: '0',
                  top: '5.74px'
                }}
                viewBox="0 0 9 11" 
                fill="none"
              >
                <path 
                  d="M0.79 0.39L8.03 5.39L0.79 10.39" 
                  stroke="white" 
                  strokeWidth="1.11"
                />
              </svg>
            </button>
            
            {/* Our Brands */}
            <button
              onClick={viewAsComponent ? () => {} : () => handleMenuItemClick('brands')}
              className="absolute left-0 top-[167.27px] w-[124.62px] h-[22.96px] flex items-center justify-between group"
            >
              <span className="font-thunder text-[30px] leading-[0.92] text-white">
                Our Brands
              </span>
              <svg 
                className="absolute w-[8.62px] h-[10.66px]" 
                style={{ 
                  right: '0',
                  top: '5.74px'
                }}
                viewBox="0 0 9 11" 
                fill="none"
              >
                <path 
                  d="M0.79 0.39L8.03 5.39L0.79 10.39" 
                  stroke="white" 
                  strokeWidth="1.11"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
      
      {/* Extended Mega Menu - Shows when a menu item is selected */}
      {selectedMenuItem && (
      <div 
        className={cn(
          "absolute top-[calc(100%+10px)] w-[1462px] h-[746.15px] bg-white rounded-lg z-50 shadow-[0px_4px_4px_0px_rgba(36,36,36,0.15)]",
          skipPrimaryMenu ? "left-[50px]" : "left-[390px]"
        )}
      >
        <div className="w-full h-full" style={{ padding: '28px 69px' }}>
          {/* Plan Your Journey Content */}
          {selectedMenuItem === 'plan-journey' && (
            <>
              {/* Header Tabs */}
              <div className="flex items-center gap-[72px] h-[22.96px] mb-[61.98px]">
                <button className="relative w-[156.64px] h-[22.96px]">
                  <span className="font-thunder text-[30px] leading-[0.92] text-black">
                    Group Holidays
                  </span>
                  <svg 
                    className="absolute w-[9.64px] h-[4.8px]" 
                    style={{ right: '0', top: '9.84px' }}
                    viewBox="0 0 10 5" 
                    fill="none"
                  >
                    <path d="M1 1L5 4L9 1" stroke="black" strokeWidth="1.5"/>
                  </svg>
                </button>
                
                <button className="relative w-[144.64px] h-[22.96px] opacity-40">
                  <span className="font-thunder text-[30px] leading-[0.92] text-black">
                    Flexi Holidays
                  </span>
                  <svg 
                    className="absolute w-[9.64px] h-[4.8px]" 
                    style={{ right: '0', top: '9.84px' }}
                    viewBox="0 0 10 5" 
                    fill="none"
                  >
                    <path d="M1 1L5 4L9 1" stroke="black" strokeWidth="1.5"/>
                  </svg>
                </button>
                
                <button className="relative w-[180.64px] h-[22.96px] opacity-40">
                  <span className="font-thunder text-[30px] leading-[0.92] text-black">
                    Themed Journeys
                  </span>
                  <svg 
                    className="absolute w-[9.64px] h-[4.8px]" 
                    style={{ right: '0', top: '9.84px' }}
                    viewBox="0 0 10 5" 
                    fill="none"
                  >
                    <path d="M1 1L5 4L9 1" stroke="black" strokeWidth="1.5"/>
                  </svg>
                </button>
                
                <button className="relative w-[76.64px] h-[22.96px] opacity-40">
                  <span className="font-thunder text-[30px] leading-[0.92] text-black">
                    Cruise
                  </span>
                  <svg 
                    className="absolute w-[9.64px] h-[4.8px]" 
                    style={{ right: '0', top: '9.84px' }}
                    viewBox="0 0 10 5" 
                    fill="none"
                  >
                    <path d="M1 1L5 4L9 1" stroke="black" strokeWidth="1.5"/>
                  </svg>
                </button>
              </div>

              <div className="flex">
                {/* Region List */}
                <div className="absolute left-[73px] top-[99.98px] w-[353px]">
                  <h3 className="font-thunder text-[30px] leading-[0.92] text-black h-[22.96px] mb-[17px]">
                    REGION
                  </h3>
                  <div className="flex flex-col gap-[17px]">
                    {regions.map((region) => (
                      <button
                        key={region.id}
                        onClick={viewAsComponent ? () => {} : () => handleRegionSelect(region.id)}
                        className={cn(
                          "relative w-[353px] h-[63.14px] rounded-[9px] overflow-hidden group",
                          selectedRegion === region.id && ""
                        )}
                      >
                        {/* Background */}
                        <div className={cn(
                          "absolute inset-0 rounded-[9px]",
                          selectedRegion === region.id ? "bg-[#242424]" : "bg-[#F2F2F2]"
                        )} />
                        
                        {/* Text */}
                        <span className={cn(
                          "absolute left-[18px] top-[22.96px] font-onest text-[18px] leading-[1.275]",
                          selectedRegion === region.id ? "text-white" : "text-black"
                        )}>
                          {region.label}
                        </span>
                        
                        {/* Arrow */}
                        <svg 
                          className="absolute w-[27px] h-[22.14px]" 
                          style={{ right: '23px', top: '20.5px' }}
                          viewBox="0 0 27 23" 
                          fill="none"
                        >
                          <path 
                            d="M1 11.07L26 11.07" 
                            stroke={selectedRegion === region.id ? "white" : "black"} 
                            strokeWidth="1.5"
                          />
                          <path 
                            d="M15.52 3.21L26 11.07L15.52 18.93" 
                            stroke={selectedRegion === region.id ? "white" : "black"} 
                            strokeWidth="1.5"
                          />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tour Type Selection */}
                <div className="absolute left-[514px] top-[98.39px] w-[833px] h-[18.86px] flex items-center gap-[40px]">
                  <Link 
                    href="/tours"
                    className="font-onest text-[18px] leading-[1.275] text-black hover:underline w-[20px]"
                  >
                    All
                  </Link>
                  
                  <div className="flex-1 flex items-center gap-[37px]">
                    <div className="flex items-center gap-[26px]">
                      <Link
                        href={`/tours/${selectedRegion}/central-europe`}
                        className="font-onest text-[18px] leading-[1.275] text-black hover:underline"
                      >
                        Central Europe
                      </Link>
                      <Link
                        href={`/tours/${selectedRegion}/arctic`}
                        className="font-onest text-[18px] leading-[1.275] text-black hover:underline"
                      >
                        Arctic
                      </Link>
                    </div>
                    
                    <div className="flex-1 flex items-center gap-[22.67px]">
                      <Link
                        href={`/tours/${selectedRegion}/eastern-europe`}
                        className="font-onest text-[18px] leading-[1.275] text-black hover:underline"
                      >
                        Eastern Europe
                      </Link>
                      <Link
                        href={`/tours/${selectedRegion}/northern-europe`}
                        className="font-onest text-[18px] leading-[1.275] text-black hover:underline"
                      >
                        Northern Europe
                      </Link>
                      <Link
                        href={`/tours/${selectedRegion}/southern-europe`}
                        className="font-onest text-[18px] leading-[1.275] text-black hover:underline"
                      >
                        Southern Europe
                      </Link>
                      <Link
                        href={`/tours/${selectedRegion}/exotic`}
                        className="font-onest text-[18px] leading-[1.275] text-black hover:underline"
                      >
                        Exotic
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Countries Grid */}
                {selectedRegion === 'europe' && (
                  <div className="absolute left-[498px] top-[156.61px] w-[658px]">
                    <div className="w-[203px] flex flex-col gap-[27.88px]">
                      <h4 className="font-ppformula text-[20px] leading-[1.336] text-black">
                        COUNTRIES (28)
                      </h4>
                      <div className="flex items-start gap-[37px]">
                        {/* First Column */}
                        <div className="flex flex-col gap-[27.88px]">
                          <Link href="/tours/europe/austria" className="font-onest text-[18px] leading-[1.275] text-black hover:underline">
                            Austria
                          </Link>
                          <Link href="/tours/europe/belgium" className="font-onest text-[18px] leading-[1.275] text-black hover:underline">
                            Belgium
                          </Link>
                          
                          {/* Sub-columns */}
                          <div className="flex flex-col gap-[14.76px]">
                            <div className="flex flex-col gap-[27.6px]">
                              <Link href="/tours/europe/bosnia-herzegovina" className="font-onest text-[18px] leading-[1.275] text-black hover:underline">
                                Bosnia & Herzegovina
                              </Link>
                              <Link href="/tours/europe/croatia" className="font-onest text-[18px] leading-[1.275] text-black hover:underline">
                                Croatia
                              </Link>
                              <Link href="/tours/europe/czech-republic" className="font-onest text-[18px] leading-[1.275] text-black hover:underline">
                                Czech Republic
                              </Link>
                              <Link href="/tours/europe/denmark" className="font-onest text-[18px] leading-[1.275] text-black hover:underline">
                                Denmark
                              </Link>
                            </div>
                            
                            {/* Switzerland highlight */}
                            <div className="bg-[#242424] rounded px-[19px] py-[13.12px] w-[157px]">
                              <Link href="/explore/switzerland" className="font-onest text-[18px] leading-[1.275] text-white">
                                Switzerland
                              </Link>
                            </div>
                            
                            <Link href="/tours/europe/finland" className="font-ppstellar text-[18px] leading-[1.2] text-black">
                              Finland
                            </Link>
                          </div>
                        </div>
                        
                        {/* Second Column Group */}
                        <div className="flex gap-[46px]">
                          {/* Column 2 */}
                          <div className="flex flex-col gap-[28.29px] w-[118px]">
                            <Link href="/tours/europe/greece" className="font-onest text-[18px] leading-[1.275] text-black hover:underline">
                              Greece
                            </Link>
                            <Link href="/tours/europe/hungary" className="font-onest text-[18px] leading-[1.275] text-black hover:underline">
                              Hungary
                            </Link>
                            <Link href="/tours/europe/iceland" className="font-onest text-[18px] leading-[1.275] text-black hover:underline">
                              Iceland
                            </Link>
                            <Link href="/tours/europe/ireland" className="font-onest text-[18px] leading-[1.275] text-black hover:underline">
                              Ireland
                            </Link>
                            <Link href="/explore/italy" className="font-onest text-[18px] leading-[1.275] text-black hover:underline">
                              Italy 
                            </Link>
                            <Link href="/tours/europe/liechtenstein" className="font-onest text-[18px] leading-[1.275] text-black hover:underline">
                              Liechtenstein
                            </Link>
                            <Link href="/tours/europe/malta" className="font-onest text-[18px] leading-[1.275] text-black hover:underline">
                              Malta
                            </Link>
                            <Link href="/tours/europe/montenegro" className="font-onest text-[18px] leading-[1.275] text-black hover:underline">
                              Montenegro
                            </Link>
                          </div>
                          
                          {/* Column 3 & 4 */}
                          <div className="flex gap-[61px]">
                            <div className="flex flex-col gap-[27.71px]">
                              <Link href="/explore/france" className="font-onest text-[18px] leading-[1.275] text-black hover:underline">
                                France
                              </Link>
                              <Link href="/tours/europe/germany" className="font-onest text-[18px] leading-[1.275] text-black hover:underline">
                                Germany
                              </Link>
                              <Link href="/explore/netherlands" className="font-onest text-[18px] leading-[1.275] text-black hover:underline">
                                Netherlands
                              </Link>
                              <Link href="/tours/europe/norway" className="font-onest text-[18px] leading-[1.275] text-black hover:underline">
                                Norway
                              </Link>
                              <Link href="/tours/europe/poland" className="font-onest text-[18px] leading-[1.275] text-black hover:underline">
                                Poland
                              </Link>
                              <Link href="/tours/europe/portugal" className="font-onest text-[18px] leading-[1.275] text-black hover:underline">
                                Portugal
                              </Link>
                              <Link href="/tours/europe/slovakia" className="font-onest text-[18px] leading-[1.275] text-black hover:underline">
                                Slovakia
                              </Link>
                              <Link href="/tours/europe/slovenia" className="font-onest text-[18px] leading-[1.275] text-black hover:underline">
                                Slovenia
                              </Link>
                            </div>
                            
                            <div className="flex flex-col gap-[27.88px] w-[90px]">
                              <Link href="/tours/europe/spain" className="font-onest text-[18px] leading-[1.275] text-black hover:underline">
                                Spain
                              </Link>
                              <Link href="/tours/europe/sweden" className="font-onest text-[18px] leading-[1.275] text-black hover:underline">
                                Sweden
                              </Link>
                              <Link href="/tours/europe/turkiye" className="font-onest text-[18px] leading-[1.275] text-black hover:underline">
                                Turkiye
                              </Link>
                              <Link href="/tours/europe/vatican-city" className="font-ppstellar text-[18px] leading-[1.2] text-black">
                                Vatican City
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}

          {/* Trending Destinations Content */}
          {selectedMenuItem === 'trending' && (
            <div className="flex flex-col gap-8">
              <h3 className="font-thunder text-[30px] leading-[0.92] text-black">
                Trending Destinations
              </h3>
              <div className="grid grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h4 className="font-thunder text-[20px] text-black">Europe</h4>
                  <div className="space-y-2">
                    <Link href="/explore/switzerland" className="block font-onest text-[18px] text-black hover:underline">Switzerland</Link>
                    <Link href="/explore/italy" className="block font-onest text-[18px] text-black hover:underline">Italy</Link>
                    <Link href="/explore/france" className="block font-onest text-[18px] text-black hover:underline">France</Link>
                    <Link href="/explore/norway" className="block font-onest text-[18px] text-black hover:underline">Norway</Link>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-thunder text-[20px] text-black">Asia</h4>
                  <div className="space-y-2">
                    <Link href="/explore/japan" className="block font-onest text-[18px] text-black hover:underline">Japan</Link>
                    <Link href="/explore/korea" className="block font-onest text-[18px] text-black hover:underline">South Korea</Link>
                    <Link href="/explore/taiwan" className="block font-onest text-[18px] text-black hover:underline">Taiwan</Link>
                    <Link href="/explore/thailand" className="block font-onest text-[18px] text-black hover:underline">Thailand</Link>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-thunder text-[20px] text-black">Americas</h4>
                  <div className="space-y-2">
                    <Link href="/explore/usa" className="block font-onest text-[18px] text-black hover:underline">United States</Link>
                    <Link href="/explore/canada" className="block font-onest text-[18px] text-black hover:underline">Canada</Link>
                    <Link href="/explore/peru" className="block font-onest text-[18px] text-black hover:underline">Peru</Link>
                    <Link href="/explore/argentina" className="block font-onest text-[18px] text-black hover:underline">Argentina</Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Deals Content */}
          {selectedMenuItem === 'deals' && (
            <div className="flex flex-col gap-8">
              <h3 className="font-thunder text-[30px] leading-[0.92] text-black">
                Special Deals
              </h3>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-thunder text-[20px] text-black">Early Bird Specials</h4>
                  <div className="space-y-2">
                    <Link href="/deals/early-bird" className="block font-onest text-[18px] text-black hover:underline">Save up to 30% - Book 90 days ahead</Link>
                    <Link href="/deals/summer-europe" className="block font-onest text-[18px] text-black hover:underline">Summer Europe Tours</Link>
                    <Link href="/deals/winter-japan" className="block font-onest text-[18px] text-black hover:underline">Winter Japan Packages</Link>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-thunder text-[20px] text-black">Limited Time Offers</h4>
                  <div className="space-y-2">
                    <Link href="/deals/1-for-1" className="block font-onest text-[18px] text-black hover:underline">1-for-1 Travel Deals</Link>
                    <Link href="/deals/group-discounts" className="block font-onest text-[18px] text-black hover:underline">Group Discounts (6+ pax)</Link>
                    <Link href="/deals/last-minute" className="block font-onest text-[18px] text-black hover:underline">Last Minute Deals</Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* About Us Content */}
          {selectedMenuItem === 'about' && (
            <div className="flex flex-col gap-8">
              <h3 className="font-thunder text-[30px] leading-[0.92] text-black">
                About EU Holidays
              </h3>
              <div className="grid grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h4 className="font-thunder text-[20px] text-black">Our Company</h4>
                  <div className="space-y-2">
                    <Link href="/about-us" className="block font-onest text-[18px] text-black hover:underline">Our Story</Link>
                    <Link href="/about-us/mission" className="block font-onest text-[18px] text-black hover:underline">Mission & Vision</Link>
                    <Link href="/about-us/team" className="block font-onest text-[18px] text-black hover:underline">Meet the Team</Link>
                    <Link href="/awards" className="block font-onest text-[18px] text-black hover:underline">Awards & Recognition</Link>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-thunder text-[20px] text-black">Connect</h4>
                  <div className="space-y-2">
                    <Link href="/contact-us" className="block font-onest text-[18px] text-black hover:underline">Contact Us</Link>
                    <Link href="/careers" className="block font-onest text-[18px] text-black hover:underline">Careers</Link>
                    <Link href="/press" className="block font-onest text-[18px] text-black hover:underline">Press & Media</Link>
                    <Link href="/testimonials" className="block font-onest text-[18px] text-black hover:underline">Customer Reviews</Link>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-thunder text-[20px] text-black">Resources</h4>
                  <div className="space-y-2">
                    <Link href="/brochures" className="block font-onest text-[18px] text-black hover:underline">Travel Brochures</Link>
                    <Link href="/travel-guides" className="block font-onest text-[18px] text-black hover:underline">Travel Guides</Link>
                    <Link href="/travel-tips" className="block font-onest text-[18px] text-black hover:underline">Travel Tips</Link>
                    <Link href="/faq" className="block font-onest text-[18px] text-black hover:underline">FAQ</Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Our Brands Content */}
          {selectedMenuItem === 'brands' && (
            <div className="flex flex-col gap-8">
              <h3 className="font-thunder text-[30px] leading-[0.92] text-black">
                Our Brands
              </h3>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-thunder text-[20px] text-black">EU Holidays</h4>
                  <p className="font-onest text-[16px] text-black">
                    Premium group holidays and customized travel experiences across Europe and Asia.
                  </p>
                  <Link href="/about-eu-holidays" className="inline-block font-onest text-[18px] text-black hover:underline">Learn More →</Link>
                </div>
                <div className="space-y-4">
                  <h4 className="font-thunder text-[20px] text-black">EU Travel Club</h4>
                  <p className="font-onest text-[16px] text-black">
                    Exclusive membership benefits, priority bookings, and special member-only deals.
                  </p>
                  <Link href="/travel-club" className="inline-block font-onest text-[18px] text-black hover:underline">Join Now →</Link>
                </div>
                <div className="space-y-4">
                  <h4 className="font-thunder text-[20px] text-black">EU MICE</h4>
                  <p className="font-onest text-[16px] text-black">
                    Corporate travel solutions for meetings, incentives, conferences, and events.
                  </p>
                  <Link href="/mice" className="inline-block font-onest text-[18px] text-black hover:underline">Explore MICE →</Link>
                </div>
                <div className="space-y-4">
                  <h4 className="font-thunder text-[20px] text-black">Travel Essentials</h4>
                  <p className="font-onest text-[16px] text-black">
                    Travel insurance, visa services, and other essential travel requirements.
                  </p>
                  <Link href="/travel-essentials" className="inline-block font-onest text-[18px] text-black hover:underline">View Services →</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      )}
    </>
  )
}