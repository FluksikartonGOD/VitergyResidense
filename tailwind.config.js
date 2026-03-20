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
          DEFAULT: '#ca9e67',
        },
        dark: {
          DEFAULT: '#1f2937',
        },
        darkSecond: {
          DEFAULT: '#1f2937',
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
