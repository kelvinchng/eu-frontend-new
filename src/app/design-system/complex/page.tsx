'use client'

import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { MegaMenu } from '@/components/common/nav/mega-menu'
import { ToursSearchFilter } from '@/components/common/tours-search-filter'
import { TourItinerary } from '@/app/tours/[tourId]/components/tour-itinerary'
import { TourTabs } from '@/app/tours/[tourId]/components/tour-tabs'
import { DesktopNav } from '@/components/common/nav/desktop-nav'
import { MobileNav } from '@/components/common/nav/mobile-nav'
import { FeaturedToursSection } from '@/components/common/featured-tours'
import { Footer } from '@/components/common/footer'
import { SearchBar } from '@/components/ui/search-bar'
import { SearchBarMobile } from '@/components/ui/search-bar-mobile'
import { FilterBar } from '@/components/ui/filter-bar'
import { FilterBarMobile } from '@/components/ui/filter-bar-mobile'

// Mock data for TourItinerary
const mockItinerary = [
  {
    day: 1,
    title: "SINGAPORE – LONDON - ZURICH - LUCERNE",
    activities: [
      "Assemble at Changi Airport for your flight to London.",
      "Upon arrival in London, take a connecting flight to Zurich.",
      "Upon arrival in Zurich, you will be met and transferred to Lucerne.",
      "Enjoy the scenic journey through the Swiss countryside."
    ],
    meals: { breakfast: false, lunch: false, dinner: true },
    accommodation: "Grand Hotel National or similar"
  },
  {
    day: 2,
    title: "LUCERNE - MT. TITLIS - LUCERNE",
    activities: [
      "After breakfast, embark on an excursion to Mt. Titlis.",
      "Take the revolving Rotair cable car to the summit.",
      "Enjoy breathtaking views of the Swiss Alps.",
      "Visit the Glacier Cave and walk across the Cliff Walk suspension bridge.",
      "Return to Lucerne for overnight stay."
    ],
    meals: { breakfast: true, lunch: true, dinner: true },
    accommodation: "Grand Hotel National or similar"
  },
  {
    day: 3,
    title: "LUCERNE - INTERLAKEN - GRINDELWALD",
    activities: [
      "Morning departure to Interlaken via the scenic Brünig Pass.",
      "Stop at Interlaken for lunch and free time.",
      "Continue to Grindelwald, nestled below the Eiger North Face.",
      "Check in to your hotel and enjoy the alpine atmosphere."
    ],
    meals: { breakfast: true, lunch: true, dinner: true },
    accommodation: "Hotel Belvedere or similar"
  }
]

export default function ComplexComponentsPage() {
  const [searchBarSize, setSearchBarSize] = useState('100%')
  const [filterBarSize, setFilterBarSize] = useState('100%')

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Complex Production Components
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          These are the actual complex components used throughout the EU Holidays platform. Each component combines multiple 
          base components with state management, business logic, and responsive behavior.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <p className="text-sm text-blue-800">
            <strong>Note:</strong> These are live components from the production codebase. Some are shown at reduced scale 
            or with mock data to fit within the design system layout.
          </p>
        </div>
      </div>

      {/* Navigation Components */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">1. Navigation Components</h2>
        
        {/* Desktop Navigation */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <h4 className="text-sm font-semibold text-blue-900 mb-2">Desktop Navigation</h4>
                <p className="text-sm text-blue-800">
                  <strong>File:</strong> /src/components/common/nav/desktop-nav.tsx<br/>
                  <strong>Features:</strong> Logo, main menu links, WhatsApp button, responsive padding<br/>
                  <strong>Variants:</strong> Standard and scrolled versions with different styling
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-700">Live Desktop Navigation</h4>
                <div className="bg-gray-100 border-2 border-dashed border-blue-300 rounded-lg overflow-hidden">
                  <DesktopNav viewAsComponent />
                </div>
                <p className="text-xs text-gray-500">* Desktop navigation component in isolated view mode</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mobile Navigation */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-4">
                <h4 className="text-sm font-semibold text-green-900 mb-2">Mobile Navigation</h4>
                <p className="text-sm text-green-800">
                  <strong>File:</strong> /src/components/common/nav/mobile-nav.tsx<br/>
                  <strong>Features:</strong> Hamburger menu, logo, WhatsApp, slide-out menu<br/>
                  <strong>State:</strong> Menu open/close with overlay backdrop
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-700">Live Mobile Navigation</h4>
                <div className="bg-gray-100 border-2 border-dashed border-green-300 rounded-lg overflow-hidden max-w-md mx-auto">
                  <MobileNav viewAsComponent />
                </div>
                <p className="text-xs text-gray-500">* Mobile navigation - click hamburger to see slide-out menu</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mega Menu */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
                <h4 className="text-sm font-semibold text-purple-900 mb-2">Mega Menu Component</h4>
                <p className="text-sm text-purple-800">
                  <strong>File:</strong> /src/components/common/nav/mega-menu.tsx<br/>
                  <strong>Complexity:</strong> 529 lines of code<br/>
                  <strong>Features:</strong> Multi-level navigation, region panels, country listings<br/>
                  <strong>State:</strong> Active menu tracking, region switching, hover states
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-700">Mega Menu Structure</h4>
                <div className="bg-gray-50 rounded-lg p-4 text-sm">
                  <p className="font-medium mb-2">Component Features:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Primary menu items: Home, Destinations, Deals, etc.</li>
                    <li>• Extended regions panel with 5 regions</li>
                    <li>• Country listings per region (4-15 countries each)</li>
                    <li>• Dynamic content switching based on selection</li>
                    <li>• Responsive backdrop and positioning</li>
                    <li>• Integration with desktop navigation</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search & Filter Components */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">2. Search & Filter Components</h2>
        
        {/* Search Bar Desktop */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <h4 className="text-sm font-semibold text-blue-900 mb-2">Search Bar (Desktop)</h4>
                <p className="text-sm text-blue-800">
                  <strong>File:</strong> /src/components/ui/search-bar.tsx<br/>
                  <strong>Figma:</strong> Hero Tour Search Menu - 1378x169px<br/>
                  <strong>Features:</strong> Destination, From/To dates, Holiday type with search and clear<br/>
                  <strong>Layout:</strong> Responsive grid layout, switches to mobile below lg (1024px)
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-700">Live Search Bar - Responsive Preview</h4>
                
                {/* Screen Size Selector */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <button
                    onClick={() => setSearchBarSize('100%')}
                    className={`px-3 py-1 text-xs rounded transition-colors ${
                      searchBarSize === '100%' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    Desktop (100%)
                  </button>
                  <button
                    onClick={() => setSearchBarSize('1280px')}
                    className={`px-3 py-1 text-xs rounded transition-colors ${
                      searchBarSize === '1280px' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    XL (1280px)
                  </button>
                  <button
                    onClick={() => setSearchBarSize('1024px')}
                    className={`px-3 py-1 text-xs rounded transition-colors ${
                      searchBarSize === '1024px' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    LG (1024px)
                  </button>
                  <button
                    onClick={() => setSearchBarSize('768px')}
                    className={`px-3 py-1 text-xs rounded transition-colors ${
                      searchBarSize === '768px' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    MD (768px)
                  </button>
                </div>
                
                {/* Preview Container with Size Indicator */}
                <div className="relative">
                  <div className="absolute top-2 right-2 bg-black/75 text-white px-2 py-1 rounded text-xs z-10">
                    {searchBarSize}
                  </div>
                  <div className="bg-gray-100 border-2 border-dashed border-blue-300 rounded-lg p-4 overflow-x-auto">
                    <div 
                      className="mx-auto transition-all duration-300 relative" 
                      style={{ 
                        width: searchBarSize,
                        minHeight: '200px',
                        // Apply scaling based on container width (Figma baseline: 1920px = 100%)
                        fontSize: searchBarSize === '768px' ? '9px' : 
                                 searchBarSize === '1024px' ? '12px' :
                                 searchBarSize === '1280px' ? '15px' :
                                 searchBarSize === '100%' ? '18px' : '18px',
                        // Scale padding proportionally
                        '--scale-factor': searchBarSize === '768px' ? '0.4' :
                                         searchBarSize === '1024px' ? '0.533' :
                                         searchBarSize === '1280px' ? '0.667' :
                                         searchBarSize === '100%' ? '1' : '1'
                      } as React.CSSProperties}
                    >
                      {/* Responsive container that simulates viewport width */}
                      <div className="responsive-preview">
                        <style dangerouslySetInnerHTML={{
                          __html: `
                            .responsive-preview * {
                              font-size: inherit !important;
                            }
                            .responsive-preview button {
                              height: ${searchBarSize === '768px' ? '28px' : 
                                       searchBarSize === '1024px' ? '38px' :
                                       searchBarSize === '1280px' ? '45px' :
                                       searchBarSize === '100%' ? '51px' : '51px'} !important;
                            }
                            .responsive-preview .bg-white {
                              padding-left: ${searchBarSize === '768px' ? '16px' : 
                                              searchBarSize === '1024px' ? '32px' :
                                              searchBarSize === '1280px' ? '48px' :
                                              searchBarSize === '100%' ? '71px' : '71px'} !important;
                              padding-right: ${searchBarSize === '768px' ? '16px' : 
                                               searchBarSize === '1024px' ? '32px' :
                                               searchBarSize === '1280px' ? '48px' :
                                               searchBarSize === '100%' ? '71px' : '71px'} !important;
                              padding-top: ${searchBarSize === '768px' ? '16px' : 
                                            searchBarSize === '1024px' ? '24px' :
                                            searchBarSize === '1280px' ? '32px' :
                                            searchBarSize === '100%' ? '40px' : '40px'} !important;
                              padding-bottom: ${searchBarSize === '768px' ? '16px' : 
                                                searchBarSize === '1024px' ? '24px' :
                                                searchBarSize === '1280px' ? '32px' :
                                                searchBarSize === '100%' ? '40px' : '40px'} !important;
                            }
                          `
                        }} />
                        <SearchBar />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  * Component automatically switches between desktop and mobile versions at the lg breakpoint (1024px)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Search Bar Mobile */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-4">
                <h4 className="text-sm font-semibold text-green-900 mb-2">Search Bar (Mobile)</h4>
                <p className="text-sm text-green-800">
                  <strong>File:</strong> /src/components/ui/search-bar-mobile.tsx<br/>
                  <strong>Figma:</strong> Mobile Search Component - 358x307px<br/>
                  <strong>Features:</strong> Vertical layout with stacked inputs<br/>
                  <strong>Layout:</strong> Optimized for mobile with proper spacing
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-700">Live Search Bar Mobile</h4>
                <div className="bg-gray-100 border-2 border-dashed border-green-300 rounded-lg p-4 flex justify-center">
                  <SearchBarMobile />
                </div>
                <p className="text-xs text-gray-500">* Mobile-optimized search interface</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Filter Bar Desktop */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
                <h4 className="text-sm font-semibold text-purple-900 mb-2">Filter Bar (Desktop)</h4>
                <p className="text-sm text-purple-800">
                  <strong>File:</strong> /src/components/ui/filter-bar.tsx<br/>
                  <strong>Figma:</strong> Desktop Filter Component - 1255x223px<br/>
                  <strong>Features:</strong> Destination, dates, holiday type, duration, sort by<br/>
                  <strong>Layout:</strong> Responsive grid layout, mobile shows filter button
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-700">Live Filter Bar - Responsive Preview</h4>
                
                {/* Screen Size Selector */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <button
                    onClick={() => setFilterBarSize('100%')}
                    className={`px-3 py-1 text-xs rounded transition-colors ${
                      filterBarSize === '100%' 
                        ? 'bg-purple-500 text-white' 
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    Desktop (100%)
                  </button>
                  <button
                    onClick={() => setFilterBarSize('1280px')}
                    className={`px-3 py-1 text-xs rounded transition-colors ${
                      filterBarSize === '1280px' 
                        ? 'bg-purple-500 text-white' 
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    XL (1280px)
                  </button>
                  <button
                    onClick={() => setFilterBarSize('1024px')}
                    className={`px-3 py-1 text-xs rounded transition-colors ${
                      filterBarSize === '1024px' 
                        ? 'bg-purple-500 text-white' 
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    LG (1024px)
                  </button>
                  <button
                    onClick={() => setFilterBarSize('768px')}
                    className={`px-3 py-1 text-xs rounded transition-colors ${
                      filterBarSize === '768px' 
                        ? 'bg-purple-500 text-white' 
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    MD (768px)
                  </button>
                </div>
                
                {/* Preview Container with Size Indicator */}
                <div className="relative">
                  <div className="absolute top-2 right-2 bg-black/75 text-white px-2 py-1 rounded text-xs z-10">
                    {filterBarSize}
                  </div>
                  <div className="bg-gray-100 border-2 border-dashed border-purple-300 rounded-lg p-4 overflow-x-auto">
                    <div 
                      className="mx-auto transition-all duration-300 relative" 
                      style={{ 
                        width: filterBarSize,
                        minHeight: '300px',
                        // Apply scaling based on container width (Figma baseline: 1920px = 100%)
                        fontSize: filterBarSize === '768px' ? '9px' : 
                                 filterBarSize === '1024px' ? '12px' :
                                 filterBarSize === '1280px' ? '15px' :
                                 filterBarSize === '100%' ? '18px' : '18px',
                        // Scale padding proportionally
                        '--scale-factor': filterBarSize === '768px' ? '0.4' :
                                         filterBarSize === '1024px' ? '0.533' :
                                         filterBarSize === '1280px' ? '0.667' :
                                         filterBarSize === '100%' ? '1' : '1'
                      } as React.CSSProperties}
                    >
                      {/* Responsive container that simulates viewport width */}
                      <div className="responsive-preview">
                        <style dangerouslySetInnerHTML={{
                          __html: `
                            .responsive-preview * {
                              font-size: inherit !important;
                            }
                            .responsive-preview button {
                              height: ${filterBarSize === '768px' ? '28px' : 
                                       filterBarSize === '1024px' ? '38px' :
                                       filterBarSize === '1280px' ? '45px' :
                                       filterBarSize === '100%' ? '51px' : '51px'} !important;
                            }
                            .responsive-preview .bg-white {
                              padding-left: ${filterBarSize === '768px' ? '16px' : 
                                              filterBarSize === '1024px' ? '32px' :
                                              filterBarSize === '1280px' ? '48px' :
                                              filterBarSize === '100%' ? '71px' : '71px'} !important;
                              padding-right: ${filterBarSize === '768px' ? '16px' : 
                                               filterBarSize === '1024px' ? '32px' :
                                               filterBarSize === '1280px' ? '48px' :
                                               filterBarSize === '100%' ? '71px' : '71px'} !important;
                              padding-top: ${filterBarSize === '768px' ? '16px' : 
                                            filterBarSize === '1024px' ? '24px' :
                                            filterBarSize === '1280px' ? '32px' :
                                            filterBarSize === '100%' ? '40px' : '40px'} !important;
                              padding-bottom: ${filterBarSize === '768px' ? '16px' : 
                                                filterBarSize === '1024px' ? '24px' :
                                                filterBarSize === '1280px' ? '32px' :
                                                filterBarSize === '100%' ? '40px' : '40px'} !important;
                            }
                          `
                        }} />
                        <FilterBar />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  * Below lg breakpoint (1024px), component shows a "Filter & Sort" button that opens a mobile panel
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Filter Bar Mobile */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="bg-pink-50 border-l-4 border-pink-500 p-4">
                <h4 className="text-sm font-semibold text-pink-900 mb-2">Filter Bar (Mobile)</h4>
                <p className="text-sm text-pink-800">
                  <strong>File:</strong> /src/components/ui/filter-bar-mobile.tsx<br/>
                  <strong>Figma:</strong> Mobile Filter Component - 358x649px<br/>
                  <strong>Features:</strong> Expandable filter panel with all options<br/>
                  <strong>Layout:</strong> Vertical list with dividers and dual button actions
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-700">Live Filter Bar Mobile</h4>
                <div className="bg-gray-100 border-2 border-dashed border-pink-300 rounded-lg p-4 flex justify-center">
                  <FilterBarMobile />
                </div>
                <p className="text-xs text-gray-500">* Mobile filter panel with all filtering options</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tours Search Filter */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
                <h4 className="text-sm font-semibold text-orange-900 mb-2">Tours Search Filter (Legacy)</h4>
                <p className="text-sm text-orange-800">
                  <strong>File:</strong> /src/components/common/tours-search-filter.tsx<br/>
                  <strong>Complexity:</strong> 415 lines with 6 filter types<br/>
                  <strong>Features:</strong> Price range, duration, destinations, themes, departure, group size<br/>
                  <strong>Note:</strong> This is the existing component - consider using new SearchBar/FilterBar components
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-700">Live Tours Search Filter</h4>
                <div className="bg-gray-100 border-2 border-dashed border-orange-300 rounded-lg p-4">
                  <ToursSearchFilter />
                </div>
                <p className="text-xs text-gray-500">* Full interactive filter component with responsive design</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tour Detail Components */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">3. Tour Detail Components</h2>
        
        {/* Tour Tabs */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="bg-teal-50 border-l-4 border-teal-500 p-4">
                <h4 className="text-sm font-semibold text-teal-900 mb-2">Tour Tabs Navigation</h4>
                <p className="text-sm text-teal-800">
                  <strong>File:</strong> /src/app/tours/[tourId]/components/tour-tabs.tsx<br/>
                  <strong>Features:</strong> Tab navigation with active state, dynamic underline<br/>
                  <strong>Responsive:</strong> Different layouts for desktop/mobile
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-700">Live Tour Tabs</h4>
                <div className="bg-gray-100 border-2 border-dashed border-teal-300 rounded-lg p-4">
                  <TourTabs />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tour Itinerary */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4">
                <h4 className="text-sm font-semibold text-indigo-900 mb-2">Tour Itinerary Component</h4>
                <p className="text-sm text-indigo-800">
                  <strong>File:</strong> /src/app/tours/[tourId]/components/tour-itinerary.tsx<br/>
                  <strong>Complexity:</strong> 215 lines with accordion functionality<br/>
                  <strong>Features:</strong> Expandable days, meal icons, accommodation info<br/>
                  <strong>State:</strong> Tracks expanded/collapsed state for each day
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-700">Live Tour Itinerary</h4>
                <div className="bg-gray-100 border-2 border-dashed border-indigo-300 rounded-lg p-4">
                  <TourItinerary itinerary={mockItinerary} />
                </div>
                <p className="text-xs text-gray-500">* Click on days to expand/collapse itinerary details</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Section Components */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">4. Homepage Section Components</h2>
        
        {/* Featured Tours */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="bg-red-50 border-l-4 border-red-500 p-4">
                <h4 className="text-sm font-semibold text-red-900 mb-2">Featured Tours Section</h4>
                <p className="text-sm text-red-800">
                  <strong>File:</strong> /src/components/common/featured-tours.tsx<br/>
                  <strong>Features:</strong> Embla carousel, navigation dots, responsive container<br/>
                  <strong>Integration:</strong> Uses TourCard components with real data<br/>
                  <strong>State:</strong> Carousel position tracking and navigation
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-700">Live Featured Tours Section (Scaled)</h4>
                <div className="bg-gray-100 border-2 border-dashed border-red-300 rounded-lg overflow-hidden">
                  <div className="transform scale-75 origin-top">
                    <FeaturedToursSection />
                  </div>
                </div>
                <p className="text-xs text-gray-500">* Scaled to 75% - fully functional carousel with navigation</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer Component */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">5. Footer Component</h2>
        
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="bg-gray-50 border-l-4 border-gray-500 p-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Footer</h4>
                <p className="text-sm text-gray-800">
                  <strong>File:</strong> /src/components/common/footer/index.tsx<br/>
                  <strong>Complexity:</strong> 145 lines with multi-column layout<br/>
                  <strong>Features:</strong> Links, policies, contact info, social media<br/>
                  <strong>Structure:</strong> 4 main sections with precise spacing
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-700">Live Footer Component (Scaled)</h4>
                <div className="bg-gray-100 border-2 border-dashed border-gray-400 rounded-lg overflow-hidden">
                  <div className="transform scale-[0.6] origin-top">
                    <Footer />
                  </div>
                </div>
                <p className="text-xs text-gray-500">* Scaled to 60% - complete footer with all sections</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Complex Component Guidelines */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">Complex Component Architecture</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Component Characteristics</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Combines multiple base UI components
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Contains business logic and state management
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Handles responsive behavior internally
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Provides complete functional units
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Integrates with data and API layers
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Key Complex Components</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><strong>Navigation:</strong> MegaMenu, Desktop/Mobile Nav</li>
                <li><strong>Search:</strong> HeroSearchForm, ToursSearchFilter</li>
                <li><strong>Heroes:</strong> Hero, CountryHero, ToursHero</li>
                <li><strong>Tours:</strong> TourTabs, TourItinerary, TourGallery</li>
                <li><strong>Sections:</strong> Featured, Destinations, Themed</li>
                <li><strong>About:</strong> Milestones, MVV, People, Story</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}