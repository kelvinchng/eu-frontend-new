import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

const gradientOverlay = `linear-gradient(180deg, 
    rgba(7, 7, 7, 0.71) 0%, 
    rgba(23, 23, 23, 0.6) 10.2%, 
    rgba(38, 38, 38, 0) 16.2%, 
    rgba(53, 53, 53, 0) 25.2%, 
    rgba(44, 44, 44, 0) 69.8%, 
    rgba(36, 36, 36, 0.612) 84.1%, 
    rgba(7, 7, 7, 0.749) 100%
)`;

interface ThemeOption {
  id: number;
  title: string;
  descriptions: string;
  image: string;
}

interface TourByThemeProps {
  themes: ThemeOption[];
}

export const TourByTheme = ({ themes }: TourByThemeProps) => {
  return (
    <div className="flex gap-2 md:gap-4">
      {themes.map((theme) => (
        <div
          className="w-[265px] sm:w-[295] md:w-[345px] lg:w-[285px] xl:w-[275px] 2xl:w-[325px] xl:min-h-[499px] 2xl:min-h-[510px] min-h-[427px] rounded-xl flex flex-col justify-between flex-shrink-0 gap-2 border border-gray-200 p-10"
          key={theme.id}
          style={{
            backgroundImage: `${gradientOverlay}, url(${theme.image})`,
          }}
        >
          <span className=" font-thunder text-white text-2xl md:text-3xl xl:text-[40px] font-[400]">
            {theme.title}
          </span>
          <div className="flex flex-col gap-6">
            <span className="text-white text-sm xl:text-lg 2xl:text-xl font-[400] font-onest">
              {theme.descriptions}
            </span>
            <Button variant={"secondary"} className="max-w-max">
              View More
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
