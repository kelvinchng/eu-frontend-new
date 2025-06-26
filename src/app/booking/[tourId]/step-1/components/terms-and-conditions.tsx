'use client'

import React from 'react'

interface TermsAndConditionsProps {
  agreedToTerms: boolean
  onAgreeChange: (agreed: boolean) => void
}

export function TermsAndConditions({ agreedToTerms, onAgreeChange }: TermsAndConditionsProps) {
  return (
    <div className="mt-[36px] md:mt-[60px]">
      <label className="flex items-start gap-[8px] md:gap-[13px] cursor-pointer">
        <input 
          type="checkbox"
          checked={agreedToTerms}
          onChange={(e) => onAgreeChange(e.target.checked)}
          className="w-[14px] h-[14px] md:w-[21px] md:h-[22px] mt-[1px] border md:border-2 border-[#242424] rounded-[2px]"
        />
        <span className="font-onest font-bold text-[13px] md:text-[18px] text-[#242424]">
          I acknowledge to have read and accept the Terms and Conditions
        </span>
      </label>
      
      <ul className="mt-[13px] md:mt-[21px] space-y-[6px] md:space-y-[10px] font-onest text-[13px] md:text-[18px] text-[#242424] leading-[1.275] list-disc pl-[20px]">
        <li>Prices shown are just guideline and are not guaranteed until purchase is completed.</li>
        <li>Price shown are in SGD</li>
        <li>Prices based on twin sharing, and does not include airport taxes and fuel surcharges, optional tours and gratitude for local guides, drivers and tour leaders, if applicable</li>
        <li>All tours subject to group size for confirmation</li>
        <li>All taxes quoted are subject to changes until the ticket(s) is issued</li>
        <li>Land arrangement excludes flight arrangements, optional tours exclude gratitude for local guides, drivers and tour leaders, if applicable</li>
        <li>Tour fare does not include visa charges. Passengers have to ensure that they hold a valid visa to enter their destination country. Please refer to http://cibtvisas.sg for visa requirement and charges</li>
        <li>All passengers are categorised as adult, child or infant based on the tour's return date and not the date of booking</li>
        <li>Please refer to https://www.euholidays.com.sg/tnc.html to view our full set of terms and conditions</li>
        <li>IMPORTANT NOTE: As a licensing condition of the Singapore Tourism Board, we EU HOLIDAYS PTE LTD are required to inform you, the Client, to consider purchasing travel insurance.</li>
        <li>Get a comprehensive travel insurance policy to protect against unforeseen circumstances, such as baggage loss, flight delays, travel agent insolvency and medical emergencies.</li>
      </ul>
    </div>
  )
}