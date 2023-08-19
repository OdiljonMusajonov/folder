/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        base: "82.0625rem",
      },
      fontFamily: {
        base: ["Manrope", "sans-serif"],
      },
      colors: {
        brand: {
          blue: "#007aff",
          gold: "#e8c34a",
          light: "#878b94",
          gray: "#989898",
          darkGray: "#323232",
          darkBlue: "#0F1728",
        },
      },
      backgroundImage: {
        bghero: "url('../asstes/images/hero/banner.png')",
      },
      padding: {
        100: "28.875rem",
      },
    },
  },
  plugins: [],
};
