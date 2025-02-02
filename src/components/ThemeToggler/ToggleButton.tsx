"use client";

import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { toggleTheme } from "@/lib/store/features/theme/themeSlice";
import { useEffect } from "react";

export default function ThemeToggle() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.theme);

  const handleThemeChange = () => {
    dispatch(toggleTheme());
  };
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    console.log("Saved from ToggleButton.tsx: ", savedTheme);
    if (savedTheme !== theme) {
      dispatch(toggleTheme());
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <button
      onClick={handleThemeChange}
      className="absolute top-4 right-4 px-4 py-2 bg-blue-500 text-white rounded dark:bg-dark_component_background dark:text-dark_background hover:bg-blue-600 transition"
    >
      Toggle Theme ({theme})
    </button>
  );
}
