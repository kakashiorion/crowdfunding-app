/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rajdhani', 'Inter', ...defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      lg: '768px',
      xl: '1280px',
    },
    fontSize: {
      h1: ['62px', '64px'],
      h2: ['52px', '56px'],
      h3: ['42px', '48px'],
      h4: ['34px', '40px'],
      h5: ['28px', '36px'],
      h6: ['24px', '32px'],
      h7: ['20px', '28px'],
      b1: ['16px', '24px'],
      b2: ['14px', '20px'],
      b3: ['12px', '16px'],
      b4: ['10px', '16px'],
    },
    backgroundColor: ({ theme }) => theme('colors'),
    colors: {
      black: {
        DEFAULT: '#0f0f0f',
        l1: '#191919',
        l2: '#323232',
        l3: '#4b4b4b',
        l4: '#646464',
        l5: '#757575',
      },
      white: {
        DEFAULT: '#ffffff',
        d1: '#ebebeb',
        d2: '#d7d7d7',
        d3: '#c3c3c3',
        d4: '#afafaf',
        d5: '#9b9b9b',
      },
      primary: {
        l3: '#e4dbff',
        l2: '#c3b2f0',
        l1: '#8d74d8',
        d1: '#7352cb',
        d2: '#5321de',
        d3: '#2d00a8',
      },
      secondary: {
        l3: '#d8e47c',
        l2: '#abc828',
        l1: '#778924',
        d1: '#5e7000',
        d2: '#455700',
        d3: '#2b3500',
      },
      tertiary: {
        l3: '#c3e3f4',
        l2: '#7dc5e3',
        l1: '#1a8cbc',
        d1: '#11729B',
        d2: '#095677',
        d3: '#00364d',
      },
      success: {
        l3: '#88f2b9',
        l2: '#18d871',
        l1: '#119750',
        d1: '#117943',
        d2: '#0b5b30',
        d4: '#003c1d',
      },
      error: {
        l3: '#ffd6d7',
        l2: '#fca6aa',
        l1: '#df585f',
        d1: '#d11a23',
        d2: '#a50910',
        d3: '#6b0005',
      },
      warn: {
        l3: '#eedca5',
        l2: '#dbb951',
        l1: '#a07f1c',
        d1: '#846606',
        d2: '#624c04',
        d3: '#403100',
      },
      transparent: 'transparent',
      current: 'currentColor',
      inherit: 'inheritColor',
    },
    spacing: {
      0: '0px',
      0.5: '2px',
      1: '4px',
      1.5: '6px',
      2: '8px',
      2.5: '10px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '32px',
      8: '40px',
      9: '48px',
      10: '64px',
      11: '80px',
      12: '96px',
      13: '128px',
      14: '160px',
      15: '192px',
      16: '256px',
      17: '320px',
      18: '384px',
      19: '512px',
      20: '640px',
    },
  },
  plugins: [],
}
