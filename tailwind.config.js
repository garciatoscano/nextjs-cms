const colors = require('tailwindcss/colors'); 

module.exports = {
  purge: ['./src/**/*{html,js,jsx}'],
  theme: {
    colors: {
      ...colors,
      red:colors.red,
    },
  },
  plugins:  [require('@tailwindcss/forms')],
};