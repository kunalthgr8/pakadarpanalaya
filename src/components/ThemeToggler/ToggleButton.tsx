"use client";

import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { toggleTheme, setTheme } from "@/lib/store/features/theme/themeSlice";
import { useEffect } from "react";

export default function ThemeToggle() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.isDark);

  const handleThemeChange = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('isDark');
      if (savedTheme !== null) {
        dispatch(setTheme(JSON.parse(savedTheme)));
      } else {
        dispatch(setTheme(true));
      }
    }
  }, [dispatch]);

  useEffect(() => {
      localStorage.setItem('isDark', JSON.stringify(theme));
      document.documentElement.className = theme ? "dark" : "light";
  }, [theme]);

  return (
    <button
      onClick={handleThemeChange}
      className="absolute top-4 right-4 px-4 py-2 bg-blue-500 text-white rounded dark:bg-dark_component_background dark:text-dark_background hover:bg-blue-600 transition"
    >
      Toggle Theme ({theme ? 'Dark' : 'Light'})
    </button>
  );
}
