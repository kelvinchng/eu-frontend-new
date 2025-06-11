import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import TravelCarousel from "./travel-carousel";

export interface TourOption {
  id: number;
  image: string;
  title: string;
  price: string;
  descriptions: string;
  bestSeller: boolean;
}

interface ToursProps {
  title: string;
  titleClassName?: string;
  children: React.ReactNode;
  subTitle?: string;
  subTitleClassName?: string;
  link?: string;
}

export const Tour = ({
  title,
  titleClassName,
  children,
  subTitle,
  subTitleClassName,
  link,
}: ToursProps) => {
  return (
    <div className="h-full ps-5 sm:ps-0 sm:mx-auto space-y-6">
      {/* TITLE  */}
      <div className={`flex flex-col font-thunder ${titleClassName} `}>
        <h2 className="text-4xl font-[500] xl:text-5xl">{title}</h2>
        {subTitle ? (
          <span
            className={`flex items-center gap-2 text-sm md:text-lg xl:text-xl 2xl:text-3xl tracking-[1px] max-w-[600px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1150px] 2xl:max-w-[1350px] font-onest ${subTitleClassName}"
            }`}
          >
            {subTitle}
          </span>
        ) : (
          <Link
            href={link||""}
            className={`flex items-center gap-2 text-sm md:text-lg xl:text-xl 2xl:text-3xl tracking-[1px] font-onest ${subTitleClassName}`}
          >
            View all here <ArrowRight className="size-4 2xl:size-6" />
          </Link>
        )}
      </div>
      {/* CARD CONTENT  */}
      <div className="max-w-[600px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1150px] 2xl:max-w-[1350px] overflow-hidden">
        <TravelCarousel>{children}</TravelCarousel>
      </div>
    </div>
  );
};
