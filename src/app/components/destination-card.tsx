import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface DestinationOption {
  id: number;
  title: string;
  image: string;
}

interface DestinationCardProps {
  destinations: DestinationOption[];
}

const gradientOverlay = `linear-gradient(180deg, 
    rgba(7, 7, 7, 0) 0%, 
    rgba(23, 23, 23, 0) 23.1%, 
    rgba(38, 38, 38, 0) 34.3%, 
    rgba(44, 44, 44, 0) 70.7%, 
    rgba(36, 36, 36, 0.612) 73.9%, 
    rgba(7, 7, 7, 0.749) 100%
)`;

export const DestinationCard = ({ destinations }: DestinationCardProps) => {
  return (
    <div className="flex gap-2 md:gap-4">
      {destinations.map((destination) => (
        <Link key={destination.id} href={`/${destination.title}`}>
          <div
            className="w-[265px] sm:w-[295] md:w-[345px] lg:w-[285px] xl:w-[275px] 2xl:w-[325px] xl:min-h-[499px] 2xl:min-h-[510px] min-h-[427px] rounded-xl flex flex-col flex-shrink-0 gap-2 border border-gray-200"
            style={{
              backgroundImage: `${gradientOverlay}, url(${destination.image})`,
            }}
          >
            <span className="absolute bottom-10 ps-10 z-20 pointer-events-none flex items-center gap-2 text-white font-thunder text-2xl md:text-3xl xl:text-[40px] font-[400] w-full">
              {destination.title}
              <ArrowRight />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};
