"use client";
import React from "react";
import "./style.css";
import ResponsiveNavbar from "../responsive-nav";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-w-[375px] bg-background">
      {/* Top Bar - Changed to fixed */}
      <div className="w-full items-center flex fixed top-0 left-0 z-50">
        <ResponsiveNavbar />
      </div>

      {/* Main Content */}
      <div className="w-full bg-background">{children}</div>

      {/* Footer */}
      <div className="w-full bg-background h-[8rem] items-center flex">
        <p>Footer</p>
      </div>
    </div>
  );
};
