/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        publicSans: "'Public Sans', sans-serif",
      },
      fontSize: {
        sm: ['0.875rem', { lineHeight: '' }],
        h1: ['2.5rem', { lineHeight: '1.15' }],
        h2: ['2rem', { lineHeight: '1.15' }],
        h3: ['1.3rem', { lineHeight: '1.15' }],
        h4: ['1.0625rem', { lineHeight: '1.2' }],
        

        a: ['0.9375rem', { lineHeight: '1.5' }],
        p: ['0.9375rem', { lineHeight: '1.5' }],
        smP: ['15px', { lineHeight: '1.5' }],
        xxsP: ['0.625rem', { lineHeight: '1.5' }],
        xsP: ['0.8125rem', { lineHeight: '1.3' }],
      },
    },
    colors: {
      // ### Primary

      darkblue: 'hsl(233, 26%, 24%)',
      limegreen: 'hsl(136, 65%, 51%)',
      brightcyan: 'hsl(192, 70%, 51%)',

      // ### Neutral

      grayishblue: 'hsl(233, 8%, 62%)',
      lightgrayblue: 'hsl(220, 16%, 96%)',
      verylightgray: 'hsl(0, 0%, 98%)',
      white: 'hsl(0, 0%, 100%)',
    },
  },
  plugins: [],
};
