/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        br:{
          'primary':"#054C73",
          'text-dark-gray':"#333333",
          'dark':"#111111",
          'light-gray':"#666666",
        }
      },
      backgroundColor:{
        'primary-dark':"#054C73",
        'light-blue':"#F2F5FF",
        'hero-light-blue':"#DFE9F4",
        'primary':"#054C73",
        'hero-light-gray':"#f1f1f1"
      },
      fontFamily:{
        'montserrat':['Montserrat', 'sans-serif']
      },
      maxWidth:{
        '1270':"1270px",
        '1196':"1196px",
        '1145':"1145px",
        '1182':"1182px"
      },
      fontSize:{
        '34':"34px",
        '52':"52px",
        '32':"32px"
      },
      lineHeight:{
        '41':"41.45px",
        '17':"17px",
        '65':"65px",
        '29':"29.26px",
        '24':"24.38px",
        '35':"35px"
      },
      margin:{
        '72':"72px",
        '67':"67px",
        '60':"60px",
        '10':"10px"
      }
    },
  },
  plugins: [],
}