'use client'

import React, { useState } from 'react'
import { DesktopNav } from '@/components/common/nav/desktop-nav'
import { MobileNav } from '@/components/common/nav/mobile-nav'
import { MobileMenu } from '@/components/common/nav/mobile-menu'
import { Footer } from '@/components/common/footer'
import { WhatsAppButton } from '@/components/common/whatsapp-button'

interface LayoutWithoutHeroProps {
  children: React.ReactNode
  className?: string
}

/**
 * Standardized layout for pages without hero sections
 * Features:
 * - Fixed dark navigation bar at top
 * - Standard content area with responsive containers
 * - Consistent footer and WhatsApp button
 * - Mobile menu functionality
 */
export function LayoutWithoutHero({ 
  children, 
  className 
}: LayoutWithoutHeroProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Fixed Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#242424]">
        <DesktopNav variant="default" />
        <MobileNav variant="default" onMenuClick={() => setMobileMenuOpen(true)} />
      </div>
      
      {/* Main Content with top padding to account for fixed nav */}
      <main className={`pt-[80px] lg:pt-[90px] xl:pt-[105px] 2xl:pt-[121.6px] ${className || ''}`}>
        {children}
      </main>

      <Footer />
      
      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
      
      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
      />
    </>
  )
}