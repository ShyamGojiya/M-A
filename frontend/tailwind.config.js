/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  
  theme: {
    extend: {
      boxShadow: {
        'el': 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
        'uses': '0 0 1.2vw 1.2vw rgba(255, 255, 255, 0.3)'
      },
      colors:{
        'br':'#145c45',
        'hbr': '#003323',
      }
    },
  },
  plugins: [],
}

