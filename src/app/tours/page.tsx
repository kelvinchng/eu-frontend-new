"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TravelCard } from "../components/travel-card";
import FilterForm from "./components/filter-form";
import Pagination from "@/components/common/pagination";

const tourList = {
  count: 87,
  tours: [
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
  ],
};
 


const Explore = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 15;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log("Page changed to:", page);
    // Here you would typically fetch new data based on the page
  };

  return (
    <div className="min-h-screen">
      {/* Tour Section */}
      <div className="relative h-[643px] xl:h-[800px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={"/assets/footerbanner.png"}
            alt={"tours"}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1536px) 100vw, 1920px"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Hero Title */}
        <div className="absolute bottom-8 w-full transform  z-20  px-10 lg:px-12 xl:px-26">
          <div className="mx-auto max-w-[1500px] relative font-thunder ">
            <span className="text-white text-[46px] font-[400] tracking-normal sm:text-[56px] md:text-[70px] lg:text-[90px] xl:text-[100px] 2xl:text-[110px] max-sm:max-w-[300px] max-[400px]:mx-0 max-[500px]:-mx-4 leading-[100%] sm:leading-normal">
              {"Tours"}
            </span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white px-6 py-16 lg:px-12 xl:px-26">
        <div className="mx-auto max-w-7xl px-2">
          <FilterForm />
        </div>
      </div>

      <div className="bg-white px-6 pb-16 lg:px-12 xl:px-26">
        <div className="mx-auto max-w-[1500px] space-y-5">
          <h1 className=" font-thunder font-medium text-4xl md:text-[50px] text-navbar">
            {tourList.count} Tours
          </h1>
          <div className="flex flex-wrap gap-14  justify-center 2xl:justify-between ">
            {tourList.tours.map((tour) => (
              <TravelCard tour={tour} key={tour.id} customMobileWidth={325} />
            ))}
          </div>
          <div className="flex justify-end mt-10 font-onest font-normal text-lg text-navbar">
            {/* Pagination below content */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
