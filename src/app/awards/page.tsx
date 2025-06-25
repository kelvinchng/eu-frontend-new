'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { DesktopNav } from '@/components/common/nav/desktop-nav'
import { MobileMenu } from '@/components/common/nav/mobile-menu'
import { Footer } from '@/components/common/footer'

interface Award {
  id: string
  image: string
  year: string
  fitType?: 'cover' | 'contain'
}

export default function AwardsPage() {
  const [selectedYear, setSelectedYear] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // Mobile: 6 awards per page (2x3 grid), Desktop: 15 awards per page (5x3 grid)
  const awardsPerPage = 15

  const awards: Award[] = [
    { id: '1', image: '/assets/awards/award-1.png', year: '2023' },
    { id: '2', image: '/assets/awards/award-2.png', year: '2023' },
    { id: '3', image: '/assets/awards/award-3.png', year: '2023' },
    { id: '4', image: '/assets/awards/award-4.png', year: '2023' },
    { id: '5', image: '/assets/awards/award-5.png', year: '2023' },
    { id: '6', image: '/assets/awards/award-6.png', year: '2022' },
    { id: '7', image: '/assets/awards/award-7.png', year: '2022' },
    { id: '8', image: '/assets/awards/award-8.png', year: '2022', fitType: 'contain' },
    { id: '9', image: '/assets/awards/award-9.png', year: '2022', fitType: 'contain' },
    { id: '10', image: '/assets/awards/award-10.png', year: '2022', fitType: 'contain' },
    { id: '11', image: '/assets/awards/award-11.png', year: '2019', fitType: 'contain' },
    { id: '12', image: '/assets/awards/award-12.png', year: '2019', fitType: 'contain' },
    { id: '13', image: '/assets/awards/award-13.png', year: '2019', fitType: 'contain' },
    { id: '14', image: '/assets/awards/award-14.png', year: '2017', fitType: 'contain' },
    { id: '15', image: '/assets/awards/award-15.png', year: '2017', fitType: 'contain' },
  ]

  const years = ['All', '2025', '2024', '2023', '2022', '2021', '2020']

  const filteredAwards = selectedYear === 'All' 
    ? awards 
    : awards.filter(award => award.year === selectedYear)

  // Use fixed awards per page for now (can be adjusted with proper responsive hooks later)
  const totalPages = Math.ceil(filteredAwards.length / awardsPerPage)
  const startIndex = (currentPage - 1) * awardsPerPage
  const currentAwards = filteredAwards.slice(startIndex, startIndex + awardsPerPage)

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative w-full h-[409px] md:h-screen">
        <Image
          src="/assets/backgrounds/awards-banner-bg.jpg"
          alt="Awards Banner"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/71 via-transparent to-black/75" />
        
        {/* Navigation - Positioned absolutely over hero */}
        <div className="absolute top-0 left-0 right-0 z-20">
          <DesktopNav variant="overlay" />
          {/* Mobile Nav - Full width overlay */}
          <nav className="lg:hidden w-full h-[110px] bg-transparent flex items-center justify-between px-[20px] absolute top-[39px]">
            <Link href="/" className="flex-shrink-0">
              <div className="relative w-[71.52px] h-[50.33px]">
                <Image
                  src="/assets/logos/eu-logo.png"
                  alt="EU Holidays"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            <button
              onClick={toggleMobileMenu}
              className="w-[17.73px] h-[11.82px] flex flex-col justify-between"
              aria-label="Open menu"
            >
              <span className="block w-full h-[1.7px] bg-white" />
              <span className="block w-full h-[1.7px] bg-white" />
              <span className="block w-full h-[1.7px] bg-white" />
            </button>
          </nav>
        </div>
        
        {/* Banner Text */}
        <div className="absolute bottom-[75px] left-[34px] md:bottom-44 md:left-56">
          <h1 className="font-thunder text-[46px] leading-[42px] md:text-8xl md:leading-none tracking-wide text-white">
            Awards
          </h1>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />

      {/* Main Content */}
      <main className="bg-white">
        <div className="flex justify-center px-[34px] md:px-0">
          <div className="w-full max-w-[325px] md:max-w-7xl md:px-4 sm:px-8 lg:px-16">
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-[6px] md:gap-7 mt-[35px] md:mt-16 mb-[16px] md:mb-32">
              {years.slice(0, 4).map((year) => (
                <button
                  key={year}
                  onClick={() => {
                    setSelectedYear(year)
                    setCurrentPage(1)
                  }}
                  className={`${year === 'All' ? 'w-[69px] h-[36px]' : 'w-[69px] h-[32px]'} md:w-24 md:h-14 rounded-lg border font-onest text-[13px] md:text-lg leading-[17px] md:leading-6 transition-colors ${
                    selectedYear === year
                      ? 'bg-[#242424] border-[#242424] text-white'
                      : 'bg-white border-[#242424] text-[#242424] hover:bg-gray-50'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>

            {/* Second Row of Filter Tabs - Mobile */}
            <div className="flex items-center gap-[6px] mb-[28px] md:hidden">
              {years.slice(4).map((year) => (
                <button
                  key={year}
                  onClick={() => {
                    setSelectedYear(year)
                    setCurrentPage(1)
                  }}
                  className={`w-[69px] h-[32px] rounded-lg border font-onest text-[13px] leading-[17px] transition-colors ${
                    selectedYear === year
                      ? 'bg-[#242424] border-[#242424] text-white'
                      : 'bg-white border-[#242424] text-[#242424] hover:bg-gray-50'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>

            {/* Awards Grid */}
            <div className="grid grid-cols-2 gap-[16px] md:grid-cols-5 md:gap-12 mb-[28px] md:mb-48">
              {currentAwards.map((award) => (
                <div key={award.id} className="relative bg-white rounded-[9px] md:rounded-lg shadow-xl w-[149px] h-[162px] md:w-[220px] md:h-[260px]">
                  {/* Award Image positioned exactly as in Figma */}
                  <div className="absolute left-[22px] top-[6px] w-[105px] h-[149px] md:left-[30px] md:top-[15px] md:w-[160px] md:h-[230px]">
                    <Image
                      src={award.image}
                      alt={`Award ${award.id}`}
                      fill
                      className={award.fitType === 'contain' ? 'object-contain' : 'object-cover'}
                      sizes="(max-width: 768px) 149px, (max-width: 1200px) 220px, 20vw"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between md:justify-end gap-2 mb-[89px] md:mb-40">
                {/* Page Info */}
                <span className="font-onest text-[13px] md:text-lg leading-[17px] md:leading-6 text-[#242424] md:mr-28">
                  {currentPage} of {totalPages}
                </span>

                <div className="flex gap-[6px] md:gap-2">
                  {/* Previous Buttons */}
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="w-[35px] h-[35px] md:w-9 md:h-9 bg-gray-100 rounded flex items-center justify-center disabled:opacity-50"
                  >
                    <svg width="4.5" height="9.56" viewBox="0 0 4.5 9.56" fill="none">
                      <path d="M0 0L0 9.56" stroke="#8C8888" strokeWidth="1.6"/>
                    </svg>
                  </button>

                  {/* Next Buttons */}
                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="w-[35px] h-[35px] md:w-9 md:h-9 bg-gray-100 rounded flex items-center justify-center disabled:opacity-50"
                  >
                    <svg width="4.5" height="9.56" viewBox="0 0 4.5 9.56" fill="none">
                      <path d="M4.5 0L4.5 9.56" stroke="#8C8888" strokeWidth="1.6"/>
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

