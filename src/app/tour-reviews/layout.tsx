import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tour Reviews - EU Holidays',
  description: 'Read authentic reviews from travelers who have experienced the magic of Europe with EU Holidays.',
}

export default function TourReviewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}