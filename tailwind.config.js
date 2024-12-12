/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        "accent-md":
          "0 4px 6px rgba(192, 162, 101, 0.2), 0 1px 3px rgba(192, 162, 101, 0.1)",
        "accent-lg":
          "0 6px 8px rgba(192, 162, 101, 0.25), 0 2px 4px rgba(192, 162, 101, 0.15)",
        "blue-md":
          "0 4px 6px rgba(11, 92, 255, 0.2), 0 1px 3px rgba(11, 92, 255, 0.1)",
        "blue-lg":
          "0 6px 8px rgba(11, 92, 255, 0.25), 0 2px 4px rgba(11, 92, 255, 0.15)",
      },
    },
  },
  daisyui: {
    themes: [
      {
        cmyk: {
          primary: "#0B5CFF", //blue
          secondary: "#2C2C2C", //dark grey
          accent: "#C0A265", // Gold
          neutral: "#000000", // Black
          "base-100": "#FFFFFF", // White (background color)
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
