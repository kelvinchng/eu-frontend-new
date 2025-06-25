import React from 'react'
import Image from 'next/image'

interface ServiceItem {
  iconPath: string
  text: string
}

export function MICEServices() {
  const services: ServiceItem[] = [
    {
      text: "Research and recommendation of destinations, hotels and venues",
      iconPath: "/assets/icons/mice/mice-research-icon.svg"
    },
    {
      text: "Co-ordinate Site inspection to assist in venue selection",
      iconPath: "/assets/icons/mice/mice-inspection-icon.svg"
    },
    {
      text: "Saving, travel management reports and etc.",
      iconPath: "/assets/icons/mice/mice-reports-icon.svg"
    },
    {
      text: "Negotiate with hotel for competitive rate",
      iconPath: "/assets/icons/mice/mice-hotel-icon.svg"
    },
    {
      text: "Negotiate with third party suppliers for event requirements",
      iconPath: "/assets/icons/mice/mice-negotiate-icon.svg"
    },
    {
      text: "Create excite and memorable itinerary for delegates and spouse",
      iconPath: "/assets/icons/mice/mice-itinerary-icon.svg"
    },
    {
      text: "Prepare conference paraphernalia",
      iconPath: "/assets/icons/mice/mice-conference-icon.svg"
    },
    {
      text: "Procure conference souvenir",
      iconPath: "/assets/icons/mice/mice-souvenir-icon.svg"
    },
    {
      text: "Formulate event brief and timeline schedule",
      iconPath: "/assets/icons/mice/mice-schedule-icon.svg"
    }
  ]

  return (
    <div className="w-full max-w-[1126px] px-[41px] md:px-0">
      {/* Header */}
      <div className="text-center mb-[40px] md:mb-[40px]">
        <h2 className="font-thunder font-medium text-[30px] leading-[28px] md:text-[50px] md:leading-[46px] text-[#242424] mb-[20px] md:mb-[38px]">
          Meetings, Incentives, Conventions & Exhibitions (M.I.C.E.)
        </h2>
        <p className="max-w-[325px] md:max-w-[896px] mx-auto font-onest text-[13px] leading-[17px] md:text-[18px] md:leading-[23px] text-[#242424]">
          We go to great lengths to ensure your meetings and incentive trips are the very best reflection of you and your company. We incorporate smart technology, sophisticated planning and thoughtful details to wow your attendees with each successful, memorable incentive travel.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-[39px] gap-y-[82px] md:gap-x-[125px] md:gap-y-[110px]">
        {services.map((service, index) => (
          <div key={index} className="w-[136px] md:w-[292px] flex flex-col items-center">
            {/* Icon */}
            <div className="w-[59px] h-[59px] md:w-[80px] md:h-[80px] bg-[#242424] rounded-[9px] flex items-center justify-center shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] mb-[14px] md:mb-[25px]">
              <Image
                src={service.iconPath}
                alt={service.text}
                width={30}
                height={30}
                sizes="(max-width: 768px) 30px, 40px"
                className="md:w-[40px] md:h-[40px] object-contain"
              />
            </div>
            {/* Text */}
            <p className="font-onest text-[13px] leading-[17px] md:text-[18px] md:leading-[23px] text-center text-[#242424]">
              {service.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}