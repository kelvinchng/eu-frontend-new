'use client'

import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { DesktopNav } from '@/components/common/nav/desktop-nav'
import { DesktopScrolledNav } from '@/components/common/nav/desktop-scrolled-nav'
import { MobileNav } from '@/components/common/nav/mobile-nav'
import { MobileScrolledNav } from '@/components/common/nav/mobile-scrolled-nav'
import { MobileMenu } from '@/components/common/nav/mobile-menu'
import { MegaMenu } from '@/components/common/nav/mega-menu'
import { TabNavigation } from '@/components/ui/navigation/tab-navigation'
import { AccordionFAQ, FAQSection } from '@/components/ui/navigation/accordion-faq'

// Component wrapper for better display
const ComponentWrapper = ({ children, height = 'auto' }: { children: React.ReactNode, height?: string }) => (
  <div style={{ height }}>
    {children}
  </div>
)

export default function NavigationPage() {

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Complete Navigation System
        </h1>
        <p className="text-lg text-gray-600 max-w-4xl">
          Comprehensive navigation system from <code>/src/components/common/nav/</code> showing all variants, states, 
          and responsive behaviors. Each component is displayed in non-interactive mode for documentation with live demos available.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 p-4">
          <p className="text-sm text-green-800">
            <strong>Complete System:</strong> Desktop (default/overlay), Desktop Scrolled, Mobile (overlay/default), 
            Mobile Scrolled, Mega Menu (primary/extended), and Mobile Menu with full navigation structure.
          </p>
        </div>
      </div>

      {/* Desktop Navigation - Default */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">1. Desktop Navigation - Default</h2>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <h4 className="text-sm font-semibold text-blue-900 mb-2">File: /src/components/common/nav/desktop-nav.tsx</h4>
                <p className="text-sm text-blue-800">
                  <strong>Variant:</strong> variant="default" - Solid background navigation<br/>
                  <strong>Dimensions:</strong> w-full × h-[121.6px] with responsive sizing<br/>
                  <strong>Layout:</strong> Menu button (left), Logo (center), Travel Essentials & Club (right)<br/>
                  <strong>Usage:</strong> Standard pages with solid #242424 background
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-700">Default Desktop Navigation</h4>
                <div className="relative bg-gray-100 rounded-lg overflow-hidden border-2 border-dashed border-blue-300" style={{ height: '140px' }}>
                  <ComponentWrapper>
                    <DesktopNav variant="default" viewAsComponent={true} />
                  </ComponentWrapper>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Desktop Navigation - Overlay */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">2. Desktop Navigation - Overlay</h2>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
                <h4 className="text-sm font-semibold text-purple-900 mb-2">File: /src/components/common/nav/desktop-nav.tsx</h4>
                <p className="text-sm text-purple-800">
                  <strong>Variant:</strong> variant="overlay" - Transparent overlay navigation<br/>
                  <strong>Positioning:</strong> absolute left-0 right-0 top-0 z-50<br/>
                  <strong>Background:</strong> Transparent by default, #242424 when mega menu opens<br/>
                  <strong>Usage:</strong> Hero sections for seamless content overlay
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-700">Overlay Desktop Navigation</h4>
                <div 
                  className="relative rounded-lg overflow-hidden border-2 border-dashed border-purple-300" 
                  style={{ 
                    height: '140px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                  }}
                >
                  <ComponentWrapper>
                    <DesktopNav variant="overlay" viewAsComponent={true} />
                  </ComponentWrapper>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Desktop Scrolled Navigation */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">3. Desktop Scrolled Navigation</h2>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-4">
                <h4 className="text-sm font-semibold text-green-900 mb-2">File: /src/components/common/nav/desktop-scrolled-nav.tsx</h4>
                <p className="text-sm text-green-800">
                  <strong>Positioning:</strong> fixed top-0 with shadow-lg and z-50<br/>
                  <strong>Layout:</strong> All menu items visible horizontally with dropdowns<br/>
                  <strong>Items:</strong> Plan Your Journey, Trending Destinations, Deals, About Us, Our Brands + logo + right links<br/>
                  <strong>Usage:</strong> Triggered on scroll for quick access to all sections
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-700">Scrolled Desktop Navigation</h4>
                <div className="relative bg-gray-100 rounded-lg overflow-hidden border-2 border-dashed border-green-300" style={{ height: '140px' }}>
                  <ComponentWrapper>
                    <DesktopScrolledNav viewAsComponent={true} />
                  </ComponentWrapper>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mobile Navigation - Overlay */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">4. Mobile Navigation - Overlay</h2>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
                <h4 className="text-sm font-semibold text-orange-900 mb-2">File: /src/components/common/nav/mobile-nav.tsx</h4>
                <p className="text-sm text-orange-800">
                  <strong>Variant:</strong> variant="overlay" - Transparent mobile navigation<br/>
                  <strong>Positioning:</strong> absolute top-[30px] left-[35px] right-[35px] z-20<br/>
                  <strong>Layout:</strong> Logo (left) + Hamburger menu (right)<br/>
                  <strong>Usage:</strong> Hero sections on mobile devices
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-700">Mobile Overlay Navigation</h4>
                <div 
                  className="relative rounded-lg overflow-hidden border-2 border-dashed border-orange-300 p-4 flex justify-center" 
                  style={{ 
                    height: '120px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                  }}
                >
                  <ComponentWrapper>
                    <MobileNav variant="overlay" viewAsComponent={true} />
                  </ComponentWrapper>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mobile Navigation - Default */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">5. Mobile Navigation - Default</h2>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4">
                <h4 className="text-sm font-semibold text-cyan-900 mb-2">File: /src/components/common/nav/mobile-nav.tsx</h4>
                <p className="text-sm text-cyan-800">
                  <strong>Variant:</strong> variant="default" - Solid background mobile navigation<br/>
                  <strong>Background:</strong> #242424 solid background<br/>
                  <strong>Layout:</strong> Same layout as overlay but with solid background<br/>
                  <strong>Usage:</strong> Standard mobile pages with solid navigation
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-700">Mobile Default Navigation</h4>
                <div className="relative bg-gray-100 rounded-lg overflow-hidden border-2 border-dashed border-cyan-300 p-4 flex justify-center" style={{ height: '120px' }}>
                  <ComponentWrapper>
                    <MobileNav variant="default" viewAsComponent={true} />
                  </ComponentWrapper>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mobile Scrolled Navigation */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">6. Mobile Scrolled Navigation</h2>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="bg-red-50 border-l-4 border-red-500 p-4">
                <h4 className="text-sm font-semibold text-red-900 mb-2">File: /src/components/common/nav/mobile-scrolled-nav.tsx</h4>
                <p className="text-sm text-red-800">
                  <strong>Positioning:</strong> fixed top-0 left-0 right-0 z-50<br/>
                  <strong>Dimensions:</strong> w-full × h-[81px] with px-[35px] padding<br/>
                  <strong>Background:</strong> Solid #242424 with transition animations<br/>
                  <strong>Usage:</strong> Triggered on scroll for mobile devices
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-700">Mobile Scrolled Navigation</h4>
                <div className="relative bg-gray-100 rounded-lg overflow-hidden border-2 border-dashed border-red-300 flex justify-center" style={{ height: '100px' }}>
                  <ComponentWrapper>
                    <MobileScrolledNav viewAsComponent={true} />
                  </ComponentWrapper>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mega Menu - Primary Dropdown */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">7. Mega Menu - Primary Dropdown</h2>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4">
                <h4 className="text-sm font-semibold text-indigo-900 mb-2">File: /src/components/common/nav/mega-menu.tsx (Primary State)</h4>
                <p className="text-sm text-indigo-800">
                  <strong>Dimensions:</strong> 329px × 275.5px with padding 41px 42px<br/>
                  <strong>Items:</strong> Plan Your Journey, Trending Destinations, Deals, About Us, Our Brands<br/>
                  <strong>Features:</strong> Thunder font (30px), right arrows, backdrop overlay<br/>
                  <strong>Behavior:</strong> First level of mega menu navigation
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-700">Primary Mega Menu</h4>
                <div className="relative bg-gray-100 rounded-lg overflow-hidden border-2 border-dashed border-indigo-300" style={{ height: '350px' }}>
                  <ComponentWrapper height="350px">
                    <div style={{ position: 'relative', top: '50px', left: '50px' }}>
                      <MegaMenu isOpen={true} onClose={() => {}} viewAsComponent={true} />
                    </div>
                  </ComponentWrapper>
                </div>
                <p className="text-xs text-gray-500">* Positioned for visibility - actual dropdown appears from navigation</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mega Menu - Extended Menu */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">8. Mega Menu - Extended State</h2>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="bg-teal-50 border-l-4 border-teal-500 p-4">
                <h4 className="text-sm font-semibold text-teal-900 mb-2">File: /src/components/common/nav/mega-menu.tsx (Extended State)</h4>
                <p className="text-sm text-teal-800">
                  <strong>Dimensions:</strong> 1462px × 746.15px with padding 28px 69px<br/>
                  <strong>Sections:</strong> Header tabs, Region selection (7 regions), Tour types, Countries grid (28 European countries)<br/>
                  <strong>Features:</strong> Interactive region buttons, highlighted Switzerland, multi-column country layout<br/>
                  <strong>Usage:</strong> Triggered when clicking primary menu items like "Plan Your Journey"
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-700">Extended Mega Menu (Scaled View)</h4>
                <div className="relative bg-gray-100 rounded-lg overflow-hidden border-2 border-dashed border-teal-300 p-4" style={{ height: '600px' }}>
                  <div className="transform scale-75 origin-top-left" style={{ width: '1949px', height: '995px' }}>
                    <ComponentWrapper height="1492px">
                      <div style={{ position: 'relative', top: '50px', left: '50px' }}>
                        {/* Simulated extended mega menu - would need custom component to show extended state */}
                        <div className="bg-white rounded-lg shadow-xl border p-8" style={{ width: '1462px', height: '746px' }}>
                          <div className="space-y-6">
                            <div className="flex gap-16 border-b pb-4">
                              <button className="text-2xl font-bold">Group Holidays</button>
                              <button className="text-2xl opacity-40">Flexi Holidays</button>
                              <button className="text-2xl opacity-40">Themed Journeys</button>
                              <button className="text-2xl opacity-40">Cruise</button>
                            </div>
                            <div className="grid grid-cols-3 gap-8">
                              <div>
                                <h3 className="text-xl font-bold mb-4">REGION</h3>
                                <div className="space-y-3">
                                  {['Africa', 'Antarctica', 'Asia', 'China', 'Europe', 'Middle East', 'Americas'].map(region => (
                                    <div key={region} className={`p-3 rounded ${region === 'Europe' ? 'bg-gray-800 text-white' : 'bg-gray-100'}`}>
                                      {region}
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <div className="col-span-2">
                                <div className="flex gap-8 mb-6">
                                  <span>All</span>
                                  <span>Central Europe</span>
                                  <span>Arctic</span>
                                  <span>Eastern Europe</span>
                                  <span>Northern Europe</span>
                                  <span>Southern Europe</span>
                                  <span>Exotic</span>
                                </div>
                                <div>
                                  <h4 className="font-bold mb-4">COUNTRIES (28)</h4>
                                  <div className="grid grid-cols-4 gap-4 text-sm">
                                    {['Austria', 'Belgium', 'Croatia', 'Denmark', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Iceland', 'Ireland', 'Italy', 'Netherlands', 'Norway', 'Poland', 'Portugal', 'Slovakia', 'Slovenia', 'Spain', 'Sweden'].map(country => (
                                      <div key={country}>{country}</div>
                                    ))}
                                    <div className="bg-gray-800 text-white p-2 rounded">Switzerland</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ComponentWrapper>
                  </div>
                </div>
                <p className="text-xs text-gray-500">* Scaled to 75% for display - actual size is 1462px × 746px with improved container height</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mobile Menu */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">9. Mobile Menu - Full Screen</h2>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="bg-pink-50 border-l-4 border-pink-500 p-4">
                <h4 className="text-sm font-semibold text-pink-900 mb-2">File: /src/components/common/nav/mobile-menu.tsx</h4>
                <p className="text-sm text-pink-800">
                  <strong>Positioning:</strong> fixed inset-0 with slide-in animation (translate-x-full when closed)<br/>
                  <strong>Structure:</strong> Expandable sections with precise absolute positioning<br/>
                  <strong>Sections:</strong> Plan Your Journey (with nested regions and countries), Trending, Tours, Deals, About, etc.<br/>
                  <strong>Features:</strong> Body scroll prevention, social media icons, close button, rotation animations
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-700">Mobile Menu Structure (Scaled View)</h4>
                <div className="relative bg-gray-100 rounded-lg overflow-hidden border-2 border-dashed border-pink-300 flex justify-center">
                  <div className="transform scale-75 origin-top" style={{ width: '500px', height: '450px' }}>
                    <ComponentWrapper height="450px">
                      <MobileMenu isOpen={true} onClose={() => {}} viewAsComponent={true} />
                    </ComponentWrapper>
                  </div>
                </div>
                <p className="text-xs text-gray-500">* Scaled to 75% for display - actual size is 393px width (mobile) with real functionality</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* New Navigation Components */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">New Navigation Components</h2>
        <div className="bg-green-50 border-l-4 border-green-500 p-4">
          <p className="text-sm text-green-800">
            <strong>Recently Implemented:</strong> These are the newly created Priority 1 navigation components from the missing components analysis.
          </p>
        </div>

        {/* Tab Navigation */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">TabNavigation Component</h3>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
              <p className="text-sm text-blue-800">
                <strong>File:</strong> /src/components/ui/navigation/tab-navigation.tsx<br/>
                <strong>Purpose:</strong> Flexible tab switching with multiple variants<br/>
                <strong>Variants:</strong> default (card-style), underline, pills<br/>
                <strong>Features:</strong> Keyboard navigation, ARIA accessibility, disabled tabs
              </p>
            </div>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-4">Default Variant</h4>
                <TabNavigation
                  tabs={[
                    { id: 'overview', label: 'Overview', content: <div className="p-4 text-gray-600">Overview content with detailed information about our services and offerings.</div> },
                    { id: 'photos', label: 'Photos', content: <div className="p-4 text-gray-600">Photo gallery content showing beautiful destinations and experiences.</div> },
                    { id: 'reviews', label: 'Reviews', content: <div className="p-4 text-gray-600">Customer reviews and testimonials from satisfied travelers.</div> },
                    { id: 'faq', label: 'FAQ', content: <div className="p-4 text-gray-600">Frequently asked questions and helpful information.</div>, disabled: true }
                  ]}
                  defaultTab="overview"
                  variant="default"
                />
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-4">Underline Variant</h4>
                <TabNavigation
                  tabs={[
                    { id: 'itinerary', label: 'Itinerary', content: <div className="p-4 text-gray-600">Day-by-day tour itinerary with detailed schedules.</div> },
                    { id: 'inclusions', label: 'Inclusions', content: <div className="p-4 text-gray-600">What's included in your tour package.</div> },
                    { id: 'exclusions', label: 'Exclusions', content: <div className="p-4 text-gray-600">Items and services not included in the package.</div> }
                  ]}
                  defaultTab="itinerary"
                  variant="underline"
                />
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-4">Pills Variant</h4>
                <TabNavigation
                  tabs={[
                    { id: 'europe', label: 'Europe', content: <div className="p-4 text-gray-600">European destinations and tour packages.</div> },
                    { id: 'asia', label: 'Asia', content: <div className="p-4 text-gray-600">Asian destinations and cultural experiences.</div> },
                    { id: 'cruise', label: 'Cruise', content: <div className="p-4 text-gray-600">Luxury cruise packages and itineraries.</div> }
                  ]}
                  defaultTab="europe"
                  variant="pills"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Accordion FAQ */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">AccordionFAQ Component</h3>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
              <p className="text-sm text-blue-800">
                <strong>File:</strong> /src/components/ui/navigation/accordion-faq.tsx<br/>
                <strong>Purpose:</strong> FAQ accordion with smooth animations<br/>
                <strong>Features:</strong> Single/multiple expand modes, accessibility, helper FAQSection component<br/>
                <strong>Usage:</strong> FAQ pages, help sections, expandable content
              </p>
            </div>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-4">Single Expand Mode</h4>
                <AccordionFAQ
                  items={[
                    {
                      id: 'booking',
                      question: 'How do I book a tour?',
                      answer: 'You can book a tour online through our website, call our customer service team, or visit one of our offices. We recommend booking at least 3-4 weeks in advance for popular destinations.'
                    },
                    {
                      id: 'cancellation',
                      question: 'What is your cancellation policy?',
                      answer: 'Our cancellation policy varies depending on the tour and timing. Generally, cancellations made 45+ days before departure receive a full refund minus processing fees. Please refer to the specific tour terms for detailed information.'
                    },
                    {
                      id: 'payment',
                      question: 'What payment methods do you accept?',
                      answer: 'We accept major credit cards (Visa, MasterCard, American Express), bank transfers, and PayPal. A deposit is typically required at booking with the balance due 30 days before departure.'
                    }
                  ]}
                  allowMultiple={false}
                  defaultOpen={['booking']}
                />
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-4">Multiple Expand Mode with Section Header</h4>
                <FAQSection
                  title="Travel Information"
                  subtitle="Get answers to common questions about traveling with us"
                  faqs={[
                    {
                      id: 'passport',
                      question: 'Do I need a passport for European tours?',
                      answer: 'Yes, a valid passport is required for all international travel. Your passport should be valid for at least 6 months beyond your planned return date. Some countries may also require visas.'
                    },
                    {
                      id: 'insurance',
                      question: 'Is travel insurance recommended?',
                      answer: 'We highly recommend comprehensive travel insurance that covers medical expenses, trip cancellation, and lost luggage. We can help you find suitable coverage for your trip.'
                    },
                    {
                      id: 'luggage',
                      question: 'What are the luggage restrictions?',
                      answer: 'Luggage restrictions vary by airline and tour type. Generally, you\'re allowed one large suitcase (up to 23kg) and one carry-on bag. We\'ll provide specific guidelines for your tour.'
                    }
                  ]}
                  allowMultiple={true}
                  defaultOpen={['passport']}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Technical Summary */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">Technical Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Navigation Variants</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><strong>Desktop:</strong> Default, Overlay, Scrolled</li>
                <li><strong>Mobile:</strong> Default, Overlay, Scrolled</li>
                <li><strong>Mega Menu:</strong> Primary, Extended</li>
                <li><strong>Mobile Menu:</strong> Full screen with expandable sections</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Responsive Strategy</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><strong>Breakpoint:</strong> lg (1024px)</li>
                <li><strong>Desktop:</strong> hidden lg:block</li>
                <li><strong>Mobile:</strong> lg:hidden</li>
                <li><strong>Scroll Triggers:</strong> Separate components</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Key Features</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><strong>Typography:</strong> Thunder (headings), Onest (body)</li>
                <li><strong>Positioning:</strong> Absolute, fixed, with z-index layering</li>
                <li><strong>Animations:</strong> Transitions, transforms, rotations</li>
                <li><strong>State:</strong> useState, useEffect for interactions</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

    </div>
  )
}