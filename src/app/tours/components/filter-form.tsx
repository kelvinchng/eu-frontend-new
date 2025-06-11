"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  MapPin,
  Calendar,
  TreePalmIcon as PalmTree,
  Clock,
  SlidersHorizontal,
} from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/useMobile";

// Sample data
const destinations = [
  "Switzerland",
  "Italy",
  "France",
  "Spain",
  "Greece",
  "Portugal",
  "Germany",
  "Austria",
  "Croatia",
  "Netherlands",
];

const holidayTypes = [
  "Group Holiday",
  "Family Vacation",
  "Solo Trip",
  "Romantic Getaway",
  "Adventure Trip",
  "Cultural Tour",
  "Beach Holiday",
  "City Break",
];

const durations = [
  "1 - 3 Days",
  "4 - 5 Days",
  "6 - 9 Days",
  "10 - 14 Days",
  "15+ Days",
];

const sortOptions = [
  "Price: Low to High",
  "Price: High to Low",
  "Popularity",
  "Rating",
  "Duration",
];

type FormValues = {
  destination: string;
  fromDate: Date | undefined;
  toDate: Date | undefined;
  holidayType: string;
  duration: string;
  sortBy: string;
};

export default function FilterForm() {
  const [fromDate, setFromDate] = useState<Date>();
  const [toDate, setToDate] = useState<Date>();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      destination: "Switzerland",
      holidayType: "Group Holiday",
      duration: "6 - 9 Days",
      sortBy: "Price: Low to High",
    },
  });

  useEffect(() => {
    if (!isMobile) {
      setIsFilterVisible(true);
    }
  }, [isMobile]);

  const onSubmit = (data: FormValues) => {
    // Include the date objects in the submission
    const formData = {
      ...data,
      fromDate,
      toDate,
    };
    console.log(formData);
    // Here you would typically send this data to an API
    if (isMobile) {
      setIsFilterVisible(false);
    }
  };

  const handleClearFilters = () => {
    reset({
      destination: "",
      holidayType: "",
      duration: "",
      sortBy: "",
    });
    setFromDate(undefined);
    setToDate(undefined);
  };

  const toggleFilters = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div className="w-full mx-auto bg-white rounded-lg ">
      {/* Mobile Filter Toggle */}
      {isMobile && (
        <div className="flex items-center justify-between mb-4 md:hidden">
          <h2 className="text-[25px] font-normal font-thunder">Filter</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleFilters}
            aria-label="Toggle filters"
          >
            <SlidersHorizontal className="h-5 w-5" />
          </Button>
        </div>
      )}

      <div
        className={cn(
          "transition-all duration-300 ease-in-out overflow-hidden",
          isMobile && !isFilterVisible
            ? "max-h-0 opacity-0"
            : "max-h-[2000px] opacity-100"
        )}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mx-2">
          {/* Top row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <label className="pl-3 text-sm sm:text-lg font-[700] sm:font-semibold font-onest text-navbar uppercase tracking-wide">
                DESTINATION
              </label>
              <Select
                defaultValue={watch("destination")}
                onValueChange={(value) => setValue("destination", value)}
              >
                <SelectTrigger className="w-full border-none shadow-none">
                  <div className="flex items-center gap-2 font-onest font-normal font-sm 2xl:text-lg">
                    <MapPin className="w-4 h-4 text-navbar  " />
                    <SelectValue placeholder="Select destination" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {destinations.map((destination) => (
                    <SelectItem key={destination} value={destination}>
                      {destination}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <hr className="border-gray-200 md:hidden" />
            </div>

            <div className="space-y-2">
              <label className="pl-3 text-sm sm:text-lg font-[700] sm:font-semibold font-onest text-navbar uppercase tracking-wide">
                FROM
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full border-none shadow-none justify-start text-left font-normal font-onest font-sm 2xl:text-lg",
                      !fromDate && "text-muted-foreground"
                    )}
                  >
                    <Calendar className="mr-2 h-4 w-4 text-navbar" />
                    {fromDate ? (
                      format(fromDate, "PPP")
                    ) : (
                      <span className="font-onest text-navbar font-normal font-sm 2xl:text-lg">
                        Pick a date
                      </span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={fromDate}
                    onSelect={setFromDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <hr className="border-gray-200 md:hidden" />
            </div>

            <div className="space-y-2">
              <label className="pl-3 text-sm sm:text-lg font-[700] sm:font-semibold font-onest text-navbar uppercase tracking-wide">
                TO
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full border-none shadow-none justify-start text-left font-normal font-onest font-sm 2xl:text-lg",
                      !toDate && "text-muted-foreground"
                    )}
                  >
                    <Calendar className="mr-2 h-4 w-4 text-navbar" />
                    {toDate ? (
                      format(toDate, "PPP")
                    ) : (
                      <span className="font-onest text-navbar font-normal font-sm 2xl:text-lg">
                        Pick a date
                      </span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={toDate}
                    onSelect={setToDate}
                    disabled={(date) => (fromDate ? date < fromDate : false)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <hr className="border-gray-200 md:hidden" />
            </div>

            <div className="space-y-2">
              <label className="pl-3 text-sm sm:text-lg font-[700] sm:font-semibold font-onest text-navbar uppercase tracking-wide">
                TYPE OF HOLIDAY
              </label>
              <Select
                defaultValue={watch("holidayType")}
                onValueChange={(value) => setValue("holidayType", value)}
              >
                <SelectTrigger className="w-full border-none shadow-none">
                  <div className="flex items-center gap-2 font-normal font-onest font-sm 2xl:text-lg">
                    <PalmTree className="w-4 h-4 text-navbar" />
                    <SelectValue placeholder="Select holiday type" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {holidayTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <hr className="border-gray-200 md:hidden" />
            </div>
          </div>

          <hr className="border-gray-200 max-md:hidden" />

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2 w-full md:w-48">
              <label className="pl-3 text-sm sm:text-lg font-[700] sm:font-semibold font-onest text-navbar uppercase tracking-wide">
                DURATION
              </label>
              <Select
                defaultValue={watch("duration")}
                onValueChange={(value) => setValue("duration", value)}
              >
                <SelectTrigger className="w-full border-none shadow-none">
                  <div className="flex items-center gap-2 font-normal font-onest font-sm 2xl:text-lg">
                    <Clock className="w-4 h-4 text-navbar" />
                    <SelectValue placeholder="Select duration" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {durations.map((duration) => (
                    <SelectItem key={duration} value={duration}>
                      {duration}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <hr className="border-gray-200 md:hidden" />
            </div>

            <div className="space-y-2 w-full md:w-48">
              <label className="pl-3 text-sm sm:text-lg font-[700] sm:font-semibold font-onest text-navbar uppercase tracking-wide">
                SORT BY
              </label>
              <Select
                defaultValue={watch("sortBy")}
                onValueChange={(value) => setValue("sortBy", value)}
              >
                <SelectTrigger className="w-full border-none shadow-none">
                  <div className="flex items-center gap-2 font-normal font-onest font-sm 2xl:text-lg">
                    <SelectValue placeholder="Select sort option" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <hr className="border-gray-200 md:hidden" />
            </div>

            <div className="flex justify-end gap-3 mt-4 md:mt-0">
              <Button
                type="submit"
                className="px-8 py-3 bg-navbar text-white rounded-md hover:bg-black/10 transition-colors"
              >
                Search
              </Button>
              <Button
                type="button"
                onClick={handleClearFilters}
                variant="outline"
                className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Clear Filters
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
