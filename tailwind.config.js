module.exports = {
  important: true,

  theme: {
    container: {
      center: true,
      padding: '1rem',
    },

    fontFamily: {},

    extend: {
      screens: {
        'dark-mode': { raw: '(prefers-color-scheme: dark)' },
      },

      colors: {
        primary: '#f53b57',
      },
    },
  },
  variants: {},
  plugins: [],
};
