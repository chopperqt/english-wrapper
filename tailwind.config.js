/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    reflight: false
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
