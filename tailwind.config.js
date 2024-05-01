/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'mygray':'#E5E5E5',
        'myyellow':'#FFB400',
        'line':'#F0F0F6',
        'text':'#2B2B2B'
      },
      backgroundImage:{
        'profile':"url('./files/profile-small.jpg')",
        'art':"url('./files/art.jpg')"
      },
      width:{
        '3.1/10':'31%'
      }
    },
  },
  plugins: [],
}

