/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0CC8A8',
          50: '#E6FAF6',
          100: '#CCF5ED',
          200: '#99EBDB',
          300: '#66E1C9',
          400: '#33D7B7',
          500: '#0CC8A8',
          600: '#0AA088',
          700: '#087868',
          800: '#055048',
          900: '#032828',
        },
        dark: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 40px rgba(12, 200, 168, 0.15)',
        'glow-lg': '0 0 60px rgba(12, 200, 168, 0.2)',
      },
    },
  },
  plugins: [],
}
