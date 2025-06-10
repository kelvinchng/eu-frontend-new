import React from "react";
import Image from "next/image";
import { TravelCard } from "../../components/travel-card";
import { Button } from "@/components/ui/button";

const essentialDetails = {
  tourImage: "/assets/lake.jpg",
  mainTitle: " Explore Switzerland",
  history: {
    title: "Background of Switzerland",
    body: "Switzerland is where history, culture, and natural beauty come together effortlessly. From the serene lakes of Lucerne to the colorful villages of the Alps, every view feels like a postcard. Explore world-class museums, hike through charming towns, or admire iconic peaks like the Matterhorn. Whether you're savoring Swiss chocolate, discovering art, or soaking in breathtaking landscapes, Switzerland offers unforgettable moments at every turn.",
    image: "/assets/bicycle.jpg",
  },
  tourTitle: " Switzerland Tours",
  featureTours: [
    {
      id: 1,
      image: "/assets/flowerfeature.png",
      title: "10D7N Northern Italy & The Grand Dolomites",
      price: "fr $438/pax",
      descriptions:
        "Sunkissed Switzerland is an equally dreamy destination to explore in summer – with its incredible scenery filled in with color, spectacularly blue lakes and awesome weather to boot.",
      bestSeller: false,
    },
    {
      id: 2,
      image: "/assets/carfeature.png",
      title: "10D7N Northern Italy & The Grand Dolomites",
      price: "fr $438/pax",
      descriptions:
        "Sunkissed Switzerland is an equally dreamy destination to explore in summer – with its incredible scenery filled in with color, spectacularly blue lakes and awesome weather to boot.",
      bestSeller: true,
    },
    {
      id: 3,
      image: "/assets/mountainfeature.png",
      title: "10D7N Northern Italy & The Grand Dolomites",
      price: "fr $438/pax",
      descriptions:
        "Sunkissed Switzerland is an equally dreamy destination to explore in summer – with its incredible scenery filled in with color, spectacularly blue lakes and awesome weather to boot.",
      bestSeller: false,
    },
    {
      id: 4,
      image: "/assets/flowerfeature.png",
      title: "10D7N Northern Italy & The Grand Dolomites",
      price: "fr $438/pax",
      descriptions:
        "Sunkissed Switzerland is an equally dreamy destination to explore in summer – with its incredible scenery filled in with color, spectacularly blue lakes and awesome weather to boot.",
      bestSeller: false,
    },
    {
      id: 5,
      image: "/assets/carfeature.png",
      title: "10D7N Northern Italy & The Grand Dolomites",
      price: "fr $438/pax",
      descriptions:
        "Sunkissed Switzerland is an equally dreamy destination to explore in summer – with its incredible scenery filled in with color, spectacularly blue lakes and awesome weather to boot.",
      bestSeller: true,
    },
    {
      id: 6,
      image: "/assets/mountainfeature.png",
      title: "10D7N Northern Italy & The Grand Dolomites",
      price: "fr $438/pax",
      descriptions:
        "Sunkissed Switzerland is an equally dreamy destination to explore in summer – with its incredible scenery filled in with color, spectacularly blue lakes and awesome weather to boot.",
      bestSeller: false,
    },
  ],
  moreCountries: [
    {
      id: 1,
      name: "France",
      noOfTours: 56,
      image: "/assets/japan.png",
    },
    {
      id: 2,
      name: "Italy",
      noOfTours: 25,
      image: "/assets/japan.png",
    },
    {
      id: 3,
      name: "Netherlands",
      noOfTours: 60,
      image: "/assets/japan.png",
    },
    {
      id: 4,
      name: "Switzerland",
      noOfTours: 29,
      image: "/assets/japan.png",
    },
    {
      id: 5,
      name: "Ireland",
      noOfTours: 46,
      image: "/assets/japan.png",
    },
    {
      id: 6,
      name: "Norway",
      noOfTours: 23,
      image: "/assets/japan.png",
    },
    {
      id: 7,
      name: "Potugal",
      noOfTours: 12,
      image: "/assets/japan.png",
    },
    {
      id: 8,
      name: "Spain",
      noOfTours: 32,
      image: "/assets/japan.png",
    },
  ],
};

const Explore = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Navigation */}
      <div className="relative h-[643px] xl:h-[800px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={essentialDetails.tourImage}
            alt={essentialDetails.mainTitle}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1536px) 100vw, 1920px"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Hero Title */}
        <div className="absolute bottom-8 w-full transform  z-20  px-10 lg:px-12 xl:px-26">
          <div className="mx-auto max-w-[1500px] relative font-thunder ">
            <span className="text-white text-[46px] font-[400] tracking-normal sm:text-[56px] md:text-[70px] lg:text-[90px] xl:text-[100px] 2xl:text-[110px] max-sm:max-w-[300px] max-[400px]:mx-0 max-[500px]:-mx-4 leading-[100%] sm:leading-normal">
              {essentialDetails.mainTitle}
            </span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white px-6 py-16 lg:px-12 xl:px-26">
        <div className="mx-auto max-w-[1500px]">
          <div className="lg:grid flex flex-col-reverse lg:grid-cols-2 ">
            {/* Left Column - Text Content */}
            <div className=" space-y-3 bg-[#EFEFEF] px-8 py-10 lg:p-16  max-[1024px]:rounded-b-2xl lg:rounded-l-2xl">
              <h2 className="text-3xl font-thunder font-normal text-navbar ">
                {essentialDetails.history.title}
              </h2>
              <div className="font-onest text-lg font-normal text-navbar leading-[30px] h-auto overflow-auto">
                <p>{essentialDetails.history.body}</p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative  max-[1024px]:rounded-t-2xl lg:rounded-r-xl">
              <Image
                src={essentialDetails.history.image}
                alt={essentialDetails.history.title}
                width={600}
                height={400}
                className="h-full w-full object-cover  max-[1024px]:rounded-t-2xl lg:rounded-r-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white px-6 pb-16 lg:px-12 xl:px-26">
        <div className="mx-auto max-w-[1500px] space-y-5">
          <h1 className=" font-thunder font-medium text-4xl md:text-[50px] text-navbar">
            {essentialDetails.tourTitle}
          </h1>
          <div className="flex flex-wrap gap-14 justify-center lg:justify-between">
            {essentialDetails.featureTours.map((tour) => (
              <TravelCard tour={tour} key={tour.id} />
            ))}
          </div>
          {/* View All Button */}
          <div className="mt-16 text-center">
            <Button className="bg-navbar hover:black/10 text-white px-6 py-2 font-onest font-normal text-lg">
              View All
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-white px-6 pb-16 lg:px-12 xl:px-26">
        <div className="mx-auto max-w-[1500px] space-y-5">
          <div>
            {/* View More Countries Section */}
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-thunder text-[32px] md:text-[50px] font-medium text-navbar ">
                View More Countries
              </h2>
              <p className="mx-auto max-w-2xl text-navbar font-onest font-normal text-[13px] md:text-[25px]">
                Join thousands of happy travellers who trust EU Holidays to make
                their journey unforgettable.
              </p>
            </div>

            {/* Countries Grid */}
            <div className="grid grid-cols-3 gap-8 sm:grid-cols-4 lg:gap-12 ">
              {essentialDetails.moreCountries.map((country) => (
                <div className="text-center" key={country.id}>
                  <div className="mx-auto mb-4 w-[93px] h-[93px]  2xl:h-[200px] 2xl:w-[200px] overflow-hidden rounded-full lg:h-40 lg:w-40">
                    <Image
                      src={country.image}
                      alt={country.name}
                      width={93}
                      height={93}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mb-1 text-[20px] lg:text-[50px] font-medium text-navbar font-thunder">
                    {country.name}
                  </h3>
                  <p className=" text-navbar font-onest font-medium text-[13px] lg:text-[20px]">
                    {country.noOfTours} Tours
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
