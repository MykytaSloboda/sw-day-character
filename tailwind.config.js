/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBg: '#111928',
        text: '#667085',
        darkText: '#101828',
        lightBg: '#fcfcfd',
        line: '#eaecf0',
        lineDark: '#374151'
      }
    },
  },
  plugins: [],
}
