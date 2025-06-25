import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Awards - EU Holidays',
  description: 'EU Holidays awards and recognition from the travel industry.',
}

export default function AwardsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}