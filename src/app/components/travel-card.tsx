"use client";
import Image from "next/image";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { TourOption } from "./tour";

interface TravelCardProps {
  tour: TourOption;
  customMobileWidth?: number;
}

export const TravelCard = ({ tour , customMobileWidth}: TravelCardProps) => {
  const [viewMore, setViewMore] = useState(false);
  return (
    <div
      style={
        { "--mobile-width": `${customMobileWidth}px` } as React.CSSProperties
      }
      className={
        customMobileWidth
          ? "[width:var(--mobile-width)] min-[640px]:w-[295px] min-[768px]:w-[345px] min-[1024px]:w-[285px] min-[1536px]:w-[400px] min-[1800px]:w-[460px] xl:min-h-[643px] min-h-[450px] rounded-xl flex flex-col flex-shrink-0 gap-2 bg-white border border-gray-200"
          : "w-[265px] sm:w-[295px] md:w-[345px] lg:w-[285px] xl:w-[370px] 2xl:w-[440px] xl:min-h-[643px] min-h-[450px] rounded-xl flex flex-col flex-shrink-0 gap-2 bg-white border border-gray-200"
      }
    >
      {/* IMAGE PART  */}
      <div className="relative w-full h-[172px] xl:h-[280px] rounded-xl">
        <Image
          alt={tour.title}
          src={
            tour.image ||
            "/placeholder.svg?width=265&height=171&text=Tour+Image"
          }
          fill
          className="object-cover rounded-xl"
        />
      </div>
      {/* CONTENT PART (Example structure) */}
      <div className="flex flex-col px-6 pt-2 xl:pt-4 xl:text-xl 2xl:text-3xl font-onest flex-grow">
        <h4 className="text-base xl:text-xl 2xl:text-[25px] font-[700] min-h-[50px] 2xl:min-h-[80px]">
          {tour.title}
        </h4>
        <span className="text-xs xl:text-lg 2xl:text-xl font-[500] mb-2">
          {tour.price}
        </span>
        <span className="text-sm xl:text-lg 2xl:text-xl font-[400] xl:min-h-[200px]">
          {tour.descriptions}
        </span>
        <Button
          className={`w-full justify-start items-center mt-2 ${
            viewMore && "mb-2"
          }`}
          variant={"outline"}
        >
          <Image
            src={"/bag.svg"}
            alt="bag"
            width={20}
            height={20}
            className="self-start mr-2"
          />
          <span className={`text-sm xl:text-lg 2xl:text-xl font-[400]`}>
            1-for-1
          </span>
        </Button>
        {viewMore && (
          <div className="flex flex-col gap-2">
            <Button
              className="w-full justify-start items-center"
              variant={"outline"}
            >
              <Image
                src={"/bag.svg"}
                alt="bag"
                width={20}
                height={20}
                className="self-start mr-2"
              />
              <span className="text-sm xl:text-lg 2xl:text-xl font-[400]">
                1-for-1
              </span>
            </Button>
            <Button
              className="w-full justify-start items-center"
              variant={"outline"}
            >
              <Image
                src={"/bag.svg"}
                alt="bag"
                width={20}
                height={20}
                className="self-start mr-2"
              />
              <span className="text-sm xl:text-lg 2xl:text-xl font-[400]">
                1-for-1
              </span>
            </Button>
          </div>
        )}
        <Button
          onClick={() => setViewMore((prev) => !prev)}
          variant={"ghost"}
          className="w-full self-center xl:mt-2 text-sm xl:text-lg 2xl:text-xl font-normal lg:pt-6 xl:pb-2 xl:my-4"
        >
          View More <ChevronDown className="ml-2" />
        </Button>
      </div>
    </div>
  );
};
