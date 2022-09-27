/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        title: '#212121',
        description: '#666666',
        subtitle: '#9E9E9E',
        link: '#0038FF',
      },
    },
  },
  plugins: [],
};
