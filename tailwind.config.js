/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blanchedalmond: '#FFEBCD',
        peach: '#faf1ed'
      },
      gridAutoColumns: {
        '100': '100%',
      },
    },
  },
  plugins: [],
}