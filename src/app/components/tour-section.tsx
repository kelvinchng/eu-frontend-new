import React from "react";
import { Tour, TourOption } from "./tour";
import { TravelCard } from "./travel-card";
import { DestinationCard } from "./destination-card";
import { TourByTheme } from "./tour-by-theme";
import TravelWithEuSection from "./traveleu-section";
import { Link, Ship, Snowflake, TrendingUp } from "lucide-react";
import { Adventure } from "./adventure";
import { Promotion } from "./promotion";

const promotionsTours: TourOption[] = [
  {
    id: 1,
    image: "/assets/cherrypromotion.png",
    title: "The Cherry Blossoms are Calling",
    price: "fr $438/pax",
    descriptions:
      "Enjoy an unforgettable spring getaway to Japan during peak sakura season! This limited-time deal includes airport taxes, baggage allowance and even a free gift.",
    bestSeller: false,
  },
  {
    id: 2,
    image: "/assets/trainpromotion.png",
    title: "13D10N Aurora Norway, Finland and Sweden (OCT-MAR)",
    price: "fr $438/pax",
    descriptions:
      "Sunkissed Switzerland is an equally dreamy destination to explore in summer – with its incredible scenery filled in with color, spectacularly blue lakes and awesome weather to boot.",
    bestSeller: true,
  },
  {
    id: 3,
    image: "/assets/mountainpromotion.png",
    title: "10D7N Northern Italy & The Grand Dolomites",
    price: "fr $438/pax",
    descriptions:
      "Sunkissed Switzerland is an equally dreamy destination to explore in summer – with its incredible scenery filled in with color, spectacularly blue lakes and awesome weather to boot.",
    bestSeller: false,
  },
  {
    id: 4,
    image: "/assets/cherrypromotion.png",
    title: "The Cherry Blossoms are Calling",
    price: "fr $438/pax",
    descriptions:
      "Enjoy an unforgettable spring getaway to Japan during peak sakura season! This limited-time deal includes airport taxes, baggage allowance and even a free gift.",
    bestSeller: false,
  },
  {
    id: 5,
    image: "/assets/trainpromotion.png",
    title: "13D10N Aurora Norway, Finland and Sweden (OCT-MAR)",
    price: "fr $438/pax",
    descriptions:
      "Sunkissed Switzerland is an equally dreamy destination to explore in summer – with its incredible scenery filled in with color, spectacularly blue lakes and awesome weather to boot.",
    bestSeller: true,
  },
  {
    id: 6,
    image: "/assets/mountainpromotion.png",
    title: "10D7N Northern Italy & The Grand Dolomites",
    price: "fr $438/pax",
    descriptions:
      "Sunkissed Switzerland is an equally dreamy destination to explore in summer – with its incredible scenery filled in with color, spectacularly blue lakes and awesome weather to boot.",
    bestSeller: false,
  },
];

const featureTours = [
  {
    id: 1,
    image: "/assets/flowerfeature.png",
    title: "10D7N Northern Italy & The Grand Dolomites",
    price: "fr $438/pax",
    descriptions:
      "Sunkissed Switzerland is an equally dreamy destination to explore in summer – with its incredible scenery filled in with color, spectacularly blue lakes and awesome weather to boot.",
    bestSeller: false,
  },
  {
    id: 2,
    image: "/assets/carfeature.png",
    title: "10D7N Northern Italy & The Grand Dolomites",
    price: "fr $438/pax",
    descriptions:
      "Sunkissed Switzerland is an equally dreamy destination to explore in summer – with its incredible scenery filled in with color, spectacularly blue lakes and awesome weather to boot.",
    bestSeller: true,
  },
  {
    id: 3,
    image: "/assets/mountainfeature.png",
    title: "10D7N Northern Italy & The Grand Dolomites",
    price: "fr $438/pax",
    descriptions:
      "Sunkissed Switzerland is an equally dreamy destination to explore in summer – with its incredible scenery filled in with color, spectacularly blue lakes and awesome weather to boot.",
    bestSeller: false,
  },
  {
    id: 4,
    image: "/assets/flowerfeature.png",
    title: "10D7N Northern Italy & The Grand Dolomites",
    price: "fr $438/pax",
    descriptions:
      "Sunkissed Switzerland is an equally dreamy destination to explore in summer – with its incredible scenery filled in with color, spectacularly blue lakes and awesome weather to boot.",
    bestSeller: false,
  },
  {
    id: 5,
    image: "/assets/carfeature.png",
    title: "10D7N Northern Italy & The Grand Dolomites",
    price: "fr $438/pax",
    descriptions:
      "Sunkissed Switzerland is an equally dreamy destination to explore in summer – with its incredible scenery filled in with color, spectacularly blue lakes and awesome weather to boot.",
    bestSeller: true,
  },
  {
    id: 6,
    image: "/assets/mountainfeature.png",
    title: "10D7N Northern Italy & The Grand Dolomites",
    price: "fr $438/pax",
    descriptions:
      "Sunkissed Switzerland is an equally dreamy destination to explore in summer – with its incredible scenery filled in with color, spectacularly blue lakes and awesome weather to boot.",
    bestSeller: false,
  },
];

export const destinations = [
  { id: 1, title: "Explore Japan.", image: "/assets/japan.png" },
  { id: 2, title: "Explore Korea.", image: "/assets/korea.png" },
  { id: 3, title: "Explore Taiwan.", image: "/assets/taiwan.png" },
  { id: 4, title: "Explore China.", image: "/assets/china.png" },
];

const themeOptions = [
  {
    id: 1,
    title: "Luxury Experiences",
    descriptions: "Exquisite moments await.",
    image: "/assets/bed.png",
  },
  {
    id: 2,
    title: "Family Friendly",
    descriptions: "Designed for families.",
    image: "/assets/family.png",
  },
  {
    id: 3,
    title: "Seasonal Tours",
    descriptions: "Tours for every season.",
    image: "/assets/winter.png",
  },
  {
    id: 4,
    title: "Cultural & Historical",
    descriptions: "Stories of time and heritage.",
    image: "/assets/cultural.png",
  },
];

const adventureOptions = [
  {
    id: 1,
    title: "Trending Now",
    icon: <TrendingUp />,
    image: "/assets/bridge.png",
  },
  {
    id: 2,
    title: "Travel Deals",
    icon: <Link />,
    image: "/assets/bridge1.png",
  },
  {
    id: 3,
    title: "Themed Journeys",
    icon: <Snowflake />,
    image: "/assets/sea.png",
  },
  { id: 4, title: "Cruises", icon: <Ship />, image: "/assets/cruise.png" },
];

const promotionImages = [
  "/assets/promo1.png",
  "/assets/promo2.png",
  "/assets/promo3.png",
  "/assets/promo4.png",
  "/assets/promo5.png",
  "/assets/promo6.png",
  "/assets/promo7.png",
  "/assets/promo8.png",
  "/assets/promo9.png",
  "/assets/promo10.png",
];

export const TourSection = () => {
  return (
    <div className="flex flex-col gap-10 lg:gap-20 md:mb-6 lg:mb-10 2xl:my-10">
      <Tour title="Seasonal Deals + Promotions">
        <div className="flex gap-2 md:gap-4">
          {promotionsTours.map((tour) => (
            <TravelCard tour={tour} key={tour.id} />
          ))}
        </div>
      </Tour>
      <Tour title="Featured Tours">
        <div className="flex gap-2 md:gap-4">
          {featureTours.map((tour) => (
            <TravelCard tour={tour} key={tour.id} />
          ))}
        </div>
      </Tour>
      <Tour title="Explore Tours By Destinations">
        <DestinationCard destinations={destinations} />
      </Tour>
      {/* THEME SECTION  */}
      <div className="sm:bg-[#EFEFEF] py-4 md:py-6 lg:py-10 w-full flex flex-col sm:items-center 2xl:py-20 ">
        <Tour
          title="Explore Tours By Themes"
          subTitleClassName="justify-center"
          titleClassName="items-center"
        >
          <TourByTheme themes={themeOptions} />
        </Tour>
      </div>

      {/* EU SECTION  */}
      <TravelWithEuSection />

      {/* ADVENTURE SECTION  */}
      <Tour
        title="Explore Tours By Themes"
        subTitle="Join thousands of happy travellers who trust EU Holidays to make their journey unforgettable."
      >
        <Adventure adventures={adventureOptions} />
      </Tour>

      {/* PROMOTION SECTION  */}
      <Promotion promotionImages={promotionImages} />
    </div>
  );
};
