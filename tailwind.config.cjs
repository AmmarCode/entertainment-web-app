/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "pureWhite": "#FFFFFF",
        "red": "#FC4747",
        "darkBlue": "#10141e",
        "greyishBlue": "#5A698f",
        "semiDarkBlue": "#161d2f",        
      },
      screens: {
        's': '376px'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
