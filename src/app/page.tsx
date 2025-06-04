import BannerCarousel from "./components/banner";
import { TourSection } from "./components/tour-section";

export default function Home() {
  return (
    <div className="flex flex-col w-full gap-10">
      <BannerCarousel />
      <TourSection />
    </div>
  );
}
