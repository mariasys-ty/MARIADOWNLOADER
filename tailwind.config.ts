import type { Config } from "tailwindcss";

const config: Config = {
 darkMode: ["class"],
 content: [
  "./pages/**/*.{ts,tsx}",
  "./components/**/*.{ts,tsx}",
  "./app/**/*.{ts,tsx}",
 ],
 theme: {
  extend: {
   fontFamily: {
    sans: ["var(--font-inter)", "system-ui", "sans-serif"],
    display: ["var(--font-geist)", "system-ui", "sans-serif"],
   },
   colors: {
    background: "hsl(var(--background))",
    foreground: "hsl(var(--foreground))",
    card: "hsl(var(--card))",
    primary: "hsl(var(--primary))",
    secondary: "hsl(var(--secondary))",
    muted: "hsl(var(--muted))",
    accent: "hsl(var(--accent))",
    border: "hsl(var(--border))",
   },
   animation: {
    "shimmer": "shimmer 2s linear infinite",
   },
   keyframes: {
    shimmer: {
     '0%': { backgroundPosition: '-1000px 0' },
     '100%': { backgroundPosition: '1000px 0' },
    },
   },
  },
 },
 plugins: [],
};
export default config;