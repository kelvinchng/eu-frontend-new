'use client'

import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { TourCard } from '@/components/ui/cards/tour-card'
import { DestinationCard } from '@/components/ui/cards/destination-card'
import { ThemeCard } from '@/components/ui/cards/theme-card'
import { AdventureCard } from '@/components/ui/cards/adventure-card'
import { ExpertCard } from '@/components/ui/cards/expert-card'
import { TestimonialCard } from '@/components/ui/cards/testimonial-card'
import { PressArticleCard } from '@/components/ui/cards/press-article-card'
import { AwardCard } from '@/components/ui/cards/award-card'
import { BrochureCard } from '@/components/ui/cards/brochure-card'
import { AlbumCard } from '@/components/ui/cards/album-card'
import { TourReviewCard } from '@/components/ui/cards/tour-review-card'

export default function CardsPage() {
  const [tourCardSize, setTourCardSize] = useState('100%')
  const [destinationCardSize, setDestinationCardSize] = useState('100%')
  const [themeCardSize, setThemeCardSize] = useState('100%')
  const [adventureCardSize, setAdventureCardSize] = useState('100%')
  const [tourReviewCardSize, setTourReviewCardSize] = useState('100%')

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Responsive Card Components
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          These are the real card components actively used throughout the travel booking platform, now with responsive scaling 
          from the 1920px Figma baseline. Each component has its own preview size selector to test responsive behavior.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 p-4">
          <p className="text-sm text-green-800">
            <strong>Live Components:</strong> All cards below are the actual implementations used in FeaturedToursSection, 
            ExploreDestinationsSection, ThemedJourneysSection, and YourNextAdventure components with real props and styling.
          </p>
        </div>
      </div>

      {/* Tour Card */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">TourCard Component</h2>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-4">
                <h4 className="text-sm font-semibold text-green-900 mb-2">File: /src/components/ui/cards/tour-card.tsx</h4>
                <p className="text-sm text-green-800">
                  <strong>Props Interface:</strong> TourCardProps with id, title, price, description, image, tags?, badge?, href?, className?<br/>
                  <strong>Dimensions:</strong> 460px × 643px (Fixed Figma-spec with rounded-[9px])<br/>
                  <strong>Features:</strong> Positioned image (279.48px height), absolute title/price/description, tag with bag icon, View More link<br/>
                  <strong>Dependencies:</strong> Next.js Image, Link, design tokens, embedded SVG icons<br/>
                  <strong>Usage:</strong> Featured tours carousel, tour listings<br/>
                  <strong>Styling:</strong> Absolute positioning for all text elements, custom shadows, Thunder/Onest fonts
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-700">Real Tour Card from Featured Tours - Responsive Preview</h4>
                
                {/* Individual Preview Size Selector */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-sm font-medium text-gray-700 mr-2">Preview Size:</span>
                  <button
                    onClick={() => setTourCardSize('100%')}
                    className={`px-3 py-1 text-xs rounded transition-colors ${
                      tourCardSize === '100%' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    2XL (100%)
                  </button>
                  <button
                    onClick={() => setTourCardSize('1280px')}
                    className={`px-3 py-1 text-xs rounded transition-colors ${
                      tourCardSize === '1280px' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    XL (1280px)
                  </button>
                  <button
                    onClick={() => setTourCardSize('1024px')}
                    className={`px-3 py-1 text-xs rounded transition-colors ${
                      tourCardSize === '1024px' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    LG (1024px)
                  </button>
                  <button
                    onClick={() => setTourCardSize('768px')}
                    className={`px-3 py-1 text-xs rounded transition-colors ${
                      tourCardSize === '768px' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    MD (768px)
                  </button>
                  <button
                    onClick={() => setTourCardSize('640px')}
                    className={`px-3 py-1 text-xs rounded transition-colors ${
                      tourCardSize === '640px' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    SM (640px)
                  </button>
                </div>
                
                <div className="relative">
                  <div className="absolute top-2 right-2 bg-black/75 text-white px-2 py-1 rounded text-xs z-10">
                    {tourCardSize}
                  </div>
                  <div className="bg-gray-100 border-2 border-dashed border-green-300 rounded-lg p-4 overflow-x-auto">
                    <div 
                      className="transition-all duration-300 flex justify-center items-start tour-card-responsive-preview" 
                      style={{ 
                        width: '100%',
                        minHeight: '200px'
                      }}
                    >
                      <style dangerouslySetInnerHTML={{
                        __html: `
                          /* Force responsive breakpoint simulation */
                          .tour-card-responsive-preview [class*="w-[152px]"] {
                            width: ${
                              tourCardSize === '640px' ? '152px' :
                              tourCardSize === '768px' ? '212px' :
                              tourCardSize === '1024px' ? '368px' :
                              tourCardSize === '1280px' ? '430px' :
                              '460px'
                            } !important;
                          }
                          .tour-card-responsive-preview [class*="h-[214px]"] {
                            height: ${
                              tourCardSize === '640px' ? '214px' :
                              tourCardSize === '768px' ? '298px' :
                              tourCardSize === '1024px' ? '515px' :
                              tourCardSize === '1280px' ? '601px' :
                              '643px'
                            } !important;
                          }
                          .tour-card-responsive-preview [class*="h-[93px]"] {
                            height: ${
                              tourCardSize === '640px' ? '93px' :
                              tourCardSize === '768px' ? '130px' :
                              tourCardSize === '1024px' ? '223px' :
                              tourCardSize === '1280px' ? '261px' :
                              '279px'
                            } !important;
                          }
                          /* TourCardBadge responsive overrides */
                          .tour-card-responsive-preview .w-\\[53px\\] {
                            width: ${
                              tourCardSize === '640px' ? '53px' :
                              tourCardSize === '768px' ? '74px' :
                              tourCardSize === '1024px' ? '129px' :
                              tourCardSize === '1280px' ? '150px' :
                              '161px'
                            } !important;
                          }
                          .tour-card-responsive-preview .h-\\[14px\\] {
                            height: ${
                              tourCardSize === '640px' ? '14px' :
                              tourCardSize === '768px' ? '20px' :
                              tourCardSize === '1024px' ? '34px' :
                              tourCardSize === '1280px' ? '40px' :
                              '42px'
                            } !important;
                          }
                          .tour-card-responsive-preview .text-\\[6px\\] {
                            font-size: ${
                              tourCardSize === '640px' ? '6px' :
                              tourCardSize === '768px' ? '8px' :
                              tourCardSize === '1024px' ? '14px' :
                              tourCardSize === '1280px' ? '17px' :
                              '18px'
                            } !important;
                          }
                          .tour-card-responsive-preview .rounded-bl-\\[3px\\] {
                            border-bottom-left-radius: ${
                              tourCardSize === '640px' ? '3px' :
                              tourCardSize === '768px' ? '4px' :
                              tourCardSize === '1024px' ? '7px' :
                              tourCardSize === '1280px' ? '8px' :
                              '9px'
                            } !important;
                          }
                          /* Other text elements */
                          .tour-card-responsive-preview [class*="text-[7px]"] {
                            font-size: ${
                              tourCardSize === '640px' ? '7px' :
                              tourCardSize === '768px' ? '9px' :
                              tourCardSize === '1024px' ? '16px' :
                              tourCardSize === '1280px' ? '19px' :
                              '20px'
                            } !important;
                          }
                          /* TourTagBadge responsive overrides */
                          .tour-card-responsive-preview [class*="h-[13px]"] {
                            height: ${
                              tourCardSize === '640px' ? '13px' :
                              tourCardSize === '768px' ? '18px' :
                              tourCardSize === '1024px' ? '30px' :
                              tourCardSize === '1280px' ? '36px' :
                              '38px'
                            } !important;
                          }
                          .tour-card-responsive-preview [class*="w-[9px]"] {
                            width: ${
                              tourCardSize === '640px' ? '9px' :
                              tourCardSize === '768px' ? '12px' :
                              tourCardSize === '1024px' ? '21px' :
                              tourCardSize === '1280px' ? '24px' :
                              '26px'
                            } !important;
                          }
                          .tour-card-responsive-preview [class*="h-[9px]"] {
                            height: ${
                              tourCardSize === '640px' ? '9px' :
                              tourCardSize === '768px' ? '12px' :
                              tourCardSize === '1024px' ? '21px' :
                              tourCardSize === '1280px' ? '24px' :
                              '26px'
                            } !important;
                          }
                          .tour-card-responsive-preview [class*="px-[5px]"] {
                            padding-left: ${
                              tourCardSize === '640px' ? '5px' :
                              tourCardSize === '768px' ? '7px' :
                              tourCardSize === '1024px' ? '13px' :
                              tourCardSize === '1280px' ? '15px' :
                              '16px'
                            } !important;
                            padding-right: ${
                              tourCardSize === '640px' ? '5px' :
                              tourCardSize === '768px' ? '7px' :
                              tourCardSize === '1024px' ? '13px' :
                              tourCardSize === '1280px' ? '15px' :
                              '16px'
                            } !important;
                          }
                          .tour-card-responsive-preview [class*="gap-[5px]"] {
                            gap: ${
                              tourCardSize === '640px' ? '5px' :
                              tourCardSize === '768px' ? '7px' :
                              tourCardSize === '1024px' ? '12px' :
                              tourCardSize === '1280px' ? '14px' :
                              '15px'
                            } !important;
                          }
                          .tour-card-responsive-preview [class*="left-[12px]"] {
                            left: ${
                              tourCardSize === '640px' ? '12px' :
                              tourCardSize === '768px' ? '16px' :
                              tourCardSize === '1024px' ? '28px' :
                              tourCardSize === '1280px' ? '32px' :
                              '35px'
                            } !important;
                          }
                          .tour-card-responsive-preview [class*="right-[12px]"] {
                            right: ${
                              tourCardSize === '640px' ? '12px' :
                              tourCardSize === '768px' ? '16px' :
                              tourCardSize === '1024px' ? '29px' :
                              tourCardSize === '1280px' ? '33px' :
                              '36px'
                            } !important;
                          }
                          .tour-card-responsive-preview [class*="top-[101px]"] {
                            top: ${
                              tourCardSize === '640px' ? '101px' :
                              tourCardSize === '768px' ? '141px' :
                              tourCardSize === '1024px' ? '243px' :
                              tourCardSize === '1280px' ? '284px' :
                              '304px'
                            } !important;
                          }
                          .tour-card-responsive-preview [class*="top-[124px]"] {
                            top: ${
                              tourCardSize === '640px' ? '124px' :
                              tourCardSize === '768px' ? '172px' :
                              tourCardSize === '1024px' ? '298px' :
                              tourCardSize === '1280px' ? '347px' :
                              '372px'
                            } !important;
                          }
                          .tour-card-responsive-preview [class*="top-[140px]"] {
                            top: ${
                              tourCardSize === '640px' ? '140px' :
                              tourCardSize === '768px' ? '194px' :
                              tourCardSize === '1024px' ? '335px' :
                              tourCardSize === '1280px' ? '391px' :
                              '418px'
                            } !important;
                          }
                        `
                      }} />
                      <TourCard
                        id="korea-scenic"
                        title="7D6N Scenic Korea"
                        price="fr $1,438/pax"
                        description="Experience the vibrant culture of South Korea with visits to Seoul, Busan, and Jeju Island. Includes traditional markets and K-pop experiences."
                        image="/assets/images/destination-korea.jpg"
                        tags={['Best Seller']}
                        badge="Best Seller"
                        href="/tours/korea-scenic"
                        className="pointer-events-none"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  * Card uses Tailwind responsive classes to scale naturally at different viewport widths. Resize container to see responsive behavior.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Destination Card */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">DestinationCard Component</h2>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
                <h4 className="text-sm font-semibold text-purple-900 mb-2">File: /src/components/ui/cards/destination-card.tsx</h4>
                <p className="text-sm text-purple-800">
                  <strong>Props Interface:</strong> DestinationCardProps with id, name, image, href?, className?<br/>
                  <strong>Responsive Dimensions:</strong> Scales from 364px × 519px baseline (1920px) down to 120px × 171px (640px)<br/>
                  <strong>Features:</strong> Next.js Image with gradient overlay, responsive Thunder font, hover scale animation, responsive arrow icon<br/>
                  <strong>Styling:</strong> Complex gradient overlay, responsive absolute positioning, group hover effects<br/>
                  <strong>Usage:</strong> Explore destinations carousel, country discovery sections
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-700">Real Destination Card from Explore Destinations - Responsive Preview</h4>
                
                {/* Individual Preview Size Selector */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-sm font-medium text-gray-700 mr-2">Preview Size:</span>
                  <button
                    onClick={() => setDestinationCardSize('100%')}
                    className={`px-3 py-1 text-xs rounded transition-colors ${
                      destinationCardSize === '100%' 
                        ? 'bg-purple-500 text-white' 
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    2XL (100%)
                  </button>
                  <button
                    onClick={() => setDestinationCardSize('1280px')}
                    className={`px-3 py-1 text-xs rounded transition-colors ${
                      destinationCardSize === '1280px' 
                        ? 'bg-purple-500 text-white' 
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    XL (1280px)
                  </button>
                  <button
                    onClick={() => setDestinationCardSize('1024px')}
                    className={`px-3 py-1 text-xs rounded transition-colors ${
                      destinationCardSize === '1024px' 
                        ? 'bg-purple-500 text-white' 
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    LG (1024px)
                  </button>
                  <button
                    onClick={() => setDestinationCardSize('768px')}
                    className={`px-3 py-1 text-xs rounded transition-colors ${
                      destinationCardSize === '768px' 
                        ? 'bg-purple-500 text-white' 
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    MD (768px)
                  </button>
                  <button
                    onClick={() => setDestinationCardSize('640px')}
                    className={`px-3 py-1 text-xs rounded transition-colors ${
                      destinationCardSize === '640px' 
                        ? 'bg-purple-500 text-white' 
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    SM (640px)
                  </button>
                </div>
                
                <div className="relative">
                  <div className="absolute top-2 right-2 bg-black/75 text-white px-2 py-1 rounded text-xs z-10">
                    {destinationCardSize}
                  </div>
                  <div className="bg-gray-100 border-2 border-dashed border-purple-300 rounded-lg p-4 overflow-x-auto">
                    <div 
                      className="transition-all duration-300 flex justify-center items-start destination-card-responsive-preview" 
                      style={{ 
                        width: '100%',
                        minHeight: '200px'
                      }}
                    >
                      <style dangerouslySetInnerHTML={{
                        __html: `
                          /* Force responsive breakpoint simulation for DestinationCard */
                          .destination-card-responsive-preview [class*="w-[120px]"] {
                            width: ${
                              destinationCardSize === '640px' ? '120px' :
                              destinationCardSize === '768px' ? '167px' :
                              destinationCardSize === '1024px' ? '290px' :
                              destinationCardSize === '1280px' ? '338px' :
                              '364px'
                            } !important;
                          }
                          .destination-card-responsive-preview [class*="h-[171px]"] {
                            height: ${
                              destinationCardSize === '640px' ? '171px' :
                              destinationCardSize === '768px' ? '239px' :
                              destinationCardSize === '1024px' ? '414px' :
                              destinationCardSize === '1280px' ? '483px' :
                              '519px'
                            } !important;
                          }
                          .destination-card-responsive-preview [class*="w-[113px]"] {
                            width: ${
                              destinationCardSize === '640px' ? '113px' :
                              destinationCardSize === '768px' ? '158px' :
                              destinationCardSize === '1024px' ? '274px' :
                              destinationCardSize === '1280px' ? '320px' :
                              '344px'
                            } !important;
                          }
                          .destination-card-responsive-preview [class*="h-[164px]"] {
                            height: ${
                              destinationCardSize === '640px' ? '164px' :
                              destinationCardSize === '768px' ? '230px' :
                              destinationCardSize === '1024px' ? '398px' :
                              destinationCardSize === '1280px' ? '464px' :
                              '499px'
                            } !important;
                          }
                          .destination-card-responsive-preview [class*="text-[16px]"] {
                            font-size: ${
                              destinationCardSize === '640px' ? '16px' :
                              destinationCardSize === '768px' ? '22px' :
                              destinationCardSize === '1024px' ? '36px' :
                              destinationCardSize === '1280px' ? '42px' :
                              '45px'
                            } !important;
                          }
                          .destination-card-responsive-preview [class*="leading-[18px]"] {
                            line-height: ${
                              destinationCardSize === '640px' ? '18px' :
                              destinationCardSize === '768px' ? '24px' :
                              destinationCardSize === '1024px' ? '40px' :
                              destinationCardSize === '1280px' ? '45px' :
                              '48px'
                            } !important;
                          }
                          .destination-card-responsive-preview [class*="bottom-[15px]"] {
                            bottom: ${
                              destinationCardSize === '640px' ? '15px' :
                              destinationCardSize === '768px' ? '18px' :
                              destinationCardSize === '1024px' ? '32px' :
                              destinationCardSize === '1280px' ? '37px' :
                              '40px'
                            } !important;
                          }
                          .destination-card-responsive-preview [class*="left-[15px]"] {
                            left: ${
                              destinationCardSize === '640px' ? '15px' :
                              destinationCardSize === '768px' ? '24px' :
                              destinationCardSize === '1024px' ? '26px' :
                              destinationCardSize === '1280px' ? '30px' :
                              '32px'
                            } !important;
                          }
                          .destination-card-responsive-preview [class*="right-[8px]"] {
                            right: ${
                              destinationCardSize === '640px' ? '8px' :
                              destinationCardSize === '768px' ? '8px' :
                              destinationCardSize === '1024px' ? '26px' :
                              destinationCardSize === '1280px' ? '30px' :
                              '32px'
                            } !important;
                          }
                          .destination-card-responsive-preview [class*="w-[11px]"] {
                            width: ${
                              destinationCardSize === '640px' ? '12px' :
                              destinationCardSize === '768px' ? '13px' :
                              destinationCardSize === '1024px' ? '14px' :
                              destinationCardSize === '1280px' ? '16px' :
                              '18px'
                            } !important;
                          }
                          .destination-card-responsive-preview [class*="h-[7px]"] {
                            height: ${
                              destinationCardSize === '640px' ? '8px' :
                              destinationCardSize === '768px' ? '9px' :
                              destinationCardSize === '1024px' ? '9px' :
                              destinationCardSize === '1280px' ? '11px' :
                              '12px'
                            } !important;
                          }
                        `
                      }} />
                      <DestinationCard
                        id="taiwan"
                        name="Taiwan"
                        image="/assets/images/destination-taiwan.jpg"
                        className="pointer-events-none"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  * Card uses Tailwind responsive classes to scale naturally at different viewport widths. Resize container to see responsive behavior.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Theme Card */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">ThemeCard Component</h2>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="bg-red-50 border-l-4 border-red-500 p-4">
                <h4 className="text-sm font-semibold text-red-900 mb-2">File: /src/components/ui/cards/theme-card.tsx</h4>
                <p className="text-sm text-red-800">
                  <strong>Props Interface:</strong> ThemeCardProps with id, title, description, image, href?, className?<br/>
                  <strong>Dimensions:</strong> 344px × 499px with rounded-[11px]<br/>
                  <strong>Features:</strong> Full background image, complex gradient overlay, Thunder font title (45px), white View More button<br/>
                  <strong>Styling:</strong> Multi-stop gradient overlay, hover scale on image, absolute positioned text<br/>
                  <strong>Usage:</strong> Themed journeys section carousel, category exploration
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-700">Real Theme Card from Themed Journeys - Responsive Preview</h4>
                
                {/* Individual Preview Size Selector */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-sm font-medium text-gray-700 mr-2">Preview Size:</span>
                  <button
                    onClick={() => setThemeCardSize('100%')}
                    className={`px-3 py-1 text-xs rounded transition-colors ${
                      themeCardSize === '100%' 
                        ? 'bg-red-500 text-white' 
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    2XL (100%)
                  </button>
                  <button
                    onClick={() => setThemeCardSize('1280px')}
                    className={`px-3 py-1 text-xs rounded transition-colors ${
                      themeCardSize === '1280px' 
                        ? 'bg-red-500 text-white' 
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    XL (1280px)
                  </button>
                  <button
                    onClick={() => setThemeCardSize('1024px')}
                    className={`px-3 py-1 text-xs rounded transition-colors ${
                      themeCardSize === '1024px' 
                        ? 'bg-red-500 text-white' 
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    LG (1024px)
                  </button>
                  <button
                    onClick={() => setThemeCardSize('768px')}
                    className={`px-3 py-1 text-xs rounded transition-colors ${
                      themeCardSize === '768px' 
                        ? 'bg-red-500 text-white' 
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    MD (768px)
                  </button>
                  <button
                    onClick={() => setThemeCardSize('640px')}
                    className={`px-3 py-1 text-xs rounded transition-colors ${
                      themeCardSize === '640px' 
                        ? 'bg-red-500 text-white' 
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    SM (640px)
                  </button>
                </div>
                
                <div className="relative">
                  <div className="absolute top-2 right-2 bg-black/75 text-white px-2 py-1 rounded text-xs z-10">
                    {themeCardSize}
                  </div>
                  <div className="bg-gray-100 border-2 border-dashed border-red-300 rounded-lg p-4 overflow-x-auto">
                    <div 
                      className="transition-all duration-300 flex justify-center items-start theme-card-responsive-preview" 
                      style={{ 
                        width: '100%',
                        minHeight: '200px'
                      }}
                    >
                      <style dangerouslySetInnerHTML={{
                        __html: `
                          /* Force responsive breakpoint simulation for ThemeCard */
                          .theme-card-responsive-preview .w-\\[113px\\] {
                            width: ${
                              themeCardSize === '640px' ? '113px' :
                              themeCardSize === '768px' ? '158px' :
                              themeCardSize === '1024px' ? '275px' :
                              themeCardSize === '1280px' ? '321px' :
                              '344px'
                            } !important;
                          }
                          .theme-card-responsive-preview .h-\\[164px\\] {
                            height: ${
                              themeCardSize === '640px' ? '164px' :
                              themeCardSize === '768px' ? '230px' :
                              themeCardSize === '1024px' ? '399px' :
                              themeCardSize === '1280px' ? '465px' :
                              '499px'
                            } !important;
                          }
                          .theme-card-responsive-preview .text-\\[16px\\] {
                            font-size: ${
                              themeCardSize === '640px' ? '16px' :
                              themeCardSize === '768px' ? '18px' :
                              themeCardSize === '1024px' ? '36px' :
                              themeCardSize === '1280px' ? '42px' :
                              '45px'
                            } !important;
                          }
                          .theme-card-responsive-preview .leading-\\[15px\\] {
                            line-height: ${
                              themeCardSize === '640px' ? '15px' :
                              themeCardSize === '768px' ? '17px' :
                              themeCardSize === '1024px' ? '33px' :
                              themeCardSize === '1280px' ? '39px' :
                              '41px'
                            } !important;
                          }
                          .theme-card-responsive-preview .left-\\[10px\\] {
                            left: ${
                              themeCardSize === '640px' ? '10px' :
                              themeCardSize === '768px' ? '13px' :
                              themeCardSize === '1024px' ? '23px' :
                              themeCardSize === '1280px' ? '27px' :
                              '29px'
                            } !important;
                          }
                          .theme-card-responsive-preview .top-\\[13px\\] {
                            top: ${
                              themeCardSize === '640px' ? '13px' :
                              themeCardSize === '768px' ? '18px' :
                              themeCardSize === '1024px' ? '31px' :
                              themeCardSize === '1280px' ? '36px' :
                              '39px'
                            } !important;
                          }
                          .theme-card-responsive-preview .right-\\[18px\\] {
                            right: ${
                              themeCardSize === '640px' ? '18px' :
                              themeCardSize === '768px' ? '25px' :
                              themeCardSize === '1024px' ? '44px' :
                              themeCardSize === '1280px' ? '51px' :
                              '55px'
                            } !important;
                          }
                          .theme-card-responsive-preview .bottom-\\[12px\\] {
                            bottom: ${
                              themeCardSize === '640px' ? '12px' :
                              themeCardSize === '768px' ? '17px' :
                              themeCardSize === '1024px' ? '30px' :
                              themeCardSize === '1280px' ? '35px' :
                              '37px'
                            } !important;
                          }
                          .theme-card-responsive-preview .text-\\[8px\\] {
                            font-size: ${
                              themeCardSize === '640px' ? '8px' :
                              themeCardSize === '768px' ? '10px' :
                              themeCardSize === '1024px' ? '18px' :
                              themeCardSize === '1280px' ? '20px' :
                              '22px'
                            } !important;
                          }
                          .theme-card-responsive-preview .leading-\\[10px\\] {
                            line-height: ${
                              themeCardSize === '640px' ? '10px' :
                              themeCardSize === '768px' ? '13px' :
                              themeCardSize === '1024px' ? '23px' :
                              themeCardSize === '1280px' ? '26px' :
                              '28px'
                            } !important;
                          }
                          .theme-card-responsive-preview .w-\\[35px\\] {
                            width: ${
                              themeCardSize === '640px' ? '35px' :
                              themeCardSize === '768px' ? '49px' :
                              themeCardSize === '1024px' ? '85px' :
                              themeCardSize === '1280px' ? '99px' :
                              '107px'
                            } !important;
                          }
                          .theme-card-responsive-preview .h-\\[14px\\] {
                            height: ${
                              themeCardSize === '640px' ? '14px' :
                              themeCardSize === '768px' ? '19px' :
                              themeCardSize === '1024px' ? '33px' :
                              themeCardSize === '1280px' ? '39px' :
                              '42px'
                            } !important;
                          }
                          .theme-card-responsive-preview .text-\\[5px\\] {
                            font-size: ${
                              themeCardSize === '640px' ? '5px' :
                              themeCardSize === '768px' ? '7px' :
                              themeCardSize === '1024px' ? '13px' :
                              themeCardSize === '1280px' ? '15px' :
                              '16px'
                            } !important;
                          }
                          .theme-card-responsive-preview .rounded-\\[4px\\] {
                            border-radius: ${
                              themeCardSize === '640px' ? '4px' :
                              themeCardSize === '768px' ? '5px' :
                              themeCardSize === '1024px' ? '9px' :
                              themeCardSize === '1280px' ? '10px' :
                              '11px'
                            } !important;
                          }
                          .theme-card-responsive-preview .rounded-\\[2px\\] {
                            border-radius: ${
                              themeCardSize === '640px' ? '2px' :
                              themeCardSize === '768px' ? '3px' :
                              themeCardSize === '1024px' ? '5px' :
                              themeCardSize === '1280px' ? '6px' :
                              '6px'
                            } !important;
                          }
                          .theme-card-responsive-preview .mb-\\[7px\\] {
                            margin-bottom: ${
                              themeCardSize === '640px' ? '7px' :
                              themeCardSize === '768px' ? '9px' :
                              themeCardSize === '1024px' ? '16px' :
                              themeCardSize === '1280px' ? '18px' :
                              '20px'
                            } !important;
                          }
                        `
                      }} />
                      <ThemeCard
                        id="family"
                        title="Family Friendly"
                        description="Fun for the whole family."
                        image="/assets/images/theme-family-friendly.jpg"
                        className="pointer-events-none"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  * Card uses Tailwind responsive classes to scale naturally at different viewport widths. Resize container to see responsive behavior.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Adventure Card */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">AdventureCard Component</h2>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <h4 className="text-sm font-semibold text-yellow-900 mb-2">File: /src/components/ui/cards/adventure-card.tsx</h4>
                <p className="text-sm text-yellow-800">
                  <strong>Props Interface:</strong> AdventureCardProps with id, title, image, icon?, href?, className?<br/>
                  <strong>Dimensions:</strong> 344.47px × 606.25px (image: 344.46px × 499.25px)<br/>
                  <strong>Features:</strong> Background image with hover scale, overlapping 63px icon, Thunder title (45px), View more link<br/>
                  <strong>Styling:</strong> Complex gradient overlay, icon positioned at image/content boundary, absolute text positioning<br/>
                  <strong>Usage:</strong> Your Next Adventure section carousel, category exploration
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-700">Real Adventure Card from Your Next Adventure - Responsive Preview</h4>
                
                {/* Individual Preview Size Selector */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-sm font-medium text-gray-700 mr-2">Preview Size:</span>
                  <button
                    onClick={() => setAdventureCardSize('100%')}
                    className={`px-3 py-1 text-xs rounded transition-colors ${
                      adventureCardSize === '100%' 
                        ? 'bg-yellow-500 text-white' 
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    2XL (100%)
                  </button>
                  <button
                    onClick={() => setAdventureCardSize('1280px')}
                    className={`px-3 py-1 text-xs rounded transition-colors ${
                      adventureCardSize === '1280px' 
                        ? 'bg-yellow-500 text-white' 
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    XL (1280px)
                  </button>
                  <button
                    onClick={() => setAdventureCardSize('1024px')}
                    className={`px-3 py-1 text-xs rounded transition-colors ${
                      adventureCardSize === '1024px' 
                        ? 'bg-yellow-500 text-white' 
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    LG (1024px)
                  </button>
                  <button
                    onClick={() => setAdventureCardSize('768px')}
                    className={`px-3 py-1 text-xs rounded transition-colors ${
                      adventureCardSize === '768px' 
                        ? 'bg-yellow-500 text-white' 
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    MD (768px)
                  </button>
                  <button
                    onClick={() => setAdventureCardSize('640px')}
                    className={`px-3 py-1 text-xs rounded transition-colors ${
                      adventureCardSize === '640px' 
                        ? 'bg-yellow-500 text-white' 
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    SM (640px)
                  </button>
                </div>
                
                <div className="relative">
                  <div className="absolute top-2 right-2 bg-black/75 text-white px-2 py-1 rounded text-xs z-10">
                    {adventureCardSize}
                  </div>
                  <div className="bg-gray-100 border-2 border-dashed border-yellow-300 rounded-lg p-4 overflow-x-auto">
                    <div 
                      className="adventure-card-responsive-preview transition-all duration-300 flex justify-center items-start" 
                      style={{ 
                        width: '100%',
                        minHeight: '200px'
                      }}
                    >
                      <style dangerouslySetInnerHTML={{
                        __html: `
                          /* Force responsive breakpoint simulation for AdventureCard */
                          .adventure-card-responsive-preview [class*="w-[113px]"] {
                            width: ${
                              adventureCardSize === '640px' ? '113px' :
                              adventureCardSize === '768px' ? '228px' :
                              adventureCardSize === '1024px' ? '275px' :
                              adventureCardSize === '1280px' ? '321px' :
                              '344px'
                            } !important;
                          }
                          .adventure-card-responsive-preview [class*="h-[164px]"] {
                            height: ${
                              adventureCardSize === '640px' ? '164px' :
                              adventureCardSize === '768px' ? '331px' :
                              adventureCardSize === '1024px' ? '398px' :
                              adventureCardSize === '1280px' ? '464px' :
                              '499px'
                            } !important;
                          }
                          .adventure-card-responsive-preview [class*="text-[16px]"] {
                            font-size: ${
                              adventureCardSize === '640px' ? '30px' :
                              adventureCardSize === '768px' ? '32px' :
                              adventureCardSize === '1024px' ? '36px' :
                              adventureCardSize === '1280px' ? '42px' :
                              '45px'
                            } !important;
                          }
                          .adventure-card-responsive-preview [class*="w-[21px]"] {
                            width: ${
                              adventureCardSize === '640px' ? '52px' :
                              adventureCardSize === '768px' ? '45px' :
                              adventureCardSize === '1024px' ? '50px' :
                              adventureCardSize === '1280px' ? '58px' :
                              '63px'
                            } !important;
                          }
                          .adventure-card-responsive-preview [class*="h-[21px]"] {
                            height: ${
                              adventureCardSize === '640px' ? '52px' :
                              adventureCardSize === '768px' ? '45px' :
                              adventureCardSize === '1024px' ? '50px' :
                              adventureCardSize === '1280px' ? '58px' :
                              '63px'
                            } !important;
                          }
                          .adventure-card-responsive-preview [class*="text-[5px]"] {
                            font-size: ${
                              adventureCardSize === '640px' ? '14px' :
                              adventureCardSize === '768px' ? '15px' :
                              adventureCardSize === '1024px' ? '12px' :
                              adventureCardSize === '1280px' ? '14px' :
                              '16px'
                            } !important;
                          }
                          .adventure-card-responsive-preview [class*="mt-[15px]"] {
                            margin-top: ${
                              adventureCardSize === '640px' ? '32px' :
                              adventureCardSize === '768px' ? '28px' :
                              adventureCardSize === '1024px' ? '32px' :
                              adventureCardSize === '1280px' ? '37px' :
                              '40px'
                            } !important;
                          }
                          .adventure-card-responsive-preview [class*="gap-[1px]"] {
                            gap: ${
                              adventureCardSize === '640px' ? '8px' :
                              adventureCardSize === '768px' ? '6px' :
                              adventureCardSize === '1024px' ? '8px' :
                              adventureCardSize === '1280px' ? '10px' :
                              '12px'
                            } !important;
                          }
                          .adventure-card-responsive-preview [class*="top-[154px]"] {
                            top: ${
                              adventureCardSize === '640px' ? '402px' :
                              adventureCardSize === '768px' ? '309px' :
                              adventureCardSize === '1024px' ? '373px' :
                              adventureCardSize === '1280px' ? '435px' :
                              '467px'
                            } !important;
                          }
                        `
                      }} />
                      <AdventureCard
                        id="trending"
                        title="Trending Now"
                        image="/assets/images/adventure-trending-now.jpg"
                        href="/trending"
                        className="pointer-events-none"
                        icon={
                          <div className="w-[21px] h-[21px] sm:w-[46px] sm:h-[46px] md:w-[42px] md:h-[42px] lg:w-[50px] lg:h-[50px] xl:w-[58px] xl:h-[58px] 2xl:w-[63px] 2xl:h-[63px] bg-[#242424] rounded-full flex items-center justify-center">
                            <img src="/assets/icons/trending-now-icon.svg" alt="Trending" className="w-full h-full" />
                          </div>
                        }
                      />
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  * Card uses Tailwind responsive classes to scale naturally at different viewport widths. Resize container to see responsive behavior.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* New Priority 1 Components */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">New Priority 1 Components</h2>
        <div className="bg-green-50 border-l-4 border-green-500 p-4">
          <p className="text-sm text-green-800">
            <strong>Recently Implemented:</strong> These are the newly created Priority 1 components from the missing components analysis.
          </p>
        </div>

        {/* Expert Card */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">ExpertCard Component</h3>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
              <p className="text-sm text-blue-800">
                <strong>File:</strong> /src/components/ui/cards/expert-card.tsx<br/>
                <strong>Purpose:</strong> Expert profile cards for Meet The Experts page<br/>
                <strong>Features:</strong> Custom positioned image, name, reviews, description<br/>
                <strong>Styling:</strong> Fixed 467x559px, border #E8E8E8, rounded-[20px]
              </p>
            </div>
            <div className="flex justify-center">
              <ExpertCard
                name="Jeremiah Tan"
                description="See the world with Jeremiah! Fun, loving and never seems to run out of energy. I've plenty of interesting 'stories' to..."
                reviews={315}
                image="/assets/images/expert-jeremiah.jpg"
                imageWidth={226}
                imageHeight={337}
                imageTop={21}
                imageLeft={113}
                className="pointer-events-none"
              />
            </div>
          </CardContent>
        </Card>

        {/* Testimonial Card */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">TestimonialCard Component</h3>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
              <p className="text-sm text-blue-800">
                <strong>File:</strong> /src/components/ui/cards/testimonial-card.tsx<br/>
                <strong>Purpose:</strong> Customer review cards with ratings and platform integration<br/>
                <strong>Features:</strong> Star ratings, customer info, review text, platform icons (Google/Facebook)
              </p>
            </div>
            <div className="flex justify-center">
              <TestimonialCard
                id="review-1"
                customerName="Michael Chen"
                customerLocation="Singapore"
                customerImage="/assets/social/instagram-post-1.jpg"
                rating={5}
                reviewText="Absolutely fantastic experience! The tour was well-organized and our guide was incredibly knowledgeable. Would definitely book again!"
                tourName="10D9N Grand Europe Tour"
                reviewDate="Dec 2024"
                platform="google"
                className="pointer-events-none"
              />
            </div>
          </CardContent>
        </Card>

        {/* Press Article Card */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">PressArticleCard Component</h3>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
              <p className="text-sm text-blue-800">
                <strong>File:</strong> /src/components/ui/cards/press-article-card.tsx<br/>
                <strong>Purpose:</strong> Press article cards for Press & Media page<br/>
                <strong>Features:</strong> Thumbnail, title, date, description, read article button<br/>
                <strong>Styling:</strong> Fixed 467x735px, border #E8E8E8, rounded-[20px]
              </p>
            </div>
            <div className="flex justify-center">
              <PressArticleCard
                id="press-1"
                title="Our inaugural leisure trip to Germany on 21 Sep 2021"
                description="In this Lianhe Zaobao interview, our director Mr Wong Yew Hoong shares more about our upcoming Germany trip and the safety measures in place."
                date="9 Apr 2024"
                thumbnail="/assets/images/press-article-1.jpg"
                className="pointer-events-none"
              />
            </div>
          </CardContent>
        </Card>

        {/* Award Card */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">AwardCard Component</h3>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
              <p className="text-sm text-blue-800">
                <strong>File:</strong> /src/components/ui/cards/award-card.tsx<br/>
                <strong>Purpose:</strong> Simple award cards for Awards page<br/>
                <strong>Features:</strong> Fixed aspect ratio container, positioned image<br/>
                <strong>Styling:</strong> Rounded-lg, shadow-xl, absolute positioning for image
              </p>
            </div>
            <div className="flex justify-center">
              <AwardCard
                id="award-1"
                image="/assets/awards/award-card-1.png"
                year="2023"
                fitType="contain"
                className="pointer-events-none"
              />
            </div>
          </CardContent>
        </Card>

        {/* Brochure Card */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">BrochureCard Component</h3>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
              <p className="text-sm text-blue-800">
                <strong>File:</strong> /src/components/ui/cards/brochure-card.tsx<br/>
                <strong>Purpose:</strong> Brochure cards for Brochures page<br/>
                <strong>Features:</strong> Fixed aspect ratio image, centered title with date range, View/Download buttons<br/>
                <strong>Styling:</strong> 20px border radius, border #E8E8E8, hover scale on image
              </p>
            </div>
            <div className="flex justify-center">
              <BrochureCard
                id="brochure-1"
                title="Australia"
                dateRange="(Nov 2024 - Mar 2025)"
                image="/assets/brochures/australia.jpg"
                className="pointer-events-none max-w-[261px]"
              />
            </div>
          </CardContent>
        </Card>

        {/* Album Card */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">AlbumCard Component</h3>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
              <p className="text-sm text-blue-800">
                <strong>File:</strong> /src/components/ui/cards/album-card.tsx<br/>
                <strong>Purpose:</strong> Photo album cards for Tour Albums page<br/>
                <strong>Features:</strong> Fixed aspect ratio image, date and tour manager info<br/>
                <strong>Styling:</strong> Rounded-lg, custom shadow, hover effect, cursor pointer
              </p>
            </div>
            <div className="flex justify-center">
              <AlbumCard
                id="album-1"
                image="/assets/albums/switzerland-1.jpg"
                date="10 December 2024"
                tourManager="Connie Hay"
                destination="Switzerland"
                className="pointer-events-none max-w-[461px]"
              />
            </div>
          </CardContent>
        </Card>

        {/* TourReviewCard */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">TourReviewCard Component</h3>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
              <p className="text-sm text-green-800">
                <strong>File:</strong> /src/components/ui/cards/tour-review-card.tsx<br/>
                <strong>Purpose:</strong> Customer review cards for tour testimonials sections<br/>
                <strong>Features:</strong> Avatar/initial display, star ratings, verified badge, expandable text<br/>
                <strong>Dimensions:</strong> Mobile: 238px height | Desktop: min-height 250px<br/>
                <strong>Variants:</strong> Facebook, Google, Website source indicators with different avatar styles
              </p>
            </div>
            
            {/* Individual Preview Size Selector */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-sm font-medium text-gray-700 mr-2">Preview Size:</span>
              <button
                onClick={() => setTourReviewCardSize('100%')}
                className={`px-3 py-1 text-xs rounded transition-colors ${
                  tourReviewCardSize === '100%' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                2XL (100%)
              </button>
              <button
                onClick={() => setTourReviewCardSize('1280px')}
                className={`px-3 py-1 text-xs rounded transition-colors ${
                  tourReviewCardSize === '1280px' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                XL (1280px)
              </button>
              <button
                onClick={() => setTourReviewCardSize('1024px')}
                className={`px-3 py-1 text-xs rounded transition-colors ${
                  tourReviewCardSize === '1024px' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                LG (1024px)
              </button>
              <button
                onClick={() => setTourReviewCardSize('768px')}
                className={`px-3 py-1 text-xs rounded transition-colors ${
                  tourReviewCardSize === '768px' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                MD (768px)
              </button>
              <button
                onClick={() => setTourReviewCardSize('320px')}
                className={`px-3 py-1 text-xs rounded transition-colors ${
                  tourReviewCardSize === '320px' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                Mobile (320px)
              </button>
            </div>
            
            <div className="space-y-6">
              {/* Review Examples */}
              <div className="space-y-4" style={{maxWidth: tourReviewCardSize}}>
                <h4 className="text-sm font-semibold text-gray-700">Website Review (Default)</h4>
                <TourReviewCard
                  id="review-1"
                  customerName="Dhevi Suppiah"
                  customerInitial="D"
                  rating={5}
                  date="26 Nov 2024"
                  reviewText="Highly recommend EU Holidays! The Innsbruck hotels were beautiful, and Switzerland was breathtaking..."
                  fullText="Highly recommend EU Holidays! The Innsbruck hotels were beautiful, and Switzerland was breathtaking. Our tour guide was exceptional - knowledgeable, patient, and went above and beyond to ensure everyone had a great experience. The itinerary was well-planned with perfect timing at each destination."
                  source="website"
                  verified={true}
                  onToggleExpand={(id) => console.log('Toggle expand:', id)}
                />
              </div>
              
              <div className="space-y-4" style={{maxWidth: tourReviewCardSize}}>
                <h4 className="text-sm font-semibold text-gray-700">Facebook Review</h4>
                <TourReviewCard
                  id="review-2"
                  customerName="Andy Tan"
                  rating={5}
                  date="15 Dec 2024"
                  reviewText="Amazing tour experience! The Swiss Alps were spectacular and our guide made the trip unforgettable."
                  source="facebook"
                  verified={true}
                />
              </div>
              
              <div className="space-y-4" style={{maxWidth: tourReviewCardSize}}>
                <h4 className="text-sm font-semibold text-gray-700">Google Review</h4>
                <TourReviewCard
                  id="review-3"
                  customerName="Michelle Lee"
                  customerInitial="M"
                  rating={4}
                  date="5 Jan 2025"
                  reviewText="Great tour overall! The hotels were comfortable and the destinations were beautiful. Would recommend!"
                  source="google"
                  verified={true}
                  avatar="/assets/testimonials/lee-jane.jpg"
                />
              </div>
            </div>
          </CardContent>
        </Card>


      </div>

      {/* Card Technical Specifications */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">Card Technical Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Design Principles</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Fixed Figma dimensions with pixel-perfect positioning
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Border radius: 9px (TourCard, DestinationCard, AdventureCard), 11px (ThemeCard)
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Custom shadow: '0px 3px 3px 0px rgba(0, 0, 0, 0.16)' from design tokens
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Absolute positioning for text elements with precise Figma coordinates
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Thunder font for titles (45px/50px), Onest font for body text (18px/20px/22px)
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Component Features</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">ℹ</span>
                  Next.js Image optimization with priority loading
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">ℹ</span>
                  Complex gradient overlays for image readability
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">ℹ</span>
                  Hover animations: scale transforms, icon movements
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">ℹ</span>
                  Embedded SVG icons with custom styling
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">ℹ</span>
                  Group hover effects with CSS class targeting
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Usage Guidelines */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">Usage Guidelines</h2>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Implementation Patterns</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">→</span>
                    <strong>TourCard:</strong> Used in carousels with 50px gap, featured tours section
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">→</span>
                    <strong>DestinationCard:</strong> Used in explore sections with 30px gap
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">→</span>
                    <strong>ThemeCard:</strong> Used in themed journeys with 50px gap, gray background sections
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">→</span>
                    <strong>AdventureCard:</strong> Used in adventure sections with 50px gap, custom icons
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Responsive Scaling System</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Cards scale proportionally from 1920px Figma baseline
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Scaling factors: 768px (40%), 1024px (53%), 1280px (67%), 1920px (100%)
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Font sizes scale: Thunder 45px → 18px, Onest 20px → 11px
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Card dimensions scale: TourCard 460×643px → 184×257px
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Icons and spacing maintain proportional relationships
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}