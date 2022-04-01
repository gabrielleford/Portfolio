module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'dark-text': '#00464D',
      'dark-teal': '#006D77',
      'teal': '#83C5BE',
      'light-blue': '#EDF6F9',
      'dark-peach': '#E29578',
      'peach': '#F9CFC0',
      'light-peach': '#FFDDD2',
      'none': 'transparent',
    },
    fontFamily: {
      'display': ['Poppins'],
      'body': ['"Red Hat Display"'],
      'poppins-light': ['Poppins Light'],
      'poppins-regular': ['Poppins Regular'],
      'inconsolata': ['Inconsolata'],
    },
    screens: {
      'xs': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'lg-xl': '1066px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}
