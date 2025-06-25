import React from 'react'
import { ToursPageClient } from './tours-page-client'

// Mock tours data - in a real app, this would come from an API
const mockTours = [
  {
    id: 'ecsbts',
    title: '11D8N Switzerland Dream (APR - OCT)',
    description: 'Sunkissed Switzerland is an equally dreamy destination to explore in summer – with its incredible scenery filled in with color, spectacularly blue lakes and awesome weather to boot.',
    price: 'fr $4,288/pax',
    imageUrl: '/assets/countries/switzerland.jpg',
    tags: ['Best Seller', 'Early Bird', 'Limited Seats'],
    badge: 'Best Seller'
  },
  {
    id: 'ecfrit',
    title: '10D8N France & Italy Highlights',
    description: 'Experience the best of France and Italy in one amazing journey. From the romantic streets of Paris to the ancient ruins of Rome, discover Europe\'s most iconic destinations.',
    price: 'fr $3,888/pax',
    imageUrl: '/assets/countries/france.jpg',
    badge: 'Popular',
    tags: ['1-for-1', 'Multi-Country']
  },
  {
    id: 'ecgrat',
    title: '12D10N Germany & Austria',
    description: 'Journey through the heart of Central Europe, from fairy-tale castles to stunning Alpine landscapes. Experience the rich culture, history, and natural beauty of Germany and Austria.',
    price: 'fr $4,188/pax',
    imageUrl: '/assets/countries/italy.jpg',
    tags: ['Limited Seats', 'Castle Tours']
  },
  {
    id: 'ecnord',
    title: '14D12N Scandinavian Capitals',
    description: 'Discover the natural wonders and vibrant cities of Scandinavia. From the Northern Lights to magnificent fjords, experience the best of Norway, Sweden, Denmark and Finland.',
    price: 'fr $5,888/pax',
    imageUrl: '/assets/countries/norway.jpg',
    tags: ['Early Bird', 'Northern Lights']
  },
  {
    id: 'ecparis',
    title: '8D6N Paris & Surroundings',
    description: 'Immerse yourself in the City of Light and its enchanting surroundings. Visit Versailles, Loire Valley castles, and experience the essence of French culture and cuisine.',
    price: 'fr $2,988/pax',
    imageUrl: '/assets/tours/savor-southern-france.jpg',
    tags: ['City Break', 'Cultural']
  },
  {
    id: 'ecrome',
    title: '9D7N Classic Italy',
    description: 'From Rome to Venice, experience Italy\'s most treasured cities. Indulge in world-class art, architecture, cuisine and wine in this comprehensive Italian adventure.',
    price: 'fr $3,388/pax',
    imageUrl: '/assets/countries/spain.jpg',
    badge: 'Food & Wine',
    tags: ['Food Tours', 'Art & Culture']
  },
  {
    id: 'ecamst',
    title: '7D5N Netherlands Tulip Special',
    description: 'Experience the Netherlands during the spectacular tulip season. Visit Keukenhof gardens, explore Amsterdam\'s canals, and discover traditional Dutch villages.',
    price: 'fr $2,688/pax',
    imageUrl: '/assets/tours/netherlands-germany-france.jpg',
    tags: ['Seasonal', 'Limited Period']
  },
  {
    id: 'ecspan',
    title: '10D8N Spain & Portugal',
    description: 'Discover the Iberian Peninsula\'s rich history and vibrant culture. From Barcelona\'s architecture to Lisbon\'s charm, experience the best of Spain and Portugal.',
    price: 'fr $3,788/pax',
    imageUrl: '/assets/countries/portugal.jpg',
    badge: 'New',
    tags: ['Multi-Country', 'Beach & Culture']
  },
  {
    id: 'eceast',
    title: '11D9N Eastern Europe Discovery',
    description: 'Explore the hidden gems of Eastern Europe. Visit Prague, Budapest, Vienna and Krakow, discovering centuries of history and stunning architecture.',
    price: 'fr $3,188/pax',
    imageUrl: '/assets/tours/europe-fantasy.jpg',
    tags: ['Heritage Sites', 'Value Deal']
  }
]

export default function ToursPage() {
  return <ToursPageClient tours={mockTours} />
}