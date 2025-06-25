import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'View Our Brochures - EU Holidays',
  description: 'Get access to our latest brochures in two different ways: download a digital copy or view them instantly in your browser.',
}

export default function BrochuresLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}