// Server-side data fetching utilities for static JSON content
import { promises as fs } from 'fs'
import path from 'path'
import {
  SeasonalDeal,
  FeaturedTour,
  Destination,
  ThemedJourney,
  TravelWithEUTab,
  YourNextAdventureData
} from './data-fetchers'

// Generic data fetcher (server-side only)
async function fetchDataFromJSON<T>(filename: string): Promise<T> {
  try {
    const dataDirectory = path.join(process.cwd(), 'src/data')
    const filePath = path.join(dataDirectory, filename)
    const fileContents = await fs.readFile(filePath, 'utf8')
    return JSON.parse(fileContents) as T
  } catch (error) {
    console.error(`Error fetching data from ${filename}:`, error)
    throw new Error(`Failed to load ${filename}`)
  }
}

// Server-side specific data fetchers
export async function getSeasonalDeals(): Promise<SeasonalDeal[]> {
  return fetchDataFromJSON<SeasonalDeal[]>('seasonal-deals.json')
}

export async function getFeaturedTours(): Promise<FeaturedTour[]> {
  return fetchDataFromJSON<FeaturedTour[]>('featured-tours.json')
}

export async function getDestinations(): Promise<Destination[]> {
  return fetchDataFromJSON<Destination[]>('destinations.json')
}

export async function getThemedJourneys(): Promise<ThemedJourney[]> {
  return fetchDataFromJSON<ThemedJourney[]>('themed-journeys.json')
}

export async function getTravelWithEUTabs(): Promise<TravelWithEUTab[]> {
  return fetchDataFromJSON<TravelWithEUTab[]>('travel-with-eu.json')
}

export async function getYourNextAdventureData(): Promise<YourNextAdventureData> {
  return fetchDataFromJSON<YourNextAdventureData>('your-next-adventure.json')
}