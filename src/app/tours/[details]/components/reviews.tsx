"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; // For conditional class names
import ReviewCard, { Testimonial } from "./review-card";

const ITEMS_PER_LOAD = 2; // Number of items to load each time

type TestimonialSource = "sourceA" | "sourceB";

const allTestimonialsData: Record<TestimonialSource, Testimonial[]> = {
  sourceA: [
    {
      id: "a1",
      avatarSrc: "/placeholder.svg?width=40&height=40",
      name: "SHIRLEY LIM",
      timestamp: "1 day ago",
      text: "✨🇳🇴 Source A: Norway, you were magical! ✨❄️ Just wrapped up an amazing 10D Aurora tour...",
      verified: true,
      rating: 5,
    },
    {
      id: "a2",
      avatarSrc: "/placeholder.svg?width=40&height=40",
      name: "LEE JANE",
      timestamp: "1 day ago",
      text: "Source A: 13D10N Spain and Portugal. Tour Manager: Jimmy Lau. He shared great info...",
      verified: true,
      rating: 4,
    },
    {
      id: "a3",
      avatarSrc: "/placeholder.svg?width=40&height=40",
      name: "RACHEL CHUA",
      timestamp: "2 days ago",
      text: "Source A: EU Fantasy Tour, wonderful holiday with Tour Manager, Nick Cheah...",
      verified: true,
    },
    {
      id: "a4",
      avatarSrc: "/placeholder.svg?width=40&height=40",
      name: "IRENE FOO",
      timestamp: "3 days ago",
      text: "Source A: Highly recommended tour featuring attractive destinations and exquisite cuisine...",
      verified: true,
      rating: 5,
    },
    {
      id: "a5",
      avatarSrc: "/placeholder.svg?width=40&height=40",
      name: "DAVID LEE",
      timestamp: "4 days ago",
      text: "Source A: Amazing experience, everything was well organized. Will book again!",
      verified: true,
      rating: 5,
    },
  ],
  sourceB: [
    {
      id: "b1",
      avatarSrc: "/placeholder.svg?width=40&height=40",
      name: "KUENGSIAH CHOO",
      timestamp: "3 days ago",
      text: "Source B: It's been a 5 stars trip for me and my family with EU Holidays recently to Europe...",
      verified: true,
      rating: 5,
    },
    {
      id: "b2",
      avatarSrc: "/placeholder.svg?width=40&height=40",
      name: "HELEN Y",
      timestamp: "1 week ago",
      text: "Source B: Joined a 13 days tour with EU in March. Hotels were clean and well located...",
      verified: true,
      rating: 5,
    },
    {
      id: "b3",
      avatarSrc: "/placeholder.svg?width=40&height=40",
      name: "YIP MEE LING",
      timestamp: "1 week ago",
      text: "Source B: Very happy and satisfied with the tour to Finland, Sweden and Norway...",
      verified: true,
      rating: 4,
    },
    {
      id: "b4",
      avatarSrc: "/placeholder.svg?width=40&height=40",
      name: "MA EDELWEISS",
      timestamp: "2 weeks ago",
      text: "Source B: Attended the 13D10N Highlights of Eastern Europe tour! Thoroughly enjoyed it...",
      verified: true,
    },
    {
      id: "b5",
      avatarSrc: "/placeholder.svg?width=40&height=40",
      name: "JOHN TAN",
      timestamp: "3 weeks ago",
      text: "Source B: Great itinerary, friendly staff, and comfortable transport. Highly recommend.",
      verified: true,
      rating: 5,
    },
  ],
};

export default function TestimonialsSection() {
  const [activeSource, setActiveSource] =
    useState<TestimonialSource>("sourceA");
  const [visibleCounts, setVisibleCounts] = useState<
    Record<TestimonialSource, number>
  >({
    sourceA: ITEMS_PER_LOAD,
    sourceB: ITEMS_PER_LOAD,
  });

  const handleLoadMore = (source: TestimonialSource) => {
    setVisibleCounts((prev) => ({
      ...prev,
      [source]: prev[source] + ITEMS_PER_LOAD,
    }));
  };

  const getVisibleTestimonials = (source: TestimonialSource) => {
    return allTestimonialsData[source].slice(0, visibleCounts[source]);
  };

  const sources: { key: TestimonialSource; name: string }[] = [
    { key: "sourceA", name: "Facebook Reviews" }, // Example names
    { key: "sourceB", name: "Google Reviews" }, // Example names
  ];

  return (
    <section className="container h-full mx-auto px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8 sm:mb-12">
        Testimonials
      </h2>

      {/* Mobile Toggles */}
      <div className="sm:hidden flex justify-center gap-2 mb-6">
        {sources.map((source) => (
          <Button
            key={source.key}
            variant="outline"
            onClick={() => setActiveSource(source.key)}
            className={cn(
              "border-neutral-600 text-neutral-300 hover:bg-neutral-700 hover:text-white",
              activeSource === source.key && "bg-neutral-700 text-white"
            )}
          >
            {source.name}
          </Button>
        ))}
      </div>

      {/* Testimonials Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8">
        {/* Mobile View: Single Column for Active Source */}
        <div className="sm:hidden space-y-6">
          {getVisibleTestimonials(activeSource).map((testimonial) => (
            <ReviewCard key={testimonial.id} testimonial={testimonial} />
          ))}
          {visibleCounts[activeSource] <
            allTestimonialsData[activeSource].length && (
            <div className="text-center pt-2">
              <Button
                onClick={() => handleLoadMore(activeSource)}
                variant="secondary"
                className="bg-neutral-700 hover:bg-neutral-600 text-white px-8 py-3 rounded-lg text-sm font-medium"
              >
                Load More
              </Button>
            </div>
          )}
        </div>

        {/* Desktop View: Two Columns */}
        {sources.map((source) => (
          <div key={source.key} className="hidden sm:block space-y-6">
            <h3 className="text-xl font-semibold text-neutral-200 mb-4 text-center sm:text-left">
              {source.name}
            </h3>
            {getVisibleTestimonials(source.key).map((testimonial) => (
              <ReviewCard key={testimonial.id} testimonial={testimonial} />
            ))}
            {visibleCounts[source.key] <
              allTestimonialsData[source.key].length && (
              <div className="text-center pt-2">
                <Button
                  onClick={() => handleLoadMore(source.key)}
                  variant="secondary"
                  className="bg-neutral-700 hover:bg-neutral-600 text-white px-8 py-3 rounded-lg text-sm font-medium"
                >
                  Load More
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
