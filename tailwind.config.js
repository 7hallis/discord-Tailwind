/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'bgdc1' : '#8E9297',
      'bgdc2' : '#C7C9CB',
      'dcblue' : '#5865F2',
      'dcblue100':'#6865F2',
      'dcgreen' : '#3BA55D',
      'dcred' : '#ED4245',
      'dcfundo' : '#2F3136',
      'dcfundo2' : '#42454A',
      'traco' : '#2D2F32',
      'dcfundo3': '#202225',
      'textColor' : '#8E9297',
      'textWhite' : '#fff',
      'textHover' : '#393C43',
      'fundo3' : '#36393F'
    }
  },
  plugins: [],
  
}
