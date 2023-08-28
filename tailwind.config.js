/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1d1d1f',
        orange: '#ff7900',
      },
      screens: {
        xs: '375px'
      },
      dropShadow: {
        star: '0 0 10px #f87171'
      },
      transitionTimingFunction: {
        star: 'cubic-bezier(0.05, 0.83, 0.43, 0.96)'
      }
    },
  },
  plugins: [],
}

