const colors = require("./node_modules/tailwindcss/colors");

module.exports = {
  purge: [
    "./src/**/*.html",
    "./src/**/*.ts",
    "./src/**/*.css",
    "./src/**/*.scss",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        orange: colors.orange,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};

// module.import { colors } from "@tailwindcss/colors";
