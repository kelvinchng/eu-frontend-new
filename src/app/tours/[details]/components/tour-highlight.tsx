import type React from "react";
import { SearchIcon as SearchPlus, SearchX, Star } from "lucide-react";
import { default as NextImage } from "next/image";

// Sample data structures (replace with your actual data)
const exclusivesData = [
  "Top Mountain Excursion: Gornergrat, Glacier 3000",
  "Panoramic Train: In the French-Swiss Alps",
  "Experience Cruise on the largest lake in the Bernese Oberland",
];

const switzerlandLocations = [
  {
    name: "ZÜRICH",
    points: ["Old Town", "Münsterbrücke", "Lindenhof", "Fraumünster"],
  },
  {
    name: "BERN",
    points: [
      "Old Town",
      "Bear Pit",
      "Zytglogge Clock Tower",
      "House of Parliament",
    ],
  },
  { name: "MONTREUX", points: ["Chillon Castle"] },
  {
    name: "LES DIABLERETS",
    points: [
      "Glacier 3000",
      "Peak Walk by Tissot",
      "Ice Express chairlift",
      "Fun Park",
      "Alpine Coaster*",
    ],
  },
  {
    name: "MARTIGNY",
    points: ["Thermal Baths", "Mont-Blanc Express Train", "Chamonix"],
  },
  {
    name: "ZERMATT",
    points: ["Gornergrat Bahn", "View of Matterhorn", "Zermatt Village"],
  },
  {
    name: "BERNESE OBERLAND",
    points: ["Spiez", "Lake Thun Boat Ride", "Interlaken"],
  },
  {
    name: "LUCERNE",
    points: ["Old Chapel Bridge", "Lion Monument", "Old Town", "Bucherer"],
  },
];

const specialtiesData = ["Raclette Tasting", "Swiss Fondue & Wine"];
const mealPlanData = ["8 Breakfasts", "4 Dinners"];
const hotelsData = [
  { location: "Bern", name: "Holiday Inn" },
  { location: "Martigny", name: "Les Bains de Saillon" },
  { location: "Saas Fee 5★", name: "Walliserhof Grand-Hotel & Spa" },
  { location: "Interlaken", name: "Metropole" },
  { location: "Zürich", name: "IntercityHotel" },
];

const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="text-sm 2xl:text-lg text-gray-700 font-onest font-[400]">
    {children}
  </li>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className=" text-[#242424] mt-6 font-thunder font-[500] text-4xl 2xl:text-5xl mb-4">
    {children}
  </h3>
);

const LocationTitle = ({ children }: { children: React.ReactNode }) => (
  <h4 className="text-[#242424] mt-4 mb-1 uppercase text-sm 2xl:text-lg font-onest font-[700]">
    {children}
  </h4>
);

export default function TourHighlights() {
  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl  font-bold text-center text-[#242424] mb-10 font-thunder 2xl:text-5xl">
        Tour Highlights
      </h2>

      {/* Main content area: flex-col for mobile, 2-col grid for sm+ */}
      <div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-6">
        {/* Left Column Card (Exclusives & Switzerland Details) */}
        {/* Mobile: order-2 */}
        {/* Desktop: order-1, spans 1 column and 2 rows to match height of right stacked cards */}
        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg order-2 sm:order-1 sm:row-span-2 mb-6 sm:mb-0">
          <h3 className="font-thunder font-[500] text-4xl 2xl:text-5xl text-[#242424] mb-4">
            Exclusives
          </h3>
          <ul className="list-disc list-inside space-y-1 mb-6">
            {exclusivesData.map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </ul>

          <SectionTitle>Switzerland</SectionTitle>
          {switzerlandLocations.map((loc) => (
            <div key={loc.name} className="mb-4">
              <LocationTitle>{loc.name}</LocationTitle>
              <ul className="list-disc list-inside space-y-1">
                {loc.points.map((point) => (
                  <ListItem key={point}>{point}</ListItem>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Map Card */}
        {/* Mobile: order-1 */}
        {/* Desktop: order-2, placed in the second column, first row */}
        <div className="bg-[#e2f4fd] rounded-xl p-4 sm:p-6 shadow-lg relative order-1 sm:order-2 mb-6 sm:mb-0">
          <NextImage
            src="/assets/map.png" // Placeholder for map.png
            alt="Tour Map"
            width={600}
            height={400}
            className="rounded-md w-full h-auto"
          />
          <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow">
            <SearchX className="h-5 w-5 text-[#242424]" />
          </button>
        </div>

        {/* Right Column Bottom Card (Specialties, Delicacies, Hotels) */}
        {/* Mobile: order-3 */}
        {/* Desktop: order-3, placed in the second column, second row */}
        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg order-3 sm:order-3">
          <SectionTitle>Specialties</SectionTitle>
          <ul className="list-disc list-inside space-y-1">
            {specialtiesData.map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </ul>

          <SectionTitle>Delicacies</SectionTitle>
          <h4 className="text-md my-1 uppercase font-onest font-[700] text-sm text-[#242424]">
            MEAL PLAN
          </h4>
          <ul className="list-disc list-inside space-y-1">
            {mealPlanData.map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </ul>

          <SectionTitle>
            4 to 5{" "}
            <Star className="inline-block h-6 w-6 mb-1 fill-black text-black 2xl:h-10 2xl:w-10" />{" "}
            Hotels
          </SectionTitle>
          <ul className="space-y-1">
            {hotelsData.map((hotel) => (
              <li
                key={hotel.name}
                className="text-sm font-[400] 2xl:text-lg font-onest"
              >
                <span className="text-black font-bold">{hotel.location}:</span>{" "}
                <span className="text-[#242424] font-onest font-[400]">
                  {hotel.name}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-[#242424] 2xl:text-lg mt-4 font-onest font-[400]">
            <span className="font-[700]">Note:</span> Hotels are subject to
            final confirmation. Due to limited availability, relocation to
            another city or provision of a 4-star hotel may occur without prior
            notice.
          </p>
        </div>
      </div>
    </div>
  );
}
