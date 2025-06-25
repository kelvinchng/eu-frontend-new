'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { DesktopNav } from '@/components/common/nav/desktop-nav'
import { MobileMenu } from '@/components/common/nav/mobile-menu'
import { Footer } from '@/components/common/footer'
import { notFound } from 'next/navigation'

interface ArticleData {
  title: string
  description: string
  publishDate: string
  publication: string
  image: string
  content: string[]
}

const articles: Record<string, ArticleData> = {
  'inaugural-leisure-trip-germany': {
    title: 'Our inaugural leisure trip to Germany on 21 Sep 2021',
    description: 'In this interview with Lianhe Zaobao, our director, Mr Wong Yew Hoong, elaborates more on our inaugural trip to Germany next week and the various measures in place to ensure a safe and enjoyable trip for our customers.',
    publishDate: 'Published 21 Sep 2021',
    publication: 'Featured in Lianhe Zao Bao',
    image: '/assets/images/press-article-1.jpg',
    content: [
      'In this comprehensive interview with Lianhe Zaobao, our director Mr Wong Yew Hoong shares insights into EU Holidays\' inaugural leisure trip to Germany, marking a significant milestone in the company\'s recovery journey.',
      'The trip represents more than just a return to European travel - it symbolizes the resilience and adaptability of the travel industry during challenging times. With carefully crafted safety protocols and enhanced customer care measures, this journey sets the foundation for future travel experiences.',
      'Mr Wong elaborates on the extensive planning process, from selecting the most suitable destinations to implementing comprehensive health and safety measures. The team has worked tirelessly to ensure that every aspect of the journey meets the highest standards of quality and safety.',
      'This inaugural trip to Germany showcases EU Holidays\' commitment to providing exceptional travel experiences while prioritizing customer safety and satisfaction. The positive response from travelers has been overwhelming, confirming the demand for quality European travel experiences.',
      'Looking ahead, this successful trip paves the way for expanding our European offerings, bringing more diverse and enriching travel experiences to our valued customers across Asia.'
    ]
  },
  'cross-border-shopping-commune-partnership': {
    title: 'Cross-Border Shopping Gets a Lift as THE COMMUNE Partners with EU Holidays',
    description: 'EU Holidays announces strategic partnership with THE COMMUNE to enhance cross-border shopping experiences for travelers seeking premium European retail destinations.',
    publishDate: 'Published 7 Sep 2023',
    publication: 'Featured in Travel Weekly',
    image: '/assets/images/press-article-2.jpg',
    content: [
      'EU Holidays is excited to announce our strategic partnership with THE COMMUNE, a leading cross-border shopping platform that will revolutionize how our customers experience European retail destinations.',
      'This collaboration brings together two industry leaders committed to providing exceptional customer experiences. Through this partnership, EU Holidays customers will gain access to exclusive shopping opportunities across major European cities.',
      'The partnership focuses on creating seamless shopping experiences that complement our tour packages, allowing travelers to discover premium European brands and products during their journeys.',
      'Our joint efforts will include curated shopping experiences, exclusive access to flagship stores, and personalized shopping assistance throughout European destinations.',
      'This innovative approach to travel retail demonstrates our commitment to enhancing every aspect of our customers\' European adventures.'
    ]
  },
  'exploring-europe-netherlands-germany-france': {
    title: 'Exploring Europe Again: Netherlands, Germany & France Tours by EU Holidays Take Off',
    description: 'EU Holidays launches comprehensive tour packages covering Netherlands, Germany, and France, marking the return of multi-country European adventures post-pandemic.',
    publishDate: 'Published 23 Oct 2024',
    publication: 'Featured in Asia Travel News',
    image: '/assets/images/press-article-3.jpg',
    content: [
      'EU Holidays proudly announces the launch of our comprehensive Netherlands, Germany & France tour packages, marking a significant milestone in the recovery of European tourism.',
      'These carefully crafted itineraries showcase the best of three iconic European destinations, offering travelers an immersive experience across diverse cultures, histories, and landscapes.',
      'Our expert team has designed these tours to capture the essence of each country while ensuring seamless transitions between destinations and optimal travel experiences.',
      'From the charming canals of Amsterdam to the historic castles of Germany and the romantic streets of Paris, these tours offer unforgettable journeys through Europe\'s most beloved destinations.',
      'The positive response from travelers has exceeded our expectations, confirming the strong demand for quality multi-country European experiences.'
    ]
  }
}

const relatedArticles = [
  {
    title: 'Cross-Border Shopping Gets a Lift as THE COMMUNE Partners with EU Holidays',
    date: '7 Sep 2023'
  },
  {
    title: 'Exploring Europe Again: Netherlands, Germany & France Tours by EU Holidays Take Off',
    date: '23 Oct 2024'
  },
  {
    title: 'Boosting Profit Margins by 30 Points — Thanks to EU Holidays\' Airwallex Integration',
    date: '18 Mar 2024'
  },
  {
    title: 'From Classroom to California: EU Holidays Brings SST Students to San Francisco',
    date: '9 Apr 2024'
  }
]

interface ArticlePageProps {
  params: Promise<{
    slug: string
  }>
}

function ArticlePageClient({ article }: { article: ArticleData }) {
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
          <div className="w-full max-w-[325px] md:max-w-[1920px]">
            <div className="flex flex-col lg:flex-row">
              {/* Main Content */}
              <div className="flex-1 md:pl-[11.46vw] xl:pl-[10.9vw] 2xl:pl-[11.46vw] 3xl:pl-[220px] lg:pr-8">
                {/* Title Section */}
                <div className="w-full max-w-[325px] md:max-w-[832px] mt-[35px] md:mt-16 lg:mt-32 mb-[20px] md:mb-8 lg:mb-14">
                  <h1 className="font-thunder font-medium text-[35px] leading-[37px] md:text-2xl md:leading-tight lg:text-4xl xl:text-5xl 2xl:text-[58px] text-[#242424] mb-[7px] md:mb-4 lg:mb-8 uppercase">
                    {article.title}
                  </h1>
                  
                  {/* Metadata */}
                  <div className="flex items-center gap-[9px] mb-[23px] md:mb-8 lg:mb-14">
                    <span className="font-onest text-[10px] leading-[13px] md:text-sm lg:text-lg tracking-wide text-[#242424]">
                      {article.publishDate}
                    </span>
                    <span className="font-onest text-[18px] leading-[23px] text-[#242424]">
                      •
                    </span>
                    <span className="font-onest text-[10px] leading-[13px] md:text-sm lg:text-lg tracking-wide text-[#242424]">
                      {article.publication}
                    </span>
                  </div>

                  {/* Description */}
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

                {/* Read More Articles - Mobile */}
                <div className="w-full max-w-[325px] md:hidden mb-[89px]">
                  <h3 className="font-thunder font-medium text-[30px] leading-[28px] text-[#242424] mb-[25px]">
                    Read More Articles
                  </h3>

                  <div className="space-y-0">
                    {relatedArticles.map((relatedArticle, index) => (
                      <div key={index}>
                        <Link href={`/press/related-article-${index + 1}`} className="block group py-[17px]">
                          <h4 className="font-thunder text-[18px] leading-[23px] tracking-wide text-[#242424] group-hover:text-[#666666] transition-colors mb-[4px]">
                            {relatedArticle.title}
                          </h4>
                          <p className="font-onest text-[10px] leading-[13px] tracking-wide text-[#475569]/50">
                            {relatedArticle.date}
                          </p>
                        </Link>
                        {index < relatedArticles.length - 1 && (
                          <div className="w-full h-[1px] bg-[#E8E8E8]" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar - Desktop only */}
              <div className="hidden lg:block w-[525px] px-0 pr-[11.46vw] xl:pr-[10.9vw] 2xl:pr-[11.46vw] 3xl:pr-[220px] mt-16 lg:mt-32">
                <div className="w-full">
                  <h3 className="font-thunder font-medium text-2xl lg:text-3xl xl:text-[42px] leading-tight text-[#242424] mb-6 lg:mb-11">
                    Read More Articles
                  </h3>

                  <div className="space-y-4 lg:space-y-6">
                    {relatedArticles.map((relatedArticle, index) => (
                      <div key={index}>
                        <Link href={`/press/related-article-${index + 1}`} className="block group">
                          <div className="flex items-start justify-between py-4 lg:py-5">
                            <div className="flex-1 pr-4">
                              <h4 className="font-thunder text-lg lg:text-[23px] leading-tight tracking-wide text-[#242424] group-hover:text-[#666666] transition-colors mb-3 lg:mb-4">
                                {relatedArticle.title}
                              </h4>
                              <p className="font-onest text-sm lg:text-[15px] leading-relaxed tracking-wide text-[#475569]/50">
                                {relatedArticle.date}
                              </p>
                            </div>
                            <div className="flex-shrink-0">
                              <svg width="18" height="15" viewBox="0 0 18 15" fill="none" className="w-4 h-3 lg:w-[18px] lg:h-[15px]">
                                <path d="M1 7.5H17M17 7.5L10.5 1M17 7.5L10.5 14" stroke="#242424" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                          </div>
                        </Link>
                        {index < relatedArticles.length - 1 && (
                          <div className="w-full h-[1px] bg-[#E8E8E8]" />
                        )}
                      </div>
                    ))}
                  </div>
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

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = articles[slug]

  if (!article) {
    notFound()
  }

  return <ArticlePageClient article={article} />
}