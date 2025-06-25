export const featuredTours = [
  {
    id: 'ecsbts',
    title: '11D8N Switzerland Dream (APR - OCT)',
    price: 'fr $4,288/pax',
    description: 'Sunkissed Switzerland is an equally dreamy destination to explore in summer – with its incredible scenery filled in with color, spectacularly blue lakes and awesome weather to boot.',
    image: '/assets/tour_first.png',
    tags: ['Best Seller'],
    badge: 'Best Seller',
  },
  {
    id: 'ecnord',
    title: '14D12N Scandinavian Capitals',
    price: 'fr $5,888/pax',
    description: 'Discover the natural wonders and vibrant cities of Scandinavia. From the Northern Lights to magnificent fjords, experience the best of Norway, Sweden, Denmark and Finland.',
    image: '/assets/tour_second.png',
    tags: ['Early Bird'],
    badge: 'Popular',
  },
  {
    id: 'eceast',
    title: '11D9N Eastern Europe Discovery',
    price: 'fr $3,188/pax',
    description: 'Explore the hidden gems of Eastern Europe. Visit Prague, Budapest, Vienna and Krakow, discovering centuries of history and stunning architecture.',
    image: '/assets/tour_third.png',
    tags: ['Heritage Sites'],
  },
]

export const destinations = [
  {
    id: 'switzerland',
    name: 'Switzerland',
    image: '/assets/mountainfeature.png',
    tourCount: 15,
  },
  {
    id: 'italy',
    name: 'Italy',
    image: '/assets/bridge.png',
    tourCount: 23,
  },
  {
    id: 'france',
    name: 'France',
    image: '/assets/flowerfeature.png',
    tourCount: 18,
  },
  {
    id: 'norway',
    name: 'Norway',
    image: '/assets/sea.png',
    tourCount: 12,
  },
]

export const themedJourneys = [
  {
    id: 'winter',
    title: 'Winter Wonderland',
    description: 'Experience magical winter landscapes and Christmas markets',
    image: '/assets/winter.png',
    icon: '❄️',
  },
  {
    id: 'cherry-blossom',
    title: 'Cherry Blossom Season',
    description: 'Witness the beauty of spring with cherry blossom tours',
    image: '/assets/cherrypromotion.png',
    icon: '🌸',
  },
  {
    id: 'cultural',
    title: 'Cultural Heritage',
    description: 'Immerse yourself in rich history and traditions',
    image: '/assets/cultural.png',
    icon: '🏛️',
  },
  {
    id: 'cruise',
    title: 'River Cruises',
    description: 'Sail through Europe\'s most scenic waterways',
    image: '/assets/cruise.png',
    icon: '🚢',
  },
]

export const promotions = [
  {
    id: '1',
    title: 'Early Bird Special',
    description: 'Book 90 days in advance and save up to 20%',
    image: '/assets/promo1.png',
    validUntil: '2025-03-31',
  },
  {
    id: '2',
    title: '1-for-1 Deals',
    description: 'Travel with a companion at half the price',
    image: '/assets/promo2.png',
    validUntil: '2025-02-28',
  },
  {
    id: '3',
    title: 'Group Discounts',
    description: 'Save 15% when traveling with 6 or more',
    image: '/assets/promo3.png',
    validUntil: '2025-12-31',
  },
]

export const instagramPosts = [
  { id: '1', image: '/assets/instagram-1.jpg', likes: 1234, comments: 45 },
  { id: '2', image: '/assets/instagram-2.jpg', likes: 2345, comments: 67 },
  { id: '3', image: '/assets/instagram-3.jpg', likes: 3456, comments: 89 },
  { id: '4', image: '/assets/instagram-4.jpg', likes: 4567, comments: 101 },
  { id: '5', image: '/assets/instagram-5.jpg', likes: 5678, comments: 123 },
  { id: '6', image: '/assets/instagram-6.jpg', likes: 6789, comments: 145 },
  { id: '7', image: '/assets/instagram-7.jpg', likes: 7890, comments: 167 },
  { id: '8', image: '/assets/instagram-8.jpg', likes: 8901, comments: 189 },
]

// Tour Details Mock Data
export const tourDetails = {
  id: 'ecsbts',
  code: 'ECSBTS',
  title: '11D8N Switzerland Dream (Apr - Oct)',
  fullTitle: '11D8N Switzerland Dream (Apr - Oct)',
  price: 'fr $4,288/pax',
  originalPrice: 'fr $4,888/pax',
  description: 'Sunkissed Switzerland is an equally dreamy destination to explore in summer – with its incredible scenery filled in with color, spectacularly blue lakes and awesome weather to boot.',
  longDescription: 'Embark on an unforgettable journey through Switzerland\'s most breathtaking landscapes. From the majestic Alps to pristine lakes, this comprehensive tour showcases the very best of Swiss culture, cuisine, and natural beauty.',
  duration: '11 Days 8 Nights',
  departureDates: ['15 Apr 2025', '29 Apr 2025', '13 May 2025', '27 May 2025'],
  tourType: 'Group Holiday',
  minPax: 15,
  maxPax: 25,
  tags: ['Best Seller', 'Early Bird', 'Limited Seats'],
  gallery: [
    '/assets/tour-details/bern-fountain-clock-tower.jpg',
    '/assets/tour-details/gornergrat-railway.jpg',
    '/assets/tour-details/interlaken-lake-thun.jpg',
    '/assets/tour-detail-4.jpg',
    '/assets/tour-detail-5.jpg',
    '/assets/tour-detail-6.jpg',
  ],
  highlights: [
    'Visit the iconic Matterhorn in Zermatt',
    'Scenic train ride on the Glacier Express',
    'Explore the charming city of Lucerne',
    'Lake cruise on Lake Geneva',
    'Traditional Swiss fondue dinner',
    'Visit to Jungfraujoch - Top of Europe',
    'Rhine Falls sightseeing',
    'Cheese and chocolate factory tours',
  ],
  inclusions: [
    'Return airfare with premium airline',
    '8 nights accommodation in 4-star hotels',
    'Daily breakfast and 6 dinners',
    'Professional English-speaking guide',
    'All sightseeing as per itinerary',
    'Private coach transportation',
    'Travel insurance coverage',
  ],
  exclusions: [
    'Visa fees (if applicable)',
    'Travel insurance (optional upgrade)',
    'Personal expenses and shopping',
    'Tips for guide and driver',
    'Optional excursions',
    'Single supplement charges',
  ],
  itinerary: [
    {
      day: 1,
      title: 'Depart Singapore → Zurich',
      location: 'Singapore / Zurich',
      description: 'Assemble at the airport and depart for Zürich, Switzerland\'s financial centre.',
      activities: ['Departure from Singapore', 'Flight to Zurich'],
      meals: [],
      accommodation: 'In-flight'
    },
    {
      day: 2,
      title: 'Arrival Zurich → Basel → Lucerne',
      location: 'Zurich / Basel / Lucerne',
      description: 'Upon arrival, proceed to Basel for city orientation before heading to Lucerne.',
      activities: ['Zurich airport arrival', 'Basel city tour', 'Transfer to Lucerne'],
      meals: ['Dinner'],
      accommodation: '4-star hotel in Lucerne'
    },
    {
      day: 3,
      title: 'Lucerne → Mount Pilatus → Lucerne',
      location: 'Lucerne / Mount Pilatus',
      description: 'Experience the world\'s steepest cogwheel railway to Mount Pilatus and enjoy spectacular alpine views.',
      activities: ['Mount Pilatus excursion', 'Cogwheel railway ride', 'Alpine views', 'Lucerne city walk'],
      meals: ['Breakfast', 'Dinner'],
      accommodation: '4-star hotel in Lucerne'
    },
    {
      day: 4,
      title: 'Lucerne → Interlaken → Jungfraujoch',
      location: 'Lucerne / Interlaken / Jungfraujoch',
      description: 'Journey to Jungfraujoch, the "Top of Europe" via scenic mountain railways.',
      activities: ['Travel to Interlaken', 'Jungfraujoch excursion', 'Ice Palace visit', 'Sphinx Observatory'],
      meals: ['Breakfast', 'Dinner'],
      accommodation: '4-star hotel in Interlaken'
    },
    {
      day: 5,
      title: 'Interlaken → Zermatt',
      location: 'Interlaken / Zermatt',
      description: 'Travel to the car-free alpine resort of Zermatt, home to the iconic Matterhorn.',
      activities: ['Scenic train to Zermatt', 'Matterhorn viewing', 'Village exploration'],
      meals: ['Breakfast', 'Dinner'],
      accommodation: '4-star hotel in Zermatt'
    },
    {
      day: 6,
      title: 'Zermatt → Gornergrat → Montreux',
      location: 'Zermatt / Gornergrat / Montreux',
      description: 'Take the cogwheel train to Gornergrat for panoramic mountain views before traveling to Montreux.',
      activities: ['Gornergrat railway', 'Mountain panorama', 'Travel to Montreux', 'Lake Geneva views'],
      meals: ['Breakfast'],
      accommodation: '4-star hotel in Montreux'
    },
    {
      day: 7,
      title: 'Montreux → Geneva → Gruyères',
      location: 'Montreux / Geneva / Gruyères',
      description: 'Explore Geneva and visit the medieval town of Gruyères famous for its cheese.',
      activities: ['Geneva city tour', 'Jet d\'Eau fountain', 'Gruyères cheese factory', 'Medieval town walk'],
      meals: ['Breakfast', 'Traditional Swiss dinner'],
      accommodation: '4-star hotel in Gruyères region'
    },
    {
      day: 8,
      title: 'Gruyères → Bern → Rhine Falls → Zurich',
      location: 'Gruyères / Bern / Rhine Falls / Zurich',
      description: 'Visit the capital city of Bern and witness the mighty Rhine Falls before reaching Zurich.',
      activities: ['Bern city tour', 'UNESCO Old Town', 'Rhine Falls viewing', 'Boat ride'],
      meals: ['Breakfast', 'Farewell dinner'],
      accommodation: '4-star hotel in Zurich'
    },
    {
      day: 9,
      title: 'Zurich City Tour → Departure',
      location: 'Zurich',
      description: 'Final day exploring Zurich before departure to Singapore.',
      activities: ['Zurich city tour', 'Shopping time', 'Airport transfer', 'Departure'],
      meals: ['Breakfast'],
      accommodation: 'In-flight'
    },
    {
      day: 10,
      title: 'In Transit',
      location: 'In-flight',
      description: 'Cross international dateline.',
      activities: ['In-flight'],
      meals: ['In-flight meals'],
      accommodation: 'In-flight'
    },
    {
      day: 11,
      title: 'Arrival Singapore',
      location: 'Singapore',
      description: 'Arrive Singapore with wonderful memories.',
      activities: ['Arrival in Singapore'],
      meals: [],
      accommodation: 'Home sweet home'
    }
  ],
  testimonials: [
    {
      id: '1',
      name: 'Sarah Chen',
      location: 'Singapore',
      rating: 5,
      date: 'March 2024',
      comment: 'Absolutely breathtaking tour! The organization was flawless and our guide was incredibly knowledgeable. The Matterhorn views were unforgettable.',
      avatar: '/assets/testimonial-1.jpg'
    },
    {
      id: '2',
      name: 'Michael Wong',
      location: 'Malaysia',
      rating: 5,
      date: 'May 2024',
      comment: 'Best trip of my life! Every detail was perfectly planned. The scenic train rides and mountain views exceeded all expectations.',
      avatar: '/assets/testimonial-2.jpg'
    },
    {
      id: '3',
      name: 'Lisa Tan',
      location: 'Singapore',
      rating: 4,
      date: 'June 2024',
      comment: 'Wonderful experience with professional guides. The itinerary was well-paced and covered all the must-see attractions.',
      avatar: '/assets/testimonial-3.jpg'
    }
  ],
  tourPhotos: [
    {
      id: '1',
      title: 'Matterhorn Peak',
      image: '/assets/tour-photo-1.jpg',
      description: 'Iconic Matterhorn mountain peak from Zermatt'
    },
    {
      id: '2',
      title: 'Jungfraujoch',
      image: '/assets/tour-photo-2.jpg',
      description: 'Top of Europe with stunning glacier views'
    },
    {
      id: '3',
      title: 'Lake Geneva',
      image: '/assets/tour-photo-3.jpg',
      description: 'Beautiful Lake Geneva from Montreux'
    },
    {
      id: '4',
      title: 'Rhine Falls',
      image: '/assets/tour-photo-4.jpg',
      description: 'Mighty Rhine Falls, Europe\'s most powerful waterfall'
    },
    {
      id: '5',
      title: 'Lucerne',
      image: '/assets/tour-photo-5.jpg',
      description: 'Charming city of Lucerne with Chapel Bridge'
    },
    {
      id: '6',
      title: 'Gruyères',
      image: '/assets/tour-photo-6.jpg',
      description: 'Medieval town of Gruyères with castle'
    }
  ],
  faq: [
    {
      id: '1',
      question: 'What is the best time to visit Switzerland?',
      answer: 'Switzerland is beautiful year-round, but April to October offers the best weather for sightseeing and outdoor activities. This tour runs during the optimal summer season.'
    },
    {
      id: '2',
      question: 'Is travel insurance included?',
      answer: 'Basic travel insurance is included in the tour price. However, we recommend considering comprehensive travel insurance for additional coverage.'
    },
    {
      id: '3',
      question: 'What should I pack for this tour?',
      answer: 'Pack comfortable walking shoes, layered clothing for varying temperatures, sunglasses, sunscreen, and a light rain jacket. Detailed packing list will be provided upon booking.'
    },
    {
      id: '4',
      question: 'Are meals included in the tour?',
      answer: 'Daily breakfast and 6 dinners are included. Lunches are mostly on your own, allowing flexibility to try local cuisines and explore different dining options.'
    },
    {
      id: '5',
      question: 'What is the group size?',
      answer: 'Our groups typically range from 15-25 participants, ensuring personalized attention while maintaining a friendly group atmosphere.'
    }
  ]
}

// Related tours for the tour details page
export const relatedTours = [
  {
    id: 'ecfrit',
    title: '10D8N France & Italy Highlights',
    price: 'fr $3,888/pax',
    originalPrice: 'fr $4,288/pax',
    image: '/assets/tours/savor-southern-france.jpg',
    duration: '10D8N',
    departure: 'Apr - Oct',
    tags: ['Best Seller'],
    description: 'Experience the best of France and Italy. From Paris to Rome, savor world-class cuisine, art, and stunning Mediterranean coastlines.'
  },
  {
    id: 'ecgrat',
    title: '12D10N Germany & Austria',
    price: 'fr $4,188/pax',
    image: '/assets/tours/netherlands-germany-france.jpg',
    duration: '12D10N',
    departure: 'May - Sep',
    tags: ['Limited Seats'],
    description: 'Journey through the heart of Europe visiting Munich, Vienna, and Salzburg. Experience castles, classical music, and Alpine beauty.'
  },
  {
    id: 'ecnord',
    title: '14D12N Scandinavian Capitals',
    price: 'fr $5,888/pax',
    image: '/assets/tours/europe-fantasy.jpg',
    duration: '14D12N',
    departure: 'Jun - Aug',
    tags: ['Early Bird'],
    description: 'Explore the Nordic capitals of Copenhagen, Stockholm, Oslo, and Helsinki. Experience midnight sun, Viking heritage, and Scandinavian design.'
  }
]