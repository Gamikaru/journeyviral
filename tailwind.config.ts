import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'lastica': ['var(--font-lastica)'],
                'interphases': ['var(--font-interphases)'],
                'anonymous': ['var(--font-anonymous)'],
                'monoton': ['var(--font-monoton)'],
            },
            colors: {
                primary: {
                    DEFAULT: '#1a0f2e',
                    light: '#2c1e4a',
                    dark: '#0d0718',
                    ultraDark: '#050208',
                },
                accent: {
                    DEFAULT: '#d73cbe',
                    bright: '#ff6ec7',
                    dark: '#a02d8f',
                    neon: '#ff00ff',
                    electric: '#00ffff',
                    warning: '#ffaa00',
                },
                neon: {
                    pink: '#ff00ff',
                    cyan: '#00ffff',
                    green: '#00ff88',
                    purple: '#8e00ff',
                    blue: '#00d4ff',
                },
            },
            animation: {
                'gradient-flow': 'gradient-flow 8s ease infinite',
                'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
                'shimmer': 'shimmer 3s ease-in-out infinite',
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s ease-in-out infinite',
            },
            keyframes: {
                'gradient-flow': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                'glow-pulse': {
                    '0%, 100%': {
                        opacity: '0.6',
                        filter: 'blur(40px)',
                    },
                    '50%': {
                        opacity: '1',
                        filter: 'blur(60px)',
                    },
                },
                'shimmer': {
                    '0%': { left: '-100%' },
                    '100%': { left: '200%' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'gradient-viral': 'linear-gradient(45deg, #ff00ff, #00ffff, #ff6ec7)',
                'gradient-dark': 'linear-gradient(180deg, #050208 0%, #1a0f2e 50%, #050208 100%)',
            },
            boxShadow: {
                'glow-pink': '0 0 40px rgba(215, 60, 190, 0.3)',
                'glow-cyan': '0 0 40px rgba(0, 255, 255, 0.3)',
                'neon': '0 0 20px #ff00ff, 0 0 40px #ff00ff',
                'electric': '0 0 20px #00ffff, 0 0 40px #00ffff',
            },
            blur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
}

export default config