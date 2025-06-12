import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'EU Holidays - Premium Travel Experiences',
  description: 'Discover premium travel experiences across Europe with EU Holidays. Book guided tours, vacation packages, and explore trending destinations.',
  keywords: 'EU Holidays, Europe travel, guided tours, vacation packages, travel deals',
  openGraph: {
    title: 'EU Holidays - Premium Travel Experiences',
    description: 'Discover premium travel experiences across Europe with EU Holidays.',
    url: 'https://euholidays.com',
    siteName: 'EU Holidays',
    images: [
      {
        url: '/assets/EU_Logo.svg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/fonts/Thunder-LC.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Thunder-LightLC.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/PPFormula-Medium.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Onest:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} font-onest antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}