import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#C9A24A",
        "on-primary": "#ffffff",
        "primary-container": "#F4EDE1",
        "on-primary-container": "#2A261F",
        "secondary": "#7A6354",
        "on-secondary": "#ffffff",
        "secondary-container": "#F2EBE6",
        "on-secondary-container": "#2D2825",
        "surface": "#FCFAF7",
        "on-surface": "#1F1D1B",
        "surface-variant": "#F0EAE2",
        "on-surface-variant": "#4F4840",
        "outline": "#908679",
        "background": "#FCFAF7",
        "surface-container": "#F4F1EA",
        "surface-container-low": "#F9F7F2",
        "outline-variant": "#E0DDD5"
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "full": "9999px"
      },
      fontFamily: {
        "headline": ["var(--font-noto-serif)", "serif"],
        "body": ["var(--font-manrope)", "sans-serif"],
        "label": ["var(--font-manrope)", "sans-serif"]
      }
    },
  },
  plugins: [],
};
export default config;
