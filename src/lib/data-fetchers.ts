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

// Client-side data fetchers (for use in client components)
export async function fetchSeasonalDealsClient(): Promise<SeasonalDeal[]> {
  const response = await fetch('/api/data/seasonal-deals')
  if (!response.ok) {
    throw new Error('Failed to fetch seasonal deals')
  }
  return response.json()
}

export async function fetchFeaturedToursClient(): Promise<FeaturedTour[]> {
  const response = await fetch('/api/data/featured-tours')
  if (!response.ok) {
    throw new Error('Failed to fetch featured tours')
  }
  return response.json()
}

export async function fetchDestinationsClient(): Promise<Destination[]> {
  const response = await fetch('/api/data/destinations')
  if (!response.ok) {
    throw new Error('Failed to fetch destinations')
  }
  return response.json()
}

export async function fetchThemedJourneysClient(): Promise<ThemedJourney[]> {
  const response = await fetch('/api/data/themed-journeys')
  if (!response.ok) {
    throw new Error('Failed to fetch themed journeys')
  }
  return response.json()
}

export async function fetchTravelWithEUTabsClient(): Promise<TravelWithEUTab[]> {
  const response = await fetch('/api/data/travel-with-eu')
  if (!response.ok) {
    throw new Error('Failed to fetch travel with EU tabs')
  }
  return response.json()
}

export async function fetchYourNextAdventureDataClient(): Promise<YourNextAdventureData> {
  const response = await fetch('/api/data/your-next-adventure')
  if (!response.ok) {
    throw new Error('Failed to fetch your next adventure data')
  }
  return response.json()
}