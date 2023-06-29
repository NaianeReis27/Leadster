/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#FFFFFF',
      'blue-primary': '#007EFF',
      'blue-secondary': '#F0F8FF',
      'blue-tertiary': '#1C3C50',
      'gray-primary': '#D9D9D9',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      keyframes: {
        slidetop: {
          '0%': { transform: 'translateY(-100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        opacity: {
          '0%': { transform: 'opacity(1)' },
          '100%': { transform: 'opacity(2)' },
        },
        resize: {
          '0%': { transform: 'scaleY(-1)' },
          '100%': { transform: ' scaleY(0)' },
        },
      },
      animation: {
        'slide-top': 'slidetop 10s linear ',
        resize: 'resize 2s linear ',
        opacity: 'opacity 1s linear ',
      },
      backgroundColor: {
        'blue-primary': '#007EFF',
        'blue-secondary': '#F0F8FF',
        transparent: 'transparent',
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
        18: '18rem',
        362: '22.625rem',
        290: '18.125rem',
        198: '12.375rem',
        1050: '65rem',
        720: '45rem',
        600: '37.5rem',
        '45px': '2.8125rem',
        'inherit': 'inherit',
      },
      boxShadow: {
        'shadow-primary':
          'rgba(0, 0, 0, 0.08) 0px 12px 28px 0px, rgba(0, 0, 0, 0.08) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset',
      },
      boxShadowColor: {},
      borderRadius: {
        '4xl': '2rem',
        sm: '40px 40px 40px 5px',
      },
      borderWidth: {
        '2xl': '2px',
      },
      borderColor: {
        'blue-secondary': '#F0F8FF',
      },
    },
  },
  plugins: [],
}
