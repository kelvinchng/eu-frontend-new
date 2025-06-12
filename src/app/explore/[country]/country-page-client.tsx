'use client'

import React, { useState } from 'react'
import { DesktopNav } from '@/components/common/nav/desktop-nav'
import { DesktopScrolledNav } from '@/components/common/nav/desktop-scrolled-nav'
import { MobileNav } from '@/components/common/nav/mobile-nav'
import { MobileScrolledNav } from '@/components/common/nav/mobile-scrolled-nav'
import { MobileMenu } from '@/components/common/nav/mobile-menu'
import { Footer } from '@/components/common/footer'
import { CountryHero, CountryHeroMobile } from '@/components/common/hero/country-hero'
import { CountryBackground, CountryBackgroundMobile } from '@/components/common/country-background'
import { CountryTourListings, CountryTourListingsMobile } from '@/components/common/country-tour-listings'
import { ViewMoreCountries, ViewMoreCountriesMobile } from '@/components/common/view-more-countries'
import { WhatsAppButton } from '@/components/common/whatsapp-button'

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
    imageUrl: string
    tags: string[]
    badge?: string
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Scrolled Navigation Components */}
      <DesktopScrolledNav />
      <MobileScrolledNav onMenuClick={() => setMobileMenuOpen(true)} />
      
      <main>
        {/* Hero Section with Overlay Nav */}
        <div className="relative">
          {/* Navigation - Positioned absolutely over hero */}
          <div className="absolute top-0 left-0 right-0 z-20">
            <DesktopNav variant="overlay" />
            <MobileNav onMenuClick={() => setMobileMenuOpen(true)} />
          </div>
          
          {/* Hero Components - Desktop and Mobile */}
          <CountryHero 
            countryName={country.name}
            backgroundImage={country.heroImage}
          />
          <CountryHeroMobile 
            countryName={country.name}
            backgroundImage={country.heroImage}
          />
        </div>
        
        {/* Country Background Section */}
        <section className="py-[79px]">
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
        <section className="py-[83px]">
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
        <section className="py-[75px]">
          <ViewMoreCountries countries={otherCountries} />
          <ViewMoreCountriesMobile countries={otherCountries} />
        </section>
      </main>

      <Footer />
      
      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
      
      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
      />
    </>
  )
}