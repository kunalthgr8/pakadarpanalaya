"use client";

import { ReactNode } from "react";
import ThemeToggle from "@/components/ThemeToggler/ToggleButton";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  
  return (
    <div
      className={`transition-colors duration-300  text-black dark:bg-dark_background dark:text-white min-h-screen`}
    >
      <ThemeToggle />
      {children}
    </div>
  );
}
