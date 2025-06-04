"use client";

import { useEffect, useState } from "react";
import Navbar from "../nav";
import MobileNavbar from "../mobile-nav";

export default function ResponsiveNavbar() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null); // Start with null to indicate undetermined state

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Check immediately on client-side
    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Don't render anything until we know the screen size
  if (isMobile === null) {
    return null; // or return a loading spinner/skeleton if preferred
  }

  return isMobile ? <MobileNavbar /> : <Navbar />;
}
