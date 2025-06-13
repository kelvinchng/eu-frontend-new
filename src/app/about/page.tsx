import { cn } from '@/lib/utils'
import { DesktopNav } from '@/components/common/nav/desktop-nav'
import { MobileNav } from '@/components/common/nav/mobile-nav'
import { Footer } from '@/components/common/footer'
import AboutBanner from './components/about-banner'
import AboutStory from './components/about-story'
import AboutMilestones from './components/about-milestones'
import AboutMVV from './components/about-mvv'
import AboutPeople from './components/about-people'

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Nav */}
      <div className="hidden lg:block">
        <DesktopNav />
      </div>
      <div className="block lg:hidden">
        <MobileNav />
      </div>
      {/* Banner */}
      <AboutBanner />
      {/* Our Story */}
      <AboutStory />
      {/* Milestones */}
      <AboutMilestones />
      {/* Mission, Vision, Values */}
      <AboutMVV />
      {/* Our People */}
      <AboutPeople />
      {/* Footer */}
      <Footer />
    </div>
  )
} 