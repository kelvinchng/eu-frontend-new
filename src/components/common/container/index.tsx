"use client";
import React from "react";
import "./style.css";
import ResponsiveNavbar from "../responsive-nav";
import Footer from "../footer";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-w-[400px] bg-background">
      {/* Nav Bar */}
      <div className="w-full items-center flex fixed top-0 left-0 z-50">
        <ResponsiveNavbar />
      </div>

      {/* Main Content */}
      <div className="w-full bg-background">{children}</div>

      {/* Footer */}
      <Footer />
    </div>
  );
};
