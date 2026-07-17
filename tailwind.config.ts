import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F4F1EC",
        "cream-dim": "#E7E2D8",
        ink: "#16150F",
        "ink-soft": "#3A382F",
        coral: "#FF5A3C",
        "coral-deep": "#E23F22",
        peri: "#C7D0FF",
        sage: "#A9C3AE"
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      keyframes: {
        "marquee-x": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        },
        "blob-move": {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(30px,-20px) scale(1.1)" }
        }
      },
      animation: {
        "marquee-fast": "marquee-x 22s linear infinite",
        "spin-slow": "spin-slow 26s linear infinite",
        "blob-soft": "blob-move 12s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
export default config;
