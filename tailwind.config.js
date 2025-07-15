/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00ED64",
        accent: "#71F6BA",
        background: "#001E2B",
        text: "#E8EDEB",
        danger: "rgb(255, 105, 96)",
        link: "rgb(4, 152, 236)",
      },
      fontFamily: {
        sans: ["Inter Variable", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
