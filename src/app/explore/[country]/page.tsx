import React from 'react'
import { notFound } from 'next/navigation'
import { CountryPageClient } from './country-page-client'

// Mock data - in a real app, this would come from an API or database
const countryData = {
  switzerland: {
    name: 'Switzerland',
    description: 'Switzerland is where history, culture, and natural beauty come together effortlessly. From the serene lakes of Lucerne to the colorful villages of the Alps, every view feels like a postcard. Explore world-class museums, hike through charming towns, or admire iconic peaks like the Matterhorn. Whether you\'re savoring Swiss chocolate, discovering art, or soaking in breathtaking landscapes, Switzerland offers unforgettable moments at every turn.',
    backgroundImages: [
      '/assets/switzerland-bg-1.jpg',
      '/assets/switzerland-bg-2.jpg',
      '/assets/switzerland-bg-3.jpg'
    ],
    heroImage: '/assets/switzerland-hero.jpg',
    tours: [
      {
        id: 'ecsbts',
        title: '11D8N Switzerland Dream (APR - OCT)',
        description: 'Sunkissed Switzerland is an equally dreamy destination to explore in summer – with its incredible scenery filled in with color, spectacularly blue lakes and awesome weather to boot.',
        price: 'fr $4,288/pax',
        imageUrl: '/assets/tour-1.jpg',
        tags: ['Best Seller', 'Early Bird', 'Limited Seats'],
        badge: 'Best Seller'
      },
      {
        id: 'ecgrat',
        title: '12D10N Germany & Austria',
        description: 'Journey through the heart of Central Europe, from fairy-tale castles to stunning Alpine landscapes. Experience the rich culture, history, and natural beauty of Germany and Austria.',
        price: 'fr $4,188/pax',
        imageUrl: '/assets/tour-3.jpg',
        tags: ['Limited Seats', 'Castle Tours']
      },
      {
        id: 'ecfrit',
        title: '10D8N France & Italy Highlights',
        description: 'Experience the best of France and Italy in one amazing journey. From the romantic streets of Paris to the ancient ruins of Rome, discover Europe\'s most iconic destinations.',
        price: 'fr $3,888/pax',
        imageUrl: '/assets/tour-2.jpg',
        badge: 'Popular',
        tags: ['1-for-1', 'Multi-Country']
      },
      {
        id: 'ecnord',
        title: '14D12N Scandinavian Capitals',
        description: 'Discover the natural wonders and vibrant cities of Scandinavia. From the Northern Lights to magnificent fjords, experience the best of Norway, Sweden, Denmark and Finland.',
        price: 'fr $5,888/pax',
        imageUrl: '/assets/tour-4.jpg',
        tags: ['Early Bird', 'Northern Lights']
      },
      {
        id: 'ecrome',
        title: '9D7N Classic Italy',
        description: 'From Rome to Venice, experience Italy\'s most treasured cities. Indulge in world-class art, architecture, cuisine and wine in this comprehensive Italian adventure.',
        price: 'fr $3,388/pax',
        imageUrl: '/assets/tour-italy-1.jpg',
        badge: 'Food & Wine',
        tags: ['Food Tours', 'Art & Culture']
      },
      {
        id: 'eceast',
        title: '11D9N Eastern Europe Discovery',
        description: 'Explore the hidden gems of Eastern Europe. Visit Prague, Budapest, Vienna and Krakow, discovering centuries of history and stunning architecture.',
        price: 'fr $3,188/pax',
        imageUrl: '/assets/tour-eastern-1.jpg',
        tags: ['Heritage Sites', 'Value Deal']
      }
    ]
  },
  france: {
    name: 'France',
    description: 'France captivates with its rich history, world-renowned cuisine, and breathtaking landscapes. From the romantic streets of Paris to the lavender fields of Provence, every corner tells a story. Explore magnificent châteaux, sample exquisite wines, and immerse yourself in art and culture that has inspired the world for centuries.',
    backgroundImages: [
      '/assets/france-bg-1.jpg',
      '/assets/france-bg-2.jpg',
      '/assets/france-bg-3.jpg'
    ],
    heroImage: '/assets/france-hero.jpg',
    tours: [
      {
        id: 'ecfrit',
        title: '10D8N France & Italy Highlights',
        description: 'Experience the best of France and Italy in one amazing journey. From the romantic streets of Paris to the ancient ruins of Rome, discover Europe\'s most iconic destinations.',
        price: 'fr $3,888/pax',
        imageUrl: '/assets/tour-2.jpg',
        badge: 'Popular',
        tags: ['1-for-1', 'Multi-Country']
      },
      {
        id: 'ecparis',
        title: '8D6N Paris & Surroundings',
        description: 'Immerse yourself in the City of Light and its enchanting surroundings. Visit Versailles, Loire Valley castles, and experience the essence of French culture and cuisine.',
        price: 'fr $2,988/pax',
        imageUrl: '/assets/tour-france-1.jpg',
        tags: ['City Break', 'Cultural']
      }
    ]
  },
  italy: {
    name: 'Italy',
    description: 'Italy enchants with its artistic treasures, culinary delights, and stunning coastlines. From the ancient ruins of Rome to the romantic canals of Venice, and the Renaissance art of Florence, Italy offers an unforgettable journey through history, culture, and natural beauty.',
    backgroundImages: [
      '/assets/italy-bg-1.jpg',
      '/assets/italy-bg-2.jpg',
      '/assets/italy-bg-3.jpg'
    ],
    heroImage: '/assets/italy-hero.jpg',
    tours: [
      {
        id: '1',
        title: '14D11N Grand Italy Explorer',
        description: 'Journey through Italy\'s most iconic cities and regions. From the eternal city of Rome to the fashion capital Milan, experience the diversity and beauty of Italy in one comprehensive tour.',
        price: 'fr $698/pax',
        imageUrl: '/assets/tour-italy-1.jpg',
        tags: ['Multi-City', 'Food Tours']
      },
      {
        id: '2',
        title: '8D5N Tuscan Romance',
        description: 'Fall in love with the rolling hills of Tuscany, charming medieval towns, and world-class wines. This intimate tour is perfect for couples and wine enthusiasts.',
        price: 'fr $458/pax',
        imageUrl: '/assets/tour-italy-2.jpg',
        badge: 'Romantic',
        tags: ['Wine Tasting']
      }
    ]
  },
  netherlands: {
    name: 'Netherlands',
    description: 'The Netherlands charms with its picturesque canals, vibrant tulip fields, and rich maritime history. From the artistic treasures of Amsterdam to the colorful flower markets and historic windmills, discover a country where tradition meets innovation.',
    backgroundImages: [
      '/assets/netherlands-bg-1.jpg',
      '/assets/netherlands-bg-2.jpg',
      '/assets/netherlands-bg-3.jpg'
    ],
    heroImage: '/assets/netherlands-hero.jpg',
    tours: [
      {
        id: '1',
        title: '9D6N Dutch Delights & Tulips',
        description: 'Experience the best of the Netherlands during tulip season. Visit world-famous Keukenhof gardens, explore Amsterdam\'s canals, and discover the country\'s rich cultural heritage.',
        price: 'fr $398/pax',
        imageUrl: '/assets/tour-netherlands-1.jpg',
        tags: ['Seasonal', 'Garden Tours']
      },
      {
        id: '2',
        title: '7D4N Amsterdam & Countryside',
        description: 'Combine the urban delights of Amsterdam with the pastoral beauty of the Dutch countryside. Visit traditional villages, historic windmills, and experience local culture.',
        price: 'fr $368/pax',
        imageUrl: '/assets/tour-netherlands-2.jpg',
        badge: 'Local Experience',
        tags: ['Cultural']
      }
    ]
  }
}

const otherCountries = [
  { id: '1', name: 'France', tourCount: 56, imageUrl: '/assets/countries/france.jpg', slug: 'france' },
  { id: '2', name: 'Italy', tourCount: 25, imageUrl: '/assets/countries/italy.jpg', slug: 'italy' },
  { id: '3', name: 'Netherlands', tourCount: 60, imageUrl: '/assets/countries/netherlands.jpg', slug: 'netherlands' },
  { id: '4', name: 'Switzerland', tourCount: 29, imageUrl: '/assets/countries/switzerland.jpg', slug: 'switzerland' },
  { id: '5', name: 'Ireland', tourCount: 52, imageUrl: '/assets/countries/ireland.jpg', slug: 'ireland' },
  { id: '6', name: 'Norway', tourCount: 56, imageUrl: '/assets/countries/norway.jpg', slug: 'norway' },
  { id: '7', name: 'Portugal', tourCount: 28, imageUrl: '/assets/countries/portugal.jpg', slug: 'portugal' },
  { id: '8', name: 'Spain', tourCount: 78, imageUrl: '/assets/countries/spain.jpg', slug: 'spain' }
]

interface CountryPageProps {
  params: Promise<{
    country: string
  }>
}

export default async function CountryPage({ params }: CountryPageProps) {
  const { country: countrySlug } = await params
  
  // Get country data
  const country = countryData[countrySlug as keyof typeof countryData]
  
  if (!country) {
    notFound()
  }

  return (
    <CountryPageClient 
      country={country}
      otherCountries={otherCountries}
    />
  )
}

// Generate static params for known countries
export function generateStaticParams() {
  return Object.keys(countryData).map((country) => ({
    country
  }))
}