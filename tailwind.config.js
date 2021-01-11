module.exports = {
  purge: ['./src/components/**/*.{ts,tsx,js,jsx}', './src/pages/**/*.{ts,tsx,js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'mobile': {'max': '639px'}
    },
    extend: {
      width: {
        '792': '49.5rem;',
        '70': '70%;'
      },
      height: {
        '373': '373px;'
      },
      colors: {
        'button': '#FFA100;',
        'hover': '#344C5F;'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
