'use client'

import React, { useState } from 'react'
import { LayoutWithoutHero } from '@/components/layouts/layout-without-hero'
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
  const [activeTab, setActiveTab] = useState('itinerary')

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
        <section className="px-[34px] sm:px-8 md:px-[5.73%] lg:px-[7.64%] xl:px-[9.17%] 2xl:px-[11.46%] 3xl:px-[220px] mt-[45px] lg:mt-[31px]">
          <div className="max-w-[1480px] mx-auto">
            <TourTabs activeTab={activeTab} onTabChange={setActiveTab} />
          </div>
        </section>
        
        {/* Content Area */}
        <section className="px-[34px] sm:px-8 md:px-[5.73%] lg:px-[7.64%] xl:px-[9.17%] 2xl:px-[11.46%] 3xl:px-[220px] mt-[61px] lg:mt-[65px]">
          <div className="max-w-[1480px] mx-auto">
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
          </div>
        </section>
        
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