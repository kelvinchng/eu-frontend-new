'use client'

import React from 'react'
import { LayoutWithHero } from '@/components/layouts/layout-with-hero'
import { CountryHero, CountryHeroMobile } from '@/components/common/hero/country-hero'
import { CountryBackground, CountryBackgroundMobile } from '@/components/common/country-background'
import { CountryTourListings, CountryTourListingsMobile } from '@/components/common/country-tour-listings'
import { ViewMoreCountries, ViewMoreCountriesMobile } from '@/components/common/view-more-countries'

interface CountryData {
  name: string
  description: string
  backgroundImages: string[]
  heroImage: string
  tours: Array<{
    id: string
    title: string
    description: string
    price: string
    image: string
    tags: string[]
    badge?: string
    href?: string
  }>
}

interface CountryInfo {
  id: string
  name: string
  tourCount: number
  imageUrl: string
  slug: string
}

interface CountryPageClientProps {
  country: CountryData
  otherCountries: CountryInfo[]
}

export function CountryPageClient({ country, otherCountries }: CountryPageClientProps) {
  const heroContent = (
    <>
      <CountryHero 
        countryName={country.name}
        backgroundImage={country.heroImage}
      />
      <CountryHeroMobile 
        countryName={country.name}
        backgroundImage={country.heroImage}
      />
    </>
  )

  return (
    <LayoutWithHero hero={heroContent} enableScrolledNav={true}>
      {/* Country Background Section */}
      <section className="lg:py-[79px] py-[41px]">
        <CountryBackground 
          countryName={country.name}
          description={country.description}
          images={country.backgroundImages}
        />
        <CountryBackgroundMobile 
          countryName={country.name}
          description={country.description}
          images={country.backgroundImages}
        />
      </section>

      {/* Tour Listings Section */}
      <section className="lg:py-[83px] py-[57px]">
        <CountryTourListings 
          countryName={country.name}
          tours={country.tours}
          totalTours={87}
        />
        <CountryTourListingsMobile 
          countryName={country.name}
          tours={country.tours.slice(0, 3)} // Show first 3 on mobile
          totalTours={87}
        />
      </section>

      {/* View More Countries Section */}
      <section className="lg:py-[75px] py-[58px]">
        <ViewMoreCountries countries={otherCountries} />
        <ViewMoreCountriesMobile countries={otherCountries} />
      </section>
    </LayoutWithHero>
  )
}