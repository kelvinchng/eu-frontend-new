'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Sparkles, Zap, Shield, Palette, Code, Layout } from 'lucide-react'

export default function DesignSystemOverview() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100/50 to-gray-200/50 rounded-3xl" />
        <div className="relative p-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 mb-6">
            <Sparkles className="h-4 w-4" />
            Design System v1.0
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            EU Frontend Design System
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            This is the comprehensive design system for EU Holidays, documenting all the styling, 
            components, and design patterns used throughout our travel booking platform. 
            Built with Next.js 15, TypeScript, and Tailwind CSS to ensure consistent, 
            accessible, and beautiful user experiences across all EU Holidays interfaces.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-xl shadow-lg">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="px-8 py-3 rounded-xl border-2 hover:bg-gray-50">
              View Components
            </Button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: "Components", value: "65+", color: "from-gray-700 to-gray-800" },
          { label: "Categories", value: "10", color: "from-gray-600 to-gray-700" },
          { label: "TypeScript", value: "100%", color: "from-gray-800 to-gray-900" },
          { label: "Accessible", value: "A11y", color: "from-gray-500 to-gray-600" }
        ].map((stat, index) => (
          <Card key={index} className="relative overflow-hidden border-0 shadow-lg">
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-3`} />
            <CardContent className="p-6 text-center relative">
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Key Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: Code,
            title: "Modern Architecture",
            description: "Built on Next.js 15 with App Router and shadcn/ui foundation. Every component in this design system is actively used in the EU Holidays booking platform with full TypeScript support.",
            color: "from-gray-700 to-gray-800"
          },
          {
            icon: Palette,
            title: "EU Holidays Branding",
            description: "All styling, colors, typography, and design patterns documented here reflect the actual implementation used across EU Holidays' travel booking interfaces.",
            color: "from-gray-600 to-gray-700"
          },
          {
            icon: Layout,
            title: "Production Components",
            description: "Every component showcased here is production-ready and currently powering the EU Holidays platform, from hero sections to booking forms.",
            color: "from-gray-800 to-gray-900"
          }
        ].map((feature, index) => (
          <Card key={index} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
            <CardContent className="p-8 relative">
              <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Component Categories Preview */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">EU Holidays Component Library</h2>
          <p className="text-lg text-gray-600">All components used in our travel booking platform, documented with styling and usage guidelines</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Base Components", count: "12 components", description: "Buttons, badges, typography", color: "from-gray-700 to-gray-800", icon: "🧱" },
            { title: "Form Components", count: "8 components", description: "Search bars, booking forms", color: "from-gray-600 to-gray-700", icon: "📋" },
            { title: "Card Components", count: "6 components", description: "Tour cards, destination cards", color: "from-gray-800 to-gray-900", icon: "🃏" },
            { title: "Travel Components", count: "25+ components", description: "Hero sections, navigation", color: "from-gray-500 to-gray-600", icon: "✈️" }
          ].map((category, index) => (
            <Card key={index} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-3 group-hover:opacity-5 transition-opacity`} />
              <CardContent className="p-6 relative text-center">
                <div className="text-3xl mb-4">{category.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{category.title}</h3>
                <div className="text-sm text-gray-600 mb-1">{category.count}</div>
                <div className="text-xs text-gray-500">{category.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Start */}
      <Card className="border-0 bg-gradient-to-r from-gray-50 to-gray-100 shadow-lg">
        <CardContent className="p-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Explore EU Holidays Components</h3>
              <p className="text-gray-600">Browse our production-ready components and styling guidelines used across the travel booking platform.</p>
            </div>
            <div className="flex gap-3">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-xl">
                Browse Components
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}