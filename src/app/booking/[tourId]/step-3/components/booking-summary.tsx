'use client'

import React from 'react'
import Image from 'next/image'

interface TravellerData {
  title: string
  firstName: string
  lastName: string
  dateOfBirth?: string
  nationality?: string
  passportNumber?: string
  passportExpiry?: string
  contactNumber?: string
  email?: string
  address?: string
}

interface RoomTraveller {
  type: string
  number: number
  data: TravellerData
}

interface RoomData {
  id: number
  travellers: RoomTraveller[]
}

export function BookingSummary() {
  // Mock data - in real app, this would come from previous steps
  const mainContact: TravellerData = {
    title: 'Ms',
    firstName: 'Sarah',
    lastName: 'Lee',
    contactNumber: '(65) 91234567',
    email: 'Sarah@gmail.com',
    address: '123 Bukit Batok Ave 5 #01-234 Singapore 111222'
  }

  const rooms: RoomData[] = [
    {
      id: 1,
      travellers: [
        {
          type: 'Adult',
          number: 1,
          data: {
            title: 'Mr',
            firstName: 'John',
            lastName: 'Tan',
            dateOfBirth: '04-06-1990',
            nationality: 'Singaporean',
            passportNumber: 'K123456',
            passportExpiry: '12-12-2028'
          }
        },
        {
          type: 'Child (Half Twin)',
          number: 1,
          data: {
            title: 'Ms',
            firstName: 'Emma',
            lastName: 'Tan',
            dateOfBirth: '04-06-2010',
            nationality: 'Singaporean',
            passportNumber: 'K234567',
            passportExpiry: '12-12-2028'
          }
        },
        {
          type: 'Child (W/O Bed)',
          number: 1,
          data: {
            title: 'Mr',
            firstName: 'Ethan',
            lastName: 'Tan',
            dateOfBirth: '04-06-2015',
            nationality: 'Singaporean',
            passportNumber: 'K345678',
            passportExpiry: '12-12-2028'
          }
        },
        {
          type: 'Infant',
          number: 1,
          data: {
            title: 'Ms',
            firstName: 'Emily',
            lastName: 'Tan',
            dateOfBirth: '04-06-2023',
            nationality: 'Singaporean',
            passportNumber: 'K456789',
            passportExpiry: '12-12-2028'
          }
        }
      ]
    },
    {
      id: 2,
      travellers: [
        {
          type: 'Adult',
          number: 1,
          data: {
            title: 'Ms',
            firstName: 'Daryl',
            lastName: 'Ng',
            dateOfBirth: '04-06-1996',
            nationality: 'Singaporean',
            passportNumber: 'K223345',
            passportExpiry: '12-12-2028'
          }
        },
        {
          type: 'Infant',
          number: 1,
          data: {
            title: 'Ms',
            firstName: 'Sammy',
            lastName: 'Ng',
            dateOfBirth: '04-06-1996',
            nationality: 'Singaporean',
            passportNumber: 'K223345',
            passportExpiry: '12-12-2028'
          }
        }
      ]
    }
  ]

  return (
    <div>
      {/* Title with Icon */}
      <div className="flex items-center gap-[9px] md:gap-[12px] mb-[22px] md:mb-[40px]">
        <Image 
          src="/assets/icons/overview-icon.png"
          alt="Overview"
          width={39}
          height={43}
          className="w-[35px] h-[39px] md:w-[39px] md:h-[43px]"
        />
        <h2 className="font-thunder font-medium text-[32px] md:text-[50px] text-[#242424] uppercase leading-[0.92]">
          Booking Summary
        </h2>
      </div>

      <div className="space-y-[24px] md:space-y-[38px]">
        {/* Main Contact Person - Mobile */}
        <div className="md:hidden bg-[#F4F4F4] rounded-[9px] p-[30px]">
          <h3 className="font-onest font-semibold text-[14px] text-[#242424] uppercase tracking-[-2.5%] mb-[30px]">
            Main Contact Person
          </h3>
          
          {/* 2 Column Table Layout - Label : Value */}
          <div className="space-y-[16px]">
            <div className="flex gap-[10px]">
              <span className="font-onest font-bold text-[13px] text-[#242424] tracking-[-2.5%] w-[140px] flex-shrink-0">Title:</span>
              <span className="font-onest text-[13px] text-[#242424] tracking-[-2.5%] flex-1">{mainContact.title}</span>
            </div>
            <div className="flex gap-[10px]">
              <span className="font-onest font-bold text-[13px] text-[#242424] tracking-[-2.5%] w-[140px] flex-shrink-0">First Name:</span>
              <span className="font-onest text-[13px] text-[#242424] tracking-[-2.5%] flex-1">{mainContact.firstName}</span>
            </div>
            <div className="flex gap-[10px]">
              <span className="font-onest font-bold text-[13px] text-[#242424] tracking-[-2.5%] w-[140px] flex-shrink-0">Last Name:</span>
              <span className="font-onest text-[13px] text-[#242424] tracking-[-2.5%] flex-1">{mainContact.lastName}</span>
            </div>
            <div className="flex gap-[10px]">
              <span className="font-onest font-bold text-[13px] text-[#242424] tracking-[-2.5%] w-[140px] flex-shrink-0">Contact Number:</span>
              <span className="font-onest text-[13px] text-[#242424] tracking-[-2.5%] flex-1">{mainContact.contactNumber}</span>
            </div>
            <div className="flex gap-[10px]">
              <span className="font-onest font-bold text-[13px] text-[#242424] tracking-[-2.5%] w-[140px] flex-shrink-0">Email Address:</span>
              <span className="font-onest text-[13px] text-[#242424] tracking-[-2.5%] flex-1">{mainContact.email}</span>
            </div>
            <div className="flex gap-[10px]">
              <span className="font-onest font-bold text-[13px] text-[#242424] tracking-[-2.5%] w-[140px] flex-shrink-0">Address:</span>
              <span className="font-onest text-[13px] text-[#242424] tracking-[-2.5%] flex-1">{mainContact.address}</span>
            </div>
          </div>
        </div>

        {/* Main Contact Person - Desktop (Table Layout) */}
        <div className="hidden md:block bg-[#F4F4F4] rounded-[25px] p-[60px]">
          <h3 className="font-onest font-semibold text-[20px] text-[#242424] uppercase tracking-[-2.5%] mb-[50px]">
            Main Contact Person
          </h3>
          
          {/* Desktop Table Layout */}
          <div>
            {/* Header Row */}
            <div className="grid grid-cols-[60px_100px_100px_150px_auto] gap-[40px] mb-[20px]">
              <span className="font-onest font-bold text-[18px] text-[#242424] tracking-[-2.5%]">Title</span>
              <span className="font-onest font-bold text-[18px] text-[#242424] tracking-[-2.5%]">First Name</span>
              <span className="font-onest font-bold text-[18px] text-[#242424] tracking-[-2.5%]">Last Name</span>
              <span className="font-onest font-bold text-[18px] text-[#242424] tracking-[-2.5%]">Contact Number</span>
              <span className="font-onest font-bold text-[18px] text-[#242424] tracking-[-2.5%]">Email</span>
            </div>
            
            {/* Values Row */}
            <div className="grid grid-cols-[60px_100px_100px_150px_auto] gap-[40px] mb-[60px]">
              <span className="font-onest text-[18px] text-[#242424] tracking-[-2.5%]">{mainContact.title}</span>
              <span className="font-onest text-[18px] text-[#242424] tracking-[-2.5%]">{mainContact.firstName}</span>
              <span className="font-onest text-[18px] text-[#242424] tracking-[-2.5%]">{mainContact.lastName}</span>
              <span className="font-onest text-[18px] text-[#242424] tracking-[-2.5%]">{mainContact.contactNumber}</span>
              <span className="font-onest text-[18px] text-[#242424] tracking-[-2.5%]">{mainContact.email}</span>
            </div>
            
            {/* Address Section */}
            <div>
              <span className="font-onest font-bold text-[18px] text-[#242424] tracking-[-2.5%] block mb-[20px]">Address</span>
              <span className="font-onest text-[18px] text-[#242424] tracking-[-2.5%]">{mainContact.address}</span>
            </div>
          </div>
        </div>

        {/* Room Details - Mobile */}
        {rooms.map((room) => (
          <div key={room.id} className="md:hidden bg-white rounded-[9px] border border-[#E8E8E8] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.16)] p-[30px]">
            <h3 className="font-onest font-semibold text-[14px] text-[#242424] uppercase tracking-[-2.5%] mb-[30px]">
              Room {room.id}
            </h3>
            
            {/* Travellers */}
            <div className="space-y-[30px]">
              {room.travellers.map((traveller, index) => (
                <div key={index}>
                  <p className="font-onest font-bold text-[13px] text-[#242424] text-left mb-[23px]">
                    {traveller.type}
                  </p>
                  
                  {/* 2 Column Table Layout - Label : Value */}
                  <div className="space-y-[16px]">
                    <div className="flex gap-[10px]">
                      <span className="font-onest font-bold text-[13px] text-[#242424] tracking-[-2.5%] w-[140px] flex-shrink-0">Title:</span>
                      <span className="font-onest text-[13px] text-[#242424] tracking-[-2.5%] flex-1">{traveller.data.title}</span>
                    </div>
                    <div className="flex gap-[10px]">
                      <span className="font-onest font-bold text-[13px] text-[#242424] tracking-[-2.5%] w-[140px] flex-shrink-0">First Name:</span>
                      <span className="font-onest text-[13px] text-[#242424] tracking-[-2.5%] flex-1">{traveller.data.firstName}</span>
                    </div>
                    <div className="flex gap-[10px]">
                      <span className="font-onest font-bold text-[13px] text-[#242424] tracking-[-2.5%] w-[140px] flex-shrink-0">Last Name:</span>
                      <span className="font-onest text-[13px] text-[#242424] tracking-[-2.5%] flex-1">{traveller.data.lastName}</span>
                    </div>
                    <div className="flex gap-[10px]">
                      <span className="font-onest font-bold text-[13px] text-[#242424] tracking-[-2.5%] w-[140px] flex-shrink-0">Date of Birth:</span>
                      <span className="font-onest text-[13px] text-[#242424] tracking-[-2.5%] flex-1">{traveller.data.dateOfBirth}</span>
                    </div>
                    <div className="flex gap-[10px]">
                      <span className="font-onest font-bold text-[13px] text-[#242424] tracking-[-2.5%] w-[140px] flex-shrink-0">Nationality:</span>
                      <span className="font-onest text-[13px] text-[#242424] tracking-[-2.5%] flex-1">{traveller.data.nationality}</span>
                    </div>
                    <div className="flex gap-[10px]">
                      <span className="font-onest font-bold text-[13px] text-[#242424] tracking-[-2.5%] w-[140px] flex-shrink-0">Passport Number:</span>
                      <span className="font-onest text-[13px] text-[#242424] tracking-[-2.5%] flex-1">{traveller.data.passportNumber}</span>
                    </div>
                    <div className="flex gap-[10px]">
                      <span className="font-onest font-bold text-[13px] text-[#242424] tracking-[-2.5%] w-[140px] flex-shrink-0">Expiry Date:</span>
                      <span className="font-onest text-[13px] text-[#242424] tracking-[-2.5%] flex-1">{traveller.data.passportExpiry}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Room Details - Desktop (Table Format) */}
        {rooms.map((room) => (
          <div key={room.id} className="hidden md:block bg-white rounded-[25px] border border-[#E8E8E8] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.16)] p-[60px] overflow-x-auto">
            <h3 className="font-onest font-semibold text-[20px] text-[#242424] uppercase tracking-[-2.5%] mb-[50px]">
              Room {room.id}
            </h3>
            
            <div className="min-w-[750px]">
              {/* Desktop Table Header */}
              <div className="grid grid-cols-[130px_50px_85px_85px_105px_105px_85px_70px] gap-[15px] mb-[30px] font-onest font-bold text-[16px] text-[#242424] tracking-[-2.5%]">
                <div></div>
                <div>Title</div>
                <div>First Name</div>
                <div>Last Name</div>
                <div>Date of Birth</div>
                <div>Nationality</div>
                <div>Passport</div>
                <div>Expiry</div>
              </div>
              
              {/* Travellers Rows */}
              <div className="space-y-[20px]">
                {room.travellers.map((traveller, index) => (
                  <div key={index} className="grid grid-cols-[130px_50px_85px_85px_105px_105px_85px_70px] gap-[15px] font-onest text-[16px] text-[#242424] tracking-[-2.5%] items-center">
                    <div className="font-medium text-[16px]">{traveller.type}</div>
                    <div>{traveller.data.title}</div>
                    <div>{traveller.data.firstName}</div>
                    <div>{traveller.data.lastName}</div>
                    <div>{traveller.data.dateOfBirth}</div>
                    <div>{traveller.data.nationality}</div>
                    <div>{traveller.data.passportNumber}</div>
                    <div>{traveller.data.passportExpiry}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}