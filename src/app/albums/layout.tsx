import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tour Albums - EU Holidays',
  description: 'Discover the moments our travellers have captured! Browse our collection of tour photo albums showcasing adventures across Europe.',
}

export default function AlbumsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}