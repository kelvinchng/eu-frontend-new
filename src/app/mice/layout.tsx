import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EU MICE Services - Meetings, Incentives, Conferences & Events in Europe',
  description: 'Professional MICE services across Europe. From corporate meetings to large conferences and incentive travel programs. EU Holidays delivers exceptional business events.',
  keywords: 'MICE services Europe, corporate events, business meetings, incentive travel, conferences Europe, EU MICE, corporate travel'
}

export default function MiceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}