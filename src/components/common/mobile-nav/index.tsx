"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { menuData } from "../nav";
import Link from "next/link";
import Image from "next/image";
import "./../nav/style.css";

const menuItems = [
  { name: "Plan Your Journey", hasDropdown: true },
  { name: "Trending", hasDropdown: true },
  { name: "Deals", hasDropdown: true },
  { name: "About Us", hasDropdown: true },
  { name: "Our Brand", hasDropdown: false },
  { name: "Travel Essentials", hasDropdown: false },
  { name: "EU Elites", hasDropdown: false },
];
const RIGHT_LINKS = ["Travel Essentials", "Travel Club"];


export default function MobileNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleSection = (sectionName: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionName]: !prev[sectionName],
    }));
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setExpandedSections({});
  };

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  return (
    <>
      <nav
        className={`w-full text-white py-1 min-w-[400px] relative font-thunder hover:bg-navbar bg-transparent
        } transition-colors duration-300`}
      >
        <div className="flex items-center justify-between mx-8 ">
          {/* Left - Menu Button */}
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-transparent hover:text-white/80 text-xl cursor-pointer"
              onClick={openMobileMenu}
            >
              Menu
              <Menu className="h-5 w-5 mr-2" />
            </Button>
          </div>

          {/* Center - Logo */}
          <div className="flex-1 flex justify-center">
            <Image
              src={"/assets/eulogo.png"}
              width={80}
              height={80}
              alt="eulogo"
            />
          </div>

          {/* Right - Links */}
          <div className="flex items-center space-x-6 text-xl">
            {RIGHT_LINKS.map((link) => (
              <Link
                key={link}
                href="#"
                className="hover:text-white/80 transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="h-full w-full fixed top-0 left-0 flex flex-col bg-navbar">
            <div className="flex justify-end py-2 mb-4">
              <Button
                variant="link"
                size="sm"
                onClick={closeMobileMenu}
                className="text-white hover:text-white/60 cursor-pointer"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto scrollbar">
              {menuItems.map((item) => (
                <div key={item.name} className="mb-0">
                  <button
                    onClick={() => item.hasDropdown && toggleSection(item.name)}
                    className="flex items-center justify-between w-full text-left text-white py-4 px-8 hover:bg-black/10 transition-colors border-b border-white/10 cursor-pointer"
                  >
                    <span className="text-md font-normal">{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          expandedSections[item.name] ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Expanded content for dropdown items */}
                  {item.hasDropdown && expandedSections[item.name] && (
                    <div className="bg-black/20 ">
                      {/* Show tabs first */}
                      {menuData[item.name as keyof typeof menuData] && (
                        <div className="">
                          {Object.keys(
                            menuData[item.name as keyof typeof menuData].tabs
                          ).map((tab) => (
                            <div key={tab}>
                              <button
                                onClick={() =>
                                  toggleSection(`tab-${item.name}-${tab}`)
                                }
                                className="flex items-center justify-between w-full text-left text-white py-4 pl-14 pr-8 border-b border-white/10 hover:bg-black/10 cursor-pointer"
                              >
                                <span className="text-base">{tab}</span>
                                <ChevronRight
                                  className={`h-4 w-4 transition-transform ${
                                    expandedSections[`tab-${item.name}-${tab}`]
                                      ? "rotate-90"
                                      : ""
                                  }`}
                                />
                              </button>

                              {expandedSections[`tab-${item.name}-${tab}`] && (
                                <div className="">
                                  {menuData[
                                    item.name as keyof typeof menuData
                                  ]?.tabs[
                                    tab as keyof (typeof menuData)[keyof typeof menuData]["tabs"]
                                  ].regions.map((region) => (
                                    <div key={region.name} className="">
                                      <button
                                        onClick={() =>
                                          toggleSection(
                                            `region-${item.name}-${tab}-${region.name}`
                                          )
                                        }
                                        className="flex items-center justify-between w-full text-left text-white py-4 pl-20 pr-8 hover:bg-black/10 border-b border-white/10 cursor-pointer"
                                      >
                                        <span className="text-base">
                                          {region.name}
                                        </span>
                                        <ChevronRight
                                          className={`h-4 w-4 transition-transform ${
                                            expandedSections[
                                              `region-${item.name}-${tab}-${region.name}`
                                            ]
                                              ? "rotate-90"
                                              : ""
                                          }`}
                                        />
                                      </button>

                                      {expandedSections[
                                        `region-${item.name}-${tab}-${region.name}`
                                      ] && (
                                        <div className="">
                                          {region.countries.map((country) => (
                                            <button
                                              key={country}
                                              className="block w-full text-left text-white py-4 border-b border-white/10 pl-26 px-8 hover:bg-black/10 text-sm cursor-pointer"
                                            >
                                              {country}
                                            </button>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
              {/* Social Media Icons at bottom */}
              <div className="flex justify-center space-x-6 py-8 ">
                <button className="text-white hover:text-gray-300 transition-colors">
                  <Image
                    src={"/assets/ig.png"}
                    width={20}
                    height={20}
                    alt="ig"
                  />
                </button>
                <button className="text-white hover:text-gray-300 transition-colors">
                  <Image
                    src={"/assets/facebook.png"}
                    width={12}
                    height={12}
                    alt="facebook"
                  />
                </button>
                <button className="text-white hover:text-gray-300 transition-colors">
                  <Image
                    src={"/assets/youtube.png"}
                    width={26}
                    height={26}
                    alt="youtube"
                  />
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
