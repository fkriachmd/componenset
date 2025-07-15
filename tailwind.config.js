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
        sans: [
          "Mona Sans",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Fira Sans",
          "Droid Sans",
          "Helvetica Neue",
          "sans-serif",
        ],
        mono: [
          "Fira Code",
          "Consolas",
          "Monaco",
          "Andale Mono",
          "Ubuntu Mono",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};
