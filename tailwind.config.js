/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};


// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        orbit: {
          '0%': {
            transform: 'rotate(0deg) translateX(100px) rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg) translateX(100px) rotate(-360deg)',
          },
        },
      },
      animation: {
        orbit: 'orbit 3s linear infinite',
      },
    },
  },
  plugins: [],
};
