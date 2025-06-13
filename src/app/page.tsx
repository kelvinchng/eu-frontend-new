'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { DesktopNav } from '@/components/common/nav/desktop-nav'
import { DesktopScrolledNav } from '@/components/common/nav/desktop-scrolled-nav'
import { MobileNav } from '@/components/common/nav/mobile-nav'
import { MobileScrolledNav } from '@/components/common/nav/mobile-scrolled-nav'
import { MobileMenu } from '@/components/common/nav/mobile-menu'
import { Footer } from '@/components/common/footer'
import { Hero } from '@/components/common/hero/hero'
import { HeroMobile } from '@/components/common/hero/hero-mobile'
import { Section } from '@/components/common/layout/container'
import { TourCard } from '@/components/ui/cards/tour-card'
import { DestinationCard } from '@/components/ui/cards/destination-card'
import { ThemeCard } from '@/components/ui/cards/theme-card'
import { Button } from '@/components/ui/button'
import { SeasonalDealsSection } from '@/components/common/seasonal-deals'
import { FeaturedToursSection } from '@/components/common/featured-tours'
import { ExploreDestinationsSection } from '@/components/common/explore-destinations'
import { ThemedJourneysSection } from '@/components/common/themed-journeys'
import { TravelWithEU } from '@/components/common/travel-with-eu'
import { YourNextAdventure } from '@/components/common/your-next-adventure'
import { WhatsAppButton } from '@/components/common/whatsapp-button'
import { InstagramSection } from '@/components/common/instagram-section'
import { FooterBanner } from '@/components/common/footer-banner'
import { TourGrid, CountryGrid } from '@/components/common/layout/grid'
import { featuredTours, destinations, themedJourneys, instagramPosts } from '@/lib/mock-data'
import { cn } from '@/lib/utils'

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Scrolled Navigation Components - Only visible when scrolled */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <DesktopScrolledNav />
        <MobileScrolledNav onMenuClick={() => setMobileMenuOpen(true)} />
      </div>
      
      <main>
        {/* Hero Section with Overlay Nav */}
        <div className="relative">
          {/* Navigation - Positioned absolutely over hero */}
          <div className="absolute top-0 left-0 right-0 z-20">
            <DesktopNav variant="overlay" />
            <MobileNav onMenuClick={() => setMobileMenuOpen(true)} />
          </div>
          
          {/* Hero Components - Desktop and Mobile */}
          <Hero />
          <HeroMobile />
        </div>
        
        {/* Seasonal Deals + Promotions Section */}
        <SeasonalDealsSection className="py-16 lg:py-20" />
        
        {/* Featured Tours Section */}
        <FeaturedToursSection tours={featuredTours} className="py-16 lg:py-20" />

        {/* Explore by Destinations */}
        <ExploreDestinationsSection destinations={destinations} className="py-16 lg:py-20" />

        {/* Themed Journeys */}
        <ThemedJourneysSection journeys={themedJourneys} className="py-16 lg:py-20" />

        {/* Travel with EU Section */}
        <TravelWithEU className="py-20 lg:py-24 xl:py-28 2xl:py-32" />

        {/* Your Next Adventure Section */}
        <YourNextAdventure className="py-16 lg:py-20" />

        {/* Instagram Section */}
        <InstagramSection className="py-16 lg:py-20" />

        {/* Footer Banner Section */}
        <FooterBanner />
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