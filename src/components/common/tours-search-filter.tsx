'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { SlidersHorizontal } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ToursSearchFilterProps {
  className?: string
  onSearch?: (filters: SearchFilters) => void
}

interface SearchFilters {
  destination: string
  from: string
  to: string
  holidayType: string
  duration: string
  sortBy: string
}

export function ToursSearchFilter({ className, onSearch }: ToursSearchFilterProps) {
  const [filters, setFilters] = useState<SearchFilters>({
    destination: 'Switzerland',
    from: 'Jan 2025',
    to: 'Jan 2025',
    holidayType: 'Group Holiday',
    duration: '6 – 9 Days',
    sortBy: 'Price: Low to High'
  })

  const [isExpanded, setIsExpanded] = useState(false) // Collapsed by default
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const handleFilterChange = (key: keyof SearchFilters, value: string) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onSearch?.(newFilters)
  }

  const handleSearch = () => {
    onSearch?.(filters)
  }

  const handleClearFilters = () => {
    const clearedFilters = {
      destination: '',
      from: '',
      to: '',
      holidayType: '',
      duration: '',
      sortBy: ''
    }
    setFilters(clearedFilters)
    onSearch?.(clearedFilters)
  }

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  const selectOption = (key: keyof SearchFilters, value: string) => {
    handleFilterChange(key, value)
    setOpenDropdown(null)
  }

  const destinationOptions = ['Switzerland', 'France', 'Italy', 'Spain', 'Portugal', 'Netherlands', 'Norway']
  const fromOptions = ['Jan 2025', 'Feb 2025', 'Mar 2025', 'Apr 2025', 'May 2025', 'Jun 2025', 'Jul 2025', 'Aug 2025', 'Sep 2025', 'Oct 2025', 'Nov 2025', 'Dec 2025']
  const toOptions = ['Jan 2025', 'Feb 2025', 'Mar 2025', 'Apr 2025', 'May 2025', 'Jun 2025', 'Jul 2025', 'Aug 2025', 'Sep 2025', 'Oct 2025', 'Nov 2025', 'Dec 2025']
  const holidayTypeOptions = ['Group Holiday', 'Family Holiday', 'Solo Travel', 'Luxury Holiday', 'Adventure Holiday']
  const durationOptions = ['3 – 5 Days', '6 – 9 Days', '10 – 14 Days', '15+ Days']
  const sortByOptions = ['Price: Low to High', 'Price: High to Low', 'Duration', 'Popularity']

  return (
    <div className={cn("w-full", className)}>
      {/* Desktop Filter - Matches Figma exactly */}
      <div className="hidden lg:block">
        <div className="w-full max-w-[1255px] mx-auto">
          <div className="flex flex-col gap-[32px]">
            {/* First Row */}
            <div className="flex items-center gap-[172px]">
              {/* Left Group */}
              <div className="flex items-center justify-between gap-[120px]">
                {/* Destination */}
                <div className="w-[203px] relative">
                  <button 
                    onClick={() => toggleDropdown('destination')}
                    className="w-full h-[76px] flex flex-col relative"
                  >
                    <div className="absolute left-0 top-0 font-onest font-semibold text-[18px] leading-[1.275] tracking-[-2.5%] uppercase text-[#242424]">
                      Destination
                    </div>
                    <div className="absolute left-[32px] top-[52px] font-onest text-[18px] leading-[1.275] text-[#242424]">
                      {filters.destination || 'Select destination'}
                    </div>
                    {/* Location Icon */}
                    <div className="absolute left-[0.4px] top-[50px] w-[16.53px] h-[26.39px]">
                      <svg width="17" height="27" viewBox="0 0 17 27" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.40849 21.218C6.2681 22.7649 7.19773 24.6391 8.11568 26.4605C8.45602 27.1329 8.7633 27.2339 9.17172 26.4364C10.0586 24.6984 10.9298 22.8989 11.8478 21.2202C14.6347 16.125 19.1953 11.1572 15.5682 4.29975C12.3476 -1.78864 3.58814 -1.13828 0.968473 4.53045C-2.03433 11.0275 2.65463 16.2656 5.40849 21.218Z" fill="#242424"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.45049 5.62259C10.2611 5.62259 11.7294 7.28145 11.7294 9.32703C11.7294 11.3726 10.2611 13.0315 8.45049 13.0315C6.63986 13.0315 5.17152 11.3726 5.17152 9.32703C5.17152 7.28145 6.63986 5.62259 8.45049 5.62259Z" fill="white"/>
                      </svg>
                    </div>
                    {/* Dropdown Arrow */}
                    <div className="absolute right-0 top-[61px] w-[15px] h-[8px]">
                      <svg 
                        width="17" 
                        height="10" 
                        viewBox="0 0 17 10" 
                        fill="none"
                        className={`transition-transform ${openDropdown === 'destination' ? 'rotate-180' : ''}`}
                      >
                        <path d="M0.772613 0.772532L8.50004 9.01289L16.2275 0.772533" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </button>
                  {openDropdown === 'destination' && (
                    <div className="absolute top-[80px] left-0 z-10 w-full bg-white border border-gray-200 rounded-[4px] shadow-lg">
                      {destinationOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => selectOption('destination', option)}
                          className="block w-full text-left px-4 py-2 font-onest text-[16px] text-[#242424] hover:bg-gray-100"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* From */}
                <div className="w-[144px] relative">
                  <button 
                    onClick={() => toggleDropdown('from')}
                    className="w-full h-[78px] flex flex-col relative"
                  >
                    <div className="absolute left-0 top-0 font-onest font-semibold text-[18px] leading-[1.275] tracking-[-2.5%] uppercase text-[#242424]">
                      From
                    </div>
                    <div className="absolute left-[36px] top-[54px] font-onest text-[18px] leading-[1.275] text-[#242424]">
                      {filters.from || 'Select from date'}
                    </div>
                    {/* Calendar Icon */}
                    <div className="absolute left-0 top-[52px] w-[21px] h-[26px]">
                      <svg width="21" height="27" viewBox="0 0 21 27" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M20.6429 3.16806H16.0406L16.0463 3.08396V0.890681C16.0463 0.403287 15.5939 0 15.0422 0C14.4905 0 14.04 0.40113 14.04 0.890681V3.08396L14.0458 3.16806H6.67927L6.685 3.08396V0.890681C6.685 0.403287 6.23259 0 5.68091 0C5.12733 0 4.67683 0.40113 4.67683 0.890681V3.08396L4.68255 3.16806H0.356966C0.160348 3.16806 0 3.34706 0 3.56919V7.76596C0 7.98809 0.160348 8.16925 0.356966 8.17141H20.6429C20.8396 8.17141 20.9999 7.99025 20.9999 7.76812V3.57135C20.9999 3.34922 20.8396 3.16806 20.6429 3.16806ZM6.59528 5.55112C6.59528 6.03852 6.14287 6.4418 5.59119 6.4418H5.58929V6.34044C5.03761 6.34044 4.58711 5.93931 4.58711 5.44976V3.25864L4.59283 3.17022H6.58955L6.59528 3.25864V5.55112ZM15.9585 5.55112C15.9585 6.03852 15.5061 6.4418 14.9544 6.4418L14.9525 6.34044C14.4008 6.34044 13.9503 5.93931 13.9503 5.44976V3.25864L13.956 3.17022H15.9527L15.9585 3.25864V5.55112ZM20.9121 9.09875H0.0897187C0.0400871 9.09875 0 9.14404 0.00190891 9.20011V26.3991C0.00190891 26.453 0.041996 26.4983 0.0897187 26.4983H20.9121C20.9598 26.4983 20.9999 26.453 20.9999 26.3991V9.19795C20.9999 9.14404 20.9617 9.09875 20.9121 9.09875ZM19.7801 24.6652C19.7801 24.7709 19.6942 24.8679 19.6007 24.8679H1.60157C1.50804 24.8679 1.42214 24.7773 1.42214 24.6652V11.2079C1.42214 10.9858 1.58249 10.8068 1.77719 10.8068L1.68748 10.9081H19.6007C19.6999 10.9081 19.7801 11.0052 19.7801 11.1109V24.6652Z" fill="#242424"/>
                      </svg>
                    </div>
                  </button>
                  {openDropdown === 'from' && (
                    <div className="absolute top-[82px] left-0 z-10 w-full bg-white border border-gray-200 rounded-[4px] shadow-lg">
                      {fromOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => selectOption('from', option)}
                          className="block w-full text-left px-4 py-2 font-onest text-[16px] text-[#242424] hover:bg-gray-100"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* To */}
              <div className="w-[156px] relative">
                <button 
                  onClick={() => toggleDropdown('to')}
                  className="w-full h-[78px] flex flex-col relative"
                >
                  <div className="absolute left-0 top-0 font-onest font-semibold text-[18px] leading-[1.275] tracking-[-2.5%] uppercase text-[#242424]">
                    To
                  </div>
                  <div className="absolute left-[34px] top-[54px] font-onest text-[18px] leading-[1.275] text-[#242424]">
                    {filters.to || 'Select to date'}
                  </div>
                  {/* Calendar Icon */}
                  <div className="absolute left-0 top-[52px] w-[21px] h-[26px]">
                    <svg width="21" height="27" viewBox="0 0 21 27" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M20.6429 3.16806H16.0406L16.0463 3.08396V0.890681C16.0463 0.403287 15.5939 0 15.0422 0C14.4905 0 14.04 0.40113 14.04 0.890681V3.08396L14.0458 3.16806H6.67927L6.685 3.08396V0.890681C6.685 0.403287 6.23259 0 5.68091 0C5.12733 0 4.67683 0.40113 4.67683 0.890681V3.08396L4.68255 3.16806H0.356966C0.160348 3.16806 0 3.34706 0 3.56919V7.76596C0 7.98809 0.160348 8.16925 0.356966 8.17141H20.6429C20.8396 8.17141 20.9999 7.99025 20.9999 7.76812V3.57135C20.9999 3.34922 20.8396 3.16806 20.6429 3.16806ZM6.59528 5.55112C6.59528 6.03852 6.14287 6.4418 5.59119 6.4418H5.58929V6.34044C5.03761 6.34044 4.58711 5.93931 4.58711 5.44976V3.25864L4.59283 3.17022H6.58955L6.59528 3.25864V5.55112ZM15.9585 5.55112C15.9585 6.03852 15.5061 6.4418 14.9544 6.4418L14.9525 6.34044C14.4008 6.34044 13.9503 5.93931 13.9503 5.44976V3.25864L13.956 3.17022H15.9527L15.9585 3.25864V5.55112ZM20.9121 9.09875H0.0897187C0.0400871 9.09875 0 9.14404 0.00190891 9.20011V26.3991C0.00190891 26.453 0.041996 26.4983 0.0897187 26.4983H20.9121C20.9598 26.4983 20.9999 26.453 20.9999 26.3991V9.19795C20.9999 9.14404 20.9617 9.09875 20.9121 9.09875ZM19.7801 24.6652C19.7801 24.7709 19.6942 24.8679 19.6007 24.8679H1.60157C1.50804 24.8679 1.42214 24.7773 1.42214 24.6652V11.2079C1.42214 10.9858 1.58249 10.8068 1.77719 10.8068L1.68748 10.9081H19.6007C19.6999 10.9081 19.7801 11.0052 19.7801 11.1109V24.6652Z" fill="#242424"/>
                    </svg>
                  </div>
                </button>
                {openDropdown === 'to' && (
                  <div className="absolute top-[82px] left-0 z-10 w-full bg-white border border-gray-200 rounded-[4px] shadow-lg">
                    {toOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => selectOption('to', option)}
                        className="block w-full text-left px-4 py-2 font-onest text-[16px] text-[#242424] hover:bg-gray-100"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Type of Holiday */}
              <div className="w-[257px] relative">
                <button 
                  onClick={() => toggleDropdown('holidayType')}
                  className="w-full h-[78px] flex flex-col relative"
                >
                  <div className="absolute left-0 top-0 font-onest font-semibold text-[18px] leading-[1.275] tracking-[-2.5%] uppercase text-[#242424]">
                    Type of Holiday
                  </div>
                  <div className="absolute left-[35px] top-[54px] font-onest text-[18px] leading-[1.275] text-[#242424]">
                    {filters.holidayType || 'Select holiday type'}
                  </div>
                  {/* Tree Icon */}
                  <div className="absolute left-0 top-[52px] w-[23px] h-[26px]">
                    <svg width="23" height="27" viewBox="0 0 23 27" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M10.7054 10.3667C12.3197 15.9253 11.5859 21.2963 10.0141 26.8069H13.1867C14.3839 18.0545 13.3644 14.2543 12.1691 10.8358C12.7781 11.2813 13.3348 11.812 13.8259 12.4152L15.2297 12.1643L14.438 13.2137C14.6247 13.4755 14.8101 13.754 14.9941 14.0492L16.3014 13.8158L15.4923 14.8891C15.6333 15.1378 15.7723 15.3974 15.9094 15.6657L17.1085 15.4476L16.3226 16.4904C16.4868 16.8351 16.649 17.1928 16.8131 17.5615L17.8191 17.3826L17.1259 18.3011C17.4889 19.1737 17.8481 20.1189 18.2034 21.1371C20.8431 15.5807 19.1689 11.4924 12.8971 8.83966C13.6094 8.58769 14.3486 8.44523 15.0945 8.41644L15.641 7.57436L15.7008 8.4208C16.1297 8.44262 16.5565 8.50174 16.9772 8.59751L17.4329 7.88632L17.4889 8.72622C17.8512 8.83442 18.2077 8.96553 18.5568 9.1189L19.0241 8.39462L19.0936 9.37632C19.4738 9.57179 19.8446 9.79038 20.2039 10.0308L20.7388 9.2018L20.8276 10.4627C21.5911 11.0299 22.3172 11.6591 23 12.3454C21.3123 5.14629 16.4983 3.4185 12.1961 7.522C12.7812 2.37135 10.9043 1.13441 8.38627 0C8.70295 0.543207 8.99647 1.09078 9.25715 1.65144L9.94265 1.74524L9.46183 2.10956C9.67057 2.59736 9.84861 3.10108 9.99478 3.61702L10.6069 3.69119L10.1106 4.07733C10.3032 4.90152 10.3781 5.75494 10.3327 6.60575C6.44949 2.5786 3.20737 4.0686 0.223994 7.61799C0.816807 7.46092 1.41348 7.32348 2.01016 7.22094L2.2747 6.47485L2.47746 7.14677C2.93684 7.08045 3.39892 7.04119 3.86197 7.02897L4.12652 6.28288L4.35051 7.02679C4.73497 7.03639 5.11866 7.07129 5.49945 7.1315L5.77944 6.32651L6.05557 7.24276C6.45046 7.33897 6.83801 7.47117 7.21416 7.63762L7.5714 6.62974L8.00008 8.05212C8.19318 8.16774 8.37469 8.29645 8.56006 8.43607C4.06666 7.79688 1.54479 10.6569 0 14.4113C0.628729 13.7501 1.29859 13.1406 2.00436 12.5876L1.94643 12.1774L2.21098 12.4349C2.63367 12.1192 3.07799 11.8419 3.5395 11.6059L3.44874 10.9514L3.93728 11.4226C4.44938 11.1999 4.98484 11.0533 5.53034 10.9863C5.30847 11.4425 5.1148 11.9157 4.95105 12.4021L4.98194 12.4305H4.93946C3.78087 15.8904 4.60347 19.0602 5.83544 22.5027C5.93971 21.1218 6.07102 19.7998 6.26219 18.5759L5.7833 18.1396L6.32205 18.1069C6.41474 17.5615 6.52152 17.0342 6.64259 16.5253L6.1444 16.0759L6.75845 16.0432C6.8801 15.5916 7.01527 15.1574 7.16589 14.7342L6.6619 14.2761L7.3532 14.2521C7.53992 13.797 7.75812 13.3594 8.00587 12.9432L7.44202 12.4349L8.36503 12.4021C8.98758 11.5238 9.78566 10.8247 10.6938 10.3624L10.7054 10.3667Z" fill="#242424"/>
                    </svg>
                  </div>
                  {/* Dropdown Arrow */}
                  <div className="absolute right-0 top-[60px] w-[15px] h-[8px]">
                    <svg 
                      width="17" 
                      height="10" 
                      viewBox="0 0 17 10" 
                      fill="none"
                      className={`transition-transform ${openDropdown === 'holidayType' ? 'rotate-180' : ''}`}
                    >
                      <path d="M0.772613 0.772532L8.50004 9.01289L16.2275 0.772533" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>
                {openDropdown === 'holidayType' && (
                  <div className="absolute top-[82px] left-0 z-10 w-full bg-white border border-gray-200 rounded-[4px] shadow-lg">
                    {holidayTypeOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => selectOption('holidayType', option)}
                        className="block w-full text-left px-4 py-2 font-onest text-[16px] text-[#242424] hover:bg-gray-100"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Divider Line */}
            <div className="w-full h-[1px] bg-black/25"></div>

            {/* Second Row */}
            <div className="flex items-center justify-between gap-[369px]">
              {/* Left Group */}
              <div className="flex items-center justify-between gap-[117px]">
                {/* Duration */}
                <div className="w-[205px] relative">
                  <button 
                    onClick={() => toggleDropdown('duration')}
                    className="w-full h-[78px] flex flex-col relative"
                  >
                    <div className="absolute left-0 top-0 font-onest font-semibold text-[18px] leading-[1.275] tracking-[-2.5%] uppercase text-[#242424]">
                      Duration
                    </div>
                    <div className="absolute left-[34px] top-[54px] font-onest text-[18px] leading-[1.275] text-[#242424]">
                      {filters.duration || 'Select duration'}
                    </div>
                    {/* Calendar Icon */}
                    <div className="absolute left-0 top-[52px] w-[21px] h-[26px]">
                      <svg width="21" height="27" viewBox="0 0 21 27" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M20.6429 3.16806H16.0406L16.0463 3.08396V0.890681C16.0463 0.403287 15.5939 0 15.0422 0C14.4905 0 14.04 0.40113 14.04 0.890681V3.08396L14.0458 3.16806H6.67927L6.685 3.08396V0.890681C6.685 0.403287 6.23259 0 5.68091 0C5.12733 0 4.67683 0.40113 4.67683 0.890681V3.08396L4.68255 3.16806H0.356966C0.160348 3.16806 0 3.34706 0 3.56919V7.76596C0 7.98809 0.160348 8.16925 0.356966 8.17141H20.6429C20.8396 8.17141 20.9999 7.99025 20.9999 7.76812V3.57135C20.9999 3.34922 20.8396 3.16806 20.6429 3.16806ZM6.59528 5.55112C6.59528 6.03852 6.14287 6.4418 5.59119 6.4418H5.58929V6.34044C5.03761 6.34044 4.58711 5.93931 4.58711 5.44976V3.25864L4.59283 3.17022H6.58955L6.59528 3.25864V5.55112ZM15.9585 5.55112C15.9585 6.03852 15.5061 6.4418 14.9544 6.4418L14.9525 6.34044C14.4008 6.34044 13.9503 5.93931 13.9503 5.44976V3.25864L13.956 3.17022H15.9527L15.9585 3.25864V5.55112ZM20.9121 9.09875H0.0897187C0.0400871 9.09875 0 9.14404 0.00190891 9.20011V26.3991C0.00190891 26.453 0.041996 26.4983 0.0897187 26.4983H20.9121C20.9598 26.4983 20.9999 26.453 20.9999 26.3991V9.19795C20.9999 9.14404 20.9617 9.09875 20.9121 9.09875ZM19.7801 24.6652C19.7801 24.7709 19.6942 24.8679 19.6007 24.8679H1.60157C1.50804 24.8679 1.42214 24.7773 1.42214 24.6652V11.2079C1.42214 10.9858 1.58249 10.8068 1.77719 10.8068L1.68748 10.9081H19.6007C19.6999 10.9081 19.7801 11.0052 19.7801 11.1109V24.6652Z" fill="#242424"/>
                      </svg>
                    </div>
                    {/* Dropdown Arrow */}
                    <div className="absolute right-0 top-[60px] w-[15px] h-[8px]">
                      <svg 
                        width="17" 
                        height="10" 
                        viewBox="0 0 17 10" 
                        fill="none"
                        className={`transition-transform ${openDropdown === 'duration' ? 'rotate-180' : ''}`}
                      >
                        <path d="M0.772613 0.772532L8.50004 9.01289L16.2275 0.772533" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </button>
                  {openDropdown === 'duration' && (
                    <div className="absolute top-[82px] left-0 z-10 w-full bg-white border border-gray-200 rounded-[4px] shadow-lg">
                      {durationOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => selectOption('duration', option)}
                          className="block w-full text-left px-4 py-2 font-onest text-[16px] text-[#242424] hover:bg-gray-100"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Sort By */}
                <div className="w-[239px] relative">
                  <button 
                    onClick={() => toggleDropdown('sortBy')}
                    className="w-full h-[73px] flex flex-col relative"
                  >
                    <div className="absolute left-0 top-0 font-onest font-semibold text-[18px] leading-[1.275] tracking-[-2.5%] uppercase text-[#242424]">
                      Sort by
                    </div>
                    <div className="absolute left-0 top-[50px] font-onest text-[18px] leading-[1.275] text-[#242424]">
                      {filters.sortBy || 'Select sort option'}
                    </div>
                    {/* Dropdown Arrow */}
                    <div className="absolute right-0 top-[56px] w-[15px] h-[8px]">
                      <svg 
                        width="17" 
                        height="10" 
                        viewBox="0 0 17 10" 
                        fill="none"
                        className={`transition-transform ${openDropdown === 'sortBy' ? 'rotate-180' : ''}`}
                      >
                        <path d="M0.772613 0.772532L8.50004 9.01289L16.2275 0.772533" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </button>
                  {openDropdown === 'sortBy' && (
                    <div className="absolute top-[78px] left-0 z-10 w-full bg-white border border-gray-200 rounded-[4px] shadow-lg">
                      {sortByOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => selectOption('sortBy', option)}
                          className="block w-full text-left px-4 py-2 font-onest text-[16px] text-[#242424] hover:bg-gray-100"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Right Group - Buttons */}
              <div className="flex items-center gap-[21px]">
                {/* Search Button */}
                <Button
                  onClick={handleSearch}
                  className="w-[152px] h-[51px] bg-[#242424] text-white rounded-[9px] border border-black/35 font-onest text-[18px] leading-[1.275] tracking-[-2.5%] hover:bg-[#1a1a1a]"
                >
                  Search
                </Button>
                
                {/* Clear Filters Button */}
                <Button
                  onClick={handleClearFilters}
                  variant="outline"
                  className="w-[152px] h-[51px] bg-transparent text-[#242424] rounded-[9px] border border-black font-onest text-[18px] leading-[1.275] tracking-[-2.5%] hover:bg-gray-50"
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filter Header */}
      <div className="lg:hidden mb-[34px]">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-between w-full"
        >
          {/* Filter Text - Left */}
          <span className="font-thunder text-[25px] leading-[0.92] text-[#242424]">
            Filter
          </span>
          
          {/* Filter Icon - Right */}
          <SlidersHorizontal 
            className="w-[17px] h-[17px] text-[#242424]" 
          />
        </button>
      </div>

      {/* Mobile Filter Settings */}
      {isExpanded && (
        <div className="lg:hidden">
          <div className="flex flex-col space-y-0">
            
            {/* Destination */}
            <div className="border-b border-[#E8E8E8]">
              <button 
                onClick={() => toggleDropdown('destination')}
                className="w-full py-[18px] flex items-center justify-between"
              >
                <div className="flex items-center gap-[22px]">
                  {/* Location Icon */}
                  <div className="w-[12.53px] h-[20px]">
                    <svg width="13" height="21" viewBox="0 0 13 21" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M4.15745 16.3101C4.81822 17.4991 5.53281 18.9398 6.23843 20.3399C6.50005 20.8567 6.73625 20.9344 7.05019 20.3213C7.73189 18.9854 8.40164 17.6021 9.10726 16.3118C11.2495 12.3951 14.7552 8.57637 11.9671 3.30517C9.49146 -1.37491 2.75816 -0.874981 0.744454 3.48251C-1.56376 8.47672 2.04058 12.5032 4.15745 16.3101Z" fill="#242424"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M6.49634 4.32236C7.88815 4.32236 9.01684 5.59751 9.01684 7.16992C9.01684 8.74233 7.88815 10.0175 6.49634 10.0175C5.10453 10.0175 3.97584 8.74233 3.97584 7.16992C3.97584 5.59751 5.10453 4.32236 6.49634 4.32236Z" fill="white"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="font-onest font-bold text-[13px] leading-[1.275] text-[#242424] uppercase text-left">
                      Destination
                    </div>
                    <div className="font-onest text-[13px] leading-[1.275] text-[#242424] text-left">
                      {filters.destination || 'Select destination'}
                    </div>
                  </div>
                </div>
                {/* Arrow */}
                <svg 
                  width="10" 
                  height="6" 
                  viewBox="0 0 10 6" 
                  fill="none"
                  className={`transition-transform ${openDropdown === 'destination' ? 'rotate-180' : ''}`}
                >
                  <path d="M0.780488 0.780487L4.94309 5.21939L9.10569 0.780488" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {openDropdown === 'destination' && (
                <div className="pb-[18px] pl-[34px]">
                  {destinationOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => selectOption('destination', option)}
                      className="block w-full text-left py-[8px] font-onest text-[13px] text-[#242424] hover:bg-gray-100"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* From */}
            <div className="border-b border-[#E8E8E8]">
              <button 
                onClick={() => toggleDropdown('from')}
                className="w-full py-[18px] flex items-center justify-between"
              >
                <div className="flex items-center gap-[22px]">
                  {/* Calendar Icon */}
                  <div className="w-[15px] h-[18.93px]">
                    <svg width="15" height="19" viewBox="0 0 15 19" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M14.745 2.26291H11.4576L11.4617 2.20284V0.636204C11.4617 0.288063 11.1385 0 10.7445 0C10.3504 0 10.0286 0.286523 10.0286 0.636204V2.20284L10.0327 2.26291H4.77093L4.77502 2.20284V0.636204C4.77502 0.288063 4.45187 0 4.05781 0C3.66239 0 3.34061 0.286523 3.34061 0.636204V2.20284L3.3447 2.26291H0.254977C0.114535 2.26291 0 2.39077 0 2.54944V5.54714C0 5.70581 0.114535 5.8352 0.254977 5.83674H14.745C14.8855 5.83674 15 5.70735 15 5.54868V2.55098C15 2.39231 14.8855 2.26291 14.745 2.26291ZM4.71094 3.9651C4.71094 4.31324 4.38778 4.60131 3.99373 4.60131H3.99236V4.52891C3.59831 4.52891 3.27652 4.24238 3.27652 3.8927V2.32761L3.28061 2.26445H4.70685L4.71094 2.32761V3.9651ZM11.399 3.9651C11.399 4.31324 11.0758 4.60131 10.6818 4.60131L10.6804 4.52891C10.2863 4.52891 9.96455 4.24238 9.96455 3.8927V2.32761L9.96864 2.26445H11.3949L11.399 2.32761V3.9651ZM14.9373 6.49914H0.0640851C0.0286338 6.49914 0 6.53149 0.00136351 6.57154V18.8566C0.00136351 18.8951 0.0299973 18.9274 0.0640851 18.9274H14.9373C14.9714 18.9274 15 18.8951 15 18.8566V6.57C15 6.53149 14.9727 6.49914 14.9373 6.49914ZM14.1287 17.6181C14.1287 17.6935 14.0674 17.7629 14.0005 17.7629H1.14399C1.07717 17.7629 1.01582 17.6982 1.01582 17.6181V8.00569C1.01582 7.84702 1.13035 7.71917 1.26943 7.71917L1.20535 7.79157H14.0005C14.0714 7.79157 14.1287 7.86089 14.1287 7.93637V17.6181Z" fill="#242424"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="font-onest font-bold text-[13px] leading-[1.275] text-[#242424] uppercase text-left">
                      From
                    </div>
                    <div className="font-onest text-[13px] leading-[1.275] text-[#242424] text-left">
                      {filters.from || 'Select from date'}
                    </div>
                  </div>
                </div>
                {/* Arrow */}
                <svg 
                  width="10" 
                  height="6" 
                  viewBox="0 0 10 6" 
                  fill="none"
                  className={`transition-transform ${openDropdown === 'from' ? 'rotate-180' : ''}`}
                >
                  <path d="M0.780488 0.780487L4.94309 5.21939L9.10569 0.780488" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {openDropdown === 'from' && (
                <div className="pb-[18px] pl-[37px]">
                  {fromOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => selectOption('from', option)}
                      className="block w-full text-left py-[8px] font-onest text-[13px] text-[#242424] hover:bg-gray-100"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* To */}
            <div className="border-b border-[#E8E8E8]">
              <button 
                onClick={() => toggleDropdown('to')}
                className="w-full py-[18px] flex items-center justify-between"
              >
                <div className="flex items-center gap-[22px]">
                  {/* Calendar Icon */}
                  <div className="w-[15px] h-[18.93px]">
                    <svg width="15" height="19" viewBox="0 0 15 19" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M14.745 2.26291H11.4576L11.4617 2.20284V0.636204C11.4617 0.288063 11.1385 0 10.7445 0C10.3504 0 10.0286 0.286523 10.0286 0.636204V2.20284L10.0327 2.26291H4.77093L4.77502 2.20284V0.636204C4.77502 0.288063 4.45187 0 4.05781 0C3.66239 0 3.34061 0.286523 3.34061 0.636204V2.20284L3.3447 2.26291H0.254977C0.114535 2.26291 0 2.39077 0 2.54944V5.54714C0 5.70581 0.114535 5.8352 0.254977 5.83674H14.745C14.8855 5.83674 15 5.70735 15 5.54868V2.55098C15 2.39231 14.8855 2.26291 14.745 2.26291ZM4.71094 3.9651C4.71094 4.31324 4.38778 4.60131 3.99373 4.60131H3.99236V4.52891C3.59831 4.52891 3.27652 4.24238 3.27652 3.8927V2.32761L3.28061 2.26445H4.70685L4.71094 2.32761V3.9651ZM11.399 3.9651C11.399 4.31324 11.0758 4.60131 10.6818 4.60131L10.6804 4.52891C10.2863 4.52891 9.96455 4.24238 9.96455 3.8927V2.32761L9.96864 2.26445H11.3949L11.399 2.32761V3.9651ZM14.9373 6.49914H0.0640851C0.0286338 6.49914 0 6.53149 0.00136351 6.57154V18.8566C0.00136351 18.8951 0.0299973 18.9274 0.0640851 18.9274H14.9373C14.9714 18.9274 15 18.8951 15 18.8566V6.57C15 6.53149 14.9727 6.49914 14.9373 6.49914ZM14.1287 17.6181C14.1287 17.6935 14.0674 17.7629 14.0005 17.7629H1.14399C1.07717 17.7629 1.01582 17.6982 1.01582 17.6181V8.00569C1.01582 7.84702 1.13035 7.71917 1.26943 7.71917L1.20535 7.79157H14.0005C14.0714 7.79157 14.1287 7.86089 14.1287 7.93637V17.6181Z" fill="#242424"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="font-onest font-bold text-[13px] leading-[1.275] text-[#242424] uppercase text-left">
                      To
                    </div>
                    <div className="font-onest text-[13px] leading-[1.275] text-[#242424] text-left">
                      {filters.to || 'Select to date'}
                    </div>
                  </div>
                </div>
                {/* Arrow */}
                <svg 
                  width="10" 
                  height="6" 
                  viewBox="0 0 10 6" 
                  fill="none"
                  className={`transition-transform ${openDropdown === 'to' ? 'rotate-180' : ''}`}
                >
                  <path d="M0.780488 0.780487L4.94309 5.21939L9.10569 0.780488" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {openDropdown === 'to' && (
                <div className="pb-[18px] pl-[37px]">
                  {toOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => selectOption('to', option)}
                      className="block w-full text-left py-[8px] font-onest text-[13px] text-[#242424] hover:bg-gray-100"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Type of Holiday */}
            <div className="border-b border-[#E8E8E8]">
              <button 
                onClick={() => toggleDropdown('holidayType')}
                className="w-full py-[18px] flex items-center justify-between"
              >
                <div className="flex items-center gap-[22px]">
                  {/* Tree Icon */}
                  <div className="w-[16.64px] h-[19.39px]">
                    <svg width="17" height="20" viewBox="0 0 17 20" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M7.91262 7.66232C9.10579 11.7708 8.56344 15.7407 7.40167 19.8137H9.74662C10.6315 13.3446 9.87793 10.5357 8.99447 8.009C9.44462 8.33826 9.85609 8.73057 10.219 9.17641L11.2566 8.99097L10.6715 9.76656C10.8095 9.96005 10.9465 10.166 11.0825 10.3841L12.0488 10.2116L11.4508 11.0049C11.5549 11.1887 11.6577 11.3806 11.759 11.5789L12.6453 11.4177L12.0645 12.1884C12.1858 12.4432 12.3057 12.7077 12.427 12.9802L13.1706 12.8479L12.6582 13.5268C12.9265 14.1718 13.192 14.8704 13.4546 15.6229C15.4056 11.5161 14.1682 8.49434 9.53254 6.53361C10.059 6.34738 10.6054 6.24208 11.1567 6.2208L11.5606 5.5984L11.6049 6.22403C11.9219 6.24015 12.2373 6.28385 12.5483 6.35463L12.8851 5.82898L12.9265 6.44977C13.1943 6.52974 13.4577 6.62665 13.7158 6.74001L14.0612 6.20468L14.1126 6.93027C14.3936 7.07475 14.6676 7.23632 14.9332 7.41401L15.3286 6.80128L15.3942 7.73327C15.9585 8.15251 16.4952 8.61753 16.9999 9.12481C15.7525 3.80375 12.1943 2.5267 9.01445 5.5597C9.4469 1.75272 8.05963 0.83847 6.1985 0C6.43257 0.401498 6.64951 0.806221 6.84219 1.22062L7.34886 1.28995L6.99348 1.55923C7.14776 1.91977 7.27935 2.29209 7.3874 2.67343L7.83983 2.72825L7.47303 3.01365C7.61533 3.62283 7.6707 4.25362 7.63716 4.88247C4.76698 1.90591 2.37065 3.0072 0.16556 5.63065C0.603723 5.51455 1.04474 5.41297 1.48576 5.33718L1.68129 4.78573L1.83115 5.28236C2.17069 5.23334 2.51223 5.20432 2.85448 5.19529L3.05001 4.64383L3.21557 5.19368C3.49974 5.20077 3.78333 5.22657 4.06478 5.27107L4.27173 4.67608L4.47583 5.35331C4.7677 5.42442 5.05414 5.52213 5.33217 5.64516L5.59621 4.90021L5.91306 5.95152C6.05578 6.03698 6.18994 6.13212 6.32696 6.23531C3.00577 5.76287 1.14179 7.87678 0 10.6518C0.464709 10.1631 0.959819 9.71254 1.48148 9.30379L1.43866 9.00065L1.63419 9.19092C1.94661 8.9576 2.27502 8.75266 2.61613 8.57819L2.54905 8.09446L2.91014 8.44275C3.28865 8.27812 3.68442 8.16976 4.08762 8.12026C3.92363 8.45742 3.78047 8.80716 3.65944 9.16673L3.68228 9.18769H3.65088C2.79454 11.745 3.40254 14.0879 4.31312 16.6323C4.39019 15.6117 4.48724 14.6345 4.62854 13.7299L4.27458 13.4075L4.67279 13.3833C4.74129 12.9802 4.82022 12.5904 4.90971 12.2142L4.54148 11.8821L4.99534 11.8579C5.08526 11.5241 5.18516 11.2032 5.29649 10.8904L4.92398 10.5518L5.43493 10.5341C5.57295 10.1977 5.73422 9.87427 5.91734 9.56662L5.50058 9.19092L6.1828 9.16673C6.64295 8.51756 7.23283 8.00077 7.90406 7.6591L7.91262 7.66232Z" fill="#242424"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="font-onest font-bold text-[13px] leading-[1.275] text-[#242424] uppercase text-left">
                      Type of Holiday
                    </div>
                    <div className="font-onest text-[13px] leading-[1.275] text-[#242424] text-left">
                      {filters.holidayType || 'Select holiday type'}
                    </div>
                  </div>
                </div>
                {/* Arrow */}
                <svg 
                  width="10" 
                  height="6" 
                  viewBox="0 0 10 6" 
                  fill="none"
                  className={`transition-transform ${openDropdown === 'holidayType' ? 'rotate-180' : ''}`}
                >
                  <path d="M0.780488 0.780487L4.94309 5.21939L9.10569 0.780488" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {openDropdown === 'holidayType' && (
                <div className="pb-[18px] pl-[38px]">
                  {holidayTypeOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => selectOption('holidayType', option)}
                      className="block w-full text-left py-[8px] font-onest text-[13px] text-[#242424] hover:bg-gray-100"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Duration */}
            <div className="border-b border-[#E8E8E8]">
              <button 
                onClick={() => toggleDropdown('duration')}
                className="w-full py-[18px] flex items-center justify-between"
              >
                <div className="flex items-center gap-[22px]">
                  {/* Calendar Icon */}
                  <div className="w-[15px] h-[18.93px]">
                    <svg width="15" height="19" viewBox="0 0 15 19" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M14.745 2.26291H11.4576L11.4617 2.20284V0.636204C11.4617 0.288063 11.1385 0 10.7445 0C10.3504 0 10.0286 0.286523 10.0286 0.636204V2.20284L10.0327 2.26291H4.77093L4.77502 2.20284V0.636204C4.77502 0.288063 4.45187 0 4.05781 0C3.66239 0 3.34061 0.286523 3.34061 0.636204V2.20284L3.3447 2.26291H0.254977C0.114535 2.26291 0 2.39077 0 2.54944V5.54714C0 5.70581 0.114535 5.8352 0.254977 5.83674H14.745C14.8855 5.83674 15 5.70735 15 5.54868V2.55098C15 2.39231 14.8855 2.26291 14.745 2.26291ZM4.71094 3.9651C4.71094 4.31324 4.38778 4.60131 3.99373 4.60131H3.99236V4.52891C3.59831 4.52891 3.27652 4.24238 3.27652 3.8927V2.32761L3.28061 2.26445H4.70685L4.71094 2.32761V3.9651ZM11.399 3.9651C11.399 4.31324 11.0758 4.60131 10.6818 4.60131L10.6804 4.52891C10.2863 4.52891 9.96455 4.24238 9.96455 3.8927V2.32761L9.96864 2.26445H11.3949L11.399 2.32761V3.9651ZM14.9373 6.49914H0.0640851C0.0286338 6.49914 0 6.53149 0.00136351 6.57154V18.8566C0.00136351 18.8951 0.0299973 18.9274 0.0640851 18.9274H14.9373C14.9714 18.9274 15 18.8951 15 18.8566V6.57C15 6.53149 14.9727 6.49914 14.9373 6.49914ZM14.1287 17.6181C14.1287 17.6935 14.0674 17.7629 14.0005 17.7629H1.14399C1.07717 17.7629 1.01582 17.6982 1.01582 17.6181V8.00569C1.01582 7.84702 1.13035 7.71917 1.26943 7.71917L1.20535 7.79157H14.0005C14.0714 7.79157 14.1287 7.86089 14.1287 7.93637V17.6181Z" fill="#242424"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="font-onest font-bold text-[13px] leading-[1.275] text-[#242424] uppercase text-left">
                      Duration
                    </div>
                    <div className="font-onest text-[13px] leading-[1.275] text-[#242424] text-left">
                      {filters.duration || 'Select duration'}
                    </div>
                  </div>
                </div>
                {/* Arrow */}
                <svg 
                  width="10" 
                  height="6" 
                  viewBox="0 0 10 6" 
                  fill="none"
                  className={`transition-transform ${openDropdown === 'duration' ? 'rotate-180' : ''}`}
                >
                  <path d="M0.780488 0.780487L4.94309 5.21939L9.10569 0.780488" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {openDropdown === 'duration' && (
                <div className="pb-[18px] pl-[37px]">
                  {durationOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => selectOption('duration', option)}
                      className="block w-full text-left py-[8px] font-onest text-[13px] text-[#242424] hover:bg-gray-100"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Sort By */}
            <div className="border-b border-[#E8E8E8]">
              <button 
                onClick={() => toggleDropdown('sortBy')}
                className="w-full py-[18px] flex items-center justify-between"
              >
                <div className="flex items-center gap-[22px]">
                  <div className="w-[15px]"></div> {/* Spacer to align with other items */}
                  <div className="text-left">
                    <div className="font-onest font-bold text-[13px] leading-[1.275] text-[#242424] uppercase text-left">
                      Sort By
                    </div>
                    <div className="font-onest text-[13px] leading-[1.275] text-[#242424] text-left">
                      {filters.sortBy || 'Select sort option'}
                    </div>
                  </div>
                </div>
                {/* Arrow */}
                <svg 
                  width="10" 
                  height="6" 
                  viewBox="0 0 10 6" 
                  fill="none"
                  className={`transition-transform ${openDropdown === 'sortBy' ? 'rotate-180' : ''}`}
                >
                  <path d="M0.780488 0.780487L4.94309 5.21939L9.10569 0.780488" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {openDropdown === 'sortBy' && (
                <div className="pb-[18px] pl-[37px]">
                  {sortByOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => selectOption('sortBy', option)}
                      className="block w-full text-left py-[8px] font-onest text-[13px] text-[#242424] hover:bg-gray-100"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-[5px] pt-[24px]">
              <Button
                onClick={handleClearFilters}
                variant="outline"
                className="flex-1 h-[36px] border border-[#242424] bg-transparent text-[#242424] rounded-[4px] font-onest text-[12px] hover:bg-[#f5f5f5]"
              >
                Clear Filters
              </Button>
              <Button
                onClick={handleSearch}
                variant="primary"
                className="flex-1 h-[36px] bg-[#242424] text-white rounded-[4px] font-onest text-[12px] hover:bg-[#1a1a1a]"
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}