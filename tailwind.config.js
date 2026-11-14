/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#09090C',
          900: '#101015',
          850: '#16161D',
          800: '#1D1D26',
          700: '#2A2A37',
        },
        burgundy: {
          950: '#180307',
          900: '#26040C',
          850: '#340611',
          800: '#460918',
          750: '#540B1D',
          700: '#680E24',
          600: '#8A1432',
          500: '#AC1C41',
        },
        cream: {
          50: '#FCFAF7',
          100: '#F6F0EA',
          200: '#EFE6DC',
          300: '#E4D4C3',
          400: '#D5C0AB',
          500: '#B89F88',
          600: '#8A735E',
        },
        gold: {
          200: '#F3E5D0',
          300: '#E6CFB0',
          400: '#D4AF37',
          500: '#C5A059',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        editorial: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        signature: ['"Caveat"', 'cursive'],
        cinzel: ['"Cinzel"', 'serif'],
      },
      boxShadow: {
        'velvet': '0 25px 60px -15px rgba(38, 4, 12, 0.7), 0 0 0 1px rgba(228, 212, 195, 0.12)',
        'card': '0 15px 35px -10px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(228, 212, 195, 0.1)',
        'glow': '0 0 40px rgba(104, 14, 36, 0.45)',
      }
    },
  },
  plugins: [],
}
