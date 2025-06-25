import Image from 'next/image'
import { cn } from '@/lib/utils'

const logos = [
  { src: '/assets/SIN_Quality_Class.png', alt: 'SIN Quality Class', height: 95.56, width: 130.55 },
  { src: '/assets/TripZilla_Australia.png', alt: 'TripZilla Australia', height: 158.77, width: 109.72 },
  { src: '/assets/SIN_Service_Class.png', alt: 'SIN Service Class', height: 88.15, width: 120.42 },
  { src: '/assets/Tripzilla_europe.png', alt: 'TripZilla Europe', height: 158.77, width: 109.72 },
  { src: '/assets/SPBA.png', alt: 'SPBA', height: 95.56, width: 130.55 },
  { src: '/assets/TripZilla_Japan.png', alt: 'TripZilla Japan', height: 158.77, width: 109.72 },
  { src: '/assets/Travel_Weekly_Asia.png', alt: 'Travel Weekly Asia', height: 69.1, width: 120.42 },
  { src: '/assets/Club_Med.png', alt: 'Club Med', height: 126.04, width: 145.97 },
]

export default function AboutStory() {
  return (
    <section
      className={cn(
        'w-full flex flex-col lg:flex-row lg:justify-between lg:items-center',
        'lg:w-[77.2vw] lg:mx-auto lg:mt-24',
        'px-4 mt-8 lg:px-0',
        'gap-y-8 lg:gap-y-0 lg:gap-x-[21px]'
      )}
      style={{ minHeight: '295px' }}
    >
      {/* Left: Title and Text */}
      <div
        className={cn(
          'flex flex-col',
          'w-full lg:w-[744px]'
        )}
        style={{ minWidth: 0 }}
      >
        <h2 className={cn(
          'font-[Thunder] text-[#242424]',
          'text-[30px] lg:text-[50px] font-medium',
          'mb-1 lg:mb-2',
        )}>Our Story</h2>
        <p className={cn(
          'font-[Onest] text-[#242424] leading-[1.27em]',
          'text-[13px] lg:text-[18px]'
        )}>
          Founded in 2010, EU Holidays has grown from a small, dedicated team into one of Singapore's leading travel agencies specialising in long-haul tours to Europe, the USA, and exotic destinations. Over the years, we launched EU MICE, EU Asia, and EU Vacations to better serve different traveller needs across the region.<br /><br />Our commitment to service and quality has been recognised through multiple industry awards, including those from TripZilla, Weekender, and the Singapore Prestige Brand Awards. Today, we continue to focus on delivering well-planned, value-driven group tours that our customers trust and enjoy.
        </p>
      </div>
      {/* Right: Award Logos Grid */}
      <div
        className={cn(
          'grid grid-cols-2 gap-x-4 gap-y-4 mt-6',
          'lg:grid-cols-4 lg:grid-rows-2 lg:gap-x-[58.5px] lg:gap-y-0 lg:mt-0',
          'w-full lg:w-auto'
        )}
      >
        {/* Each logo gets its own cell, sized per Figma */}
        {logos.map((logo, i) => (
          <div
            key={logo.src}
            className={cn(
              'flex items-center justify-center',
              'h-[43.45px] lg:h-auto',
              'w-auto'
            )}
            style={{ height: i < 2 ? undefined : undefined }}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="object-contain max-h-[95.56px] max-w-[145.97px]"
            />
          </div>
        ))}
      </div>
    </section>
  )
} 