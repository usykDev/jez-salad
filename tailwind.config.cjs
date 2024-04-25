/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#828282",
        "gray-500": "#575757",
        "primary-100": "#FFF0DC", //light orang
        "primary-300": "#FFC87A",
        "primary-500": "#FB9333", // bright orange
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",
      },
      dropShadow: {
        "3xl": "0px 4px 2px #a3a3a3",
        "4xl": "0px 16px 25px #E5D7BC",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(30deg, rgba(255,255,255,1) 50%, rgba(255,155,53,0.3) 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        abstractlines: "url('./assets/AbstractLines.png')",
        lines: "url('./assets/Lines.png')",
      },
    },
    screens: {
      xxs: "370px",
      xs: "480px",
      sm: "930px",
      md: "1400px",
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-thin": {
          scrollbarWidth: "thin",
          // doesn't work
          "&::-webkit-scrollbar-track": {
            display: "none", // Hide the scrollbar buttons/arrows
          },
        },
        ".scrollbar-thumb-gray-500": {
          scrollbarColor: "#5E0000 #EFE6E6",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};
