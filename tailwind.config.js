
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {
      keyframes: {
        move: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(20px)' },
        },
      },
      colors: {
        neutralGray: '#B6B6B6', // Neutral Gray
        midnightPurple: '#291A40', // Midnight Purple
        midnightPurple1: '#291A44', // Midnight Purple
        midnightPurple2: '#291A46', // Midnight Purple
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add the Poppins font here
      },
      animation: {
        move: 'move 3s ease-in-out infinite',
      },
    },
    dropShadow: {
      'custom': '3px 10px 15px rgba(255, 113, 55, 0.925)',
      'custom1': '3px 10px 15px rgba(8, 8, 8, 0.96)',
    },
  },
  plugins: [],
}

