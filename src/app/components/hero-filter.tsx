"use client";

import { MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/common/date-picker";
import { Dropdown } from "@/components/common/select";

const holidayTypes = [
  {
    label: "Beach",
    value: "beach",
  },
  {
    label: "Adventure",
    value: "adventure",
  },
  {
    label: "Cultural",
    value: "cultural",
  },
  {
    label: "Relaxation",
    value: "relaxation",
  },
  {
    label: "Family",
    value: "family",
  },
];

export default function HeroFilter() {
  return (
    <div className="bg-white backdrop-blur-sm rounded-lg xl:rounded-2xl shadow-lg pointer-events-auto h-[307px] sm:h-auto py-5 sm:py-0 xl:w-[1000px] 2xl:w-[1350px] font-onest">
      <div className="p-4 md:p-6 lg:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-5 w-full xl:py-5 sm:items-center gap-2">
          <div className="flex flex-col gap-1 w-full sm:w-auto sm:min-w-[100px]">
            <span
              className="text-tiny lg:text-xs xl:text-base 2xl:text-lg text-navbar uppercase lg:font-[600] font-semibold"
              style={{ letterSpacing: "-2.5%" }}
            >
              I want to travel to...
            </span>
            <div className="flex items-center h-10 gap-2 p-3 rounded-md bg-transparent -ms-3">
              <MapPin className="size-4 text-navbar shrink-0" />
              <span className="text-tiny lg:text-xs xl:text-md 2xl:text-lg font-normal">
                Bali, Indonesia
              </span>
            </div>
          </div>

          {/* Date Pickers - Will wrap naturally */}
          <div className="flex gap-2 sm:col-span-2">
            <DatePicker label="From" />
            <DatePicker label="To" />
          </div>

          {/* Holiday Type */}
          <div className="w-full">
            <Dropdown
              options={holidayTypes}
              placeholder="Select type"
              label="Type of Holidays"
            />
          </div>

          {/* Actions - Clear and Search */}
          <div className="flex flex-col gap-1 sm:items-center">
            <span
              className="hidden sm:block font-normal text-tiny lg:text-xs xl:text-md 2xl:text-lg text-navbar tracking-wide sm:tracking-normal xl:text-start font-onest 2xl:-ms-3"
              style={{ letterSpacing: "-2.5%" }}
            >
              Clear Filters
            </span>
            <Button className="py-5 text-tiny lg:text-xs xl:text-md 2xl:text-lg text-white 2xl:w-[136px] 2xl:h-[51px]">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
