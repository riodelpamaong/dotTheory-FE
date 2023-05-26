/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blanchedalmond: '#FFEBCD',
        peach: '#faf1ed',
        'badge-budet-hotel': '#f2b203',
        'badge-casino-hotel': '#3366cc',
        'badge-spa-hotel': '#ff66cc',
        'mystic-shadow': 'rgba(0, 0, 0, 0.6)',
        'semi-transparent-black':'rgba(0, 0, 0, 0.6) calc(100% - 24px)',
        'transparent': 'rgba(0, 0, 0, 0) 100%'
      },
      gridAutoColumns: {
        '100': '100%',
      },
    },
  },
  plugins: [],
}