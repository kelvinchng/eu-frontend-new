import React from "react";
import { Tour, TourOption } from "./tour";
import TravelCarousel from "./travel-carousel";
import Destination from "./destination";

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

const destinations = [
  { id: 1, title: "Explore Japan.", image: "/assets/japan.png" },
  { id: 2, title: "Explore Korea.", image: "/assets/korea.png" },
  { id: 3, title: "Explore Taiwan.", image: "/assets/taiwan.png" },
  { id: 4, title: "Explore China.", image: "/assets/china.png" },
];

export const TourSection = () => {
  return (
    <div className="flex flex-col gap-10 lg:gap-20">
      <Tour title="Seasonal Deals + Promotions">
        <TravelCarousel tours={promotionsTours} />
      </Tour>
      <Tour title="Featured Tours">
        <TravelCarousel tours={featureTours} />
      </Tour>
      <Tour title="Explore Tours By Destinations">
        <Destination destinations={destinations} />
      </Tour>
      <Tour title="Explore Tours By Destinations">
        <Destination destinations={destinations} />
      </Tour>
    </div>
  );
};
