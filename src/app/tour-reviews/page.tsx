'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { DesktopNav } from '@/components/common/nav/desktop-nav'
import { MobileMenu } from '@/components/common/nav/mobile-menu'
import { Footer } from '@/components/common/footer'

interface Review {
  id: string
  customerName: string
  customerInitial?: string
  rating: number
  date: string
  reviewText: string
  fullText?: string
  source: 'facebook' | 'google'
  verified?: boolean
  avatar?: string
}

export default function TourReviewsPage() {
  const [expandedReviews, setExpandedReviews] = useState<string[]>([])
  const [selectedSource, setSelectedSource] = useState<'facebook' | 'google' | 'all'>('all')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const reviews: Review[] = [
    // Facebook Reviews
    {
      id: 'fb-1',
      customerName: 'Helen Y',
      customerInitial: 'H',
      rating: 5,
      date: '4 days ago',
      reviewText: 'Joined a 13 days tour with EU in March. It was a very memorable trip. Hotels were very well located such that it was central in the towns/cities. They were also comfortable with good breakfast. The...',
      fullText: 'Joined a 13 days tour with EU in March. It was a very memorable trip. Hotels were very well located such that it was central in the towns/cities. They were also comfortable with good breakfast. The tour guide was knowledgeable and made sure everyone had a great experience. Would definitely recommend EU Holidays to anyone looking for a hassle-free European tour!',
      source: 'facebook',
      verified: true
    },
    {
      id: 'fb-2',
      customerName: 'Yip Mee Ling',
      customerInitial: 'Y',
      rating: 5,
      date: '4 days ago',
      reviewText: 'I am very happy and satisfied with the tour to Finland, Sweden and Norway. Our tour leader Ms Kek took us to look for Northern Lights and we managed to witness 4 nights of our stay. We...',
      fullText: 'I am very happy and satisfied with the tour to Finland, Sweden and Norway. Our tour leader Ms Kek took us to look for Northern Lights and we managed to witness 4 nights of our stay. We were extremely lucky and the experience was absolutely magical. Ms Kek was very patient and went above and beyond to ensure we had the best chances to see the Aurora. Highly recommend!',
      source: 'facebook',
      verified: true
    },
    {
      id: 'fb-3',
      customerName: 'Salamah MY Yusof',
      customerInitial: 'S',
      rating: 5,
      date: '4 days ago',
      reviewText: 'Very good itinerary plan to cover places of interests with the last day being free and easy to rest . Itinerary cover interest for adults and children . Tour leaders are friendly...',
      fullText: 'Very good itinerary plan to cover places of interests with the last day being free and easy to rest . Itinerary cover interest for adults and children . Tour leaders are friendly and helpful throughout the journey. They made sure everyone was comfortable and had all the information needed. Great experience overall!',
      source: 'facebook',
      verified: true
    },
    {
      id: 'fb-4',
      customerName: 'Ma Edelweiss',
      customerInitial: 'M',
      rating: 5,
      date: '4 days ago',
      reviewText: 'I attended the 13D10N Highlights of Eastern Europe tour! I thoroughly enjoyed the sharing by our tour manager, Chong Whyee. She is very knowledgeable and caring!',
      source: 'facebook',
      verified: true
    },
    {
      id: 'fb-5',
      customerName: 'Kuengsiah Choo',
      customerInitial: 'K',
      rating: 5,
      date: '4 days ago',
      reviewText: "It's been a 5 stars trip for me and my family with EU Holidays recently to Europe, friendly and well experienced tour guide",
      source: 'facebook',
      verified: true
    },
    // Google Reviews
    {
      id: 'g-1',
      customerName: 'Jean',
      customerInitial: 'J',
      rating: 5,
      date: '1 day ago',
      reviewText: 'I totally enjoyed the package tour by EU to Finland recently. What made the whole experience even greater was our Tour Guide Nicole Seah! I would rate Nicole a 10/10 Tour Guide! This is the...',
      fullText: 'I totally enjoyed the package tour by EU to Finland recently. What made the whole experience even greater was our Tour Guide Nicole Seah! I would rate Nicole a 10/10 Tour Guide! This is the second time I traveled with her and she never fails to impress. Her knowledge, patience, and care for all travelers is exceptional. Thank you EU Holidays for providing such excellent service!',
      source: 'google',
      verified: true
    },
    {
      id: 'g-2',
      customerName: 'Shirley Lim',
      customerInitial: 'S',
      rating: 5,
      date: '1 day ago',
      reviewText: '❄️✨ Norway, you were magical! ✨❄️ Just wrapped up an amazing 10D Aurora tour with EU Holidays (11-20 Mar 2025) and still not over those surreal Northern Lights moments! 🌌🇳🇴 We were...',
      fullText: '❄️✨ Norway, you were magical! ✨❄️ Just wrapped up an amazing 10D Aurora tour with EU Holidays (11-20 Mar 2025) and still not over those surreal Northern Lights moments! 🌌🇳🇴 We were blessed to see the Aurora on multiple nights and each time was breathtaking. The tour was perfectly organized, hotels were comfortable, and our tour guide was amazing. Thank you EU Holidays for this unforgettable experience!',
      source: 'google',
      verified: true
    },
    {
      id: 'g-3',
      customerName: 'Lee Jane',
      customerInitial: 'L',
      rating: 5,
      date: '1 day ago',
      reviewText: '13D10N Spain and Portugal 0n 05March 25. Tour Manager: Jimmy Lau. He will shared the information and what to look out for before the start of each activities and very knowledgeable...',
      fullText: '13D10N Spain and Portugal 0n 05March 25. Tour Manager: Jimmy Lau. He will shared the information and what to look out for before the start of each activities and very knowledgeable about the history and culture of each place. The pace was perfect and we had enough time at each location. Highly recommend this tour and especially with Jimmy as your guide!',
      source: 'google',
      verified: true
    },
    {
      id: 'g-4',
      customerName: 'Rachel Chua',
      customerInitial: 'R',
      rating: 5,
      date: '1 day ago',
      reviewText: 'EU Fantasy Tour an 11 days 8 nights wonderful holiday with Tour Manager, Nick Cheah. My husband and I had a wonderful holiday visiting central Europe from 8 March to 17 March. We...',
      fullText: 'EU Fantasy Tour an 11 days 8 nights wonderful holiday with Tour Manager, Nick Cheah. My husband and I had a wonderful holiday visiting central Europe from 8 March to 17 March. We visited Prague, Vienna, Budapest and many other beautiful cities. Nick was an excellent tour manager who took care of every detail and made sure everyone had a great time. Thank you EU Holidays!',
      source: 'google',
      verified: true
    },
    {
      id: 'g-5',
      customerName: 'Irene Foo',
      customerInitial: 'I',
      rating: 5,
      date: '1 day ago',
      reviewText: '11D 8N Europe Fantasy Tour Manager: Nick Cheah Travelling period: 8 to 17 March 2025 A highly recommended tour featuring numerous attractive destinations and exquisite cuisine. Our tour...',
      fullText: '11D 8N Europe Fantasy Tour Manager: Nick Cheah Travelling period: 8 to 17 March 2025 A highly recommended tour featuring numerous attractive destinations and exquisite cuisine. Our tour manager Nick was exceptional - very knowledgeable, caring, and went above and beyond to ensure everyone had a memorable experience. The itinerary was well-planned with a good balance of activities and free time.',
      source: 'google',
      verified: true
    },
    {
      id: 'g-6',
      customerName: 'Mee Ling Yip',
      customerInitial: 'M',
      rating: 5,
      date: '1 day ago',
      reviewText: 'I recently came back from a tour to Finland, Sweden and Norway with our tour leader Ms Kek. We managed to catch the Northern Lights with her help on 4 nights out of the 8 nights we spent...',
      fullText: 'I recently came back from a tour to Finland, Sweden and Norway with our tour leader Ms Kek. We managed to catch the Northern Lights with her help on 4 nights out of the 8 nights we spent in the Nordic countries. Ms Kek was incredibly dedicated, checking weather conditions constantly and organizing late night trips to give us the best chances. The whole tour was wonderfully organized and I would definitely travel with EU Holidays again!',
      source: 'google',
      verified: true
    },
    {
      id: 'g-7',
      customerName: 'Sherlyn Tan',
      customerInitial: 'S',
      rating: 5,
      date: '1 day ago',
      reviewText: '*10D 7N Winter Adventure In finland + Norway Kingcrab* Tour manager : Nicole Seah Traveling period : 05-14March 2025 Review of Tour Manager Nicole Seah I had the pleasure of being guided...',
      fullText: '*10D 7N Winter Adventure In finland + Norway Kingcrab* Tour manager : Nicole Seah Traveling period : 05-14March 2025 Review of Tour Manager Nicole Seah I had the pleasure of being guided by Nicole on this amazing winter adventure. She was professional, knowledgeable, and always ensured everyone was comfortable and having a great time. The king crab experience was unforgettable! Thank you Nicole and EU Holidays!',
      source: 'google',
      verified: true
    }
  ]

  const facebookReviews = reviews.filter(r => r.source === 'facebook')
  const googleReviews = reviews.filter(r => r.source === 'google')
  
  // Filter reviews based on selected source
  const filteredReviews = selectedSource === 'all' 
    ? reviews 
    : reviews.filter(r => r.source === selectedSource)

  const toggleReadMore = (reviewId: string) => {
    setExpandedReviews(prev => 
      prev.includes(reviewId) 
        ? prev.filter(id => id !== reviewId)
        : [...prev, reviewId]
    )
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className="w-4 h-4"
            fill={star <= rating ? "#FCBE00" : "#E8E8E8"}
            color={star <= rating ? "#FCBE00" : "#E8E8E8"}
          />
        ))}
      </div>
    )
  }

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
            {/* Title */}
            <h1 className="font-thunder font-medium text-[30px] leading-[28px] md:text-4xl lg:text-5xl text-[#242424] mt-[35px] md:mt-16 lg:mt-32 mb-[15px] md:mb-12 lg:mb-16">
              Testimonials
            </h1>
            
            {/* Description */}
            <p className="font-onest text-[13px] leading-[17px] md:text-base lg:text-lg text-[#242424] max-w-4xl mb-[28px] md:mb-12 lg:mb-20">
              Discover what our happy travellers have to say! From unforgettable experiences to exceptional service, our testimonials highlight the journeys that made lasting memories with EU Holidays.
            </p>

            {/* Mobile Toggle Switch */}
            <div className="flex items-center justify-center gap-[26px] mb-[30px] md:hidden">
              <span className={`font-onest text-[14px] leading-[18px] transition-colors ${
                selectedSource === 'facebook' ? 'text-[#242424]' : 'text-[#242424]/50'
              }`}>
                Facebook
              </span>
              
              {/* Toggle Switch */}
              <button
                onClick={() => setSelectedSource(selectedSource === 'facebook' ? 'google' : 'facebook')}
                className="relative w-[45px] h-[20px] bg-black rounded-full transition-colors"
                aria-label="Toggle between Facebook and Google reviews"
              >
                <div className={`absolute top-[5px] w-[10px] h-[10px] bg-white rounded-full transition-transform ${
                  selectedSource === 'google' ? 'translate-x-[30px]' : 'translate-x-[5px]'
                }`} />
              </button>
              
              <span className={`font-onest text-[14px] leading-[18px] transition-colors ${
                selectedSource === 'google' ? 'text-[#242424]' : 'text-[#242424]/50'
              }`}>
                Google
              </span>
            </div>

            {/* Reviews Section - Mobile Single Column, Desktop Two Column */}
            <div className="block lg:hidden">
              {/* Mobile Single Column */}
              <div className="space-y-[13px] mb-[35px]">
                {(selectedSource === 'all' ? reviews : reviews.filter(r => r.source === selectedSource)).map((review) => (
                  <div key={review.id} className="bg-white border border-[#E8E8E8] rounded-[9px] p-[27px_31px_31px_31px] w-full h-[238px] relative">
                    {/* Profile Image */}
                    <div className={`absolute left-[31px] top-[27px] w-[40px] h-[40px] rounded-full flex items-center justify-center ${
                      review.source === 'facebook' ? 'bg-[#242424]' : 'bg-[#D9D9D9]'
                    }`}>
                      {review.avatar ? (
                        <Image
                          src={review.avatar}
                          alt={review.customerName}
                          width={40}
                          height={40}
                          className="rounded-full object-cover"
                        />
                      ) : review.customerInitial ? (
                        <span className={`font-thunder font-semibold text-[20px] ${
                          review.source === 'facebook' ? 'text-white' : 'text-[#666]'
                        }`}>
                          {review.customerInitial}
                        </span>
                      ) : (
                        <span className={`font-thunder font-semibold text-[16px] ${
                          review.source === 'facebook' ? 'text-white' : 'text-[#666]'
                        }`}>
                          {review.customerName.charAt(0)}
                        </span>
                      )}
                    </div>

                    {/* Customer Name and Verified */}
                    <div className="absolute left-[80px] top-[30px] flex items-center gap-[6px]">
                      <h3 className="font-onest font-bold text-[13px] leading-[17px] text-[#242424] uppercase">
                        {review.customerName}
                      </h3>
                      {review.verified && (
                        <div className="flex items-center">
                          <Image
                            src="/assets/icons/verified-badge.svg"
                            alt="Verified"
                            width={16}
                            height={16}
                            className="block"
                          />
                        </div>
                      )}
                    </div>

                    {/* Date */}
                    <span className="absolute left-[80px] top-[47px] font-onest text-[13px] leading-[17px] text-[#242424] opacity-50">
                      {review.date}
                    </span>

                    {/* Stars - Only for Google reviews */}
                    {review.source === 'google' && (
                      <div className="absolute left-[80px] top-[68px] flex items-center gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="w-[15px] h-[14px]"
                            fill={star <= review.rating ? "#FCBE00" : "#E8E8E8"}
                            color={star <= review.rating ? "#FCBE00" : "#E8E8E8"}
                          />
                        ))}
                      </div>
                    )}

                    {/* Review Text - Adjust top position based on whether stars are present */}
                    <p className={`absolute left-[31px] w-[271px] h-[85px] font-onest text-[13px] leading-[17px] text-[#242424] overflow-hidden ${
                      review.source === 'google' ? 'top-[100px]' : 'top-[84px]'
                    }`}>
                      {expandedReviews.includes(review.id) 
                        ? (review.fullText || review.reviewText)
                        : review.reviewText
                      }
                    </p>

                    {/* Read More - Adjust position based on whether stars are present */}
                    {review.fullText && (
                      <button
                        onClick={() => toggleReadMore(review.id)}
                        className={`absolute left-[31px] font-onest text-[13px] leading-[17px] text-[#242424] opacity-50 ${
                          review.source === 'google' ? 'top-[202px]' : 'top-[186px]'
                        }`}
                      >
                        {expandedReviews.includes(review.id) ? 'Read less' : 'Read more'}
                      </button>
                    )}
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

            {/* Desktop Two Column Layout */}
            <div className="hidden lg:flex lg:flex-row gap-8 md:gap-12 lg:gap-16 xl:gap-24 2xl:gap-36 items-start">
              {/* Facebook Reviews Column */}
              <div className="flex-1 w-full">
                <div className="flex items-center gap-4 mb-8 md:mb-12">
                  <svg className="w-10 h-10 md:w-12 md:h-12 lg:w-[51px] lg:h-[51px]" viewBox="0 0 51 51" fill="none">
                    <circle cx="25.5" cy="25.5" r="25.5" fill="black"/>
                    <path d="M28.875 27.375L29.625 23.25H25.5V20.25C25.5 19.125 26.0625 18 28.125 18H29.875V14.375C29.875 14.375 28.375 14.125 26.875 14.125C23.875 14.125 21.375 16.375 21.375 19.75V23.25H17.625V27.375H21.375V37.875H25.5V27.375H28.875Z" fill="white"/>
                  </svg>
                  <h2 className="font-thunder text-3xl md:text-4xl lg:text-5xl text-[#242424]">
                    Facebook Reviews
                  </h2>
                </div>

                <div className="space-y-4 md:space-y-6">
                  {facebookReviews.map((review) => (
                    <div key={review.id} className="bg-white border border-[#E8E8E8] rounded-2xl lg:rounded-[25px] p-6 md:p-7 lg:p-8">
                      <div className="flex items-start gap-3 lg:gap-4">
                        {/* Avatar */}
                        <div className="w-12 h-12 md:w-14 md:h-14 lg:w-[63px] lg:h-[63px] rounded-full bg-[#242424] flex items-center justify-center flex-shrink-0">
                          {review.avatar ? (
                            <Image
                              src={review.avatar}
                              alt={review.customerName}
                              width={63}
                              height={63}
                              className="rounded-full object-cover"
                            />
                          ) : review.customerInitial ? (
                            <span className="font-thunder font-semibold text-2xl md:text-3xl lg:text-[40px] text-white">
                              {review.customerInitial}
                            </span>
                          ) : (
                            <span className="font-thunder font-semibold text-lg md:text-xl lg:text-2xl text-white">
                              {review.customerName.charAt(0)}
                            </span>
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-onest font-bold text-base lg:text-lg text-[#242424] uppercase">
                              {review.customerName}
                            </h3>
                            <span className="font-onest text-sm lg:text-base text-[#242424] opacity-40">
                              {review.date}
                            </span>
                          </div>

                          {review.verified && (
                            <div className="inline-flex items-center gap-1 mb-3">
                              <Image
                                src="/assets/icons/verified-badge.svg"
                                alt="Verified"
                                width={18}
                                height={18}
                              />
                            </div>
                          )}

                          {/* Only show stars for Google reviews */}
                          {review.source === 'google' && (
                            <div className="mb-4">
                              {renderStars(review.rating)}
                            </div>
                          )}

                          <p className="font-onest text-sm lg:text-base leading-relaxed text-[#242424]">
                            {expandedReviews.includes(review.id) 
                              ? (review.fullText || review.reviewText)
                              : review.reviewText
                            }
                          </p>

                          {review.fullText && (
                            <button
                              onClick={() => toggleReadMore(review.id)}
                              className="font-onest text-sm lg:text-base text-[#242424] opacity-50 mt-3"
                            >
                              {expandedReviews.includes(review.id) ? 'Read less' : 'Read more'}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Load More Button */}
                <div className="flex justify-center mt-8 md:mt-12 mb-[80px] md:mb-[120px]">
                  <button className="px-6 py-3 md:px-8 md:py-3 bg-[#242424] rounded-lg text-white font-onest text-base md:text-lg hover:bg-[#333333] transition-colors">
                    Load More
                  </button>
                </div>
              </div>

              {/* Google Reviews Column */}
              <div className="flex-1 w-full">
                <div className="flex items-center gap-4 mb-8 md:mb-12">
                  <svg className="w-10 h-10 md:w-12 md:h-12 lg:w-[51px] lg:h-[51px]" viewBox="0 0 51 51" fill="none">
                    <circle cx="25.5" cy="25.5" r="25.5" fill="black"/>
                    <path d="M35.5 25.75C35.5 25.125 35.4375 24.5 35.375 23.875H25.5V27.625H31.125C30.875 29 30.125 30.125 28.875 30.875V33.625H32.25C34.25 31.75 35.5 29 35.5 25.75Z" fill="white"/>
                    <path d="M25.5 36.375C28.375 36.375 30.875 35.375 32.25 33.625L28.875 30.875C27.875 31.625 26.625 32 25.5 32C22.625 32 20.25 30.125 19.375 27.625H15.875V30.5C17.625 34 21.375 36.375 25.5 36.375Z" fill="white"/>
                    <path d="M19.375 27.625C18.875 26.25 18.875 24.75 19.375 23.375V20.5H15.875C14.375 23.5 14.375 27 15.875 30L19.375 27.625Z" fill="white"/>
                    <path d="M25.5 18.375C26.75 18.375 27.875 18.875 28.75 19.625L32.375 16C30.75 14.5 28.375 13.625 25.5 13.625C21.375 13.625 17.625 16 15.875 19.5L19.375 23.375C20.25 20.875 22.625 18.375 25.5 18.375Z" fill="white"/>
                  </svg>
                  <h2 className="font-thunder text-3xl md:text-4xl lg:text-5xl text-[#242424]">
                    Google Reviews
                  </h2>
                </div>

                <div className="space-y-4 md:space-y-6">
                  {googleReviews.map((review) => (
                    <div key={review.id} className="bg-white border border-[#E8E8E8] rounded-2xl lg:rounded-[25px] p-6 md:p-7 lg:p-8">
                      <div className="flex items-start gap-3 lg:gap-4">
                        {/* Avatar */}
                        <div className="w-12 h-12 md:w-14 md:h-14 lg:w-[63px] lg:h-[63px] rounded-full bg-[#D9D9D9] flex items-center justify-center flex-shrink-0 overflow-hidden">
                          {review.avatar ? (
                            <Image
                              src={review.avatar}
                              alt={review.customerName}
                              width={63}
                              height={63}
                              className="rounded-full object-cover"
                            />
                          ) : review.customerInitial ? (
                            <span className="font-thunder font-semibold text-2xl md:text-3xl lg:text-[40px] text-[#666]">
                              {review.customerInitial}
                            </span>
                          ) : (
                            <span className="font-thunder font-semibold text-lg md:text-xl lg:text-2xl text-[#666]">
                              {review.customerName.charAt(0)}
                            </span>
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-onest font-bold text-base lg:text-lg text-[#242424] uppercase">
                              {review.customerName}
                            </h3>
                            <span className="font-onest text-sm lg:text-base text-[#242424] opacity-50">
                              {review.date}
                            </span>
                          </div>

                          {review.verified && (
                            <div className="inline-flex items-center gap-1 mb-3">
                              <Image
                                src="/assets/icons/verified-badge.svg"
                                alt="Verified"
                                width={18}
                                height={18}
                              />
                            </div>
                          )}

                          {/* Only show stars for Google reviews */}
                          {review.source === 'google' && (
                            <div className="mb-4">
                              {renderStars(review.rating)}
                            </div>
                          )}

                          <p className="font-onest text-sm lg:text-base leading-relaxed text-[#242424]">
                            {expandedReviews.includes(review.id) 
                              ? (review.fullText || review.reviewText)
                              : review.reviewText
                            }
                          </p>

                          {review.fullText && (
                            <button
                              onClick={() => toggleReadMore(review.id)}
                              className="font-onest text-sm lg:text-base text-[#242424] opacity-50 mt-3"
                            >
                              {expandedReviews.includes(review.id) ? 'Read less' : 'Read more'}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Load More Button */}
                <div className="flex justify-center mt-8 md:mt-12 mb-[80px] md:mb-[120px]">
                  <button className="px-6 py-3 md:px-8 md:py-3 bg-[#242424] rounded-lg text-white font-onest text-base md:text-lg hover:bg-[#333333] transition-colors">
                    Load More
                  </button>
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