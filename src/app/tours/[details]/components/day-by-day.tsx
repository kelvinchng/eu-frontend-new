"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const itineraryData = [
  {
    id: "day-1",
    title: "DAY 1 : HOME - ZÜRICH (MEALS ON BOARD)",
    content:
      "Assemble at the airport and depart for Zürich, Switzerland's financial centre.",
  },
  {
    id: "day-2",
    title: "DAY 2 : ZÜRICH - BERN (DINNER - PORK ESCALOPE)",
    content:
      "Explore Zürich's highlights before heading to Bern. Enjoy a delicious pork escalope dinner.",
  },
  {
    id: "day-3",
    title:
      "DAY 3 : BERN - MONTREUX - GLACIER 3000 - MARTIGNY (BREAKFAST , HOTEL DINNER)",
    content:
      "Journey from Bern to Montreux, experience Glacier 3000, and arrive in Martigny for a hotel dinner.",
  },
  {
    id: "day-4",
    title: "DAY 4 : MARTIGNY - CHAMONIX - MARTIGNY (BREAKFAST)",
    content:
      "Day trip to Chamonix at the foot of Mont Blanc, returning to Martigny.",
  },
  {
    id: "day-5",
    title:
      "DAY 5 : MARTIGNY - SAAS FEE (BREAKFAST, DINNER - RACLETTE & PORK LOIN)",
    content:
      "Travel to the charming village of Saas Fee. Indulge in a traditional Raclette and Pork Loin dinner.",
  },
  {
    id: "day-6",
    title: "DAY 6 : SAAS FEE - ZERMATT - SAAS FEE (BREAKFAST)",
    content:
      "Excursion to Zermatt to see the iconic Matterhorn, then return to Saas Fee.",
  },
  {
    id: "day-7",
    title:
      "DAY 7 : SAAS FEE - SPIEZ - INTERLAKEN (BREAKFAST, DINNER - SWISS FONDUE WITH WINE)",
    content:
      "Visit Spiez on Lake Thun, then continue to Interlaken for a Swiss Fondue dinner with wine.",
  },
  {
    id: "day-8",
    title: "DAY 8 : INTERLAKEN (FREE DAY)(BREAKFAST)",
    content:
      "Enjoy a free day in Interlaken to explore at your own pace or take optional excursions.",
  },
  {
    id: "day-9",
    title: "DAY 9 : INTERLAKEN - LUCERNE - ZÜRICH (BREAKFAST)",
    content:
      "Travel through Lucerne, known for its medieval architecture, on your way back to Zürich.",
  },
  {
    id: "day-10",
    title: "DAY 10 : ZÜRICH - HOME (BREAKFAST - MEALS ON BOARD)",
    content:
      "Enjoy a final Swiss breakfast before heading to the airport for your flight home.",
  },
  {
    id: "day-11",
    title: "DAY 11 : HOME SWEET HOME",
    content:
      "Arrive home with wonderful memories of your Switzerland adventure.",
  },
];

export default function DayByDayItinerary() {
  const [openItem, setOpenItem] = useState<string | undefined>(
    itineraryData[0].id
  );

  return (
    <div className="container mx-auto w-full max-w-[1480px] my-10 2xl:my-20">
      <h2 className="font-thunder font-[500] text-4xl mb-4 2xl:text-5xl">
        Day By Day Itinerary
      </h2>
      <Accordion
        type="single"
        collapsible
        className="w-full space-y-2"
        value={openItem}
        onValueChange={setOpenItem}
      >
        {itineraryData.map((item) => (
          <AccordionItem key={item.id} value={item.id} className="border-none">
            <AccordionTrigger
              className={`
                flex justify-between items-center w-full p-4 rounded-lg text-left border border-[#DCDCDC]
                text-sm font-[600]
                transition-colors duration-200 ease-in-out
                hover:bg-opacity-90
                focus:outline-none focus-visible:ring-2 2xl:text-xl sm:font-[700] focus-visible:ring-offset-2 focus-visible:ring-offset-[#242424] font-onest
                ${
                  openItem === item.id
                    ? "bg-[#242424] text-white focus-visible:ring-gray-400"
                    : "bg-white text-black focus-visible:ring-[#242424]"
                }
              `}
            >
              <span className="font-onest font-[600] text-sm 2xl:text-lg 2xl:font-[400] leading-[17px]">
                {item.title}
              </span>
              {openItem === item.id ? (
                <Minus className="size-5 flex-shrink-0 text-white" />
              ) : (
                <Plus className="size-5 flex-shrink-0 text-black" />
              )}
            </AccordionTrigger>
            <AccordionContent className="p-4 pt-3 text-[#242424] font-[400]  text-sm font-onest">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
