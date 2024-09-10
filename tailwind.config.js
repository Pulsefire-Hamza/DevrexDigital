/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1E40AF', // Define your custom blue color
      },
      animation: {
        'glow-bright': 'glow-bright 1.5s infinite', // Define the custom glowing animation
      },
      keyframes: {
        'glow-bright': {
          '0%, 100%': { 
            textShadow: '0 0 5px rgba(255, 255, 255, 0.7)', 
            filter: 'brightness(1)',
          },
          '50%': { 
            textShadow: '0 0 20px rgba(255, 255, 255, 1)', 
            filter: 'brightness(1.5)',
          },
        },
      },
    },
  },
  plugins: [],
}
