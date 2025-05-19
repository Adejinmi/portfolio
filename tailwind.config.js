/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mygray: "#E5E5E5",
        myyellow: "#FFB400",
        line: "#F0F0F6",
        text: "#2B2B2B",
      },
      fontFamily: {
        gilroy: ["Gilroy Regular", ...fontFamily.sans],
        gilroyMedium: ["Gilroy Medium", ...fontFamily.sans],
        outfitRegular: ["Outfit Regular", ...fontFamily.sans],
      },
      backgroundImage: {
        profile: "url('./files/profile-small.jpg')",
        art: "url('./files/art.jpg')",
      },
      width: {
        "3.1/10": "31%",
      },
    },
  },
  plugins: [],
};
