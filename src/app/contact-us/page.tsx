'use client'

import React from 'react'
import Image from 'next/image'
import { LayoutWithoutHero } from '@/components/layouts/layout-without-hero'
import { ResponsiveContainer } from '@/components/layouts/responsive-container'
import { ContactFormWrapper } from './components/contact-form-wrapper'
import { ContactInfo } from '@/components/ui/sections/contact-info'
import { WhyChooseUs } from '@/components/ui/sections/why-choose-us'

export default function ContactUsPage() {
  return (
    <LayoutWithoutHero>
      <ResponsiveContainer>
        <div className="w-full max-w-[325px] md:max-w-[1920px] mx-auto px-[34px] md:px-0">
            {/* Title */}
            <h1 className="font-thunder font-medium text-[30px] leading-[28px] md:text-4xl lg:text-5xl text-[#242424] mt-[35px] md:mt-16 lg:mt-32 mb-[25px] md:mb-12 lg:mb-16">
              Contact Us
            </h1>

            {/* Mobile Contact Info Sections */}
            <div className="lg:hidden space-y-[25px] mb-[44px]">
              {/* EU Holidays Pte Ltd */}
              <div>
                <h2 className="font-thunder font-medium text-[20px] leading-[18px] text-[#242424] mb-[19px]">
                  EU Holidays Pte Ltd
                </h2>
                <div className="space-y-[10px] text-[13px] leading-[17px] font-onest text-[#000000]">
                  <p><span className="font-semibold">Tel:</span> +65 6958 8888 (9AM - 12MN) / +65 6307 7060</p>
                  <p><span className="font-semibold">Whatsapp:</span> +65 8901 2988</p>
                  <p><span className="font-semibold">Email:</span> sales@euholidays.com.sg</p>
                  <p><span className="font-semibold">Address:</span> Suntec Singapore Convention & Exhibition Centre, 1 Raffles Boulevard Level 2 Crescent 2 (beside Link Bridge to Marina Square / Opposite Don Don Donki #02-379-387), Singapore 039593</p>
                  <p><span className="font-semibold">Working Hours:</span> Monday to Friday 9.30AM – 8:30PM. Saturdays to Sundays & Public Holidays 11.00AM - 8.00PM.</p>
                </div>
              </div>

              {/* Corporate Travel Management */}
              <div>
                <h2 className="font-thunder font-medium text-[20px] leading-[18px] text-[#242424] mb-[19px]">
                  Corporate Travel Management
                </h2>
                <div className="space-y-[10px] text-[13px] leading-[17px] font-onest text-[#000000]">
                  <p><span className="font-semibold">Tel:</span> +65 6958 8881</p>
                  <p><span className="font-semibold">Whatsapp:</span> +65 8901 2988</p>
                  <p><span className="font-semibold">Email:</span> corporate@euholidays.com.sg</p>
                  <p><span className="font-semibold">Address:</span> Suntec Singapore Convention & Exhibition Centre, 1 Raffles Boulevard Level 2 Crescent 2 (beside Link Bridge to Marina Square / Opposite Don Don Donki #02-379-387), Singapore 039593</p>
                  <p><span className="font-semibold">Working Hours:</span> Monday to Friday 10:00AM – 6:00PM. Saturdays to Sundays closed.</p>
                </div>
              </div>

              {/* EU Asia Holidays Pte Ltd */}
              <div>
                <h2 className="font-thunder font-medium text-[20px] leading-[18px] text-[#242424] mb-[19px]">
                  EU Asia Holidays Pte Ltd
                </h2>
                <div className="space-y-[10px] text-[13px] leading-[17px] font-onest text-[#000000]">
                  <p><span className="font-semibold">Tel:</span> +65 6958 8888</p>
                  <p><span className="font-semibold">Whatsapp:</span> +65 8901 2988</p>
                  <p><span className="font-semibold">Email:</span> corporate@euholidays.com.sg</p>
                  <p><span className="font-semibold">Address:</span> Suntec Singapore Convention & Exhibition Centre, 1 Raffles Boulevard Level 2 Crescent 2 (beside Link Bridge to Marina Square / Opposite Don Don Donki #02-379-387), Singapore 039593</p>
                  <p><span className="font-semibold">Working Hours:</span> Monday to Friday 10.00AM – 6:00PM. Saturdays to Sundays closed.</p>
                </div>
              </div>

              {/* EU MICE Office */}
              <div>
                <h2 className="font-thunder font-medium text-[20px] leading-[18px] text-[#242424] mb-[19px]">
                  EU MICE Office
                </h2>
                <div className="space-y-[10px] text-[13px] leading-[17px] font-onest text-[#000000]">
                  <p><span className="font-semibold">Tel:</span> +65 6958 8883</p>
                  <p><span className="font-semibold">Whatsapp:</span> +65 8901 2988</p>
                  <p><span className="font-semibold">Email:</span> mice@euholidays.com.sg</p>
                  <p><span className="font-semibold">Address:</span> Suntec Singapore Convention & Exhibition Centre, 1 Raffles Boulevard Level 2 Crescent 2 (beside Link Bridge to Marina Square / Opposite Don Don Donki #02-379-387), Singapore 039593</p>
                  <p><span className="font-semibold">Working Hours:</span> Monday to Friday 10:00AM – 6:00PM. Saturdays to Sundays closed.</p>
                </div>
              </div>

              {/* EU Vacations Sdn.Bhd */}
              <div>
                <h2 className="font-thunder font-medium text-[20px] leading-[18px] text-[#242424] mb-[19px]">
                  EU Vacations Sdn.Bhd
                </h2>
                <div className="space-y-[10px] text-[13px] leading-[17px] font-onest text-[#000000]">
                  <p><span className="font-semibold">Tel:</span> +65 6958 8888</p>
                  <p><span className="font-semibold">Whatsapp:</span> +65 8901 2988</p>
                  <p><span className="font-semibold">Email:</span> sales@euholidays.com.sg</p>
                  <p><span className="font-semibold">Address:</span> Suntec Singapore Convention & Exhibition Centre, 1 Raffles Boulevard Level 2 Crescent 2 (beside Link Bridge to Marina Square / Opposite Don Don Donki #02-379-387), Singapore 039593</p>
                  <p><span className="font-semibold">Working Hours:</span> Monday to Friday 9.30AM – 8:30PM. Saturdays to Sundays & Public Holiday 11:00AM to 8:00PM.</p>
                </div>
              </div>
            </div>

            {/* Desktop Content - Keep existing */}
            <div className="hidden lg:flex flex-col xl:flex-row gap-8 xl:gap-[102px]">
              {/* Left Section - Contact Info */}
              <div className="xl:w-[591px] flex-shrink-0">
                <ContactInfo />
              </div>

              {/* Right Section - Contact Form */}
              <div className="flex-1 flex justify-center xl:justify-start">
                <ContactFormWrapper />
              </div>
            </div>

            {/* Mobile Contact Form */}
            <div className="lg:hidden mb-[25px]">
              <div className="bg-white rounded-[20px] shadow-[0px_5px_15px_0px_rgba(0,0,0,0.15)] p-[20px]">
                <form className="space-y-[14px]">
                  <input
                    type="text"
                    placeholder="First Name*"
                    className="w-full h-[35px] px-[17px] border-[1.4px] border-[#242424] rounded-[9px] font-onest text-[13px] text-[#242424] placeholder:text-[#242424]/75"
                  />
                  <input
                    type="text"
                    placeholder="Last Name*"
                    className="w-full h-[35px] px-[17px] border-[1.4px] border-[#242424] rounded-[9px] font-onest text-[13px] text-[#242424] placeholder:text-[#242424]/75"
                  />
                  <input
                    type="tel"
                    placeholder="Phone*"
                    className="w-full h-[35px] px-[17px] border-[1.4px] border-[#242424] rounded-[9px] font-onest text-[13px] text-[#242424] placeholder:text-[#242424]/75"
                  />
                  <input
                    type="email"
                    placeholder="Email*"
                    className="w-full h-[35px] px-[17px] border-[1.4px] border-[#242424] rounded-[9px] font-onest text-[13px] text-[#242424] placeholder:text-[#242424]/75"
                  />
                  <textarea
                    placeholder="Message*"
                    rows={10}
                    className="w-full px-[17px] py-[9px] border-[1.4px] border-[#242424] rounded-[9px] font-onest text-[13px] text-[#242424] placeholder:text-[#242424]/75 resize-none"
                  />
                  <div className="flex justify-center pt-[7px]">
                    <button className="w-[136px] h-[35px] bg-[#242424] border border-[#000000]/35 rounded-[9px] text-white font-onest text-[13px] hover:bg-[#333333] transition-colors">
                      Send Enquiry
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Terms Text */}
            <p className="lg:hidden font-onest text-[13px] leading-[17px] text-[#000000] mb-[45px]">
              By submitting this form, you are confirming you have read and agreed to our Terms & Conditions and Privacy Policy.
            </p>

            {/* Mobile Why Choose Us */}
            <div className="lg:hidden mb-[89px]">
              <div className="bg-[#EEEEEE] rounded-[20px] p-[40px_25px]">
                <div className="mb-[27px]">
                  <h3 className="font-thunder font-normal text-[20px] leading-[18px] text-[#242424] uppercase mb-[10px]">
                    WHY CHOOSE US
                  </h3>
                  <h2 className="font-thunder font-medium text-[30px] leading-[28px] text-[#242424] text-left">
                    Professional & Experienced.
                  </h2>
                </div>

                <div className="space-y-[27px]">
                  {/* Travel Specialists */}
                  <div>
                    <div className="w-[50px] h-[50px] bg-[#242424] rounded-[9px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex items-center justify-center mb-[10px]">
                      <Image
                        src="/assets/icons/travel-specialists.svg"
                        alt="Travel Specialists"
                        width={26}
                        height={26}
                        className="block"
                      />
                    </div>
                    <h4 className="font-thunder font-medium text-[20px] leading-[18px] text-[#242424] mb-[10px]">
                      Travel Specialists
                    </h4>
                    <p className="font-onest text-[13px] leading-[17px] text-[#242424]">
                      With deep travel know-how and a genuine love for what we do, we design trips that feel exciting, smooth, and truly unforgettable.
                    </p>
                  </div>

                  {/* Award-Winning Service */}
                  <div>
                    <div className="w-[50px] h-[50px] bg-[#242424] rounded-[9px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex items-center justify-center mb-[10px]">
                      <Image
                        src="/assets/icons/award-winning-service.svg"
                        alt="Award-Winning Service"
                        width={20}
                        height={26}
                        className="block"
                      />
                    </div>
                    <h4 className="font-thunder font-medium text-[20px] leading-[18px] text-[#242424] mb-[10px]">
                      Award-Winning Service
                    </h4>
                    <p className="font-onest text-[13px] leading-[17px] text-[#242424]">
                      Recognised by industry leaders and loved by travellers. Our travellers come back, bring friends, and trust us with their biggest holidays.
                    </p>
                  </div>

                  {/* Effortless Travel */}
                  <div>
                    <div className="w-[50px] h-[50px] bg-[#242424] rounded-[9px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex items-center justify-center mb-[10px]">
                      <Image
                        src="/assets/icons/effortless-travel.svg"
                        alt="Effortless Travel"
                        width={26}
                        height={21}
                        className="block"
                      />
                    </div>
                    <h4 className="font-thunder font-medium text-[20px] leading-[18px] text-[#242424] mb-[10px]">
                      Effortless Travel
                    </h4>
                    <p className="font-onest text-[13px] leading-[17px] text-[#242424]">
                      No scrambling. No confusion. Just smooth, well-planned journeys that let you enjoy every moment stress-free.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Why Choose Us Section */}
            <div className="hidden lg:block">
              <WhyChooseUs className="w-full py-[90px]" />
            </div>
          </div>
        </ResponsiveContainer>
    </LayoutWithoutHero>
  )
}