/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {colors: {
      customColor: '#F24E1E',
    },},
  },
  plugins: [
   
    require('@tailwindcss/forms'),
  ],
  
}

