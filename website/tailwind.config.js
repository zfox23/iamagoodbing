const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'comicsans': ['Comic Sans MS', ...defaultTheme.fontFamily.sans],
        'arial': ['Arial', ...defaultTheme.fontFamily.sans],
      },
    }
  }
}
