'use client'

import React, { useState } from 'react'
import { LayoutWithoutHero } from '@/components/layouts/layout-without-hero'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, Plus, Minus } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { RoomCard } from './components/room-card'
import { BookingSteps } from './components/booking-steps'
import { TourInfoCard } from './components/tour-info-card'
import { PackageDetails } from './components/package-details'
import { PackageDetailsMobile } from './components/package-details-mobile'
import { TermsAndConditions } from './components/terms-and-conditions'

interface BookingStep1ClientProps {
  tour: any
  tourId: string
}

interface RoomData {
  id: number
  adults: number
  childrenWithBed: number
  childrenWithoutBed: number
  infants: number
}

export function BookingStep1Client({ tour, tourId }: BookingStep1ClientProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const packageId = searchParams.get('packageId')
  const departureDate = searchParams.get('departureDate')
  
  const [rooms, setRooms] = useState<RoomData[]>([
    { id: 1, adults: 1, childrenWithBed: 1, childrenWithoutBed: 1, infants: 1 }
  ])
  const [selectedRoomCount, setSelectedRoomCount] = useState(1)
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  // Pricing from Figma
  const adultTwinPrice = 5988
  const childHalfTwinPrice = 5888
  const childWithoutBedPrice = 5688
  const infantPrice = 500
  const adultDiscount = 700
  const childWithBedDiscount = 600
  const adultTax = 760
  const childTax = 760

  const updateRoom = (roomId: number, field: keyof RoomData, value: number) => {
    setRooms(rooms.map(room => 
      room.id === roomId ? { ...room, [field]: Math.max(0, value) } : room
    ))
  }

  const handleRoomCountChange = (count: number) => {
    setSelectedRoomCount(count)
    const currentRooms = [...rooms]
    
    if (count > currentRooms.length) {
      // Add rooms
      for (let i = currentRooms.length; i < count; i++) {
        currentRooms.push({
          id: i + 1,
          adults: 1,
          childrenWithBed: 0,
          childrenWithoutBed: 0,
          infants: 0
        })
      }
    } else {
      // Remove rooms
      currentRooms.splice(count)
    }
    
    setRooms(currentRooms)
  }

  // Calculate totals
  let totalFare = 0
  let totalDiscount = 0
  let totalTax = 0
  
  rooms.forEach(room => {
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
    if (!agreedToTerms) {
      alert('Please agree to the terms and conditions')
      return
    }
    
    const params = new URLSearchParams({
      packageId: packageId || '1',
      departureDate: departureDate || "10 April 2025",
      rooms: JSON.stringify(rooms),
      totalPrice: subtotal.toString()
    })
    
    router.push(`/booking/${tourId}/step-2?${params.toString()}`)
  }

  return (
    <LayoutWithoutHero>
      <div className="bg-white min-h-screen">
        <div className="max-w-[1480px] mx-auto px-[20px] md:px-[40px] lg:px-[60px]">
          {/* Breadcrumbs */}
          <div className="pt-[35px] md:pt-[140px] pb-[20px]">
          <div className="flex items-center gap-[6px] md:gap-[10px] text-[13px] md:text-[20px] font-onest">
            <Link href="/explore/switzerland" className="text-[#242424] whitespace-nowrap">
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
            <BookingSteps currentStep={1} />
          </div>

          {/* Main Content */}
          <div className="pb-[100px]">
          <div className="flex flex-col md:flex-row gap-[32px]">
            {/* Left Column (Full width on mobile) */}
            <div className="w-full md:flex-1">
              {/* Tour Details Mobile - Shown only on mobile at the top */}
              <div className="md:hidden mb-[40px]">
                {/* Title above the card */}
                <div className="flex items-center gap-[9px] mb-[18px]">
                  <Image 
                    src="/assets/icons/plane-icon.svg"
                    alt="Plane"
                    width={32}
                    height={32}
                  />
                  <h2 className="font-thunder font-medium text-[32px] leading-[0.92] text-[#242424]">
                    Tour Details
                  </h2>
                </div>
                
                {/* Card */}
                <div className="bg-white rounded-[9px] shadow-[0px_3px_3px_0px_rgba(0,0,0,0.16)] overflow-hidden">
                  <Image 
                    src={tour.gallery[0]}
                    alt={tour.title}
                    width={325}
                    height={190}
                    className="w-full h-[190px] object-cover"
                  />
                  
                  <div className="p-[23px_23px_37px_23px]">
                    <h3 className="font-onest font-bold text-[13px] text-[#242424] uppercase mb-[14px]">
                      TOUR INFO
                    </h3>
                    
                    <div className="border-b border-[#E8E8E8] mb-[20px]"></div>
                    
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

              {/* Room Details Section */}
              <div className="mb-[40px]">
                <div className="flex items-center gap-[9px] md:gap-[12px] mb-[32px] md:mb-[40px]">
                  <Image 
                    src="/assets/icons/single-bed-icon.png"
                    alt="Bed"
                    width={31}
                    height={35}
                    className="w-[31px] h-[35px] md:w-[43px] md:h-[48px]"
                  />
                  <h2 className="font-thunder font-medium text-[32px] md:text-[50px] leading-[0.92] text-[#242424]">
                    Room Details
                  </h2>
                </div>

                {/* Room Selection Dropdown */}
                <div className="mb-[32px] md:mb-[40px]">
                  <div className="flex items-center gap-[13px] md:gap-[16px]">
                    <p className="font-onest font-medium text-[13px] md:text-[18px] text-[#242424]">
                      Select No. of Rooms
                    </p>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="w-[49px] h-[29px] md:w-[86px] md:h-[51px] bg-white border border-[#242424] rounded-[5px] md:rounded-[9px] flex items-center justify-between px-[12px] md:px-[22px] focus:outline-none">
                          <span className="font-onest text-[11px] md:text-[18px] text-[#242424]">{selectedRoomCount}</span>
                          <ChevronDown className="w-[10px] h-[10px] md:w-[16px] md:h-[16px] text-[#1E1E1E]" strokeWidth={2} />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-[49px] md:w-[86px]">
                        {[1, 2, 3, 4, 5].map(num => (
                          <DropdownMenuItem
                            key={num}
                            onClick={() => handleRoomCountChange(num)}
                            className="font-onest text-[11px] md:text-[18px] cursor-pointer"
                          >
                            {num}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>

                {/* Room Cards */}
                <div className="space-y-[25px]">
                  {rooms.map((room) => (
                    <RoomCard 
                      key={room.id} 
                      room={room} 
                      onUpdateRoom={updateRoom} 
                    />
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-[5px] md:gap-[24px] mt-[24px] md:mt-[40px]">
                  <button 
                    onClick={() => router.back()}
                    className="w-[102px] h-[45px] md:w-[162px] md:h-[51px] bg-white border border-[#242424] rounded-[5px] md:rounded-[9px] font-onest text-[11px] md:text-[18px] text-[#242424]"
                  >
                    Go Back
                  </button>
                  <button className="w-[191px] h-[45px] md:w-[243px] md:h-[51px] bg-[#242424] text-white rounded-[5px] md:rounded-[9px] font-onest text-[11px] md:text-[18px]">
                    Check Price Availability
                  </button>
                </div>
              </div>

              {/* Package Details Mobile - Show on mobile above T&C */}
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

              {/* Terms & Conditions */}
              <TermsAndConditions 
                agreedToTerms={agreedToTerms}
                onAgreeChange={setAgreedToTerms}
              />

              {/* Proceed Button Mobile */}
              <div className="md:hidden mt-[36px]">
                <button
                  onClick={handleProceed}
                  disabled={!agreedToTerms}
                  className={`w-full h-[46px] rounded-[5px] font-onest text-[11px] ${
                    agreedToTerms
                      ? 'bg-primary text-white'
                      : 'bg-[#E5E5E5] text-[#999999] cursor-not-allowed'
                  }`}
                >
                  Proceed to Step 2 – Traveller's Information
                </button>
              </div>
            </div>

            {/* Right Column - Desktop only (Tour details shown above on mobile) */}
            <div className="hidden md:block md:w-[400px] lg:w-[450px] xl:w-[500px]">
              {/* Tour Details */}
              <div className="mt-[99px]">
                {/* Title above the card */}
                <div className="flex items-center gap-[12px] mb-[41px]">
                  <Image 
                    src="/assets/icons/plane-icon.svg"
                    alt="Plane"
                    width={49}
                    height={49}
                  />
                  <h2 className="font-thunder font-medium text-[50px] leading-[0.92] text-[#242424]">
                    Tour Details
                  </h2>
                </div>
                
                {/* Card */}
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
                disabled={!agreedToTerms}
                className={`w-full h-[52px] rounded-[9px] font-onest text-[18px] mt-[74px] ${
                  agreedToTerms
                    ? 'bg-primary text-white hover:bg-gray-900'
                    : 'bg-[#E5E5E5] text-[#999999] cursor-not-allowed'
                }`}
              >
                Proceed to Step 2 – Traveller's Information
              </button>
            </div>
          </div>

          </div>
        </div>
      </div>
    </LayoutWithoutHero>
  )
}