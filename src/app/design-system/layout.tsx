import React from 'react'
import { NavigationSidebar } from './components/navigation-sidebar'
import { Badge } from '@/components/ui/badge'

interface DesignSystemLayoutProps {
  children: React.ReactNode
}

export default function DesignSystemLayout({ children }: DesignSystemLayoutProps) {
  const sections = [
    { id: 'overview', title: 'Overview', description: 'System overview and principles', icon: '🎨', href: '/design-system' },
    { id: 'colors', title: 'Colors', description: 'Color palette and guidelines', icon: '🌈', href: '/design-system/colors' },
    { id: 'typography', title: 'Typography', description: 'Font families and text components', icon: '📝', href: '/design-system/typography' },
    { id: 'base-components', title: 'Base Components', description: 'Core UI building blocks', icon: '🧱', href: '/design-system/components' },
    { id: 'form-components', title: 'Form Components', description: 'Input fields and form elements', icon: '📋', href: '/design-system/forms' },
    { id: 'card-components', title: 'Card Components', description: 'Content containers and cards', icon: '🃏', href: '/design-system/cards' },
    { id: 'navigation', title: 'Navigation', description: 'Navigation and menu components', icon: '🧭', href: '/design-system/navigation' },
    { id: 'layout', title: 'Layout', description: 'Layout and structural components', icon: '🏗️', href: '/design-system/layout' },
    { id: 'complex-components', title: 'Complex Components', description: 'Assembled business components', icon: '⚡', href: '/design-system/complex' },
    { id: 'page-components', title: 'Page Components', description: 'Page-specific components', icon: '📄', href: '/design-system/pages' }
  ]

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Sidebar Navigation */}
      <NavigationSidebar sections={sections} />

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="flex h-16 items-center justify-between border-b bg-white/80 backdrop-blur-sm px-6 shadow-sm">
          <div>
            <h1 className="text-lg font-semibold text-gray-900">
              EU Frontend Design System
            </h1>
            <p className="text-sm text-muted-foreground">EU Holidays design system documentation</p>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="text-xs bg-gray-100 text-gray-700 border-gray-300">
              v1.0.0
            </Badge>
            <div className="text-sm text-muted-foreground">
              {new Date().toLocaleDateString()}
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-auto bg-white/50">
          <div className="max-w-7xl mx-auto p-8">
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}