import { backIn } from 'svelte/easing';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,svelte,js,ts}'],
  // brand book reference
  // https://www.canva.com/design/DAF5Ty7YwNw/QmerhPgZ7F0L3jE3NuXPLg/edit
  theme: {
    extend: {
      colors: {
        "cream": "#FDE9DF",
        "light-purple": "#E3BCD8",
        "purple": "#743E79",
        "dark-purple": "#200D32",
        "black": "#0F1315",
      },
    },
    fontFamily: {
      'head': ['Ubuntu Bold', 'sans-serif'],
      'subhead': ['Ubuntu Medium', 'sans-serif'],
      'subtitle': ['Ubuntu Italic', 'sans-serif'],
      'subtitle-bold': ['Ubuntu Bold Italic', 'sans-serif'],
      'body': ['Ubuntu', 'sans-serif'],
    },

    keyframes: {
      pan_right: {
        '0%': { backgroundPosition: '0% 0%'},
        '100%': { backgroundPosition: '100% 0%'},
      },
      pan_left: {
        '0%': { backgroundPosition: '100% 0%'},
        '100%': { backgroundPosition: '0% 0%'},
      },
      pan_down_right: {
        '0%': {backgroundPosition: '0% 0%'},
        '100%': {backgroundPosition: '100% 100%'},
      }
    },
    animation: {
      'pan-right': 'pan_right 60s linear infinite',
      'pan-down-right': 'pan_down_right 60s linear infinite',
      'pan-left': 'pan_left 60s linear infinite'
    },
   
  },
  plugins: [],
}

