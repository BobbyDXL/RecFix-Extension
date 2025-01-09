/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
        'clash': ['Clash Display', 'sans-serif'],
        'cabinet': ['Cabinet Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

