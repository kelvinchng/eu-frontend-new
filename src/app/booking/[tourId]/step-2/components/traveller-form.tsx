'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface TravellerFormProps {
  roomNumber: number
  travellerType: string
  travellerNumber: number
  isMainContact: boolean
}

export function TravellerForm({ roomNumber, travellerType, travellerNumber, isMainContact }: TravellerFormProps) {
  const [formData, setFormData] = useState({
    title: 'Mr',
    gender: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    nationality: '',
    passportNumber: '',
    passportExpiry: '',
    passportIssueDate: '',
    email: '',
    phoneNumber: '',
    address: '',
    postalCode: '',
    contactNo: ''
  })
  
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }
  
  return (
    <div className="space-y-[35px]">
      {/* Title and Gender Row */}
      <div className="flex flex-col md:flex-row gap-[20px] md:gap-[30px]">
        {/* Title */}
        <div className="flex items-center gap-[10px] w-full md:w-[136px]">
          <label className="text-[16px] md:text-[18px] font-onest font-medium text-[#242424] tracking-[-2.5%] whitespace-nowrap">
            Title
          </label>
          <div className="relative flex-1 md:flex-none md:w-[90px]">
            <select 
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              className={`w-full h-[46px] px-[20px] border border-[#E8E8E8] rounded-[9px] appearance-none ${isMainContact ? 'bg-[#FFFFFF]' : 'bg-[#F4F4F4]'} font-onest text-[18px] text-[#242424] pr-[40px] tracking-[-2.5%]`}
            >
              <option value="">Select</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Ms">Ms</option>
              <option value="Dr">Dr</option>
            </select>
            <ChevronDown className="absolute right-[16px] top-[50%] transform -translate-y-1/2 w-[10px] h-[5px] text-[#1E1E1E] pointer-events-none" />
          </div>
        </div>
        
        {/* Gender */}
        <div className="flex items-center gap-[10px] w-full md:w-[190px]">
          <label className="text-[16px] md:text-[18px] font-onest font-medium text-[#242424] tracking-[-2.5%] whitespace-nowrap">
            Gender
          </label>
          <div className="relative flex-1 md:flex-none md:w-[120px]">
            <select 
              value={formData.gender || ''}
              onChange={(e) => handleInputChange('gender', e.target.value)}
              className={`w-full h-[46px] px-[20px] border border-[#E8E8E8] rounded-[9px] appearance-none ${isMainContact ? 'bg-[#FFFFFF]' : 'bg-[#F4F4F4]'} font-onest text-[18px] text-[#242424] pr-[40px] tracking-[-2.5%]`}
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <ChevronDown className="absolute right-[16px] top-[50%] transform -translate-y-1/2 w-[10px] h-[5px] text-[#1E1E1E] pointer-events-none" />
          </div>
        </div>
      </div>
      
      {/* First Name and Last Name Row */}
      <div className="flex flex-col md:flex-row gap-[20px] md:gap-[30px]">
        {/* First Name */}
        <div className="flex-1">
          <label className="block text-[16px] md:text-[18px] font-onest font-medium text-[#242424] mb-[10px] tracking-[-2.5%]">
            First Name
          </label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            className={`w-full h-[46px] px-[20px] border border-[#E8E8E8] rounded-[9px] ${isMainContact ? 'bg-[#FFFFFF]' : 'bg-[#F4F4F4]'} font-onest text-[18px] text-[#242424] tracking-[-2.5%]`}
            placeholder=""
          />
        </div>
        
        {/* Last Name */}
        <div className="flex-1">
          <label className="block text-[16px] md:text-[18px] font-onest font-medium text-[#242424] mb-[10px] tracking-[-2.5%]">
            Last Name
          </label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            className={`w-full h-[46px] px-[20px] border border-[#E8E8E8] rounded-[9px] ${isMainContact ? 'bg-[#FFFFFF]' : 'bg-[#F4F4F4]'} font-onest text-[18px] text-[#242424] tracking-[-2.5%]`}
            placeholder=""
          />
        </div>
      </div>
      
      {/* Contact Details - Only for Main Contact */}
      {isMainContact && (
        <>
          {/* Address Row */}
          <div>
            <label className="block text-[16px] md:text-[18px] font-onest font-medium text-[#242424] mb-[10px] tracking-[-2.5%]">
              Address
            </label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              className="w-full h-[46px] px-[20px] border border-[#E8E8E8] rounded-[9px] bg-[#FFFFFF] font-onest text-[18px] text-[#242424] tracking-[-2.5%]"
              placeholder=""
            />
          </div>
          
          {/* Postal Code and Contact No Row */}
          <div className="flex flex-col md:flex-row gap-[20px] md:gap-[30px]">
            {/* Postal Code */}
            <div className="flex-1">
              <label className="block text-[16px] md:text-[18px] font-onest font-medium text-[#242424] mb-[10px] tracking-[-2.5%]">
                Postal Code
              </label>
              <input
                type="text"
                value={formData.postalCode}
                onChange={(e) => handleInputChange('postalCode', e.target.value)}
                className="w-full h-[46px] px-[20px] border border-[#E8E8E8] rounded-[9px] bg-[#FFFFFF] font-onest text-[18px] text-[#242424] tracking-[-2.5%]"
                placeholder=""
              />
            </div>
            
            {/* Contact No */}
            <div className="flex-1">
              <label className="block text-[16px] md:text-[18px] font-onest font-medium text-[#242424] mb-[10px] tracking-[-2.5%]">
                Contact No.
              </label>
              <input
                type="tel"
                value={formData.contactNo}
                onChange={(e) => handleInputChange('contactNo', e.target.value)}
                className="w-full h-[46px] px-[20px] border border-[#E8E8E8] rounded-[9px] bg-[#FFFFFF] font-onest text-[18px] text-[#242424] tracking-[-2.5%]"
                placeholder=""
              />
            </div>
          </div>
          
          {/* Email Row */}
          <div>
            <label className="block text-[16px] md:text-[18px] font-onest font-medium text-[#242424] mb-[10px] tracking-[-2.5%]">
              Email Address
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full h-[46px] px-[20px] border border-[#E8E8E8] rounded-[9px] bg-[#FFFFFF] font-onest text-[18px] text-[#242424] tracking-[-2.5%]"
              placeholder=""
            />
            <p className="text-[16px] md:text-[18px] font-onest text-[#707070] mt-[10px] tracking-[-2.5%]">
              Your booking confirmation will be sent to this email address.
            </p>
          </div>
        </>
      )}
      
      {/* Regular traveller fields for non-main contact */}
      {!isMainContact && (
        <>
          {/* Date of Birth and Nationality Row */}
          <div className="flex flex-col md:flex-row gap-[20px] md:gap-[30px]">
            {/* Date of Birth */}
            <div className="flex-1">
              <label className="block text-[16px] md:text-[18px] font-onest font-medium text-[#242424] mb-[10px] tracking-[-2.5%]">
                Date of Birth
              </label>
              <input
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                className="w-full h-[46px] px-[20px] border border-[#E8E8E8] rounded-[9px] bg-[#F4F4F4] font-onest text-[18px] text-[#242424] tracking-[-2.5%]"
              />
            </div>
            
            {/* Nationality */}
            <div className="flex-1">
              <label className="block text-[16px] md:text-[18px] font-onest font-medium text-[#242424] mb-[10px] tracking-[-2.5%]">
                Nationality
              </label>
              <div className="relative">
                <select 
                  value={formData.nationality}
                  onChange={(e) => handleInputChange('nationality', e.target.value)}
                  className="w-full h-[46px] px-[20px] border border-[#E8E8E8] rounded-[9px] appearance-none bg-[#F4F4F4] font-onest text-[18px] text-[#242424] pr-[40px] tracking-[-2.5%]"
                >
                  <option value="">Select nationality</option>
                  <option value="SG">Singaporean</option>
                  <option value="MY">Malaysia</option>
                  <option value="ID">Indonesia</option>
                  <option value="TH">Thailand</option>
                  <option value="PH">Philippines</option>
                  <option value="VN">Vietnam</option>
                  <option value="CN">China</option>
                  <option value="JP">Japan</option>
                  <option value="KR">South Korea</option>
                  <option value="US">United States</option>
                  <option value="GB">United Kingdom</option>
                  <option value="AU">Australia</option>
                </select>
                <ChevronDown className="absolute right-[16px] top-[50%] transform -translate-y-1/2 w-[10px] h-[5px] text-[#1E1E1E] pointer-events-none" />
              </div>
            </div>
          </div>
          
          {/* Passport Details Row */}
          <div className="flex flex-col md:flex-row gap-[20px] md:gap-[30px]">
            {/* Passport Number */}
            <div className="flex-1">
              <label className="block text-[16px] md:text-[18px] font-onest font-medium text-[#242424] mb-[10px] tracking-[-2.5%]">
                Passport No.
              </label>
              <input
                type="text"
                value={formData.passportNumber}
                onChange={(e) => handleInputChange('passportNumber', e.target.value)}
                className="w-full h-[46px] px-[20px] border border-[#E8E8E8] rounded-[9px] bg-[#F4F4F4] font-onest text-[18px] text-[#242424] tracking-[-2.5%]"
                placeholder=""
              />
            </div>
            
            {/* Date of Issue */}
            <div className="flex-1">
              <label className="block text-[16px] md:text-[18px] font-onest font-medium text-[#242424] mb-[10px] tracking-[-2.5%]">
                Date of Issue
              </label>
              <input
                type="date"
                value={formData.passportIssueDate}
                onChange={(e) => handleInputChange('passportIssueDate', e.target.value)}
                className="w-full h-[46px] px-[20px] border border-[#E8E8E8] rounded-[9px] bg-[#F4F4F4] font-onest text-[18px] text-[#242424] tracking-[-2.5%]"
              />
            </div>
          </div>
          
          {/* Expiry Date Row */}
          <div className="flex flex-col md:flex-row gap-[20px] md:gap-[30px]">
            <div className="flex-1">
              <label className="block text-[16px] md:text-[18px] font-onest font-medium text-[#242424] mb-[10px] tracking-[-2.5%]">
                Expiry Date
              </label>
              <input
                type="date"
                value={formData.passportExpiry}
                onChange={(e) => handleInputChange('passportExpiry', e.target.value)}
                className="w-full h-[46px] px-[20px] border border-[#E8E8E8] rounded-[9px] bg-[#F4F4F4] font-onest text-[18px] text-[#242424] tracking-[-2.5%]"
              />
            </div>
            <div className="flex-1"></div>
          </div>
        </>
      )}
    </div>
  )
}