'use client'

import React, { useState, useEffect } from 'react'
import { DesktopNav } from '@/components/common/nav/desktop-nav'
import { DesktopScrolledNav } from '@/components/common/nav/desktop-scrolled-nav'
import { MobileNav } from '@/components/common/nav/mobile-nav'
import { MobileScrolledNav } from '@/components/common/nav/mobile-scrolled-nav'
import { MobileMenu } from '@/components/common/nav/mobile-menu'
import { Footer } from '@/components/common/footer'
import { WhatsAppButton } from '@/components/common/whatsapp-button'

interface LayoutWithHeroProps {
  children: React.ReactNode
  hero: React.ReactNode
  enableScrolledNav?: boolean
  className?: string
}

/**
 * Standardized layout for pages with hero sections
 * Features:
 * - Overlay navigation positioned over hero
 * - Optional scrolled navigation for complex pages
 * - Responsive mobile menu
 * - Consistent footer and WhatsApp button
 */
export function LayoutWithHero({ 
  children, 
  hero,
  enableScrolledNav = false,
  className 
}: LayoutWithHeroProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    if (!enableScrolledNav) return

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [enableScrolledNav])

  return (
    <>
      {/* Scrolled Navigation - Only for pages that need it (like homepage) */}
      {enableScrolledNav && (
        <div className={`fixed top-0 left-0 right-0 z-50 transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <DesktopScrolledNav />
          <MobileScrolledNav onMenuClick={() => setMobileMenuOpen(true)} />
        </div>
      )}
      
      <main className={className}>
        {/* Hero Section with Overlay Navigation */}
        <div className="relative">
          {/* Navigation - Positioned absolutely over hero */}
          <div className="absolute top-0 left-0 right-0 z-20">
            <DesktopNav variant="overlay" />
            <MobileNav onMenuClick={() => setMobileMenuOpen(true)} />
          </div>
          
          {/* Hero Content */}
          {hero}
        </div>
        
        {/* Main Content */}
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