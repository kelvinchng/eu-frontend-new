import { cn } from '@/lib/utils'

const mvv = [
  {
    title: 'Mission',
    text: 'Delighting every travel experience',
  },
  {
    title: 'Vision',
    text: 
      
      
      "Be Travellers' FIRST Choice",
  },
  {
    title: 'Values',
    text: `Deliver what we promise\nServe customers passionately\nDo what we do, best\nMake work fun\nCare for employees\nStay as one big family as we grow\nBe a good business partner\nBe socially responsible`,
  },
]

export default function AboutMVV() {
  return (
    <section className={cn(
      'w-full flex flex-col gap-y-8',
      'lg:w-[77.2vw] lg:mx-auto lg:mt-24',
      'px-4 mt-8 lg:px-0'
    )}>
      <div className={cn(
        'font-[Thunder] text-[#242424] mb-2',
        'text-[30px] lg:text-[50px] font-medium'
      )}>Mission, Vision & Values</div>
      <div className={cn(
        'flex flex-col gap-y-4',
        'lg:flex-row lg:gap-x-8 lg:gap-y-0'
      )}>
        {mvv.map((item) => (
          <div key={item.title} className={cn(
            'w-full bg-[#EEEEEE] rounded-[20px] shadow-[0_1px_4px_0_rgba(0,0,0,0.16)] flex flex-col gap-y-2 p-4',
            'lg:w-[727px] lg:p-12 lg:gap-y-4'
          )}>
            <div className={cn(
              'font-[Thunder] text-[#242424] mb-1',
              'text-[22px] lg:text-[33px] font-medium'
            )}>{item.title}</div>
            <div className={cn(
              'font-[Onest] text-[#242424] leading-[1.27em] whitespace-pre-line',
              'text-[13px] lg:text-[18px]'
            )}>{item.text}</div>
          </div>
        ))}
      </div>
    </section>
  )
} 