/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'pink-dark': '#E86AA7',
        'pink-light': '#FFA8DC',
        'violet-dark': '#8B73FF',
        'violet-light': '#F8EAFF',
        'white': '#FFFFFF',
      },
      fontFamily: {
        'work-sans': ['Work Sans', 'sans-serif']
      },
    screens: {
      md: "768px",
      lg: "1024px",
      xl: "1600px",
    },
      spacing: {
        '52': '52px',
        '120': '120px',
        '272': '272px',
        '450': '450px',
        '768': '768px',
        '1366': '1366px',
      }
    },
  },
  plugins: [],
}


