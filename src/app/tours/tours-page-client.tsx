'use client'

import React, { useState } from 'react'
import { DesktopNav } from '@/components/common/nav/desktop-nav'
import { DesktopScrolledNav } from '@/components/common/nav/desktop-scrolled-nav'
import { MobileNav } from '@/components/common/nav/mobile-nav'
import { MobileScrolledNav } from '@/components/common/nav/mobile-scrolled-nav'
import { MobileMenu } from '@/components/common/nav/mobile-menu'
import { Footer } from '@/components/common/footer'
import { ToursSearchFilter } from '@/components/common/tours-search-filter'
import { ToursListingGrid } from '@/components/common/tours-listing-grid'
import { ToursPagination, ToursPaginationMobile } from '@/components/common/tours-pagination'
import { ToursHero, ToursHeroMobile } from '@/components/common/hero/tours-hero'
import { WhatsAppButton } from '@/components/common/whatsapp-button'

interface Tour {
  id: string
  title: string
  description: string
  price: string
  imageUrl: string
  tags: string[]
  badge?: string
}

interface SearchFilters {
  destination: string
  from: string
  to: string
  holidayType: string
  duration: string
  sortBy: string
}

interface ToursPageClientProps {
  tours: Tour[]
}

export function ToursPageClient({ tours }: ToursPageClientProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [filteredTours, setFilteredTours] = useState(tours)
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  
  const toursPerPage = 6
  const totalPages = Math.ceil(filteredTours.length / toursPerPage)
  
  // Calculate tours to display for current page
  const startIndex = (currentPage - 1) * toursPerPage
  const endIndex = startIndex + toursPerPage
  const currentTours = filteredTours.slice(startIndex, endIndex)

  const handleSearch = (filters: SearchFilters) => {
    setIsLoading(true)
    
    // Simulate API call delay
    setTimeout(() => {
      let filtered = [...tours]
      
      // Filter by destination
      if (filters.destination) {
        filtered = filtered.filter(tour => 
          tour.title.toLowerCase().includes(filters.destination.toLowerCase())
        )
      }
      
      // Filter by holiday type
      if (filters.holidayType) {
        filtered = filtered.filter(tour => 
          tour.tags.some(tag => 
            tag.toLowerCase().includes(filters.holidayType.toLowerCase())
          )
        )
      }
      
      // Sort results
      if (filters.sortBy) {
        switch (filters.sortBy) {
          case 'price-low':
            filtered.sort((a, b) => {
              const priceA = parseFloat(a.price.replace(/[^\d.]/g, ''))
              const priceB = parseFloat(b.price.replace(/[^\d.]/g, ''))
              return priceA - priceB
            })
            break
          case 'price-high':
            filtered.sort((a, b) => {
              const priceA = parseFloat(a.price.replace(/[^\d.]/g, ''))
              const priceB = parseFloat(b.price.replace(/[^\d.]/g, ''))
              return priceB - priceA
            })
            break
          case 'duration':
            filtered.sort((a, b) => {
              const durationA = parseInt(a.title.match(/\d+/)?.[0] || '0')
              const durationB = parseInt(b.title.match(/\d+/)?.[0] || '0')
              return durationA - durationB
            })
            break
          default:
            // Keep original order for relevance
            break
        }
      }
      
      setFilteredTours(filtered)
      setCurrentPage(1) // Reset to first page when filtering
      setIsLoading(false)
    }, 500)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Scroll to top of listings when page changes
    document.getElementById('tours-listings')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start' 
    })
  }

  return (
    <>
      {/* Scrolled Navigation Components */}
      <DesktopScrolledNav />
      <MobileScrolledNav onMenuClick={() => setMobileMenuOpen(true)} />
      
      <main>
        {/* Hero Section with Navigation Overlay */}
        <div className="relative">
          {/* Navigation - Positioned absolutely over hero */}
          <div className="absolute top-0 left-0 right-0 z-20">
            <DesktopNav variant="overlay" />
            <MobileNav onMenuClick={() => setMobileMenuOpen(true)} />
          </div>
          
          {/* Hero Components - Desktop and Mobile */}
          <ToursHero />
          <ToursHeroMobile />
        </div>

        {/* Filter Section */}
        <section className="py-[42px] px-[33.82px]">
          <ToursSearchFilter onSearch={handleSearch} />
        </section>

        {/* Tours Listings Section */}
        <section id="tours-listings" className="px-[33.82px] pb-[53px]">
          <ToursListingGrid 
            tours={currentTours}
            totalCount={filteredTours.length}
            isLoading={isLoading}
            className="mb-[48px]"
          />
          
          {/* Pagination */}
          {totalPages > 1 && !isLoading && (
            <>
              {/* Desktop Pagination */}
              <div className="hidden lg:block">
                <ToursPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                  className="mb-[64px]"
                />
              </div>
              
              {/* Mobile Pagination */}
              <div className="lg:hidden">
                <ToursPaginationMobile
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                  className="mb-[32px]"
                />
              </div>
            </>
          )}
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