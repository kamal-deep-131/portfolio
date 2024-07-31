/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      myBg: "#f6f5f4",
      myWhite: "#fffffe",
      myBlack: "#242424",
    },
    extend: {

      fontFamily: {
        otterco: ['OttercoDisplay', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

