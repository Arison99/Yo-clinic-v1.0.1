/** @type {import('tailwindcss').Config} */
export default {
  content:  ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 50s linear infinite"
      },
      keyframes: {
        marquee: {
          '0%': {
            transform: 'translateX(100%)',  // Start from the right
          },
          '100%': {
            transform: 'translateX(-100%)',  // Move to the left
          },
        },
      },
    },
  },
  plugins: [],
}

