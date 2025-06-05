import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1a0f2e",
          light: "#2c1e4a",
          dark: "#0d0718",
        },
        accent: {
          DEFAULT: "#d73cbe",
          bright: "#ff6ec7",
          dark: "#a02d8f",
        },
        "light-gray": "#f2f2f2",
      },
      fontFamily: {
        lastica: ["var(--font-lastica)", "sans-serif"],
        interphases: ["var(--font-interphases)", "sans-serif"],
        anonymous: ["var(--font-anonymous)", "monospace"],
      },
      spacing: {
        section: "88.8px",
        element: "40px",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(180deg, #1a0f2e 0%, #2c1e4a 50%, #1a0f2e 100%)",
        "gradient-accent": "linear-gradient(135deg, #d73cbe 0%, #ff6ec7 50%, #d73cbe 100%)",
        "gradient-radial": "radial-gradient(circle at center, rgba(215, 60, 190, 0.15) 0%, transparent 70%)",
        "gradient-section": "radial-gradient(circle at 50% 50%, rgba(44, 30, 74, 0.8) 0%, #1a0f2e 100%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(215, 60, 190, 0.5)",
        "glow-lg": "0 0 60px rgba(215, 60, 190, 0.7)",
        "inner-glow": "inset 0 0 30px rgba(215, 60, 190, 0.2)",
      },
      animation: {
        "float": "float 8s ease-in-out infinite",
        "pulse": "pulse 4s ease-in-out infinite",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "glow": "glow 3s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0) rotate(0deg) scale(1)"
          },
          "33%": {
            transform: "translateY(-30px) rotate(5deg) scale(1.05)"
          },
          "66%": {
            transform: "translateY(20px) rotate(-5deg) scale(0.95)"
          },
        },
        pulse: {
          "0%, 100%": {
            opacity: "0.6",
            transform: "scale(1)",
            filter: "blur(0px)",
          },
          "50%": {
            opacity: "1",
            transform: "scale(1.1)",
            filter: "blur(2px) brightness(1.2)",
          },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: {
            opacity: "0",
            transform: "translateY(40px) scale(0.9)"
          },
          to: {
            opacity: "1",
            transform: "translateY(0) scale(1)"
          },
        },
        glow: {
          "0%, 100%": {
            filter: "brightness(1) drop-shadow(0 0 20px rgba(215, 60, 190, 0.5))"
          },
          "50%": {
            filter: "brightness(1.2) drop-shadow(0 0 40px rgba(215, 60, 190, 0.8))"
          },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;