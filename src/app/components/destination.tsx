"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { TravelCard } from "./travel-card";
import { ArrowRight } from "lucide-react";

interface DestinationOption {
  id: number;
  title: string;
  image: string;
}

interface DestinationCarousel {
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

export default function Destination({ destinations }: DestinationCarousel) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <section>
      <div
        ref={emblaRef}
        className="overflow-hidden rounded-xl min-h-[450px] sm:min-h-[480px]"
      >
        <div className="flex gap-2 md:gap-4">
          {destinations.map((destination) => (
            <div
              className="w-[265px] sm:w-[295] md:w-[345px] lg:w-[285px] xl:w-[275px] 2xl:w-[313px] xl:min-h-[499px] min-h-[427px] rounded-xl flex flex-col flex-shrink-0 gap-2 border border-gray-200"
              key={destination.id}
              style={{
                backgroundImage: `${gradientOverlay}, url(${destination.image})`,
              }}
            >
              <span className="absolute bottom-10 ps-10 z-20 pointer-events-none flex items-center gap-2 text-white font-thunder text-2xl md:text-3xl xl:text-[40px] font-[400] w-full">
                {destination.title}
                <ArrowRight />
              </span>
            </div>
          ))}
        </div>
      </div>
      {scrollSnaps.length > 1 && (
        <div className="flex justify-center gap-2 mt-4 xl:mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`size-[9px] rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2
                ${
                  index === selectedIndex
                    ? "bg-black"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
