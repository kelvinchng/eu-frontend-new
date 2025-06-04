"use client";

import { useEffect, useState } from "react";
import Navbar from "../nav";
import MobileNavbar from "../mobile-nav";

export default function ResponsiveNavbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return <>{isMobile ? <MobileNavbar /> : <Navbar />}</>;
}
