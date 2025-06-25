'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface ContactOffice {
  name: string
  address: string
  email: string
  phone: string
  whatsapp?: string
  workingHours: string
}

interface ContactInfoProps {
  offices?: ContactOffice[]
  className?: string
}

export function ContactInfo({
  offices,
  className
}: ContactInfoProps) {
  const defaultOffices: ContactOffice[] = [
    {
      name: 'EU Holidays Pte Ltd',
      address: 'Suntec Singapore Convention & Exhibition Centre, 1 Raffles Boulevard Level 2 Crescent 2 (beside Link Bridge to Marina Square / Opposite Don Don Donki #02-379-387), Singapore 039593',
      email: 'sales@euholidays.com.sg',
      phone: '+65 6958 8888 (9AM - 12MN) / +65 6307 7060',
      whatsapp: '+65 8901 2988',
      workingHours: 'Monday to Friday 9.30AM – 8:30PM. Saturdays to Sundays & Public Holidays 11.00AM - 8.00PM.'
    },
    {
      name: 'EU Asia Holidays Pte Ltd',
      address: 'Suntec Singapore Convention & Exhibition Centre, 1 Raffles Boulevard Level 2 Crescent 2 (beside Link Bridge to Marina Square / Opposite Don Don Donki #02-379-387), Singapore 039593',
      email: 'euasia.com.sg',
      phone: '+65 6958 8888',
      whatsapp: '+65 8901 2988',
      workingHours: 'Monday to Friday 10.00AM – 6:00PM. Saturdays to Sundays closed.'
    },
    {
      name: 'Corporate Travel Management',
      address: 'Suntec Singapore Convention & Exhibition Centre, 1 Raffles Boulevard Level 2 Crescent 2 (beside Link Bridge to Marina Square / Opposite Don Don Donki #02-379-387), Singapore 039593',
      email: 'corporate@euholidays.com.sg',
      phone: '+65 6958 8881',
      workingHours: 'Monday to Friday 10:00AM – 6:00PM. Saturdays to Sundays closed.'
    },
    {
      name: 'EU MICE Office',
      address: 'Suntec Singapore Convention & Exhibition Centre, 1 Raffles Boulevard Level 2 Crescent 2 (beside Link Bridge to Marina Square / Opposite Don Don Donki #02-379-387), Singapore 039593',
      email: 'mice@euholidays.com.sg',
      phone: '+65 6958 8883',
      workingHours: 'Monday to Friday 10:00AM – 6:00PM. Saturdays to Sundays closed.'
    },
    {
      name: 'EU Vacations Sdn.Bhd',
      address: 'Suntec Singapore Convention & Exhibition Centre, 1 Raffles Boulevard Level 2 Crescent 2 (beside Link Bridge to Marina Square / Opposite Don Don Donki #02-379-387), Singapore 039593',
      email: 'sales@euholidays.com.sg',
      phone: '+65 6958 8888',
      whatsapp: '+65 8901 2988',
      workingHours: 'Monday to Friday 9.30AM – 8:30PM. Saturdays to Sundays & Public Holiday 11:00AM to 8:00PM.'
    }
  ]

  const displayOffices = offices || defaultOffices

  return (
    <div className={cn("space-y-[61px]", className)}>
      {displayOffices.map((office, index) => (
        <div key={index} className="space-y-[20px]">
          {/* Office Name */}
          <h3 className="font-thunder font-medium text-[35px] leading-[32px] text-[#242424]">
            {office.name}
          </h3>
          
          {/* Contact Details */}
          <div className="space-y-[21px]">
            {/* Phone */}
            <div>
              <span className="font-onest text-[18px] leading-[23px] text-black">
                Tel: {office.phone}
              </span>
            </div>

            {/* WhatsApp */}
            {office.whatsapp && (
              <div>
                <span className="font-onest text-[18px] leading-[23px] text-black">
                  Whatsapp: {office.whatsapp}
                </span>
              </div>
            )}

            {/* Email */}
            <div>
              <span className="font-onest text-[18px] leading-[23px] text-black">
                Email: {office.email}
              </span>
            </div>

            {/* Address */}
            <div>
              <span className="font-onest text-[18px] leading-[23px] text-black">
                Address: {office.address}
              </span>
            </div>

            {/* Working Hours */}
            <div>
              <span className="font-onest text-[18px] leading-[23px] text-black">
                Working Hours: {office.workingHours}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}