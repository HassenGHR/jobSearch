/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'blueColor': '#2a68ff',
        'greyIsh': '#bdc3c7',
        'cardShadow': 'rgba(0, 0, 0, 0.1)',
        'textColor': '#333333'
      }
    },
  },
  plugins: [],
  optimizeCss: false, 
  enableBabelRuntime: true,
}
