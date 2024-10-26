/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding : '30px',
    },
    extend: {
      colors :{
        utama:'#059669'
      },
      screens :{
        '2xl' : '1320px',
      },
    },
  },
  plugins: [],
};

