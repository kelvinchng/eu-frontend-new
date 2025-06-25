'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { DesktopNav } from '@/components/common/nav/desktop-nav'
import { MobileMenu } from '@/components/common/nav/mobile-menu'
import { Footer } from '@/components/common/footer'

export default function BrochuresPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }
  const brochures = [
    {
      id: '1',
      title: 'Australia',
      dateRange: '(Nov 2024 - Mar 2025)',
      image: '/assets/brochures/australia.jpg'
    },
    {
      id: '2',
      title: 'Exotic & New Zealand',
      dateRange: '(Nov 2024 - Mar 2025)',
      image: '/assets/brochures/exotic-nz.jpg'
    },
    {
      id: '3',
      title: 'China',
      dateRange: '(Nov 2024 - Mar 2025)',
      image: '/assets/brochures/china.jpg'
    },
    {
      id: '4',
      title: 'Japan',
      dateRange: '(Nov 2024 - Mar 2025)',
      image: '/assets/brochures/japan.jpg'
    },
    {
      id: '5',
      title: 'Korea',
      dateRange: '(Nov 2024 - Mar 2025)',
      image: '/assets/brochures/korea.jpg'
    },
    {
      id: '6',
      title: 'Taiwan',
      dateRange: '(Nov 2024 - Mar 2025)',
      image: '/assets/brochures/taiwan.jpg'
    },
    {
      id: '7',
      title: 'Europe & Americas',
      dateRange: '(Nov 2024 - Mar 2025)',
      image: '/assets/brochures/europe-americas.jpg'
    },
    {
      id: '8',
      title: 'Americas',
      dateRange: '(Apr - Oct 2025)',
      image: '/assets/brochures/americas.jpg'
    },
    {
      id: '9',
      title: 'Australia',
      dateRange: '(Nov 2024 - Mar 2025)',
      image: '/assets/brochures/australia-2.jpg'
    },
    {
      id: '10',
      title: 'Europe',
      dateRange: '(Apr - Oct 2025)',
      image: '/assets/brochures/europe.jpg'
    },
    {
      id: '11',
      title: 'Exotic',
      dateRange: '(Apr - Oct 2025)',
      image: '/assets/brochures/exotic.jpg'
    },
    {
      id: '12',
      title: 'Japan',
      dateRange: '(Apr - Oct 2025)',
      image: '/assets/brochures/japan-2.jpg'
    },
    {
      id: '13',
      title: 'Korea',
      dateRange: '(Apr - Oct 2025)',
      image: '/assets/brochures/korea-2.jpg'
    },
    {
      id: '14',
      title: 'Taiwan',
      dateRange: '(Apr - Oct 2025)',
      image: '/assets/brochures/taiwan-2.jpg'
    },
    {
      id: '15',
      title: 'China',
      dateRange: '(Apr - Oct 2025)',
      image: '/assets/brochures/china-2.jpg'
    },
    {
      id: '16',
      title: 'Family Learning Journey',
      dateRange: '(Mar - Dec 2025)',
      image: '/assets/brochures/family.jpg'
    },
    {
      id: '17',
      title: 'Malaysia',
      dateRange: '(Mar - Dec 2025)',
      image: '/assets/brochures/malaysia.jpg'
    }
  ]

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Navigation */}
      <div className="relative z-20 bg-[#242424]">
        <DesktopNav variant="default" />
        {/* Mobile Nav - Full width matching Figma */}
        <nav className="lg:hidden w-full h-[110px] bg-[#242424] flex items-center justify-between px-[20px]">
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

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />

      {/* Content */}
      <main className="bg-white pb-[120px]">
        <div className="flex justify-center px-[34px] md:px-0">
          <div className="w-full max-w-[325px] md:max-w-[1920px] md:px-4 sm:px-8 lg:px-20 xl:px-32 2xl:px-44 3xl:px-[220px]">
            {/* Title and Description */}
            <div className="mt-[35px] md:mt-16 lg:mt-32 mb-[24px] md:mb-16">
              <h1 className="font-thunder font-medium text-[30px] leading-[28px] md:text-4xl lg:text-5xl text-[#242424] mb-[15px] md:mb-8">
                View Our Brochures
              </h1>
              <p className="font-onest text-[13px] leading-[17px] md:text-base lg:text-lg text-[#242424] max-w-4xl">
                Get access to our latest brochures in two different ways: download a digital copy or view them instantly in your browser.
              </p>
            </div>

            {/* Mobile Brochures Grid */}
            <div className="lg:hidden space-y-[24px] mb-[35px]">
              {/* First Row - 2 brochures */}
              <div className="flex gap-[41px]">
                {brochures.slice(0, 2).map((brochure) => (
                  <div key={brochure.id} className="flex-1">
                    <div className="bg-white rounded-[20px] border border-[#E8E8E8] w-[142px] h-[298px] relative">
                      {/* Image Container */}
                      <div className="relative w-[141px] h-[186px] overflow-hidden rounded-t-[20px]">
                        <Image
                          src={brochure.image}
                          alt={`${brochure.title} brochure`}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Title */}
                      <div className="absolute top-[192px] left-0 w-[142px] h-[34px] flex items-center justify-center">
                        <h3 className="font-onest font-bold text-[13px] leading-[17px] text-[#242424] text-center">
                          {brochure.title}
                          <br />
                          {brochure.dateRange}
                        </h3>
                      </div>

                      {/* View Button */}
                      <button className="absolute top-[232px] left-0 w-[141px] h-[30px] bg-[#242424] rounded-[9px] text-white font-onest text-[12px] hover:bg-[#333333] transition-colors">
                        View
                      </button>

                      {/* Download Button */}
                      <button className="absolute top-[268px] left-0 w-[141px] h-[30px] bg-white border border-[#242424] rounded-[9px] text-[#242424] font-onest text-[12px] hover:bg-gray-50 transition-colors">
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Second Row - 2 brochures */}
              <div className="flex gap-[41px]">
                {brochures.slice(2, 4).map((brochure) => (
                  <div key={brochure.id} className="flex-1">
                    <div className="bg-white rounded-[20px] border border-[#E8E8E8] w-[142px] h-[298px] relative">
                      {/* Image Container */}
                      <div className="relative w-[141px] h-[186px] overflow-hidden rounded-t-[20px]">
                        <Image
                          src={brochure.image}
                          alt={`${brochure.title} brochure`}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Title */}
                      <div className="absolute top-[192px] left-0 w-[142px] h-[34px] flex items-center justify-center">
                        <h3 className="font-onest font-bold text-[13px] leading-[17px] text-[#242424] text-center">
                          {brochure.title}
                          <br />
                          {brochure.dateRange}
                        </h3>
                      </div>

                      {/* View Button */}
                      <button className="absolute top-[232px] left-0 w-[141px] h-[30px] bg-[#242424] rounded-[9px] text-white font-onest text-[12px] hover:bg-[#333333] transition-colors">
                        View
                      </button>

                      {/* Download Button */}
                      <button className="absolute top-[268px] left-0 w-[141px] h-[30px] bg-white border border-[#242424] rounded-[9px] text-[#242424] font-onest text-[12px] hover:bg-gray-50 transition-colors">
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Third Row - 2 brochures */}
              <div className="flex gap-[41px]">
                {brochures.slice(4, 6).map((brochure) => (
                  <div key={brochure.id} className="flex-1">
                    <div className="bg-white rounded-[20px] border border-[#E8E8E8] w-[142px] h-[298px] relative">
                      {/* Image Container */}
                      <div className="relative w-[141px] h-[186px] overflow-hidden rounded-t-[20px]">
                        <Image
                          src={brochure.image}
                          alt={`${brochure.title} brochure`}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Title */}
                      <div className="absolute top-[192px] left-0 w-[142px] h-[34px] flex items-center justify-center">
                        <h3 className="font-onest font-bold text-[13px] leading-[17px] text-[#242424] text-center">
                          {brochure.title}
                          <br />
                          {brochure.dateRange}
                        </h3>
                      </div>

                      {/* View Button */}
                      <button className="absolute top-[232px] left-0 w-[141px] h-[30px] bg-[#242424] rounded-[9px] text-white font-onest text-[12px] hover:bg-[#333333] transition-colors">
                        View
                      </button>

                      {/* Download Button */}
                      <button className="absolute top-[268px] left-0 w-[141px] h-[30px] bg-white border border-[#242424] rounded-[9px] text-[#242424] font-onest text-[12px] hover:bg-gray-50 transition-colors">
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Pagination */}
            <div className="lg:hidden flex items-center justify-between mb-[120px]">
              <span className="font-onest text-[13px] leading-[17px] text-[#242424]">
                1 of 3
              </span>
              <div className="flex gap-[6px]">
                <button className="w-[35px] h-[35px] bg-[#F2F2F2] rounded-[4px] flex items-center justify-center">
                  <ChevronLeft className="w-4 h-4 text-[#8C8888]" />
                </button>
                <button className="w-[35px] h-[35px] bg-[#F2F2F2] rounded-[4px] flex items-center justify-center">
                  <ChevronRight className="w-4 h-4 text-[#8C8888]" />
                </button>
              </div>
            </div>

            {/* Desktop Brochures Grid */}
            <div className="hidden lg:block space-y-12 md:space-y-16">
              {/* Group brochures by rows of 5 */}
              {Array.from({ length: Math.ceil(brochures.length / 5) }, (_, rowIndex) => (
                <div key={rowIndex} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 lg:gap-10 xl:gap-12">
                  {brochures.slice(rowIndex * 5, rowIndex * 5 + 5).map((brochure) => (
                    <div
                      key={brochure.id}
                      className="bg-white rounded-[20px] overflow-hidden border border-[#E8E8E8] group"
                    >
                      {/* Image Container */}
                      <div className="relative aspect-[261/337] overflow-hidden">
                        <Image
                          src={brochure.image}
                          alt={`${brochure.title} brochure`}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>

                      {/* Title */}
                      <div className="px-4 py-4 text-center">
                        <h3 className="font-onest font-bold text-base text-[#242424] leading-tight">
                          {brochure.title}
                          <br />
                          <span className="font-onest font-bold text-base text-[#242424]">
                            {brochure.dateRange}
                          </span>
                        </h3>
                      </div>

                      {/* Buttons */}
                      <div className="px-4 pb-4 space-y-2">
                        <button className="w-full h-8 bg-[#242424] rounded-[9px] text-white font-onest text-sm hover:bg-[#333333] transition-colors">
                          View
                        </button>
                        <button className="w-full h-8 bg-white border border-[#242424] rounded-[9px] text-[#242424] font-onest text-sm hover:bg-gray-50 transition-colors">
                          Download
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}