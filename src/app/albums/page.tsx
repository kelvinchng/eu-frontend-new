'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react'
import { DesktopNav } from '@/components/common/nav/desktop-nav'
import { MobileMenu } from '@/components/common/nav/mobile-menu'
import { Footer } from '@/components/common/footer'

interface Album {
  id: string
  image: string
  date: string
  tourManager: string
  destination: string
}

export default function AlbumsPage() {
  const [selectedDestination, setSelectedDestination] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const destinations = [
    'All', 'Switzerland', 'Norway', 'Iceland', 'Turkey', 
    'Japan', 'Korea', 'Taiwan', 'Vietnam',
    'United Kingdom', 'Netherlands', 'Belgium', 'Luxembourg',
    'Spain', 'Greece'
  ]

  const albums: Album[] = [
    {
      id: '1',
      image: '/assets/albums/switzerland-1.jpg',
      date: '10 December 2024',
      tourManager: 'Connie Hay',
      destination: 'Switzerland'
    },
    {
      id: '2',
      image: '/assets/albums/norway-1.jpg',
      date: '17 December 2024',
      tourManager: 'Luke Soh',
      destination: 'Norway'
    },
    {
      id: '3',
      image: '/assets/albums/iceland-1.jpg',
      date: '27 January 2025',
      tourManager: 'Peter Teh',
      destination: 'Iceland'
    },
    {
      id: '4',
      image: '/assets/albums/turkey-1.jpg',
      date: '5 February 2025',
      tourManager: 'Sarah Lee',
      destination: 'Turkey'
    },
    {
      id: '5',
      image: '/assets/albums/japan-1.jpg',
      date: '15 February 2025',
      tourManager: 'John Chen',
      destination: 'Japan'
    },
    {
      id: '6',
      image: '/assets/albums/korea-1.jpg',
      date: '22 February 2025',
      tourManager: 'Emily Wong',
      destination: 'Korea'
    },
    {
      id: '7',
      image: '/assets/albums/taiwan-1.jpg',
      date: '1 March 2025',
      tourManager: 'David Tan',
      destination: 'Taiwan'
    },
    {
      id: '8',
      image: '/assets/albums/vietnam-1.jpg',
      date: '10 March 2025',
      tourManager: 'Michelle Lim',
      destination: 'Vietnam'
    },
    {
      id: '9',
      image: '/assets/albums/uk-1.jpg',
      date: '20 March 2025',
      tourManager: 'Robert Chan',
      destination: 'United Kingdom'
    }
  ]

  const filteredAlbums = albums.filter(album => {
    const matchesDestination = selectedDestination === 'All' || album.destination === selectedDestination
    const matchesSearch = searchQuery === '' || 
      album.tourManager.toLowerCase().includes(searchQuery.toLowerCase()) ||
      album.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
      album.date.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesDestination && matchesSearch
  })

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
      <main className="bg-white">
        <div className="flex justify-center px-[34px] md:px-0">
          <div className="w-full max-w-[325px] md:max-w-[1920px] md:px-4 sm:px-8 lg:px-20 xl:px-32 2xl:px-44 3xl:px-[220px]">
            {/* Title and Description */}
            <div className="mt-[35px] md:mt-16 lg:mt-32 mb-[24px] md:mb-16">
              <h1 className="font-thunder font-medium text-[30px] leading-[28px] md:text-4xl lg:text-5xl text-[#242424] mb-[15px] md:mb-8">
                Tour Albums
              </h1>
              <p className="font-onest text-[13px] leading-[17px] md:text-base lg:text-lg text-[#242424] max-w-4xl">
                Discover the moments our travellers have captured! From iconic landmarks to hidden gems, our tour albums showcase the adventures, laughter, and unforgettable sights experienced on every EU Holidays journey.
              </p>
            </div>

            {/* Mobile Search and Filter */}
            <div className="lg:hidden mb-[24px]">
              {/* Search Bar */}
              <div className="flex items-center gap-[16px] mb-[24px]">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Search Tours"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-[36px] px-[16px] border border-[#242424] rounded-[9px] font-onest text-[13px] text-[#242424] placeholder:text-[#242424]/75 focus:outline-none"
                  />
                </div>
                <button className="w-[90px] h-[36px] border border-[#242424] rounded-[4px] bg-white text-[#242424] font-onest text-[12px] hover:bg-gray-50 transition-colors">
                  Search
                </button>
              </div>

              {/* Region Dropdown */}
              <div className="mb-[24px]">
                <h3 className="font-onest font-bold text-[13px] text-[#242424] uppercase mb-[18px]">
                  REGION
                </h3>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full flex items-center justify-between"
                >
                  <span className="font-onest text-[13px] text-[#242424]">
                    {selectedDestination}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-[#242424] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isDropdownOpen && (
                  <div className="mt-[12px] border border-[#E8E8E8] rounded-[8px] bg-white shadow-lg">
                    {destinations.map((destination) => (
                      <button
                        key={destination}
                        onClick={() => {
                          setSelectedDestination(destination)
                          setIsDropdownOpen(false)
                        }}
                        className={`w-full px-[16px] py-[12px] text-left font-onest text-[13px] hover:bg-gray-50 ${
                          selectedDestination === destination ? 'bg-gray-100' : ''
                        }`}
                      >
                        {destination}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Divider */}
              <div className="w-full h-[1px] bg-[#E8E8E8] mb-[30px]" />
            </div>

            {/* Desktop Filter Tabs */}
            <div className="hidden lg:block mb-8 md:mb-12">
              <div className="flex flex-wrap gap-3 md:gap-4 mb-6 md:mb-8">
                {destinations.slice(0, 9).map((destination) => (
                  <button
                    key={destination}
                    onClick={() => setSelectedDestination(destination)}
                    className={`px-6 py-3 rounded-lg border font-onest text-base md:text-lg transition-colors ${
                      selectedDestination === destination
                        ? 'bg-[#242424] border-[#242424] text-white'
                        : 'bg-white border-[#242424] text-[#242424] hover:bg-gray-50'
                    }`}
                  >
                    {destination}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {destinations.slice(9).map((destination) => (
                  <button
                    key={destination}
                    onClick={() => setSelectedDestination(destination)}
                    className={`px-6 py-3 rounded-lg border font-onest text-base md:text-lg transition-colors ${
                      selectedDestination === destination
                        ? 'bg-[#242424] border-[#242424] text-white'
                        : 'bg-white border-[#242424] text-[#242424] hover:bg-gray-50'
                    }`}
                  >
                    {destination}
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop Search Bar */}
            <div className="hidden lg:block mb-12 md:mb-16">
              <div className="flex items-center gap-0 max-w-md">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 h-14 px-5 border border-[#E8E8E8] rounded-l-lg font-onest text-base text-[#242424] placeholder:text-[#999999] focus:outline-none focus:border-[#242424]"
                />
                <button className="h-14 px-8 bg-[#242424] text-white rounded-r-lg font-onest text-base hover:bg-[#333333] transition-colors">
                  Search
                </button>
              </div>
            </div>

            {/* Albums - Mobile Single Column, Desktop Grid */}
            <div className="block lg:hidden">
              {/* Mobile Albums */}
              <div className="space-y-[16px] mb-[35px]">
                {filteredAlbums.slice(0, 3).map((album) => (
                  <div
                    key={album.id}
                    className="bg-white rounded-[9px] overflow-hidden shadow-[0px_3px_3px_0px_rgba(0,0,0,0.16)] cursor-pointer"
                  >
                    <div className="relative w-full h-[238px]">
                      <Image
                        src={album.image}
                        alt={`${album.destination} tour`}
                        fill
                        className="object-cover rounded-t-[9px]"
                      />
                    </div>
                    <div className="px-[23px] py-[18px]">
                      <p className="font-onest text-[13px] leading-[17px] text-[#242424]">
                        Date: {album.date}<br />
                        Tour Manager: {album.tourManager}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Pagination */}
              <div className="flex items-center justify-between mb-[89px]">
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
            </div>

            {/* Desktop Albums Grid */}
            <div className="hidden lg:block space-y-8 md:space-y-10">
              {Array.from({ length: Math.ceil(filteredAlbums.length / 3) }, (_, rowIndex) => (
                <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-7">
                  {filteredAlbums.slice(rowIndex * 3, rowIndex * 3 + 3).map((album) => (
                    <div
                      key={album.id}
                      className="bg-white rounded-lg overflow-hidden shadow-[0px_3px_3px_0px_rgba(0,0,0,0.16)] hover:shadow-lg transition-shadow cursor-pointer"
                    >
                      <div className="relative aspect-[461/304]">
                        <Image
                          src={album.image}
                          alt={`${album.destination} tour`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="px-6 py-6">
                        <div className="space-y-1">
                          <div className="flex items-start">
                            <span className="font-onest font-bold text-lg text-[#242424] min-w-fit">
                              Date:
                            </span>
                            <span className="font-onest text-lg text-[#242424] ml-5">
                              {album.date}
                            </span>
                          </div>
                          <div className="flex items-start">
                            <span className="font-onest font-bold text-lg text-[#242424] min-w-fit">
                              Tour Manager:
                            </span>
                            <span className="font-onest text-lg text-[#242424] ml-4">
                              {album.tourManager}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Desktop Load More Button */}
            {filteredAlbums.length > 9 && (
              <div className="hidden lg:flex justify-center mt-12 md:mt-16">
                <button className="px-8 py-3 bg-[#242424] border border-[#242424] rounded-lg text-white font-onest text-base md:text-lg hover:bg-[#333333] transition-colors">
                  Load More
                </button>
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