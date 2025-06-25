import React from 'react'
import Image from 'next/image'

interface TimelineEvent {
  id: string
  dateRange: string
  events: string[]
}

export function Timeline() {
  const timelineData: TimelineEvent[] = [
    {
      id: '1',
      dateRange: '2010 - 2015',
      events: [
        '•⁠  ⁠Founded by passionate travel professionals to redefine travel experiences',
        '•⁠  ⁠Won Best Travel Awards (ESCAPE! Magazine, 2012)',
        '•⁠  ⁠Received Asia Excellence Award, Singapore Excellence Award (2013)',
        '•⁠  ⁠Established EU MICE, EU Asia (2013) and EU Vacations Malaysia (2014)',
        '•⁠  ⁠Awarded Singapore Quality Brands and Weekender Travellers\' Choice Award for #1 Europe/USA tours (2014)',
        '•⁠  ⁠Honored with Singapore Trusted Quality Brand (2015)'
      ]
    },
    {
      id: '2',
      dateRange: '2016 - 2019',
      events: [
        '•⁠  ⁠Completed Customer-Centric Initiative; certified Singapore Service Class (2016)',
        '•⁠  ⁠Won Singapore Prestige Brand Award – Service Excellence (2017)',
        '•⁠  ⁠Moved to 10,000 sq ft flagship at Suntec Convention Centre (2019)',
        '•⁠  ⁠Launched Singapore Ski & Snowboard Academy (2019)'
      ]
    },
    {
      id: '3',
      dateRange: '2024 - Present',
      events: [
        '•⁠  ⁠Won Singapore Prestige Brand Award – Established Brands & Transformation (2023)',
        '•⁠  ⁠Opened retail storefront with service centers at Suntec City Mall (2023)',
        '•⁠  ⁠First travel agency in NDP history (2024–2025)',
        '•⁠  ⁠Named Best Outbound Travel Agency (Asia Pacific) – Travel Weekly Asia (2024)',
        '•⁠  ⁠TripZilla Excellence Awards: Best for Europe (9th), Japan (3rd), Australia (2024)',
        '•⁠  ⁠Received Club Med Top Achiever Platinum Award (2024)',
        '•⁠  ⁠Entered F&B as Killiney Kopitiam franchisee – two outlets (2025)'
      ]
    }
  ]

  return (
    <div className="w-full max-w-[325px] md:max-w-[1481px]">
      {/* Desktop Timeline Header with Line and Icons */}
      <div className="relative h-[51px] mb-[32px] hidden md:block">
        {/* Horizontal Line */}
        <div className="absolute top-[22px] left-0 right-0 h-[2px] bg-[#242424]" />
        
        {/* Arrow at the end */}
        <div className="absolute right-0 top-0">
          <svg width="24" height="44" viewBox="0 0 24 44" fill="none">
            <path d="M0 22L22 0L24 2L4 22L24 42L22 44L0 22Z" fill="#242424" transform="rotate(180 12 22)"/>
          </svg>
        </div>

        {/* Timeline Icons */}
        <div className="absolute left-0 top-0 w-[50px] h-[50px] bg-[#242424] rounded-full flex items-center justify-center">
          <svg width="15" height="20" viewBox="0 0 15 20" fill="none">
            <path d="M1 8.14V17.86C1 18.49 1.49 19 2.12 19H12.88C13.51 19 14 18.49 14 17.86V8.14M7.5 1V14M7.5 14L4 10.5M7.5 14L11 10.5" stroke="white" strokeWidth="2"/>
          </svg>
        </div>

        <div className="absolute left-[531px] top-0 w-[50px] h-[50px] bg-[#242424] rounded-full flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 1V10M10 10H19M10 10L15 5M10 10L15 15" stroke="white" strokeWidth="2"/>
          </svg>
        </div>

        <div className="absolute left-[1066px] top-0 w-[50px] h-[50px] bg-[#242424] rounded-full flex items-center justify-center">
          <svg width="17" height="20" viewBox="0 0 17 20" fill="none">
            <path d="M8.5 1V19M8.5 19L1 11.5M8.5 19L16 11.5" stroke="white" strokeWidth="2"/>
          </svg>
        </div>
      </div>

      {/* Mobile Timeline - Vertical with Icons */}
      <div className="md:hidden">
        <div className="relative flex gap-[19px]">
          {/* Left Side - Timeline Icons and Line */}
          <div className="relative flex flex-col items-center w-[40px]">
            {/* First Timeline Icon */}
            <div className="w-[40px] h-[40px] bg-[#242424] rounded-full flex items-center justify-center mb-[-1px]">
              <Image
                src="/assets/icons/timeline/timeline-icon-1.svg"
                alt="Timeline Icon 1"
                width={12}
                height={15}
                sizes="12px"
                className="object-contain"
              />
            </div>

            {/* Vertical Line */}
            <div className="w-[2px] h-[1078px] bg-[#242424]" />

            {/* Second Timeline Icon */}
            <div className="absolute top-[400px] w-[40px] h-[40px] bg-[#242424] rounded-full flex items-center justify-center">
              <Image
                src="/assets/icons/timeline/timeline-icon-2.svg"
                alt="Timeline Icon 2"
                width={16}
                height={15}
                sizes="16px"
                className="object-contain"
              />
            </div>

            {/* Third Timeline Icon */}
            <div className="absolute top-[664px] w-[40px] h-[40px] bg-[#242424] rounded-full flex items-center justify-center">
              <Image
                src="/assets/icons/timeline/timeline-icon-3.svg"
                alt="Timeline Icon 3"
                width={14}
                height={16}
                sizes="14px"
                className="object-contain"
              />
            </div>

            {/* Arrow at bottom */}
            <div className="mt-[-1px]">
              <Image
                src="/assets/icons/timeline/timeline-arrow.svg"
                alt="Timeline Arrow"
                width={27}
                height={15}
                sizes="27px"
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Side - Timeline Content */}
          <div className="flex flex-col">
            {timelineData.map((period, index) => {
              let marginTop = '0px';
              let marginBottom = '0px';
              
              if (index === 0) {
                // 2010-2015 is perfectly aligned at 10px
                marginTop = '10px';
                marginBottom = '60px';
              } else if (index === 1) {
                // 2016-2019 needs to be 15px higher to align with icon center
                marginTop = '25px';
                marginBottom = '50px';
              } else if (index === 2) {
                // 2024-Present needs final 15px adjustment to align with icon center
                marginTop = '17px';
              }

              return (
                <div 
                  key={period.id} 
                  className="w-[266px]" 
                  style={{ marginTop, marginBottom }}
                >
                  <h3 className="font-thunder font-medium text-[22px] leading-[20px] text-black mb-[17px]">
                    {period.dateRange}
                  </h3>
                  <div className="space-y-[8px]">
                    {period.events.map((event, idx) => (
                      <p key={idx} className="font-onest text-[13px] leading-[17px] text-black ml-[2px]">
                        {event}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Desktop Timeline Events */}
      <div className="hidden md:flex gap-[124px]">
        {timelineData.map((period) => (
          <div key={period.id} className="w-[410px]">
            <h3 className="font-thunder font-semibold text-[29px] leading-[27px] text-black mb-[24px]">
              {period.dateRange}
            </h3>
            <div className="space-y-[8px]">
              {period.events.map((event, idx) => (
                <p key={idx} className="font-onest text-[18px] leading-[23px] text-black">
                  {event}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}