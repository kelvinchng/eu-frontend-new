import React, { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";

interface DatePickerProps {
  label: string;
}

export function DatePicker({ label }: DatePickerProps) {
  const [date, setDate] = useState<Date>();

  return (
    <div className="flex flex-col gap-1 min-w-[100px] flex-1">
      <span
        className=" text-tiny lg:text-xs xl:text-md 2xl:text-lg text-navbar uppercase tracking-wide font-semibold"
        style={{ letterSpacing: "-2.5%" }}
      >
        {label}
      </span>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "justify-start text-left font-normal h-10 px-3 border-none shadow-none -ms-3 2xl:-ms-4 ",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 size-4 text-navbar" />
            {date ? (
              format(date, "PPP")
            ) : (
              <span className="text-tiny lg:text-xs xl:text-md 2xl:text-lg text-navbar">
                Pick a date
              </span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
