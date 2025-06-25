import { TravelClubShowcase } from '@/components/common/travel-club/travel-club-showcase'

export default function TravelClubPage() {
  const membershipTiers = [
    {
      name: 'Explorer',
      description: 'Perfect for new travelers starting their European journey',
      price: 'Free',
      color: '#E8F4F8',
      benefits: [
        'Welcome travel guide',
        'Basic trip planning assistance',
        'Monthly newsletter',
        'Access to group tours',
        'Travel tips and advice'
      ],
      minSpend: 0,
      pointsRate: 1
    },
    {
      name: 'Adventurer',
      description: 'For regular travelers who love European adventures',
      price: '$99/year',
      color: '#D4E8FC',
      benefits: [
        'All Explorer benefits',
        'Priority booking',
        '5% discount on all tours',
        'Quarterly exclusive offers',
        'Travel insurance discounts',
        'Dedicated customer service'
      ],
      minSpend: 2000,
      pointsRate: 1.5,
      popular: true
    },
    {
      name: 'Connoisseur',
      description: 'Premium membership for luxury travel enthusiasts',
      price: '$299/year',
      color: '#C8E0FF',
      benefits: [
        'All Adventurer benefits',
        '10% discount on all tours',
        'Complimentary room upgrades',
        'Private tour options',
        'VIP airport lounge access',
        'Personal travel consultant',
        'Exclusive events invitation'
      ],
      minSpend: 5000,
      pointsRate: 2
    },
    {
      name: 'Ambassador',
      description: 'Elite status for our most valued travelers',
      price: 'Invitation Only',
      color: '#FFE5B8',
      benefits: [
        'All Connoisseur benefits',
        '15% discount on all tours',
        'First-class upgrades when available',
        'Complimentary experiences',
        'Private jet access programs',
        'Concierge services',
        'Customized itineraries',
        'Annual appreciation gifts'
      ],
      minSpend: 15000,
      pointsRate: 3,
      exclusive: true
    }
  ]

  const clubStats = {
    totalMembers: 12500,
    pointsRedeemed: 2500000,
    averageSavings: 750
  }

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Sydney, Australia',
      tier: 'Connoisseur',
      quote: 'The Travel Club has transformed how I experience Europe. The VIP perks and personal consultant make every trip extraordinary.',
      image: '/assets/testimonials/sarah-travel-club.jpg'
    },
    {
      name: 'Michael Chen',
      location: 'Singapore',
      tier: 'Adventurer',
      quote: 'Being an Adventurer member has saved me thousands on European holidays. The priority booking is invaluable during peak season.',
      image: '/assets/testimonials/michael-travel-club.jpg'
    },
    {
      name: 'Emma Rodriguez',
      location: 'London, UK',
      tier: 'Ambassador',
      quote: 'Ambassador status is incredible. The customized itineraries and exclusive experiences are beyond anything I imagined.',
      image: '/assets/testimonials/emma-travel-club.jpg'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#F0F8FF] to-[#E6F3FF] py-16 lg:py-24">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-thunder font-medium text-[#242424] mb-6 text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] 2xl:text-[72px] leading-[36px] sm:leading-[44px] md:leading-[52px] lg:leading-[60px] xl:leading-[68px] 2xl:leading-[76px]">
            EU Travel Club
          </h1>
          <p className="font-onest text-[#666666] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] leading-[18px] sm:leading-[22px] md:leading-[24px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] max-w-4xl mx-auto mb-8">
            Join our exclusive Travel Club and unlock premium benefits, personalized experiences, and significant savings on your European adventures. From priority booking to VIP treatment, membership has its privileges.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 text-[#0066CC] font-onest font-medium">
              <span className="text-[24px] font-bold">{clubStats.totalMembers.toLocaleString()}+</span> members worldwide
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 text-[#0066CC] font-onest font-medium">
              <span className="text-[24px] font-bold">{(clubStats.pointsRedeemed / 1000000).toFixed(1)}M</span> points redeemed
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 text-[#0066CC] font-onest font-medium">
              <span className="text-[24px] font-bold">£{clubStats.averageSavings}</span> average annual savings
            </div>
          </div>
        </div>
      </div>

      <TravelClubShowcase
        title="Choose Your Membership Level"
        subtitle="Select the membership tier that best fits your travel style and unlock exclusive benefits"
        clubStats={clubStats}
        className="py-16 lg:py-24"
      />

      {/* How It Works Section */}
      <div className="bg-[#F8F9FA] py-16 lg:py-24">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-thunder font-medium text-[#242424] mb-6 text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px] leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[40px] xl:leading-[44px] 2xl:leading-[48px]">
              How the Travel Club Works
            </h2>
            <p className="font-onest text-[#666666] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] leading-[18px] sm:leading-[22px] md:leading-[24px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] max-w-3xl mx-auto">
              Simple steps to join and start enjoying exclusive travel benefits immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#0066CC] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="font-thunder font-medium text-[#242424] text-[18px] sm:text-[20px] mb-4">Choose Your Tier</h3>
              <p className="font-onest text-[#666666] text-[14px] sm:text-[16px]">Select the membership level that matches your travel frequency and style.</p>
            </div>

            <div className="text-center">
              <div className="bg-[#0066CC] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="font-thunder font-medium text-[#242424] text-[18px] sm:text-[20px] mb-4">Create Account</h3>
              <p className="font-onest text-[#666666] text-[14px] sm:text-[16px]">Set up your member profile and preferences to personalize your experience.</p>
            </div>

            <div className="text-center">
              <div className="bg-[#0066CC] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="font-thunder font-medium text-[#242424] text-[18px] sm:text-[20px] mb-4">Book & Save</h3>
              <p className="font-onest text-[#666666] text-[14px] sm:text-[16px]">Start booking tours with immediate discounts and priority access.</p>
            </div>

            <div className="text-center">
              <div className="bg-[#0066CC] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                4
              </div>
              <h3 className="font-thunder font-medium text-[#242424] text-[18px] sm:text-[20px] mb-4">Earn Rewards</h3>
              <p className="font-onest text-[#666666] text-[14px] sm:text-[16px]">Accumulate points and unlock higher tiers with even better benefits.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Exclusive Experiences Section */}
      <div className="py-16 lg:py-24">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-thunder font-medium text-[#242424] mb-6 text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px] leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[40px] xl:leading-[44px] 2xl:leading-[48px]">
              Exclusive Member Experiences
            </h2>
            <p className="font-onest text-[#666666] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] leading-[18px] sm:leading-[22px] md:leading-[24px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] max-w-3xl mx-auto">
              Access unique experiences available only to Travel Club members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600"></div>
              <div className="p-6">
                <h3 className="font-thunder font-medium text-[#242424] text-[18px] mb-3">Private Museum Tours</h3>
                <p className="font-onest text-[#666666] text-[14px] mb-4">Exclusive after-hours access to Europe's most prestigious museums with expert curators.</p>
                <span className="inline-block bg-[#FFE5B8] text-[#B8860B] font-onest font-medium text-[12px] px-3 py-1 rounded-full">Ambassador Only</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600"></div>
              <div className="p-6">
                <h3 className="font-thunder font-medium text-[#242424] text-[18px] mb-3">Chef's Table Experiences</h3>
                <p className="font-onest text-[#666666] text-[14px] mb-4">Dine with Michelin-starred chefs and learn culinary secrets from masters.</p>
                <span className="inline-block bg-[#C8E0FF] text-[#0066CC] font-onest font-medium text-[12px] px-3 py-1 rounded-full">Connoisseur+</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600"></div>
              <div className="p-6">
                <h3 className="font-thunder font-medium text-[#242424] text-[18px] mb-3">Wine Estate Tastings</h3>
                <p className="font-onest text-[#666666] text-[14px] mb-4">Private tastings at family-owned vineyards with exclusive wine collections.</p>
                <span className="inline-block bg-[#D4E8FC] text-[#0066CC] font-onest font-medium text-[12px] px-3 py-1 rounded-full">Adventurer+</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Join CTA Section */}
      <div className="bg-gradient-to-br from-[#0066CC] to-[#004499] py-16 lg:py-24">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-thunder font-medium text-white mb-6 text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px] leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[40px] xl:leading-[44px] 2xl:leading-[48px]">
            Ready to Join the EU Travel Club?
          </h2>
          <p className="font-onest text-white/90 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] leading-[18px] sm:leading-[22px] md:leading-[24px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] max-w-3xl mx-auto mb-8">
            Start enjoying exclusive benefits, personalized service, and significant savings on your European adventures today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#0066CC] font-onest font-medium py-4 px-8 rounded-xl transition-all duration-300 hover:bg-gray-100 text-[16px] sm:text-[18px]">
              Join Explorer (Free)
            </button>
            <button className="bg-transparent text-white border-2 border-white font-onest font-medium py-4 px-8 rounded-xl transition-all duration-300 hover:bg-white hover:text-[#0066CC] text-[16px] sm:text-[18px]">
              Compare All Tiers
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export const metadata = {
  title: 'EU Travel Club - Exclusive European Travel Benefits & Rewards',
  description: 'Join EU Travel Club for exclusive European travel benefits, priority booking, significant discounts, and VIP experiences. Choose from Explorer, Adventurer, Connoisseur, or Ambassador tiers.',
  keywords: 'EU Travel Club, travel rewards, European travel benefits, travel membership, VIP travel, travel discounts, loyalty program'
}