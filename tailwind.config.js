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
          DEFAULT: '#C4973A',
          light: '#E8C97A',
          dim: 'rgba(196,151,58,0.2)',
          glow: 'rgba(196,151,58,0.08)',
        },
        surface: {
          DEFAULT: '#111111',
          2: '#1A1A1A',
          3: '#222222',
        },
        ink: '#080808',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C4973A 0%, #E8C97A 50%, #C4973A 100%)',
        'dark-gradient': 'linear-gradient(180deg, rgba(8,8,8,0) 0%, rgba(8,8,8,0.8) 60%, rgba(8,8,8,1) 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'sweep': 'sweep 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'sweep': {
          '0%': { transform: 'translateX(-120%)', opacity: '0' },
          '20%': { opacity: '1' },
          '80%': { opacity: '1' },
          '100%': { transform: 'translateX(120%)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
