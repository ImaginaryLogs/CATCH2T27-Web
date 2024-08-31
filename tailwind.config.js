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
      }
    },
  },
  plugins: [],
}

