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
    <section className={cn("relative w-full h-[1008px] lg:h-[1080px]", className)}>
      {/* Background Image and Gradient */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/footer-banner-background.jpg"
          alt="Travel destination background"
          fill
          className="object-cover"
        />
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(270deg, rgba(7, 7, 7, 0.1) 0%, rgba(7, 7, 7, 0.5) 42.3%, rgba(7, 7, 7, 0.9) 100%)'
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full max-w-[1920px] mx-auto">
        <div className="h-full flex flex-col justify-center lg:px-0 px-[25px]">
          {/* Title + Subtitle */}
          <div className="absolute left-[25px] lg:left-[128px] top-[175px] lg:top-[303px] w-[339px] lg:w-[646px] flex flex-col gap-[17px]">
            <h2 className="font-thunder font-medium text-[53px] lg:text-[170px] leading-[0.92] text-white">
              Go places.
            </h2>
            <p className="font-onest font-medium text-[14px] lg:text-[18px] leading-[2.14] lg:leading-[1.667] text-white">
              Whether you're dreaming of exploring Iceland's icy landscapes, Australia's sun-kissed beaches, or Japan's vibrant cityscapes, we've got the perfect itinerary for you. Our expertly curated travel experiences are designed to match your wanderlust, ensuring every moment is unforgettable.
              <br /><br />
              Sign up for our newsletter and be the first to receive exclusive travel deals, insider tips, and destination inspiration straight to your inbox.
            </p>
          </div>

          {/* Plane Illustration */}
          <div className="absolute left-[3px] lg:left-[1.24px] top-[70px] lg:top-[130.5px] opacity-[0.21]">
            {/* Mobile Version - Scaled down */}
            <div className="lg:hidden">
              <svg width="324" height="86" viewBox="0 0 740 188" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path d="M669.324 49.3522C667.524 48.4764 665.71 47.6246 663.887 46.7969" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M653.225 42.2585C636.84 35.7425 619.759 30.9741 602.454 27.632C516.205 10.9467 423.75 25.8404 343.486 59.7115C343.127 59.8616 342.769 60.0137 342.41 60.1669" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="11.58 11.58"/>
                  <path d="M337.107 62.5027C335.287 63.3314 333.475 64.1852 331.675 65.065C331.925 67.0318 332.07 69.0287 332.106 71.0525" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M331.049 83.0321C331.015 83.2092 330.98 83.3864 330.944 83.5635C327.631 100.179 317.491 115.503 302.988 123.06C297.934 125.622 290.937 127.274 286.493 123.3C275.883 112.18 290.096 93.3425 298.664 86.0758C305.593 80.2095 313.127 75.1288 321.023 70.6547" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="12.03 12.03"/>
                  <path d="M326.314 67.7726C328.087 66.8438 329.875 65.9419 331.675 65.0671C331.422 63.0663 331.062 61.0965 330.602 59.1617" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M326.659 47.9202C315.116 23.2956 287.013 6.10984 259.448 3.25923C221.574 -1.41506 184.941 14.7798 153.412 34.3678C95.659 70.6471 48.3756 119.529 9.29076 175.268" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="11.92 11.92"/>
                  <path d="M5.88365 180.173C4.74961 181.822 3.62258 183.476 2.50255 185.137" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M709.993 111.367C713.435 109.134 715.431 105.241 715.235 101.143L713.262 59.3841C713.127 56.5003 714.507 53.7547 716.904 52.1436L730.219 43.3653C733.535 41.1921 736.316 38.2961 738.353 34.8944L739.664 32.6808C740.354 31.488 739.946 29.9624 738.754 29.2725C738.301 29.0112 737.779 28.8984 737.259 28.9492L734.702 29.2293C730.765 29.6795 726.981 31.0161 723.633 33.1386L710.137 41.6414C707.699 43.2149 704.597 43.3418 702.039 41.9714L664.825 22.9259C661.173 21.0545 656.802 21.2641 653.347 23.4777C669.041 32.0435 683.803 45.9991 689.732 51.8597C690.423 52.5487 690.425 53.6663 689.736 54.3572C689.646 54.4475 689.547 54.5274 689.441 54.596L686.856 52.2489C685.605 51.1209 683.705 51.1219 682.456 52.2498L679.17 55.3451C678.71 55.7634 678.418 56.334 678.346 56.9515C678.27 57.5954 677.95 58.1857 677.452 58.6021L676.204 59.6999L677.902 58.9969C678.415 58.7562 678.993 58.6933 679.547 58.8173L680.455 59.0138L681.933 59.3324L679.101 61.1588C677.286 62.3262 675.612 63.7014 674.115 65.2551L666.62 73.209L656.927 66.0588C654.832 64.4787 651.92 64.5661 649.925 66.2703L646.944 68.7781L661.081 79.3272L658.993 81.5512C658.811 81.7298 658.808 82.0221 658.986 82.2045C659.115 82.3361 659.311 82.3793 659.483 82.3116L662.372 81.3312L666.185 98.6284L669.769 96.9026C672.113 95.7558 673.383 93.1672 672.855 90.6115L670.326 78.6467L680.595 75.1585C682.628 74.431 684.571 73.4741 686.387 72.3067L689.22 70.4813L688.899 71.958L688.703 72.8669C688.588 73.4224 688.291 73.9234 687.86 74.2909L686.518 75.5467L688.026 74.8577C688.611 74.5767 689.281 74.5306 689.898 74.7271C690.494 74.8822 691.123 74.8521 691.701 74.6415L695.877 72.9271C697.446 72.2813 698.241 70.5283 697.695 68.9228L696.628 65.6001C697.444 65.0699 698.535 65.3012 699.065 66.117C699.135 66.2251 699.194 66.3408 699.239 66.4611C702.106 74.3972 708.668 93.5375 709.993 111.367Z" fill="white"/>
                </g>
              </svg>
            </div>
            
            {/* Desktop Version - Full size */}
            <div className="hidden lg:block">
              <svg width="737" height="183" viewBox="0 0 740 188" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path d="M669.324 49.3522C667.524 48.4764 665.71 47.6246 663.887 46.7969" stroke="white" strokeWidth="5" strokeLinecap="round"/>
                  <path d="M653.225 42.2585C636.84 35.7425 619.759 30.9741 602.454 27.632C516.205 10.9467 423.75 25.8404 343.486 59.7115C343.127 59.8616 342.769 60.0137 342.41 60.1669" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="11.58 11.58"/>
                  <path d="M337.107 62.5027C335.287 63.3314 333.475 64.1852 331.675 65.065C331.925 67.0318 332.07 69.0287 332.106 71.0525" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M331.049 83.0321C331.015 83.2092 330.98 83.3864 330.944 83.5635C327.631 100.179 317.491 115.503 302.988 123.06C297.934 125.622 290.937 127.274 286.493 123.3C275.883 112.18 290.096 93.3425 298.664 86.0758C305.593 80.2095 313.127 75.1288 321.023 70.6547" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="12.03 12.03"/>
                  <path d="M326.314 67.7726C328.087 66.8438 329.875 65.9419 331.675 65.0671C331.422 63.0663 331.062 61.0965 330.602 59.1617" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M326.659 47.9202C315.116 23.2956 287.013 6.10984 259.448 3.25923C221.574 -1.41506 184.941 14.7798 153.412 34.3678C95.659 70.6471 48.3756 119.529 9.29076 175.268" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="11.92 11.92"/>
                  <path d="M5.88365 180.173C4.74961 181.822 3.62258 183.476 2.50255 185.137" stroke="white" strokeWidth="5" strokeLinecap="round"/>
                  <path d="M709.993 111.367C713.435 109.134 715.431 105.241 715.235 101.143L713.262 59.3841C713.127 56.5003 714.507 53.7547 716.904 52.1436L730.219 43.3653C733.535 41.1921 736.316 38.2961 738.353 34.8944L739.664 32.6808C740.354 31.488 739.946 29.9624 738.754 29.2725C738.301 29.0112 737.779 28.8984 737.259 28.9492L734.702 29.2293C730.765 29.6795 726.981 31.0161 723.633 33.1386L710.137 41.6414C707.699 43.2149 704.597 43.3418 702.039 41.9714L664.825 22.9259C661.173 21.0545 656.802 21.2641 653.347 23.4777C669.041 32.0435 683.803 45.9991 689.732 51.8597C690.423 52.5487 690.425 53.6663 689.736 54.3572C689.646 54.4475 689.547 54.5274 689.441 54.596L686.856 52.2489C685.605 51.1209 683.705 51.1219 682.456 52.2498L679.17 55.3451C678.71 55.7634 678.418 56.334 678.346 56.9515C678.27 57.5954 677.95 58.1857 677.452 58.6021L676.204 59.6999L677.902 58.9969C678.415 58.7562 678.993 58.6933 679.547 58.8173L680.455 59.0138L681.933 59.3324L679.101 61.1588C677.286 62.3262 675.612 63.7014 674.115 65.2551L666.62 73.209L656.927 66.0588C654.832 64.4787 651.92 64.5661 649.925 66.2703L646.944 68.7781L661.081 79.3272L658.993 81.5512C658.811 81.7298 658.808 82.0221 658.986 82.2045C659.115 82.3361 659.311 82.3793 659.483 82.3116L662.372 81.3312L666.185 98.6284L669.769 96.9026C672.113 95.7558 673.383 93.1672 672.855 90.6115L670.326 78.6467L680.595 75.1585C682.628 74.431 684.571 73.4741 686.387 72.3067L689.22 70.4813L688.899 71.958L688.703 72.8669C688.588 73.4224 688.291 73.9234 687.86 74.2909L686.518 75.5467L688.026 74.8577C688.611 74.5767 689.281 74.5306 689.898 74.7271C690.494 74.8822 691.123 74.8521 691.701 74.6415L695.877 72.9271C697.446 72.2813 698.241 70.5283 697.695 68.9228L696.628 65.6001C697.444 65.0699 698.535 65.3012 699.065 66.117C699.135 66.2251 699.194 66.3408 699.239 66.4611C702.106 74.3972 708.668 93.5375 709.993 111.367Z" fill="white"/>
                </g>
              </svg>
            </div>
          </div>

          {/* Newsletter Form */}
          <div className="absolute left-[28px] lg:left-[128px] top-[608px] lg:top-[778px] w-[336px] lg:w-[829px] bg-white rounded-[12px] p-[27px] lg:p-[44px_24px_44px_44px]" style={{ boxShadow: '0px 3px 3px 0px rgba(0, 0, 0, 0.16)' }}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-[12px] lg:gap-[12px]">
              {/* Mobile Form Layout */}
              <div className="lg:hidden flex flex-col gap-[17px]">
                {/* Name Input */}
                <div className="flex flex-col gap-[7px]">
                  <label className="font-onest text-[14px] leading-[1.275] uppercase text-[#242424]">
                    Your Name*
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-[273px] h-[44px] px-[19px] bg-[#EFEFEF] rounded-[8px] font-onest text-[14px] leading-[1.275] text-[#242424] placeholder:text-[#242424]"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="flex flex-col gap-[7px]">
                  <label className="font-onest text-[14px] leading-[1.275] uppercase text-[#242424]">
                    Your Email*
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@doe.com"
                    className="w-[273px] h-[44px] px-[19px] bg-[#EFEFEF] rounded-[8px] font-onest text-[14px] leading-[1.275] text-[#242424] placeholder:text-[#242424]"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-[167px] h-[36px] bg-[#242424] rounded-[8px] font-onest text-[12px] leading-[1.275] text-white hover:bg-gray-800 transition-colors mt-[31px]"
                >
                  Join Newsletter
                </button>
              </div>

              {/* Desktop Form Layout */}
              <div className="hidden lg:flex flex-col gap-[12px]">
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}