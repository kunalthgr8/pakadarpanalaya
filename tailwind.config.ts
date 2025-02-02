import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark_background: "#818182",
        dark_component_background: "#1E1E1F",
        dark_button_color: "#79079C",
        dark_hover_button_color: "#9445AD",
        dark_nav_color: "#2F3033",
        dark_input_color: "#1D1C1C",
        dark_sign_red: "#9C0707",
        light_background: "#f5f5f5",
        light_component_background: "#fff",
        light_button_color: "#79079C",
        light_nav_color: "#fff",
        light_sign_red: "#9C0707",
      },
    },
  },
  plugins: [],
} satisfies Config;
