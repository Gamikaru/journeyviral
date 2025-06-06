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
                    ultraDark: "#050208",
                    glow: "#3d2b5f",
                },
                accent: {
                    DEFAULT: "#d73cbe",
                    bright: "#ff6ec7",
                    dark: "#a02d8f",
                    neon: "#ff00ff",
                    electric: "#00ffff",
                    warning: "#ffaa00",
                },
                "light-gray": "#f2f2f2",
                "dark-gray": "#0a0a0a",
                success: "#00ff88",
                error: "#ff0044",
            },
            fontFamily: {
                lastica: ["var(--font-lastica)", "sans-serif"],
                interphases: ["var(--font-interphases)", "sans-serif"],
                anonymous: ["var(--font-anonymous)", "monospace"],
            },
            spacing: {
                section: "120px",
                element: "48px",
                "safe-top": "env(safe-area-inset-top)",
                "safe-bottom": "env(safe-area-inset-bottom)",
            },
            backgroundImage: {
                // Primary gradients
                "gradient-primary": "linear-gradient(180deg, #050208 0%, #1a0f2e 50%, #2c1e4a 100%)",
                "gradient-accent": "linear-gradient(135deg, #d73cbe 0%, #ff6ec7 50%, #d73cbe 100%)",
                "gradient-radial": "radial-gradient(circle at center, rgba(215, 60, 190, 0.15) 0%, transparent 70%)",
                "gradient-section": "radial-gradient(circle at 50% 50%, rgba(44, 30, 74, 0.8) 0%, #1a0f2e 100%)",

                // New viral gradients
                "gradient-viral": "linear-gradient(45deg, #ff00ff, #00ffff, #ff6ec7)",
                "gradient-electric": "conic-gradient(from 180deg, #ff00ff, #00ffff, #ff6ec7, #ff00ff)",
                "gradient-holographic": "linear-gradient(45deg, #ff006e, #8e00ff, #00ffff, #00ff88, #ff006e)",
                "gradient-dark": "linear-gradient(180deg, #050208 0%, #1a0f2e 50%, #050208 100%)",
                "gradient-mesh": "radial-gradient(at 40% 20%, #ff00ff 0px, transparent 50%), radial-gradient(at 80% 0%, #00ffff 0px, transparent 50%), radial-gradient(at 0% 50%, #ff6ec7 0px, transparent 50%)",

                // Patterns
                "grid-pattern": "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
                "dot-pattern": "radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
            },
            backgroundSize: {
                "grid-size": "50px 50px",
                "dot-size": "20px 20px",
            },
            boxShadow: {
                glow: "0 0 40px rgba(215, 60, 190, 0.5)",
                "glow-lg": "0 0 60px rgba(215, 60, 190, 0.7)",
                "glow-xl": "0 0 100px rgba(215, 60, 190, 0.9)",
                "inner-glow": "inset 0 0 30px rgba(215, 60, 190, 0.2)",
                neon: "0 0 20px #ff00ff, 0 0 40px #ff00ff, 0 0 60px #ff00ff",
                electric: "0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 60px #00ffff",
                "3d": "0 10px 40px rgba(0, 0, 0, 0.5)",
                "3d-lg": "0 20px 60px rgba(0, 0, 0, 0.7)",
            },
            animation: {
                // Enhanced existing animations
                float: "float 8s ease-in-out infinite",
                pulse: "pulse 4s ease-in-out infinite",
                "fade-in": "fadeIn 0.8s ease-out forwards",
                "slide-up": "slideUp 0.8s ease-out forwards",
                glow: "glow 3s ease-in-out infinite",
                "spin-slow": "spin 20s linear infinite",

                // New animations
                glitch: "glitch 0.3s ease-in-out infinite",
                "glitch-2": "glitch-2 0.3s ease-in-out infinite reverse",
                morph: "morph 8s ease-in-out infinite",
                "text-reveal": "textReveal 0.8s ease-out forwards",
                "gradient-shift": "gradientShift 8s ease-in-out infinite",
                bounce: "bounce 1s infinite",
                shake: "shake 0.5s ease-in-out",
                "neon-flicker": "neonFlicker 2s ease-in-out infinite",
                "slide-in-left": "slideInLeft 0.6s ease-out forwards",
                "slide-in-right": "slideInRight 0.6s ease-out forwards",
                "scale-in": "scaleIn 0.5s ease-out forwards",
                marquee: "marquee 20s linear infinite",
                "marquee-reverse": "marquee 20s linear infinite reverse",
                wave: "wave 2s ease-in-out infinite",
                typewriter: "typewriter 2s steps(20) forwards",
                blink: "blink 1s step-end infinite",
            },
            keyframes: {
                float: {
                    "0%, 100%": {
                        transform: "translateY(0) rotate(0deg) scale(1)",
                    },
                    "33%": {
                        transform: "translateY(-30px) rotate(5deg) scale(1.05)",
                    },
                    "66%": {
                        transform: "translateY(20px) rotate(-5deg) scale(0.95)",
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
                        transform: "translateY(40px) scale(0.9)",
                    },
                    to: {
                        opacity: "1",
                        transform: "translateY(0) scale(1)",
                    },
                },
                glow: {
                    "0%, 100%": {
                        filter: "brightness(1) drop-shadow(0 0 20px rgba(215, 60, 190, 0.5))",
                    },
                    "50%": {
                        filter: "brightness(1.2) drop-shadow(0 0 40px rgba(215, 60, 190, 0.8))",
                    },
                },
                glitch: {
                    "0%, 100%": { transform: "translate(0)" },
                    "20%": { transform: "translate(-2px, 2px)" },
                    "40%": { transform: "translate(-2px, -2px)" },
                    "60%": { transform: "translate(2px, 2px)" },
                    "80%": { transform: "translate(2px, -2px)" },
                },
                "glitch-2": {
                    "0%, 100%": { transform: "translate(0) scaleY(1)" },
                    "20%": { transform: "translate(-2px, 0) scaleY(0.9)" },
                    "40%": { transform: "translate(2px, 0) scaleY(1.1)" },
                    "60%": { transform: "translate(0, 0) scaleY(0.95)" },
                    "80%": { transform: "translate(1px, 0) scaleY(1)" },
                },
                morph: {
                    "0%, 100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
                    "50%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
                },
                textReveal: {
                    from: {
                        opacity: "0",
                        transform: "translateY(100%)",
                    },
                    to: {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
                gradientShift: {
                    "0%, 100%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                },
                shake: {
                    "10%, 90%": { transform: "translate3d(-1px, 0, 0)" },
                    "20%, 80%": { transform: "translate3d(2px, 0, 0)" },
                    "30%, 50%, 70%": { transform: "translate3d(-4px, 0, 0)" },
                    "40%, 60%": { transform: "translate3d(4px, 0, 0)" },
                },
                neonFlicker: {
                    "0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%": {
                        filter: "brightness(1) drop-shadow(0 0 20px currentColor)",
                    },
                    "20%, 24%, 55%": {
                        filter: "brightness(0.4) drop-shadow(0 0 0 currentColor)",
                    },
                },
                slideInLeft: {
                    from: {
                        opacity: "0",
                        transform: "translateX(-100px)",
                    },
                    to: {
                        opacity: "1",
                        transform: "translateX(0)",
                    },
                },
                slideInRight: {
                    from: {
                        opacity: "0",
                        transform: "translateX(100px)",
                    },
                    to: {
                        opacity: "1",
                        transform: "translateX(0)",
                    },
                },
                scaleIn: {
                    from: {
                        opacity: "0",
                        transform: "scale(0.8)",
                    },
                    to: {
                        opacity: "1",
                        transform: "scale(1)",
                    },
                },
                marquee: {
                    from: { transform: "translateX(0%)" },
                    to: { transform: "translateX(-100%)" },
                },
                wave: {
                    "0%, 100%": { transform: "scaleY(1)" },
                    "50%": { transform: "scaleY(0.5)" },
                },
                typewriter: {
                    from: { width: "0" },
                    to: { width: "100%" },
                },
                blink: {
                    "0%, 50%": { opacity: "1" },
                    "51%, 100%": { opacity: "0" },
                },
            },
            backdropBlur: {
                xs: "2px",
            },
            transitionTimingFunction: {
                bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
                smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
                snappy: "cubic-bezier(0.86, 0, 0.07, 1)",
            },
            transitionDuration: {
                "2000": "2000ms",
                "3000": "3000ms",
                "4000": "4000ms",
            },
        },
    },
    plugins: [],
};

export default config;