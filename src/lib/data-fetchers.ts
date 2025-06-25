// Data fetching utilities for static JSON content

// Types
export interface SeasonalDeal {
  id: string
  title: string
  price: string
  description: string
  image: string
  tags?: string[]
  href?: string
}

export interface FeaturedTour {
  id: string
  title: string
  price: string
  description: string
  image: string
  tags?: string[]
  badge?: string
  href?: string
}

export interface Destination {
  id: string
  name: string
  image: string
  tourCount: number
}

export interface ThemedJourney {
  id: string
  title: string
  description: string
  image: string
}

export interface TravelWithEUTab {
  id: string
  title: string
  content: string
  image: string
  buttonText?: string
  buttonHref?: string
}

export interface Adventure {
  id: string
  title: string
  image: string
  href?: string
  iconPath?: string
}

export interface YourNextAdventureData {
  section: {
    title: string
    subtitle: string
  }
  adventures: Adventure[]
}

// Import static data
import seasonalDealsData from '@/data/seasonal-deals.json'
import featuredToursData from '@/data/featured-tours.json'
import destinationsData from '@/data/destinations.json'
import themedJourneysData from '@/data/themed-journeys.json'
import travelWithEUData from '@/data/travel-with-eu.json'
import yourNextAdventureData from '@/data/your-next-adventure.json'

// Client-side data fetchers (now using static imports for static export)
export async function fetchSeasonalDealsClient(): Promise<SeasonalDeal[]> {
  // Simulate async behavior for consistency
  return Promise.resolve(seasonalDealsData as SeasonalDeal[])
}

export async function fetchFeaturedToursClient(): Promise<FeaturedTour[]> {
  return Promise.resolve(featuredToursData as FeaturedTour[])
}

export async function fetchDestinationsClient(): Promise<Destination[]> {
  return Promise.resolve(destinationsData as Destination[])
}

export async function fetchThemedJourneysClient(): Promise<ThemedJourney[]> {
  return Promise.resolve(themedJourneysData as ThemedJourney[])
}

export async function fetchTravelWithEUTabsClient(): Promise<TravelWithEUTab[]> {
  return Promise.resolve(travelWithEUData as TravelWithEUTab[])
}

export async function fetchYourNextAdventureDataClient(): Promise<YourNextAdventureData> {
  return Promise.resolve(yourNextAdventureData as YourNextAdventureData)
}