import { notFound } from 'next/navigation'
import { ArticlePageClient } from './article-page-client'

interface ArticleData {
  title: string
  description: string
  publishDate: string
  publication: string
  image: string
  content: string[]
}

const articles: Record<string, ArticleData> = {
  'inaugural-leisure-trip-germany': {
    title: 'Our inaugural leisure trip to Germany on 21 Sep 2021',
    description: 'In this interview with Lianhe Zaobao, our director, Mr Wong Yew Hoong, elaborates more on our inaugural trip to Germany next week and the various measures in place to ensure a safe and enjoyable trip for our customers.',
    publishDate: 'Published 21 Sep 2021',
    publication: 'Featured in Lianhe Zao Bao',
    image: '/assets/images/press-article-1.jpg',
    content: [
      'In this comprehensive interview with Lianhe Zaobao, our director Mr Wong Yew Hoong shares insights into EU Holidays\' inaugural leisure trip to Germany, marking a significant milestone in the company\'s recovery journey.',
      'The trip represents more than just a return to European travel - it symbolizes the resilience and adaptability of the travel industry during challenging times. With carefully crafted safety protocols and enhanced customer care measures, this journey sets the foundation for future travel experiences.',
      'Mr Wong elaborates on the extensive planning process, from selecting the most suitable destinations to implementing comprehensive health and safety measures. The team has worked tirelessly to ensure that every aspect of the journey meets the highest standards of quality and safety.',
      'Looking ahead, EU Holidays remains committed to pioneering innovative travel solutions that prioritize customer well-being while delivering unforgettable experiences. This inaugural trip to Germany is just the beginning of an exciting new chapter in European travel.'
    ]
  },
  'eu-holidays-100th-chartered-flight': {
    title: 'EU Holidays\' 100th Chartered Flight',
    description: 'Celebrating a remarkable milestone with our 100th chartered flight, showcasing our commitment to providing exceptional travel experiences.',
    publishDate: 'Published 9 Apr 2024',
    publication: 'Featured in CNA',
    image: '/assets/images/press-article-2.jpg',
    content: [
      'EU Holidays proudly celebrates the successful completion of our 100th chartered flight, marking a significant achievement in our journey to provide superior travel experiences for our valued customers.',
      'This milestone represents years of dedication to excellence in service, operational efficiency, and customer satisfaction. Our chartered flights have enabled thousands of travelers to explore destinations with enhanced comfort and convenience.',
      'The success of our chartered flight program reflects our commitment to innovation in the travel industry. By offering direct routes, flexible schedules, and personalized services, we\'ve redefined what travelers can expect from their journey.',
      'As we celebrate this achievement, we look forward to continuing our tradition of excellence and expanding our chartered flight offerings to serve even more destinations and create lasting memories for our customers.'
    ]
  }
}

interface ArticlePageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = articles[slug]

  if (!article) {
    notFound()
  }

  return <ArticlePageClient article={article} />
}