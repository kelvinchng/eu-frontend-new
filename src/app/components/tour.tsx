import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

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
  children: React.ReactNode;
}

export const Tour = ({ title, children }: ToursProps) => {
  return (
    <div className="h-full ps-8 sm:ps-0 sm:mx-auto space-y-6">
      {/* TITLE  */}
      <div className="flex flex-col font-thunder ">
        <h2 className="text-4xl font-[500] xl:text-5xl">{title}</h2>
        <Link
          href={"#"}
          className="flex gap-2 text-sm xl:text-xl tracking-[1px]"
        >
          View all here <ArrowRight className="size-4 " />
        </Link>
      </div>
      {/* CARD CONTENT  */}
      <div className="max-w-[600px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1150px] 2xl:max-w-[1300px] overflow-hidden">
        {children}
      </div>
    </div>
  );
};
