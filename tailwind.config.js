/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      screens: {
        lg: '1200px',
      },
      colors: {
        primary: {
          DEFAULT: '#CBF230',
        },
        dark: {
          DEFAULT: '#16171B',
        },
        darkSecond: {
          DEFAULT: '#0E1014',
        },
        darkLigher: {
          DEFAULT: '#333A46',
        },
        whiteSmoke: {
          DEFAULT: '#DFDFDF',
        },
      },
    },
    container: {
      center: true,
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1200px',
        xl: '1200px',
        '2xl': '1200px',
      },
    },
  },
  plugins: [],
}
