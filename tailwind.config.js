/** @type {import('tailwindcss').Config} */

// ### Primary

// - Soft red: hsl(10, 79%, 65%)
// - Cyan: hsl(186, 34%, 60%)

// ### Neutral

// - Dark brown: hsl(25, 47%, 15%)
// - Medium brown: hsl(28, 10%, 53%)
// - Cream: hsl(27, 66%, 92%)
// - Very pale orange: hsl(33, 100%, 98%)

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#fffcf6",
      brown: {
        dark: "hsl(25, 47%, 15%)",
        medium: "hsl(28, 10%, 53%)",
      },
      cream: "hsl(27, 66%, 92%)",
      orange: { red: "hsl(10, 79%, 65%)", hover: "#ff9c87" },
      red: {
        soft: "hsl(10, 79%, 65%)",
      },
      cyan: "hsl(186, 34%, 60%)",
      // siteColor: {
      //   bg: "#f7eadd",
      //   bgLight: "#f3ece3",
      //   chartInactive: "#ec765d",
      //   chartInactiveFocus: "#ff9c87",
      //   chartActive: "#76b6bc",
      //   chartActiveFocus: "#b5dfe5",
      //   dark: "#372313",
      //   darklight: "#aca69e",
      // },
    },

    extend: {},
  },
  plugins: [],
};
