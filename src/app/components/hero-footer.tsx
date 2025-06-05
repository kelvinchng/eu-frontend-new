import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plane } from "lucide-react";
import Image from "next/image";


export default function HeroFooter() {
  return (
    <section className="relative min-h-screen flex items-center min-md:justify-start justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-center bg-no-repeat sm:bg-right-center"
        style={{
          backgroundImage: "url('/assets/footerbanner.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 container min-2xl:pl-[128px] px-8 py-20">
        <div className="max-w-3xl my-20">
          <div className=" absolute left-0 min-2xl:top-8 min-[600px]:top-24 top-22 w-[250px] min-[600px]:w-[400px] min-2xl:w-[600px] min-2xl:h-[200px] h-[100px]">
            <Image
              src={"/assets/plan.png"}
              fill
              alt="plan"
              className="object-contain rounded-xl"
            />
          </div>
          <h1 className="text-5xl md:text-7xl min-2xl:text-[170px] font-thunder font-bold text-white mb-8 leading-tight">
            Go places.
          </h1>
          <div className="space-y-4 mb-12">
            <p className="text-white/90 text-lg min-2xl:text-lg font-onest font-medium leading-relaxed">
              Whether you're dreaming of exploring Iceland's icy landscapes,
              Australia's sun-kissed beaches, or Japan's vibrant cityscapes,
              we've got countless travel tips for you. Our travel experiences
              are designed to match your wanderlust, ensuring every moment is
              unforgettable.
            </p>

            <p className="text-white/80 text-base min-2xl::text-lg font-onest font-medium">
              Sign up for our newsletter and be the first to receive exclusive
              travel deals, insider tips, and destination inspiration straight
              to your inbox.
            </p>
          </div>

          {/* Newsletter Signup Form */}
          <div className="bg-white rounded-2xl p-8  shadow-lg">
            <form>
              <div className="flex-col space-y-6 min-md:grid min-md:grid-cols-5 min-md:gap-2 min-md:items-end ">
                <div className="min-md:col-span-2">
                  <label
                    htmlFor="name-mobile"
                    className="block text-navbar font-onest font-normal mb-3 text-lg"
                  >
                    YOUR NAME*
                  </label>
                  <Input
                    type="text"
                    id="name-mobile"
                    className="w-full bg-gray-200 border-0 rounded-lg h-14 px-4 text-navbar placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-navbar"
                    placeholder=""
                  />
                </div>

                <div className="min-md:col-span-2">
                  <label
                    htmlFor="email-mobile"
                    className="block text-navbar font-onest font-normal mb-3 text-lg"
                  >
                    YOUR EMAIL*
                  </label>
                  <Input
                    type="email"
                    id="email-mobile"
                    className="w-full bg-gray-200 border-0 rounded-lg h-14 px-4 text-navbar placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-navbar"
                    placeholder=""
                  />
                </div>

                <div className="min-md:col-span-1 mb-6">
                  <Button
                    type="submit"
                    className="max-md:w-[167px]  bg-navbar hover:bg-black/10 text-white h-[56px] rounded-lg font-onest font-medium mt-2"
                  >
                    Join Newsletter
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
