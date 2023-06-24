/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'blue-primary': '#007EFF',
      'blue-secondary': '#F0F8FF',
      'blue-tertiary' : '#1C3C50',
      'gray-primary': '#D9D9D9',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      
      backgroundColor: {
        'blue-primary': '#007EFF',
        'blue-secondary': '#F0F8FF',
        'transparent': 'transparent'
      },
      height: {
        'screen-37': '37rem',
        'screen-75': '75vh',
      },
      maxWidth: {
        '8xl': '160rem',
      },
      spacing: {
        '7xl': '160rem',
        '8xl': '96rem',
        '9xl': '128rem',
        '18': '18rem',
      },
      borderRadius: {
        '4xl': '2rem',
        'sm': '40px 40px 40px 5px'
      },
      borderWidth:{
        '2xl':'2px',
      },
      borderColor:{
        'blue-secondary': '#F0F8FF'
      },
     

    
    }
  },
  plugins: [],
}
