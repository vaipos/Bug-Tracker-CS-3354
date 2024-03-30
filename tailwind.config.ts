import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  daisyui: {
    themes: ["night"],
  },
  
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '100': '200%',
    },
    extend: {
      colors: {
        custom: '#F3ECDF',
        progBar: '#79ADBB',
        buttonColor: '#eb5e28',
        quizCardColor: '#72BCC2',
        startHere: '#DAD0C3',
        neutral: '#DACCB1'

      },
      
    },
  },
  plugins: [require("daisyui"),  require('tailwindcss-animated')],
 
  
}

export default config
