/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#F7F6F3',
        surface: '#FFFFFF',
        ink: '#111110',
        'ink-2': '#5A5A57',
        'ink-3': '#9A9A96',
        line: '#E2E0DA',
        'accent-soft': '#E8E6E0',
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
