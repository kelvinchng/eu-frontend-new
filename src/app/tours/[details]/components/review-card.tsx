import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star } from "lucide-react";

export type Testimonial = {
  id: string;
  avatarSrc: string;
  name: string;
  timestamp: string;
  text: string;
  verified?: boolean;
  rating?: number; // Optional rating (1-5)
};

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const MAX_TEXT_LENGTH = 150;

export default function ReviewCard({ testimonial }: TestimonialCardProps) {
  const isLongText = testimonial.text.length > MAX_TEXT_LENGTH;
  const displayText = isLongText
    ? testimonial.text.substring(0, MAX_TEXT_LENGTH) + "..."
    : testimonial.text;

  const rating = testimonial.rating ?? 0;

  return (
    <Card className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
      <CardContent className="p-5 sm:p-6 flex flex-col flex-grow">
        <div className="flex items-start gap-3 mb-3">
          <Image
            src={testimonial.avatarSrc || "/placeholder.svg"}
            alt={`${testimonial.name}'s avatar`}
            width={40}
            height={40}
            className="rounded-full mt-0.5"
          />
          <div className="flex-1">
            <div className="flex items-center gap-1.5">
              <h3 className="text-sm font-semibold text-neutral-800">
                {testimonial.name}
              </h3>
              {testimonial.verified && (
                <CheckCircle
                  size={16}
                  className="text-blue-500 fill-blue-500"
                />
              )}
            </div>
            <p className="text-xs text-neutral-500">{testimonial.timestamp}</p>
          </div>
        </div>

        {rating > 0 && (
          <div className="flex items-center gap-0.5 mb-2.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={
                  i < rating
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-neutral-300 fill-neutral-300"
                }
              />
            ))}
          </div>
        )}

        <p className="text-sm text-neutral-700 leading-relaxed flex-grow">
          {displayText}
        </p>

        {isLongText && (
          <button className="text-xs text-neutral-500 hover:text-neutral-700 mt-3 self-start">
            Read more
          </button>
        )}
      </CardContent>
    </Card>
  );
}
