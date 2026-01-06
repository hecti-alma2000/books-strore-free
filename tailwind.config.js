import typography from "@tailwindcss/typography";
module.exports = {
  content: ["./src/**/*.{astro,js,ts,jsx,tsx}", "./public/**/*.html"],
  darkMode: 'class', // <-- clase para darck mode
  theme: {
    extend: {},
  },
  plugins: [typography],
};
