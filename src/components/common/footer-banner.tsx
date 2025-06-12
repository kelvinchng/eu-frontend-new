'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export function FooterBanner({ className }: { className?: string }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log('Newsletter signup:', { name, email })
  }

  return (
    <section className={cn("relative w-full h-[1080px]", className)}>
      {/* Background Image and Gradient */}
      <div className="absolute inset-0">
        <Image
          src="/assets/footerbanner.png"
          alt="Travel destination background"
          fill
          className="object-cover"
        />
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(270deg, rgba(7, 7, 7, 0.102) 0%, rgba(7, 7, 7, 0.502) 42.3%, rgba(7, 7, 7, 0.902) 100%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center">
        {/* Title + Subtitle */}
        <div className="absolute left-[128px] top-[303px] w-[646px] flex flex-col gap-[17px]">
          <h2 className="font-thunder font-medium text-[170px] leading-[0.92] text-white">
            Go places.
          </h2>
          <p className="font-onest font-medium text-[18px] leading-[1.667] text-white">
            Whether you're dreaming of exploring Iceland's icy landscapes, Australia's sun-kissed beaches, or Japan's vibrant cityscapes, we've got the perfect itinerary for you. Our expertly curated travel experiences are designed to match your wanderlust, ensuring every moment is unforgettable.
            <br /><br />
            Sign up for our newsletter and be the first to receive exclusive travel deals, insider tips, and destination inspiration straight to your inbox.
          </p>
        </div>

        {/* Plane Illustration */}
        <svg className="absolute left-[1.24px] top-[130.5px]" width="739" height="188" viewBox="0 0 739 188" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.212532">
            <path d="M667.453 49.3616C665.654 48.4866 663.842 47.6356 662.021 46.8086" stroke="white" strokeWidth="5" strokeLinecap="round"/>
            <path d="M651.368 42.2763C634.998 35.7663 617.933 31.0023 600.644 27.6633C514.474 10.9933 422.104 25.8733 341.914 59.7133C341.555 59.8633 341.197 60.0153 340.839 60.1683" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="11.58 11.58"/>
            <path d="M335.54 62.5C333.722 63.328 331.912 64.181 330.113 65.06C330.363 67.025 330.508 69.02 330.544 71.042" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M329.488 83.0105C329.454 83.1875 329.419 83.3645 329.383 83.5415C326.073 100.142 315.943 115.452 301.453 123.002C296.403 125.562 289.413 127.212 284.973 123.242C274.373 112.132 288.573 93.3115 297.133 86.0515C304.055 80.1905 311.583 75.1145 319.471 70.6445" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="12.03 12.03"/>
            <path d="M324.757 67.7671C326.529 66.8391 328.315 65.9381 330.113 65.0641C329.861 63.0651 329.501 61.0971 329.041 59.1641" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M325.102 47.9309C313.57 23.3289 285.492 6.15892 257.953 3.31092C220.113 -1.35908 183.514 14.8209 152.014 34.3909C94.314 70.6369 47.074 119.474 8.02502 175.162" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="11.92 11.92"/>
            <path d="M4.62104 180.062C3.48804 181.71 2.36204 183.363 1.24304 185.021" stroke="white" strokeWidth="5" strokeLinecap="round"/>
            <path d="M708.084 111.319C711.523 109.089 713.518 105.199 713.321 101.105L711.35 59.3843C711.215 56.5032 712.594 53.7601 714.989 52.1504L728.291 43.3802C731.605 41.209 734.383 38.3157 736.418 34.9171L737.728 32.7055C738.418 31.5138 738.01 29.9896 736.818 29.3003C736.367 29.0393 735.845 28.9266 735.325 28.9773L732.771 29.2571C728.837 29.707 725.056 31.0424 721.712 33.1628L708.229 41.6579C705.792 43.23 702.694 43.3567 700.137 41.9875L662.958 22.9596C659.309 21.0898 654.942 21.2992 651.49 23.5108C667.169 32.0688 681.918 46.0116 687.842 51.8668C688.532 52.5552 688.534 53.6718 687.845 54.362C687.756 54.4522 687.657 54.532 687.551 54.6005L684.968 52.2556C683.719 51.1287 681.82 51.1296 680.572 52.2566L677.289 55.349C676.83 55.7669 676.538 56.3369 676.466 56.9539C676.39 57.5972 676.071 58.187 675.573 58.603L674.326 59.6998L676.022 58.9974C676.535 58.757 677.112 58.6941 677.666 58.818L678.574 59.0143L680.05 59.3327L677.221 61.1573C675.407 62.3237 673.734 63.6976 672.239 65.2499L664.751 73.1965L655.067 66.0528C652.974 64.4742 650.065 64.5616 648.071 66.2641L645.093 68.7696L659.217 79.3091L657.131 81.531C656.949 81.7095 656.946 82.0015 657.124 82.1837C657.253 82.3152 657.449 82.3584 657.621 82.2908L660.507 81.3113L664.316 98.5925L667.897 96.8684C670.239 95.7227 671.508 93.1364 670.98 90.583L668.454 78.6292L678.714 75.1442C680.744 74.4174 682.685 73.4614 684.499 72.295L687.33 70.4713L687.01 71.9466L686.813 72.8547C686.699 73.4097 686.402 73.9103 685.971 74.2774L684.631 75.5321L686.137 74.8437C686.721 74.5629 687.391 74.5169 688.008 74.7132C688.603 74.8681 689.232 74.8381 689.809 74.6277L693.982 72.9148C695.549 72.2696 696.343 70.5182 695.798 68.9143L694.732 65.5946C695.547 65.0649 696.636 65.2959 697.166 66.1111C697.236 66.2191 697.295 66.3346 697.34 66.4548C700.204 74.3836 706.761 93.5064 708.084 111.319Z" fill="white"/>
          </g>
        </svg>

        {/* Newsletter Form */}
        <div className="absolute left-[128px] top-[778px] w-[829px] bg-white rounded-[12px] p-[44px_24px_44px_44px]" style={{ boxShadow: '0px 3px 3px 0px rgba(0, 0, 0, 0.16)' }}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-[12px]">
            {/* Labels */}
            <div className="flex gap-[157px] w-[387px]">
              <label className="font-onest text-[18px] leading-[1.275] uppercase text-[#242424]">
                Your Name*
              </label>
              <label className="font-onest text-[18px] leading-[1.275] uppercase text-[#242424]">
                Your Email*
              </label>
            </div>

            {/* Inputs and Button */}
            <div className="flex items-center gap-[31px]">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-[240px] h-[51px] px-[19px] bg-[#EFEFEF] rounded-[8px] font-onest text-[18px] leading-[1.275] text-[#242424] placeholder:text-[#242424]"
                required
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@doe.com"
                className="w-[242px] h-[51px] px-[19px] bg-[#EFEFEF] rounded-[8px] font-onest text-[18px] leading-[1.275] text-[#242424] placeholder:text-[#242424]"
                required
              />
              <button
                type="submit"
                className="w-[217px] h-[51px] bg-[#242424] rounded-[8px] font-onest text-[18px] leading-[1.275] text-white hover:bg-gray-800 transition-colors"
              >
                Join Newsletter
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}