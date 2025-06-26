'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, Eye } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'

interface FlightPackage {
  id: string
  departureDate: string
  airline: string
  airlineCode: string
  airlineLogo: string
  price: string
  currency: string
}

interface TourBookingProps {
  tourTitle: string
  tourId?: string
  packages?: FlightPackage[]
  className?: string
}

export function TourBooking({ tourTitle, tourId, packages, className }: TourBookingProps) {
  const router = useRouter()
  const [expandedPackageId, setExpandedPackageId] = useState<string | null>(null)
  const [showFlightDetails, setShowFlightDetails] = useState<string | null>(null)
  const [selectedAirline, setSelectedAirline] = useState<string>('All Airlines')
  const [selectedDate, setSelectedDate] = useState<string>('Jan 2025')
  const [selectedSort, setSelectedSort] = useState<string>('Price: Low to High')
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  
  // Default packages if none provided
  const defaultPackages: FlightPackage[] = [
    {
      id: '1',
      departureDate: "11 Apr '25",
      airline: 'Qatar Airways',
      airlineCode: 'QR',
      airlineLogo: '/assets/logos/qatar.png',
      price: '5,288',
      currency: 'fr'
    },
    {
      id: '2',
      departureDate: "15 Apr '25",
      airline: 'Qatar Airways',
      airlineCode: 'QR',
      airlineLogo: '/assets/logos/qatar.png',
      price: '5,388',
      currency: 'fr'
    },
    {
      id: '3',
      departureDate: "22 Apr '25",
      airline: 'Qatar Airways',
      airlineCode: 'QR',
      airlineLogo: '/assets/logos/qatar.png',
      price: '5,188',
      currency: 'fr'
    },
    {
      id: '4',
      departureDate: "29 Apr '25",
      airline: 'Qatar Airways',
      airlineCode: 'QR',
      airlineLogo: '/assets/logos/qatar.png',
      price: '5,288',
      currency: 'fr'
    },
    {
      id: '5',
      departureDate: "6 May '25",
      airline: 'Qatar Airways',
      airlineCode: 'QR',
      airlineLogo: '/assets/logos/qatar.png',
      price: '5,088',
      currency: 'fr'
    },
    {
      id: '6',
      departureDate: "13 May '25",
      airline: 'Qatar Airways',
      airlineCode: 'QR',
      airlineLogo: '/assets/logos/qatar.png',
      price: '5,288',
      currency: 'fr'
    }
  ]

  const flightPackages = packages || defaultPackages

  return (
    <div className={cn("w-full", className)}>
      {/* Title */}
      <h2 className="font-thunder font-medium text-[32px] lg:text-[50px] leading-[0.92] text-[#242424] uppercase mb-[40px] lg:mb-[48px] text-center mt-[60px] lg:mt-[100px]">
        View Flights & Packages
      </h2>

      {/* Filter Bar - Desktop */}
      <div className="hidden lg:flex items-center justify-between mb-[32px]">
        {/* All Airlines Dropdown - Left */}
        <button className="flex items-center justify-between min-w-[180px] h-[51px] px-[23px] bg-white border border-[#242424] rounded-full whitespace-nowrap">
          <span className="font-onest text-[18px] leading-[1.275] text-[#242424]">
            All Airlines
          </span>
          <ChevronDown className="w-[16px] h-[16px] text-[#000000] ml-2" />
        </button>

        {/* Sort Buttons - Right */}
        <div className="flex items-center gap-[20px]">
          {/* Price Sort */}
          <button className="flex items-center justify-between min-w-[180px] h-[51px] px-[23px] bg-white border border-[#242424] rounded-full whitespace-nowrap">
            <span className="font-onest text-[18px] leading-[1.275] text-[#242424]">
              Price
            </span>
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" className="w-[13.42px] h-[14.49px] ml-2">
              <path d="M7 1.5V13.5M7 13.5L1 7.5M7 13.5L13 7.5" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Date Sort */}
          <button className="flex items-center justify-between min-w-[180px] h-[51px] px-[23px] bg-white border border-[#242424] rounded-full whitespace-nowrap">
            <span className="font-onest text-[18px] leading-[1.275] text-[#242424]">
              Date
            </span>
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" className="w-[13.42px] h-[14.49px] ml-2">
              <path d="M7 1.5V13.5M7 13.5L1 7.5M7 13.5L13 7.5" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Filter Bar */}
      <div className="lg:hidden mb-[24px] border-b border-[#E8E8E8] pb-[24px]">
        {/* Filter Header */}
        <div className="flex items-center justify-between mb-[34px]">
          <h3 className="font-thunder font-normal text-[25px] leading-[0.92] text-[#242424]">
            Filter
          </h3>
          <Image 
            src="/assets/icons/filter-icon.svg" 
            alt="Filter" 
            width={17} 
            height={16}
            className="w-[17.36px] h-[16.26px]"
          />
        </div>

        {/* Filter Options */}
        <div className="space-y-[40px]">
          {/* Select Airline */}
          <div className="relative">
            <label className="font-onest font-bold text-[13px] leading-[1.275] text-[#242424] uppercase block mb-[18px]">
              Select Airline
            </label>
            <button 
              onClick={() => setOpenDropdown(openDropdown === 'airline' ? null : 'airline')}
              className="w-full flex items-center justify-between"
            >
              <div className="flex items-center gap-[4px]">
                <Image 
                  src="/assets/icons/airline-icon.svg" 
                  alt="Airline" 
                  width={18} 
                  height={18}
                  className="w-[18px] h-[18px]"
                />
                <span className="font-onest text-[13px] leading-[1.275] text-[#242424]">
                  {selectedAirline}
                </span>
              </div>
              <Image 
                src="/assets/icons/chevron-down-mobile.svg" 
                alt="Expand" 
                width={8} 
                height={4}
                className={cn("w-[8px] h-[4.27px] transition-transform", openDropdown === 'airline' && "rotate-180")}
              />
            </button>
            {openDropdown === 'airline' && (
              <div className="absolute top-full left-0 right-0 mt-[8px] bg-white border border-[#E8E8E8] rounded-[4px] shadow-md z-10">
                {['All Airlines', 'Qatar Airways', 'Singapore Airlines', 'Emirates'].map((airline) => (
                  <button
                    key={airline}
                    onClick={() => {
                      setSelectedAirline(airline)
                      setOpenDropdown(null)
                    }}
                    className="w-full text-left px-[16px] py-[12px] font-onest text-[13px] leading-[1.275] text-[#242424] hover:bg-gray-50"
                  >
                    {airline}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Date */}
          <div className="relative">
            <label className="font-onest font-bold text-[13px] leading-[1.275] text-[#242424] uppercase block mb-[18px]">
              Date
            </label>
            <button 
              onClick={() => setOpenDropdown(openDropdown === 'date' ? null : 'date')}
              className="w-full flex items-center justify-between"
            >
              <div className="flex items-center gap-[7px]">
                <Image 
                  src="/assets/icons/calendar-icon.svg" 
                  alt="Calendar" 
                  width={15} 
                  height={19}
                  className="w-[15px] h-[18.93px]"
                />
                <span className="font-onest text-[13px] leading-[1.275] text-[#242424]">
                  {selectedDate}
                </span>
              </div>
              <Image 
                src="/assets/icons/chevron-down-mobile-2.svg" 
                alt="Expand" 
                width={8} 
                height={4}
                className={cn("w-[8px] h-[4.27px] transition-transform", openDropdown === 'date' && "rotate-180")}
              />
            </button>
            {openDropdown === 'date' && (
              <div className="absolute top-full left-0 right-0 mt-[8px] bg-white border border-[#E8E8E8] rounded-[4px] shadow-md z-10">
                {['Jan 2025', 'Feb 2025', 'Mar 2025', 'Apr 2025', 'May 2025', 'Jun 2025'].map((date) => (
                  <button
                    key={date}
                    onClick={() => {
                      setSelectedDate(date)
                      setOpenDropdown(null)
                    }}
                    className="w-full text-left px-[16px] py-[12px] font-onest text-[13px] leading-[1.275] text-[#242424] hover:bg-gray-50"
                  >
                    {date}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Sort By */}
          <div className="relative">
            <label className="font-onest font-bold text-[13px] leading-[1.275] text-[#242424] uppercase block mb-[18px]">
              Sort By
            </label>
            <button 
              onClick={() => setOpenDropdown(openDropdown === 'sort' ? null : 'sort')}
              className="w-full flex items-center justify-between"
            >
              <span className="font-onest text-[13px] leading-[1.275] text-[#242424]">
                {selectedSort}
              </span>
              <Image 
                src="/assets/icons/chevron-down-mobile-3.svg" 
                alt="Expand" 
                width={8} 
                height={4}
                className={cn("w-[8px] h-[4.27px] transition-transform", openDropdown === 'sort' && "rotate-180")}
              />
            </button>
            {openDropdown === 'sort' && (
              <div className="absolute top-full left-0 right-0 mt-[8px] bg-white border border-[#E8E8E8] rounded-[4px] shadow-md z-10">
                {['Price: Low to High', 'Price: High to Low', 'Date: Earliest First', 'Date: Latest First'].map((sort) => (
                  <button
                    key={sort}
                    onClick={() => {
                      setSelectedSort(sort)
                      setOpenDropdown(null)
                    }}
                    className="w-full text-left px-[16px] py-[12px] font-onest text-[13px] leading-[1.275] text-[#242424] hover:bg-gray-50"
                  >
                    {sort}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-[5px] mt-[44px]">
          <button 
            onClick={() => {
              setSelectedAirline('All Airlines')
              setSelectedDate('Jan 2025')
              setSelectedSort('Price: Low to High')
            }}
            className="flex-1 h-[36px] bg-white text-[#242424] border border-[#242424] rounded-[4px] font-onest text-[12px] leading-[1.275] text-center"
          >
            Clear Filters
          </button>
          <button className="flex-1 h-[36px] bg-[#242424] text-white border border-[#242424] rounded-[4px] font-onest text-[12px] leading-[1.275] text-center">
            Search
          </button>
        </div>
      </div>

      {/* Column Headers */}
      <div className="hidden lg:grid grid-cols-4 gap-[24px] mb-[24px] px-[32px]">
        <h3 className="font-onest font-semibold text-[20px] leading-[1.275] text-[#242424] tracking-[-0.5px]">
          Departure Date
        </h3>
        <h3 className="font-onest font-semibold text-[20px] leading-[1.275] text-[#242424] tracking-[-0.5px] text-center">
          Flight
        </h3>
        <h3 className="font-onest font-semibold text-[20px] leading-[1.275] text-[#242424] tracking-[-0.5px] text-center">
          Twin Fare
        </h3>
        <h3 className="font-onest font-semibold text-[20px] leading-[1.275] text-[#242424] tracking-[-0.5px] text-center">
          Action
        </h3>
      </div>

      {/* Flight Packages */}
      <div className="space-y-[25px]">
        {flightPackages.map((pkg) => (
          <div key={pkg.id}>
            <div className="relative bg-white rounded-[9px] shadow-[0px_8px_24px_0px_rgba(149,157,165,0.2)] overflow-hidden">
              {/* Desktop Layout */}
              <div className="hidden lg:block relative" style={{ paddingBottom: '10.88%' }}>
                <div className="absolute inset-0">
                  {/* Departure Date Section - Responsive positioning */}
                  <button
                    onClick={() => setExpandedPackageId(expandedPackageId === pkg.id ? null : pkg.id)}
                    className="absolute left-0 top-0 w-[16.49%] h-full bg-[#242424] rounded-[9px] cursor-pointer hover:bg-[#1a1a1a] transition-colors"
                  >
                    <h4 className="absolute left-[25.41%] top-[49.07%] font-thunder font-medium text-[2.08vw] leading-[0.92] text-white uppercase">
                      {pkg.departureDate}
                    </h4>
                    <p className="absolute left-[28.28%] top-[28.57%] font-onest font-semibold text-[0.94vw] leading-[1.275] text-white uppercase">
                      Departure
                    </p>
                  </button>

                  {/* Tour Title - Responsive positioning */}
                  <h3 className="absolute left-[20.27%] top-[29.19%] w-[40%] font-onest font-semibold text-[1.3vw] leading-[1.275] text-[#242424] uppercase tracking-[-2.5%] whitespace-nowrap overflow-hidden text-ellipsis">
                    {tourTitle}
                  </h3>

                  {/* View More Info - Responsive positioning */}
                  <button onClick={() => setShowFlightDetails(showFlightDetails === pkg.id ? null : pkg.id)} className="absolute left-[20.27%] top-[53.42%] flex items-center gap-[0.42vw] group">
                    <Eye className="w-[1.5vw] h-[1.5vw] text-[#1E1E1E]" strokeWidth={2} />
                    <span className="font-onest font-medium text-[0.94vw] leading-[1.275] text-[#242424] tracking-[-2.5%] group-hover:underline">
                      View more info
                    </span>
                  </button>

                  {/* Airline Logo - Responsive positioning */}
                  <div className="absolute left-[60%] top-[30%] w-[15%] h-[40%] flex items-center justify-center">
                    {pkg.airlineLogo ? (
                      <Image 
                        src={pkg.airlineLogo} 
                        alt={pkg.airline}
                        width={222}
                        height={64}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center">
                        <span className="text-[1vw] text-gray-500">{pkg.airlineCode}</span>
                      </div>
                    )}
                  </div>

                  {/* Price - Responsive positioning */}
                  <div className="absolute left-[77.84%] top-[31.68%] w-[5.61%] h-[34.16%]">
                    <span className="absolute left-[42.17%] top-0 font-onest text-[0.94vw] leading-[1.275] text-[#242424] tracking-[-2.5%]">
                      {pkg.currency}
                    </span>
                    <span className="absolute left-0 top-[41.82%] font-onest font-semibold text-[1.3vw] leading-[1.275] text-[#242424] uppercase tracking-[-2.5%]">
                      ${pkg.price}
                    </span>
                  </div>

                  {/* Book Now Button - Responsive positioning */}
                  <button 
                    onClick={() => {
                      const id = tourId || tourTitle.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '')
                      router.push(`/booking/${id}/step-1?packageId=${pkg.id}&departureDate=${encodeURIComponent(pkg.departureDate)}`)
                    }}
                    className="absolute left-[87.57%] top-[16.15%] w-[10.95%] h-[31.68%] bg-[#242424] text-white rounded-[9px] hover:bg-[#333333] transition-colors">
                    <span className="font-onest text-[0.94vw] leading-[1.275] uppercase">
                      Book Now
                    </span>
                  </button>

                  {/* Enquire Button - Responsive positioning */}
                  <button className="absolute left-[87.57%] top-[53.42%] w-[10.95%] h-[31.68%] bg-white text-[#242424] border border-[#242424] rounded-[9px] hover:bg-gray-50 transition-colors">
                    <span className="font-onest text-[0.94vw] leading-[1.275] uppercase">
                      Enquire
                    </span>
                  </button>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="lg:hidden">
                {/* Departure Date Header */}
                <div className="bg-[#242424] rounded-t-[4px] px-[21px] py-[19px]">
                  <div className="flex items-center justify-between">
                    <p className="font-onest font-medium text-[14px] leading-[1.275] text-white uppercase">
                      Departure
                    </p>
                    <h4 className="font-thunder font-medium text-[22px] leading-[0.92] text-white uppercase">
                      {pkg.departureDate}
                    </h4>
                  </div>
                </div>

                {/* Main Content */}
                <div className="bg-white rounded-b-[4px] px-[21px] py-[20px]">
                  {/* Tour Title */}
                  <h3 className="font-thunder font-medium text-[29px] leading-[0.92] text-[#242424] uppercase mb-[16px]">
                    {tourTitle}
                  </h3>

                  {/* Flight and Twin Fare Row */}
                  <div className="flex justify-between items-start mb-[20px]">
                    {/* Flight Section */}
                    <div>
                      <p className="font-onest font-semibold text-[13px] leading-[1.275] text-[#242424] mb-[8px]">
                        Flight
                      </p>
                      <div className="w-[104px] h-[28px]">
                        {pkg.airlineLogo ? (
                          <Image 
                            src={pkg.airlineLogo} 
                            alt={pkg.airline}
                            width={104}
                            height={28}
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center">
                            <span className="text-[12px] text-gray-500">{pkg.airlineCode}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Twin Fare Section */}
                    <div className="text-right">
                      <p className="font-onest font-semibold text-[13px] leading-[1.275] text-[#242424] mb-[8px]">
                        Twin Fare
                      </p>
                      <div className="flex items-baseline gap-[4px] justify-end">
                        <span className="font-onest text-[14px] leading-[1.275] text-[#242424]">
                          {pkg.currency}
                        </span>
                        <span className="font-onest font-semibold text-[18px] leading-[1.275] text-[#242424]">
                          ${pkg.price}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-[8px] mb-[20px]">
                    <button 
                      onClick={() => {
                        const id = tourId || tourTitle.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '')
                        router.push(`/booking/${id}/step-1?packageId=${pkg.id}&departureDate=${encodeURIComponent(pkg.departureDate)}`)
                      }}
                      className="w-full h-[46px] bg-[#242424] text-white rounded-[4px] font-onest text-[14px] leading-[1.275] uppercase border border-[#242424]">
                      Book Now
                    </button>
                    <button className="w-full h-[46px] bg-white text-[#242424] rounded-[4px] font-onest text-[14px] leading-[1.275] uppercase border border-[#242424]">
                      Enquire Now
                    </button>
                  </div>

                  {/* View More Info Button */}
                  <div className="flex justify-center">
                    <button onClick={() => setShowFlightDetails(showFlightDetails === pkg.id ? null : pkg.id)} className="flex items-center gap-[8px] group">
                      <Eye className="w-[14px] h-[14px] text-[#000000]" strokeWidth={1.3} />
                      <span className="font-onest text-[13px] leading-[1.275] text-[#000000] group-hover:underline">
                        {showFlightDetails === pkg.id ? 'Hide info' : 'View more info'}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Expanded Package Details */}
            {expandedPackageId === pkg.id && (
              <div className="mt-[1.69vw] lg:mt-[25px] bg-white rounded-[9px] shadow-[0px_8px_24px_0px_rgba(149,157,165,0.2)] p-[24px] lg:p-[4.19%]">
                {/* Full Package Title */}
                <h3 className="font-thunder font-semibold text-[28px] lg:text-[2.08vw] leading-[0.92] text-[#242424] uppercase mb-[24px] lg:mb-[1.56vw]">
                  Full Package
                </h3>
                
                {/* Package Details Table */}
                <div className="space-y-[32px] lg:space-y-[2.4vw]">
                  {/* Per Adult Section */}
                  <div>
                    <h4 className="font-onest text-[16px] lg:text-[0.94vw] leading-[1.275] text-[#242424] uppercase mb-[20px] lg:mb-[1.35vw]">
                      Per Adult
                    </h4>
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-[20px] gap-x-[40px] lg:gap-[6.35vw]">
                      <div>
                        <p className="font-onest font-semibold text-[14px] lg:text-[0.94vw] leading-[1.275] text-[#242424] mb-[12px] lg:mb-[1.82vw]">Single</p>
                        <p className="font-onest text-[14px] lg:text-[0.94vw] leading-[1.275] text-[#242424]">fr $6,888</p>
                      </div>
                      <div>
                        <p className="font-onest font-semibold text-[14px] lg:text-[0.94vw] leading-[1.275] text-[#242424] mb-[12px] lg:mb-[1.82vw]">Twin</p>
                        <p className="font-onest text-[14px] lg:text-[0.94vw] leading-[1.275] text-[#242424]">fr $5,288</p>
                      </div>
                      <div>
                        <p className="font-onest font-semibold text-[14px] lg:text-[0.94vw] leading-[1.275] text-[#242424] mb-[12px] lg:mb-[1.82vw]">Triple</p>
                        <p className="font-onest text-[14px] lg:text-[0.94vw] leading-[1.275] text-[#242424]">fr $5,288</p>
                      </div>
                      <div>
                        <p className="font-onest font-semibold text-[14px] lg:text-[0.94vw] leading-[1.275] text-[#242424] mb-[12px] lg:mb-[1.82vw]">Quad</p>
                        <p className="font-onest text-[14px] lg:text-[0.94vw] leading-[1.275] text-[#242424]">N/A</p>
                      </div>
                      <div className="col-span-2 lg:col-span-1">
                        <p className="font-onest font-semibold text-[14px] lg:text-[0.94vw] leading-[1.275] text-[#242424] mb-[12px] lg:mb-[1.82vw]">Misc/Tax</p>
                        <p className="font-onest text-[14px] lg:text-[0.94vw] leading-[1.275] text-[#242424]">fr $760</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Separator */}
                  <div className="border-t border-[#E8E8E8]"></div>
                  
                  {/* Per Child Section */}
                  <div>
                    <h4 className="font-onest text-[16px] lg:text-[0.94vw] leading-[1.275] text-[#242424] uppercase mb-[20px] lg:mb-[1.35vw]">
                      Per Child
                    </h4>
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-[20px] gap-x-[40px] lg:gap-[6.35vw]">
                      <div>
                        <p className="font-onest font-semibold text-[14px] lg:text-[0.94vw] leading-[1.275] text-[#242424] mb-[12px] lg:mb-[1.82vw]">Half Twin</p>
                        <p className="font-onest text-[14px] lg:text-[0.94vw] leading-[1.275] text-[#242424]">fr $5,188</p>
                      </div>
                      <div>
                        <p className="font-onest font-semibold text-[14px] lg:text-[0.94vw] leading-[1.275] text-[#242424] mb-[12px] lg:mb-[1.82vw]">With Bed</p>
                        <p className="font-onest text-[14px] lg:text-[0.94vw] leading-[1.275] text-[#242424]">fr $4,988</p>
                      </div>
                      <div>
                        <p className="font-onest font-semibold text-[14px] lg:text-[0.94vw] leading-[1.275] text-[#242424] mb-[12px] lg:mb-[1.82vw]">w/o Bed</p>
                        <p className="font-onest text-[14px] lg:text-[0.94vw] leading-[1.275] text-[#242424]">fr $4,988</p>
                      </div>
                      <div>
                        <p className="font-onest font-semibold text-[14px] lg:text-[0.94vw] leading-[1.275] text-[#242424] mb-[12px] lg:mb-[1.82vw]">Infant</p>
                        <p className="font-onest text-[14px] lg:text-[0.94vw] leading-[1.275] text-[#242424]">fr $500</p>
                      </div>
                      <div className="col-span-2 lg:col-span-1">
                        <p className="font-onest font-semibold text-[14px] lg:text-[0.94vw] leading-[1.275] text-[#242424] mb-[12px] lg:mb-[1.82vw]">Misc/Tax</p>
                        <p className="font-onest text-[14px] lg:text-[0.94vw] leading-[1.275] text-[#242424]">fr $760</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Flight Details Expansion */}
            {showFlightDetails === pkg.id && (
              <div className="bg-white rounded-[4px] lg:rounded-[9px] shadow-[0px_8px_24px_0px_rgba(149,157,165,0.2)] p-[21px] lg:p-[62px]">
                {/* Full Package Section */}
                <div className="mb-[30px] lg:mb-[60px]">
                  <h3 className="font-thunder font-medium text-[30px] lg:text-[40px] leading-[0.92] text-[#242424] uppercase mb-[24px] lg:mb-[40px]">
                    Full Package
                  </h3>
                  
                  {/* Per Adult Section */}
                  <div className="mb-[20px] lg:mb-[30px]">
                    <h4 className="font-onest text-[13px] lg:text-[18px] leading-[1.275] text-[#242424] uppercase mb-[16px] lg:mb-[24px]">
                      Per Adult
                    </h4>
                    
                    {/* Mobile Layout - 2x2 Grid */}
                    <div className="lg:hidden space-y-[24px]">
                      {/* First Row */}
                      <div className="grid grid-cols-4 gap-[10px]">
                        <div className="text-center">
                          <p className="font-onest font-medium text-[13px] leading-[1.275] text-[#242424] mb-[16px] whitespace-nowrap">Single</p>
                          <p className="font-onest text-[13px] leading-[1.275] text-[#242424] whitespace-nowrap">fr $6,888</p>
                        </div>
                        <div className="text-center">
                          <p className="font-onest font-medium text-[13px] leading-[1.275] text-[#242424] mb-[16px] whitespace-nowrap">Twin</p>
                          <p className="font-onest text-[13px] leading-[1.275] text-[#242424] whitespace-nowrap">fr $5,288</p>
                        </div>
                        <div className="text-center">
                          <p className="font-onest font-medium text-[13px] leading-[1.275] text-[#242424] mb-[16px] whitespace-nowrap">Triple</p>
                          <p className="font-onest text-[13px] leading-[1.275] text-[#242424] whitespace-nowrap">fr $5,288</p>
                        </div>
                        <div className="text-center">
                          <p className="font-onest font-medium text-[13px] leading-[1.275] text-[#242424] mb-[16px] whitespace-nowrap">Quad</p>
                          <p className="font-onest text-[13px] leading-[1.275] text-[#242424] whitespace-nowrap">N/A</p>
                        </div>
                      </div>
                      
                      {/* Misc/Tax */}
                      <div>
                        <p className="font-onest font-medium text-[13px] leading-[1.275] text-[#242424] mb-[8px]">Misc/Tax</p>
                        <p className="font-onest text-[12px] leading-[1.275] text-[#242424]">fr $760</p>
                      </div>
                    </div>
                    
                    {/* Desktop Layout */}
                    <div className="hidden lg:grid grid-cols-5 gap-[80px] mb-[24px]">
                      <div>
                        <p className="font-onest font-semibold text-[18px] leading-[1.275] text-[#242424] mb-[24px]">Single</p>
                        <p className="font-onest text-[18px] leading-[1.275] text-[#242424]">fr $6,888</p>
                      </div>
                      <div>
                        <p className="font-onest font-semibold text-[18px] leading-[1.275] text-[#242424] mb-[24px]">Twin</p>
                        <p className="font-onest text-[18px] leading-[1.275] text-[#242424]">fr $5,288</p>
                      </div>
                      <div>
                        <p className="font-onest font-semibold text-[18px] leading-[1.275] text-[#242424] mb-[24px]">Triple</p>
                        <p className="font-onest text-[18px] leading-[1.275] text-[#242424]">fr $5,288</p>
                      </div>
                      <div>
                        <p className="font-onest font-semibold text-[18px] leading-[1.275] text-[#242424] mb-[24px]">Quad</p>
                        <p className="font-onest text-[18px] leading-[1.275] text-[#242424]">N/A</p>
                      </div>
                      <div>
                        <p className="font-onest font-semibold text-[18px] leading-[1.275] text-[#242424] mb-[24px]">Misc/Tax</p>
                        <p className="font-onest text-[18px] leading-[1.275] text-[#242424]">fr $760</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Separator */}
                  <div className="border-t border-[#E8E8E8] mb-[20px] lg:mb-[30px]"></div>
                  
                  {/* Per Child Section */}
                  <div>
                    <h4 className="font-onest text-[13px] lg:text-[18px] leading-[1.275] text-[#242424] uppercase mb-[16px] lg:mb-[24px]">
                      Per Child
                    </h4>
                    
                    {/* Mobile Layout - 2x2 Grid */}
                    <div className="lg:hidden space-y-[24px]">
                      {/* First Row */}
                      <div className="grid grid-cols-4 gap-[10px]">
                        <div className="text-center">
                          <p className="font-onest font-medium text-[13px] leading-[1.275] text-[#242424] mb-[16px] whitespace-nowrap">½ Twin</p>
                          <p className="font-onest text-[13px] leading-[1.275] text-[#242424] whitespace-nowrap">fr $5,188</p>
                        </div>
                        <div className="text-center">
                          <p className="font-onest font-medium text-[13px] leading-[1.275] text-[#242424] mb-[16px] whitespace-nowrap">W/ Bed</p>
                          <p className="font-onest text-[13px] leading-[1.275] text-[#242424] whitespace-nowrap">fr $4,988</p>
                        </div>
                        <div className="text-center">
                          <p className="font-onest font-medium text-[13px] leading-[1.275] text-[#242424] mb-[16px] whitespace-nowrap">W/O Bed</p>
                          <p className="font-onest text-[13px] leading-[1.275] text-[#242424] whitespace-nowrap">fr $4,988</p>
                        </div>
                        <div className="text-center">
                          <p className="font-onest font-medium text-[13px] leading-[1.275] text-[#242424] mb-[16px] whitespace-nowrap">Infant</p>
                          <p className="font-onest text-[13px] leading-[1.275] text-[#242424] whitespace-nowrap">fr $500</p>
                        </div>
                      </div>
                      
                      {/* Misc/Tax */}
                      <div>
                        <p className="font-onest font-medium text-[13px] leading-[1.275] text-[#242424] mb-[8px]">Misc/Tax</p>
                        <p className="font-onest text-[12px] leading-[1.275] text-[#242424]">fr $760</p>
                      </div>
                    </div>
                    
                    {/* Desktop Layout */}
                    <div className="hidden lg:grid grid-cols-5 gap-[80px]">
                      <div>
                        <p className="font-onest font-semibold text-[18px] leading-[1.275] text-[#242424] mb-[24px]">Half Twin</p>
                        <p className="font-onest text-[18px] leading-[1.275] text-[#242424]">fr $5,188</p>
                      </div>
                      <div>
                        <p className="font-onest font-semibold text-[18px] leading-[1.275] text-[#242424] mb-[24px]">With Bed</p>
                        <p className="font-onest text-[18px] leading-[1.275] text-[#242424]">fr $4,988</p>
                      </div>
                      <div>
                        <p className="font-onest font-semibold text-[18px] leading-[1.275] text-[#242424] mb-[24px]">w/o Bed</p>
                        <p className="font-onest text-[18px] leading-[1.275] text-[#242424]">fr $4,988</p>
                      </div>
                      <div>
                        <p className="font-onest font-semibold text-[18px] leading-[1.275] text-[#242424] mb-[24px]">Infant</p>
                        <p className="font-onest text-[18px] leading-[1.275] text-[#242424]">fr $500</p>
                      </div>
                      <div>
                        <p className="font-onest font-semibold text-[18px] leading-[1.275] text-[#242424] mb-[24px]">Misc/Tax</p>
                        <p className="font-onest text-[18px] leading-[1.275] text-[#242424]">fr $760</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Flight Details Section */}
                <div>
                  <h3 className="font-thunder font-medium text-[30px] lg:text-[40px] leading-[0.92] text-[#242424] uppercase mb-[24px] lg:mb-[40px]">
                    Flight Details
                  </h3>
                  
                  {/* Flight Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr>
                          <th className="font-onest font-medium text-[13px] lg:text-[18px] leading-[1.275] text-[#242424] text-left pb-[29px] lg:pb-[20px] pr-[19px]">Date</th>
                          <th className="font-onest font-medium text-[13px] lg:text-[18px] leading-[1.275] text-[#242424] text-left pb-[29px] lg:pb-[20px] pr-[19px]">Sector</th>
                          <th className="font-onest font-medium text-[13px] lg:text-[18px] leading-[1.275] text-[#242424] text-left pb-[29px] lg:pb-[20px] pr-[19px]">Flight</th>
                          <th className="font-onest font-medium text-[13px] lg:text-[18px] leading-[1.275] text-[#242424] text-left pb-[29px] lg:pb-[20px] pr-[19px]">ETD</th>
                          <th className="font-onest font-medium text-[13px] lg:text-[18px] leading-[1.275] text-[#242424] text-left pb-[29px] lg:pb-[20px]">ETA</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-[#E8E8E8]">
                          <td className="font-onest text-[12px] lg:text-[18px] leading-[1.275] text-[#242424] py-[17px] lg:py-[12px] text-left pr-[19px]">Fri, 11 Apr</td>
                          <td className="font-onest text-[12px] lg:text-[18px] leading-[1.275] text-[#242424] py-[17px] lg:py-[12px] text-left pr-[19px]">SIN/DOH</td>
                          <td className="font-onest text-[12px] lg:text-[18px] leading-[1.275] text-[#242424] py-[17px] lg:py-[12px] text-left pr-[19px]">QR945</td>
                          <td className="font-onest text-[12px] lg:text-[18px] leading-[1.275] text-[#242424] py-[17px] lg:py-[12px] text-left pr-[19px]">0215</td>
                          <td className="font-onest text-[12px] lg:text-[18px] leading-[1.275] text-[#242424] py-[17px] lg:py-[12px] text-left">0525</td>
                        </tr>
                        <tr className="border-b border-[#E8E8E8]">
                          <td className="font-onest text-[12px] lg:text-[18px] leading-[1.275] text-[#242424] py-[17px] lg:py-[12px] text-left pr-[19px]">Fri, 11 Apr</td>
                          <td className="font-onest text-[12px] lg:text-[18px] leading-[1.275] text-[#242424] py-[17px] lg:py-[12px] text-left pr-[19px]">DOH/ZUR</td>
                          <td className="font-onest text-[12px] lg:text-[18px] leading-[1.275] text-[#242424] py-[17px] lg:py-[12px] text-left pr-[19px]">QR95</td>
                          <td className="font-onest text-[12px] lg:text-[18px] leading-[1.275] text-[#242424] py-[17px] lg:py-[12px] text-left pr-[19px]">0805</td>
                          <td className="font-onest text-[12px] lg:text-[18px] leading-[1.275] text-[#242424] py-[17px] lg:py-[12px] text-left">1240</td>
                        </tr>
                        <tr className="border-b border-[#E8E8E8]">
                          <td className="font-onest text-[12px] lg:text-[18px] leading-[1.275] text-[#242424] py-[17px] lg:py-[12px] text-left pr-[19px]">Sat, 19 Apr</td>
                          <td className="font-onest text-[12px] lg:text-[18px] leading-[1.275] text-[#242424] py-[17px] lg:py-[12px] text-left pr-[19px]">ZUR/DOH</td>
                          <td className="font-onest text-[12px] lg:text-[18px] leading-[1.275] text-[#242424] py-[17px] lg:py-[12px] text-left pr-[19px]">QR96</td>
                          <td className="font-onest text-[12px] lg:text-[18px] leading-[1.275] text-[#242424] py-[17px] lg:py-[12px] text-left pr-[19px]">1425</td>
                          <td className="font-onest text-[12px] lg:text-[18px] leading-[1.275] text-[#242424] py-[17px] lg:py-[12px] text-left">2140</td>
                        </tr>
                        <tr>
                          <td className="font-onest text-[12px] lg:text-[18px] leading-[1.275] text-[#242424] py-[17px] lg:py-[12px] text-left pr-[19px]">Sun, 20 Apr</td>
                          <td className="font-onest text-[12px] lg:text-[18px] leading-[1.275] text-[#242424] py-[17px] lg:py-[12px] text-left pr-[19px]">DOH/SIN</td>
                          <td className="font-onest text-[12px] lg:text-[18px] leading-[1.275] text-[#242424] py-[17px] lg:py-[12px] text-left pr-[19px]">QR946</td>
                          <td className="font-onest text-[12px] lg:text-[18px] leading-[1.275] text-[#242424] py-[17px] lg:py-[12px] text-left pr-[19px]">0200</td>
                          <td className="font-onest text-[12px] lg:text-[18px] leading-[1.275] text-[#242424] py-[17px] lg:py-[12px] text-left">1410</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}