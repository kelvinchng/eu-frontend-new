'use client'

import React, { useState } from 'react'
import { LayoutWithoutHero } from '@/components/layouts/layout-without-hero'
import { TourBreadcrumb } from './components/tour-breadcrumb'
import { TourTitleSection } from './components/tour-title-section'
import { TourImageGallery } from './components/tour-image-gallery'
import { TourTabs } from './components/tour-tabs'
import { TourHighlights } from './components/tour-highlights'
import { TourActionButtons } from './components/tour-action-buttons'
import { TourItinerary } from './components/tour-itinerary'
import { TourTestimonials } from './components/tour-testimonials'
import { TourPhotos } from './components/tour-photos'
import { TourFAQ } from './components/tour-faq'
import { TourBooking } from './components/tour-booking'
import { RelatedTours } from './components/related-tours'

interface TourDetailPageClientProps {
  tour: any
  relatedTours: any[]
}

export function TourDetailPageClient({ tour, relatedTours }: TourDetailPageClientProps) {
  const [activeTab, setActiveTab] = useState('itinerary')
  const [showBooking, setShowBooking] = useState(false)

  const handleBookNow = () => {
    setShowBooking(true)
    // Scroll to booking section
    setTimeout(() => {
      const bookingSection = document.getElementById('booking-section')
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'itinerary':
        return (
          <>
            {/* Tour Highlights Section */}
            <section className="px-[34px] sm:px-8 md:px-[5.73%] lg:px-[7.64%] xl:px-[9.17%] 2xl:px-[11.46%] 3xl:px-[220px] mt-[61px] lg:mt-[65px]">
              <div className="max-w-[1480px] mx-auto">
                <TourHighlights 
                  highlights={tour.highlights}
                />
              </div>
            </section>
            
            {/* Action Buttons */}
            <section className="px-[34px] sm:px-8 md:px-[5.73%] lg:px-[7.64%] xl:px-[9.17%] 2xl:px-[11.46%] 3xl:px-[220px] mt-[60px]">
              <div className="max-w-[1480px] mx-auto">
                <TourActionButtons tourId={tour.id} onBookNow={handleBookNow} />
              </div>
            </section>
            
            {/* Itinerary Content */}
            <section className="px-[34px] sm:px-8 md:px-[5.73%] lg:px-[7.64%] xl:px-[9.17%] 2xl:px-[11.46%] 3xl:px-[220px] mt-[60px]">
              <div className="max-w-[1480px] mx-auto">
                <TourItinerary itinerary={tour.itinerary} />
              </div>
            </section>
          </>
        )
      case 'testimonials':
        return (
          <section className="px-[34px] sm:px-8 md:px-[5.73%] lg:px-[7.64%] xl:px-[9.17%] 2xl:px-[11.46%] 3xl:px-[220px] mt-[61px] lg:mt-[65px]">
            <div className="max-w-[1480px] mx-auto">
              <TourTestimonials testimonials={tour.testimonials} />
            </div>
          </section>
        )
      case 'tour-photos':
        return (
          <section className="px-[34px] sm:px-8 md:px-[5.73%] lg:px-[7.64%] xl:px-[9.17%] 2xl:px-[11.46%] 3xl:px-[220px] mt-[61px] lg:mt-[65px]">
            <div className="max-w-[1480px] mx-auto">
              <TourPhotos photos={tour.tourPhotos} />
            </div>
          </section>
        )
      case 'faq':
        return (
          <section className="px-[34px] sm:px-8 md:px-[5.73%] lg:px-[7.64%] xl:px-[9.17%] 2xl:px-[11.46%] 3xl:px-[220px] mt-[61px] lg:mt-[65px]">
            <div className="max-w-[1480px] mx-auto">
              <TourFAQ faq={tour.faq} />
            </div>
          </section>
        )
      default:
        return (
          <>
            {/* Tour Highlights Section */}
            <section className="px-[34px] sm:px-8 md:px-[5.73%] lg:px-[7.64%] xl:px-[9.17%] 2xl:px-[11.46%] 3xl:px-[220px] mt-[61px] lg:mt-[65px]">
              <div className="max-w-[1480px] mx-auto">
                <TourHighlights 
                  highlights={tour.highlights}
                />
              </div>
            </section>
            
            {/* Action Buttons */}
            <section className="px-[34px] sm:px-8 md:px-[5.73%] lg:px-[7.64%] xl:px-[9.17%] 2xl:px-[11.46%] 3xl:px-[220px] mt-[60px]">
              <div className="max-w-[1480px] mx-auto">
                <TourActionButtons tourId={tour.id} onBookNow={handleBookNow} />
              </div>
            </section>
            
            {/* Itinerary Content */}
            <section className="px-[34px] sm:px-8 md:px-[5.73%] lg:px-[7.64%] xl:px-[9.17%] 2xl:px-[11.46%] 3xl:px-[220px] mt-[60px]">
              <div className="max-w-[1480px] mx-auto">
                <TourItinerary itinerary={tour.itinerary} />
              </div>
            </section>
          </>
        )
    }
  }

  return (
    <LayoutWithoutHero>
      {/* Main Content Container - Centered Responsively */}
      <div className="max-w-[1920px] mx-auto">
        {/* Mobile Breadcrumb */}
        <div className="lg:hidden px-[34px] pt-[22px]">
          <TourBreadcrumb tour={tour} />
        </div>
        
        {/* Title Section & Image Gallery */}
        <section className="px-[34px] sm:px-8 md:px-[5.73%] lg:px-[7.64%] xl:px-[9.17%] 2xl:px-[11.46%] 3xl:px-[220px] pt-[22px] lg:pt-[80px]">
          {/* Desktop: Title and Gallery in Column with 80px gap */}
          <div className="hidden lg:flex lg:flex-col lg:gap-[80px] lg:max-w-[1480px] lg:mx-auto">
            {/* Title Section */}
            <TourTitleSection tour={tour} onBookNow={handleBookNow} />
            
            {/* Image Gallery */}
            <TourImageGallery gallery={tour.gallery} />
          </div>
          
          {/* Mobile: Separate spacing */}
          <div className="lg:hidden">
            <TourTitleSection tour={tour} onBookNow={handleBookNow} />
            <div className="mt-[27px]">
              <TourImageGallery gallery={tour.gallery} />
            </div>
          </div>
        </section>
        
        {/* Show either Tabs & Content OR Booking Section */}
        {!showBooking ? (
          <>
            {/* Tabs Navigation */}
            <section className="px-[34px] sm:px-8 md:px-[5.73%] lg:px-[7.64%] xl:px-[9.17%] 2xl:px-[11.46%] 3xl:px-[220px] mt-[45px] lg:mt-[31px]">
              <div className="max-w-[1480px] mx-auto">
                <TourTabs activeTab={activeTab} onTabChange={setActiveTab} />
              </div>
            </section>
            
            {/* Dynamic Tab Content */}
            {renderTabContent()}
          </>
        ) : (
          /* Booking Section - Replaces tabs and content */
          <section 
            id="booking-section"
            className="px-[34px] sm:px-8 md:px-[5.73%] lg:px-[7.64%] xl:px-[9.17%] 2xl:px-[11.46%] 3xl:px-[220px] mt-[45px] lg:mt-[31px]"
          >
            <div className="max-w-[1480px] mx-auto">
              <TourBooking tourTitle={tour.fullTitle} tourId={tour.id} />
            </div>
          </section>
        )}
        
        {/* Related Tours */}
        <section className="px-[34px] sm:px-8 md:px-[5.73%] lg:px-[7.64%] xl:px-[9.17%] 2xl:px-[11.46%] 3xl:px-[220px] mt-[61px] lg:mt-[80px] pb-[80px]">
          <div className="max-w-[1480px] mx-auto">
            <RelatedTours tours={relatedTours} />
          </div>
        </section>
      </div>
    </LayoutWithoutHero>
  )
}