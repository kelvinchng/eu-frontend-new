"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const tabData = [
  {
    id: "award-winning",
    label: "Award-Winning Service",
    title: "Award-Winning Service",
    description:
      "EU Holidays offers the perfect blend of competitive pricing and exceptional quality, allowing travellers to enjoy luxurious experiences without exceeding their budgets. Their thoughtfully designed packages include high-quality accommodations, premium itineraries, and value-added services to ensure every journey feels indulgent yet affordable. Whether it’s exploring the romantic streets of Paris or soaking in the charm of Santorini, EU Holidays ensures you get the best value for your money without compromising on the experience.",
    imageSrc: "/assets/eutravel.png?width=500&height=600",
    buttonText: "View Tours",
    buttonLink: "#",
  },
  {
    id: "tour-managers",
    label: "Experienced Tour Managers",
    title: "Experienced Tour Managers",
    description:
      "Recognised by prestigious organisations and customers alike, EU Holidays has consistently been at the forefront of excellence in the travel industry. Accolades such as the Singapore Prestige Brand Award and Best Travel Agency for Europe and USA Tours reflect their dedication to creating extraordinary travel experiences. These awards underline their professionalism, trustworthiness, and ability to craft unforgettable journeys. When you choose EU Holidays, you’re travelling with a brand synonymous with quality and excellence.",
    imageSrc: "/assets/experienced_managers.png?width=500&height=1000",
    buttonText: "View Tours",
    buttonLink: "#",
  },
  {
    id: "tailored-experiences",
    label: "Tailored Travel Experience",
    title: "Tailored Travel Experience",
    description:
      "With an unwavering focus on Europe, USA, and exotic destinations, EU Holidays has become an expert in crafting unique itineraries tailored to these regions. Their deep understanding of local cultures, iconic landmarks, and hidden gems ensures that every trip is carefully curated for maximum enjoyment. By specialising in these specific destinations, EU Holidays delivers seamless tours filled with enriching experiences that leave lasting memories. From first-time travellers to seasoned explorers, their expertise caters to everyone.",
    imageSrc: "/assets/travel_experience.png?width=500&height=600",
    buttonText: "View Tours",
    buttonLink: "#",
  },
  {
    id: "happy-travellers",
    label: "Thousands of Happy Travellers",
    title: "Thousands of Happy Travellers",
    description:
      "At EU Holidays, customers are at the heart of everything they do. Certified under the Singapore Service Class, they are committed to providing personalised attention and seamless experiences from the moment you book until you return home. Their dedicated team goes above and beyond to address your needs, offering peace of mind and an stress-free journey. By focusing on customer satisfaction and consistently exceeding expectations, EU Holidays ensures every traveller feels valued and well taken care of.",
    imageSrc: "/assets/happy_traveller.png?width=500&height=600",
    buttonText: "View Tours",
    buttonLink: "#",
  },
];

const achievementImages = [
  "/assets/SIN_Quality_Class.png",
  "/assets/SIN_Service_Class.png",
  "/assets/SPBA.png",
  "/assets/Travel_Weekly_Asia.png",
  "/assets/TripZilla_Australia.png",
  "/assets/Tripzilla_europe.png",
  "/assets/TripZilla_Japan.png",
  "/assets/Club_Med.png",
];

export default function TravelWithEuSection() {
  const [activeTab, setActiveTab] = useState(tabData[0].id);
  const currentTabData = tabData.find((tab) => tab.id === activeTab);

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white h-full ps-5 sm:ps-0 sm:mx-auto space-y-6">
      <div className="mb-8 md:mb-12">
        <h2 className="text-4xl font-[500] font-thunder xl:text-5xl">
          Travel With EU
        </h2>
        <p className="md:text-lg xl:text-xl 2xl:text-3xl font-onest">
          Your trusted partner for enriching travel experiences.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8 md:mb-12">
        {achievementImages?.map((image) => (
          <div key={image} className="relative size-18">
            <Image
              src={image}
              alt="achievement"
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* Mobile View: All sections displayed vertically */}
      <div className="sm:hidden space-y-10 pr-6">
        {tabData.map((tab) => (
          <div key={`mobile-${tab.id}`} className="space-y-10">
            <button
              // onClick={() => setActiveTab(tab.id)} // Optional: could scroll to section or still set activeTab if needed for other logic
              className="font-onest text-xs font-[400] rounded-lg bg-[#242424] px-4 py-2 text-white"
            >
              {tab.label}
            </button>
            <div className="px-1">
              {" "}
              {/* Optional padding for content below header */}
              <h3 className="font-onest text-base mb-3">{tab.title}</h3>
              <p className="text-gray-600 font-onest mb-4 leading-relaxed text-sm">
                {tab.description}
              </p>
              <Link href={tab.buttonLink} passHref>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-800 text-gray-800 hover:bg-gray-100 mb-6"
                >
                  {tab.buttonText}
                </Button>
              </Link>
              <div className="relative w-full aspect-[3/4] rounded-xl ">
                <Image
                  src={tab.imageSrc || "/placeholder.svg"}
                  alt={tab.title}
                  layout="fill"
                  className="rounded-xl object-fit"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View: Tabbed Interface */}
      <div className="hidden sm:block max-w-[600px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1150px] 2xl:max-w-[1350px]">
        <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-12">
          {tabData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "py-2.5 px-4 md:py-3 md:px-5 rounded-md md:text-md ftransition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 text-sm xl:text-lg 2xl:text-xl font-[400]",
                activeTab === tab.id
                  ? "bg-gray-800 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {currentTabData && (
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative w-full aspect-[3/4] md:aspect-auto md:h-[500px] lg:h-[550px] rounded-lg overflow-hidden shadow-xl order-first md:order-none text-base lg:text-md xl:text-lg 2xl:text-[22px] ">
              <Image
                src={currentTabData.imageSrc || "/placeholder.svg"}
                alt={currentTabData.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl lg:text-3xl xl:text-[40px] 2xl:text-5xl font-[400] font-onest mb-2">
                {currentTabData.title}
              </h3>
              <p className="text-base lg:text-md xl:text-lg 2xl:text-[22px] font-onest mb-6 leading-relaxed">
                {currentTabData.description}
              </p>
              <Link href={currentTabData.buttonLink} passHref>
                <Button
                  variant="default"
                  size="lg"
                  className="bg-gray-800 text-base lg:text-md xl:text-lg 2xl:text-[22px] hover:bg-gray-700 text-white self-start px-8 py-3"
                >
                  {currentTabData.buttonText}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
