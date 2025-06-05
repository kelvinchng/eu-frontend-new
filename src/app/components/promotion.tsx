import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

interface PromotionProps {
  promotionImages: string[];
}

export const Promotion = ({ promotionImages }: PromotionProps) => {
  return (
    <div className="max-w-[600px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1150px] 2xl:max-w-[1350px] sm:mx-auto sm:w-full space-y-6">
      <div className="flex justify-center">
        <div className="flex flex-row justify-between items-center md:w-[600px] xl:w-[800px]">
          <div className="size-[73px] md:size-[90px] relative">
            <Image
              src={"/assets/eulogo.png"}
              alt="logo"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 font-onest font-[500]">
            <span className="text-base sm:text-md md:text-lg lg:text-xl 2xl:text-2xl">
              EUHOLIDAYS
            </span>
            <span className="text-sm sm:text-base md:text-md lg:text-lg 2xl:text-xl">
              @euholidays
            </span>
          </div>
          <div className="hidden sm:flex flex-col gap-2 font-onest font-[500]">
            <span className="text-base sm:text-md md:text-lg lg:text-xl 2xl:text-2xl">
              1,490
            </span>
            <span className="text-sm sm:text-base md:text-md lg:text-lg 2xl:text-xl">
              Posts
            </span>
          </div>
          <div className="hidden sm:flex flex-col gap-2 font-onest font-[500]">
            <span className="text-base sm:text-md md:text-lg lg:text-xl 2xl:text-2xl">
              10.8k
            </span>
            <span className="text-sm sm:text-base md:text-md lg:text-lg 2xl:text-xl">
              Followers
            </span>
          </div>
          <div className="hidden sm:flex flex-col gap-2 font-onest font-[500]">
            <span className="text-base sm:text-md md:text-lg lg:text-xl 2xl:text-2xl">
              88
            </span>
            <span className="text-sm sm:text-base md:text-md lg:text-lg 2xl:text-xl">
              Following
            </span>
          </div>
          <Button className="sm:w-auto mt-2 sm:mt-0 px-6 text-sm sm:text-base md:text-md lg:text-lg 2xl:text-xl">
            Follow
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4 max-w-sm mx-auto sm:max-w-none sm:mx-0">
        {promotionImages.map((imageUrl, index) => (
          <div className="relative aspect-square" key={imageUrl + "-" + index}>
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={`Promotion image ${index + 1}`}
              fill
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
