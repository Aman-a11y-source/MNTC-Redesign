// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9747FF",
        secondary: "#A185FE",
        accent: "#00FDFF",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // 👈 this line
      },
    },
  },
  plugins: [],
} satisfies Config;
