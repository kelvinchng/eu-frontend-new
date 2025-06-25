import { TestimonialsHero } from '@/components/common/testimonials/testimonials-hero'
import { TestimonialsGrid } from '@/components/ui/layout/testimonials-grid'

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: '1',
      customerName: 'Sarah Johnson',
      customerLocation: 'Sydney, Australia',
      customerAvatar: '/assets/testimonials/customer-sarah.jpg',
      rating: 5,
      reviewTitle: 'Absolutely Perfect Swiss Adventure',
      reviewText: 'EU Holidays planned the most incredible 10-day Swiss tour for our family. Every detail was perfectly arranged - from the scenic train rides to the cozy mountain lodges. Our guide was knowledgeable and the small group size made it feel so personal. We\'ll definitely book with them again!',
      tourName: '10-Day Best of Switzerland',
      destination: 'Switzerland',
      tourDate: '2024-07-15',
      platform: 'TripAdvisor',
      verified: true,
      helpful: 45,
      images: ['/assets/testimonials/sarah-swiss-1.jpg', '/assets/testimonials/sarah-swiss-2.jpg']
    },
    {
      id: '2',
      customerName: 'Michael Chen',
      customerLocation: 'Singapore',
      customerAvatar: '/assets/testimonials/customer-michael.jpg',
      rating: 5,
      reviewTitle: 'Exceeded All Expectations - Scandinavia Magic',
      reviewText: 'From the Northern Lights in Norway to the charming streets of Copenhagen, this tour was simply magical. The EU Holidays team went above and beyond to ensure we had authentic experiences. The Aurora Borealis viewing was the highlight of our lives!',
      tourName: '14-Day Scandinavia & Northern Lights',
      destination: 'Scandinavia',
      tourDate: '2024-02-20',
      platform: 'Google Reviews',
      verified: true,
      helpful: 32,
      images: ['/assets/testimonials/michael-nordic-1.jpg']
    },
    {
      id: '3',
      customerName: 'Emily Rodriguez',
      customerLocation: 'Manila, Philippines',
      customerAvatar: '/assets/testimonials/customer-emily.jpg',
      rating: 4,
      reviewTitle: 'Wonderful Greek Island Hopping Experience',
      reviewText: 'The Greek islands tour was beautifully organized. We loved the mix of history, culture, and relaxation. The only minor issue was some hotel rooms were smaller than expected, but the stunning views more than made up for it. Highly recommend!',
      tourName: '12-Day Greek Islands Discovery',
      destination: 'Greece',
      tourDate: '2024-06-10',
      platform: 'Facebook',
      verified: true,
      helpful: 28,
      images: ['/assets/testimonials/emily-greece-1.jpg', '/assets/testimonials/emily-greece-2.jpg', '/assets/testimonials/emily-greece-3.jpg']
    },
    {
      id: '4',
      customerName: 'David & Linda Thompson',
      customerLocation: 'London, UK',
      customerAvatar: '/assets/testimonials/customer-thompson.jpg',
      rating: 5,
      reviewTitle: 'Perfect Romantic Getaway in Tuscany',
      reviewText: 'Our 25th anniversary trip to Tuscany was absolutely perfect. EU Holidays arranged private wine tastings, romantic dinners, and the most beautiful accommodations. The attention to detail was exceptional. Thank you for making our milestone celebration unforgettable!',
      tourName: '8-Day Romantic Tuscany',
      destination: 'Italy',
      tourDate: '2024-05-18',
      platform: 'TripAdvisor',
      verified: true,
      helpful: 56,
      images: ['/assets/testimonials/thompson-tuscany-1.jpg']
    },
    {
      id: '5',
      customerName: 'James Wilson',
      customerLocation: 'Vancouver, Canada',
      customerAvatar: '/assets/testimonials/customer-james.jpg',
      rating: 5,
      reviewTitle: 'Epic Adventure Through the Alps',
      reviewText: 'As an avid hiker, I was blown away by the Alpine adventure tour. The hiking routes were challenging but rewarding, and the mountain huts were cozy and authentic. EU Holidays really knows how to cater to adventure travelers. Best trip ever!',
      tourName: '15-Day Alpine Adventure Trek',
      destination: 'Austria & Switzerland',
      tourDate: '2024-08-05',
      platform: 'Google Reviews',
      verified: true,
      helpful: 41,
      images: ['/assets/testimonials/james-alps-1.jpg', '/assets/testimonials/james-alps-2.jpg']
    },
    {
      id: '6',
      customerName: 'Priya Sharma',
      customerLocation: 'Mumbai, India',
      customerAvatar: '/assets/testimonials/customer-priya.jpg',
      rating: 4,
      reviewTitle: 'Cultural Immersion in Eastern Europe',
      reviewText: 'The Eastern Europe tour opened my eyes to so much history and culture. Prague, Budapest, and Vienna each had their unique charm. The local guides were fantastic and really brought the stories to life. Minor delays with transportation but overall excellent value.',
      tourName: '10-Day Eastern Europe Capitals',
      destination: 'Czech Republic, Hungary, Austria',
      tourDate: '2024-04-12',
      platform: 'TripAdvisor',
      verified: true,
      helpful: 33,
      images: ['/assets/testimonials/priya-eastern-1.jpg']
    },
    {
      id: '7',
      customerName: 'Robert & Margaret Kim',
      customerLocation: 'Seoul, South Korea',
      customerAvatar: '/assets/testimonials/customer-kim.jpg',
      rating: 5,
      reviewTitle: 'Luxury River Cruise Beyond Expectations',
      reviewText: 'The Rhine River cruise was pure luxury from start to finish. Beautiful cabins, gourmet dining, and fascinating shore excursions. EU Holidays\' attention to detail and customer service was impeccable. We felt pampered throughout the entire journey.',
      tourName: '7-Day Rhine River Luxury Cruise',
      destination: 'Germany & Netherlands',
      tourDate: '2024-09-08',
      platform: 'Cruise Critic',
      verified: true,
      helpful: 48,
      images: ['/assets/testimonials/kim-rhine-1.jpg', '/assets/testimonials/kim-rhine-2.jpg']
    },
    {
      id: '8',
      customerName: 'Andrea Santos',
      customerLocation: 'São Paulo, Brazil',
      customerAvatar: '/assets/testimonials/customer-andrea.jpg',
      rating: 5,
      reviewTitle: 'Magical Christmas Markets Tour',
      reviewText: 'The Christmas markets tour was like stepping into a fairytale! Each city had its own magical atmosphere, and the festive spirit was contagious. The mulled wine, local crafts, and holiday treats were amazing. EU Holidays made our Christmas dreams come true.',
      tourName: '9-Day Christmas Markets Magic',
      destination: 'Germany & Austria',
      tourDate: '2023-12-15',
      platform: 'Google Reviews',
      verified: true,
      helpful: 39,
      images: ['/assets/testimonials/andrea-christmas-1.jpg']
    }
  ]

  const testimonialStats = {
    totalReviews: 1247,
    averageRating: 4.8,
    fiveStarPercentage: 89,
    platforms: ['TripAdvisor', 'Google Reviews', 'Facebook', 'Cruise Critic']
  }

  return (
    <main className="min-h-screen bg-white">
      <TestimonialsHero
        title="What Our Travelers Say"
        subtitle="Real Reviews from Real Adventures"
        description="Read authentic reviews from travelers who have experienced the magic of Europe with EU Holidays. Their stories and memories inspire us to continue delivering exceptional travel experiences."
        testimonialStats={testimonialStats}
        backgroundImage="/assets/backgrounds/testimonials-hero-bg.jpg"
        className="py-16 lg:py-24"
      />
      
      <TestimonialsGrid
        testimonials={testimonials}
        title="Customer Reviews & Testimonials"
        subtitle="Discover why thousands of travelers choose EU Holidays for their European adventures"
        columns={2}
        showFilters={true}
        showSearch={true}
        showLoadMore={true}
        initialCount={6}
        className="py-16 lg:py-24"
      />

      {/* Call to Action Section */}
      <div className="bg-gradient-to-br from-[#F0F8FF] to-[#E6F3FF] py-16 lg:py-24">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-thunder font-medium text-[#242424] mb-6 text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px] leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[40px] xl:leading-[44px] 2xl:leading-[48px]">
            Ready to Create Your Own Story?
          </h2>
          <p className="font-onest text-[#666666] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] leading-[18px] sm:leading-[22px] md:leading-[24px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] max-w-3xl mx-auto mb-8">
            Join thousands of satisfied travelers who have discovered Europe with EU Holidays. Let us help you create memories that will last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#0066CC] text-white font-onest font-medium py-4 px-8 rounded-xl transition-all duration-300 hover:bg-[#004499] text-[16px] sm:text-[18px]">
              Start Planning Your Trip
            </button>
            <button className="bg-white text-[#0066CC] border-2 border-[#0066CC] font-onest font-medium py-4 px-8 rounded-xl transition-all duration-300 hover:bg-[#0066CC] hover:text-white text-[16px] sm:text-[18px]">
              Browse Our Tours
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export const metadata = {
  title: 'Customer Reviews & Testimonials - EU Holidays | Real Travel Stories',
  description: 'Read authentic reviews and testimonials from EU Holidays customers. Discover why thousands of travelers choose us for their European adventures.',
  keywords: 'EU Holidays reviews, customer testimonials, travel reviews, European tour reviews, TripAdvisor reviews, customer feedback'
}