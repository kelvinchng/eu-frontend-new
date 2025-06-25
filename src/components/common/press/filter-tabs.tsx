import React from 'react'

interface FilterTabsProps {
  selectedYear: string
  onYearChange: (year: string) => void
}

export function FilterTabs({ selectedYear, onYearChange }: FilterTabsProps) {
  const years = ['All', '2025', '2024', '2023', '2022']

  return (
    <div className="flex items-center gap-[10px] md:gap-[27px]">
      {years.map((year) => (
        <button
          key={year}
          onClick={() => onYearChange(year)}
          className={`${year === 'All' ? 'w-[56px] h-[36px] md:h-[56px]' : 'w-[56px] h-[32px] md:h-[56px]'} md:w-[98px] rounded-[8px] border font-onest text-[13px] md:text-[18px] leading-[17px] md:leading-[23px] transition-colors ${
            selectedYear === year
              ? 'bg-[#242424] border-[#242424] text-white'
              : 'bg-white border-[#242424] text-[#242424] hover:bg-gray-50'
          }`}
        >
          {year}
        </button>
      ))}
    </div>
  )
}