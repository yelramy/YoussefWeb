module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark:  "#0e0e0e",
        light: "#f1f1f1",
        accent: {
          DEFAULT: "#00ffff",
          orange:  "#ff6b00"
        }
      },
      fontFamily: {
        sans:    ["var(--font-sans)", "sans-serif"],
        heading: ["var(--font-heading)", "sans-serif"]
      }
    }
  },
  plugins: []
};
