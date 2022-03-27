const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'sm': '480px',
        ...defaultTheme.screens
      },
      fontFamily: {
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        tiny: '0.625rem'
      },
      colors: {
        'kat-green': '#00FE38',
        'kat-purple': '#610077',
        'gra-yellow': '#FFDE00',
        'gra-green': '#18880C',
        'light-black': '#4B4B4B',
      },
    },
  },
  plugins: [],
}