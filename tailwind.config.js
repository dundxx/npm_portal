/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBG: '#1a1c23',
        colorH1: '#383c49',
        colorH1Hv: '#52586a',
        colorDiv: '#D2C8AE',
        colorP: '#b9b9b9',
        colorBorder: '#292c34',
        colorContext: '#e9e7e7'
      },
    },
  },
  plugins: [],
};
