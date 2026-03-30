import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pez: {
          black: "#0A0A0A",
          dark: "#1A1A1A",
          mid: "#111111",
          "grey-900": "#333333",
          "grey-700": "#555555",
          "grey-500": "#888888",
          "grey-200": "#D4D4D4",
          light: "#F5F5F5",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        heading: ["var(--font-bebas)", "Oswald", "Impact", "sans-serif"],
        body: ["var(--font-instrument)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease forwards",
        "fade-up": "fadeUp 0.8s ease forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
