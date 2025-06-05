import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

const gradientOverlay = `linear-gradient(180deg, 
    rgba(7, 7, 7, 0) 0%, 
    rgba(44, 44, 44, 0) 67.3%, 
    rgba(36, 36, 36, 0.612) 87.6%, 
    rgba(7, 7, 7, 0.749) 100%
)`;

interface AdvertureOption {
  id: number;
  title: string;
  icon: React.JSX.Element;
  image: string;
}

interface AdventureProps {
  adventures: AdvertureOption[];
}

export const Adventure = ({ adventures }: AdventureProps) => {
  return (
    <div className="flex gap-2 md:gap-4">
      {adventures.map((tour) => (
        <div className="" key={tour.id}>
          <div
            className="w-[265px] sm:w-[295] md:w-[345px] lg:w-[285px] xl:w-[275px] 2xl:w-[325px] xl:min-h-[499px] 2xl:min-h-[510px] min-h-[427px] rounded-xl  flex-shrink-0 border border-gray-200 p-10 relative"
            style={{
              backgroundImage: ` url(${tour.image})`,
            }}
          >
            <div className="absolute -bottom-2 left-1 w-[63px] h-[63px] rounded-full flex flex-col justify-center items-center bg-black text-white">
              {tour.icon}
            </div>
          </div>
          <div className="flex flex-col mt-3 md:mt-6 ">
            <span className="text-4xl font-thunder font-[500] xl:text-[35px] 2xl:text-[45px]">
              {tour.title}
            </span>
            <Button
              variant={"ghost"}
              className="max-w-max -ms-2 lg:-ms-1 flex items-center gap-2 text-sm md:text-lg xl:text-xl 2xl:text-3xl tracking-[1px] font-onest"
            >
              View more <ArrowRight />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
