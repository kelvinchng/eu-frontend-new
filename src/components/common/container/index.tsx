"use client";
import React from "react";
import Navbar from "../nav";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-w-[350px] bg-background">
      {/* Top Bar */}
      <div className="w-full bg-background items-center flex">
        <Navbar/>
      </div>
      {/* Main  */}
      <div className="w-full bg-background">{children}</div>

      {/* Footer */}
      <div className="w-full bg-background h-[8rem] items-center flex">
        <p>Footer</p>
      </div>
    </div>
  );
};
