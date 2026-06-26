/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FFF9E6',
          100: '#FFF0BF',
          200: '#FFE699',
          300: '#FFD966',
          400: '#FFCC33',
          500: '#C5A028',
          600: '#B8860B',
          700: '#996515',
          800: '#806000',
          900: '#664D00',
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'Helvetica Neue', 'sans-serif'],
        arabic: ['Noto Sans Arabic', 'Arial', 'sans-serif'],
        chinese: ['Noto Sans SC', 'Arial', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-gold': 'pulse-gold 2s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
        'scroll-partners': 'scroll-partners 30s linear infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'breathe': 'breathe 8s ease-in-out infinite',
        'border-glow': 'border-glow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
