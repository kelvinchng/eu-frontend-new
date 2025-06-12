'use client'

import React, { useState, useEffect } from 'react'
import { DesktopNav } from '@/components/common/nav/desktop-nav'
import { DesktopScrolledNav } from '@/components/common/nav/desktop-scrolled-nav'
import { MobileNav } from '@/components/common/nav/mobile-nav'
import { MobileScrolledNav } from '@/components/common/nav/mobile-scrolled-nav'
import { MobileMenu } from '@/components/common/nav/mobile-menu'
import { Footer } from '@/components/common/footer'
import { WhatsAppButton } from '@/components/common/whatsapp-button'
import { TourBreadcrumb } from './components/tour-breadcrumb'
import { TourTitleSection } from './components/tour-title-section'
import { TourImageGallery } from './components/tour-image-gallery'
import { TourTabs } from './components/tour-tabs'
import { TourHighlights } from './components/tour-highlights'
import { TourItinerary } from './components/tour-itinerary'
import { TourTestimonials } from './components/tour-testimonials'
import { TourPhotos } from './components/tour-photos'
import { TourFAQ } from './components/tour-faq'
import { RelatedTours } from './components/related-tours'

interface TourDetailPageClientProps {
  tour: any
  relatedTours: any[]
}

export function TourDetailPageClient({ tour, relatedTours }: TourDetailPageClientProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('itinerary')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const renderTabContent = () => {
    switch (activeTab) {
      case 'itinerary':
        return <TourItinerary itinerary={tour.itinerary} />
      case 'testimonials':
        return <TourTestimonials testimonials={tour.testimonials} />
      case 'tour-photos':
        return <TourPhotos photos={tour.tourPhotos} />
      case 'faq':
        return <TourFAQ faq={tour.faq} />
      default:
        return <TourItinerary itinerary={tour.itinerary} />
    }
  }

  return (
    <>
      {/* Both navigations rendered, controlled by opacity */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <DesktopScrolledNav />
        <MobileScrolledNav onMenuClick={() => setMobileMenuOpen(true)} />
      </div>
      
      <main>
        {/* Regular Navigation */}
        <div className={`sticky top-0 z-40 transition-opacity duration-300 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <DesktopNav />
          <MobileNav onMenuClick={() => setMobileMenuOpen(true)} />
        </div>
        
        {/* Main Content - No max width constraint */}
        <div className="w-full">
          {/* Mobile Breadcrumb */}
          <div className="lg:hidden px-[34px] pt-[22px]">
            <TourBreadcrumb tour={tour} />
          </div>
          
          {/* Title Section & Image Gallery */}
          <section className="px-[34px] lg:px-[220px] pt-[22px] lg:pt-[80px]">
            {/* Desktop: Title and Gallery in Column with 80px gap */}
            <div className="hidden lg:flex lg:flex-col lg:gap-[80px] lg:w-[1480px] lg:mx-auto">
              {/* Title Section */}
              <TourTitleSection tour={tour} />
              
              {/* Image Gallery */}
              <TourImageGallery gallery={tour.gallery} />
            </div>
            
            {/* Mobile: Separate spacing */}
            <div className="lg:hidden">
              <TourTitleSection tour={tour} />
              <div className="mt-[27px]">
                <TourImageGallery gallery={tour.gallery} />
              </div>
            </div>
          </section>
          
          {/* Tabs Navigation */}
          <section className="px-[34px] lg:px-[220px] mt-[45px] lg:mt-[31px]">
            <TourTabs activeTab={activeTab} onTabChange={setActiveTab} />
          </section>
          
          {/* Content Area */}
          <section className="px-[34px] lg:px-[220px] mt-[61px] lg:mt-[65px]">
            {/* Desktop: Two Column Layout */}
            <div className="hidden lg:flex gap-[26px]">
              {/* Left Column - Tab Content */}
              <div className="flex-1">
                {renderTabContent()}
              </div>
              
              {/* Right Column - Tour Highlights */}
              <div className="w-[741px]">
                <TourHighlights 
                  highlights={tour.highlights}
                  inclusions={tour.inclusions}
                  exclusions={tour.exclusions}
                  price={tour.price}
                  originalPrice={tour.originalPrice}
                />
              </div>
            </div>
            
            {/* Mobile: Stacked Layout */}
            <div className="lg:hidden">
              {renderTabContent()}
            </div>
          </section>
          
          {/* Related Tours */}
          <section className="px-[34px] lg:px-[220px] mt-[61px] lg:mt-[80px]">
            <RelatedTours tours={relatedTours} />
          </section>
        </div>
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