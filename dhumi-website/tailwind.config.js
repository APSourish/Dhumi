/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // adjust paths if needed
    ],
    theme: {
        extend: {
            keyframes: {
              'fade-in-up': {
                '0%': { opacity: '0', transform: 'translateY(20px)' },
                '100%': { opacity: '1', transform: 'translateY(0)' },
              },
              float: {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-8px)' },
              },
            },
            animation: {
              'fade-in-up': 'fade-in-up 0.6s ease-out',
              float: 'float 3s ease-in-out infinite',
            },
        }          
    },
    plugins: [],
  };
  