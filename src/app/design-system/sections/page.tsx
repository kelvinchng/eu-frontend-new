'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { ContactInfo } from '@/components/ui/sections/contact-info'
import { WhyChooseUs } from '@/components/ui/sections/why-choose-us'

export default function SectionsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Section Components
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Page section components that implement specific Figma designs with exact measurements and styling.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 p-4">
          <p className="text-sm text-green-800">
            <strong>Figma-Compliant:</strong> All sections below are precisely implemented according to Figma Contact Us page specifications.
          </p>
        </div>
      </div>

      {/* ContactInfo Component */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">ContactInfo Component</h2>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <h4 className="text-sm font-semibold text-blue-900 mb-2">File: /src/components/ui/sections/contact-info.tsx</h4>
                <p className="text-sm text-blue-800">
                  <strong>Props Interface:</strong> ContactInfoProps with offices array and className<br/>
                  <strong>Purpose:</strong> Display multiple office contact details with proper spacing<br/>
                  <strong>Features:</strong> Company names, addresses, phone, email, WhatsApp, working hours<br/>
                  <strong>Typography:</strong> Thunder for headings (35px), Onest for details (18px)<br/>
                  <strong>Layout:</strong> Vertical stack with 61px spacing between offices, 21px between details
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-700">Multiple Office Contact Information</h4>
                <div className="bg-gray-50 p-8 max-w-[591px]">
                  <ContactInfo />
                </div>
                <div className="text-sm text-gray-600">
                  <strong>Default Data:</strong> Includes 5 EU Holidays offices with complete contact details
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* WhyChooseUs Component */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">WhyChooseUs Component</h2>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
                <h4 className="text-sm font-semibold text-purple-900 mb-2">File: /src/components/ui/sections/why-choose-us.tsx</h4>
                <p className="text-sm text-purple-800">
                  <strong>Props Interface:</strong> WhyChooseUsProps with title, subtitle, features array<br/>
                  <strong>Purpose:</strong> Feature showcase section with icons and descriptions<br/>
                  <strong>Layout:</strong> Gray background (#EEEEEE), 20px border radius, 90px vertical padding<br/>
                  <strong>Grid:</strong> 3-column layout with custom icons in dark squares<br/>
                  <strong>Icons:</strong> 80x80px squares with 9px border radius and shadow
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-700">Feature Showcase Section</h4>
                <div className="overflow-x-auto">
                  <WhyChooseUs />
                </div>
                <div className="text-sm text-gray-600">
                  <strong>Default Features:</strong> Effortless Travel, Award-Winning Service, Travel Specialists
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Component Specifications */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">Component Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">ContactInfo Measurements</h3>
              <div className="space-y-3 text-sm">
                <div><strong>Section Spacing:</strong> 61px between office sections</div>
                <div><strong>Detail Spacing:</strong> 21px between contact details</div>
                <div><strong>Company Name:</strong> Thunder 35px, line-height 32px</div>
                <div><strong>Contact Details:</strong> Onest 18px, line-height 23px</div>
                <div><strong>Text Color:</strong> #242424 for headings, black for details</div>
                <div><strong>Container Width:</strong> 591px (as per Figma)</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">WhyChooseUs Layout</h3>
              <div className="space-y-3 text-sm">
                <div><strong>Background:</strong> #EEEEEE with 20px border radius</div>
                <div><strong>Container:</strong> Max-width 1281px, centered</div>
                <div><strong>Padding:</strong> 90px vertical, 100px horizontal</div>
                <div><strong>Header Spacing:</strong> 158px bottom margin</div>
                <div><strong>Grid Gap:</strong> 92px between feature columns</div>
                <div><strong>Icon Size:</strong> 80x80px with shadow</div>
                <div><strong>Icon Spacing:</strong> 47px bottom margin</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">Implementation Examples</h2>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-gray-900">ContactInfo Usage</h4>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <pre>{`import { ContactInfo } from '@/components/ui/sections/contact-info'

// Basic usage with default offices
<ContactInfo />

// Custom offices
<ContactInfo 
  offices={[
    {
      name: 'Custom Office',
      address: 'Your address here',
      email: 'contact@company.com',
      phone: '+1 234 567 8900',
      whatsapp: '+1 234 567 8900',
      workingHours: 'Mon-Fri 9AM-6PM'
    }
  ]}
  className="w-[591px]"
/>`}</pre>
              </div>
              
              <h4 className="text-lg font-medium text-gray-900 mt-6">WhyChooseUs Usage</h4>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <pre>{`import { WhyChooseUs } from '@/components/ui/sections/why-choose-us'

// Basic usage with default features
<WhyChooseUs />

// Custom content
<WhyChooseUs 
  title="Custom Title"
  subtitle="Custom Subtitle"
  features={[
    {
      title: "Feature 1",
      description: "Description here",
      icon: <CustomIcon />
    }
  ]}
/>`}</pre>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}