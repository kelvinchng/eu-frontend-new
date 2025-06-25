'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { DesktopNav } from '@/components/common/nav/desktop-nav'
import { MobileMenu } from '@/components/common/nav/mobile-menu'
import { Footer } from '@/components/common/footer'
import { PressCard } from '@/components/common/press/press-card'
import { FilterTabs } from '@/components/common/press/filter-tabs'
import { AsSeenIn } from '@/components/common/press/as-seen-in'

interface PressArticle {
  id: string
  title: string
  description: string
  date: string
  year: string
  thumbnail: string
  articleUrl?: string
}

export default function PressPage() {
  const [selectedYear, setSelectedYear] = useState('All')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const articles: PressArticle[] = [
    {
      id: 'inaugural-leisure-trip-germany',
      title: 'Our inaugural leisure trip to Germany on 21 Sep 2021',
      description: 'In this Lianhe Zaobao interview, our director Mr Wong Yew Hoong shares more about our upcoming Germany trip and the safety measures in place.',
      date: '9 Apr 2024',
      year: '2024',
      thumbnail: '/assets/images/press-article-1.jpg'
    },
    {
      id: 'cross-border-shopping-commune-partnership',
      title: 'Cross-Border Shopping Gets a Lift as THE COMMUNE Partners with EU Holidays',
      description: 'Lorem ipsum dolor sit amet consectetur. Vitae sit sit scelerisque arcu ut id cras cum. Amet enim commodo nulla nec pellentesque interdum. Varius nec eget ullamcorper at.',
      date: '9 Apr 2024',
      year: '2024',
      thumbnail: '/assets/images/press-article-2.jpg'
    },
    {
      id: 'exploring-europe-netherlands-germany-france',
      title: 'Exploring Europe Again: Netherlands, Germany & France Tours by EU Holidays Take Off',
      description: 'Lorem ipsum dolor sit amet consectetur. Felis risus ut purus dictum. In egestas ultrices hendrerit morbi. Egestas nam dui purus viverra libero. Gravida facilisis faucibus pellentesque a.',
      date: '9 Apr 2024',
      year: '2024',
      thumbnail: '/assets/images/press-article-3.jpg'
    }
  ]

  const filteredArticles = selectedYear === 'All' 
    ? articles 
    : articles.filter(article => article.year === selectedYear)

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
          <div className="w-full max-w-[325px] md:max-w-[1498px] mt-[35px] md:mt-[106px] mb-[48px] md:mb-[55px]">
            <h1 className="font-thunder font-normal text-[30px] leading-[28px] md:font-medium md:text-[50px] md:leading-[46px] text-[#242424] mb-[15px] md:mb-[25px]">
              Press & Media
            </h1>
            <p className="font-onest text-[13px] leading-[17px] md:text-[18px] md:leading-[23px] text-[#242424] max-w-[325px] md:max-w-[824px]">
              Here's where we share our milestones, media mentions and travel stories that made the headlines.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="w-full max-w-[325px] md:max-w-[1498px] mb-[48px] md:mb-[59px]">
            <FilterTabs selectedYear={selectedYear} onYearChange={setSelectedYear} />
          </div>

          {/* Articles Grid */}
          <div className="w-full max-w-[325px] md:max-w-[1499px] grid grid-cols-1 md:grid-cols-3 gap-[16px] md:gap-x-[49px] md:gap-y-[49px] mb-[48px] md:mb-[120px]">
            {filteredArticles.map((article) => (
              <PressCard
                key={article.id}
                id={article.id}
                title={article.title}
                description={article.description}
                date={article.date}
                thumbnail={article.thumbnail}
                articleUrl={article.articleUrl}
              />
            ))}
          </div>

          {/* As Seen In Section */}
          <div className="w-full max-w-[325px] md:max-w-[1498px] mb-[89px] md:mb-[200px]">
            <AsSeenIn />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}