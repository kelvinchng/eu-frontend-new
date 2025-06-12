'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface Country {
  id: string
  name: string
  tourCount: number
  imageUrl: string
  slug: string
}

interface ViewMoreCountriesProps {
  countries: Country[]
  className?: string
}

export function ViewMoreCountries({ countries, className }: ViewMoreCountriesProps) {
  // Split countries into two rows of 4
  const firstRow = countries.slice(0, 4)
  const secondRow = countries.slice(4, 8)

  return (
    <section className={cn("w-full max-w-[1480px] mx-auto", className)}>
      {/* Title + Subtitle */}
      <div className="text-center mb-[75px]">
        <h2 className="font-thunder font-medium text-[50px] leading-[0.92] text-[#242424] mb-[30px]">
          View More Countries
        </h2>
        <p className="font-onest text-[25px] leading-[1.275] tracking-[-2.5%] text-[#242424] max-w-[1042px] mx-auto">
          Join thousands of happy travellers who trust EU Holidays to make their journey unforgettable.
        </p>
      </div>

      {/* First Row of Countries */}
      <div className="flex justify-center items-center gap-[105px] mb-[66px] px-[183px]">
        {firstRow.map((country) => (
          <CountryCard key={country.id} country={country} />
        ))}
      </div>

      {/* Second Row of Countries */}
      <div className="flex justify-center items-center gap-[105px]">
        {secondRow.map((country) => (
          <CountryCard key={country.id} country={country} />
        ))}
      </div>
    </section>
  )
}

// Country Card Component
function CountryCard({ country }: { country: Country }) {
  return (
    <Link 
      href={`/explore/${country.slug}`}
      className="group flex flex-col items-center transition-transform hover:scale-105"
    >
      {/* Country Image */}
      <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden mb-[48.61px]">
        <Image
          src={country.imageUrl}
          alt={country.name}
          fill
          className="object-cover transition-transform group-hover:scale-110"
        />
      </div>

      {/* Country Name */}
      <h3 className="font-thunder text-[50px] leading-[0.92] text-[#242424] text-center mb-[12px]">
        {country.name}
      </h3>

      {/* Tour Count */}
      <p className="font-onest font-medium text-[20px] leading-[1.275] text-[#242424] text-center">
        {country.tourCount} Tours
      </p>
    </Link>
  )
}

// Mobile version
export function ViewMoreCountriesMobile({ countries, className }: ViewMoreCountriesProps) {
  return (
    <section className={cn("lg:hidden w-full max-w-[343px] mx-auto", className)}>
      {/* Title + Subtitle */}
      <div className="text-center mb-[67px]">
        <h2 className="font-thunder font-medium text-[32px] leading-[0.92] text-[#242424] mb-[20px]">
          View More Countries
        </h2>
        <p className="font-onest text-[13px] leading-[1.275] tracking-[-2.5%] text-[#242424]">
          Join thousands of happy travellers who trust EU Holidays to make their journey unforgettable.
        </p>
      </div>

      {/* Countries Grid - 2 columns */}
      <div className="grid grid-cols-2 gap-x-[24px] gap-y-[49px] px-[7px]">
        {countries.map((country) => (
          <CountryCardMobile key={country.id} country={country} />
        ))}
      </div>
    </section>
  )
}

// Mobile Country Card Component
function CountryCardMobile({ country }: { country: Country }) {
  return (
    <Link 
      href={`/explore/${country.slug}`}
      className="group flex flex-col items-center transition-transform hover:scale-105"
    >
      {/* Country Image */}
      <div className="relative w-[92px] h-[92px] rounded-full overflow-hidden mb-[19.61px]">
        <Image
          src={country.imageUrl}
          alt={country.name}
          fill
          className="object-cover transition-transform group-hover:scale-110"
        />
      </div>

      {/* Country Name */}
      <h3 className="font-thunder font-medium text-[20px] leading-[0.92] text-[#242424] text-center mb-[3px]">
        {country.name}
      </h3>

      {/* Tour Count */}
      <p className="font-onest font-medium text-[13px] leading-[1.275] text-[#242424] text-center">
        {country.tourCount} Tours
      </p>
    </Link>
  )
}