/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        itim: ['Itim', 'cursive'],
      },
      colors: {
        pastelPink: '#FADADD',
        pastelBlue: '#AEC6CF',
        pastelGreen: '#B2F2BB',
        pastelPurple: '#CBAACB',
        pastelYellow: '#FFFACD',
        pastelOrange: '#FFDAB9',
        pastelMint: '#AAF0D1',
        pastelPeach: '#FFD1DC',
        pastelLavender: '#E6E6FA',
        pastelSky: '#C1E1FF'
      }
    },
  },
  plugins: [],
}
