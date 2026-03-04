/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './pages/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      animation: {
        progress: 'progress 5s linear infinite',
      },
      keyframes: {
        progress: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
    },
  },
  safelist: [
    'text-[#1E1E1E]',
    'border-[#C8CEB5]',
    'text-[#6B705C]',
    'bg-[#FAFFE5]',
  ],
};
