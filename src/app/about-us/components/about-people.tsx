import Image from 'next/image'
import { cn } from '@/lib/utils'

const peopleSections = [
  {
    title: 'Our Team',
    text: `We make an effort to organise annual company retreats to different destinations out of Singapore, a way for the management to show appreciation towards our employees for their hard work. We arrange various activities for employees across departments to come together and have fun, relax and relieve stress, and at the same time, boosting employee morale and engagement with each other.`,
  },
  {
    title: 'Our Gatherings',
    text: `We work hard, and we play hard! Our company has always emphasised the importance of work-life balance, and we make it a point to arrange for frequent get-togethers, particularly after a successful event or project. This creates the perfect setting for team-bonding opportunities and instills a sense of pride among employees for their good work.`,
  },
  {
    title: 'Our Social Contributions',
    text: `We firmly believe in fostering positive contributions to the sustainable development of the society and the community as part of our corporate culture. We actively encourage and support voluntary social contribution activities conducted by each of our employees, in conjunction with appropriate donations to charities and organisations to benefit the local community.`,
  },
]

const peopleImages = [
  { src: '/assets/people1.jpg', alt: 'Our Team' },
  { src: '/assets/people2.jpg', alt: 'Our Gatherings' },
  { src: '/assets/people3.jpg', alt: 'Our Social Contributions' },
]

export default function AboutPeople() {
  return (
    <section className={cn(
      'w-full flex flex-col gap-y-8',
      'lg:w-[77.2vw] lg:mx-auto lg:mt-24',
      'px-4 mt-8 lg:px-0'
    )}>
      <h2 className={cn(
        'font-[Thunder] text-[#242424] mb-2',
        'text-[30px] lg:text-[50px] font-medium'
      )}>Our People</h2>
      <div className={cn(
        'flex flex-col gap-y-4',
        'lg:flex-row lg:gap-x-8 lg:gap-y-0'
      )}>
        {peopleSections.map((section) => (
          <div key={section.title} className={cn(
            'flex flex-col gap-y-1',
            'lg:flex-1 lg:gap-y-2'
          )}>
            <div className={cn(
              'font-[Thunder] text-[#242424] mb-1',
              'text-[22px] lg:text-[33px] font-medium'
            )}>{section.title}</div>
            <div className={cn(
              'font-[Onest] text-[#242424] leading-[1.27em]',
              'text-[13px] lg:text-[18px]'
            )}>{section.text}</div>
          </div>
        ))}
      </div>
      <div className={cn(
        'flex flex-row flex-wrap gap-x-2 gap-y-2 mt-4',
        'lg:flex-nowrap lg:gap-x-8 lg:mt-8'
      )}>
        {peopleImages.map((img) => (
          <div key={img.src} className={cn(
            'relative',
            'w-[158.67px] h-[147.16px] lg:w-[331px] lg:h-[307px] rounded-[20px] overflow-hidden'
          )}>
            {/*
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover w-full h-full rounded-[20px] shadow-[0_0_0_1px_rgba(14,63,126,0.06),0_1px_2px_0_rgba(42,51,70,0.04),0_5px_10px_-2px_rgba(42,51,70,0.03),0_24px_24px_0_rgba(42,51,70,0.03)]"
            />
            */}
            {/* TODO: Add people images to /public/assets/people1.jpg etc. */}
          </div>
        ))}
      </div>
    </section>
  )
} 