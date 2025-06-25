import React from 'react'
import { notFound } from 'next/navigation'
import { CountryPageClient } from './country-page-client'

// Mock data - in a real app, this would come from an API or database
const countryData = {
  switzerland: {
    name: 'Switzerland',
    description: 'Switzerland is where history, culture, and natural beauty come together effortlessly. From the serene lakes of Lucerne to the colorful villages of the Alps, every view feels like a postcard. Explore world-class museums, hike through charming towns, or admire iconic peaks like the Matterhorn. Whether you\'re savoring Swiss chocolate, discovering art, or soaking in breathtaking landscapes, Switzerland offers unforgettable moments at every turn.',
    backgroundImages: [
      '/assets/country/switzerland-background-about.jpg',
      '/assets/country/switzerland-background-about.jpg',
      '/assets/country/switzerland-background-about.jpg'
    ],
    heroImage: '/assets/country/switzerland-country-hero.jpg',
    tours: [
      {
        id: '1',
        title: '7D6N Scenic Korea',
        price: 'fr $1,438/pax',
        description: 'Experience the vibrant culture of South Korea with visits to Seoul, Busan, and Jeju Island. Includes traditional markets and K-pop experiences.',
        image: '/assets/tours/savor-southern-france.jpg',
        tags: ['Best Seller'],
        badge: 'Best Seller',
        href: '/tours/korea-scenic'
      },
      {
        id: '2',
        title: '10D8N Classic Japan',
        price: 'fr $2,188/pax',
        description: 'Discover Japan\'s perfect blend of ancient traditions and modern technology. Visit Tokyo, Kyoto, Osaka, and Mount Fuji.',
        image: '/assets/tours/europe-fantasy.jpg',
        tags: ['Popular'],
        href: '/tours/japan-classic'
      },
      {
        id: '3',
        title: '8D7N Taiwan Discovery',
        price: 'fr $988/pax',
        description: 'Explore Taiwan\'s night markets, hot springs, and stunning Taroko Gorge. A perfect mix of city life and natural wonders.',
        image: '/assets/tours/netherlands-germany-france.jpg',
        tags: ['Value Deal'],
        href: '/tours/taiwan-discovery'
      },
      {
        id: '4',
        title: '12D10N Turkey Wonders',
        price: 'fr $1,888/pax',
        description: 'Journey through Istanbul, Cappadocia, and Pamukkale. Experience hot air balloons, ancient ruins, and Turkish hospitality.',
        image: '/assets/tours/savor-southern-france.jpg',
        tags: ['Must See'],
        href: '/tours/turkey-wonders'
      },
      {
        id: '5',
        title: '11D8N Switzerland Dream (APR - OCT)',
        price: 'fr $4,288/pax',
        description: 'Sunkissed Switzerland is an equally dreamy destination to explore in summer – with its incredible scenery filled in with color, spectacularly blue lakes and awesome weather to boot.',
        image: '/assets/tours/europe-fantasy.jpg',
        tags: ['Best Seller', 'Early Bird'],
        badge: 'Best Seller',
        href: '/tours/switzerland-dream'
      },
      {
        id: '6',
        title: '14D12N Scandinavian Capitals',
        price: 'fr $5,888/pax',
        description: 'Discover the natural wonders and vibrant cities of Scandinavia. From the Northern Lights to magnificent fjords, experience the best of Norway, Sweden, Denmark and Finland.',
        image: '/assets/tours/netherlands-germany-france.jpg',
        tags: ['Early Bird', 'Northern Lights'],
        href: '/tours/scandinavian-capitals'
      }
    ]
  },
  france: {
    name: 'France',
    description: 'France captivates with its rich history, world-renowned cuisine, and breathtaking landscapes. From the romantic streets of Paris to the lavender fields of Provence, every corner tells a story. Explore magnificent châteaux, sample exquisite wines, and immerse yourself in art and culture that has inspired the world for centuries.',
    backgroundImages: [
      '/assets/country/switzerland-background-about.jpg',
      '/assets/country/switzerland-background-about.jpg',
      '/assets/country/switzerland-background-about.jpg'
    ],
    heroImage: '/assets/country/switzerland-country-hero.jpg',
    tours: [
      {
        id: '1',
        title: '7D6N Scenic Korea',
        price: 'fr $1,438/pax',
        description: 'Experience the vibrant culture of South Korea with visits to Seoul, Busan, and Jeju Island. Includes traditional markets and K-pop experiences.',
        image: '/assets/tours/savor-southern-france.jpg',
        tags: ['Best Seller'],
        badge: 'Best Seller',
        href: '/tours/korea-scenic'
      },
      {
        id: '2',
        title: '10D8N Classic Japan',
        price: 'fr $2,188/pax',
        description: 'Discover Japan\'s perfect blend of ancient traditions and modern technology. Visit Tokyo, Kyoto, Osaka, and Mount Fuji.',
        image: '/assets/tours/europe-fantasy.jpg',
        tags: ['Popular'],
        href: '/tours/japan-classic'
      },
      {
        id: '3',
        title: '8D7N Taiwan Discovery',
        price: 'fr $988/pax',
        description: 'Explore Taiwan\'s night markets, hot springs, and stunning Taroko Gorge. A perfect mix of city life and natural wonders.',
        image: '/assets/tours/netherlands-germany-france.jpg',
        tags: ['Value Deal'],
        href: '/tours/taiwan-discovery'
      },
      {
        id: '4',
        title: '12D10N Turkey Wonders',
        price: 'fr $1,888/pax',
        description: 'Journey through Istanbul, Cappadocia, and Pamukkale. Experience hot air balloons, ancient ruins, and Turkish hospitality.',
        image: '/assets/tours/savor-southern-france.jpg',
        tags: ['Must See'],
        href: '/tours/turkey-wonders'
      },
      {
        id: '5',
        title: '11D8N Switzerland Dream (APR - OCT)',
        price: 'fr $4,288/pax',
        description: 'Sunkissed Switzerland is an equally dreamy destination to explore in summer – with its incredible scenery filled in with color, spectacularly blue lakes and awesome weather to boot.',
        image: '/assets/tours/europe-fantasy.jpg',
        tags: ['Best Seller', 'Early Bird'],
        badge: 'Best Seller',
        href: '/tours/switzerland-dream'
      },
      {
        id: '6',
        title: '14D12N Scandinavian Capitals',
        price: 'fr $5,888/pax',
        description: 'Discover the natural wonders and vibrant cities of Scandinavia. From the Northern Lights to magnificent fjords, experience the best of Norway, Sweden, Denmark and Finland.',
        image: '/assets/tours/netherlands-germany-france.jpg',
        tags: ['Early Bird', 'Northern Lights'],
        href: '/tours/scandinavian-capitals'
      }
    ]
  },
  italy: {
    name: 'Italy',
    description: 'Italy enchants with its artistic treasures, culinary delights, and stunning coastlines. From the ancient ruins of Rome to the romantic canals of Venice, and the Renaissance art of Florence, Italy offers an unforgettable journey through history, culture, and natural beauty.',
    backgroundImages: [
      '/assets/country/switzerland-background-about.jpg',
      '/assets/country/switzerland-background-about.jpg',
      '/assets/country/switzerland-background-about.jpg'
    ],
    heroImage: '/assets/country/switzerland-country-hero.jpg',
    tours: [
      {
        id: '1',
        title: '7D6N Scenic Korea',
        price: 'fr $1,438/pax',
        description: 'Experience the vibrant culture of South Korea with visits to Seoul, Busan, and Jeju Island. Includes traditional markets and K-pop experiences.',
        image: '/assets/tours/savor-southern-france.jpg',
        tags: ['Best Seller'],
        badge: 'Best Seller',
        href: '/tours/korea-scenic'
      },
      {
        id: '2',
        title: '10D8N Classic Japan',
        price: 'fr $2,188/pax',
        description: 'Discover Japan\'s perfect blend of ancient traditions and modern technology. Visit Tokyo, Kyoto, Osaka, and Mount Fuji.',
        image: '/assets/tours/europe-fantasy.jpg',
        tags: ['Popular'],
        href: '/tours/japan-classic'
      },
      {
        id: '3',
        title: '8D7N Taiwan Discovery',
        price: 'fr $988/pax',
        description: 'Explore Taiwan\'s night markets, hot springs, and stunning Taroko Gorge. A perfect mix of city life and natural wonders.',
        image: '/assets/tours/netherlands-germany-france.jpg',
        tags: ['Value Deal'],
        href: '/tours/taiwan-discovery'
      },
      {
        id: '4',
        title: '12D10N Turkey Wonders',
        price: 'fr $1,888/pax',
        description: 'Journey through Istanbul, Cappadocia, and Pamukkale. Experience hot air balloons, ancient ruins, and Turkish hospitality.',
        image: '/assets/tours/savor-southern-france.jpg',
        tags: ['Must See'],
        href: '/tours/turkey-wonders'
      },
      {
        id: '5',
        title: '11D8N Switzerland Dream (APR - OCT)',
        price: 'fr $4,288/pax',
        description: 'Sunkissed Switzerland is an equally dreamy destination to explore in summer – with its incredible scenery filled in with color, spectacularly blue lakes and awesome weather to boot.',
        image: '/assets/tours/europe-fantasy.jpg',
        tags: ['Best Seller', 'Early Bird'],
        badge: 'Best Seller',
        href: '/tours/switzerland-dream'
      },
      {
        id: '6',
        title: '14D12N Scandinavian Capitals',
        price: 'fr $5,888/pax',
        description: 'Discover the natural wonders and vibrant cities of Scandinavia. From the Northern Lights to magnificent fjords, experience the best of Norway, Sweden, Denmark and Finland.',
        image: '/assets/tours/netherlands-germany-france.jpg',
        tags: ['Early Bird', 'Northern Lights'],
        href: '/tours/scandinavian-capitals'
      }
    ]
  },
  netherlands: {
    name: 'Netherlands',
    description: 'The Netherlands charms with its picturesque canals, vibrant tulip fields, and rich maritime history. From the artistic treasures of Amsterdam to the colorful flower markets and historic windmills, discover a country where tradition meets innovation.',
    backgroundImages: [
      '/assets/country/switzerland-background-about.jpg',
      '/assets/country/switzerland-background-about.jpg',
      '/assets/country/switzerland-background-about.jpg'
    ],
    heroImage: '/assets/country/switzerland-country-hero.jpg',
    tours: [
      {
        id: '1',
        title: '7D6N Scenic Korea',
        price: 'fr $1,438/pax',
        description: 'Experience the vibrant culture of South Korea with visits to Seoul, Busan, and Jeju Island. Includes traditional markets and K-pop experiences.',
        image: '/assets/tours/savor-southern-france.jpg',
        tags: ['Best Seller'],
        badge: 'Best Seller',
        href: '/tours/korea-scenic'
      },
      {
        id: '2',
        title: '10D8N Classic Japan',
        price: 'fr $2,188/pax',
        description: 'Discover Japan\'s perfect blend of ancient traditions and modern technology. Visit Tokyo, Kyoto, Osaka, and Mount Fuji.',
        image: '/assets/tours/europe-fantasy.jpg',
        tags: ['Popular'],
        href: '/tours/japan-classic'
      },
      {
        id: '3',
        title: '8D7N Taiwan Discovery',
        price: 'fr $988/pax',
        description: 'Explore Taiwan\'s night markets, hot springs, and stunning Taroko Gorge. A perfect mix of city life and natural wonders.',
        image: '/assets/tours/netherlands-germany-france.jpg',
        tags: ['Value Deal'],
        href: '/tours/taiwan-discovery'
      },
      {
        id: '4',
        title: '12D10N Turkey Wonders',
        price: 'fr $1,888/pax',
        description: 'Journey through Istanbul, Cappadocia, and Pamukkale. Experience hot air balloons, ancient ruins, and Turkish hospitality.',
        image: '/assets/tours/savor-southern-france.jpg',
        tags: ['Must See'],
        href: '/tours/turkey-wonders'
      },
      {
        id: '5',
        title: '11D8N Switzerland Dream (APR - OCT)',
        price: 'fr $4,288/pax',
        description: 'Sunkissed Switzerland is an equally dreamy destination to explore in summer – with its incredible scenery filled in with color, spectacularly blue lakes and awesome weather to boot.',
        image: '/assets/tours/europe-fantasy.jpg',
        tags: ['Best Seller', 'Early Bird'],
        badge: 'Best Seller',
        href: '/tours/switzerland-dream'
      },
      {
        id: '6',
        title: '14D12N Scandinavian Capitals',
        price: 'fr $5,888/pax',
        description: 'Discover the natural wonders and vibrant cities of Scandinavia. From the Northern Lights to magnificent fjords, experience the best of Norway, Sweden, Denmark and Finland.',
        image: '/assets/tours/netherlands-germany-france.jpg',
        tags: ['Early Bird', 'Northern Lights'],
        href: '/tours/scandinavian-capitals'
      }
    ]
  }
}

// Add placeholder data for any other countries that might be accessed
const defaultCountryData = {
  name: 'Country',
  description: 'Discover the unique beauty and culture of this destination. From historic landmarks to modern attractions, experience unforgettable moments at every turn.',
  backgroundImages: [
    '/assets/country/switzerland-background-about.jpg',
    '/assets/country/switzerland-background-about.jpg',
    '/assets/country/switzerland-background-about.jpg'
  ],
  heroImage: '/assets/country/switzerland-country-hero.jpg',
  tours: [
    {
      id: '1',
      title: '7D6N Scenic Korea',
      price: 'fr $1,438/pax',
      description: 'Experience the vibrant culture of South Korea with visits to Seoul, Busan, and Jeju Island. Includes traditional markets and K-pop experiences.',
      image: '/assets/tours/savor-southern-france.jpg',
      tags: ['Best Seller'],
      badge: 'Best Seller',
      href: '/tours/korea-scenic'
    },
    {
      id: '2',
      title: '10D8N Classic Japan',
      price: 'fr $2,188/pax',
      description: 'Discover Japan\'s perfect blend of ancient traditions and modern technology. Visit Tokyo, Kyoto, Osaka, and Mount Fuji.',
      image: '/assets/tours/europe-fantasy.jpg',
      tags: ['Popular'],
      href: '/tours/japan-classic'
    },
    {
      id: '3',
      title: '8D7N Taiwan Discovery',
      price: 'fr $988/pax',
      description: 'Explore Taiwan\'s night markets, hot springs, and stunning Taroko Gorge. A perfect mix of city life and natural wonders.',
      image: '/assets/tours/netherlands-germany-france.jpg',
      tags: ['Value Deal'],
      href: '/tours/taiwan-discovery'
    },
    {
      id: '4',
      title: '12D10N Turkey Wonders',
      price: 'fr $1,888/pax',
      description: 'Journey through Istanbul, Cappadocia, and Pamukkale. Experience hot air balloons, ancient ruins, and Turkish hospitality.',
      image: '/assets/tours/savor-southern-france.jpg',
      tags: ['Must See'],
      href: '/tours/turkey-wonders'
    },
    {
      id: '5',
      title: '11D8N Switzerland Dream (APR - OCT)',
      price: 'fr $4,288/pax',
      description: 'Sunkissed Switzerland is an equally dreamy destination to explore in summer – with its incredible scenery filled in with color, spectacularly blue lakes and awesome weather to boot.',
      image: '/assets/tours/europe-fantasy.jpg',
      tags: ['Best Seller', 'Early Bird'],
      badge: 'Best Seller',
      href: '/tours/switzerland-dream'
    },
    {
      id: '6',
      title: '14D12N Scandinavian Capitals',
      price: 'fr $5,888/pax',
      description: 'Discover the natural wonders and vibrant cities of Scandinavia. From the Northern Lights to magnificent fjords, experience the best of Norway, Sweden, Denmark and Finland.',
      image: '/assets/tours/netherlands-germany-france.jpg',
      tags: ['Early Bird', 'Northern Lights'],
      href: '/tours/scandinavian-capitals'
    }
  ]
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
  
  // Get country data, use default if not found
  let country = countryData[countrySlug as keyof typeof countryData]
  
  if (!country) {
    // Use default country data with the proper name
    const countryName = countrySlug.charAt(0).toUpperCase() + countrySlug.slice(1)
    country = {
      ...defaultCountryData,
      name: countryName
    }
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
  // Include both defined countries and other countries from the list
  const definedCountries = Object.keys(countryData)
  const allCountries = [...definedCountries, 'ireland', 'norway', 'portugal', 'spain']
  
  return allCountries.map((country) => ({
    country
  }))
}