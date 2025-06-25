'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, FileText, Globe, Map, Calendar, Users, Award, Phone } from 'lucide-react'

export default function PagesPage() {
  const pages = [
    {
      category: 'Core Pages',
      items: [
        { name: 'Homepage', route: '/', description: 'Main landing page with hero, featured destinations, and search', status: 'Live', complexity: 'High' },
        { name: 'About Us', route: '/about-us', description: 'Company information and values', status: 'Live', complexity: 'Medium' },
        { name: 'Contact Us', route: '/contact-us', description: 'Contact form and company details', status: 'Live', complexity: 'Low' }
      ]
    },
    {
      category: 'Browse & Discovery',
      items: [
        { name: 'Destinations', route: '/destinations', description: 'Browse all available destinations', status: 'Live', complexity: 'Medium' },
        { name: 'Country Pages', route: '/explore/[country]', description: 'Dynamic country-specific tour listings', status: 'Live', complexity: 'High' },
        { name: 'Tour Listings', route: '/tours', description: 'All tours with filtering and search', status: 'Live', complexity: 'High' },
        { name: 'Tour Details', route: '/tours/[details]', description: 'Individual tour information page', status: 'Live', complexity: 'Very High' }
      ]
    },
    {
      category: 'Specialized Offerings',
      items: [
        { name: 'Deals', route: '/deals', description: 'Special offers and promotions', status: 'Live', complexity: 'Medium' },
        { name: 'Family Friendly', route: '/family_friendly', description: 'Family-focused tour packages', status: 'Live', complexity: 'Medium' },
        { name: 'Seasonal Offers', route: '/seasonal_offers', description: 'Season-specific travel deals', status: 'Live', complexity: 'Medium' },
        { name: 'Theme Journeys', route: '/theme_jurneys', description: 'Themed travel experiences', status: 'Live', complexity: 'Medium' }
      ]
    },
    {
      category: 'Company Information',
      items: [
        { name: 'Meet The Experts', route: '/meet-the-experts', description: 'Team and expertise showcase', status: 'Planned', complexity: 'Medium' },
        { name: 'Press & Media', route: '/press-media', description: 'Press releases and media kit', status: 'Planned', complexity: 'Low' },
        { name: 'Awards', route: '/awards', description: 'Company awards and recognition', status: 'Planned', complexity: 'Low' },
        { name: 'EU MICE', route: '/eu-mice', description: 'Corporate and group travel services', status: 'Planned', complexity: 'Medium' }
      ]
    },
    {
      category: 'Customer Resources',
      items: [
        { name: 'Tour Reviews', route: '/tour-reviews', description: 'Customer testimonials and reviews', status: 'Planned', complexity: 'Medium' },
        { name: 'Tour Albums', route: '/tour-albums', description: 'Photo galleries from tours', status: 'Planned', complexity: 'Medium' },
        { name: 'Brochures', route: '/brochures', description: 'Downloadable travel brochures', status: 'Planned', complexity: 'Low' }
      ]
    },
    {
      category: 'Booking Flow',
      items: [
        { name: 'Booking Step 1', route: '/booking/step-1', description: 'Tour selection and dates', status: 'In Progress', complexity: 'High' },
        { name: 'Booking Step 2', route: '/booking/step-2', description: 'Traveler information form', status: 'In Progress', complexity: 'High' },
        { name: 'Booking Step 3', route: '/booking/step-3', description: 'Payment and confirmation', status: 'In Progress', complexity: 'Very High' }
      ]
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-green-100 text-green-800'
      case 'In Progress': return 'bg-yellow-100 text-yellow-800'
      case 'Planned': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Low': return 'bg-blue-100 text-blue-800'
      case 'Medium': return 'bg-purple-100 text-purple-800'
      case 'High': return 'bg-orange-100 text-orange-800'
      case 'Very High': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getIcon = (name: string) => {
    if (name.includes('Homepage')) return <Globe className="h-4 w-4" />
    if (name.includes('About') || name.includes('Contact')) return <FileText className="h-4 w-4" />
    if (name.includes('Destination') || name.includes('Country')) return <Map className="h-4 w-4" />
    if (name.includes('Tour')) return <Calendar className="h-4 w-4" />
    if (name.includes('Booking')) return <Users className="h-4 w-4" />
    if (name.includes('Award')) return <Award className="h-4 w-4" />
    if (name.includes('Contact')) return <Phone className="h-4 w-4" />
    return <FileText className="h-4 w-4" />
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Page Components
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Complete page-level components that represent full user journeys and experiences 
          within the EU Holidays platform. Each page combines multiple complex components 
          to deliver specific business functionality.
        </p>
      </div>

      {/* Page Inventory */}
      <div className="space-y-8">
        {pages.map((category) => (
          <div key={category.category} className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">{category.category}</h2>
            <div className="grid grid-cols-1 gap-4">
              {category.items.map((page) => (
                <Card key={page.name} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="p-2 bg-gray-100 rounded-lg">
                          {getIcon(page.name)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{page.name}</h3>
                            <Badge className={getStatusColor(page.status)}>
                              {page.status}
                            </Badge>
                            <Badge variant="outline" className={getComplexityColor(page.complexity)}>
                              {page.complexity}
                            </Badge>
                          </div>
                          <p className="text-gray-600 mb-3">{page.description}</p>
                          <div className="flex items-center gap-4">
                            <code className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">
                              {page.route}
                            </code>
                            {page.status === 'Live' && (
                              <Button variant="outline" size="sm" className="text-blue-600 hover:text-blue-700 border-0">
                                <ExternalLink className="h-3 w-3 mr-1" />
                                View Page
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Page Templates */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">Page Templates & Patterns</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Landing Page Template</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded"></div>
                  <span>Hero Section (100vh desktop, 643px mobile)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded"></div>
                  <span>Featured Content Grid</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded"></div>
                  <span>Call-to-Action Sections</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded"></div>
                  <span>Footer with Links</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <div className="text-xs text-gray-600">
                  <strong>Used by:</strong> Homepage, Destinations, Theme Journeys
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Listing Page Template</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded"></div>
                  <span>Search & Filter Header</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                  <span>Sidebar Filters (Desktop)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-teal-500 rounded"></div>
                  <span>Card Grid Layout</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-indigo-500 rounded"></div>
                  <span>Pagination Component</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <div className="text-xs text-gray-600">
                  <strong>Used by:</strong> Tour Listings, Country Pages, Deals
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Detail Page Template</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-pink-500 rounded"></div>
                  <span>Hero Gallery Section</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-cyan-500 rounded"></div>
                  <span>Tabbed Content Areas</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-lime-500 rounded"></div>
                  <span>Sidebar Booking Widget</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-amber-500 rounded"></div>
                  <span>Related Items Section</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <div className="text-xs text-gray-600">
                  <strong>Used by:</strong> Tour Details, Country Details
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Form Flow Template</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-violet-500 rounded"></div>
                  <span>Progress Indicator</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-rose-500 rounded"></div>
                  <span>Form Sections with Validation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-emerald-500 rounded"></div>
                  <span>Summary Sidebar</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-sky-500 rounded"></div>
                  <span>Navigation Controls</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <div className="text-xs text-gray-600">
                  <strong>Used by:</strong> Booking Flow, Contact Forms
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Page Architecture */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">Page Architecture Guidelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Structure Principles</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Follow Next.js App Router conventions
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Use semantic HTML structure
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Implement proper SEO meta tags
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Include loading and error boundaries
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Optimize for Core Web Vitals
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Performance Standards</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">⚡</span>
                  First Contentful Paint &lt; 1.2s
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">⚡</span>
                  Largest Contentful Paint &lt; 2.5s
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">⚡</span>
                  Cumulative Layout Shift &lt; 0.1
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">⚡</span>
                  Time to Interactive &lt; 3.5s
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">⚡</span>
                  Lighthouse Score &gt; 90
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Component Dependencies */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">Page Component Dependencies</h2>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Universal Components</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>• Navigation Header</div>
                    <div>• Footer</div>
                    <div>• SEO Meta Components</div>
                    <div>• Loading Spinners</div>
                    <div>• Error Boundaries</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Content Components</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>• Hero Sections</div>
                    <div>• Card Grids</div>
                    <div>• Content Blocks</div>
                    <div>• Image Galleries</div>
                    <div>• Testimonials</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Interactive Components</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>• Search & Filters</div>
                    <div>• Booking Forms</div>
                    <div>• Contact Forms</div>
                    <div>• Navigation Menus</div>
                    <div>• Modal Dialogs</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}