/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        custom: "0px 0px 2.5px #00000029",
      },
    },
  },
  plugins: [],
};
