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
  highlights: {
    exclusives: [
      'Top Mountain Excursion: Gorgergrat, Glacier 3000',
      'Panoramic Train: In the French-Swiss Alps',
      'Experience Cruise on the largest lake in the Bernese Oberland'
    ],
    destinations: {
      'ZÜRICH': [
        'Old Town',
        'Münsterbrücke',
        'Lindenhof',
        'Fraumünster'
      ],
      'BERN': [
        'Old Town',
        'Bear Pit',
        'Zytglogge Clock Tower',
        'House of Parliament'
      ],
      'MONTREUX': [
        'Chillon Castle'
      ],
      'LES DIABLERETS': [
        'Glacier 3000',
        'Peak Walk by Tissot',
        'Ice Express chairlift',
        'Fun Park',
        'Alpine Coaster*'
      ],
      'MARTIGNY': [
        'Thermal Baths',
        'Mont-Blanc Express Train',
        'Chamonix'
      ],
      'ZERMATT': [
        'Gornergrat Bahn',
        'View of Matterhorn',
        'Zermatt Village'
      ],
      'BERNESE OBERLAND': [
        'Spiez',
        'Lake Thun Boat Ride',
        'Interlaken'
      ],
      'LUCERNE': [
        'Old Chapel Bridge',
        'Lion Monument',
        'Old Town',
        'Bucherer'
      ]
    },
    specialties: {
      delicacies: [
        'Raclette Tasting',
        'Swiss Fondue & Wine'
      ],
      mealPlan: [
        '8 Breakfasts',
        '4 Dinners'
      ]
    },
    hotels: {
      rating: '4 to 5 ★ Hotels',
      locations: [
        { city: 'Bern:', hotel: 'Holiday Inn' },
        { city: 'Martigny:', hotel: 'Les Bains de Saillon' },
        { city: 'Saas Fee 5★:', hotel: 'Walliserhof Grand-Hotel & Spa' },
        { city: 'Interken:', hotel: 'Metropole' },
        { city: 'Zürick:', hotel: 'IntercityHotel' }
      ],
      note: 'Hotels are subject to final confirmation. Due to limited availability, relocation to another city or provision of a 4-star hotel may occur without prior notice.'
    }
  },
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
      name: 'Helen Y',
      location: 'Singapore',
      rating: 5,
      date: 'March 2024',
      comment: 'Really grateful to Ms Brenda Liu for her kind assistance throughout the tour. Will definitely recommend EU Holidays to family and friends.',
      avatar: '/assets/testimonials/helen-y.jpg'
    },
    {
      id: '2',
      name: 'Jean',
      location: 'Malaysia',
      rating: 5,
      date: 'May 2024',
      comment: 'Tour manager Sarah was excellent. Very patient and knowledgeable. The scenic train rides and mountain views exceeded all expectations.',
      avatar: '/assets/testimonials/jean.jpg'
    },
    {
      id: '3',
      name: 'Shirley Lim',
      location: 'Singapore',
      rating: 5,
      date: 'June 2024',
      comment: 'We had an enjoyable and memorable journey. Thank you to Mr Chester Wong for making it happen!',
      avatar: '/assets/testimonials/shirley-lim.jpg'
    },
    {
      id: '4',
      name: 'Lee Jane',
      location: 'Singapore',
      rating: 5,
      date: 'April 2024',
      comment: 'An amazing experience exploring Switzerland. Every detail was perfectly planned and executed. Would book with EU Holidays again!',
      avatar: '/assets/testimonials/lee-jane.jpg'
    },
    {
      id: '5',
      name: 'Rachel Chua',
      location: 'Singapore',
      rating: 5,
      date: 'March 2024',
      comment: 'The Switzerland tour was absolutely fantastic! Beautiful scenery, great hotels, and wonderful tour arrangements.',
      avatar: '/assets/testimonials/rachel-chua.jpg'
    },
    {
      id: '6',
      name: 'Irene Foo',
      location: 'Malaysia',
      rating: 5,
      date: 'May 2024',
      comment: 'Excellent tour guide who went above and beyond. The Swiss Alps were breathtaking and the whole trip was unforgettable.',
      avatar: '/assets/testimonials/irene-foo.jpg'
    },
    {
      id: '7',
      name: 'Mee Ling Yip',
      location: 'Singapore',
      rating: 5,
      date: 'June 2024',
      comment: 'Very well organized tour with great attention to detail. Our tour manager was helpful and made sure everyone had a great time.',
      avatar: '/assets/testimonials/mee-ling-yip.jpg'
    },
    {
      id: '8',
      name: 'Sherlyn Tan',
      location: 'Singapore',
      rating: 5,
      date: 'April 2024',
      comment: 'Switzerland exceeded all expectations! The mountain excursions were spectacular and the hotels were excellent.',
      avatar: '/assets/testimonials/sherlyn-tan.jpg'
    },
    {
      id: '9',
      name: 'David Lee',
      location: 'Singapore',
      rating: 5,
      date: 'May 2024',
      comment: 'Professional tour management and excellent itinerary. The Jungfraujoch experience was the highlight of our trip!',
      avatar: '/assets/testimonials/avatar-placeholder.jpg'
    },
    {
      id: '10',
      name: 'Michelle Ng',
      location: 'Malaysia',
      rating: 5,
      date: 'June 2024',
      comment: 'Wonderful Swiss adventure! Great mix of city tours and mountain excursions. Highly recommend EU Holidays.',
      avatar: '/assets/testimonials/avatar-placeholder.jpg'
    },
    {
      id: '11',
      name: 'Thomas Lim',
      location: 'Singapore',
      rating: 5,
      date: 'April 2024',
      comment: 'Everything was perfectly arranged from start to finish. The scenic train rides were absolutely magical!',
      avatar: '/assets/testimonials/avatar-placeholder.jpg'
    },
    {
      id: '12',
      name: 'Grace Wong',
      location: 'Singapore',
      rating: 5,
      date: 'March 2024',
      comment: 'Outstanding tour experience! The Swiss Alps were breathtaking and our tour guide was exceptional.',
      avatar: '/assets/testimonials/avatar-placeholder.jpg'
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
      question: "What's included in the tour package price?",
      answer: 'The package includes accommodation, daily breakfasts, selected dinners, guided tours, entrance fees for listed attractions, and airport transfers. Flights and travel insurance are also typically bundled unless otherwise stated.'
    },
    {
      id: '2',
      question: 'What type of accommodations can I expect?',
      answer: 'We provide 4 to 5-star hotel accommodations throughout the tour. Hotels are centrally located in each city for convenient access to attractions and amenities. All rooms feature modern facilities and comfortable bedding to ensure a restful stay.'
    },
    {
      id: '3',
      question: 'Do I need a visa to join this tour?',
      answer: 'Visa requirements depend on your nationality and the countries included in the tour. Singapore passport holders enjoy visa-free access to most European destinations. We will provide detailed visa information upon booking and assist with necessary documentation.'
    },
    {
      id: '4',
      question: 'How physically demanding is the tour?',
      answer: 'This tour involves moderate physical activity including walking tours of 2-3 hours and some uphill terrain. Participants should be able to walk comfortably and climb stairs. Mountain excursions are optional and suitable for most fitness levels.'
    },
    {
      id: '5',
      question: 'Can I extend my stay or make customisations?',
      answer: 'Yes, we offer pre and post-tour extensions at additional cost. Customizations such as room upgrades, special dietary requirements, or additional activities can be arranged. Please inform us at the time of booking to ensure availability.'
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
  },
  {
    id: 'japan-classic',
    title: '9D7N Classic Japan Discovery',
    price: 'fr $3,288/pax',
    originalPrice: 'fr $3,688/pax',
    image: '/assets/tours/savor-southern-france.jpg',
    duration: '9D7N',
    departure: 'Year Round',
    tags: ['Most Popular'],
    description: 'Discover the essence of Japan from Tokyo to Kyoto. Experience traditional temples, modern cities, cherry blossoms, and authentic Japanese culture.'
  }
]