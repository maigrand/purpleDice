const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: 'media', // false or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000',
        white: '#fff',
        ...getCustomColors()
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

function getCustomColors() {
  return {
    gray: {
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
    },
    coral: {
      'DEFAULT': '#F87764',
      '50': '#FEEBE8',
      '100': '#FDDED9',
      '200': '#FCC4BC',
      '300': '#FBAA9F',
      '400': '#F99181',
      '500': '#F87764',
      '600': '#F64C33',
      '700': '#EB270B',
      '800': '#BB1F08',
      '900': '#8A1706'
    },
    orchid: {
      'DEFAULT': '#8340AA',
      '50': '#EBDDF2',
      '100': '#DFCBEB',
      '200': '#C9A6DD',
      '300': '#B281CF',
      '400': '#9C5CC1',
      '500': '#8340AA', //main
      '600': '#663285',
      '700': '#4A2460',
      '800': '#2D163B',
      '900': '#110816'
    }
  }
}
