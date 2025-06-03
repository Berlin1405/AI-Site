/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
      colors: {
        pink: '#FF0080',
        purple: '#7928CA',
        indigo: '#4C00FF',
      },
    },
  },
  plugins: [],
}

