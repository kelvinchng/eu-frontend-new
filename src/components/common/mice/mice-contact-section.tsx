'use client'

import React, { useState, useId } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface FormData {
  designation: string
  company: string
  phone: string
  email: string
  destination: string
  estimationOfPax: string
  budgetPerPax: string
  startOfTravel: string
  endOfTravel: string
  remarks: string
}

export function MICEContactSection() {
  const [formData, setFormData] = useState<FormData>({
    designation: '',
    company: '',
    phone: '',
    email: '',
    destination: '',
    estimationOfPax: '',
    budgetPerPax: '',
    startOfTravel: '',
    endOfTravel: '',
    remarks: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  // Shared input styling for consistent design
  const inputClassName = "flex-1 h-9 md:h-14 px-4 md:px-5 border border-[#242424] rounded-lg font-onest text-sm md:text-lg text-[rgba(36,36,36,0.75)] placeholder:text-[rgba(36,36,36,0.75)] min-h-[35px] md:min-h-[58px] shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-[#242424]"

  const GetInTouchComponent = () => (
    <div className="w-full max-w-sm md:max-w-none">
      {/* Title */}
      <h2 className="font-thunder font-normal text-3xl leading-tight md:font-medium md:text-5xl md:leading-tight text-gray-900 mb-10 md:mb-20">
        Get In Touch
      </h2>
      
      {/* Details */}
      <div className="space-y-3 md:space-y-10">
        <p className="font-onest font-normal text-sm leading-normal md:text-lg md:leading-relaxed text-black">
          Tel: +65 6958 8883
        </p>
        <p className="font-onest font-normal text-sm leading-normal md:text-lg md:leading-relaxed text-black">
          Email: mice@euholidays.com.sg
        </p>
        <p className="font-onest font-normal text-sm leading-normal md:text-lg md:leading-relaxed text-black">
          Address: EU Travel EXPO, Suntec Singapore Convention & Exhibition Centre, 1 Raffles Blvd, Level 2 Crescent 2, Singapore 039593
        </p>
        <p className="font-onest font-normal text-sm leading-normal md:text-lg md:leading-relaxed text-black">
          By submitting this form, you are confirming you have read and agreed to our Terms & Conditions and Privacy Policy.
        </p>
      </div>

      {/* Desktop Divider */}
      <div className="hidden md:block w-full h-px bg-gray-200 my-5"></div>
    </div>
  )

  return (
    <div className="w-full px-8 md:px-0 md:max-w-[1480px] flex flex-col md:flex-row gap-8 md:gap-16">
      {/* Mobile: Get In Touch above form */}
      <div className="md:hidden">
        <GetInTouchComponent />
      </div>

      {/* Desktop: Get In Touch on left side */}
      <div className="hidden md:flex flex-1">
        <GetInTouchComponent />
      </div>

      {/* Form Section */}
      <div className="w-full md:max-w-[686px] bg-white rounded-2xl shadow-lg p-5 md:p-11">
        <form onSubmit={handleSubmit} className="space-y-3.5 md:space-y-4">
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row gap-3.5 md:gap-4">
            <Input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              placeholder="Designation*"
              required
              className={inputClassName}
            />
            <Input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company*"
              required
              className={inputClassName}
            />
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row gap-3.5 md:gap-4">
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone*"
              required
              className={inputClassName}
            />
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email*"
              required
              className={inputClassName}
            />
          </div>

          {/* Row 3 */}
          <div className="flex flex-col md:flex-row gap-3.5 md:gap-4">
            <Input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="Destination*"
              required
              className={inputClassName}
            />
            <Input
              type="text"
              name="estimationOfPax"
              value={formData.estimationOfPax}
              onChange={handleChange}
              placeholder="Estimation of Pax*"
              required
              className={inputClassName}
            />
          </div>

          {/* Budget Dropdown */}
          <div className="relative">
            <select
              name="budgetPerPax"
              value={formData.budgetPerPax}
              onChange={handleChange}
              required
              className="w-full h-9 md:h-14 px-4 md:px-5 border border-[#242424] rounded-lg font-onest text-sm md:text-lg text-[rgba(36,36,36,0.75)] appearance-none focus:outline-none bg-white min-h-[35px] md:min-h-[58px]"
            >
              <option value="">Budget per Pax (Select one)*</option>
              <option value="below-1000">Below $1,000</option>
              <option value="1000-2000">$1,000 - $2,000</option>
              <option value="2000-3000">$2,000 - $3,000</option>
              <option value="above-3000">Above $3,000</option>
            </select>
            <svg className="absolute right-4 md:right-6 top-3.5 md:top-6 pointer-events-none w-3 h-1.5 md:w-4 md:h-2" viewBox="0 0 15 8" fill="none">
              <path d="M1 1L7.5 7L14 1" stroke="#1E1E1E" strokeWidth="1.5"/>
            </svg>
          </div>

          {/* Date Row */}
          <div className="flex flex-col md:flex-row gap-3.5 md:gap-4">
            <div className="flex-1 relative">
              <Input
                type="text"
                name="startOfTravel"
                value={formData.startOfTravel}
                onChange={handleChange}
                placeholder="Start of Travel*"
                required
                className={`w-full ${inputClassName}`}
              />
              <svg className="absolute right-4 md:right-5 top-2 md:top-4 pointer-events-none w-3.5 h-4 md:w-5 md:h-7" viewBox="0 0 21 27" fill="none">
                <path d="M1 7H20M1 7V24C1 25.1046 1.89543 26 3 26H18C19.1046 26 20 25.1046 20 24V7M1 7V5C1 3.89543 1.89543 3 3 3H5M20 7V5C20 3.89543 19.1046 3 18 3H16M16 3V1M16 3H5M5 3V1" stroke="#242424" strokeWidth="2"/>
              </svg>
            </div>
            <div className="flex-1 relative">
              <Input
                type="text"
                name="endOfTravel"
                value={formData.endOfTravel}
                onChange={handleChange}
                placeholder="End of Travel*"
                required
                className={`w-full ${inputClassName}`}
              />
              <svg className="absolute right-4 md:right-5 top-2 md:top-4 pointer-events-none w-3.5 h-4 md:w-5 md:h-7" viewBox="0 0 21 27" fill="none">
                <path d="M1 7H20M1 7V24C1 25.1046 1.89543 26 3 26H18C19.1046 26 20 25.1046 20 24V7M1 7V5C1 3.89543 1.89543 3 3 3H5M20 7V5C20 3.89543 19.1046 3 18 3H16M16 3V1M16 3H5M5 3V1" stroke="#242424" strokeWidth="2"/>
              </svg>
            </div>
          </div>

          {/* Remarks */}
          <textarea
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
            placeholder="Remarks (optional)*"
            rows={8}
            className="w-full h-52 md:h-60 p-4 md:p-5 border border-[#242424] rounded-lg font-onest text-sm md:text-lg text-[rgba(36,36,36,0.75)] placeholder:text-[rgba(36,36,36,0.75)] focus:outline-none resize-none"
          />

          {/* Submit Button */}
          <div className="flex justify-center md:justify-end pt-0.5">
            <button
              type="submit"
              className="w-36 h-9 md:w-48 md:h-14 bg-[#242424] border border-[rgba(0,0,0,0.35)] rounded-lg font-onest text-sm md:text-lg text-white tracking-tight hover:bg-[#333333] transition-colors"
            >
              Send Enquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}