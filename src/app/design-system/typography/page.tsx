'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { H1, H2, H3, Body, Small, Label } from '@/components/ui/typography'

export default function TypographyPage() {
  const typographyScale = [
    { name: 'H1', component: H1, size: '48px', weight: 'Bold', usage: 'Page titles, main headings' },
    { name: 'H2', component: H2, size: '36px', weight: 'Semibold', usage: 'Section headings' },
    { name: 'H3', component: H3, size: '24px', weight: 'Semibold', usage: 'Subsection headings' },
    { name: 'Body', component: Body, size: '16px', weight: 'Regular', usage: 'Main body text, descriptions' },
    { name: 'Small', component: Small, size: '14px', weight: 'Regular', usage: 'Captions, secondary text' },
    { name: 'Label', component: Label, size: '12px', weight: 'Medium', usage: 'Form labels, tags' }
  ]

  const fonts = [
    { 
      name: 'Thunder', 
      family: 'Thunder-LC', 
      usage: 'Display headings, hero text',
      file: 'Thunder-LC.ttf',
      weights: ['Light (300)', 'Regular (400)']
    },
    { 
      name: 'PP Formula', 
      family: 'PP Formula', 
      usage: 'Special accents, branded elements',
      file: 'PPFormula-Medium.otf',
      weights: ['Medium (500)']
    },
    { 
      name: 'Onest', 
      family: 'Onest', 
      usage: 'Body text, UI components',
      file: 'System font',
      weights: ['Regular (400)', 'Medium (500)', 'Semibold (600)']
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Typography System
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Our typography system ensures consistent, readable, and accessible text across all EU Holidays interfaces.
          Built with a clear hierarchy and responsive scaling for optimal user experience.
        </p>
      </div>

      {/* Font Families */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">Font Families</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {fonts.map((font) => (
            <Card key={font.name} className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{font.name}</h3>
                    <code className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
                      {font.family}
                    </code>
                  </div>
                  
                  <div className="text-2xl" style={{ fontFamily: font.name === 'Thunder' ? 'Thunder' : font.name === 'PP Formula' ? 'PP Formula' : 'Onest' }}>
                    The quick brown fox jumps over the lazy dog
                  </div>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Usage:</strong> {font.usage}</p>
                    <p><strong>Weights:</strong> {font.weights.join(', ')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Typography Scale */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">Typography Scale</h2>
        <div className="space-y-4">
          {typographyScale.map((type, index) => {
            const Component = type.component
            return (
              <Card key={type.name} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold text-gray-900">{type.name}</h3>
                      <div className="text-sm text-gray-600">
                        <div>Size: {type.size}</div>
                        <div>Weight: {type.weight}</div>
                      </div>
                      <div className="text-xs text-gray-500">
                        {type.usage}
                      </div>
                    </div>
                    
                    <div className="md:col-span-2">
                      <Component>
                        {type.name === 'H1' && 'EU Holidays - Your Perfect Getaway'}
                        {type.name === 'H2' && 'Discover Amazing Destinations'}
                        {type.name === 'H3' && 'Featured Tour Packages'}
                        {type.name === 'Body' && 'Experience the beauty of Europe with our carefully curated travel packages. From romantic getaways to family adventures, we have something for everyone.'}
                        {type.name === 'Small' && 'Starting from €299 per person'}
                        {type.name === 'Label' && 'BEST SELLER'}
                      </Component>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Responsive Guidelines */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">Responsive Typography</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Scaling Guidelines</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Mobile (320px)</span>
                  <span className="font-medium">0.8x scale</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tablet (768px)</span>
                  <span className="font-medium">0.9x scale</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Desktop (1024px+)</span>
                  <span className="font-medium">1x scale (base)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Large (1920px)</span>
                  <span className="font-medium">1.2x scale</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Best Practices</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Use relative units (rem, em) for scalability
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Maintain proper contrast ratios (4.5:1 minimum)
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Test readability across all device sizes
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Use appropriate line height (1.4-1.6)
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}