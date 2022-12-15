/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      color:{
        bdcl:"#ccc"
      }
    },
  },
  plugins: [ require('@tailwindcss/line-clamp'),],
};
