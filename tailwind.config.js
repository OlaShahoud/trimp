/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#605DEC',
        'text-secondary': '#7C8DB0',
        'text-muted': '#6E7491',
        'border-light': '#CBD4E6',
        'background': '#FFFFFF',
        'text-primary': '#FAFAFA',
      },
      fontFamily: {
        'sans': ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
