/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    
  ],
  theme: {
    container: {
      padding: '1rem',
    },
    screens: {
      'sm': '690px',
      // => @media (min-width: 690px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 992px) { ... }

      'xl': '1024px',
      // => @media (min-width: 1024px) { ... }

      '2xl': '1060px',
      // => @media (min-width: 1060px) { ... }
    },
    extend: {},
  },
  plugins: [],
}
