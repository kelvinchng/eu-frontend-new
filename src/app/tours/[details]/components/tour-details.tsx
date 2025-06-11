"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import type { Key } from "react";
import TourTabs from "./tour-tabs";
import DayByDayItinerary from "./day-by-day";

interface GalleryItem {
  id: Key;
  src: string;
  alt: string;
  className: string;
}

const linkOptions = [
  {
    label: "Download Itinerary",
    action: () => {},
  },
  {
    label: "Enquire More",
    action: () => {},
  },
  {
    label: "Book Now",
    action: () => {},
  },
];

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/assets/tour_first.png",
    alt: "Bern street view with flags and clock tower",
    className:
      "col-span-2 md:col-span-2 md:row-span-2 h-72 sm:h-96 md:min-h-[705px]",
  },
  {
    id: 2,
    src: "/assets/tour_second.png",
    alt: "Orange train in front of Matterhorn",
    className:
      "col-span-1 md:col-span-1 h-60 sm:h-72 md:h-[calc((705px-1rem)/2)]",
  },
  {
    id: 3,
    src: "/assets/tour_third.png",
    alt: "Aerial view of Swiss valley and lake",
    className:
      "col-span-1 md:col-span-1 h-60 sm:h-72 md:h-[calc((705px-1rem)/2)]",
  },
];

const TourDetails = () => {
  return (
    <div className="flex flex-col max-w-[325px] 2xl:max-w-[1480px] mx-auto h-full mt-[103px]">
      {/* BREAD CRUMB PART  */}
      {/* <span className="bg-amber-300">hello</span> */}
      <h2 className="text-4xl 2xl:text-5xl 2xl:mt-10 font-[500] font-thunder flex flex-wrap">
        11D8N Switzerland Dream (Apr - Oct)
      </h2>
      <span className="font-onest font-[700] text-sm 2xl:text-lg mt-2">
        Tour Code: <span className="font-[400]">ECSBTS</span>
      </span>
      <div className="flex flex-col sm:flex-row sm:justify-between gap-3 mt-4">
        {/* BUTTON GROUP  */}
        <div className="flex flex-wrap gap-2 2xl:gap-4 mt-4 sm:order-2">
          {linkOptions.map((item, index) => (
            <Button
              key={index}
              variant={index === 2 ? "default" : "outline"}
              className="font-onest font-[400] text-xs 2xl:text-lg px-6 py-2 2xl:px-10 2xl:py-6 rounded-xs"
            >
              {item.label}
            </Button>
          ))}
        </div>
        <span className="font-onest font-[400] 2xl:text-lg 2xl:w-1/2 text-sm text-start order-2 sm:order-1 2xl:max-w-[569px]">
          Sunkissed Switzerland is an equally dreamy destination to explore in
          summer – with its incredible scenery filled in with color,
          spectacularly blue lakes and awesome weather to boot.
        </span>
      </div>
      {/* RESPONSIVE IMAGE  */}
      <div className="min-h-[428px] sm:min-h-[600px] 2xl:min-h-[705px] mt-4 2xl:mb-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 sm:h-[600px]">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`relative rounded-3xl overflow-hidden ${item.className}`}
            >
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                fill
                className="object-cover rounded-3xl"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* TAB GROUPS  */}
      <TourTabs />

      {/* DAY BY DAY  */}
      <DayByDayItinerary />
    </div>
  );
};

export default TourDetails;
