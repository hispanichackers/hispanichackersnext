/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: "#267e7e",
        turquoise: "#41cecf",
        orange: "#ff6000",
        yellow: "#f5bb00",
        red: "#fb2626",
      },
      
      fontFamily: {
        "sans": ["Helvetica", "sans-serif"],
        "serif": ["Georgia", "serif"],
        "bebas": ["Bebas Neue"],
        "inter": ["Inter", "sans-serif"],
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
