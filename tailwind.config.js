/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './pages/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {},
  },
  safelist: [
    'text-[#1E1E1E]',
    'border-[#C8CEB5]',
    'text-[#6B705C]',
    'bg-[#FAFFE5]',
  ],
};
