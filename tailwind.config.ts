import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#09090b",
        cardBg: "#0d0e15",
        neonCyan: {
          400: "#00f3ff",
          500: "#00d8e6",
          600: "#00b2bf",
        },
        electricViolet: {
          400: "#b55afe",
          500: "#8a2be2",
          600: "#6d1eb8",
        },
      },
      fontFamily: {
        mono: ["var(--font-mono)", "Courier New", "monospace"],
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        display: ["var(--font-display)", "Impact", "sans-serif"],
      },
      boxShadow: {
        glowCyan: "0 0 15px rgba(0, 243, 255, 0.35)",
        glowViolet: "0 0 15px rgba(138, 43, 226, 0.35)",
      },
      animation: {
        "marquee-smooth": "marqueeSmooth 40s linear infinite",
        "gentle-steam": "gentleSteam 4s ease-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        marqueeSmooth: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        gentleSteam: {
          "0%": { transform: "translateY(0) scale(0.9)", opacity: "0" },
          "50%": { opacity: "0.6" },
          "100%": { transform: "translateY(-16px) scale(1.2)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
