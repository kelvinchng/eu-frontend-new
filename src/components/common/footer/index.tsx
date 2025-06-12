import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Footer() {
  return (
    <footer className="w-full bg-[#242424] text-white">
      <div className="w-full px-[55px] pt-[70px] pb-[55px] flex flex-col gap-[81.39px]">
        {/* Main Content */}
        <div className="flex gap-[58px] w-[1042px]">
          {/* Links Section */}
          <div className="flex-1 flex flex-col gap-[10px]">
            {/* Header Row */}
            <div className="flex gap-[176px]">
              <div className="flex gap-[153px] w-[241px]">
                <h3 className="font-thunder text-[24px] leading-[1.25]">Links</h3>
                <h3 className="font-thunder text-[24px] leading-[1.25]">Explore</h3>
              </div>
              <h3 className="font-thunder text-[24px] leading-[1.25]">Policies</h3>
            </div>
            
            {/* Content Grid */}
            <div className="flex gap-[70px]">
              {/* Links Column */}
              <div className="flex flex-col gap-[6px] w-[119px]">
                <Link href="/" className="font-onest text-[18px] leading-[1.667] hover:opacity-80 transition-opacity">
                  Home
                </Link>
                <Link href="/our-story" className="font-onest text-[18px] leading-[1.667] hover:opacity-80 transition-opacity">
                  Our Story
                </Link>
                <Link href="/press-media" className="font-onest text-[18px] leading-[1.667] hover:opacity-80 transition-opacity">
                  Press & Media
                </Link>
                <Link href="/partners" className="font-onest text-[18px] leading-[1.667] hover:opacity-80 transition-opacity">
                  Our Partners
                </Link>
                <Link href="/careers" className="font-onest text-[18px] leading-[1.667] hover:opacity-80 transition-opacity">
                  Careers
                </Link>
                <Link href="/contact" className="font-onest text-[18px] leading-[1.667] hover:opacity-80 transition-opacity">
                  Contact Us
                </Link>
              </div>
              
              {/* Explore and Policies */}
              <div className="flex gap-[44px] flex-1">
                {/* Explore Column */}
                <div className="flex flex-col gap-[6px] w-[184px]">
                  <Link href="/trending" className="font-onest text-[18px] leading-[1.667] hover:opacity-80 transition-opacity">
                    Trending Destinations
                  </Link>
                  <Link href="/themed-journeys" className="font-onest text-[18px] leading-[1.667] hover:opacity-80 transition-opacity">
                    Themed Journeys
                  </Link>
                  <Link href="/cruises" className="font-onest text-[18px] leading-[1.667] hover:opacity-80 transition-opacity">
                    Cruises
                  </Link>
                  <Link href="/deals" className="font-onest text-[18px] leading-[1.667] hover:opacity-80 transition-opacity">
                    Last-Minute Deals
                  </Link>
                </div>
                
                {/* Policies Column */}
                <div className="flex flex-col gap-[6px] flex-1">
                  <Link href="/terms" className="font-onest text-[18px] leading-[1.667] hover:opacity-80 transition-opacity">
                    Terms and Conditions
                  </Link>
                  <Link href="/cancellation" className="font-onest text-[18px] leading-[1.667] hover:opacity-80 transition-opacity whitespace-nowrap">
                    Cancellation and Refunds
                  </Link>
                  <Link href="/privacy" className="font-onest text-[18px] leading-[1.667] hover:opacity-80 transition-opacity">
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Find Us Section */}
          <div className="w-[353px] h-[214px] flex flex-col gap-[10px]">
            <h3 className="font-thunder text-[24px] leading-[1.25]">Find Us</h3>
            <p className="font-onest text-[18px] leading-[1.667]">Social Media</p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-[15.55px]">
              <Link 
                href="https://instagram.com/euholidays" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 1.8C12.67 1.8 13 1.81 14.04 1.86C15.08 1.91 15.84 2.07 16.52 2.31C17.22 2.56 17.82 2.9 18.42 3.48C19.01 4.08 19.35 4.68 19.6 5.38C19.84 6.06 20 6.82 20.05 7.86C20.1 8.9 20.11 9.23 20.11 11.9V12.1C20.11 14.77 20.1 15.1 20.05 16.14C20 17.18 19.84 17.94 19.6 18.62C19.35 19.32 19.01 19.92 18.42 20.52C17.82 21.11 17.22 21.45 16.52 21.7C15.84 21.94 15.08 22.1 14.04 22.15C13 22.2 12.67 22.21 10 22.21C7.33 22.21 7 22.2 5.96 22.15C4.92 22.1 4.16 21.94 3.48 21.7C2.78 21.45 2.18 21.11 1.58 20.52C0.99 19.92 0.65 19.32 0.4 18.62C0.16 17.94 0 17.18 -0.05 16.14C-0.1 15.1 -0.11 14.77 -0.11 12.1V11.9C-0.11 9.23 -0.1 8.9 -0.05 7.86C0 6.82 0.16 6.06 0.4 5.38C0.65 4.68 0.99 4.08 1.58 3.48C2.18 2.89 2.78 2.55 3.48 2.3C4.16 2.06 4.92 1.9 5.96 1.85C7 1.81 7.33 1.8 10 1.8ZM10 0C7.28 0 6.94 0.01 5.88 0.06C4.81 0.11 3.99 0.28 3.27 0.53C2.53 0.78 1.89 1.12 1.25 1.76C0.61 2.4 0.27 3.04 0.02 3.78C-0.23 4.5 -0.4 5.32 -0.45 6.39C-0.5 7.45 -0.51 7.79 -0.51 10.51C-0.51 13.23 -0.5 13.57 -0.45 14.63C-0.4 15.7 -0.23 16.52 0.02 17.24C0.27 17.98 0.61 18.62 1.25 19.26C1.89 19.9 2.53 20.24 3.27 20.49C3.99 20.74 4.81 20.91 5.88 20.96C6.94 21.01 7.28 21.02 10 21.02C12.72 21.02 13.06 21.01 14.12 20.96C15.19 20.91 16.01 20.74 16.73 20.49C17.47 20.24 18.11 19.9 18.75 19.26C19.39 18.62 19.73 17.98 19.98 17.24C20.23 16.52 20.4 15.7 20.45 14.63C20.5 13.57 20.51 13.23 20.51 10.51C20.51 7.79 20.5 7.45 20.45 6.39C20.4 5.32 20.23 4.5 19.98 3.78C19.73 3.04 19.39 2.4 18.75 1.76C18.11 1.12 17.47 0.78 16.73 0.53C16.01 0.28 15.19 0.11 14.12 0.06C13.06 0.01 12.72 0 10 0ZM10 5.14C7.14 5.14 4.82 7.46 4.82 10.32C4.82 13.18 7.14 15.5 10 15.5C12.86 15.5 15.18 13.18 15.18 10.32C15.18 7.46 12.86 5.14 10 5.14ZM10 13.7C8.13 13.7 6.62 12.19 6.62 10.32C6.62 8.45 8.13 6.94 10 6.94C11.87 6.94 13.38 8.45 13.38 10.32C13.38 12.19 11.87 13.7 10 13.7ZM16.72 4.92C16.72 5.63 16.15 6.2 15.44 6.2C14.73 6.2 14.16 5.63 14.16 4.92C14.16 4.21 14.73 3.64 15.44 3.64C16.15 3.64 16.72 4.21 16.72 4.92Z" fill="white"/>
                </svg>
              </Link>
              
              <Link 
                href="https://facebook.com/euholidays" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <svg width="11" height="20" viewBox="0 0 11 20" fill="none">
                  <path d="M6.88 20V10.88H9.86L10.27 7.32H6.88V5.05C6.88 4.02 7.14 3.32 8.48 3.32H10.37V0.14C10.08 0.097 9.06 0 7.88 0C5.41 0 3.72 1.49 3.72 4.23V7.32H0.73V10.88H3.72V20H6.88Z" fill="white"/>
                </svg>
              </Link>
              
              <Link 
                href="https://youtube.com/euholidays" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="YouTube"
              >
                <svg width="29" height="20" viewBox="0 0 29 20" fill="none">
                  <path d="M27.79 3.13C27.46 1.92 26.49 0.96 25.28 0.63C23.09 0 14.27 0 14.27 0C14.27 0 5.45 0 3.26 0.63C2.05 0.96 1.08 1.92 0.75 3.13C0.12 5.32 0.12 10 0.12 10C0.12 10 0.12 14.68 0.75 16.87C1.08 18.08 2.05 19.04 3.26 19.37C5.45 20 14.27 20 14.27 20C14.27 20 23.09 20 25.28 19.37C26.49 19.04 27.46 18.08 27.79 16.87C28.42 14.68 28.42 10 28.42 10C28.42 10 28.42 5.32 27.79 3.13ZM11.39 14.29V5.71L18.73 10L11.39 14.29Z" fill="white"/>
                </svg>
              </Link>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-col gap-[6px]">
              <p className="font-onest text-[18px] leading-[1.667]">+65 6958 8888</p>
              <p className="font-onest text-[18px] leading-[1.667]">1 Raffles Blvd, Level 2 Crescent 2, 039593</p>
              <p className="font-onest text-[18px] leading-[1.667]">Monday to Sunday, 11AM to 8PM</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="flex flex-col gap-[53.61px]">
          {/* Divider */}
          <div className="w-[1810px] h-0 border-t border-[#5C5C5C]" />
          
          {/* Copyright */}
          <p className="font-onest text-[18px] leading-[1.667]">
            © 2025 EU Holidays Pte Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}