'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Copy, Check } from 'lucide-react'

export default function ColorsPage() {
  const [copiedColor, setCopiedColor] = React.useState<string | null>(null)

  const copyToClipboard = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopiedColor(label)
      setTimeout(() => setCopiedColor(null), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const colorPalette = [
    { name: 'Primary', value: '#242424', description: 'Main brand color for text and UI elements', textColor: 'white' },
    { name: 'Secondary', value: '#EEEEEE', description: 'Light gray for backgrounds and subtle elements', textColor: 'black' },
    { name: 'Background', value: '#FFFFFF', description: 'Pure white background', textColor: 'black' },
    { name: 'Border', value: '#E8E8E8', description: 'Light border color for inputs and cards', textColor: 'black' },
    { name: 'Muted', value: '#5C5C5C', description: 'Muted text color for secondary content', textColor: 'white' },
    { name: 'Error', value: '#EF4444', description: 'Error states and validation', textColor: 'white' },
    { name: 'Success', value: '#10B981', description: 'Success states and positive feedback', textColor: 'white' }
  ]

  const accentColors = [
    { name: 'Ocean Blue', value: '#0284C7', description: 'Travel and exploration themes', textColor: 'white' },
    { name: 'Forest Green', value: '#059669', description: 'Nature and adventure tours', textColor: 'white' },
    { name: 'Sunset Orange', value: '#EA580C', description: 'Warm destinations and highlights', textColor: 'white' },
    { name: 'Mountain Purple', value: '#7C3AED', description: 'Premium and luxury experiences', textColor: 'white' }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Color System
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Our color palette is designed to provide clear hierarchy, accessibility, and brand 
          consistency across all components and interfaces.
        </p>
      </div>

      {/* Primary Colors */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">Primary Colors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {colorPalette.slice(0, 3).map((color) => (
            <Card key={color.name} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div 
                className="h-32 flex items-center justify-center text-lg font-semibold"
                style={{ 
                  backgroundColor: color.value,
                  color: color.textColor
                }}
              >
                {color.name}
                <br />
                {color.value}
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">{color.description}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <span className="text-gray-600">HEX</span>
                    <code className="ml-2 px-2 py-1 bg-gray-100 rounded text-xs">{color.value}</code>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(color.value, color.name)}
                    className="h-8 w-8 p-0"
                  >
                    {copiedColor === color.name ? (
                      <Check className="h-3 w-3 text-green-500" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* System Colors */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">System Colors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {colorPalette.slice(3, 7).map((color) => (
            <Card key={color.name} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div 
                className="h-24 flex items-center justify-center text-sm font-semibold"
                style={{ 
                  backgroundColor: color.value,
                  color: color.textColor
                }}
              >
                {color.name}
                <br />
                {color.value}
              </div>
              <CardContent className="p-4">
                <div className="mb-3">
                  <span className="text-sm text-gray-600">{color.description}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <span className="text-gray-600">HEX</span>
                    <code className="ml-2 px-2 py-1 bg-gray-100 rounded text-xs">{color.value}</code>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(color.value, color.name)}
                    className="h-8 w-8 p-0"
                  >
                    {copiedColor === color.name ? (
                      <Check className="h-3 w-3 text-green-500" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Travel-Themed Accent Colors */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">Travel-Themed Accent Colors</h2>
        <p className="text-gray-600">These colors complement the main palette and can be used for highlights, calls-to-action, and travel-specific theming.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {accentColors.map((color) => (
            <Card key={color.name} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div 
                className="h-24 flex items-center justify-center text-sm font-semibold"
                style={{ 
                  backgroundColor: color.value,
                  color: color.textColor
                }}
              >
                {color.name}
                <br />
                {color.value}
              </div>
              <CardContent className="p-4">
                <div className="mb-3">
                  <span className="text-sm text-gray-600">{color.description}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <span className="text-gray-600">HEX</span>
                    <code className="ml-2 px-2 py-1 bg-gray-100 rounded text-xs">{color.value}</code>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(color.value, color.name)}
                    className="h-8 w-8 p-0"
                  >
                    {copiedColor === color.name ? (
                      <Check className="h-3 w-3 text-green-500" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Usage Guidelines */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">Usage Guidelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="font-semibold text-green-700 mb-3 flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                Do
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Use primary color for main actions and CTAs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Use semantic colors for states (error, success)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Maintain consistent contrast ratios</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Test colors for accessibility compliance</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="font-semibold text-red-700 mb-3 flex items-center">
                <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
                Don&apos;t
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 mt-0.5">✗</span>
                  <span>Use colors outside the defined palette</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 mt-0.5">✗</span>
                  <span>Use error colors for non-error states</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 mt-0.5">✗</span>
                  <span>Mix different color temperatures</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 mt-0.5">✗</span>
                  <span>Ignore contrast requirements for accessibility</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Technical Specs */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">Technical Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Next.js 15', description: 'React framework with App Router' },
            { name: 'TypeScript', description: 'Type-safe development' },
            { name: 'Tailwind CSS', description: 'Utility-first styling' },
            { name: 'shadcn/ui', description: 'Component foundation' }
          ].map((tech, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}