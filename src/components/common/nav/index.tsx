"use client";

import { useState, useRef, useEffect } from "react";
import { Menu, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import "./style.css"

// Constants
const MENU_ITEMS = [
  "Plan Your Journey",
  "Trending",
  "Deals",
  "About Us",
  "Our Brand",
] as const;
const LOGO_TEXT = "Boo";
const RIGHT_LINKS = ["Travel Essentials", "Travel Club"];

// Types
type MenuItem = (typeof MENU_ITEMS)[number];
type Region = {
  name: string;
  countries: string[];
  filters: string[];
  filterMappings: Record<string, string[]>;
};
type TabData = {
  regions: Region[];
  generalFilters: string[];
  title: string;
  main_title: string;
};
type MenuData = Record<MenuItem, { tabs: Record<string, TabData> }>;

// Different data for each menu option and tab
const menuData: MenuData = {
  "Plan Your Journey": {
    tabs: {
      "Group Holidays": {
        regions: [
          {
            name: "Africa",
            countries: [
              "Egypt",
              "Morocco",
              "South Africa",
              "Kenya",
              "Tanzania",
              "Zimbabwe",
              "Botswana",
              "Namibia",
            ],
            filters: [
              "All Africa",
              "North Africa",
              "East Africa",
              "Southern Africa",
              "Safari",
              "Cultural",
            ],
            filterMappings: {
              "All Africa": [
                "Egypt",
                "Morocco",
                "South Africa",
                "Kenya",
                "Tanzania",
                "Zimbabwe",
                "Botswana",
                "Namibia",
              ],
              "North Africa": ["Egypt", "Morocco"],
              "East Africa": ["Kenya", "Tanzania"],
              "Southern Africa": [
                "South Africa",
                "Zimbabwe",
                "Botswana",
                "Namibia",
              ],
              Safari: [
                "Kenya",
                "Tanzania",
                "South Africa",
                "Botswana",
                "Namibia",
              ],
              Cultural: ["Egypt", "Morocco", "Kenya"],
            },
          },
          {
            name: "Asia",
            countries: [
              "Japan",
              "Thailand",
              "Singapore",
              "Malaysia",
              "Indonesia",
              "Vietnam",
              "Cambodia",
              "Philippines",
            ],
            filters: [
              "All Asia",
              "Southeast Asia",
              "East Asia",
              "South Asia",
              "Temples",
              "Beaches",
              "Cities",
            ],
            filterMappings: {
              "All Asia": [
                "Japan",
                "Thailand",
                "Singapore",
                "Malaysia",
                "Indonesia",
                "Vietnam",
                "Cambodia",
                "Philippines",
              ],
              "Southeast Asia": [
                "Thailand",
                "Singapore",
                "Malaysia",
                "Indonesia",
                "Vietnam",
                "Cambodia",
                "Philippines",
              ],
              "East Asia": ["Japan"],
              "South Asia": [],
              "Temples": ["Thailand", "Cambodia", "Japan"],
              "Beaches": ["Thailand", "Malaysia", "Indonesia", "Philippines"],
              "Cities": ["Japan", "Singapore", "Malaysia"],
            },
          },
          {
            name: "Europe",
            countries: [
              "France",
              "Italy",
              "Spain",
              "Germany",
              "Greece",
              "Portugal",
              "Netherlands",
              "Austria",
            ],
            filters: [
              "All Europe",
              "Western Europe",
              "Eastern Europe",
              "Mediterranean",
              "Alpine",
              "Historic",
            ],
            filterMappings: {
              "All Europe": [
                "France",
                "Italy",
                "Spain",
                "Germany",
                "Greece",
                "Portugal",
                "Netherlands",
                "Austria",
              ],
              "Western Europe": ["France", "Germany", "Netherlands"],
              "Eastern Europe": ["Austria"],
              Mediterranean: ["Italy", "Spain", "Greece"],
              Alpine: ["Austria"],
              Historic: ["Italy", "Greece", "France"],
            },
          },
          {
            name: "Americas",
            countries: [
              "USA",
              "Canada",
              "Brazil",
              "Argentina",
              "Mexico",
              "Peru",
              "Chile",
              "Costa Rica",
            ],
            filters: [
              "All Americas",
              "North America",
              "South America",
              "Central America",
              "Adventure",
              "Culture",
            ],
            filterMappings: {
              "All Americas": [
                "USA",
                "Canada",
                "Brazil",
                "Argentina",
                "Mexico",
                "Peru",
                "Chile",
                "Costa Rica",
              ],
              "North America": ["USA", "Canada"],
              "South America": ["Brazil", "Argentina", "Peru", "Chile"],
              "Central America": ["Mexico", "Costa Rica"],
              Adventure: ["Costa Rica", "Peru", "Chile"],
              Culture: ["Mexico", "Peru", "Argentina"],
            },
          },
        ],
        generalFilters: ["All Destinations"],
        title: "COUNTRIES",
        main_title: "REGION",
      },
      "Flexi Holidays": {
        regions: [
          {
            name: "City Breaks",
            countries: [
              "Paris",
              "London",
              "Rome",
              "Barcelona",
              "Amsterdam",
              "Prague",
              "Vienna",
           
            ],
            filters: [
              "All Cities",
              "Capital Cities",
              "Historic Cities",
              "Modern Cities",
              "Art Cities",
              "Food Cities",
            ],
            filterMappings: {
              "All Cities": [
                "Paris",
                "London",
                "Rome",
                "Barcelona",
                "Amsterdam",
                "Prague",
                "Vienna",
          
              ],
              "Capital Cities": [
                "Paris",
                "London",
                "Rome",
                "Amsterdam",
                "Prague",
                "Vienna",
              ],
              "Historic Cities": ["Rome", "Prague", "Vienna"],
              "Modern Cities": ["London", "Amsterdam", "Berlin"],
              "Art Cities": ["Paris", "Rome", "Barcelona", "Vienna"],
              "Food Cities": ["Paris", "Barcelona", "Rome"],
            },
          },
          {
            name: "Beach Escapes",
            countries: [
              "Maldives",
              "Bali",
              "Santorini",
              "Mykonos",
              "Ibiza",
              "Seychelles",
              "Mauritius",
              "Fiji",
            ],
            filters: [
              "All Beaches",
              "Tropical",
              "Mediterranean",
              "Luxury Resorts",
              "Island Hopping",
              "Water Sports",
            ],
            filterMappings: {
              "All Beaches": [
                "Maldives",
                "Bali",
                "Santorini",
                "Mykonos",
                "Ibiza",
                "Seychelles",
                "Mauritius",
                "Fiji",
              ],
              Tropical: ["Maldives", "Bali", "Seychelles", "Mauritius", "Fiji"],
              Mediterranean: ["Santorini", "Mykonos", "Ibiza"],
              "Luxury Resorts": ["Maldives", "Seychelles", "Mauritius"],
              "Island Hopping": ["Santorini", "Mykonos", "Seychelles", "Fiji"],
              "Water Sports": ["Bali", "Ibiza", "Mauritius", "Fiji"],
            },
          },
          {
            name: "Adventure",
            countries: [
              "Nepal",
              "New Zealand",
              "Costa Rica",
              "Iceland",
              "Patagonia",
              "Norway",
              "Switzerland",
              "Canada",
            ],
            filters: [
              "All Adventure",
              "Hiking",
              "Extreme Sports",
              "Wildlife",
              "Mountain",
              "Arctic",
            ],
            filterMappings: {
              "All Adventure": [
                "Nepal",
                "New Zealand",
                "Costa Rica",
                "Iceland",
                "Patagonia",
                "Norway",
                "Switzerland",
                "Canada",
              ],
              Hiking: ["Nepal", "New Zealand", "Patagonia", "Switzerland"],
              "Extreme Sports": ["New Zealand", "Costa Rica", "Iceland"],
              Wildlife: ["Costa Rica", "Canada"],
              Mountain: ["Nepal", "Switzerland", "Patagonia"],
              Arctic: ["Iceland", "Norway", "Canada"],
            },
          },
          {
            name: "Wellness",
            countries: [
              "Thailand Spa",
              "Bali Retreat",
              "Swiss Alps",
              "Dead Sea",
              "Tuscany",
              "India Yoga",
              "Japan Onsen",
              "Iceland Spa",
            ],
            filters: [
              "All Wellness",
              "Spa Retreats",
              "Yoga",
              "Meditation",
              "Thermal Springs",
              "Detox",
            ],
            filterMappings: {
              "All Wellness": [
                "Thailand Spa",
                "Bali Retreat",
                "Swiss Alps",
                "Dead Sea",
                "Tuscany",
                "India Yoga",
                "Japan Onsen",
                "Iceland Spa",
              ],
              "Spa Retreats": [
                "Thailand Spa",
                "Bali Retreat",
                "Dead Sea",
                "Iceland Spa",
              ],
              Yoga: ["Bali Retreat", "India Yoga"],
              Meditation: ["Bali Retreat", "India Yoga", "Tuscany"],
              "Thermal Springs": ["Japan Onsen", "Iceland Spa", "Swiss Alps"],
              Detox: ["Thailand Spa", "Bali Retreat", "Tuscany"],
            },
          },
        ],
        generalFilters: ["All Flexible"],
        title: "FLEXIBLE OPTIONS",
        main_title: "FLEXIBLE",
      },
      "Themed Journeys": {
        regions: [
          {
            name: "Cultural Heritage",
            countries: [
              "India",
              "Peru",
              "Egypt",
              "Greece",
              "Cambodia",
              "Jordan",
              "Turkey",
              "Iran",
            ],
            filters: [
              "All Cultural",
              "Ancient Civilizations",
              "UNESCO Sites",
              "Religious Sites",
              "Archaeological",
              "Museums",
            ],
            filterMappings: {
              "All Cultural": [
                "India",
                "Peru",
                "Egypt",
                "Greece",
                "Cambodia",
                "Jordan",
                "Turkey",
                "Iran",
              ],
              "Ancient Civilizations": ["Egypt", "Greece", "Peru", "Cambodia"],
              "UNESCO Sites": ["India", "Peru", "Cambodia", "Jordan"],
              "Religious Sites": ["India", "Jordan", "Turkey"],
              Archaeological: ["Egypt", "Greece", "Peru", "Jordan"],
              Museums: ["Egypt", "Greece", "Turkey"],
            },
          },
          {
            name: "Wildlife Safari",
            countries: [
              "Kenya",
              "Tanzania",
              "Botswana",
              "South Africa",
              "Rwanda",
              "Uganda",
              "Zambia",
              "Namibia",
            ],
            filters: [
              "All Safari",
              "Big Five",
              "Great Migration",
              "Gorilla Trekking",
              "Bird Watching",
              "Marine Life",
            ],
            filterMappings: {
              "All Safari": [
                "Kenya",
                "Tanzania",
                "Botswana",
                "South Africa",
                "Rwanda",
                "Uganda",
                "Zambia",
                "Namibia",
              ],
              "Big Five": ["Kenya", "Tanzania", "South Africa", "Botswana"],
              "Great Migration": ["Kenya", "Tanzania"],
              "Gorilla Trekking": ["Rwanda", "Uganda"],
              "Bird Watching": ["Kenya", "Botswana", "Zambia"],
              "Marine Life": ["South Africa", "Tanzania"],
            },
          },
          {
            name: "Food & Wine",
            countries: [
              "Italy",
              "France",
              "Spain",
              "Portugal",
              "Argentina",
              "Chile",
              "Australia",
              "New Zealand",
            ],
            filters: [
              "All Culinary",
              "Wine Tours",
              "Cooking Classes",
              "Street Food",
              "Fine Dining",
              "Local Markets",
            ],
            filterMappings: {
              "All Culinary": [
                "Italy",
                "France",
                "Spain",
                "Portugal",
                "Argentina",
                "Chile",
                "Australia",
                "New Zealand",
              ],
              "Wine Tours": [
                "France",
                "Italy",
                "Spain",
                "Argentina",
                "Chile",
                "Australia",
              ],
              "Cooking Classes": ["Italy", "France", "Spain"],
              "Street Food": ["Spain", "Portugal"],
              "Fine Dining": ["France", "Italy", "Australia"],
              "Local Markets": ["Italy", "Spain", "Portugal", "France"],
            },
          },
          {
            name: "Photography",
            countries: [
              "Iceland",
              "Norway",
              "Japan",
              "Morocco",
              "Patagonia",
              "Maldives",
              "Scotland",
              "Faroe Islands",
            ],
            filters: [
              "All Photography",
              "Landscapes",
              "Wildlife",
              "Northern Lights",
              "Architecture",
              "Portraits",
            ],
            filterMappings: {
              "All Photography": [
                "Iceland",
                "Norway",
                "Japan",
                "Morocco",
                "Patagonia",
                "Maldives",
                "Scotland",
                "Faroe Islands",
              ],
              Landscapes: [
                "Iceland",
                "Norway",
                "Patagonia",
                "Scotland",
                "Faroe Islands",
              ],
              Wildlife: ["Norway", "Scotland"],
              "Northern Lights": ["Iceland", "Norway", "Faroe Islands"],
              Architecture: ["Japan", "Morocco"],
              Portraits: ["Morocco", "Japan"],
            },
          },
        ],
        generalFilters: ["All Themes"],
        title: "THEMED EXPERIENCES",
        main_title: "THEMED",
      },
      Cruise: {
        regions: [
          {
            name: "Mediterranean",
            countries: [
              "Greek Isles",
              "Italian Riviera",
              "French Riviera",
              "Spanish Coast",
              "Turkish Coast",
              "Croatia",
              "Malta",
              "Cyprus",
            ],
            filters: [
              "All Mediterranean",
              "Greek Islands",
              "Italian Ports",
              "French Coast",
              "Spanish Ports",
              "Eastern Med",
            ],
            filterMappings: {
              "All Mediterranean": [
                "Greek Isles",
                "Italian Riviera",
                "French Riviera",
                "Spanish Coast",
                "Turkish Coast",
                "Croatia",
                "Malta",
                "Cyprus",
              ],
              "Greek Islands": ["Greek Isles", "Cyprus"],
              "Italian Ports": ["Italian Riviera"],
              "French Coast": ["French Riviera"],
              "Spanish Ports": ["Spanish Coast"],
              "Eastern Med": ["Turkish Coast", "Cyprus", "Croatia"],
            },
          },
          {
            name: "Caribbean",
            countries: [
              "Bahamas",
              "Jamaica",
              "Barbados",
              "St. Lucia",
              "Aruba",
              "Cozumel",
              "St. Thomas",
              "Antigua",
            ],
            filters: [
              "All Caribbean",
              "Eastern Caribbean",
              "Western Caribbean",
              "Southern Caribbean",
              "Private Islands",
              "Beach Ports",
            ],
            filterMappings: {
              "All Caribbean": [
                "Bahamas",
                "Jamaica",
                "Barbados",
                "St. Lucia",
                "Aruba",
                "Cozumel",
                "St. Thomas",
                "Antigua",
              ],
              "Eastern Caribbean": [
                "Barbados",
                "St. Lucia",
                "St. Thomas",
                "Antigua",
              ],
              "Western Caribbean": ["Jamaica", "Cozumel"],
              "Southern Caribbean": ["Aruba"],
              "Private Islands": ["Bahamas", "St. Thomas"],
              "Beach Ports": ["Barbados", "Aruba", "St. Lucia"],
            },
          },
          {
            name: "Northern Europe",
            countries: [
              "Norwegian Fjords",
              "Baltic Sea",
              "British Isles",
              "Iceland",
              "Greenland",
              "Faroe Islands",
              "Shetland",
              "Orkney",
            ],
            filters: [
              "All Northern",
              "Norwegian Fjords",
              "Baltic Capitals",
              "British Isles",
              "Arctic",
              "Scenic Routes",
            ],
            filterMappings: {
              "All Northern": [
                "Norwegian Fjords",
                "Baltic Sea",
                "British Isles",
                "Iceland",
                "Greenland",
                "Faroe Islands",
                "Shetland",
                "Orkney",
              ],
              "Norwegian Fjords": ["Norwegian Fjords"],
              "Baltic Capitals": ["Baltic Sea"],
              "British Isles": ["British Isles", "Shetland", "Orkney"],
              Arctic: ["Iceland", "Greenland", "Faroe Islands"],
              "Scenic Routes": ["Norwegian Fjords", "Iceland", "Faroe Islands"],
            },
          },
          {
            name: "Exotic",
            countries: [
              "Alaska",
              "Antarctica",
              "Galapagos",
              "Southeast Asia",
              "Transatlantic",
              "Hawaii",
              "Tahiti",
              "Australia",
            ],
            filters: [
              "All Exotic",
              "Expedition",
              "Luxury",
              "Adventure",
              "Remote Islands",
              "Wildlife",
            ],
            filterMappings: {
              "All Exotic": [
                "Alaska",
                "Antarctica",
                "Galapagos",
                "Southeast Asia",
                "Transatlantic",
                "Hawaii",
                "Tahiti",
                "Australia",
              ],
              Expedition: ["Antarctica", "Galapagos", "Alaska"],
              Luxury: ["Hawaii", "Tahiti", "Australia"],
              Adventure: ["Alaska", "Antarctica", "Galapagos"],
              "Remote Islands": ["Galapagos", "Tahiti"],
              Wildlife: ["Antarctica", "Galapagos", "Alaska"],
            },
          },
        ],
        generalFilters: ["All Cruises"],
        title: "CRUISE DESTINATIONS",
        main_title: "CRUISE",
      },
    },
  },
  Trending: {
    tabs: {
      "Hot Deals": {
        regions: [
          {
            name: "Trending Now",
            countries: ["Bali", "Dubai", "Maldives", "Santorini", "Tokyo"],
            filters: [
              "All Trending",
              "Instagram Famous",
              "Viral Spots",
              "Influencer Picks",
              "Social Media",
            ],
            filterMappings: {
              "All Trending": [
                "Bali",
                "Dubai",
                "Maldives",
                "Santorini",
                "Tokyo",
              ],
              "Instagram Famous": ["Bali", "Santorini", "Maldives"],
              "Viral Spots": ["Dubai", "Tokyo"],
              "Influencer Picks": ["Bali", "Dubai", "Santorini"],
              "Social Media": ["Maldives", "Santorini", "Tokyo"],
            },
          },
          {
            name: "Rising Stars",
            countries: ["Georgia", "Albania", "Slovenia", "Estonia", "Latvia"],
            filters: [
              "All Rising",
              "Emerging",
              "Hidden Gems",
              "Off the Beaten Path",
              "Undiscovered",
            ],
            filterMappings: {
              "All Rising": [
                "Georgia",
                "Albania",
                "Slovenia",
                "Estonia",
                "Latvia",
              ],
              Emerging: ["Georgia", "Albania"],
              "Hidden Gems": ["Slovenia", "Estonia"],
              "Off the Beaten Path": ["Albania", "Latvia"],
              Undiscovered: ["Estonia", "Latvia"],
            },
          },
        ],
        generalFilters: ["All Trending"],
        title: "TRENDING SPOTS",
        main_title: "TRENDING",
      },
    },
  },
  Deals: {
    tabs: {
      "Flight Deals": {
        regions: [
          {
            name: "Budget Friendly",
            countries: ["Vietnam", "Cambodia", "Nepal", "Bolivia", "Guatemala"],
            filters: [
              "All Budget",
              "Under $300",
              "Backpacker",
              "Hostels",
              "Local Transport",
            ],
            filterMappings: {
              "All Budget": [
                "Vietnam",
                "Cambodia",
                "Nepal",
                "Bolivia",
                "Guatemala",
              ],
              "Under $300": ["Vietnam", "Cambodia", "Nepal"],
              Backpacker: ["Vietnam", "Nepal", "Guatemala"],
              Hostels: ["Cambodia", "Nepal", "Bolivia"],
              "Local Transport": ["Vietnam", "Bolivia", "Guatemala"],
            },
          },
          {
            name: "Mid Range",
            countries: [
              "Portugal",
              "Czech Republic",
              "Poland",
              "Hungary",
              "Croatia",
            ],
            filters: [
              "All Mid Range",
              "$300-800",
              "3-4 Star",
              "Good Value",
              "Comfortable",
            ],
            filterMappings: {
              "All Mid Range": [
                "Portugal",
                "Czech Republic",
                "Poland",
                "Hungary",
                "Croatia",
              ],
              "$300-800": ["Portugal", "Czech Republic", "Poland"],
              "3-4 Star": ["Czech Republic", "Hungary", "Croatia"],
              "Good Value": ["Portugal", "Poland", "Hungary"],
              Comfortable: ["Portugal", "Czech Republic", "Croatia"],
            },
          },
        ],
        generalFilters: ["All Deals"],
        title: "DEAL CATEGORIES",
        main_title: "DEAL",
      },
    },
  },
  "About Us": {
    tabs: {
      "Our Story": {
        regions: [
          {
            name: "Company Info",
            countries: [
              "Founded 2010",
              "50+ Countries",
              "1M+ Travelers",
              "Award Winning",
            ],
            filters: [
              "All Info",
              "History",
              "Milestones",
              "Achievements",
              "Growth",
            ],
            filterMappings: {
              "All Info": [
                "Founded 2010",
                "50+ Countries",
                "1M+ Travelers",
                "Award Winning",
              ],
              History: ["Founded 2010"],
              Milestones: ["50+ Countries", "1M+ Travelers"],
              Achievements: ["Award Winning"],
              Growth: ["50+ Countries", "1M+ Travelers"],
            },
          },
          {
            name: "Our Values",
            countries: [
              "Sustainable Travel",
              "Local Communities",
              "Authentic Experiences",
              "Customer First",
            ],
            filters: [
              "All Values",
              "Sustainability",
              "Community",
              "Ethics",
              "Quality",
            ],
            filterMappings: {
              "All Values": [
                "Sustainable Travel",
                "Local Communities",
                "Authentic Experiences",
                "Customer First",
              ],
              Sustainability: ["Sustainable Travel"],
              Community: ["Local Communities"],
              Ethics: ["Authentic Experiences"],
              Quality: ["Customer First"],
            },
          },
        ],
        generalFilters: ["All Overview"],
        title: "ABOUT SECTIONS",
        main_title: "ABOUT",
      },
    },
  },
  "Our Brand": {
    tabs: {
      "Brand Story": {
        regions: [
          {
            name: "Global Presence",
            countries: [
              "Europe Offices",
              "Asia Pacific",
              "North America",
              "Middle East",
            ],
            filters: [
              "All Offices",
              "Regional Hubs",
              "Local Partners",
              "Global Network",
              "Expansion",
            ],
            filterMappings: {
              "All Offices": [
                "Europe Offices",
                "Asia Pacific",
                "North America",
                "Middle East",
              ],
              "Regional Hubs": ["Europe Offices", "Asia Pacific"],
              "Local Partners": ["Asia Pacific", "Middle East"],
              "Global Network": ["Europe Offices", "North America"],
              Expansion: ["Asia Pacific", "Middle East"],
            },
          },
          {
            name: "Brand Partners",
            countries: ["Airlines", "Hotels", "Local Guides", "Transport"],
            filters: [
              "All Partners",
              "Aviation",
              "Hospitality",
              "Ground Services",
              "Technology",
            ],
            filterMappings: {
              "All Partners": [
                "Airlines",
                "Hotels",
                "Local Guides",
                "Transport",
              ],
              Aviation: ["Airlines"],
              Hospitality: ["Hotels"],
              "Ground Services": ["Local Guides", "Transport"],
              Technology: ["Airlines", "Hotels"],
            },
          },
        ],
        generalFilters: ["All Services"],
        title: "BRAND SERVICES",
        main_title: "BRAND",
      },
    },
  },
};

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(
    null
  );
  const [activeTab, setActiveTab] = useState("");
  const [expandedRegion, setExpandedRegion] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const currentMenuData = selectedMenuItem ? menuData[selectedMenuItem] : null;
  const availableTabs = currentMenuData
    ? Object.keys(currentMenuData.tabs)
    : [];
  const currentTabKey =
    activeTab && availableTabs.includes(activeTab)
      ? activeTab
      : availableTabs[0];
  const currentTabData =
    currentMenuData && currentTabKey
      ? currentMenuData.tabs[currentTabKey as keyof typeof currentMenuData.tabs]
      : null;

  // Get filters based on selected region
  const getAvailableFilters = () => {
    if (!currentTabData) return [];

    if (expandedRegion) {
      // Show region-specific filters
      const selectedRegionData = currentTabData.regions.find(
        (r) => r.name === expandedRegion
      );
      return selectedRegionData?.filters || [];
    } else {
      // Show general filters when no region is selected
      return currentTabData.generalFilters || [];
    }
  };

  // Get filtered countries based on selected filter
  const getFilteredCountries = () => {
    if (!currentTabData) return [];

    if (expandedRegion) {
      const selectedRegionData = currentTabData.regions.find(
        (r) => r.name === expandedRegion
      );
      if (!selectedRegionData) return [];

      // If a specific filter is selected and it has mappings, use those
      if (
        selectedFilter &&
        selectedRegionData.filterMappings &&
        selectedRegionData.filterMappings[selectedFilter]
      ) {
        return selectedRegionData.filterMappings[selectedFilter];
      }

      // Otherwise show all countries from the region
      return selectedRegionData.countries;
    } else {
      // Show all countries from all regions when no region is selected
      return currentTabData.regions.flatMap((region) => region.countries);
    }
  };

  const availableFilters = getAvailableFilters();
  const filteredCountries = getFilteredCountries();

  console.log("filterCounties", filteredCountries)

  const handleRegionClick = (regionName: string) => {
    const newExpandedRegion = expandedRegion === regionName ? "" : regionName;
    setExpandedRegion(newExpandedRegion);

    // Reset filter to first available filter when changing region
    if (newExpandedRegion) {
      const regionData = currentTabData?.regions.find(
        (r) => r.name === newExpandedRegion
      );
      setSelectedFilter(regionData?.filters[0] || "All");
    } else {
      setSelectedFilter(currentTabData?.generalFilters[0] || "All");
    }
  };

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
    setExpandedRegion(""); // Reset expanded region when switching tabs

    // Reset filter to first general filter when switching tabs
    const newTabData =
      currentMenuData?.tabs[tabName as keyof typeof currentMenuData.tabs];
    setSelectedFilter(newTabData?.generalFilters[0] || "All");
  };

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
  };

  const handleMenuItemClick = (item: MenuItem) => {
    setSelectedMenuItem(item === selectedMenuItem ? null : item);
    setExpandedRegion(""); // Reset expanded region when switching menu items
    setActiveTab(""); // Reset active tab when switching menu items
    setSelectedFilter("All"); // Reset filter when switching menu items
  };

  const handleToggleClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
      setSelectedMenuItem(null);
    
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const isClickInsideDropdown = dropdownRef.current?.contains(target);
      const isClickInsideContent = contentRef.current?.contains(target);

      if (!isClickInsideDropdown && !isClickInsideContent) {
        setIsDropdownOpen(false);
        setSelectedMenuItem(null);
        setExpandedRegion("");
        setActiveTab("");
        setSelectedFilter("All");
      }
    };

    if (isDropdownOpen || selectedMenuItem) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen, selectedMenuItem]);

  return (
    <>
      {/* Navigation Bar */}
      <nav
        className={`w-full text-white px-8 py-1 relative font-thunder ${
          isDropdownOpen || selectedMenuItem ? "bg-navbar" : "bg-transparent"
        } transition-colors duration-300`}
      >
        <div className="flex items-center justify-between">
          {/* Left - Menu Button */}
          <div className="relative" ref={dropdownRef}>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-transparent hover:text-white/80 text-xl cursor-pointer"
              onClick={handleToggleClick}
            >
              Menu
              <Menu className="h-5 w-5 mr-2" />
            </Button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-5 w-52 p-4 bg-navbar border border-navbar/30 rounded-md shadow-lg z-50">
                <div className="py-2">
                  {MENU_ITEMS.map((item) => (
                    <button
                      key={item}
                      onClick={() => handleMenuItemClick(item)}
                      className={`flex items-center justify-between w-full p-3 text-left transition-colors ${
                        selectedMenuItem === item
                          ? "text-white bg-black/20"
                          : "text-white hover:bg-black/10"
                      }`}
                    >
                      <span className="text-base">{item}</span>
                      <ChevronRight
                        className={`h-4 w-4 ${
                          selectedMenuItem === item && "rotate-90"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
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
      </nav>

      {/* Content Layout - Appears when a menu item is selected */}
      {selectedMenuItem && currentTabData && (
        <div
          ref={contentRef}
          className="absolute left-[241px] top-[68px] bg-white rounded-md font-thunder shadow-2xl border border-gray-200 w-[calc(100vw-320px)] h-auto max-h-[500px] z-40"
        >
          {/* Content Header */}
          <div className="px-6 py-3">
            <div className="flex space-x-8">
              {availableTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`transition-colors text-xl ${
                    currentTabKey === tab
                      ? "text-black"
                      : "text-black/50 hover:text-black/70"
                  }`}
                >
                  {tab}
                  <ChevronRight
                    className={`inline h-4 w-4 ml-1 ${
                      currentTabKey === tab && "rotate-90"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Content Body */}
          <div className="flex h-full max-h-[350px] font-thunder">
            {/* Left Sidebar - Regions */}
            <div className="w-56 overflow-y-auto scrollbar">
              <div className="p-4">
                <h3 className="px-1 text-xl text-black">
                  {currentTabData.main_title}
                </h3>
                <div className="space-y-1">
                  {currentTabData.regions.map((region) => (
                    <div key={region.name}>
                      <button
                        onClick={() => handleRegionClick(region.name)}
                        className={`flex items-center justify-between w-full bg-[#F2F2F2] px-3 py-2 text-left rounded transition-colors ${
                          expandedRegion === region.name
                            ? "bg-navbar text-white"
                            : "hover:bg-gray-200"
                        }`}
                      >
                        <span className="text-md">{region.name}</span>
                        <ChevronRight
                          className={`h-4 w-4 ${
                            expandedRegion === region.name && "rotate-90"
                          }`}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - Countries/Items */}
            <div className="flex-1 px-4 py-4 overflow-y-auto scrollbar">
              <div className="mb-6">
                {/* Dynamic Filters based on selected region */}
                <div className="flex flex-wrap mb-2">
                  {availableFilters.map((filter) => (
                    <button
                      key={filter}
                      onClick={() => handleFilterClick(filter)}
                      className={`py-1 cursor-pointer px-2 rounded-full text-md transition-colors ${
                        filter.includes(selectedFilter)
                          ? "text-black"
                          : "text-black/50 hover:text-black/70"
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>

                <h3 className="text-lg px-2 text-black/80 mb-3">
                  {currentTabData.title} ({filteredCountries.length})
                </h3>

                {/* Filtered Items Grid */}
                <div className="flex flex-wrap gap-3 w-5/6">
                  {filteredCountries.map((item) => (
                    <button
                      key={item}
                      className="text-left py-1 px-2 w-[150px] hover:bg-navbar hover:text-white rounded transition-colors text-md"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}