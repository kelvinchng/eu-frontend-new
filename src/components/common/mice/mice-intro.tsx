import React from 'react'
import Image from 'next/image'

export function MICEIntro() {
  return (
    <>
      {/* Mobile Version */}
      <div className="md:hidden">
        <div className="w-full max-w-[325px] mx-auto bg-[#EFEFEF] rounded-[9px] overflow-hidden">
          {/* Image */}
          <div className="relative w-full h-[214px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.16)]">
            <Image
              src="/assets/images/mice-intro.jpg"
              alt="MICE Services"
              fill
              sizes="325px"
              className="object-cover"
            />
          </div>
          {/* Content */}
          <div className="px-[30px] py-[43px]">
            <h2 className="font-thunder font-normal text-[30px] leading-[28px] text-[#242424] mb-[44px]">
              What We Do
            </h2>
            <p className="font-onest text-[13px] leading-[17px] text-[#242424]">
              EU MICE is the preferred choice for a diverse clientele of travelers who desire nothing but the most attentive and unique travelling experience. We offer a range of global destinations and the finest selection of accommodation and lifestyle options. Besides, We are also a certified self-ticketing agent. With our professional team and extensive network of business partners, we can reliably deliver customized MICE experiences to suit your needs and budgets. We have you covered. Whether you want to experience a little local flavor somewhere new or be amazed with the ultimate WOW factor, you can count on us for an invaluable quality MICE experience. Enjoy your destination with satisfaction!
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden md:block w-[1480px] h-[674px] bg-[#EEEEEE] rounded-[20px] relative overflow-hidden">
        {/* Text Content */}
        <div className="absolute left-[94px] top-[157px]">
          <h2 className="font-thunder font-medium text-[50px] leading-[46px] text-[#242424] mb-[38px]">
            What We Do
          </h2>
          <p className="w-[527px] font-onest text-[18px] leading-[23px] text-[#242424]">
            EU MICE is the preferred choice for a diverse clientele of travelers who desire nothing but the most attentive and unique travelling experience. We offer a range of global destinations and the finest selection of accommodation and lifestyle options. Besides, We are also a certified self-ticketing agent. With our professional team and extensive network of business partners, we can reliably deliver customized MICE experiences to suit your needs and budgets. We have you covered. Whether you want to experience a little local flavor somewhere new or be amazed with the ultimate WOW factor, you can count on us for an invaluable quality MICE experience. Enjoy your destination with satisfaction!
          </p>
        </div>

        {/* Image */}
        <div className="absolute right-[93.43px] top-[112px] w-[645.26px] h-[450px] rounded-[20px] overflow-hidden shadow-[0px_1px_4px_0px_rgba(0,0,0,0.16)]">
          <Image
            src="/assets/images/mice-intro.jpg"
            alt="MICE Services"
            fill
            sizes="645px"
            className="object-cover"
          />
        </div>
      </div>
    </>
  )
}