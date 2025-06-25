'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { 
  Palette, 
  Type, 
  Square, 
  FileText, 
  CreditCard, 
  Navigation, 
  Layout, 
  Zap, 
  FileCode,
  Search,
  Copy,
  ExternalLink
} from 'lucide-react'

interface Section {
  id: string
  title: string
  description: string
  icon?: string
  href: string
}

interface NavigationSidebarProps {
  sections: Section[]
}

const iconMap = {
  '🎨': Palette,
  '🌈': Palette,
  '📝': Type,
  '🧱': Square,
  '📋': FileText,
  '🃏': CreditCard,
  '🧭': Navigation,
  '🏗️': Layout,
  '⚡': Zap,
  '📄': FileCode
}

export function NavigationSidebar({
  sections
}: NavigationSidebarProps) {
  const pathname = usePathname()

  return (
    <div className="flex h-screen w-72 flex-col border-r bg-white/90 backdrop-blur-sm shadow-xl">
      {/* Header */}
      <div className="flex h-16 items-center gap-3 border-b px-6 bg-gray-50">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-white shadow-lg">
          <Layout className="h-5 w-5" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-gray-900">Design System</span>
          <span className="text-xs text-gray-600">EU Holidays</span>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-auto">
        <div className="space-y-1 p-3">
          {sections.map((section) => {
            const IconComponent = iconMap[section.icon as keyof typeof iconMap] || Square
            const isActive = pathname === section.href
            return (
              <Link
                key={section.id}
                href={section.href}
                className={cn(
                  "flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm transition-all duration-200 group",
                  isActive
                    ? "bg-gray-900 text-white shadow-lg transform scale-[1.02]"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                )}
              >
                <IconComponent className={cn(
                  "h-5 w-5 shrink-0 transition-colors",
                  isActive ? "text-white" : "text-gray-500 group-hover:text-gray-700"
                )} />
                <div className="flex flex-col">
                  <span className="font-medium">{section.title}</span>
                  <span className={cn(
                    "text-xs leading-tight",
                    isActive ? "text-gray-300" : "text-gray-500"
                  )}>
                    {section.description}
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

    </div>
  )
}