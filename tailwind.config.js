module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "light-primary": "#F6F5F5",
        "dark-primary": "#112031",
        "blue-light": "#D3E0EA",
        "light-grey": "#b9c3e9",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
