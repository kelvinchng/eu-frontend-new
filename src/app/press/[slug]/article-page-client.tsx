'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { DesktopNav } from '@/components/common/nav/desktop-nav'
import { MobileMenu } from '@/components/common/nav/mobile-menu'
import { Footer } from '@/components/common/footer'

interface ArticleData {
  title: string
  description: string
  publishDate: string
  publication: string
  image: string
  content: string[]
}

export function ArticlePageClient({ article }: { article: ArticleData }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

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
              />
            </div>
          </Link>
          <div className="flex items-center gap-[18.67px]">
            <Link href="/travel-essentials" className="font-onest text-[12px] leading-[15px] text-white">
              Travel Essentials
            </Link>
            <Link href="/travel-club" className="font-onest text-[12px] leading-[15px] text-white">
              Travel Club
            </Link>
            <button 
              onClick={toggleMobileMenu}
              className="font-onest text-[12px] leading-[15px] text-white"
              aria-label="Open menu"
            >
              Menu
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />

      {/* Main Content Container */}
      <main className="w-full">
        {/* Back to Press Page Link */}
        <div className="w-full px-[34px] md:px-[60px] lg:px-[196px] xl:px-[260px] 2xl:px-[400px]">
          <Link 
            href="/press" 
            className="inline-flex items-center gap-[8px] mt-[21px] md:mt-8 lg:mt-12 text-[#242424]"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 12L6 8L10 4" stroke="#242424" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-onest text-[13px] md:text-sm lg:text-base">Back to Press & Media</span>
          </Link>
        </div>

        {/* Article Container */}
        <div className="w-full px-[34px] md:px-[60px] lg:px-[196px] xl:px-[260px] 2xl:px-[400px] pb-[60px] md:pb-24 lg:pb-32">
          {/* Article Layout - Centered content */}
          <div className="flex flex-col items-center justify-center w-full">
            {/* Center container with consistent padding */}
            <div className="w-full max-w-[325px] md:max-w-[832px] flex flex-col items-center">
              {/* Article Metadata */}
              <div className="w-full mb-[12px] md:mb-4 lg:mb-9 mt-[21px] md:mt-8 lg:mt-[57px]">
                <p className="font-onest text-[10px] leading-[13px] md:text-xs lg:text-sm text-[#898989]">
                  {article.publishDate}
                </p>
                <p className="font-onest text-[10px] leading-[13px] md:text-xs lg:text-sm text-[#898989]">
                  {article.publication}
                </p>
              </div>

              {/* Article Title */}
              <div className="w-full mb-[12px] md:mb-4 lg:mb-6">
                <h1 className="font-thunder text-[32px] leading-[29px] md:text-[48px] lg:text-[60px] md:leading-[44px] lg:leading-[55px] text-[#242424] tracking-tight">
                  {article.title}
                </h1>
              </div>

              {/* Article Description */}
              <div className="w-full mb-[20px] md:mb-6 lg:mb-9">
                <p className="font-onest text-[13px] leading-[17px] md:text-sm lg:text-lg tracking-wide text-[#242424]">
                  {article.description}
                </p>
              </div>

              {/* Article Image */}
              <div className="w-full max-w-[325px] md:max-w-[832px] mb-[20px] md:mb-6 lg:mb-9">
                <div className="w-full h-[296px] md:aspect-[832/758] rounded-[20px] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={832}
                    height={758}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Article Content - Hidden on mobile according to Figma */}
              <div className="hidden md:block max-w-[832px] mb-6 lg:mb-9">
                {article.content.map((paragraph, index) => (
                  <p key={index} className="font-onest text-sm lg:text-lg leading-relaxed text-[#242424] mb-4 lg:mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Read Original Article Button */}
              <div className="w-full max-w-[325px] md:max-w-[832px] mb-[38px] md:mb-16 lg:mb-32">
                <button className="w-[155px] h-[35px] md:w-full md:h-auto sm:w-auto md:px-8 md:py-3 lg:w-[245px] lg:h-[51px] bg-[#242424] border border-[#242424] rounded-[9px] md:rounded-lg font-onest text-[12px] md:text-sm lg:text-lg leading-[15px] md:leading-relaxed text-white hover:bg-[#333333] transition-colors">
                  Read Original Article
                </button>
              </div>

              {/* Related Articles Section */}
              <div className="w-full max-w-[325px] md:max-w-[832px]">
                <h2 className="font-thunder text-[24px] leading-[22px] md:text-3xl lg:text-4xl text-[#242424] mb-[18px] md:mb-8 lg:mb-12">
                  Related Articles
                </h2>
                
                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-6 lg:gap-8">
                  {relatedArticles.map((relatedArticle, index) => (
                    <Link key={index} href={`/press/${relatedArticle.slug}`} className="group">
                      <div className="flex flex-col">
                        <div className="w-full h-[194px] md:h-[240px] lg:h-[280px] rounded-[20px] overflow-hidden mb-[12px] md:mb-4">
                          <Image
                            src={relatedArticle.image}
                            alt={relatedArticle.title}
                            width={400}
                            height={280}
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <h3 className="font-thunder text-[18px] leading-[16px] md:text-xl lg:text-2xl text-[#242424] mb-[8px] md:mb-3 group-hover:text-[#666666] transition-colors">
                          {relatedArticle.title}
                        </h3>
                        <p className="font-onest text-[10px] leading-[13px] md:text-xs lg:text-sm text-[#898989]">
                          {relatedArticle.date}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

const relatedArticles = [
  {
    slug: 'eu-holidays-100th-chartered-flight',
    title: "EU Holidays' 100th Chartered Flight",
    image: '/assets/images/press-article-2.jpg',
    date: '9 Apr 2024'
  },
  {
    slug: 'inaugural-leisure-trip-germany',
    title: "Our inaugural leisure trip to Germany on 21 Sep 2021",
    image: '/assets/images/press-article-3.jpg',
    date: '9 Apr 2024'
  }
]