import React from 'react'
import Image from 'next/image'

export function OurStory() {
  const awards = [
    [
      { src: '/assets/images/sin-quality-class.png', alt: 'Singapore Quality Class', width: 131, height: 96 },
      { src: '/assets/images/tripzilla-australia.png', alt: 'TripZilla Australia', width: 110, height: 159 }
    ],
    [
      { src: '/assets/images/sin-service-class.png', alt: 'Singapore Service Class', width: 120, height: 88 },
      { src: '/assets/images/tripzilla-europe.png', alt: 'TripZilla Europe', width: 110, height: 159 }
    ],
    [
      { src: '/assets/images/spba.png', alt: 'Singapore Prestige Brand Award', width: 131, height: 96 },
      { src: '/assets/images/tripzilla-japan.png', alt: 'TripZilla Japan', width: 110, height: 159 }
    ],
    [
      { src: '/assets/images/travel-weekly-asia.png', alt: 'Travel Weekly Asia', width: 260, height: 69 },
      { src: '/assets/images/club-med.png', alt: 'Club Med', width: 146, height: 126 }
    ]
  ]

  return (
    <div className="w-full max-w-[325px] md:max-w-[1481px] flex flex-col md:flex-row gap-[25px] md:gap-[21px] items-center">
      {/* Mobile Layout - Absolute positioned like Figma */}
      <div className="md:hidden relative w-[325px] h-[460px]">
        {/* Story Content */}
        <div className="absolute left-0 top-0 w-[325px]">
          <h2 className="font-thunder font-normal text-[30px] leading-[28px] text-[#242424] mb-[15px]">
            Our Story
          </h2>
          <p className="font-onest text-[13px] leading-[17px] text-[#242424] w-[325px] h-[255px]">
            Founded in 2010, EU Holidays has grown from a small, dedicated team into one of Singapore's leading travel 
            agencies specialising in long-haul tours to Europe, the USA, and exotic destinations. Over the years, we 
            launched EU MICE, EU Asia, and EU Vacations to better serve different traveller needs across the region.
            <br /><br />
            Our commitment to service and quality has been recognised through multiple industry awards, including 
            those from TripZilla, Weekender, and the Singapore Prestige Brand Awards. Today, we continue to focus on 
            delivering well-planned, value-driven group tours that our customers trust and enjoy.
          </p>
        </div>

        {/* Awards Grid - Absolute positioned at bottom like Figma */}
        <div className="absolute left-0 top-[325px] w-[325px] h-[134px] flex items-end">
          {/* First Column - width 59.36px */}
          <div className="flex flex-col items-center gap-[15px] w-[59px]">
            {/* SIN Quality Class */}
            <div className="w-[59px] h-[43px] flex items-center justify-center">
              <Image
                src={awards[0][0].src}
                alt={awards[0][0].alt}
                width={59}
                height={43}
                sizes="59px"
                className="object-contain"
              />
            </div>
            {/* TripZilla Australia */}
            <div className="w-[50px] h-[72px] flex items-center justify-center">
              <Image
                src={awards[0][1].src}
                alt={awards[0][1].alt}
                width={50}
                height={72}
                sizes="50px"
                className="object-contain"
              />
            </div>
          </div>

          {/* Second Column - width 54.76px */}
          <div className="flex flex-col items-center gap-[18px] w-[55px] ml-[27px]">
            {/* SIN Service Class */}
            <div className="w-[55px] h-[40px] flex items-center justify-center">
              <Image
                src={awards[1][0].src}
                alt={awards[1][0].alt}
                width={55}
                height={40}
                sizes="55px"
                className="object-contain"
              />
            </div>
            {/* TripZilla Europe */}
            <div className="w-[50px] h-[72px] flex items-center justify-center">
              <Image
                src={awards[1][1].src}
                alt={awards[1][1].alt}
                width={50}
                height={72}
                sizes="50px"
                className="object-contain"
              />
            </div>
          </div>

          {/* Third Column - width 59.36px */}
          <div className="flex flex-col items-center gap-[18px] w-[59px] ml-[24px]">
            {/* SPBA */}
            <div className="w-[59px] h-[43px] flex items-center justify-center">
              <Image
                src={awards[2][0].src}
                alt={awards[2][0].alt}
                width={59}
                height={43}
                sizes="59px"
                className="object-contain"
              />
            </div>
            {/* TripZilla Japan */}
            <div className="w-[50px] h-[72px] flex items-center justify-center">
              <Image
                src={awards[2][1].src}
                alt={awards[2][1].alt}
                width={50}
                height={72}
                sizes="50px"
                className="object-contain"
              />
            </div>
          </div>

          {/* Fourth Column - scaled down to fit */}
          <div className="flex flex-col gap-[31px] ml-[24px] flex-1">
            {/* Travel Weekly Asia - scaled down */}
            <div className="w-full max-w-[82px] h-[22px] flex items-center justify-center">
              <Image
                src={awards[3][0].src}
                alt={awards[3][0].alt}
                width={82}
                height={22}
                sizes="82px"
                className="object-contain"
              />
            </div>
            {/* Club Med - scaled down */}
            <div className="w-full max-w-[46px] h-[40px] flex items-center justify-center">
              <Image
                src={awards[3][1].src}
                alt={awards[3][1].alt}
                width={46}
                height={40}
                sizes="46px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex gap-[21px] items-center w-full">
        {/* Story Content */}
        <div className="w-[744px]">
          <h2 className="font-thunder font-medium text-[50px] leading-[46px] text-[#242424] mb-[38px]">
            Our Story
          </h2>
          <p className="font-onest text-[18px] leading-[23px] text-[#242424]">
            Founded in 2010, EU Holidays has grown from a small, dedicated team into one of Singapore's leading travel 
            agencies specialising in long-haul tours to Europe, the USA, and exotic destinations. Over the years, we 
            launched EU MICE, EU Asia, and EU Vacations to better serve different traveller needs across the region.
            <br /><br />
            Our commitment to service and quality has been recognised through multiple industry awards, including 
            those from TripZilla, Weekender, and the Singapore Prestige Brand Awards. Today, we continue to focus on 
            delivering well-planned, value-driven group tours that our customers trust and enjoy.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="w-[715px] flex gap-[59px] items-end">
          {/* First Column */}
          <div className="flex flex-col items-center gap-[33px]">
            {awards[0].map((award, idx) => (
              <div key={idx} className="relative">
                <Image
                  src={award.src}
                  alt={award.alt}
                  width={award.width}
                  height={award.height}
                  sizes={`${award.width}px`}
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          {/* Second Column */}
          <div className="flex flex-col items-center gap-[39px]">
            {awards[1].map((award, idx) => (
              <div key={idx} className="relative">
                <Image
                  src={award.src}
                  alt={award.alt}
                  width={award.width}
                  height={award.height}
                  sizes={`${award.width}px`}
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          {/* Third and Fourth Columns Combined */}
          <div className="flex gap-[52px]">
            {/* Third Column */}
            <div className="flex flex-col items-center gap-[40px]">
              {awards[2].map((award, idx) => (
                <div key={idx} className="relative">
                  <Image
                    src={award.src}
                    alt={award.alt}
                    width={award.width}
                    height={award.height}
                    sizes={`${award.width}px`}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Fourth Column */}
            <div className="flex flex-col gap-[69px]">
              {awards[3].map((award, idx) => (
                <div key={idx} className="relative">
                  <Image
                    src={award.src}
                    alt={award.alt}
                    width={award.width}
                    height={award.height}
                    sizes={`${award.width}px`}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}