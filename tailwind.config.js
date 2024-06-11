import defaultTheme from 'tailwindcss/defaultTheme';
const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      letterSpacing: {
        '0.2':'0.0125rem'
      },
      strokeWidth: {
        '0.5':'0.125rem'
      },
      borderRadius:{
        DEFAULT:'0.3125rem'
      }
    },
    colors:{
      'black':'#333333',
      'main':'#4F4F4F',
      'gray':'#828282',
      'gray-2':'#BDBDBD',
      'gray-light':'#E0E0E0',
      'gray-pale':'#F2F2F2',
      'white':'#FFFFFF',
      'background':'#F5F6FA',
      'orange':'#FC7D00',
      'orange-pale':'#FFE7CF',
      'blue':'#5C6AFF',
      'blue-dark':'#1F255A',
      'blue-pale':'#F2F4FF',
      'blue-pale-2':'#E9ECFF',
      'green-21':'#21B5C2',
      'green':'#5BCD8A',
      'red':'#EB5757',
      'green-pale':'#EFFFF6',
      'pink-pale':'#FFF2F5',
      'yellow-pale':'#FEF9EC',
      'purple':'#F5EEFF',
      'blue-hover':'#7E89FF',
      'orange-hover':'#FF942B',
      'red-hover':'#FA6E6E',
      'blue-pressed':'#4A58EF',
      'orange-pressed':'#EC7908',
      'red-pressed':'#E44C4C',
      'green-pressed':'#55CC86',
    },
    fontSize:{
      'caption':'14px',
      'regular':'16px',
      'small':'12px',
      'very-small':'10px'
    },
    
  },
  
  plugins: [
    plugin(({addComponents,addBase,theme})=>{
      addBase({
        'h1': {
          fontSize: '2.25rem',
          fontWeight: '700',
          lineHeight: '2.723125rem',
          textAlign: 'left',
        }
      })
      addComponents({
        '.g-container': {
          marginLeft: 'auto',
          marginRight: 'auto',
          boxSizing: 'content-box',
          maxWidth: '1240px',
          paddingLeft: '2rem',
          paddingRight: '2rem'
        }
      })

    })
  ],
}

