'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { DesktopNav } from '@/components/common/nav/desktop-nav'
import { MobileNav } from '@/components/common/nav/mobile-nav'
import { MobileMenu } from '@/components/common/nav/mobile-menu'
import { Footer } from '@/components/common/footer'
import { ExpertCard } from '@/components/common/experts/expert-card'

interface Expert {
  id: string
  name: string
  description: string
  reviews: number
  image: string
  imageWidth: number
  imageHeight: number
  imageTop: number
  imageLeft: number
}

export default function ExpertsPage() {
  const [showAll, setShowAll] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const experts: Expert[] = [
    {
      id: '1',
      name: 'Jeremiah Tan',
      description: "See the world with Jeremiah! Fun, loving and never seems to run out of energy. I've plenty of interesting \"stories\" to...",
      reviews: 315,
      image: '/assets/images/expert-jeremiah.jpg',
      imageWidth: 226,
      imageHeight: 337,
      imageTop: 21,
      imageLeft: 113
    },
    {
      id: '2',
      name: 'Ong Kah Hoo Jiafu',
      description: 'My name is Jiafu. As a service person and a Europe tour manager has been a challenge for me to serve my customers better.',
      reviews: 315,
      image: '/assets/images/expert-jiafu.jpg',
      imageWidth: 234,
      imageHeight: 329,
      imageTop: 29,
      imageLeft: 113
    },
    {
      id: '3',
      name: 'Tammy Tan',
      description: 'I have great passion working in the customer service sector, I value friendship and love exploring new places so I can explore...',
      reviews: 315,
      image: '/assets/images/expert-tammy.jpg',
      imageWidth: 226,
      imageHeight: 337,
      imageTop: 21,
      imageLeft: 120
    },
    {
      id: '4',
      name: 'Kevin Cheng',
      description: 'Kevin is known to his customers as the big friendly gentle giant. What I like about this job is every trip you will make new…',
      reviews: 315,
      image: '/assets/images/expert-kevin.jpg',
      imageWidth: 248,
      imageHeight: 323,
      imageTop: 35,
      imageLeft: 102
    },
    {
      id: '5',
      name: 'Connie Hay',
      description: "Small in size but big in heart. Love to travel and see the world's wonders and marvels!",
      reviews: 315,
      image: '/assets/images/expert-connie.jpg',
      imageWidth: 226,
      imageHeight: 337,
      imageTop: 21,
      imageLeft: 113
    },
    {
      id: '6',
      name: 'Dylan Teoh',
      description: 'I am extremely passionate about travelling, and adventurous expeditions are what I love! Journey with me as I bring you to witness...',
      reviews: 315,
      image: '/assets/images/expert-dylan.jpg',
      imageWidth: 226,
      imageHeight: 337,
      imageTop: 21,
      imageLeft: 116
    },
    {
      id: '7',
      name: 'John Foo',
      description: 'An industry veteran, enjoy sharing and mutual enriching whilst on tour. A simple thank you will sure warm up my heart!',
      reviews: 315,
      image: '/assets/images/expert-john.jpg',
      imageWidth: 220,
      imageHeight: 328,
      imageTop: 30,
      imageLeft: 123
    },
    {
      id: '8',
      name: 'Andy Yuan',
      description: 'I specialised in United States tours, and I hope I am able to lead you to the wonders of the states. I have always believed…',
      reviews: 315,
      image: '/assets/images/expert-andy.jpg',
      imageWidth: 215,
      imageHeight: 321,
      imageTop: 37,
      imageLeft: 119
    },
    {
      id: '9',
      name: 'Ken Yong',
      description: "Hi I'm Ken Yong, I've been taking tours for the last 32 years which cover almost every continents. I'm a strong believer...",
      reviews: 315,
      image: '/assets/images/expert-ken.jpg',
      imageWidth: 226,
      imageHeight: 337,
      imageTop: 21,
      imageLeft: 113
    }
  ]

  const displayedExperts = showAll ? experts : experts.slice(0, 9)

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Navigation - At the very top edge */}
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

      {/* Main Content */}
      <main className="bg-white">
        <div className="flex flex-col items-center px-[34px] md:px-0">
          {/* Heading Section */}
          <div className="w-full max-w-[325px] md:max-w-[1480px] mt-[35px] md:mt-[105px] mb-[48px] md:mb-[49px]">
            <h1 className="font-thunder font-normal text-[30px] leading-[28px] md:font-medium md:text-[50px] md:leading-[46px] text-[#242424] mb-[15px] md:mb-[25px]">
              Meet The Experts
            </h1>
            <p className="font-onest text-[13px] leading-[17px] md:text-[18px] md:leading-[23px] text-[#242424]">
              Our tour managers ensure every trip runs smoothly, drawing on deep destination knowledge and a strong focus on service quality.
            </p>
          </div>

          {/* Experts Grid */}
          <div className={`w-full max-w-[325px] md:max-w-[1499px] grid grid-cols-1 md:grid-cols-3 gap-[12px] md:gap-x-[49px] md:gap-y-[49px] ${experts.length > 9 ? 'mb-[33px] md:mb-[50px]' : 'mb-[89px] md:mb-[200px]'}`}>
            {displayedExperts.map((expert) => (
              <ExpertCard
                key={expert.id}
                name={expert.name}
                description={expert.description}
                reviews={expert.reviews}
                image={expert.image}
                imageWidth={expert.imageWidth}
                imageHeight={expert.imageHeight}
                imageTop={expert.imageTop}
                imageLeft={expert.imageLeft}
              />
            ))}
          </div>

          {/* Load More Button - Only show if more than 9 experts */}
          {experts.length > 9 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="w-[118px] h-[36px] md:w-[169px] md:h-[51px] bg-[#242424] border border-[#242424] rounded-[4px] md:rounded-[9px] font-onest text-[12px] md:text-[18px] leading-[15px] md:leading-[23px] text-white hover:bg-[#333333] transition-colors mb-[89px] md:mb-[151px]"
            >
              {showAll ? 'Show Less' : 'Load More'}
            </button>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}