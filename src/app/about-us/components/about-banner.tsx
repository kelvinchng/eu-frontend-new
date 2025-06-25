import Image from 'next/image'
import { cn } from '@/lib/utils'

export default function AboutBanner() {
  return (
    <section className="relative w-full h-[409px] lg:h-[838px] flex items-end justify-start">
      {/* Background image and gradient overlay */}
      <div className={cn(
        'absolute inset-0 w-full h-full bg-cover bg-center',
        'bg-[url(/about/about-banner.jpg)]',
        'lg:bg-[url(/about/about-banner.jpg)]',
        'bg-[url(/about/about-banner.jpg)]'
      )} />
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#070707b5] via-[#2424249c] to-[#070707bf]" />
      {/* Title */}
      <h1
        className={cn(
          'absolute text-white font-[Thunder] tracking-[.01em]',
          // Desktop
          'hidden lg:block left-[11.46vw] top-[655px] text-[5.73vw] leading-[101px]',
          // Mobile
          'block lg:hidden left-[34px] top-[324px] text-[46px] leading-[42px]'
        )}
        style={{
          // Clamp for desktop font size
          fontSize: 'clamp(2.875rem, 5.73vw, 6.875rem)',
        }}
      >
        About Us
      </h1>
    </section>
  )
} 