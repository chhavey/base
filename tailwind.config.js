/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        //primary colors
        "primary-dark": "#605BFF",
        "primary-light": "#767FFD",

        //logo color in sidebar
        "primary-text": "#7975FF",

        //forgot password text
        "primary-blue": "#346bd4",

        //toggle button
        "toggle-light": "#F2F2F2",
        "toggle-dark": "#3D3D3D",

        //input fields
        "gray-light": "#F5F5F5",
        "gray-dark": "#EAEAEA",

        //sidebar background
        "sidebar-light": "#FFFFFF",
        "sidebar-light": "#0D0D0D",

        //background
        "background-light": "#fafafb",
        "background-dark": "#161616",

        //remove
        "red-remove": "#D23130",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        figtree: ["Figtree", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
