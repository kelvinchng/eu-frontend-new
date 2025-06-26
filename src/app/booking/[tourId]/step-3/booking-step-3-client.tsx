'use client'

import React, { useState } from 'react'
import { LayoutWithoutHero } from '@/components/layouts/layout-without-hero'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { BookingSteps } from '../step-1/components/booking-steps'
import { TourInfoCard } from '../step-1/components/tour-info-card'
import { PackageDetails } from '../step-1/components/package-details'
import { PackageDetailsMobile } from '../step-1/components/package-details-mobile'
import { BookingSummary } from './components/booking-summary'

interface BookingStep3ClientProps {
  tour: any
  tourId: string
}

export function BookingStep3Client({ tour, tourId }: BookingStep3ClientProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const packageId = searchParams.get('packageId')
  const departureDate = searchParams.get('departureDate')
  
  // Get room data from URL params or default
  const roomsParam = searchParams.get('rooms')
  const initialRooms = roomsParam ? JSON.parse(decodeURIComponent(roomsParam)) : [
    { id: 1, adults: 1, childrenWithBed: 1, childrenWithoutBed: 1, infants: 1 }
  ]
  
  const [rooms] = useState(initialRooms)
  
  // Pricing from step 1
  const adultTwinPrice = 5988
  const childHalfTwinPrice = 5888
  const childWithoutBedPrice = 5688
  const infantPrice = 500
  const adultDiscount = 700
  const childWithBedDiscount = 600
  const adultTax = 760
  const childTax = 760
  
  // Calculate totals
  let totalFare = 0
  let totalDiscount = 0
  let totalTax = 0
  
  rooms.forEach((room: any) => {
    // Adult fare
    totalFare += room.adults * adultTwinPrice
    totalDiscount -= room.adults * adultDiscount
    totalTax += room.adults * adultTax
    
    // Child with bed
    totalFare += room.childrenWithBed * childHalfTwinPrice
    totalDiscount -= room.childrenWithBed * childWithBedDiscount
    totalTax += room.childrenWithBed * childTax
    
    // Child without bed
    totalFare += room.childrenWithoutBed * childWithoutBedPrice
    totalTax += room.childrenWithoutBed * childTax
    
    // Infant
    totalFare += room.infants * infantPrice
  })
  
  const subtotal = totalFare + totalDiscount + totalTax
  
  const handleProceed = () => {
    // Navigate to step 4 (payment)
    const params = new URLSearchParams({
      packageId: packageId || '1',
      departureDate: departureDate || '11 Apr \'25',
      rooms: encodeURIComponent(JSON.stringify(rooms))
    })
    router.push(`/booking/${tourId}/step-4?${params.toString()}`)
  }
  
  const handleGoBack = () => {
    const params = new URLSearchParams({
      packageId: packageId || '1',
      departureDate: departureDate || '11 Apr \'25',
      rooms: encodeURIComponent(JSON.stringify(rooms))
    })
    router.push(`/booking/${tourId}/step-2?${params.toString()}`)
  }

  return (
    <LayoutWithoutHero>
      <div className="max-w-[1920px] mx-auto">
        <div className="px-4 md:px-[60px] lg:px-[80px] xl:px-[110px] 2xl:px-[220px]">
          {/* Breadcrumb */}
          <div className="pt-[18px] md:pt-[39px] pb-[18px] md:pb-[28px]">
            <div className="flex items-center gap-[7px] md:gap-[9px] text-[13px] md:text-[20px] font-onest">
              <Link href="/tours/switzerland" className="text-[#242424] hover:underline">
                Switzerland Tours
              </Link>
              <svg viewBox="0 0 8 13" fill="none" className="w-[5px] h-[8px] md:w-[8px] md:h-[13px] flex-shrink-0">
                <path d="M1 1L6.5 6.5L1 12" stroke="#000000" strokeWidth="1.5"/>
              </svg>
              <span className="text-[#242424] truncate max-w-[100px] md:max-w-none">11D8N Switzerland Dream (Apr - Oct)</span>
              <svg viewBox="0 0 8 13" fill="none" className="w-[5px] h-[8px] md:w-[8px] md:h-[13px] flex-shrink-0">
                <path d="M1 1L6.5 6.5L1 12" stroke="#000000" strokeWidth="1.5"/>
              </svg>
              <span className="text-[#242424]">Booking</span>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="pb-[45px] md:pb-[68px]">
            <BookingSteps currentStep={3} />
          </div>

          {/* Main Content */}
          <div className="pb-[100px]">
            <div className="flex gap-[60px]">
              {/* Left Column - Booking Summary */}
              <div className="flex-1 lg:max-w-[840px]">
                {/* Mobile Tour Details - Show at top on mobile */}
                <div className="lg:hidden mb-[40px]">
                  {/* Tour Details Heading */}
                  <div className="flex items-center gap-[9px] mb-[18px]">
                    <Image 
                      src="/assets/icons/plane-icon.svg"
                      alt="Plane"
                      width={32}
                      height={32}
                      className="w-[32px] h-[32px]"
                    />
                    <h2 className="font-thunder font-medium text-[32px] text-[#242424] uppercase leading-[0.92]">
                      Tour Details
                    </h2>
                  </div>
                  
                  {/* Tour Details Card */}
                  <div className="bg-white rounded-[9px] shadow-[0px_3px_3px_0px_rgba(0,0,0,0.16)] overflow-hidden">
                    <Image 
                      src={tour.gallery[0]}
                      alt={tour.title}
                      width={325}
                      height={190}
                      className="w-full h-[190px] object-cover"
                    />
                    <div className="p-[23px] pb-[40px]">
                      <h3 className="font-onest font-bold text-[13px] text-[#242424] uppercase mb-[14px]">
                        TOUR INFO
                      </h3>
                      
                      <div className="w-full h-[1px] bg-[#E8E8E8] mb-[20px]"></div>
                      
                      <div className="space-y-[14px]">
                        <div className="flex">
                          <span className="font-onest font-medium text-[13px] text-[#242424] w-[120px]">Tour Name</span>
                          <span className="font-onest font-medium text-[13px] text-[#242424] flex-1">{tour.fullTitle}</span>
                        </div>
                        <div className="flex">
                          <span className="font-onest font-medium text-[13px] text-[#242424] w-[120px]">Tour Code</span>
                          <span className="font-onest font-medium text-[13px] text-[#242424]">04ECSBTS10/25QR</span>
                        </div>
                        <div className="flex">
                          <span className="font-onest font-medium text-[13px] text-[#242424] w-[120px]">Departure Date</span>
                          <span className="font-onest font-medium text-[13px] text-[#242424]">{departureDate || '10 April 2025'}</span>
                        </div>
                        <div className="flex">
                          <span className="font-onest font-medium text-[13px] text-[#242424] w-[120px]">Return Date</span>
                          <span className="font-onest font-medium text-[13px] text-[#242424]">21 April 2025</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Booking Summary */}
                <BookingSummary />
                
                {/* Desktop Go Back Button */}
                <button
                  onClick={handleGoBack}
                  className="hidden md:flex items-center gap-[10px] mt-[40px] md:mt-[60px]"
                >
                  <div className="w-[52px] h-[52px] rounded-full bg-[#242424] flex items-center justify-center">
                    <ChevronLeft className="w-[24px] h-[24px] text-white" />
                  </div>
                  <span className="font-onest font-semibold text-[18px] text-[#242424]">
                    Go Back
                  </span>
                </button>
                
                {/* Mobile Package Details */}
                <div className="md:hidden mt-[40px]">
                  <PackageDetailsMobile 
                    rooms={rooms}
                    pricing={{
                      adultTwinPrice,
                      childHalfTwinPrice,
                      childWithoutBedPrice,
                      infantPrice,
                      adultDiscount,
                      childWithBedDiscount,
                      adultTax,
                      childTax
                    }}
                    subtotal={subtotal}
                  />
                </div>

                {/* Mobile Buttons */}
                <div className="md:hidden mt-[42px] space-y-[24px]">
                  <button
                    onClick={handleGoBack}
                    className="w-[102px] h-[45px] bg-white border border-[#242424] rounded-[5px] font-onest text-[13px] text-[#242424]"
                  >
                    Go Back
                  </button>
                  
                  <button
                    onClick={handleProceed}
                    className="w-full h-[46px] rounded-[5px] bg-[#242424] text-white font-onest text-[14px]"
                  >
                    Proceed to Step 4 – Payment
                  </button>
                </div>
              </div>
              
              {/* Right Column - Desktop only */}
              <div className="hidden md:hidden lg:block lg:w-[450px] xl:w-[500px] flex-shrink-0">
                {/* Tour Details */}
                <div>
                  <div className="flex items-center gap-[12px] mb-[24px]">
                    <Image 
                      src="/assets/icons/plane-icon.svg"
                      alt="Plane"
                      width={49}
                      height={49}
                      className="w-[49px] h-[49px]"
                    />
                    <h2 className="font-thunder font-medium text-[50px] text-[#242424] uppercase leading-[0.92]">
                      Tour Details
                    </h2>
                  </div>
                  <TourInfoCard tour={tour} departureDate={departureDate} />
                </div>

                {/* Package Details */}
                <PackageDetails 
                  rooms={rooms}
                  pricing={{
                    adultTwinPrice,
                    childHalfTwinPrice,
                    childWithoutBedPrice,
                    infantPrice,
                    adultDiscount,
                    childWithBedDiscount,
                    adultTax,
                    childTax
                  }}
                  subtotal={subtotal}
                />
                
                {/* Proceed Button */}
                <button
                  onClick={handleProceed}
                  className="w-full h-[52px] rounded-[9px] font-onest text-[18px] mt-[74px] bg-primary text-white hover:bg-gray-900"
                >
                  Proceed to Step 4 – Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutWithoutHero>
  )
}