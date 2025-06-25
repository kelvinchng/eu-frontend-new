import { cn } from '@/lib/utils'

const milestones = [
  {
    date: '2010 - 2015',
    events: [
      'Founded by passionate travel professionals to redefine travel experiences',
      'Won Best Travel Awards (ESCAPE! Magazine, 2012)',
      'Received Asia Excellence Award, Singapore Excellence Award (2013)',
      'Established EU MICE, EU Asia (2013) and EU Vacations Malaysia (2014)',
      
      
      
      "Awarded Singapore Quality Brands and Weekender Travellers' Choice Award for #1 Europe/USA tours (2014)",
      'Honored with Singapore Trusted Quality Brand (2015)',
    ],
  },
  {
    date: '2016 - 2019',
    events: [
      'Completed Customer-Centric Initiative; certified Singapore Service Class (2016)',
      'Won Singapore Prestige Brand Award – Service Excellence (2017)',
      'Moved to 10,000 sq ft flagship at Suntec Convention Centre (2019)',
      'Launched Singapore Ski & Snowboard Academy (2019)',
    ],
  },
  {
    date: '2024 - Present',
    events: [
      'Won Singapore Prestige Brand Award – Established Brands & Transformation (2023)',
      'Opened retail storefront with service centers at Suntec City Mall (2023)',
      'First travel agency in NDP history (2024–2025)',
      'Named Best Outbound Travel Agency (Asia Pacific) – Travel Weekly Asia (2024)',
      'TripZilla Excellence Awards: Best for Europe (9th), Japan (3rd), Australia (2024)',
      'Received Club Med Top Achiever Platinum Award (2024)',
      'Entered F&B as Killiney Kopitiam franchisee – two outlets (2025)',
    ],
  },
]

export default function AboutMilestones() {
  return (
    <section className={cn(
      'w-full flex flex-col gap-y-8',
      'lg:w-[77.2vw] lg:mx-auto lg:mt-24',
      'px-4 mt-8 lg:px-0'
    )}>
      <div className={cn(
        'flex flex-col gap-y-8',
        'lg:gap-y-12'
      )}>
        {milestones.map((period) => (
          <div key={period.date} className={cn(
            'flex flex-row gap-x-4 items-start',
            'lg:gap-x-8'
          )}>
            <div className={cn(
              'font-[Thunder] font-semibold text-black',
              'min-w-[78px] text-[22px] lg:min-w-[133px] lg:text-[29px]'
            )}>{period.date}</div>
            <div className={cn(
              'font-[Onest] text-black leading-[1.27em]',
              'text-[13px] lg:text-[18px]'
            )}>
              {period.events.map((event, i) => (
                <div key={i} className="mb-2 last:mb-0">• {event}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 