"use client";

import Navbar from "../nav";
import MobileNavbar from "../mobile-nav";

export default function ResponsiveNavbar() {
  return (
    <>
      <div className="hidden sm:block w-full">
        <Navbar />
      </div>
      <div className="block sm:hidden w-full">
        <MobileNavbar />
      </div>
    </>
  );
}
