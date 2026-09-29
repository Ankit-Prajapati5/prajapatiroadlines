import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          black: "#0B0D0F",
          white: "#F7F5F0",
          red: "#B82025",
          "red-dark": "#8B1518",
          gray: "#9A9A9A",
        },
      },
    },
  },
  plugins: [],
};

export default config;
