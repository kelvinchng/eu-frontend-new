import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import TourHighlights from "./tour-highlight";

const tabItems = [
  { value: "itinerary", label: "Itinerary" },
  { value: "testimonials", label: "Testimonials" },
  { value: "tour-photos", label: "Tour Photos" },
  { value: "faq", label: "FAQ" },
];

const TourTabs = () => {
  const [activeTab, setActiveTab] = useState(tabItems[0].value);
  return (
    <div className="flex flex-col h-full">
      <div className="w-full">
        <Tabs
          defaultValue={activeTab}
          onValueChange={setActiveTab}
          className="w-full max-w-[1480px]"
        >
          <TabsList
            className="
          bg-transparent p-0 h-auto justify-start
          sm:bg-transparent sm:gap-2 sm:flex sm:flex-row
        "
          >
            {tabItems.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className={`
                sm:text-sm rounded-none sm:rounded-md
                px-2 py-2 sm:px-4 sm:py-2.5
                focus-visible:ring-0 focus-visible:ring-offset-0 
                data-[state=active]:shadow-none font-onest  text-base mt-6 sm:border sm:border-[#242424] 
                
                // Mobile styles (bottom border for active)
                text-gray-500 data-[state=active]:text-black data-[state=active]:font-[700] font-[400] border-b-2 border-transparent
                data-[state=active]:border-b-[#242424]

                // Desktop styles (button-like for active/inactive)
                sm:bg-white sm:text-black 2xl:text-lg 2xl:px-20 2xl:py-4 2xl:rounded-md
                sm:data-[state=active]:bg-[#242424] sm:data-[state=active]:text-white
              `}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {/* Optional: Add TabsContent for each tab if needed */}
          {tabItems.map((tab) => (
            <TabsContent
              key={`${tab.value}-content`}
              value={tab.value}
              className="mt-4 text-black"
            >
              <TourHighlights />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default TourTabs;
