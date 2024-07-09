/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnightblue: "#020747",
        white: "#fff",
        black: "#000",
        darkslateblue: "#342c66",
        gray: "#fdfdfd",
        snow: "#fdf7f7",
        whitesmoke: "#f7f7f7",
        cadetblue: "#629696",
      },
      spacing: {},
      fontFamily: {
        in: "Roboto",
        h1: "Kavoon",
        kokoro: "Kokoro",
      },
      borderRadius: {
        xl: "20px",
        "6xl": "25px",
        sm: "14px",
      },
    },
    fontSize: {
      base: "16px",
      "3xl": "22px",
      "6xl": "25px",
      xl: "20px",
      "4xl": "23px",
      "30xl": "49px",
      "7xl": "26px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
