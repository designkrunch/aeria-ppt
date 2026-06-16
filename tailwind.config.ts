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
        navy: "#0B0E1A",
        "navy-surface": "#141729",
        "navy-border": "#1E2235",
        bone: "#F4EFE6",
        "bone-dim": "#E8E2D9",
        coral: "#E8452A",
        "coral-dim": "#C63820",
        teal: "#1A9B8C",
        "teal-dim": "#147A6E",
        muted: "#6B7280",
        "off-white": "#FAFAF8",
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        hero: "clamp(52px, 7vw, 96px)",
        "h1": "clamp(36px, 4.5vw, 64px)",
        "h2": "clamp(28px, 3vw, 44px)",
        "h3": "clamp(22px, 2.5vw, 32px)",
        stat: "clamp(48px, 6vw, 80px)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
      },
      keyframes: {
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
