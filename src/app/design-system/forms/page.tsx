'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/form/input'
import { SearchBar } from '@/components/ui/form/search-bar'
import { Select } from '@/components/ui/form/select'
import { HeroSearchForm } from '@/components/common/hero/hero-search-form'
import { HeroSearchFormMobile } from '@/components/common/hero/hero-search-form-mobile'
import { ContactForm } from '@/components/ui/form/contact-form'
import { ContactForm as FigmaContactForm } from '@/components/ui/forms/contact-form'
import { SearchBarSpecialized } from '@/components/ui/form/search-bar-specialized'

const searchSuggestions = [
  { id: '1', title: 'Switzerland Tours', subtitle: 'Alpine adventures and scenic routes', category: 'Destination', type: 'destination' as const },
  { id: '2', title: 'Family Friendly Europe', subtitle: 'Tours perfect for families with children', category: 'Theme', type: 'category' as const },
  { id: '3', title: '7D6N Scenic Switzerland', subtitle: 'Alpine lakes and mountain railways', category: 'Tour', type: 'tour' as const }
]

export default function FormsPage() {
  const destinations = [
    { value: 'paris', label: 'Paris, France' },
    { value: 'rome', label: 'Rome, Italy' },
    { value: 'barcelona', label: 'Barcelona, Spain' },
    { value: 'amsterdam', label: 'Amsterdam, Netherlands' }
  ]

  const durations = [
    { value: '3-5', label: '3-5 days' },
    { value: '6-10', label: '6-10 days' },
    { value: '11-14', label: '11-14 days' },
    { value: '15+', label: '15+ days' }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Form Components
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Production form components from <code>/src/components/ui/form/</code> used throughout the EU Holidays 
          booking platform. Each component includes comprehensive validation states, responsive sizing, 
          and accessibility features for optimal user experience.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 p-4">
          <p className="text-sm text-green-800">
            <strong>Architecture:</strong> All form components include size variants (sm, md, lg), 
            validation states (error/success), helper text, and responsive scaling based on Figma specifications.
          </p>
        </div>
      </div>

      {/* Input Component */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">Input Component</h2>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <h4 className="text-sm font-semibold text-blue-900 mb-2">File: /src/components/ui/form/input.tsx</h4>
                <p className="text-sm text-blue-800">
                  <strong>Props Interface:</strong> InputProps with size variants, error/success states, labels, helper text<br/>
                  <strong>Sizes:</strong> sm, md, lg with responsive scaling<br/>
                  <strong>Features:</strong> Label, helper text, error/success styling, responsive dimensions<br/>
                  <strong>Dependencies:</strong> Design tokens for styling consistency
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-700">Default Input</h4>
                  <Input 
                    placeholder="Enter your email"
                    label="Email Address"
                  />
                  <code className="text-xs bg-gray-100 p-1 rounded block">Standard input with label</code>
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-700">With Helper Text</h4>
                  <Input 
                    placeholder="Enter your full name"
                    label="Full Name"
                    helperText="As shown on your passport"
                  />
                  <code className="text-xs bg-gray-100 p-1 rounded block">helperText prop for guidance</code>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-700">Error State</h4>
                  <Input 
                    placeholder="Enter your email"
                    label="Email Address"
                    error={true}
                    helperText="Please enter a valid email address"
                  />
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-700">Success State</h4>
                  <Input 
                    placeholder="Enter your email"
                    label="Email Address"
                    success={true}
                    helperText="Email address is valid"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-700">Sizes</h4>
                <div className="space-y-4">
                  <Input size="sm" placeholder="Small input" label="Small" />
                  <Input size="md" placeholder="Medium input (default)" label="Medium" />
                  <Input size="lg" placeholder="Large input" label="Large" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* SearchBar Component */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">SearchBar Component</h2>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
                <h4 className="text-sm font-semibold text-purple-900 mb-2">File: /src/components/ui/form/search-bar.tsx</h4>
                <p className="text-sm text-purple-800">
                  <strong>Props Interface:</strong> SearchBarProps with search callback, loading state<br/>
                  <strong>Features:</strong> Integrated button, loading state, keyboard support (Enter key)<br/>
                  <strong>Responsive:</strong> Mobile-first with viewport-based sizing<br/>
                  <strong>Usage:</strong> Hero search, filters, general search functionality
                </p>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-700">Travel Search (Hero Usage)</h4>
                <SearchBar 
                  placeholder="Where do you want to go?"
                  buttonText="Search Tours"
                  onSearch={(value) => console.log('Searching for:', value)}
                />
                <code className="text-xs bg-gray-100 p-1 rounded block">Primary search in hero sections</code>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-700">Small</h4>
                  <SearchBar 
                    size="sm"
                    placeholder="Quick search..."
                    buttonText="Go"
                    onSearch={(value) => console.log('Searching:', value)}
                  />
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-700">Medium</h4>
                  <SearchBar 
                    size="md"
                    placeholder="Search destinations..."
                    buttonText="Search"
                    onSearch={(value) => console.log('Searching:', value)}
                  />
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-700">Large</h4>
                  <SearchBar 
                    size="lg"
                    placeholder="Find your perfect trip..."
                    buttonText="Explore"
                    onSearch={(value) => console.log('Searching:', value)}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Select Component */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">Select Components</h2>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
                <h4 className="text-sm font-semibold text-orange-900 mb-2">Files: /src/components/ui/form/select.tsx & /src/components/ui/select.tsx</h4>
                <p className="text-sm text-orange-800">
                  <strong>Two Variants:</strong> Custom select (form/) and Radix UI select (ui/)<br/>
                  <strong>Features:</strong> Custom arrow icons, option groups, placeholder support<br/>
                  <strong>Dependencies:</strong> Radix UI primitives for accessibility<br/>
                  <strong>Usage:</strong> Form dropdowns, filters, preferences
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-700">Destination Select</h4>
                  <Select 
                    label="Choose Destination"
                    placeholder="Select a destination"
                    options={destinations}
                  />
                  <code className="text-xs bg-gray-100 p-1 rounded block">Custom select with options array</code>
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-700">Duration Select</h4>
                  <Select 
                    label="Trip Duration"
                    placeholder="Select duration"
                    options={durations}
                    helperText="Choose your preferred trip length"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-700">Error State</h4>
                  <Select 
                    label="Travel Class"
                    placeholder="Select travel class"
                    options={[
                      { value: 'economy', label: 'Economy' },
                      { value: 'business', label: 'Business' },
                      { value: 'first', label: 'First Class' }
                    ]}
                    error={true}
                    helperText="Please select a travel class"
                  />
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-700">Success State</h4>
                  <Select 
                    label="Number of Travelers"
                    placeholder="Select travelers"
                    options={[
                      { value: '1', label: '1 Traveler' },
                      { value: '2', label: '2 Travelers' },
                      { value: '3+', label: '3+ Travelers' }
                    ]}
                    success={true}
                    helperText="Perfect choice for your group"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Hero Search Forms */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">Hero Search Forms</h2>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="bg-red-50 border-l-4 border-red-500 p-4">
                <h4 className="text-sm font-semibold text-red-900 mb-2">Files: /src/components/common/hero/hero-search-form.tsx & hero-search-form-mobile.tsx</h4>
                <p className="text-sm text-red-800">
                  <strong>Complex Components:</strong> Integrated search functionality within hero sections<br/>
                  <strong>Layout:</strong> Desktop (horizontal) vs Mobile (vertical stacked)<br/>
                  <strong>Features:</strong> Destination input, date pickers, holiday type selector, search button
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Desktop Hero Search Layout</h3>
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6">
                  <HeroSearchForm />
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Mobile Hero Search Layout</h3>
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 max-w-sm mx-auto">
                  <HeroSearchFormMobile />
                </div>
                <p className="text-sm text-gray-600 text-center">Vertical stacked layout for mobile (307px height)</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Complete Booking Form */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">Complete Booking Form Examples</h2>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Travel Information Form</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SearchBar 
                  placeholder="Where do you want to go?"
                  buttonText="Search"
                  onSearch={(value) => console.log('Destination:', value)}
                />
                <Select 
                  label="Trip Duration"
                  placeholder="Select duration"
                  options={durations}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Input 
                  label="Departure Date"
                  type="date"
                />
                <Input 
                  label="Return Date"
                  type="date"
                />
                <Select 
                  label="Travelers"
                  placeholder="Number of travelers"
                  options={[
                    { value: '1', label: '1 Adult' },
                    { value: '2', label: '2 Adults' },
                    { value: '3', label: '3 Adults' },
                    { value: '4+', label: '4+ Adults' }
                  ]}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  label="Email Address"
                  type="email"
                  placeholder="your.email@example.com"
                  helperText="We'll send your booking confirmation here"
                />
                <Input 
                  label="Phone Number"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  helperText="For travel updates and assistance"
                />
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-3">Form Architecture Patterns</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div><strong>Validation States:</strong> Real-time validation with error/success styling</div>
                  <div><strong>Responsive Grid:</strong> 1 column mobile, 2-3 columns desktop</div>
                  <div><strong>Helper Text:</strong> Contextual guidance below inputs</div>
                  <div><strong>Label Positioning:</strong> Above input with proper association</div>
                  <div><strong>Touch Targets:</strong> Minimum 44px for mobile accessibility</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Form Specifications */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">Form Component Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Input Field Sizing</h3>
              <div className="space-y-3">
                <div className="space-y-2">
                  <Input size="sm" placeholder="Small input" label="Small (sm)" />
                  <code className="text-xs bg-gray-100 p-1 rounded">Height: 32px, Text: 14px</code>
                </div>
                <div className="space-y-2">
                  <Input size="md" placeholder="Medium input (default)" label="Medium (md)" />
                  <code className="text-xs bg-gray-100 p-1 rounded">Height: 40px, Text: 16px</code>
                </div>
                <div className="space-y-2">
                  <Input size="lg" placeholder="Large input" label="Large (lg)" />
                  <code className="text-xs bg-gray-100 p-1 rounded">Height: 48px, Text: 18px</code>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Validation States</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Input 
                    label="Error State"
                    placeholder="Invalid input"
                    error={true}
                    helperText="This field is required"
                  />
                  <code className="text-xs bg-gray-100 p-1 rounded">error={true} + helperText</code>
                </div>
                <div className="space-y-2">
                  <Input 
                    label="Success State"
                    placeholder="Valid input"
                    success={true}
                    helperText="Looks good!"
                  />
                  <code className="text-xs bg-gray-100 p-1 rounded">success={true} + helperText</code>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* New Phase 2 Form Components */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">New Phase 2 Form Components</h2>
        <div className="bg-green-50 border-l-4 border-green-500 p-4">
          <p className="text-sm text-green-800">
            <strong>Recently Implemented:</strong> These are the newly created Phase 2 form components with advanced functionality.
          </p>
        </div>

        {/* Contact Form */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">ContactForm Component</h3>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <p className="text-sm text-blue-800">
                <strong>File:</strong> /src/components/ui/form/contact-form.tsx<br/>
                <strong>Purpose:</strong> Complete contact form with validation and multiple variants<br/>
                <strong>Features:</strong> Form validation, loading states, tour-specific fields, success messages<br/>
                <strong>Variants:</strong> default, compact, detailed
              </p>
            </div>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-4">Default Variant</h4>
                <ContactForm 
                  variant="default"
                  onSubmit={(data) => console.log('Form submitted:', data)}
                />
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-4">Detailed Variant with Tour Fields</h4>
                <ContactForm 
                  variant="detailed"
                  showTourFields={true}
                  onSubmit={(data) => console.log('Detailed form submitted:', data)}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Search Bar Specialized */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">SearchBarSpecialized Component</h3>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <p className="text-sm text-blue-800">
                <strong>File:</strong> /src/components/ui/form/search-bar-specialized.tsx<br/>
                <strong>Purpose:</strong> Advanced search with suggestions, recent searches, and trending<br/>
                <strong>Features:</strong> Dropdown suggestions, keyboard navigation, localStorage integration<br/>
                <strong>Variants:</strong> default, compact, hero | Sizes: sm, md, lg
              </p>
            </div>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-4">Default Search with Suggestions</h4>
                <SearchBarSpecialized
                  placeholder="Search destinations, tours, or experiences..."
                  suggestions={searchSuggestions}
                  onSearch={(query) => console.log('Search:', query)}
                  onSuggestionSelect={(suggestion) => console.log('Selected:', suggestion)}
                />
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-4">Compact Size Variant</h4>
                <SearchBarSpecialized
                  size="sm"
                  variant="compact"
                  placeholder="Quick search..."
                  showCategories={false}
                  onSearch={(query) => console.log('Compact search:', query)}
                />
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-lg">
                <h4 className="text-sm font-semibold text-white mb-4">Hero Variant (for overlays)</h4>
                <SearchBarSpecialized
                  variant="hero"
                  size="lg"
                  placeholder="Where would you like to go?"
                  onSearch={(query) => console.log('Hero search:', query)}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Figma Contact Form */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Send Enquiry Form Component (Figma Exact)</h3>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
              <p className="text-sm text-green-800">
                <strong>File:</strong> /src/components/ui/forms/contact-form.tsx<br/>
                <strong>Figma Node:</strong> Frame 454 (Contact Form)<br/>
                <strong>Purpose:</strong> Pixel-perfect implementation of the Send Enquiry form from Figma<br/>
                <strong>Features:</strong> Absolute positioning, exact measurements, custom shadows, Terms & Conditions footer<br/>
                <strong>Measurements:</strong> 686x555px container with all elements positioned exactly as designed
              </p>
            </div>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-4">Figma Frame 454 Implementation</h4>
                <div className="bg-gray-50 p-8 flex justify-center">
                  <FigmaContactForm 
                    onSubmit={(data) => {
                      console.log('Send Enquiry submitted:', data)
                      alert('Send Enquiry Form submitted! Check console for data.')
                    }}
                  />
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <strong>Exact Figma Specifications:</strong>
                  <ul className="list-disc ml-5 mt-2 space-y-1">
                    <li><strong>Container:</strong> 686x555px with 20px border radius</li>
                    <li><strong>Shadow:</strong> Multi-layer box shadow with rgba values</li>
                    <li><strong>First Name:</strong> Position x:45, y:51, size 290.73x58px</li>
                    <li><strong>Last Name:</strong> Position x:351.27, y:51, size 290.73x58px</li>
                    <li><strong>Phone:</strong> Position x:45, y:125, size 290.73x58px</li>
                    <li><strong>Email:</strong> Position x:351.27, y:125, size 290.73x58px</li>
                    <li><strong>Message:</strong> Position x:45, y:199, size 597x237px</li>
                    <li><strong>Submit Button:</strong> Position x:444, y:452, size 198x52px</li>
                    <li><strong>Fields:</strong> 1.4px border, 9px border radius, 18.87px padding</li>
                    <li><strong>Typography:</strong> Onest 18px, rgba(36,36,36,0.75) placeholder</li>
                    <li><strong>Button:</strong> #242424 background, white text, -2.5% letter spacing</li>
                    <li><strong>Divider:</strong> Full width, 1px #E8E8E8 line</li>
                    <li><strong>Terms Text:</strong> 591px width, positioned at bottom</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}